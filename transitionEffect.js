window.onload = function (){
    const transitionEl = document.querySelector(".transition")
    setTimeout(function(){
        transitionEl.classList.remove("is-active")
    }, 300)
}
