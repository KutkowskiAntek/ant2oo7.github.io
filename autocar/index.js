document.getElementById("configureBtn").addEventListener("click", showConfigForm);
document.getElementById("configureBtn2").addEventListener("click", showConfigForm);
document.getElementById("configureBtn3").addEventListener("click", showConfigForm);
document.getElementById("configureBtn4").addEventListener("click", showConfigForm);
document.getElementById("configureBtn5").addEventListener("click", showConfigForm);
document.getElementById("configureBtn6").addEventListener("click", showConfigForm);
document.getElementById("configureBtn7").addEventListener("click", showConfigForm);
document.getElementById("configureBtn8").addEventListener("click", showConfigForm);
document.getElementById("configureBtn9").addEventListener("click", showConfigForm);
document.getElementById("configureBtn10").addEventListener("click", showConfigForm);


function showConfigForm() {
  document.getElementById("carList").style.display = "none";
  document.getElementById("configForm").style.display = "block";
}

function goBack() {
  document.getElementById("carList").style.display = "block";
  document.getElementById("configForm").style.display = "none";
  document.getElementById("purchaseForm").reset();
  document.getElementById("errorContainer").innerHTML = "";
}

function validateForm() {
  const ownerName = document.getElementById("ownerName").value;
  const deliveryDate = document.getElementById("deliveryDate").value;
  const accessories = document.querySelectorAll('input[name="accessories"]:checked');

  if (ownerName.trim() === "" || !ownerName.includes(" ")) {
    showError("Imię i nazwisko muszą być podane w formacie: 'Imię Nazwisko'.");
  } else if (accessories.length === 0) {
    showError("Wybierz co najmniej jedno akcesorium.");
  } else {
    showConfirmation();
  }
}

function showError(message) {
  document.getElementById("errorContainer").innerHTML = `<p class="error">${message}</p>`;
}

function showConfirmation() {
  document.getElementById("configForm").style.display = "none";
  document.getElementById("summary").style.display = "block";

  const financingOption = document.querySelector('input[name="financing"]:checked').value;
  const ownerName = document.getElementById("ownerName").value;
  const deliveryDate = document.getElementById("deliveryDate").value;
  const accessories = document.querySelectorAll('input[name="accessories"]:checked');
  const totalPrice = calculateTotalPrice(accessories);

  document.getElementById("paymentMethod").textContent = financingOption;
  document.getElementById("carImage").src = ""; // Dodaj ścieżkę do obrazka zakupionego auta
  document.getElementById("totalPrice").textContent = `Cena auta z akcesoriami: ${totalPrice} PLN`;
}

function calculateTotalPrice(accessories) {
  let totalPrice = 0;
  accessories.forEach((accessory) => {
    const price = parseInt(accessory.parentNode.querySelector("span:nth-child(2)").textContent);
    totalPrice += price;
  });
  return totalPrice;
}
const deliveryDateSelect = document.getElementById("deliveryDate");
const today = new Date();
for (let i = 0; i < 14; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() + i);
  const option = document.createElement("option");
  option.value = date.toISOString().slice(0, 10);
  option.textContent = date.toDateString();
  deliveryDateSelect.appendChild(option);
}