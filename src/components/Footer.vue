<template>
  <footer class="gym-footer">
    <div class="logo-container">
      <img class="logo" src="../assets/images/Logo.webp" alt="Logo de Comida Ecuatoriana">
    </div>
    <p>Disfruta de la auténtica comida ecuatoriana, una deliciosa mezcla de sabores y tradiciones.</p>

    <p>
      <img class="iconos" src="../assets/images/gps.svg" alt="Logo de direccion">
      Quito Rumipamba y 10 de agosto
    </p>

    <p>
      <img class="iconos" src="../assets/images/call.svg" alt="Logo de llamada">
      02-2920819 o 02-2248169
    </p>

    <div class="footer-nav">
      Copyright © Comida Ecuatoriana 2024. Derechos reservados.
    </div>

  </footer>
</template>

<script>
export default {
  name: 'GymFooter'
}
</script>

<style scoped>
.gym-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-family: 'Sumana-Regular', sans-serif;
}

.footer-content h3 {
  margin: 0;
  padding-bottom: 10px;
}

.footer-content p {
  font-size: 14px;
  margin: 0;
  //padding-bottom: 20px;
}

.footer-links li {
  margin-right: 20px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #5cb85c;
}

.footer-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

hr {
  border: 1px solid;
  margin: 10px 25%; /* Ajusta el margen según necesites */
  width: 50%;
}

.iconos{
  width: 18px;
  height: 18px;
  display: inline-block;
}

.logo{
  width: 130px;
  height: 130px;
  display: inline-block;
}

.logo-container{
  margin-top: 25px;
  padding: 0;
}
</style>
