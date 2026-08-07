// ===============================================
// Ban-Koe Academy
// Product Details
// ===============================================

let currentProduct = null;

const detailPage =
document.getElementById("productDetailPage");

const fallbackImage =
"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22640%22%20height%3D%22360%22%20viewBox%3D%220%200%20640%20360%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23182B47%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230B1220%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width%3D%22640%22%20height%3D%22360%22%20fill%3D%22url(%23g)%22%20rx%3D%2224%22/%3E%3Ctext%20x%3D%22320%22%20y%3D%22190%22%20text-anchor%3D%22middle%22%20font-family%3D%22Segoe%20UI%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2230%22%20fill%3D%22%23D5E8FF%22%3EProduct%20Image%3C/text%3E%3C/svg%3E";

function openProduct(id){

    currentProduct =
    productLibrary.products.find(
        p => p.id === id
    );

    if(!currentProduct){
        return;
    }

    detailPage.classList.remove("hidden");

    loadProduct(currentProduct);

}

function loadProduct(product){

    document.getElementById("detailModel").innerText =
    product.model;

    document.getElementById("detailManufacturer").innerText =
    product.manufacturer;

    document.getElementById("detailCategory").innerText =
    product.category || "Category not available.";

    document.getElementById("detailVerification").innerText =
    product.verification;

    document.getElementById("detailDescription").innerText =
    product.officialDescription || "No official description available.";

    document.getElementById("detailHowItWorks").innerText =
    product.howItWorks || "No operation notes available.";

    loadFeatureList(product.features || []);

    loadMistakeList(product.commonMistakes || []);

    const image =
    document.getElementById("detailImage");

    const imageResolver =
    window.getProductImage;

    if(typeof imageResolver === "function"){
        image.src = imageResolver(product);
    }
    else if(product.image && product.image.length > 0){
        image.src = product.image;
    }
    else{
        image.src = fallbackImage;
    }

    image.onerror = function(){
        image.onerror = null;
        image.src = fallbackImage;
    };

}

function loadFeatureList(features){

    const list =
    document.getElementById("detailFeatures");

    list.innerHTML="";

    features.forEach(feature=>{

        const li =
        document.createElement("li");

        li.innerText = feature;

        list.appendChild(li);

    });

}

function loadMistakeList(mistakes){

    const list =
    document.getElementById("detailMistakes");

    list.innerHTML="";

    mistakes.forEach(mistake=>{

        const li =
        document.createElement("li");

        li.innerText = mistake;

        list.appendChild(li);

    });

}

function closeProduct(){
    detailPage.classList.add("hidden");

}
