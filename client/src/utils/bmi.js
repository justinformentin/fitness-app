const getBMI = (w, wU, h, hU) => {
  let bmi = {};

  const height = hU === "in" ? h / 39.37 : h / 100;
  const weight = wU === "lbs" ? w / 2.205 : w;

  const getStatus = bmi =>
    bmi < 18.5
      ? "Underweight"
      : bmi > 18.5 && bmi < 24.9
      ? "Normal or Healthy Weight"
      : bmi > 24.9 && bmi < 29.9
      ? "Overweight"
      : bmi > 30 && "Obese";

  const bmiValue = weight / (height**2);
  bmi.bmi = bmiValue;
  bmi.status = getStatus(bmiValue);

  return bmi;
};

console.log(getBMI(390, "lbs", 70, "in"));
