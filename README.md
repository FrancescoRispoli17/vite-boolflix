# Esercizio Boolflix 

## Documentazione
https://rickandmortyapi.com/documentation/#filter-characters

## Inizio

Inizio aprendo il mio template di partenza e eseguendo i comandi:
```bash
npm install
npm i axios
npm run dev
```
Così sarà disponibile tutto il necessario per le prime milestone.

Creo un file store.js dove andrò a inserire il link dell'api con la mia chiave personale e un array vuoto che conterrà i dati restituiti della chiamata. Inserisco anche una chiave che verrà manipolata dall'input per effetuare la chiamata ogni volta che cambia.

Quindi in App.vue creo un metodo con la chiamata axios.
```javascript
searchFilm(){
          axios.get(this.store.apiInfo.url,{
            params:{
              query:this.store.apiInfo.titleInput,
              language:this.store.apiInfo.endpoints.language,
            }
          })
          .then((response)=> this.store.results=response.data.results )
        },
```
In Main.vue inserisco un tag input con all'interno il v-model collegato alla chiave di store.js. Inserisco anche l'evento personalizzato che richiamerò nel padre
```javascript
//Main.vue FIGLIO 
    <input type="text" placeholder="inserisci titolo film" @input="$emit('ricerca')" v-model="store.apiInfo.titleInput">
    
//App.vue PADRE
    <Main @ricerca="searchFilm"/>
```
in Main.app inserisco un ul con i dati che otterò dalla chiamata axios ogni volta che scrivo qualcosa nell'input.

Inserisco la bandiera nella lista tramite v-show.

creo nel metodo searchFilm un'altra chiamata per le serie tv e aggiungo il risultato nella pagina.




