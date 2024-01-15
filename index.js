function update_position(e) {
  let _t = e.target;

  if (_t.tagName.match(/^button$/i)) {
    let r = _t.getBoundingClientRect();
    ["x", "y"].forEach((c) =>
      _t.style.setProperty(
        `--${c}`,
        `${e[`client${c.toUpperCase()}`] - r[c]}px`
      )
    );
  }
}

addEventListener("mouseover", update_position);
addEventListener("mouseout", update_position);

document.addEventListener("click", function (event) {
  if (!event.target.matches(".menu-item-scroll")) return;

  event.preventDefault();

  const element = document.getElementById(event.target.dataset.target);

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

document.getElementById("main-action-button").onclick = function () {
  document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
};

