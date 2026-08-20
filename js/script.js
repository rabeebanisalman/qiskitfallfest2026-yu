let menu_open = false;
const menu = document.querySelector('#navbar button');
const sidebar = document.querySelector('#sidebar');
const sidebar_items = document.querySelectorAll('#sidebar a')

menu.addEventListener('click', () => {
    if ( menu_open == false ) {
        sidebar.style.display = 'flex';
        menu_open = true;
    }
    else if (menu_open == true ) {
        sidebar.style.display = 'none';
        menu_open = false;
    }
})

sidebar_items.forEach( item => {
    item.addEventListener('click', () => {
        sidebar.style.display = 'none';
        menu_open = false; })
})


window.addEventListener('resize', () => {
    if ( window.innerWidth > 768 ) {
        sidebar.style.display = 'none';
    }
})