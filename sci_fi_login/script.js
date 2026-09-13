document.addEventListener("DOMContentLoaded", () => {

    const video = document.querySelector(".background-video");
    const panel = document.querySelector(".login-panel");
    const status = document.querySelector("#status");

    const password = document.querySelector("#password");
    const togglePassword = document.querySelector("#togglePassword");
    const loginForm = document.querySelector("#loginForm");


    // ==========================================
    // LOGIN IS HIDDEN AT START
    // ==========================================

    panel.style.opacity = "0";
    panel.style.visibility = "hidden";
    panel.style.pointerEvents = "none";


    // ==========================================
    // WHEN VIDEO FINISHES
    // ==========================================

    video.addEventListener("ended", showLogin);


    function showLogin() {

        console.log("VIDEO FINISHED");
        console.log("ACTIVATING LOGIN INTERFACE");


        // Make our HTML login interactive
        panel.style.visibility = "visible";
        panel.style.pointerEvents = "auto";


        // Start slightly below
        panel.style.transform = "translateY(30px)";
        panel.style.opacity = "0";


        // Animate into position
        requestAnimationFrame(() => {

            panel.style.transition =
                "opacity 1s ease, transform 1s ease";

            panel.style.opacity = "1";
            panel.style.transform = "translateY(0)";

        });


        status.textContent = "SYSTEM ONLINE";

    }


    // ==========================================
    // PASSWORD SHOW / HIDE
    // ==========================================

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            password.type = "password";

            togglePassword.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    });


    // ==========================================
    // LOGIN BUTTON
    // ==========================================

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        status.textContent = "ACCESS GRANTED";

        console.log("LOGIN SUCCESS");

    });

});