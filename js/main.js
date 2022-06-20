let prodactImgs = document.querySelectorAll(".prodact-img");
let prodactSwitcher = document.querySelector(".img-switcher");
prodactSwitcher.addEventListener("click", nextProdactSwitch);



function nextProdactSwitch(){
for (let index = 0; index < prodactImgs.length; index++) {
    const element = prodactImgs[index];
    console.log(element.dataset.visibility);
    
    if(element.dataset.visibility == "true"){
        element.classList.remove("prodact-img_active");

        element.classList.add("prodact-img_hidden");
        element.dataset.visibility = "false";
        ++index;
        if(index<prodactImgs.length)
        {
            prodactImgs[index].classList.remove("prodact-img_hidden");
            prodactImgs[index].classList.add("prodact-img_active");
            prodactImgs[index].dataset.visibility = "true";
            return;
        }
        else{
            index = 0;
            prodactImgs[index].classList.remove("prodact-img_hidden");
            prodactImgs[index].classList.add("prodact-img_active");
            prodactImgs[index].dataset.visibility = "true";
            return;
        }
        
    };
    
    
}
    
}