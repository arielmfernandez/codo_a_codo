const { createApp } = Vue

createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://martinezre.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            dni: 0,
            tel: 0,
            nombre: "",
            apellido: "",
            mail: "",
            usuario: "",
            clave: "",
            razonSocial: "",
            direccion: "",
            provincia: "",
            cuit: "",

        }
    },
    methods: {
        validar() {
            let usuario = document.getElementById("createUser");
            let clave = document.getElementById("createPass");
            let error = false;
      
            document.getElementById("validateCreateUser").innerHTML = " ";
            document.getElementById("validateCreatePass").innerHTML = " ";
            if (usuario.value == "") {
              document.getElementById("validateCreateUser").innerHTML = "Completar";
              error = true;
              usuario.focus();
            }
            if (clave.value.length < 8) {
              document.getElementById("validateCreatePass").innerHTML = "Completar";
              error = true;
              clave.focus();
            }
            return !error;
        },
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(usuario) {
            const url = 'https://martinezre.pythonanywhere.com/usuarios/' + usuario;
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
            if (this.validar()) {
                let usuario = {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    dni: this.dni,
                    mail: this.mail,
                    usuario: this.usuario,
                    clave: this.clave,
                    razonSocial: this.razonSocial,
                    cuit: this.cuit,
                    tel: this.tel,
                    direccion: this.direccion,
                    provincia: this.provincia,

                }
                var options = {
                    body: JSON.stringify(usuario),
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
            } else {
                alert("Por favor, completa los campos correctamente.");
            }
        },

        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')
