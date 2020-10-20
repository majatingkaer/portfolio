gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    const divs =
        section.querySelectorAll("div");
    gsap.from(divs, {
        opacity: 0,
        y: 100,
        duration: 2,
        //stagger: 1,
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "center 40%",
            scrub: true,
        },
    });
});


gsap.from(".tegning", {
    yPercent: 20,
    stagger: .1,
    ease: "none",
    scrollTrigger: {
        trigger: ".tegning",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        //markers: true,
    }
});


gsap.to(".splash_flasker", {
    translateX: 200,
    duration: 1.5,
    ease: "back.out(1.7)",
});


window.onscroll = function () {
    scrollIndicator()
};

function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("Progress").style.width = scrolled + "%";
}
