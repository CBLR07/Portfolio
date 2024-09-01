/*========================= sticky navbar =========================*/

let header = document.querySelector('header')
window.addEventListener('scroll',function(){
    header.classList.toggle('nav', window.scrollY > 110)
});

/*========================= open nav, toggle menu icon =========================*/

let menu = document.querySelector('#menu-icon')
let navBar = document.querySelector('.nav-links')
menu.onclick = () => {
    navBar.classList.toggle('open')
    menu.classList.toggle('fa-xmark')
}
window.onscroll = () => {
    navBar.classList.remove('open')
    menu.classList.remove('fa-xmark')
}

/*========================= scroll animations =========================*/

ScrollReveal({ 
    distance: '30px',
    duration: 2000,
    delay: 300
})
ScrollReveal().reveal('.home-details, .about-details, .heading, .contact-details' , {origin: 'top'});
ScrollReveal().reveal('.home-circle, .home-img, .contact-form', {origin: 'right'});
ScrollReveal().reveal('.about-img, .proj-container, .skills-container' , {origin: 'left'});

/*========================= scroll active link =========================*/

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.link')

function activeMenu(){
    let len = sections.length;
    while(--len && window.scrollY + 100 < sections[len].offsetTop){}
    navLinks.forEach(sec => sec.classList.remove('active'))
    navLinks[len].classList.add('active')
}
activeMenu()
window.addEventListener('scroll', activeMenu)

/*========================= submit contact form into email =========================*/

const contactForm = document.getElementById('contactForm')
const contactNotif = document.getElementById('contactResponse')
const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_i7x1ve6','template_0j9aj16','#contactForm','tGkSqoqtCbPbonE46')
        .then(() =>{
            contactNotif.classList.toggle('contact-response')
            contactNotif.textContent = 'Message sent successfully ✅'
            
            setTimeout(() => {
                contactNotif.textContent = ''
                contactNotif.classList.remove('contact-response')
            },5000)

            contactForm.reset()
        }, () => {
            contactNotif.classList.toggle('contact-response')
            contactNotif.textContent = 'Message not sent ❌'
            setTimeout(() => {
                contactNotif.textContent = ''
                contactNotif.classList.remove('contact-response')
            },5000)
        })
}
contactForm.addEventListener('submit', sendEmail)

/*========================= home section - typing animation =========================*/

var typed = new Typed('.input',{
    strings:['Developer.', 'Designer.'], 
    typeSpeed: 120,
    backSpeed: 70,
    loop: true
})

