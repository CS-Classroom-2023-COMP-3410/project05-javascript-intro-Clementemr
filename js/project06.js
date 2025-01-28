// Element data
const elements = [ // Element data
    { atomicNumber: 1, symbol: "H", name: "Hydrogen", group: "Nonmetals" },
    { atomicNumber: 2, symbol: "He", name: "Helium", group: "Noble Gases" },
    { atomicNumber: 3, symbol: "Li", name: "Lithium", group: "Alkali Metals" },
    { atomicNumber: 4, symbol: "Be", name: "Beryllium", group: "Alkaline Earth Metals" },
    { atomicNumber: 5, symbol: "B", name: "Boron", group: "Metalloids" },
    { atomicNumber: 6, symbol: "C", name: "Carbon", group: "Nonmetals" },
    { atomicNumber: 7, symbol: "N", name: "Nitrogen", group: "Nonmetals" },
    { atomicNumber: 8, symbol: "O", name: "Oxygen", group: "Nonmetals" },
    { atomicNumber: 9, symbol: "F", name: "Fluorine", group: "Halogens" },
    { atomicNumber: 10, symbol: "Ne", name: "Neon", group: "Noble Gases" },
    { atomicNumber: 11, symbol: "Na", name: "Sodium", group: "Alkali Metals" },
    { atomicNumber: 12, symbol: "Mg", name: "Magnesium", group: "Alkaline Earth Metals" },
    { atomicNumber: 13, symbol: "Al", name: "Aluminum", group: "Post-Transition Metals" },
    { atomicNumber: 14, symbol: "Si", name: "Silicon", group: "Metalloids" },
    { atomicNumber: 15, symbol: "P", name: "Phosphorus", group: "Nonmetals" },
    { atomicNumber: 16, symbol: "S", name: "Sulfur", group: "Nonmetals" },
    { atomicNumber: 17, symbol: "Cl", name: "Chlorine", group: "Halogens" },
    { atomicNumber: 18, symbol: "Ar", name: "Argon", group: "Noble Gases" },
    { atomicNumber: 19, symbol: "K", name: "Potassium", group: "Alkali Metals" },
    { atomicNumber: 20, symbol: "Ca", name: "Calcium", group: "Alkaline Earth Metals" },
    { atomicNumber: 21, symbol: "Sc", name: "Scandium", group: "Transition Metals" },
    { atomicNumber: 22, symbol: "Ti", name: "Titanium", group: "Transition Metals" },
    { atomicNumber: 23, symbol: "V", name: "Vanadium", group: "Transition Metals" },
    { atomicNumber: 24, symbol: "Cr", name: "Chromium", group: "Transition Metals" },
    { atomicNumber: 25, symbol: "Mn", name: "Manganese", group: "Transition Metals" },
    { atomicNumber: 26, symbol: "Fe", name: "Iron", group: "Transition Metals" },
    { atomicNumber: 27, symbol: "Co", name: "Cobalt", group: "Transition Metals" },
    { atomicNumber: 28, symbol: "Ni", name: "Nickel", group: "Transition Metals" },
    { atomicNumber: 29, symbol: "Cu", name: "Copper", group: "Transition Metals" },
    { atomicNumber: 30, symbol: "Zn", name: "Zinc", group: "Transition Metals" },
    { atomicNumber: 31, symbol: "Ga", name: "Gallium", group: "Post-Transition Metals" },
    { atomicNumber: 32, symbol: "Ge", name: "Germanium", group: "Metalloids" },
    { atomicNumber: 33, symbol: "As", name: "Arsenic", group: "Metalloids" },
    { atomicNumber: 34, symbol: "Se", name: "Selenium", group: "Nonmetals" },
    { atomicNumber: 35, symbol: "Br", name: "Bromine", group: "Halogens" },
    { atomicNumber: 36, symbol: "Kr", name: "Krypton", group: "Noble Gases" },
    { atomicNumber: 37, symbol: "Rb", name: "Rubidium", group: "Alkali Metals" },
    { atomicNumber: 38, symbol: "Sr", name: "Strontium", group: "Alkaline Earth Metals" },
    { atomicNumber: 39, symbol: "Y", name: "Yttrium", group: "Transition Metals" },
    { atomicNumber: 40, symbol: "Zr", name: "Zirconium", group: "Transition Metals" },
    { atomicNumber: 41, symbol: "Nb", name: "Niobium", group: "Transition Metals" },
    { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", group: "Transition Metals" },
    { atomicNumber: 43, symbol: "Tc", name: "Technetium", group: "Transition Metals" },
    { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", group: "Transition Metals" },
    { atomicNumber: 45, symbol: "Rh", name: "Rhodium", group: "Transition Metals" },
    { atomicNumber: 46, symbol: "Pd", name: "Palladium", group: "Transition Metals" },
    { atomicNumber: 47, symbol: "Ag", name: "Silver", group: "Transition Metals" },
    { atomicNumber: 48, symbol: "Cd", name: "Cadmium", group: "Transition Metals" },
    { atomicNumber: 49, symbol: "In", name: "Indium", group: "Post-Transition Metals" },
    { atomicNumber: 50, symbol: "Sn", name: "Tin", group: "Post-Transition Metals" },
    { atomicNumber: 51, symbol: "Sb", name: "Antimony", group: "Metalloids" },
    { atomicNumber: 52, symbol: "Te", name: "Tellurium", group: "Metalloids" },
    { atomicNumber: 53, symbol: "I", name: "Iodine", group: "Halogens" },
    { atomicNumber: 54, symbol: "Xe", name: "Xenon", group: "Noble Gases" },
    { atomicNumber: 55, symbol: "Cs", name: "Cesium", group: "Alkali Metals" },
    { atomicNumber: 56, symbol: "Ba", name: "Barium", group: "Alkaline Earth Metals" },
    { atomicNumber: 57, symbol: "La", name: "Lanthanum", group: "Lanthanides" },
    { atomicNumber: 58, symbol: "Ce", name: "Cerium", group: "Lanthanides" },
    { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", group: "Lanthanides" },
    { atomicNumber: 60, symbol: "Nd", name: "Neodymium", group: "Lanthanides" },
    { atomicNumber: 61, symbol: "Pm", name: "Promethium", group: "Lanthanides" },
    { atomicNumber: 62, symbol: "Sm", name: "Samarium", group: "Lanthanides" },
    { atomicNumber: 63, symbol: "Eu", name: "Europium", group: "Lanthanides" },
    { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", group: "Lanthanides" },
    { atomicNumber: 65, symbol: "Tb", name: "Terbium", group: "Lanthanides" },
    { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", group: "Lanthanides" },
    { atomicNumber: 67, symbol: "Ho", name: "Holmium", group: "Lanthanides" },
    { atomicNumber: 68, symbol: "Er", name: "Erbium", group: "Lanthanides" },
    { atomicNumber: 69, symbol: "Tm", name: "Thulium", group: "Lanthanides" },
    { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", group: "Lanthanides" },
    { atomicNumber: 71, symbol: "Lu", name: "Lutetium", group: "Lanthanides" },
    { atomicNumber: 72, symbol: "Hf", name: "Hafnium", group: "Transition Metals" },
    { atomicNumber: 73, symbol: "Ta", name: "Tantalum", group: "Transition Metals" },
    { atomicNumber: 74, symbol: "W", name: "Tungsten", group: "Transition Metals" },
    { atomicNumber: 75, symbol: "Re", name: "Rhenium", group: "Transition Metals" },
    { atomicNumber: 76, symbol: "Os", name: "Osmium", group: "Transition Metals" },
    { atomicNumber: 77, symbol: "Ir", name: "Iridium", group: "Transition Metals" },
    { atomicNumber: 78, symbol: "Pt", name: "Platinum", group: "Transition Metals" },
    { atomicNumber: 79, symbol: "Au", name: "Gold", group: "Transition Metals" },
    { atomicNumber: 80, symbol: "Hg", name: "Mercury", group: "Transition Metals" },
    { atomicNumber: 81, symbol: "Tl", name: "Thallium", group: "Post-Transition Metals" },
    { atomicNumber: 82, symbol: "Pb", name: "Lead", group: "Post-Transition Metals" },
    { atomicNumber: 83, symbol: "Bi", name: "Bismuth", group: "Post-Transition Metals" },
    { atomicNumber: 84, symbol: "Po", name: "Polonium", group: "Post-Transition Metals" },
    { atomicNumber: 85, symbol: "At", name: "Astatine", group: "Metalloids" },
    { atomicNumber: 86, symbol: "Rn", name: "Radon", group: "Noble Gases" },
    { atomicNumber: 87, symbol: "Fr", name: "Francium", group: "Alkali Metals" },
    { atomicNumber: 88, symbol: "Ra", name: "Radium", group: "Alkaline Earth Metals" },
    { atomicNumber: 89, symbol: "Ac", name: "Actinium", group: "Actinides" },
    { atomicNumber: 90, symbol: "Th", name: "Thorium", group: "Actinides" },
    { atomicNumber: 91, symbol: "Pa", name: "Protactinium", group: "Actinides" },
    { atomicNumber: 92, symbol: "U", name: "Uranium", group: "Actinides" },
    { atomicNumber: 93, symbol: "Np", name: "Neptunium", group: "Actinides" },
    { atomicNumber: 94, symbol: "Pu", name: "Plutonium", group: "Actinides" },
    { atomicNumber: 95, symbol: "Am", name: "Americium", group: "Actinides" },
    { atomicNumber: 96, symbol: "Cm", name: "Curium", group: "Actinides" },
    { atomicNumber: 97, symbol: "Bk", name: "Berkelium", group: "Actinides" },
    { atomicNumber: 98, symbol: "Cf", name: "Californium", group: "Actinides" },
    { atomicNumber: 99, symbol: "Es", name: "Einsteinium", group: "Actinides" },
    { atomicNumber: 100, symbol: "Fm", name: "Fermium", group: "Actinides" },
    { atomicNumber: 101, symbol: "Md", name: "Mendelevium", group: "Actinides" },
    { atomicNumber: 102, symbol: "No", name: "Nobelium", group: "Actinides" },
    { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", group: "Actinides" },
    { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", group: "Transition Metals" },
    { atomicNumber: 105, symbol: "Db", name: "Dubnium", group: "Transition Metals" },
    { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", group: "Transition Metals" },
    { atomicNumber: 107, symbol: "Bh", name: "Bohrium", group: "Transition Metals" },
    { atomicNumber: 108, symbol: "Hs", name: "Hassium", group: "Transition Metals" },
    { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", group: "Transition Metals" },
    { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", group: "Transition Metals" },
    { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", group: "Transition Metals" },
    { atomicNumber: 112, symbol: "Cn", name: "Copernicium", group: "Transition Metals" },
    { atomicNumber: 113, symbol: "Nh", name: "Nihonium", group: "Post-Transition Metals" },
    { atomicNumber: 114, symbol: "Fl", name: "Flerovium", group: "Post-Transition Metals" },
    { atomicNumber: 115, symbol: "Mc", name: "Moscovium", group: "Post-Transition Metals" },
    { atomicNumber: 116, symbol: "Lv", name: "Livermorium", group: "Post-Transition Metals" },
    { atomicNumber: 117, symbol: "Ts", name: "Tennessine", group: "Halogens" },
    { atomicNumber: 118, symbol: "Og", name: "Oganesson", group: "Noble Gases" }
];

const periodicTable = document.getElementById("periodic-table"); // Periodic table container
const searchBar = document.getElementById("search-bar"); // Search bar
const resetButton = document.getElementById("reset-button"); // Reset button
const elementDetails = document.getElementById("element-details"); // Element details

// Render periodic table
elements.forEach(element => { // Loop through each element
    const elementDiv = document.createElement("div"); // Create a div element
    elementDiv.classList.add("element"); // Add the element class
    elementDiv.textContent = element.symbol; // Set the element symbol
    elementDiv.dataset.atomicNumber = element.atomicNumber; // Set the atomic number
    elementDiv.dataset.group = element.group;   // Set the element group
    elementDiv.dataset.name = element.name; // Set the element name

    elementDiv.addEventListener("click", () => {
        highlightElement(elementDiv, element); // Highlight the selected element
    });

    periodicTable.appendChild(elementDiv);  // Add the element to the periodic table
});

// Highlight selected element and its group
function highlightElement(selectedElement, elementData) {
    clearHighlights();  // Clear all highlights

    selectedElement.classList.add("selected");
    document.querySelectorAll(`.element[data-group='${elementData.group}']`).forEach(groupElement => {  // Highlight the group
        groupElement.classList.add("group-highlight");  // Add the group-highlight class
    });

    elementDetails.textContent = `Name: ${elementData.name}, Symbol: ${elementData.symbol}, Atomic Number: ${elementData.atomicNumber}, Group: ${elementData.group}`;   // Display element details
}

// Clear all highlights
function clearHighlights() {
    document.querySelectorAll(".element").forEach(element => {  // Loop through each element
        element.classList.remove("selected", "group-highlight");    // Remove the selected and group-highlight classes
    });
}

// Search functionality
searchBar.addEventListener("input", (e) => {    // Add an input event listener
    const query = e.target.value.toLowerCase(); // Get the search query

    document.querySelectorAll(".element").forEach(element => {  // Loop through each element
        const name = element.dataset.name.toLowerCase();    // Get the element name 
        const symbol = element.dataset.symbol.toLowerCase();    // Get the element symbol
        const atomicNumber = element.dataset.atomicNumber;  // Get the atomic number

        if (    // Check if the search query matches the element name, symbol, or atomic number
            name.includes(query) || 
            symbol.includes(query) ||
            atomicNumber.includes(query)
        ) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});

// Reset button functionality
resetButton.addEventListener("click", () => {   // Add a click event listener
    searchBar.value = "";   // Clear the search bar
    document.querySelectorAll(".element").forEach(element => {  // Loop through each element
        element.style.display = "block";
    });
    clearHighlights();  // Clear all highlights
    elementDetails.textContent = "Click an element to see its details.";    // Reset element details
});
