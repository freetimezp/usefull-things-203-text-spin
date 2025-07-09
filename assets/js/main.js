document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".text-box");
    const textContainer = document.querySelector(".text-box h1");

    textContainer.innerHTML = textContainer.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const spans = textContainer.querySelectorAll("span");

    box.addEventListener("mouseenter", () => {
        spans.forEach((span) => {
            span.style.transform = "rotateY(360deg)";
            span.style.transitionDelay = Math.random(0, 1) + "s";
        });
    });

    box.addEventListener("mouseleave", () => {
        spans.forEach((span) => {
            span.style.transform = "rotateY(0deg)";
            span.style.transitionDelay = 0 + "s";
        });
    });
});
