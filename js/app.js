document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.getElementById("mobileMenuButton");

    const sidebar =
        document.getElementById("sidebar");

    if (menuButton && sidebar) {

        menuButton.addEventListener(
            "click",
            () => {

                sidebar.classList.toggle(
                    "mobile-sidebar-open"
                );

            }
        );

        document
            .querySelectorAll(".nav-item")
            .forEach(item => {

                item.addEventListener(
                    "click",
                    () => {

                        sidebar.classList.remove(
                            "mobile-sidebar-open"
                        );

                    }
                );

            });

    }

});