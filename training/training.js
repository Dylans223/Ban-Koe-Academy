// ===============================================
// Ban-Koe Academy
// Training Center
// ===============================================

const manufacturerContainer =
document.getElementById("manufacturerContainer");

const familyContainer =
document.getElementById("familyContainer");

const productContainer =
document.getElementById("productContainer");

const trainingSearch =
document.getElementById("trainingSearch");

let selectedManufacturer = "";
let selectedFamily = "";

// ===============================================
// START
// ===============================================

window.onload = () => {

    loadManufacturers();

};

// ===============================================
// SEARCH
// ===============================================

trainingSearch.addEventListener("keyup", function(){

    const text =
    trainingSearch.value.toLowerCase();

    if(text===""){

        manufacturerContainer.classList.remove("hidden");
        familyContainer.classList.add("hidden");
        productContainer.classList.add("hidden");

        loadManufacturers();

        return;

    }

    searchProducts(text);

});

// ===============================================
// MANUFACTURERS
// ===============================================

function loadManufacturers(){

    manufacturerContainer.innerHTML="";

    const manufacturers = [

        ...new Set(

            productLibrary.products.map(

                p=>p.manufacturer

            )

        )

    ];

    manufacturers.sort();

    manufacturers.forEach(name=>{

        const card =
        document.createElement("div");

        card.className="trainingCard";

        card.innerHTML=`

            <h2>${name}</h2>

            <p>

            Open ${name} Product Library

            </p>

        `;

        card.onclick=()=>{

            openManufacturer(name);

        };

        manufacturerContainer.appendChild(card);

    });

}

// ===============================================
// MANUFACTURER
// ===============================================

function openManufacturer(name){

    selectedManufacturer=name;

    manufacturerContainer.classList.add("hidden");

    familyContainer.classList.remove("hidden");

    loadFamilies();

}

// ===============================================
// FAMILIES
// ===============================================

function loadFamilies(){

    familyContainer.innerHTML="";

    const families=[

        ...new Set(

            productLibrary.products

            .filter(

                p=>p.manufacturer===selectedManufacturer

            )

            .map(

                p=>p.family

            )

        )

    ];

    families.sort();

    families.forEach(family=>{

        const card=document.createElement("div");

        card.className="trainingCard";

        card.innerHTML=`

            <h2>

            ${family}

            </h2>

            <p>

            View Products

            </p>

        `;

        card.onclick=()=>{

            openFamily(family);

        };

        familyContainer.appendChild(card);

    });

}

// ===============================================
// FAMILY
// ===============================================

function openFamily(family){

    selectedFamily=family;

    familyContainer.classList.add("hidden");

    productContainer.classList.remove("hidden");

    loadProducts();

}

// ===============================================
// PRODUCTS
// ===============================================

function loadProducts(){

    productContainer.innerHTML="";

    const products=

    productLibrary.products.filter(

        p=>

        p.manufacturer===selectedManufacturer &&

        p.family===selectedFamily

    );

    products.sort(

        (a,b)=>

        a.model.localeCompare(b.model)

    );

    products.forEach(product=>{

        const card=document.createElement("div");

        card.className="trainingCard";

        card.innerHTML=`

            <h2>

            ${product.model}

            </h2>

            <p>

            ${product.category}

            </p>

            <br>

            <span class="productStatus">

            ${product.verification}

            </span>

        `;

        card.onclick=()=>{

            window.location.href=

            "../products/index.html?id="+

            product.id;

        };

        productContainer.appendChild(card);

    });

}

// ===============================================
// SEARCH
// ===============================================

function searchProducts(text){

    manufacturerContainer.classList.add("hidden");

    familyContainer.classList.add("hidden");

    productContainer.classList.remove("hidden");

    productContainer.innerHTML="";

    const results=

    productLibrary.products.filter(product=>{

        return (

            product.model.toLowerCase().includes(text)

            ||

            product.category.toLowerCase().includes(text)

            ||

            product.family.toLowerCase().includes(text)

            ||

            product.manufacturer.toLowerCase().includes(text)

        );

    });

    results.sort(

        (a,b)=>

        a.model.localeCompare(b.model)

    );

    results.forEach(product=>{

        const card=document.createElement("div");

        card.className="trainingCard";

        card.innerHTML=`

            <h2>

            ${product.model}

            </h2>

            <p>

            ${product.family}

            </p>

            <small>

            ${product.category}

            </small>

            <br><br>

            <span class="productStatus">

            ${product.verification}

            </span>

        `;

        card.onclick=()=>{

            window.location.href=

            "../products/index.html?id="+

            product.id;

        };

        productContainer.appendChild(card);

    });

}

