document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
  gsap.from(".sidebar", {
    duration: 1,
    x: "-200px",
    ease: "power1.inOut"
  });

  gsap.from(".box-link", {
    duration: 1,
    x: "-200px",
    ease: "power1.inOut"
  });
});
