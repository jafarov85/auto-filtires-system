const ilanVerButton = document.getElementById("ilan-ver-button");
const ilanForm = document.getElementById("ilan-form");

ilanVerButton.addEventListener("click", function() {
  ilanForm.style.display = "block";
});

const ilanFormInputs = document.getElementById("ilan-form-inputs");

ilanFormInputs.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // İlan verme işlemlerini burada gerçekleştirin
  
  // Formu sıfırla
  ilanFormInputs.reset();
  
  // İlan verildiğinde yapılacak işlemleri buraya ekleyin
});
