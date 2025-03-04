let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight('id');

        if(top >= offset && top < offset + height){
            navLinksforEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .Education-container,project-box,.contact form.heading',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content h1,.about-content',{origin:'right'});
const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Java Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});