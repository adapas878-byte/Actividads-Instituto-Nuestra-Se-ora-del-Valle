<script>
/* Casino Royale - Sistema de Dinero Compartido */

// Inicializar saldo si no existe
if (!localStorage.getItem("casino_saldo")) {
  localStorage.setItem("casino_saldo", "1000");
}

function getSaldo() {
  return parseInt(localStorage.getItem("casino_saldo"));
}

function setSaldo(nuevo) {
  localStorage.setItem("casino_saldo", nuevo);
  actualizarDisplaySaldo();
}

function sumarSaldo(cantidad) {
  setSaldo(getSaldo() + cantidad);
}

function restarSaldo(cantidad) {
  setSaldo(getSaldo() - cantidad);
}

function actualizarDisplaySaldo() {
  const elem = document.getElementById("saldo");
  if (elem) elem.textContent = `💰 Saldo: $${getSaldo()}`;
}

document.addEventListener("DOMContentLoaded", actualizarDisplaySaldo);
</script>
