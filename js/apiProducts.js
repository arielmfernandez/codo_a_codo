const { createApp } = Vue


createApp({
    data() {
        return {
            
            url: '../js/datos.json',
            error: false,
            datos: [],
            
                                  
        }
    },
    methods:{
         fetchdata(url){
            fetch(url)
            .then(response => response.json())
            .then(  data => {
                 console.log(data)
                 this.datos=data.resultados
                 
                 
                 
            }
                 ); 



            
         }



    },
    created(){
         this.fetchdata(this.url)

    }

}).mount('#app')




