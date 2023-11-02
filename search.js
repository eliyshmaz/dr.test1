document.getElementById("searchInput").addEventListener("input", function () {
    var searchTerm = this.value.toLowerCase();
    var articleSections = document.querySelectorAll(".article-section");

    articleSections.forEach(function (section) {
        var articleTitle = section.querySelector("h2").textContent.toLowerCase();
        if (articleTitle.includes(searchTerm) || searchTerm === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});

('[data-toggle="hi"]').counterUp({
    delay: 100,
    time: 2900
});
  