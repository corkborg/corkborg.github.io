// This is your main script file

(() => {
    const targets = [];
    targets.push(...document.querySelectorAll(".post__image img"));
    targets.push(...document.querySelectorAll("#featured-image img"));

    for(const target of targets) {
        target.style = "cursor: pointer;";
        target.addEventListener("click", (e) => {
            window.open(target.src);
        });
    }
})();