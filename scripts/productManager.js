// =========================================
// PRODUCT MANAGER
// =========================================

let currentProduct = null;

function getProduct(id){

    return productLibrary.products.find(
        p=>p.id===id
    );

}

function markViewed(product){

    if(!product.progress){
        product.progress = {};
    }

    product.progress.viewed=true;

    product.progress.timesViewed++;

    product.progress.lastViewed=new Date();

    saveProductProgress();

}

function favoriteProduct(product){

    if(!product.progress){
        product.progress = {};
    }

    product.progress.favorite =
    !product.progress.favorite;

    saveProductProgress();

}

function saveProductProgress(){

    localStorage.setItem(

        "bkProducts",

        JSON.stringify(productLibrary.products)

    );

}

function loadProductProgress(){

    let saved =

    localStorage.getItem("bkProducts");

    if(saved){

        let parsed = JSON.parse(saved);

        productLibrary.products =
        parsed.map(product => ({
            ...product,
            progress: product.progress || {
                viewed:false,
                mastered:false,
                favorite:false,
                timesViewed:0,
                timesStudied:0,
                timesQuizzed:0,
                correctAnswers:0,
                incorrectAnswers:0,
                lastViewed:null
            }
        }));

    }

}

function hideAllPages(){

    document
    .querySelectorAll(".page")
    .forEach(page=>page.classList.add("hidden"));

}

function showProductPage(product){

    hideAllPages();

    productDetailPage.classList.remove("hidden");

    detailModel.innerText =
        product.model;

    detailManufacturer.innerText =
        product.manufacturer;

    detailVerification.innerText =
        product.verification;

    detailDescription.innerText =
        product.officialDescription;

    detailHowItWorks.innerText =
        product.howItWorks || "";

    loadList(
        "detailFeatures",
        product.features
    );

    loadList(
        "detailMistakes",
        product.commonMistakes || []
    );

    document
        .getElementById("datasheetButton")
        .onclick = function(){

            window.open(
                product.sourceURL,
                "_blank"
            );

        };

}

function loadList(id,data){

    const list =

    document.getElementById(id);

    list.innerHTML="";

    if(!data) return;

    data.forEach(item=>{

        const li =

        document.createElement("li");

        li.innerText=item;

        li.className="relatedItem";

        li.onclick=()=>{

            let related =

            productLibrary.products.find(

            p=>

            p.model===item ||

            p.category===item

            );

            if(related){

                learnProduct(related.id);

            }

        };

        list.appendChild(li);

    });

}

function backToProducts(){

    hideAllPages();

    productsPage.classList.remove("hidden");

}

function favoriteCurrentProduct(){

    if(!currentProduct) return;

    favoriteProduct(currentProduct);

    const favoriteButton =
    document.getElementById("favoriteButton");

    if(favoriteButton){

        favoriteButton.innerText =
        currentProduct.progress.favorite

        ?

        "⭐ Favorited"

        :

        "☆ Favorite";

    }

}

function quizCurrentProduct(){

    alert(

    "Future Version\n\n"+

    "We'll launch a quiz specifically for:\n"+

    currentProduct.model

    );

}

const productDetailPage =
document.getElementById("productDetailPage");

const productsPage =
document.getElementById("productsPage");

const detailModel =
document.getElementById("detailModel");

const detailManufacturer =
document.getElementById("detailManufacturer");

const detailVerification =
document.getElementById("detailVerification");

const detailDescription =
document.getElementById("detailDescription");

const detailHowItWorks =
document.getElementById("detailHowItWorks");

const detailFeatures =
document.getElementById("detailFeatures");

const detailMistakes =
document.getElementById("detailMistakes");

loadProductProgress();
