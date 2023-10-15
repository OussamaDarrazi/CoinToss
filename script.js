var hotails = document.getElementById("head-or-tails");
var coin = document.getElementById("coin");

hotails.addEventListener("click", ()=>{
    coin.classList.toggle('animating');
})

coin.addEventListener("animationend", ()=>{
    coin.innerHTML = Math.random()>0.5 ? "Head" : "Tails";
    coin.classList.toggle('animating');
});
