<script>
import { store } from '../store';
    export default{
        name:'Main',
        data(){
            return{
                store,
            }
        },
        };
</script>

<template>
<input type="text" placeholder="inserisci titolo film" @input="$emit('ricerca')" v-model="store.apiInfo.titleInput">
<ul v-show="store.apiInfo.titleInput">
    <li v-for="film in store.results">
        <ul>
            <li>Titolo: {{ film.title }}</li>
            <li>Titolo originale: {{ film.original_title }}</li>
            <li>Lingua: italiano</li>
            <li>Voto: {{ film.vote_average }}</li>
            <li></li>
        </ul>
    </li>
</ul>
</template>

<style scoped lang="scss"> 
</style>