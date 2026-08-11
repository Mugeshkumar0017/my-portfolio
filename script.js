/* =================================
   MOBILE MENU
================================= */

const menuBtn =
    document.getElementById("menu-btn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu when clicking link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


/* =================================
   DARK MODE
================================= */

const themeToggle =
    document.getElementById("theme-toggle");


const themeIcon =
    themeToggle.querySelector("i");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (
        document.body.classList.contains("dark")
    ) {

        themeIcon.classList.remove(
            "fa-moon"
        );

        themeIcon.classList.add(
            "fa-sun"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeIcon.classList.remove(
            "fa-sun"
        );

        themeIcon.classList.add(
            "fa-moon"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* Remember theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.remove(
        "fa-moon"
    );

    themeIcon.classList.add(
        "fa-sun"
    );

}


/* =================================
   BACK TO TOP
================================= */

const backTop =
    document.getElementById("back-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.style.display =
            "flex";

        backTop.style.alignItems =
            "center";

        backTop.style.justifyContent =
            "center";

    } else {

        backTop.style.display =
            "none";

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =================================
   CONTACT FORM
================================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );


contactForm.addEventListener(
    "submit", 
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById(
                "name"
            ).value;

        const email =
            document.getElementById(
                "email"
            ).value;

        const subject =
            document.getElementById(
                "subject"
            ).value;

        const message =
            document.getElementById(
                "message"
            ).value;


        const mailSubject =
            encodeURIComponent(
                subject
            );


        const mailBody =
            encodeURIComponent(

                "Name: " +
                name +
                "\n\nEmail: " +
                email +
                "\n\nMessage:\n" +
                message

            );


        window.location.href =
            "mailto:mugeshkk0017@gmail.com" +
            "?subject=" +
            mailSubject +
            "&body=" +
            mailBody;

    }
);


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .why-card"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "all 0.6s ease";

    revealObserver.observe(element);

});


/* =================================
   ACTIVE NAVIGATION
================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            if (
                window.scrollY >=
                sectionTop - 200
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        document
            .querySelectorAll(
                ".nav-links a"
            )
            .forEach(link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

    }
);
