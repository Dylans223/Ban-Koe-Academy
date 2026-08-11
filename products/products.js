const grid = document.getElementById("productGrid");
const search = document.getElementById("productSearch");
const familyFilter = document.getElementById("familyFilter");
const categoryFilter = document.getElementById("categoryFilter");
const familyList = document.getElementById("familyList");
const resultsSummary = document.getElementById("resultsSummary");
const productCountChip = document.getElementById("productCountChip");

let selectedFamily = "All";
let selectedCategory = "All";
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

function escapeHtml(text) {
    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function truncate(text, limit) {
    const value = String(text || "");
    if (value.length <= limit) return value;
    return value.slice(0, limit - 1) + "…";
}

function getCategoryTone(key) {
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

function createThumbnailDataUri(product) {
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

function getProductImage(product) {
    if (product.image && product.image.length > 0) {
        return product.image;
    }

    return createThumbnailDataUri(product);
}

function handleProductImageError(event, productId) {
    const target = event && event.target;

    if (!target) {
        return;
    }

    const product = productLibrary.products.find(item => item.id === productId);
    if (!product) {
        return;
    }

    target.onerror = null;
    target.src = createThumbnailDataUri(product);
}

window.getProductImage = getProductImage;
window.handleProductImageError = handleProductImageError;

function uniqueSorted(values) {
    return [...new Set(values)]
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));
}

function getManufacturers() {
    return uniqueSorted((productLibrary.manufacturers || []).map(item => item.name));
}

function getFamilies() {
    return uniqueSorted(productLibrary.products.map(product => product.family));
}

function getCategories() {
    return uniqueSorted(productLibrary.products.map(product => product.category));
}

function syncFilterControls() {
    const families = getFamilies();
    const categories = getCategories();

    familyFilter.innerHTML = "";
    const familyAllOption = document.createElement("option");
    familyAllOption.value = "All";
    familyAllOption.textContent = "All Families";
    familyFilter.appendChild(familyAllOption);
    families.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        familyFilter.appendChild(option);
    });
    familyFilter.value = selectedFamily;

    categoryFilter.innerHTML = "";
    const categoryAllOption = document.createElement("option");
    categoryAllOption.value = "All";
    categoryAllOption.textContent = "All Categories";
    categoryFilter.appendChild(categoryAllOption);
    categories.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        categoryFilter.appendChild(option);
    });
    categoryFilter.value = selectedCategory;
}

function renderFamilyList() {
    const families = getFamilies();
    familyList.innerHTML = "";

    const allButton = document.createElement("button");
    allButton.type = "button";
    allButton.className = "explorer-item";
    allButton.textContent = "All Families";
    allButton.onclick = () => {
        selectedFamily = "All";
        selectedProductId = null;
        refreshExplorer();
    };
    if (selectedFamily === "All") {
        allButton.classList.add("active");
    }
    familyList.appendChild(allButton);

    families.forEach(name => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "explorer-item";
        button.textContent = name;
        if (selectedFamily === name) {
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

function getFilteredProducts() {
    const text = search.value.trim().toLowerCase();

    return productLibrary.products.filter(product => {
        if (selectedFamily !== "All" && product.family !== selectedFamily) {
            return false;
        }

        if (selectedCategory !== "All" && product.category !== selectedCategory) {
            return false;
        }

        if (text.length === 0) {
            return true;
        }

        const searchText = [
            product.model,
            product.manufacturer,
            product.family,
            product.category,
            product.series,
            product.officialDescription,
            product.plainEnglish,
            ...(product.keywords || []),
            ...(product.features || [])
        ].join(" ").toLowerCase();

        return searchText.includes(text);
    });
}

function updateResultsMeta(products) {
    const total = productLibrary.products.length;
    const label = products.length === 1 ? "product" : "products";
    if (resultsSummary) {
        resultsSummary.textContent = `Showing ${products.length} of ${total} ${label}`;
    }
    if (productCountChip) {
        productCountChip.textContent = `${products.length} ${label}`;
    }
}

function renderProducts() {
    const products = getFilteredProducts();
    updateResultsMeta(products);
    grid.innerHTML = "";

    products.forEach(product => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "explorer-item productCard";
        item.setAttribute("aria-label", product.model);
        if (selectedProductId === product.id) {
            item.classList.add("active");
        }

        item.innerHTML = `
            <div class="product-card-top">
                <img class="product-thumb" src="${getProductImage(product)}" alt="${escapeHtml(product.model)} image" onerror="window.handleProductImageError(event, ${product.id})">
                <div class="product-card-copy">
                    <div class="product-card-model">${escapeHtml(product.model)}</div>
                    <div class="product-card-name">${escapeHtml(product.category || "Verified product")}</div>
                    <div class="product-card-meta">
                        <span class="product-chip">${escapeHtml(product.manufacturer || "Manufacturer")}</span>
                        <span class="product-chip">${escapeHtml(product.family || "Family")}</span>
                    </div>
                </div>
            </div>
            <div class="product-card-footer">
                <p>${escapeHtml(truncate(product.officialDescription || product.plainEnglish || "Verified product description", 120))}</p>
                <span class="product-link">View Product →</span>
            </div>
        `;

        item.onclick = () => {
            selectedProductId = product.id;
            renderProducts();
            openProduct(product.id);
        };

        grid.appendChild(item);
    });

    if (products.length === 0) {
        const empty = document.createElement("div");
        empty.className = "explorer-empty";
        empty.innerHTML = "<strong>No products found.</strong><p>Try searching by part number, product family, or category.</p>";
        grid.appendChild(empty);
    }
}

function setupListKeyboardNavigation(container) {
    if (!container) {
        return;
    }

    container.addEventListener("keydown", event => {
        const items = [...container.querySelectorAll(".explorer-item")];
        if (items.length === 0) {
            return;
        }

        const activeElement = document.activeElement;
        const index = items.indexOf(activeElement);

        if (event.key === "ArrowDown") {
            event.preventDefault();
            const target = items[Math.min(index + 1, items.length - 1)] || items[0];
            target.focus();
            return;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            const target = items[Math.max(index - 1, 0)] || items[0];
            target.focus();
            return;
        }

        if (event.key === "Home") {
            event.preventDefault();
            items[0].focus();
            return;
        }

        if (event.key === "End") {
            event.preventDefault();
            items[items.length - 1].focus();
        }
    });
}

function refreshExplorer() {
    syncFilterControls();
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

categoryFilter.addEventListener("change", () => {
    selectedCategory = categoryFilter.value;
    selectedProductId = null;
    refreshExplorer();
});

function filterQuestionsForProduct(pool, product) {
    if (!product || !Array.isArray(pool)) {
        return pool || [];
    }

    const searchTerms = [
        product.model,
        product.manufacturer,
        product.family,
        product.category,
        product.series
    ].filter(Boolean).map(value => String(value).toLowerCase());

    return pool.filter(question => {
        const haystack = [
            question.product,
            question.question,
            question.explanation,
            question.answers,
            question.category,
            question.uid
        ].filter(Boolean).join(" ").toLowerCase();

        return searchTerms.some(term => haystack.includes(term));
    });
}

window.filterQuestionsForProduct = filterQuestionsForProduct;

setupListKeyboardNavigation(familyList);
setupListKeyboardNavigation(grid);

refreshExplorer();

const params = new URLSearchParams(window.location.search);
const productFromQuery = Number(params.get("id") || params.get("productId"));

if (Number.isFinite(productFromQuery) && productFromQuery > 0) {
    const target = productLibrary.products.find(product => product.id === productFromQuery);
    if (target) {
        selectedFamily = target.family;
        selectedProductId = target.id;
        refreshExplorer();
        openProduct(target.id);
    }
}
