<template>
  <div id="app">

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
        <!-- Text slides with image -->
        <b-carousel-slide
            caption="Memphis marca en el seu debut i el Barça doblega el Girona (3-1)"
            text="El nou fitxatge del Barça va anotar de penal i va deixar alguna espurna en un partit intranscendent contra un Girona que tampoc està per tirar cohets."
            img-src="https://as01.epimg.net/futbol/imagenes/2021/07/24/primera/1627153678_811139_1627153868_noticia_normal_recorte1.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
            caption="Griezzmann a la rampa de sortida"
            text="El president del Barcelona, Joan Laporta, afirma que s'estan escoltant ofertes pel delanter Francés"
            img-src="https://as01.epimg.net/futbol/imagenes/2021/07/24/primera/1627124082_033569_1627124566_noticia_normal_recorte1.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
            caption="Rey Manaj casat amb el gol"
            text="El davanter albanès va demostrar que segueix casat amb el gol, a l'aprofitar una gran assistència de Nil, però va haver d'abandonar el camp després d'un cop de cap amb un rival."
            img-src="//as01.epimg.net/futbol/imagenes/2021/07/24/primera/1627151438_121978_1627151567_noticia_normal_recorte1.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
            caption="Té 18 anys, acaba d'arribar al Barça i ja ha conquistat Koeman: així és Yusuf Demir"
            text="Yusuf Demir acaba d'arribar al Barcelona i ja ha conquistat a Ronald Koeman. Va ser un dels protagonistes en l'amistós contra el Nàstic."
            img-src="https://as02.epimg.net/futbol/imagenes/2021/07/22/videos/1626977422_553077_1626977855_noticia_normal.jpg"
        ></b-carousel-slide>
    </b-carousel>  
</div>

</template>

<script>
    export default {
       data() {
          return {
            slide: 0,
            sliding: null
          }
        },
        methods: {
          onSlideStart() {
            this.sliding = true
          },
          onSlideEnd() {
            this.sliding = false
          }
        }
    }
</script>
