document.addEventListener("DOMContentLoaded", function () {

  // ===== Idiomas =====

  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");
  const langText = document.getElementById("lang-text");

  langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langMenu.classList.toggle("hidden");
      langBtn.classList.toggle("active");
  });

  document.addEventListener("click", function () {
      langMenu.classList.add("hidden");
      langBtn.classList.remove("active");
  });

  langMenu.querySelectorAll("li").forEach(function (item) {

      item.addEventListener("click", function () {

          if (this.textContent === "Valencià") {
              langText.textContent = "VA";
          }

          if (this.textContent === "Castellano") {
              langText.textContent = "ES";
          }

          if (this.textContent === "English") {
              langText.textContent = "EN";
          }

          langMenu.classList.add("hidden");
          langBtn.classList.remove("active");

      });

  });

  // ===== CAPTCHA =====

  const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let captchaActual = "";

  function generarCaptcha() {

      captchaActual = "";

      for (let i = 0; i < 6; i++) {

          captchaActual += caracteres.charAt(
              Math.floor(Math.random() * caracteres.length)
          );

      }

      document.querySelector(".captcha-text").textContent = captchaActual;

  }

  generarCaptcha();

  document
      .getElementById("refresh-captcha")
      .addEventListener("click", generarCaptcha);

  // ===== Verificación CSV =====

  const form = document.getElementById("csv-form");
  const csv = document.getElementById("csv");
  const captcha = document.getElementById("captcha");

  form.addEventListener("submit", function (e) {

      e.preventDefault();

      if (captcha.value.trim().toUpperCase() !== captchaActual) {

          alert("El codi de seguretat és incorrecte.");

          generarCaptcha();

          captcha.value = "";

          return;

      }

      if (csv.value.trim() === "KFDTVJI2:44FAGPZG:XZP1CH8A") {

          window.location.href = "pdf/MARÍA BISILA COLLINS SAÑABA_firmado (1).pdf";

      } else {

          alert("Código CSV incorrecto.");

      }

  });

});