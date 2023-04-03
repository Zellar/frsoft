document.addEventListener("DOMContentLoaded", function() {
    let changeLang = new BVSelect({
      selector: "#change-lang",
      width: "100%",
      offset: true,
      search_autofocus: true,
      breakpoint: 450
    });

    let changeLangMob = new BVSelect({
        selector: "#change-lang-mob",
        width: "100%",
        offset: true,
        search_autofocus: true,
        breakpoint: 450
      });


    let dropdownBtn = document.querySelector('#subnav-btn');
    let dropdownMenu = document.querySelector('#dropwodn-menu');
    let mobDropdownBtn = document.querySelector('#subnav-btn-mob');
    let mobDropdownMenu = document.querySelector('#dropdown-menu-mob');
    let burgerMenuBtn = document.querySelector('#burger-btn');
    let burgerMenu = document.querySelector('.burger-menu_list');
    let burgerMenuMob = document.querySelector('#burger-btn-mob');
    let mobNavMenu = document.querySelector('.header-nav-mob');
    let closeBtn = document.querySelector('#mob-close-btn');

    let openDropwodnMenu = (btn, menu) => {
        document.addEventListener('click', (e) => {   
            if (e.target !== menu && e.target !== btn) {
                menu.classList.remove('active');
                btn.classList.remove('active');
            } else {
                menu.classList.toggle('active');
                btn.classList.toggle('active');
            }
            
        });
    };

    let noScroll = () => {
        let body = document.querySelector('body');
        let html = document.querySelector('html');
        if (mobNavMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
            html.style.overflow = 'hidden';
        } else {
            body.style.overflowY = 'auto';
            html.style.overflowY = 'auto';
        }
    }

    let openMobMenu = (btn, menu, closeBtn) => {
        document.addEventListener('click', (e) => {
            if(e.target == btn) {
                menu.classList.add('active')
            } else if (e.target == closeBtn) {
                menu.classList.remove('active')
            }
            noScroll()
        })
    }

    openMobMenu(burgerMenuMob, mobNavMenu, closeBtn);

    // let accordionAnimate = () => {
    //     document.addEventListener('click', (e) => { 
    //         if (!mobDropdownMenu.classList.contains('active')){
    //             mobDropdownMenu.style.maxHeight = 0;
    //         } else {
    //             mobDropdownMenu.style.maxHeight = mobDropdownMenu.scrollHeight + "px";
    //         } 
    //     })
    // };

    // accordionAnimate();

    openDropwodnMenu(dropdownBtn, dropdownMenu);
    openDropwodnMenu(burgerMenuBtn, burgerMenu);
    openDropwodnMenu(mobDropdownBtn, mobDropdownMenu);

    var splide = new Splide( '.splide', {
        perPage: 4,
        gap: "32px",
        breakpoints: {
            1500: {
              perPage: 3,
              type: 'loop',
            },
            991: {
                perPage: 2,
                type: 'loop',
              },
            768: {
            perPage: 1,
            type: 'loop',
            },
        },
    } );
    splide.mount();

let changeThemeBtn = document.querySelectorAll(".change-theme-btn"); 

let changeTheme = (btn) => {
    btn.forEach(elem => {
        elem.addEventListener('click', () => {
            document.querySelector("html").toggleAttribute("data-light-mode");
        })
    });
}

changeTheme(changeThemeBtn);

});