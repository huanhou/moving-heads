document.querySelectorAll(".portrait").forEach((img) => {
  img.addEventListener("mouseenter", (event) => {
    const hoveredPosition = event.target.getAttribute("data-position");
    
    if (hoveredPosition === "top-left") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-center"]').src =
        "middle-right.jpeg";
      document.querySelector('[data-position="top-right"]').src =
        "middle-right.jpeg";
      document.querySelector('[data-position="middle-left"]').src =
        "bottom-center.jpeg";
      document.querySelector('[data-position="middle-center"]').src =
        "bottom-right.jpeg";
      document.querySelector('[data-position="middle-right"]').src =
        "bottom-right.jpeg";
      document.querySelector('[data-position="bottom-left"]').src =
        "bottom-center.jpeg";
      document.querySelector('[data-position="bottom-center"]').src =
        "bottom-right.jpeg";
      document.querySelector('[data-position="bottom-right"]').src =
        "bottom-right.jpeg";
    } else if (hoveredPosition === "top-center") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-left"]').src =
        "middle-left.jpeg";
      document.querySelector('[data-position="top-right"]').src =
        "middle-right.jpeg";
      document.querySelector('[data-position="middle-left"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="middle-center"]').src =
        "bottom-center.jpeg";
      document.querySelector('[data-position="middle-right"]').src =
        "bottom-right.jpeg";
      document.querySelector('[data-position="bottom-left"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="bottom-center"]').src =
        "bottom-center.jpeg";
      document.querySelector('[data-position="bottom-right"]').src =
        "bottom-right.jpeg";
    } else if (hoveredPosition === "top-right") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-left"]').src =
        "middle-left.jpeg";
      document.querySelector('[data-position="top-center"]').src =
        "middle-left.jpeg";
      document.querySelector('[data-position="middle-left"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="middle-center"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="middle-right"]').src =
        "bottom-center.jpeg";
      document.querySelector('[data-position="bottom-left"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="bottom-center"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="bottom-right"]').src =
        "bottom-center.jpeg";
    } else if (hoveredPosition === "middle-left") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-left"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="top-center"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="top-right"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="middle-center"]').src =
        "middle-right.jpeg";
      document.querySelector('[data-position="middle-right"]').src =
        "middle-right.jpeg";
      document.querySelector('[data-position="bottom-left"]').src =
        "bottom-center.jpeg";
      document.querySelector('[data-position="bottom-center"]').src =
        "bottom-right.jpeg";
      document.querySelector('[data-position="bottom-right"]').src =
        "bottom-right.jpeg";
    } else if (hoveredPosition === "middle-center") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-left"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="top-center"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="top-right"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="middle-left"]').src =
        "middle-left.jpeg";
      document.querySelector('[data-position="middle-right"]').src =
        "middle-right.jpeg";
      document.querySelector('[data-position="bottom-left"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="bottom-center"]').src =
        "bottom-center.jpeg";
      document.querySelector('[data-position="bottom-right"]').src =
        "bottom-right.jpeg";
    } else if (hoveredPosition === "middle-right") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-left"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="top-center"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="top-right"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="middle-left"]').src =
        "middle-left.jpeg";
      document.querySelector('[data-position="middle-center"]').src =
        "middle-left.jpeg";
      document.querySelector('[data-position="bottom-left"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="bottom-center"]').src =
        "bottom-left.jpeg";
      document.querySelector('[data-position="bottom-right"]').src =
        "bottom-center.jpeg";
    } else if (hoveredPosition === "bottom-left") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-left"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="top-center"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="top-right"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="middle-left"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="middle-center"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="middle-right"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="bottom-center"]').src =
        "middle-right.jpeg";
      document.querySelector('[data-position="bottom-right"]').src =
        "middle-right.jpeg";
    } else if (hoveredPosition === "bottom-center") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-left"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="top-center"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="top-right"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="middle-left"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="middle-center"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="middle-right"]').src =
        "top-right.jpeg";
      document.querySelector('[data-position="bottom-left"]').src =
        "middle-left.jpeg";
      document.querySelector('[data-position="bottom-right"]').src =
        "middle-right.jpeg";
    } else if (hoveredPosition === "bottom-right") {
      event.target.src = "middle-center.jpeg";
      document.querySelector('[data-position="top-left"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="top-center"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="top-right"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="middle-left"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="middle-center"]').src =
        "top-left.jpeg";
      document.querySelector('[data-position="middle-right"]').src =
        "top-center.jpeg";
      document.querySelector('[data-position="bottom-left"]').src =
        "middle-left.jpeg";
      document.querySelector('[data-position="bottom-center"]').src =
        "middle-left.jpeg";
    }
  });

  img.addEventListener("mouseleave", () => {
    document.querySelector('[data-position="top-left"]').src =
      "middle-center.jpeg";
    document.querySelector('[data-position="top-center"]').src =
      "middle-center.jpeg";
    document.querySelector('[data-position="top-right"]').src =
      "middle-center.jpeg";
    document.querySelector('[data-position="middle-left"]').src =
      "middle-center.jpeg";
    document.querySelector('[data-position="middle-center"]').src =
      "middle-center.jpeg";
    document.querySelector('[data-position="middle-right"]').src =
      "middle-center.jpeg";
    document.querySelector('[data-position="bottom-left"]').src =
      "middle-center.jpeg";
    document.querySelector('[data-position="bottom-center"]').src =
      "middle-center.jpeg";
    document.querySelector('[data-position="bottom-right"]').src =
      "middle-center.jpeg";
  });
});
