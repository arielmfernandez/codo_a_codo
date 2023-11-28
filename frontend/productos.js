const { createApp } = Vue

createApp({
    data() {
        return {
            productos: [],
            url: 'http://127.0.0.1:5000/productos',
            error: false,
            cargando: true,
            precio:0,
            stock:0,
            nombre:"",
            imagen:"",
            descripcion:""
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(producto) {
            const url = 'http://localhost:5000/productos/' + producto;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // o rest.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let producto = {
                nombre:this.nombre,
                descripcion:this.descripcion,
                precio: this.precio,
                stock: this.stock,
                imagen:this.imagen
            }
            var options = {
                body:JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./shoppingCart.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },

    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
