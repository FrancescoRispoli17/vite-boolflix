# Esercizio Boolflix 

## Documentazione
https://docs.google.com/document/d/1JBwSbzVo88GBKKUwNTx6fQe7RetT_uw_PTxtGgoQPWI/edit?usp=sharing

## Inizio

Inizio aprendo il mio template di partenza e eseguendo i comandi:
```bash
npm install
npm i axios
npm run dev
```
Così sarà disponibile tutto il necessario per le prime milestone.

Creo un file store.js dove andrò a inserire il link dell'api con la mia chiave personale e un array vuoto che conterrà i dati restituiti della chiamata. Inserisco anche una chiave che verrà manipolata dall'input per effetuare la chiamata ogni volta che cambia.

Quindi in **src/components/Main.vue** importo axios e creo un metodo con la chiamata axios.
```javascript
searchFilm(){
      axios.get(this.store.apiInfo.url + 'movie',{
      params:{
      api_key:this.store.apiInfo.apiKey,
      query:this.store.apiInfo.titleInput,
      language:'it',
      }
  })
  .then((response)=> this.store.results=response.data.results )
}
```
Nel template inserisco un tag input con all'interno il v-model collegato alla chiave di store.js. Inserisco anche l'evento @input che scatenerà searchFilm
```javascript
    <input type="text" placeholder="inserisci titolo film" @input="searchFilm" v-model="store.apiInfo.titleInput">
```
In fine inserisco un 'ul' con i dati che otterò dalla chiamata axios ogni volta che scrivo qualcosa nell'input. **MILESTONE 1 completata**

Creo un metodo sempre in Main.vue per mostrare la bandiera della lingua originale dei film trovati.
```javascript
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
//Questo metodo verrà richiamato nell'ul/li del template:
<li><img :src="flag(film.original_language)" class="flag"></li>
```
Per allargare la ricerca alle serie tv creo nel metodo SearchFilm una seconda chiamata axios che avrà 'tv' come stringa aggiuntiva dell'url, al posto di movie. Nel file store.js creo un nuovo array di risultati per i risultati della chiamata delle serie tv. **MILESTONE 2 completata**





