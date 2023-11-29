// let cad=`
// <div class="container">
// <p class="logo">Don Eugenio!</p>
// <nav>
//     <a href="#acuaponia">Quienes Somos</a>
//     <a href="#nuestros-productos">Nuestros Productos</a>
//     <a href="./shopping_cart/shopping_cart.html">Pedidos</a> <!-- Nuevo enlace a shopping_cart.html -->
//     <a href="#contacto">Contacto</a>
//     <a href="#login">Ingresar</a>
//     <a href="./customer/account/create.html">Registrarse</a>
// </nav>
// </div>

// `
// document.querySelector("header").innerHTML=cad

//nav

// esta funcion se fija en que pagina estamos y cambia el nav de acuerdo a eso
// no funciona en netlify porque no muestra el nombre del archivo en la url


// let cad;
// let url = window.location.pathname;

// if (url.endsWith('/index.html')) { // Si estamos en index.html (url === '/index.html')
//   cad = `
//   <div class="container">
//   <p class="logo">Don Eugenio!</p>
//   <nav>
//       <a href="#acuaponia">Quienes Somos</a>
//       <a href="#nuestros-productos">Nuestros Productos</a>
//       <a href="./shoppingCart/shoppingCart.html">Pedidos</a>
//       <a href="#footer">Contacto</a>
//       <a href="./customer/account/login.html">Ingresar</a>
//       <a href="./customer/account/create.html">Registrarse</a>
//   </nav>
//   </div>
//   `
// } else if (url.endsWith('/login.html')) { // Si estamos en login.html (url === '/login.html')
//   cad = `
//   <div class="container">
//   <p class="logo">Don Eugenio!</p>
//   <nav>
//       <a href="../../index.html">Pagina principal</a>
//       <a href="../../index.html#footer">Contacto</a>
//       <a href="../account/create.html">Registrarse</a>
//   </nav>
//   </div>
//   `
// } else if (url.endsWith('/forgotPassword.html')) { // Si estamos en forgotPassword.html (url === '/forgotPassword.html')
//   cad = `
//   <div class="container">
//   <p class="logo">Don Eugenio!</p>
//   <nav>
//       <a href="../../index.html">Pagina principal</a>
//       <a href="../../index.html#footer">Contacto</a>
//       <a href="../../customer/account/login.html">Ingresar</a>
//       <a href="../../customer/account/create.html">Registrarse</a>
//   </nav>
//   </div>
//   `
// }else if (url.endsWith('/create.html')) { // Si estamos en create.html (url === '/create.html')
//   cad = `
//   <div class="container">
//   <p class="logo">Don Eugenio!</p>
//     <nav>
//       <a href="../../index.html">Pagina principal</a>
//       <a href="../../index.html#footer">Contacto</a>
//       <a href="../../customer/account/login.html">Ingresar</a>
//     </nav>
//   </div>
//   `
// } else if (url.endsWith('/shoppingCart.html')) { // Si estamos en shopping_cart.html (url === '/shopping_cart.html')
//   cad = `
//   <div class="container">
//   <p class="logo">Don Eugenio!</p>
//   <nav>
//       <a href="../index.html">Pagina principal</a>
//       <a href="../index.html#nuestros-productos">Nuestros Productos</a>
//       <a href="../index.html#footer">Contacto</a>
//       <a href="../customer/account/login.html">Ingresar</a>
//       <a href="../customer/account/create.html">Registrarse</a>
//   </nav>
//   </div>
//   `
// }

// document.querySelector("header").innerHTML=cad

// para solucionar el problema de la direccion url de netlify que no muestra el nombre del archivo y rompe la funcion anterior

let cad;
let page = document.body.dataset.page;

if (page === 'index') {
  cad = `
  <div class="container">
  <img src="./images/logo.jpg" alt="">
  <nav>
      <a href="#acuaponia">Quienes Somos</a>
      <a href="#nuestros-productos">Nuestros Productos</a>
      <a href="./frontend/shoppingCart.html">Pedidos</a>
      <a href="./frontend/productos.html">Productos</a>
      <a href="#footer">Contacto</a>
      <a href="./customer/account/login.html">Ingresar</a>
      <a href="./frontend/registrocliente.html">Registrarse</a>
  </nav>
  </div>
  `;
} else if (page === 'login') {
  cad = `
  <div class="container">
  <img src="../../images/logo.jpg" alt="">
  <nav>
      <a href="../../index.html">Pagina principal</a>
      <a href="../../index.html#footer">Contacto</a>
      <a href="../account/create.html">Registrarse</a>
  </nav>
  </div>
  `;
} else if (page === 'forgotPassword') {
  cad = `
  <div class="container">
  <img src="../../images/logo.jpg" alt="">
  <nav>
      <a href="../../index.html">Pagina principal</a>
      <a href="../../index.html#footer">Contacto</a>
      <a href="../../customer/account/login.html">Ingresar</a>
      <a href="../../customer/account/create.html">Registrarse</a>
  </nav>
  </div>
  `;
} else if (page === 'create') {
  cad = `
  <div class="container">
  <img src="../../images/logo.jpg" alt="">
    <nav>
      <a href="../../index.html">Pagina principal</a>
      <a href="../../index.html#footer">Contacto</a>
      <a href="../../customer/account/login.html">Ingresar</a>
    </nav>
  </div>
  `;
} else if (page === 'registrocliente') {
  cad = `
  <div class="container">
  <img src="../images/logo.jpg" alt="">
    <nav>
    <a href="../index.html">Pagina principal</a>
    <a href="../index.html#footer">Contacto</a>
    <a href="../customer/account/login.html">Ingresar</a>
    </nav>
  </div>
  `;
} else if (page === 'shoppingCart') {
  cad = `
  <div class="container">
  <img src="../images/logo.jpg" alt="">
  <nav>
      <a href="../index.html">Pagina principal</a>
      <a href="../index.html#nuestros-productos">Nuestros Productos</a>
      <a href="../index.html#footer">Contacto</a>
      <a href="../customer/account/login.html">Ingresar</a>
      <a href="../frontend/registrocliente.html">Registrarse</a>
  </nav>
  </div>
  `;
} else if (page === 'productos') {
  cad = `
  <div class="container">
   <img src="../images/logo.jpg" alt="">
     <nav>
       <a href="../index.html">Pagina principal</a>
       <a href="../index.html#nuestros-productos">Nuestros Productos</a>
       <a href="../index.html#footer">Contacto</a>
       <a href="../customer/account/login.html">Ingresar</a>
       <a href="../customer/account/create.html">Registrarse</a>
     </nav>
  </div>
  `;
}

document.querySelector("header").innerHTML = cad;

// footer


cad = `
<footer class="top">
          <div class="links">
            <div class="links-column">
              <h3 id=contacto>Contacto</h3>
              <ul>
                <li>Av. Corrientes 5000</li>
                <li>Tel: 11-1111-1111</li>
                <li>Doneugenio@gmail.com</li>
             </ul>
            </div>
            <div class="links-column socials-column">
              <h3>Social Media</h3>
              <h5>
                Seguinos en nuestras redes sociales para enterarte las ultimas novedades.
                progress.
              </h5>
              <div class="socials">
                <a  href="http://www.facebook.com" class="fa-brands fa-facebook"></a>
                <a href="http://www.instagram.com" class="fa-brands fa-instagram"></a>
                <a href="http://www.linkedin.com" class="fa-brands fa-linkedin"></a>
              </div>
            </div>
          </div>
        </footer>
        <footer class="bottom">
          <h6 class="copyright">© 2023 All rights reserved</h6>
          <div class="legal">
            <a> License </a>
            <a> Terms </a>
            <a> Privacy </a>
          </div>
        </footer>
`
document.querySelector("#footer").innerHTML = cad

// animacion trajetas

let cartas = document.querySelectorAll('.carta');

cartas.forEach(carta => {
  carta.addEventListener('mouseover', () => {
    let overlay = carta.querySelector('.overlay');
    let title = carta.querySelector('.title');
    overlay.style.bottom = '0';
    carta.style.backgroundPosition = 'center top';
    title.style.opacity = '0';
  });

  carta.addEventListener('mouseout', () => {
    let overlay = carta.querySelector('.overlay');
    let title = carta.querySelector('.title');
    overlay.style.bottom = '-100%';
    carta.style.backgroundPosition = 'center bottom';
    title.style.opacity = '1';
  });
});