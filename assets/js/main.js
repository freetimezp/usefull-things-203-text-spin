document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".text-box");
    const textContainer = document.querySelector(".text-box h1");

    textContainer.innerHTML = textContainer.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    const spans = textContainer.querySelectorAll("span");

    box.addEventListener("mouseenter", () => {
        spans.forEach((span, i) => {
            const randomX = (Math.random() - 0.5) * 60;
            const randomY = (Math.random() - 0.5) * 60;
            const randomZ = Math.random() * 100;
            span.style.transform = `translate3d(${randomX}px, ${randomY}px, ${randomZ}px) rotateY(360deg)`;
            span.style.transition = `transform 0.9s cubic-bezier(.25,.1,.25,1) ${
                i * 0.05
            }s, text-shadow 0.6s, color 0.6s`;
        });
    });

    box.addEventListener("mouseleave", () => {
        spans.forEach((span, i) => {
            span.style.transform = "translate3d(0,0,0) rotateY(0deg)";
            span.style.transition = `transform 0.7s ease ${i * 0.02}s`;
        });
    });
});
