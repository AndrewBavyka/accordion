'use strict'

const menuTitle = document.querySelectorAll('.footer-menu__title'),
    subMenuList = document.querySelectorAll('.footer-submenu__list');

function accordion(menuTitle, menuList) {

    menuTitle.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                menuList.forEach((menuListItem, i) => {
                    if (index == i || menuListItem.classList.contains('active')) {
                        menuListItem.classList.toggle('active');

                        if (menuListItem.style.maxHeight) {
                            menuListItem.style.maxHeight = null;
                        } else {
                            menuListItem.style.maxHeight = menuListItem.scrollHeight + "px";
                        }
                    }
                })
            }
        });
    });
};

accordion(menuTitle, subMenuList);