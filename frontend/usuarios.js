const { createApp } = Vue

createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://martinezre.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            mail: "",
            usuario: "",
            clave: ""
        }
    },
    methods: {
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


        validar() {
            var usuario = document.getElementById("usuario");
            
            var email = document.getElementById('createUser');
            var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
           
            var clave=document.getElementById("createPass");
            
            var password = document.getElementById('createPass').value;
            var repeatPassword = document.getElementById('repeatPassword').value;
            
            var error = false;

            if (usuario.value.length < 2) {
                error = true;
            }
            if (!email.value.match(emailFormat)) {
                error = true;
            }
            if (password !== repeatPassword) {
                error = true;
                // password.focus();
            } 
            if(clave.value==""){
                error = true;
              }
            if(clave.value.length<8){
                error = true;
              }
            if(!/[A-Z]/.test(clave.value)){
                error = true;
              }
            if(!/[a-z]/.test(clave.value)){
                error = true;
              }
            if(!/\d/.test(clave.value)){
                error = true;
              }
            if(!/[@$!%*?&]/.test(clave.value)){
                error = true;
             }
            return !error;
            
          },

        grabar() {
            if (this.validar()) {
                let usuario = {
                    mail: this.mail,
                    usuario: this.usuario,
                    clave: this.clave,
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
                        window.location.href = "./altausuario.html";  // recarga clientes.html
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabar")  // puedo mostrar el error tambien
                    })
            } else {
                alert("Por favor, completa los campos correctamente.");
            }
        }
    },

    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
