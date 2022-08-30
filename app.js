let adviceID = document.getElementById("adviceID");
let advice = document.getElementById("advice");
let diceDive = document.getElementById("diceDiv");

fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    return response.json();
  })
  .then((loadedAdvices) => {
    advice.textContent = "'' " + loadedAdvices.slip.advice + "'' ";
    adviceID.textContent = loadedAdvices.slip.id;
  })
  .catch((error) => {
    console.log("error!");
    console.error(error);
  });

async function generatenewAdvice() {
  const randomNum = Math.floor(Math.random() * 220);

  const newAdvice = await fetch(
    `https://api.adviceslip.com/advice/${randomNum}`
  );

  const getNewAdvice = await newAdvice.json();
  advice.textContent = "'' " + getNewAdvice.slip.advice + "'' ";
  adviceID.textContent = getNewAdvice.slip.id;
}

diceDive.addEventListener("click", generatenewAdvice);
