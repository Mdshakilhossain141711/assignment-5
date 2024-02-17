let scrolBtn = document.getElementById("scrolBtn");


scrolBtn.addEventListener("click", function () {
    let scrol = document.getElementById("scrol");
    scrol.scrollIntoView({
        behavior: "smooth"
    });
});