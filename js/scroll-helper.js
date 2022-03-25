const menuItems = document.querySelectorAll(".menu-item");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navElement = document.querySelector("nav");

for (let i = 0; i < menuItems.length; i++) {
    const element = menuItems[i];
    
    element.addEventListener('click', (e) => {

        if(window.innerWidth <= 850) {
            e.preventDefault();
        }

        if (e.target !== this) {
            menuItems.forEach((item) => {
                item.parentNode.classList.remove("active");
            });

            e.target.closest('li').classList.toggle("active");

            if(window.innerWidth <= 850) { 
                
                navElement.classList.toggle("close-nav");
                hamburgerIcon.checked = false;

                if(navElement.classList.contains("close-nav")) {
                    setTimeout(() => {
                        window.location.href = e.target.closest('a').href;
                    }, 300);
                }
                            
            }
            
        };
    });
}

if(window.innerWidth <= 850) { 
    hamburgerIcon.addEventListener('click', (e) => {
        if(navElement.classList.contains("close-nav")) {
            navElement.classList.toggle("close-nav");
        }
    });   
}
