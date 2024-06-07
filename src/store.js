import { reactive } from 'vue';

export const store=reactive({
    results:[],
    resultstv:[],

    apiInfo:{
        url:'https://api.themoviedb.org/3/search/movie?api_key=ee6e9cc1dca2c6775a6a33a4f176e037',
        urlTV:'https://api.themoviedb.org/3/search/tv?api_key=ee6e9cc1dca2c6775a6a33a4f176e037',
        titleInput:'',
        endpoints:{
            language:'it-IT',
        }
    }
})