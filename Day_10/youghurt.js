const pricePerUnit = 1200;

document.getElementById("quantity").addEventListener("input", function () {
  const qty = parseInt(this.value) || 0;
  const total = pricePerUnit * qty;
  document.getElementById("total").textContent = total;
});

function showPopup(event) {
    event.preventDefault(); 
  document.getElementById("popup").style.display = "flex";
  setTimeout(() => {
    const url = `https://wa.me/2347026670330?text=I%20would%20like%20to%20place%20an%20order%20for%20your%20yogurt"`;
    window.open(url, '_blank');
  }, 2000); // 2000ms = 2 seconds
}


function closePopup() {
  document.getElementById("popup").style.display = "none";
}
