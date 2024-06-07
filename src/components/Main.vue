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
            <li v-show="film.original_language=='en'"><img src="../assets/img/en.jpg"></li>
            <li v-show="film.original_language=='ja'"><img src="../assets/img/jp.svg"></li>
            <li v-show="film.original_language=='ko'"><img src="../assets/img/kr.svg"></li>
            <li v-show="film.original_language=='de'"><img src="../assets/img/de.svg"></li>
            <li v-show="film.original_language=='it'"><img src="../assets/img/it.svg"></li>
            <li v-show="film.original_language=='fr'"><img src="../assets/img/fr.svg"></li>
            <li>Voto: {{ film.vote_average }}</li>
            <li></li>
        </ul>
    </li>
</ul>
<ul v-show="store.apiInfo.titleInput">
    <li v-for="film in store.resultstv">
        <ul>
            <li>Titolo: {{ film.name }}</li>
            <li>Titolo originale: {{ film.original_name }}</li>
            <li v-show="film.original_language=='en'"><img src="../assets/img/en.jpg"></li>
            <li v-show="film.original_language=='ja'"><img src="../assets/img/jp.svg"></li>
            <li v-show="film.original_language=='ko'"><img src="../assets/img/kr.svg"></li>
            <li v-show="film.original_language=='de'"><img src="../assets/img/de.svg"></li>
            <li v-show="film.original_language=='it'"><img src="../assets/img/it.svg"></li>
            <li v-show="film.original_language=='fr'"><img src="../assets/img/fr.svg"></li>
            <li>Voto: {{ film.vote_average }}</li>
            <li></li>
        </ul>
    </li>
</ul>
</template>

<style scoped lang="scss"> 
img{
    width: 40px;
    border: 1px solid black;
}
</style>