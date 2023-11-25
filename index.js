const body = document.body
const aside = document.querySelector('aside')
const logo = document.querySelector('#logo')
const icons = document.querySelectorAll('.icon')
const playlist = document.querySelector('#playlist')
const sideBar = document.querySelector('#side-bar')
const playListName = document.querySelector('.playlist-name')
const playlistH3 = playlist.querySelector('h3')
const bar = document.querySelector('#bar')
const logoSvg = logo.querySelector('svg')
const createPlaylist = document.querySelector('.create-playlist');
const mainHeaderLi = document.querySelectorAll('.main-header-nav li');



/* Nav Bar */
let closeBar = true;
bar.addEventListener('click', function() {
    if (closeBar) {
        body.style.gridTemplateColumns = '70px 1fr';
        logoSvg.style.display = 'none'
        playlistH3.style.display ='none'
        playListName.style.display ='none'
        createPlaylist.style.display ='none'


        icons.forEach((icon) =>{
        const iconPH3 = icon.querySelector(':nth-child(2n)')
        iconPH3.style.display ='none'
        })  
   
        closeBar = false;
    } 

    else if (window.innerWidth > 600) {
        body.style.gridTemplateColumns = '200px 1fr';
        logoSvg.style.display = ''
        playlistH3.style.display =''
        playListName.style.display =''
        createPlaylist.style.display =''
   
        icons.forEach((icon) =>{
            const iconPH3 = icon.querySelector(':nth-child(2n)')
            iconPH3.style.display =''
         
        })  

        closeBar = true;
      
    }
    
});


/* border bottom */
mainHeaderLi.forEach((li) => {
    li.addEventListener('click', function () {
     mainHeaderLi.forEach((li) => {
        li.classList.remove('active')
    })

    li.classList.add('active');
    
    });


})

