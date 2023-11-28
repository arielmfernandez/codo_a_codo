const { createApp } = Vue

createApp({
    data() {
        return {
            clientes: [],
            url: 'http://127.0.0.1:5000/clientes',
            error: false,
            cargando: true,
            dni:0,
            tel:0,
            celular:0,
            numero:0,
            piso:0,
            departamento:0,
            codigoPostal:0,
            nombre:"",
            apellido:"",
            mail:"",
            usuario:"",
            clave:"",
            razonSocial:"",
            direccion:"",
            localidad:"",
            ciudad:"",
            provincia:"",
            pais:"",
            cuit:"",
            cuil:""
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.clientes = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(cliente) {
            const url = 'http://localhost:5000/clientes/' + cliente;
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
            let cliente = {
                nombre:this.nombre,
                apellido:this.apellido,
                dni:this.dni,
                mail:this.mail,
                usuario:this.usuario,
                clave:this.clave,
                cuil:this.cuil,
                razonSocial:this.razonSocial,
                cuit:this.cuit,
                tel:this.tel,
                celular:this.celular,
                direccion:this.direccion,
                numero:this.numero,
                piso:this.piso,
                departamento:this.departamento,
                codigoPostal:this.codigoPostal,
                localidad:this.localidad,
                ciudad:this.ciudad,
                provincia:this.provincia,
                pais:this.pais
            }
            var options = {
                body:JSON.stringify(cliente),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./registrocliente.html";  // recarga clientes.html
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
