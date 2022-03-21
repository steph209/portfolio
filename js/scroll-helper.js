const menuItems = document.querySelectorAll(".menu-item");

for (let i = 0; i < menuItems.length; i++) {
    const element = menuItems[i];
    
    element.addEventListener('click', (e) => {
        if (e.target !== this) {
            menuItems.forEach((item) => {
                item.parentNode.classList.remove("active");
            });

            e.target.closest('li').classList.toggle("active");
        };
    });
}