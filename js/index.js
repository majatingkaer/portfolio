gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    const divs =
        section.querySelectorAll(".scroll-effekt");
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


gsap.from(".topknap", {
    opacity: 0,
    y: 100,
    duration: 2,
    scrollTrigger: {
        trigger: ".topknap",
        //markers: true,
        start: "bottom 25%",
        end: "bottom",
        scrub: true,
    }
})
