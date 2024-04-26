function confirmarEmail() {
    if (confirm("Deseja abrir seu e-mail para enviar uma mensagem?")) {
      window.location.href = "mailto:seuemail@gmail.com";
    }
  }

function mostrarPopup() {
    // Exibe o pop-up com a mensagem desejada
    alert("Você já está no início da página.");
}