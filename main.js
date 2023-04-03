// alert("This portfolio site is under construction!!! \n There might be some bugs or problems in this site!!! \n Click ok to continue!!!")
window.addEventListener("load", function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block"
        },
        2000
    )
});

document.querySelector("#close").addEventListener
("click", function(){
    document.querySelector(".popup").style.display = "none";

});
