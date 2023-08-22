//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)

const countFoto = 9;
let numFoto;

document.getElementById("btn").addEventListener("click", function (event) {
  const pict = document.getElementById("img");
  numFoto = parseInt(countFoto * Math.random() + 1);
  console.log(numFoto, "Number of foto");
  pict.setAttribute("src", "images/" + numFoto + ".jpg");
});
