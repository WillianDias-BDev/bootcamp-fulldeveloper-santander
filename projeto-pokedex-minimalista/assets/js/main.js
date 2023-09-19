
document.addEventListener("DOMContentLoaded", function () {
    const pokemonSections = document.querySelectorAll(".pokemon");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    let currentPage = 0;

    // Função para mostrar a página atual
    const showPage = () => {
        pokemonSections.forEach((section, index) => {
            if (index === currentPage) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    };

    // Event listener para o botão "Anterior"
    prevButton.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            showPage();
        }
    });

    // Event listener para o botão "Próxima"
    nextButton.addEventListener("click", () => {
        if (currentPage < pokemonSections.length - 1) {
            currentPage++;
            showPage();
        }
    });

    // Exibe a primeira página inicialmente
    showPage();
});

document.addEventListener("DOMContentLoaded", function () {
    const pokemonSections = document.querySelectorAll(".pokemon");
    let currentPage = 0;

    const showPage = () => {
        pokemonSections.forEach((section, index) => {
            if (index === currentPage) {
                section.classList.add("active", "transition");
            } else {
                section.classList.remove("active", "transition");
            }
        });
    };

    // Resto do seu código de evento aqui
});


