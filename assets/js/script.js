const root = document.documentElement;
document.addEventListener("mousemove", (e)=>{
    let x = (((window.innerWidth / 2) - e.pageX) / 18) * -1;
    root.style.setProperty('--left-y', (x + 100) + "%");
    root.style.setProperty('--right-y', ((x * -1) + 100) + "%");
    root.style.setProperty('--page-x', e.pageX + "px");
    root.style.setProperty('--page-y', e.pageY + "px");
})