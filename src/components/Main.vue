<script>
import { store } from '../store';
import axios from 'axios';
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
            stelle(vote){
                vote=vote/2;
                return parseInt(vote.toFixed());
            },
        }
    };
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="cola" v-for="film in store.results">
                <div>
                    <img :src="'https://image.tmdb.org/t/p/w342'+film.poster_path">
                    <div class="info">
                        <ul>
                            <li>Titolo: {{ film.title }}</li>
                            <li>Titolo originale: {{ film.original_title }}</li>
                            <li><img :src="flag(film.original_language)" :alt="film.original_language" class="flag"></li>
                            <li><font-awesome-icon icon="fa-solid fa-star" v-for="n in stelle(film.vote_average)" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="cola" v-for="serie in store.resultstv">
                <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path">
                <div class="info" >
                    <ul>
                        <li>Titolo: {{ serie.name }}</li>
                        <li>Titolo originale: {{ serie.original_name }}</li>
                        <li><img :src="flag(serie.original_language)" :alt="serie.original_language" class="flag"></li>
                        <li><font-awesome-icon icon="fa-solid fa-star" v-for="n in stelle(serie.vote_average)" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"> 
    $none:none;
    .cola{
        margin: 0 30px;
        position: relative;
        width: 342px ;
        
        img{
            &:hover{
                opacity: 0.2;
            }
        }
        .info{
            color: white;
            position: absolute;
            top:0px;
            z-index:-1;
            ul{
                list-style: none;
            }

        }   
    }
    .flag{
        width: 20px;
        border: 1px solid black;
    }
</style>