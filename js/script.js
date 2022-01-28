/* =========================== EFEITO DE TRANSIÇÃO NAVEGAÇÃO INTERNA DO SITE =========================== */

const menuItems = document.querySelectorAll('.header a[href^="#"]', '.header span');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopbyHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  // Remove o comportamento padrão do Navegador
  event.preventDefault();
  const to = getScrollTopbyHref(event.target) - 64;

  scrollToPosition(to);
}

function scrollToPosition(to) {

  window.scroll({
    top: to,
    behavior: "smooth"
  });

}

/* ======================================================================================================= */

/* ============================ EFEITO DE MÁQUINA DE ESCREVER NA INTRODUÇÃO ============================== */

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';

  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 82 * i);
  });

  setTimeout(() => typeWriter(titulo), 9500);
}

const titulo = document.querySelector('h1');
typeWriter(titulo);

/* ================================ RETORNO DO ENVIO DO PHP NA PARTE DE CONTATO ================================= */

new SimpleForm(
  {
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><p>Um erro ocorreu, tente envie e-mail para danielbarrosdeoliveira@outlook.com</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  }
);