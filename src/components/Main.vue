<script>
import { store } from '../store';
    export default{
        name:'Main',
        data(){
            return{
                store,
            }
        },
        methods:{
            flag(language){
                let src;
                if(language=='en')
                    src='../assets/img/en.jpg';
                else if(language=='it')
                    src='../assets/img/it.svg';
                else if(language=='ko')
                    src='../assets/img/kr.svg';
                else if(language=='ja')
                    src='../assets/img/jp.svg';
                else if(language=='fr')
                    src='../assets/img/fr.svg';
                else if(language=='de')
                    src='../assets/img/de.svg';
                return new URL(src,import.meta.url).href
            },
        }
        };
</script>

<template>
<input type="text" placeholder="inserisci titolo film" @input="$emit('ricerca')" v-model="store.apiInfo.titleInput">
<ul v-show="store.apiInfo.titleInput">
    <li v-for="film in store.results">
        <ul>
            <li>Titolo: {{ film.title }}</li>
            <li>Titolo originale: {{ film.original_title }}</li>
            <li><img :src="'https://image.tmdb.org/t/p/w342'+film.poster_path"></li>
            <li><img :src="flag(film.original_language)" class="flag"></li>
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
            <li><img :src="flag(film.original_language)" class="flag"></li>
            <li><img :src="flag()" class="flag"></li>
            <li>Voto: {{ film.vote_average }}</li>
            <li></li>
        </ul>
    </li>
</ul>
</template>

<style scoped lang="scss"> 
.flag{
    width: 40px;
    border: 1px solid black;
}
</style>