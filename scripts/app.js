const header = document.getElementById('sticky');
const iconMenu = document.getElementById('menu');
const menu = document.getElementById('burger-menu');
const menuNav = document.getElementsByClassName('burger-menu-a');
window.onscroll = function(){
    
    if(window.pageYOffset > 0){
        header.style.backgroundColor = '#F1F5F9';
        menu.style.backgroundColor = '#F1F5F9';
        for(let i = 0; i < menuNav.length; i++){
            menuNav[i].style.color = '#000';
        }
        
    }else{
        header.style.backgroundColor = 'transparent';
        menu.style.backgroundColor = 'transparent';
        for(let i = 0; i < menuNav.length; i++){
            menuNav[i].style.color = '#000';
        }
    }
}

iconMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const buttons = document.querySelectorAll('.choose');
// const improveBtns
const image = document.getElementById('improve-img');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        image.style.opacity = '0';
        setTimeout(function(){
            image.src = this.getAttribute('data-image');
            image.style.opacity = 1;
        }.bind(this),500)
    });
});
