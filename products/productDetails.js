// ===============================================
// Ban-Koe Academy
// Product Details
// ===============================================

let currentProduct = null;

const detailPage = document.getElementById("productDetailPage");
const detailGrid = document.getElementById("detailGrid");
const detailEmptyState = document.getElementById("detailEmptyState");
const practiceProductButton = document.getElementById("practiceProductButton");
const fallbackImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22640%22%20height%3D%22360%22%20viewBox%3D%220%200%20640%20360%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23182B47%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230B1220%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width%3D%22640%22%20height%3D%22360%22%20fill%3D%22url(%23g)%22%20rx%3D%2224%22/%3E%3Ctext%20x%3D%22320%22%20y%3D%22190%22%20text-anchor%3D%22middle%22%20font-family%3D%22Segoe%20UI%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2230%22%20fill%3D%22%23D5E8FF%22%3EProduct%20Image%3C/text%3E%3C/svg%3E";

function escapeHtml(text) {
    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function setDetailVisibility(show) {
    if (detailGrid) {
        detailGrid.classList.toggle("hidden", !show);
    }
    if (detailEmptyState) {
        detailEmptyState.classList.toggle("hidden", show);
    }
}

function openProduct(id) {
    currentProduct = productLibrary.products.find(p => p.id === id);
    if (!currentProduct) {
        setDetailVisibility(false);
        if (detailEmptyState) {
            detailEmptyState.innerHTML = '<h2>Product not found.</h2><p><a href="../products/index.html">Back to Products</a></p>';
            detailEmptyState.classList.remove("hidden");
        }
        return;
    }

    setDetailVisibility(true);
    loadProduct(currentProduct);
}

function loadProduct(product) {
    document.getElementById("detailModel").innerText = product.model || "Product";
    document.getElementById("detailModelCode").innerText = product.partNumber || "Part number unavailable";
    document.getElementById("detailManufacturer").innerText = product.manufacturer || "Manufacturer unavailable";
    document.getElementById("detailHeaderMeta").innerText = product.family || product.category || "Details unavailable";
    document.getElementById("detailVerification").innerText = product.verification || "PENDING";
    document.getElementById("detailFamilyBadge").innerText = product.family || product.category || "Family";
    document.getElementById("detailDescription").innerText = product.officialDescription || product.plainEnglish || "No official description available.";

    const image = document.getElementById("detailImage");
    const imageResolver = window.getProductImage;
    if (typeof imageResolver === "function") {
        image.src = imageResolver(product);
    } else if (product.image && product.image.length > 0) {
        image.src = product.image;
    } else {
        image.src = fallbackImage;
    }

    image.onerror = function () {
        image.onerror = null;
        image.src = fallbackImage;
    };

    const sourceElement = document.getElementById("detailSource");
    if (sourceElement) {
        if (product.sourceURL) {
            sourceElement.innerHTML = `<a href="${product.sourceURL}" target="_blank" rel="noopener noreferrer">${escapeHtml(product.source || "Verified source")}</a>`;
        } else {
            sourceElement.textContent = product.source || "Verified source";
        }
    }

    if (practiceProductButton) {
        practiceProductButton.onclick = () => {
            if (Array.isArray(product.quizQuestions) && product.quizQuestions.length > 0) {
                window.location.href = "../quiz/index.html?category=product-recognition";
            } else {
                window.location.href = "../quiz/index.html?category=product-recognition";
            }
        };
    }
}

function closeProduct() {
    setDetailVisibility(false);
}

window.openProductByName = function (name) {
    const target = productLibrary.products.find(product => product.model === name || product.id === Number(name));
    if (target) {
        openProduct(target.id);
    }
};

window.openProduct = openProduct;

window.addEventListener("DOMContentLoaded", () => {
    setDetailVisibility(false);

    const params = new URLSearchParams(window.location.search);
    const productFromQuery = Number(params.get("id") || params.get("productId"));

    if (Number.isFinite(productFromQuery) && productFromQuery > 0) {
        const target = productLibrary.products.find(product => product.id === productFromQuery);
        if (target) {
            openProduct(target.id);
        } else {
            openProduct(productFromQuery);
        }
    }
});
