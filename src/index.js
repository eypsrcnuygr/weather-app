const envVariables = process.env.API_TOKEN;

const errorHandler = (event) => {
  const errorDiv = document.querySelector('.error');
  errorDiv.innerHTML = event.message;
};

async function getReq(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${envVariables}&units=metric`,
    );
    const data = await response.json();
    console.log(data);
  } catch (e) {
    alert(e)
  }
}


getReq('istanbul');