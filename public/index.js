import {axios} from '/bundle.js'
let movies, qr_code 
const qrCodeFetch = async() => {
  try {
    const backend_base_url_dev= "https://qr-code-gen-p6ts.onrender.com"
    const backend_base_url_local= "http://localhost:7007"
    const response = await axios.get(
      backend_base_url_dev+'/api/v1/movies/generate-qr-code'
    ) 
    console.log("🚀 ~ file: index.js:9 ~ qrCodeFetch ~ qr_code:", response?.data?.data)

    return String(response.data.data)
  } catch (error) {
    console.log("🚀 ~ file: index.js:10 ~ qrCodeFetch ~ error:", error)
    
  }
 
}

if(typeof window !== 'undefined'){
  const refreshTimer = document.getElementById('refresh-timer');
  const refreshStart = document.getElementById('refresh-start');
  const refreshQRCOde = document.getElementById('refresh-qr-code');

  let timerInSeconds = 10;

  setInterval(() => {
    timerInSeconds -= 1;

    refreshTimer.innerHTML = `Reloading New QR Code In: ${timerInSeconds} second(s)`;
    refreshStart.innerHTML = ''

    if (timerInSeconds < 1 ) {
      window.location.reload ()
    }
     
  }, 1000);
  window.onload = async () => {

    console.log("THIS IS CLIENT SIDE !!!");

  refreshQRCOde.src = await qrCodeFetch()
  }
  console.log("THIS IS CLIENT SIDE");
} else {
  console.log("THIS IS SERVER SIDE");
}
