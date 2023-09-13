//const header = document.querySelector("header");

const nav = document.querySelector(".navmenu")
fetch('/navber.html')
.then(res=> res.text())
.then(data=> {
    nav.innerHTML=data
})
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
 const plus = document.querySelector(".plus");
 minus = document.querySelector(".minus");
 num = document.querySelector(".num");

 let a = 1;

 plus.addEventListener("click", ()=>{
    a++;
    num.innerText = a;
    console.log(a);
 });
 minus.addEventListener("click", ()=>{
    if(a > 1)
    a--;
    num.innerText = a;
    console.log(a);
 });
 const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};


loginLink.onclick = () => {
    wrapper.classList.remove('active');
};
const stars = document.querySelectorAll('.star-rating i');
        const ratingField = document.querySelector('#rating');

        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = star.getAttribute('data-rating');
                ratingField.value = rating;
                stars.forEach(s => s.classList.remove('checked'));
                for (let i = 0; i < rating; i++) {
                    stars[i].classList.add('checked');
                }
            });
        });