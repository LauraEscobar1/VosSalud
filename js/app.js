document.addEventListener(
    "DOMContentLoaded",
    () => {

        const mobileMenuButton =
            document.getElementById("mobileMenuButton");

        if (mobileMenuButton) {

            mobileMenuButton.addEventListener(
                "click",
                () => {
                    alert(
                        "El menú móvil se implementará en la siguiente etapa."
                    );
                }
            );
        }

    }
);