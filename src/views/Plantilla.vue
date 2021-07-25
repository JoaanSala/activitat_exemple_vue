<template>
<div id="plantilla">
    <h1 class="pb-2">
      Llista jugador FC Barcelona Temporada 2021/2022
     </h1> 

      <h2 style="text-align:left; padding-left: 200px; padding-top:20px; text-decoration: underline;"><strong>PORTERS</strong></h2>
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="porter in porters" :key="porter.id">
             <Card2 :autor="porter.autor" :srcimg="porter.srcimg" :alt="porter.alt" :titulo="porter.id+'. '+porter.titulo" :texto="porter.texto" :url="porter.url"></Card2> 
            </div>
           </b-card-group>
       </div>

       <h2 style="text-align:left; padding-left: 200px; padding-top:20px; text-decoration: underline;"><strong>DEFENSES</strong></h2>
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="defensa in defenses" :key="defensa.id">
             <Card2 :autor="defensa.autor" :srcimg="defensa.srcimg" :alt="defensa.alt" :titulo="defensa.id+'. '+defensa.titulo" :texto="defensa.texto" :url="defensa.url"></Card2> 
            </div>
           </b-card-group>
       </div>

       <h2 style="text-align:left; padding-left: 200px; padding-top:20px; text-decoration: underline;"><strong>MIGCAMPISTES</strong></h2>
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="migcampista in migcampistes" :key="migcampista.id">
             <Card2 :autor="migcampista.autor" :srcimg="migcampista.srcimg" :alt="migcampista.alt" :titulo="migcampista.id+'. '+migcampista.titulo" :texto="migcampista.texto" :url="migcampista.url"></Card2> 
            </div>
           </b-card-group>
       </div>

       <h2 style="text-align:left; padding-left: 200px; padding-top:20px; text-decoration: underline;"><strong>DAVANTERS</strong></h2>
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="davanter in davanters" :key="davanter.id">
             <Card2 :autor="davanter.autor" :srcimg="davanter.srcimg" :alt="davanter.alt" :titulo="davanter.id+'. '+davanter.titulo" :texto="davanter.texto" :url="davanter.url"></Card2> 
            </div>
           </b-card-group>
       </div>

<!--
    <b-container class="bv-example-row">
      <b-row aling-v="center">
      <b-col v-for="porters in porterss" :key="porters.id">
        <Card2 :img-src="porters.imagen" :img-alt="porters.alt" :title="porters.titulo" :texto="porters.texto" :url="porters.url"></Card2> 
      </b-col>
     </b-row>
    </b-container>
-->
 </div>

</template>

<script>
import Card2 from '../components/Card2.vue' 
//(para utilizar en localhos)
//const lstProysJson = '/public/../porterssWD2021.json';
//para utilizar en produccion
const lstProysJson1 = '/public/../porters.json';
const lstProysJson2 = '/public/../defenses.json';
const lstProysJson3 = '/public/../migcampistes.json';
const lstProysJson4 = '/public/../davanters.json';

export default {
  props: {  
   name: {
      type: String,
      default: 'Plantilla'
    }
  },
  components: {
        Card2
      },
  data() {
      return {
        porters:[],
        defenses:[],
        migcampistes:[],
        davanters:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData1(),
      this.fetchData2(),
      this.fetchData3(),
      this.fetchData4()
    },
    /*
    computed: {
      showRepos() {
        let start = (this.page - 1) * this.perPage;
        let end = start + this.perPage;
        return this.repositories.slice(start, end);
      },
      lastPage() {
        let length = this.repositories.length;
        return length / this.perPage;
      }
    },*/
    methods: {
        async fetchData1() {
          const res = await fetch (lstProysJson1);
          const val= await res.json();
          this.porters=val;
          console.log(val);
        },
        async fetchData2() {
          const res = await fetch (lstProysJson2);
          const val= await res.json();
          this.defenses=val;
          console.log(val);
        },
        async fetchData3() {
          const res = await fetch (lstProysJson3);
          const val= await res.json();
          this.migcampistes=val;
          console.log(val);
        },
        async fetchData4() {
          const res = await fetch (lstProysJson4);
          const val= await res.json();
          this.davanters=val;
          console.log(val);
        }
      /*
      fetchData() {
        this.loading = true;
        axios.get(lstProysJson + this.githubPage)
          .then(({data}) => {
            this.repositories = this.repositories.concat(data.items);
            this.loading = false;
          })
          .catch((err) => {
            throw err;
          })
      },
      prevPage() {
        this.page--;
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      nextPage() {
        if (this.page == this.lastPage - 1) {
          this.githubPage++;
          this.fetchData();
        }
        this.page++;
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
      */
    }
  }
</script>
