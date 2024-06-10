<script>
import { store } from '../store';
import axios from 'axios';
    export default{
        name:'Header',
        data(){
            return{
                store,
            }
        },
        methods:{
            searchFilm(){
                axios.get(this.store.apiInfo.url + 'movie',{
                    params:{
                        api_key:this.store.apiInfo.apiKey,
                        query:this.store.apiInfo.titleInput,
                        language:'it',
                    }
                })
                .then((response)=> this.store.results=response.data.results )

                axios.get(this.store.apiInfo.url + 'tv',{
                    params:{
                        api_key:this.store.apiInfo.apiKey,
                        query:this.store.apiInfo.titleInput,
                        language:'it',
                    }
                })
                .then((response)=> this.store.resultstv=response.data.results )
            },
        }
    };
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-9"></div>
            <div class="col-3 text-light p-4">
                <div class="flex py-2 px-3 border botder-white align-items-center">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-light fs-4"/>
                    <input type="text" class="input ms-2 bg-black text-white border-0" placeholder="Titoli, persone, generi" @input="searchFilm" v-model="store.apiInfo.titleInput">
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>