left menu = document.querySelector('.menu-bar')
left navbar = document.querySelector('.navbar')

menu.onclick = () =>{

    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');

}

window.onscroll = () =>{

    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');

   

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();