const phoneData = {
        apple: { "iPhone 15 Pro Max": 38000, "iPhone 15": 26000, "iPhone 14 Pro": 28000, "iPhone 13": 17000 },
        samsung: { "Galaxy S24 Ultra": 34000, "Galaxy S23": 19000, "Galaxy S22 Ultra": 16000 },
        google: { "Pixel 8 Pro": 24000, "Pixel 8": 16000, "Pixel 7 Pro": 13000 }
    };

const memory = {"128 GB": 1, "256 GB": 1.15, "512 GB": 1.25, "1 TB": 1.5}
const quality = {"Ideal": 1, "Good": 0.85 , "Okay": 0.75, "Broken": 0.3}
const color = {"White": 1.1, "Black": 1, "Gray": 1, "Blue": 1.05, "Pink": 1.05}


function updateModels() {
    const brand = document.getElementById("category").value;
    const modelSelect = document.getElementById("model");
    modelSelect.innerHTML = '<option value="" disabled selected>-- Оберіть модель --</option>';
        
    if (brand && phoneData[brand]) {
        modelSelect.disabled = false;
        Object.keys(phoneData[brand]).forEach(name => {
            let opt = document.createElement("option");
            opt.value = phoneData[brand][name];
            opt.textContent = name;
            modelSelect.appendChild(opt);
        });
    }
}

function updateModelsbuy() {
    const brand = document.getElementById("categorybuy").value;
    const modelSelect = document.getElementById("modelbuy");
    modelSelect.innerHTML = '<option value="" disabled selected>-- Оберіть модель --</option>';
        
    if (brand && phoneData[brand]) {
        modelSelect.disabled = false;
        Object.keys(phoneData[brand]).forEach(name => {
            let opt = document.createElement("option");
            opt.value = phoneData[brand][name];
            opt.textContent = name;
            modelSelect.appendChild(opt);
        });
    }
}

function Checkprice() {
    let Memory = document.getElementById("memory").value;
    let Quality = document.getElementById("quality").value;
    let Color = document.getElementById("color").value;
    let Memorymultip = 0
    let Qualitymultip = 0
    let Colormultip = 0

    for (i in memory) {
        if (i == Memory){
            Memorymultip = i
        }
    }

    for (i in quality) {
        if (i == Quality){
            Qualitymultip = i
        }
    }

    for (i in color) {
        if (i == Color){
             Colormultip = i
        }
    }
    
    let price = Memorymultip * Qualitymultip * Colormultip

    print(price)
}




const botToken = '8807106256:AAGzcp4slIup1_VtjAHFH6HQIqUxrFTr5LU';
const chatId = '1932431579';

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const phone = this.phone.value;
  const email = this.email.value;
  const details = this.details.value;

  const phonePattern = /^\+?\d{10,15}$/;
  if (!phonePattern.test(phone)) {
    alert("Будь ласка, введіть правильний номер телефону (наприклад: +380XXXXXXXXX)");
    return;
  }

  const formData = `Ім'я: ${name}\nТелефон: ${phone}\nEmail: ${email || 'не вказано'}\nДеталі: ${details}`;
  const message = encodeURIComponent(formData);
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      alert('Повідомлення успішно надіслано в Telegram!');
      document.getElementById('form').reset();
    })
    .catch(error => {
      alert('Не вдалося надіслати повідомлення.');
    });
});