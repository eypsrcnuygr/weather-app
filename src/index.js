const envVariables = process.env.API_TOKEN;

async function getReq(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${envVariables}&units=metric`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}


document.querySelector('.btn').addEventListener('click', () => {
  const city = document.querySelector('.input').value;
  (async () => {
    const cityDetails = await getReq(city);
    if (cityDetails.name) {
      document.querySelector('.theData').innerHTML = `The weather is ${cityDetails.weather[0].main}`;
      document.querySelector('.theData2').innerHTML = `${cityDetails.main.temp} average Temp Celcius`;
      document.querySelector('.theData3').innerHTML = `${cityDetails.main.temp_max} max Temp Celcius`;
      document.querySelector('.toggler').classList.remove('d-none');
    } else {
      document.querySelector('.error').innerHTML = cityDetails.message;
    }
  })();
});

document.querySelector('.toggler').addEventListener('click', (e) => {
  e.preventDefault();
  const reg1 = /Celcius/;
  if (document.querySelector('.theData2').innerHTML.match(reg1)) {
    document.querySelector('.theData2').innerHTML = `${((parseFloat(document.querySelector('.theData2').innerHTML) * (9 / 5) + 32)).toFixed(2)} average Temp Fah`;
    document.querySelector('.theData3').innerHTML = `${((parseFloat(document.querySelector('.theData3').innerHTML) * (9 / 5) + 32)).toFixed(2)} max Temp Fah`;
  } else {
    document.querySelector('.theData2').innerHTML = `${(((parseFloat((document.querySelector('.theData2').innerHTML)) - 32) * (5 / 9))).toFixed(2)} average Temp Celcius`;
    document.querySelector('.theData3').innerHTML = `${((((parseFloat(document.querySelector('.theData3').innerHTML)) - 32) * (5 / 9))).toFixed(2)} average Temp Celcius`;
  }
});
