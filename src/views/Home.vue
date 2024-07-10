<script>
export default {
  name: "GymHome",
  components: {},
  metaInfo: {
    title: 'Platos de Ecuador',
    meta: [
      {
        name: 'description',
        content: 'Descubre los platos típicos del Ecuador, una deliciosa mezcla de influencias indígenas, españolas y africanas que te harán disfrutar de la rica gastronomía ecuatoriana.'
      },
      {
        name: 'author',
        content: 'Kenlly Chacon'
      },
      {
        name: 'keywords',
        content: 'platos típicos del Ecuador, comida ecuatoriana, gastronomía ecuatoriana, ceviche, locro, canelazo, humitas, llapingachos, seco de chivo'
      },
    ],
    link: [
      {rel: 'canonical', href: 'https://gym-get-fit.netlify.app/'},
    ],
  },
  lang: 'es',
}
</script>

<template>
  <section>
    <span class="span1">Descubre la <br>riqueza <br>gastronómica</span>
    <span class="span2">
Del Ecuador, un país con una gran variedad de platos típicos,<br>
influenciados por la cultura indígena, española y africana,<br>
que te harán disfrutar de la auténtica comida ecuatoriana.
</span>
    <router-link to="/platillos" class="btn-empezar" alt="Empezar a entrenar ahora">EMPEZAR</router-link>
  </section>
</template>

<style scoped>
section {
  position: relative;
  color: #5d5d5d;
  text-align: left;
  height: 100vh;
  padding-top: 285px;
}

section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/Fondo.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  animation: slideInFromRight 5s ease-in-out forwards;
  z-index: -1;
}

.span1, .span2, .btn-empezar {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.span1 {
  font-family: 'Sumana-Bold', sans-serif;
  font-size: 65px;
  font-weight: bold;
  margin: 0 120px;
  line-height: 1.1;
  animation: fadeIn 4s ease-in-out forwards;
}

.span2 {
  font-family: 'Sumana-Regular', sans-serif;
  font-size: 20px;
  margin: 60px 125px;
  line-height: 1.7;
  animation: fadeIn 4s ease-in-out 1s forwards;
}

span {
  display: block;
}

.btn-empezar {
  padding: 5px 40px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 30px;
  font-family: 'Sumana-Bold', sans-serif;
  cursor: pointer;
  letter-spacing: 4px;
  font-size: 20px;
  margin: 0 120px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: fadeIn 2s ease-in-out 3s forwards;
}

.btn-empezar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.btn-empezar:hover {
  background-color: #333;
}

.btn-empezar:hover::before {
  transform: scaleX(1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Media Queries for Responsiveness */
@media (max-width: 1200px) {
  .span1, .btn-empezar {
    margin: 0 80px;
  }

  .span2 {
    margin: 60px 85px;
  }
}

@media (max-width: 768px) {
  section {
    padding-top: 150px;
  }

  .span1 {
    font-size: 45px;
    margin: 0 50px;
  }

  .span2 {
    font-size: 18px;
    margin: 40px 50px;
  }

  .btn-empezar {
    margin: 0 50px;
  }
}

@media (max-width: 480px) {
  .span1 {
    font-size: 35px;
    margin: 0 20px;
  }

  .span2 {
    font-size: 16px;
    margin: 20px 20px;
  }

  .btn-empezar {
    font-size: 18px;
    padding: 5px 30px;
    margin: 0 20px;
  }
}
</style>