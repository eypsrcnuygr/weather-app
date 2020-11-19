const envVariables = process.env.API_TOKEN;

console.log(envVariables);

// async function getReq() {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=${envVariables}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// getReq();