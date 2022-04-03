// Getting access to the html.
const detailsList = document.querySelector("#detailsList");
const specialPackaging = document.querySelector("#specialPackaging");
const hazardousMaterials = document.querySelector("#hazardousMaterials");
const smallItemsOnly = document.querySelector("#smallItemsOnly");
const forkLiftNeeded = document.querySelector("#forkLiftNeeded");
const orderDetailsDiv = document.querySelector("#orderDetails");
const totalSumOfItems = document.getElementById("totalItems");

const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element

// create a table with header for better data visualisation.


const createTableHeaders = (elementToAppend) => {
    const dataTableElement = document.createElement("table");
    dataTableElement.innerHTML = `
        <thead>
            <tr>
            <th>Item No</th>
            <th>Item Location</th>
            <th>Check Box</th>
            <th>Quantity</th>
            <th>Item Part Number</th>
            <th>Item Description</th>
            </tr>
        </thead> `;
    dataTableElement.append(elementToAppend);  
    orderDetailsDiv.insertBefore(dataTableElement, detailsList);
};



const createTableBody = () => {
    let tBodyElement = document.createElement("tbody");
    //looping throuhg the parts array and creating a dynamic td for the table.
    parts.forEach( part => {
        let trElement = document.createElement("tr");
        const checkBoxElement = document.createElement("input");
        checkBoxElement.className = "checkboxElement";
        checkBoxElement.type = "checkbox";
        trElement.innerHTML = `
                <td>${parts.indexOf(part) + 1}</td>
                <td>${part.aisle}</td>
                <td>${part.qty}</td>
                <td>${part.partNbr}</td>
                <td>${part.partDescr}</td>
                `;
            tBodyElement.append(trElement);
            trElement.children[1].insertAdjacentElement("afterend", checkBoxElement); 
        });
        createTableHeaders(tBodyElement);
};
createTableBody();



const forkLiftMaterialFunction = () => {
    let forkLiftNeededArray = parts.filter( (element) => {
        return element.aisle != B3 && element.aisle != J4 && element.aisle != H1
        });
        forkLiftNeededArray.forEach( (element) => {
            let pTagForSummary = document.createElement("p");
            pTagForSummary.className = "materialText";
            pTagForSummary.innerText = `
            Location: ${element.aisle} / ${element.partNbr}/ QTY: ${element.qty}
            `;
            forkLiftNeeded.append(pTagForSummary);
        });
};

// USING THESE VARIABLES.
const B3 = "B3"; // Special packaging aisle.
const J4 = "J4"; // Hazardous material aisle.
const H1 = "H1"; // Small items aisle.

const packagingMainFunction = (aisleNumberString) => {
        
        const aisleDictionary = {
            B3: specialPackaging,
            J4: hazardousMaterials,
            H1: smallItemsOnly
        }
        let filteredArray = parts.filter((arrayElement) => {
            return arrayElement.aisle === aisleNumberString;
        });

        filteredArray.forEach( (element) => {
            let materialText = document.createElement("p");
                materialText.className = "materialText";
                materialText.innerText = `
                Location: ${element.aisle} / ${element.partNbr}/ QTY: ${element.qty}
                `;
            aisleDictionary[element.aisle].append(materialText);
        });
};

const specialPackagingFunction = () => {
    packagingMainFunction(B3);

};



// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
const hazardousPackagingFunction = () => {
    packagingMainFunction(J4);
};



// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
const smallItemsPackagingFunction = () => {
    packagingMainFunction(H1);
};



// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element

const forkLiftPackagingFunction = () => {
    forkLiftMaterialFunction();
};

// sum up the total number of parts and append that number to the text already in "totalItems" element
const displayTotalOfItems = () => {
    const qtyNumbers = parts.map(part => part.qty);
    totalSumOfItems.innerHTML += qtyNumbers.reduce((prevValue, currValue) => {
        return prevValue + currValue;
    },0);
};


specialPackagingFunction();
hazardousPackagingFunction();
smallItemsPackagingFunction();
forkLiftPackagingFunction();
displayTotalOfItems();