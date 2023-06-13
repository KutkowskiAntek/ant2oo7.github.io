<!DOCTYPE html>
<html>
<head>
  <title>AutoWeb</title>
  <!-- <link rel="stylesheet" href="style.css"> -->
  <style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .car-list {
    list-style: none;
    padding: 0;
  }

  .car-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
  }

  .car-item img {
    width: 100px;
    margin-right: 10px;
  }

  .config-form {
    display: none;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
  }

  .config-form label {
    display: block;
    margin-bottom: 5px;
  }

  .config-form input[type="radio"],
  .config-form input[type="checkbox"] {
    margin-right: 5px;
  }

  .accessories-list {
    list-style: none;
    padding: 0;
  }

  .accessory-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .error {
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }

  /* Summary section */
  #summary {
    display: none;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
  }

  #summary h2 {
    margin-top: 0;
  }

  #summary img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  /* Button styles */
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
</head>
<body>
  <h1>AutoWeb</h1>

  <div id="carList">
    <h2>Lista samochodów</h2>
    <ul class="car-list">
      <li class="car-item">
        <img src="car1.jpg" alt="Samochód 1">
        <div>
          <p>Cena: 10000 PLN</p>
          <p>Marka: Audi</p>
          <p>Rok: 2018</p>
          <p>Model: A4</p>
          <p>Moc silnika: 150 KM</p>
          <p>Przebieg: 50000 km</p>
        </div>
        <button id="configureBtn">Konfiguruj</button>
      </li>
      <li class="car-item">
        <img src="car2.jpg" alt="Samochód 2">
        <div>
          <p>Cena: 20000 PLN</p>
          <p>Marka: BMW</p>
          <p>Rok: 2020</p>
          <p>Model: X5</p>
          <p>Moc silnika: 200 KM</p>
          <p>Przebieg: 20000 km</p>
        </div>
        <button id="configureBtn2">Konfiguruj</button>
      </li>
    <li class="car-item">
      <img src="car3.jpg" alt="Samochód 3">
      <div>
        <p>Cena: 15000 PLN</p>
        <p>Marka: Mercedes-Benz</p>
        <p>Rok: 2019</p>
        <p>Model: C-Class</p>
        <p>Moc silnika: 180 KM</p>
        <p>Przebieg: 30000 km</p>
      </div>
      <button id="configureBtn3">Konfiguruj</button>
    </li>
        <li class="car-item">
      <img src="car4.jpg" alt="Samochód 4">
      <div>
        <p>Cena: 12000 PLN</p>
        <p>Marka: Volkswagen</p>
        <p>Rok: 2017</p>
        <p>Model: Golf</p>
        <p>Moc silnika: 120 KM</p>
        <p>Przebieg: 40000 km</p>
      </div>
      <button id="configureBtn4">Konfiguruj</button>
    </li>
    <li class="car-item">
      <img src="car5.jpg" alt="Samochód 5">
      <div>
        <p>Cena: 18000 PLN</p>
        <p>Marka: Toyota</p>
        <p>Rok: 2021</p>
        <p>Model: Corolla</p>
        <p>Moc silnika: 150 KM</p>
        <p>Przebieg: 10000 km</p>
      </div>
      <button id="configureBtn5">Konfiguruj</button>
    </li>
    <li class="car-item">
      <img src="car6.jpg" alt="Samochód 6">
      <div>
        <p>Cena: 25000 PLN</p>
        <p>Marka: Ford</p>
        <p>Rok: 2019</p>
        <p>Model: Focus</p>
        <p>Moc silnika: 125 KM</p>
        <p>Przebieg: 35000 km</p>
      </div>
      <button id="configureBtn6">Konfiguruj</button>
    </li>
    <li class="car-item">
      <img src="car7.jpg" alt="Samochód 7">
      <div>
        <p>Cena: 22000 PLN</p>
        <p>Marka: Volvo</p>
        <p>Rok: 2020</p>
        <p>Model: XC60</p>
        <p>Moc silnika: 190 KM</p>
        <p>Przebieg: 25000 km</p>
      </div>
      <button id="configureBtn7">Konfiguruj</button>
    </li>
    <li class="car-item">
      <img src="car8.jpg" alt="Samochód 8">
      <div>
        <p>Cena: 13000 PLN</p>
        <p>Marka: Opel</p>
        <p>Rok: 2016</p>
        <p>Model: Astra</p>
        <p>Moc silnika: 110 KM</p>
        <p>Przebieg: 45000 km</p>
      </div>
      <button id="configureBtn8" >Konfiguruj</button>
    </li>
    <li class="car-item">
      <img src="car9.jpg" alt="Samochód 9">
      <div>
        <p>Cena: 19000 PLN</p>
        <p>Marka: Honda</p>
        <p>Rok: 2020</p>
        <p>Model: Civic</p>
        <p>Moc silnika: 160 KM</p>
        <p>Przebieg: 15000 km</p>
      </div>
      <button id="configureBtn9" >Konfiguruj</button>
    </li>
    <li class="car-item">
      <img src="car10.jpg" alt="Samochód 10">
      <div>
        <p>Cena: 14000 PLN</p>
        <p>Marka: Peugeot</p>
        <p>Rok: 2017</p>
        <p>Model: 308</p>
        <p>Moc silnika: 130 KM</p>
        <p>Przebieg: 40000 km</p>
      </div>
      <button id="configureBtn10" >Konfiguruj</button>
    </li>
    </ul>
  </div>

  <div id="configForm" class="config-form">
    <h2>Formularz konfiguracji</h2>
    <form id="purchaseForm" onsubmit="event.preventDefault(); validateForm();">
      <label for="financing">Wybierz finansowanie:</label>
      <div>
        <input type="radio" id="leasing" name="financing" value="leasing">
        <label for="leasing">Leasing</label>
      </div>
      <div>
        <input type="radio" id="cash" name="financing" value="gotówka">
        <label for="cash">Gotówka</label>
      </div>

      <label for="ownerName">Imię i nazwisko:</label>
      <input type="text" id="ownerName" name="ownerName">

      <label for="deliveryDate">Data dostawy:</label>
      <select id="deliveryDate" name="deliveryDate"></select>

      <label for="accessories">Wybierz akcesoria:</label>
      <ul class="accessories-list">
        <li class="accessory-item">
          <span>Alkomat</span>
          <span>Cena: 100 PLN</span>
          <input type="checkbox" name="accessories" value="1">
        </li>
        <li class="accessory-item">
          <span>Zestaw głośnomówiący</span>
          <span>Cena: 200 PLN</span>
          <input type="checkbox" name="accessories" value="2">
        </li>
      </ul>

      <button type="submit">Zakup</button>
      <button type="button" onclick="goBack()">Powrót do wyboru</button>
      <div id="errorContainer"></div>
    </form>
  </div>

  <div id="summary">
    <h2>Podsumowanie zakupu</h2>
    <p>Dziękujemy za zakup auta!</p>
    <p>Metoda płatności: <span id="paymentMethod"></span></p>
    <img id="carImage" src="" alt="Zakupione auto">
    <p id="totalPrice"></p>
  </div>

  <script >
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
    </script>
</body>
</html>
