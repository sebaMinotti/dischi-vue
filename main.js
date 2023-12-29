const app = new Vue({
    el:'#root',
    data:{
     cerca:'',
     logo:'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png',
     generi:['all'],
     album:[]
    },
    mounted(){
           axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((disco)=>{
                  
                    
                      console.log(disco.data.response);
                      this.album=disco.data.response
                      console.log(this.album);
                      this.album.sort((a, z)=>{
                           return Number(a.year) - Number(z.year)
                      })

                      this.album.forEach(element => {
                        element.genre= element.genre.toLowerCase()
                            if(!this.generi.includes(element.genre)){
                                this.generi.push(element.genre)
                            }

                            const immagineConErrore = new Image();
                            immagineConErrore.src = element.poster;
            
                            // Aggiungi un gestore per l'evento di errore dell'immagine
                            immagineConErrore.onerror = () => {
                                element.poster = 'https://cdn3.vectorstock.com/i/1000x1000/37/32/404-error-page-not-found-vinyl-music-broken-vector-26853732.jpg';
                            };
     
                              return element
                      });

                      console.log(this.generi);
                            
                })
                .catch((error)=>{
                       console.log(`errore durante il caricamento dei dati`,error);
                })
    },
    methods:{
  ricercaGeneri:function(card) {
        
       if(this.cerca==='all'||card.genre===this.cerca){
        return true
       } else {
        return false
       }
  }
    }

})