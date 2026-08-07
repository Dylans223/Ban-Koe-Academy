const grid =
document.getElementById("productGrid");

const search =
document.getElementById("productSearch");

const familyFilter =
document.getElementById("familyFilter");

const familyList =
document.getElementById("familyList");

let selectedFamily = "All";
let selectedProductId = null;

const familyImageKeys = {
    "EST4": "control",
    "EST3": "control",
    "EST3X": "control",
    "iO Series": "small-system",
    "Edge Series": "panel",
    "Signature Series": "detector",
    "SIGA": "module",
    "Genesis": "notification"
};

function escapeHtml(text){
    return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getCategoryTone(key){
    const tones = {
        "control": { bg: "#0F2749", fg: "#BFD9FF", icon: "CP" },
        "small-system": { bg: "#123A2D", fg: "#C7F3E2", icon: "IO" },
        "panel": { bg: "#3B2A10", fg: "#FFE1B0", icon: "ED" },
        "detector": { bg: "#352043", fg: "#EACDFF", icon: "DT" },
        "module": { bg: "#3A1F1F", fg: "#FFCFCF", icon: "MD" },
        "notification": { bg: "#3B3313", fg: "#FFF0A8", icon: "NT" },
        "default": { bg: "#243347", fg: "#D9E4F1", icon: "PR" }
    };

    return tones[key] || tones.default;
}

function createThumbnailDataUri(product){
    const imageKey = familyImageKeys[product.family] || "default";
    const tone = getCategoryTone(imageKey);
    const title = escapeHtml(product.model);
    const family = escapeHtml(product.family);

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360" role="img" aria-label="${title}">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="${tone.bg}"/>
<stop offset="100%" stop-color="#0B1220"/>
</linearGradient>
</defs>
<rect width="640" height="360" fill="url(#g)" rx="24"/>
<circle cx="88" cy="92" r="50" fill="rgba(255,255,255,0.08)"/>
<text x="88" y="100" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="700" fill="${tone.fg}">${tone.icon}</text>
<text x="48" y="218" font-family="Segoe UI, Arial, sans-serif" font-size="20" fill="${tone.fg}" opacity="0.92">${family}</text>
<text x="48" y="256" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="700" fill="#F8FAFC">${title}</text>
</svg>`;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg.trim());
}

function getProductImage(product){
    if(product.image && product.image.length > 0){
        return product.image;
    }

    return createThumbnailDataUri(product);
}

function handleProductImageError(event, productId){
    const target = event && event.target;

    if(!target){
        return;
    }

    const product = productLibrary.products.find(
        item => item.id === productId
    );

    if(!product){
        return;
    }

    target.onerror = null;
    target.src = createThumbnailDataUri(product);
}

window.getProductImage = getProductImage;
window.handleProductImageError = handleProductImageError;

function uniqueSorted(values){
    return [...new Set(values)]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function getFamilies(){
    return uniqueSorted(
        productLibrary.products.map(product => product.family)
    );
}

function syncFamilyFilter(){
    const families = getFamilies();

    familyFilter.innerHTML = "";

    const allOption =
    document.createElement("option");
    allOption.value = "All";
    allOption.textContent = "All Families";
    familyFilter.appendChild(allOption);

    families.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        familyFilter.appendChild(option);
    });

    const familyExists =
    families.includes(selectedFamily);

    if(!familyExists){
        selectedFamily = "All";
    }

    familyFilter.value = selectedFamily;
}

function renderFamilyList(){
    const families = getFamilies();

    familyList.innerHTML = "";

    const allButton =
    document.createElement("button");
    allButton.type = "button";
    allButton.className = "explorer-item";
    allButton.textContent = "All Families";
    allButton.onclick = () => {
        selectedFamily = "All";
        selectedProductId = null;
        refreshExplorer();
    };

    if(selectedFamily === "All"){
        allButton.classList.add("active");
    }

    familyList.appendChild(allButton);

    families.forEach(name => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "explorer-item";
        button.textContent = name;

        if(selectedFamily === name){
            button.classList.add("active");
        }

        button.onclick = () => {
            selectedFamily = name;
            selectedProductId = null;
            refreshExplorer();
        };

        familyList.appendChild(button);
    });
}

function getFilteredProducts(){
    const text = search.value.trim().toLowerCase();

    return productLibrary.products.filter(product => {
        if(
            selectedFamily !== "All"
            &&
            product.family !== selectedFamily
        ){
            return false;
        }

        if(text.length === 0){
            return true;
        }

        const searchText = (
            product.manufacturer + " " +
            product.family + " " +
            product.category + " " +
            product.model
        ).toLowerCase();

        return searchText.includes(text);
    });
}

function renderProducts(){
    const products = getFilteredProducts();

    grid.innerHTML = "";

    products.forEach(product => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "explorer-item productCard";
        item.setAttribute("aria-label", product.model);

        if(selectedProductId === product.id){
            item.classList.add("active");
        }

        item.innerHTML = `
    <span class="product-row">
    <img class="product-thumb" src="${getProductImage(product)}" alt="${escapeHtml(product.model)} image" onerror="window.handleProductImageError(event, ${product.id})">
    <span class="product-copy">
    <span class="explorer-primary">${product.model}</span>
    <span class="product-meta-row">
    <span class="explorer-secondary product-chip">${product.family}</span>
    <span class="product-category product-chip">${product.category}</span>
    </span>
    </span>
    </span>
`;

        item.onclick = () => {
            selectedProductId = product.id;
            renderProducts();
            openProduct(product.id);
        };

        grid.appendChild(item);
    });

    if(products.length === 0){
        const empty = document.createElement("div");
        empty.className = "explorer-empty";
        empty.textContent = "No products match the current filters.";
        grid.appendChild(empty);
    }
}

function setupListKeyboardNavigation(container){
    if(!container){
        return;
    }

    container.addEventListener("keydown", event => {
        const items = [
            ...container.querySelectorAll(".explorer-item")
        ];

        if(items.length===0){
            return;
        }

        const activeElement = document.activeElement;
        const index = items.indexOf(activeElement);

        if(event.key === "ArrowDown"){
            event.preventDefault();
            const target = items[Math.min(index + 1, items.length - 1)] || items[0];
            target.focus();
            return;
        }

        if(event.key === "ArrowUp"){
            event.preventDefault();
            const target = items[Math.max(index - 1, 0)] || items[0];
            target.focus();
            return;
        }

        if(event.key === "Home"){
            event.preventDefault();
            items[0].focus();
            return;
        }

        if(event.key === "End"){
            event.preventDefault();
            items[items.length - 1].focus();
        }
    });
}

function refreshExplorer(){
    syncFamilyFilter();
    renderFamilyList();
    renderProducts();
}

search.addEventListener("input", () => {
    selectedProductId = null;
    renderProducts();
});

familyFilter.addEventListener("change", () => {
    selectedFamily = familyFilter.value;
    selectedProductId = null;
    refreshExplorer();
});

function quizProduct(id){
    window.location.href =
    "../quiz/index.html?productId=" + id;
}

setupListKeyboardNavigation(familyList);
setupListKeyboardNavigation(grid);

refreshExplorer();

const params = new URLSearchParams(window.location.search);
const productFromQuery = Number(params.get("id"));

if(Number.isFinite(productFromQuery) && productFromQuery > 0){
    const target = productLibrary.products.find(
        product => product.id === productFromQuery
    );

    if(target){
        selectedFamily = target.family;
        selectedProductId = target.id;
        refreshExplorer();
        openProduct(target.id);
    }
}
