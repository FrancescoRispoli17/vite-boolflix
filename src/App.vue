<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './store'
import axios from 'axios';
  export default{
      name:'MyApp',
      components:{
          Header,
          Main,
      },
      data(){
        return{
          store,
        }
      },
      methods:{
        searchFilm(){
          axios.get(this.store.apiInfo.url,{
            params:{
              query:this.store.apiInfo.titleInput,
              language:this.store.apiInfo.endpoints.language,
            }
          })
          .then((response)=> this.store.results=response.data.results )
        },
      },
  };
</script>

<template>
<Main @ricerca="searchFilm"/>
</template>

<style scoped lang="scss">

</style>
