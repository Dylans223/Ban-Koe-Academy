// ==========================================
// Ban-Koe Academy Navigation
// ==========================================

function navigateTo(targetPage){

    const currentPath = window.location.pathname.replace(/\\/g, "/");

    const isNested = currentPath.split("/").filter(Boolean).length > 1;

    const targetPath =
    targetPage === "dashboard"
    ? "index.html"
    : targetPage + "/index.html";

    window.location.href =
    isNested ? "../" + targetPath : targetPath;

}

function goDashboard(){
    navigateTo("dashboard");
}

function goProducts(){
    navigateTo("products");
}

function goTraining(){
    navigateTo("training");
}

function goQuiz(){
    navigateTo("quiz");
}

function goProgress(){
    navigateTo("progress");
}

function goSettings(){
    navigateTo("settings");
}

function goHome(){
    goDashboard();
}