const filterInput = document.getElementById("filterInput");
const countryList = document.getElementById("countryList");
const items = document.querySelectorAll("li");


filterInput.addEventListener("input", () => {
    const filter = filterInput.value.toLowerCase();
         items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = ""; // Affiche l'élément
        } else {
            item.style.display = "none"; // Cache l'élément
        }
    });
});

