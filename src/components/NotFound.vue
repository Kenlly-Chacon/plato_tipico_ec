<script>
export default {
  name: "NotFound"
}
</script>

<template>
  <section class="page_404">

    <div class="container">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="col-sm-10 col-sm-offset-1  text-center">
            <h1 class="text-center2 ">404</h1>
            <div class="four_zero_four_bg">



            </div>

            <div class="contant_box_404">
              <h3 class="h2">
                Parece que estás perdido
              </h3>

              <p>¡La página que buscas no está disponible!</p>

              <router-link to="/" href="" class="link_404">Ir a Inicio</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;
}

.page_404  img{ width:100%;}

.four_zero_four_bg{
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
}


.four_zero_four_bg h1{
  font-size:80px;
}

.four_zero_four_bg h3{
  font-size:80px;
}

.link_404{
  color: #fff!important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;}

.contant_box_404{ margin-top:-50px;}

.text-center2{
  text-align: center;
  font-size: 100px;
  color: green;
  margin: 0;
}
</style>