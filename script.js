const frase = document.querySelector(".frase");
const autor = document.querySelector(".autor");
const button = document.querySelector("button");

function handleClick() {
  fetch("./frases.json")
    .then((response) => response.json())
    .then((json) => {
      const index = Math.floor(Math.random() * json.length);
      const fraseFinal = `"${json[index].quote}"`;
      const autorFinal = json[index].author;

      frase.textContent = fraseFinal;
      autor.textContent = autorFinal;
    });
}

button.addEventListener("click", handleClick);
