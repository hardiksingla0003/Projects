const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const generateButton = document.querySelector("button");
const output = document.querySelector(".output-container");
const weightGuide = document.querySelector(".weight-guide");

generateButton.addEventListener("click", () => {
  const weight = weightInput.value;
  const heightM = heightInput.value / 100;

  if (!weight || !heightM) {
    output.textContent = "Please Enter Valid Height and Weight";
    return;
  }
  const bmi = (weight / (heightM * heightM)).toFixed(2);
  output.innerHTML = `Your BMI is ${bmi} kg/m<sup>2</sup>`;
  if (bmi < 18.5) {
    weightGuide.innerHTML = `Underweight - Below 18.5`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightGuide.innerHTML = `Healthy Weight - 18.5 to 24.9`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    weightGuide.innerHTML = `Overweight - 25.0 to 29.9`;
  } else {
    weightGuide.innerHTML = `Obese - 30.0 and Above`;
  }
});
