const INITIAL_VLAUE = 0;
const randomFloat = (min, max) => Math.random() * (max - min) + min;

async function calculPourcentage(value) {
  var text = document.getElementById("pourcentageCompetences");
  text.classList.remove("hidden")
  var circle = document.getElementById("circlePourcentage");

  async function timeout() {
    return new Promise((resolve) => setTimeout(resolve, 20));
  }

  for (let i = 50; i <= value; i += Math.ceil(randomFloat(1, 4))) {
    text.innerText = i + "%";
    if ((i * 755) / 100 < 380) circle.style.strokeDasharray = 380;
    else circle.style.strokeDasharray = (i * 755) / 100;
    await timeout();
  }

  text.innerText = value + "%";
  circle.style.strokeDasharray = (value * 755) / 100;
}
