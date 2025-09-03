document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".progress-circle");

  circles.forEach(circle => {
    const target = +circle.getAttribute("data-percentage");
    let current = 0;

    const interval = setInterval(() => {
      if (current <= target) {
        circle.style.setProperty("--percent", current);
        circle.querySelector(".value").textContent = `${current}%`;
        current++;
      } else {
        clearInterval(interval);
      }
    }, 15); // speed of animation (smaller is faster)
  });
});
