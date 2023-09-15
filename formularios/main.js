const formUser = document.querySelector("#formUser");

const users =[
    {
        username:"diana",
        useremail:"diana@gmail.com",
       
    },
    {
        username:"sonia",
        useremail:"son@gmail.com",
       
    },
    {
        username:"luis",
        useremail:"lu@gmail.com",
       
    }
];

formUser.addEventListener("submit", function (e){
    e.preventDefault();

         const username = e.target.username.value.trim();
         const useremail = e.target.useremail.value.trim();
         const pass1 = e.target.userpass1.value.trim();
         const pass2 = e.target.userpass2.value.trim();

          if (!username || !useremail || !pass1 || !pass2)
              return Swal.fire({ icon: 'error',title: 'Oops...',text: 'Todos los campos son requeridos',footer: '<a href="">Why do I have this issue?</a>'});

          if (pass1 !== pass2) 
              return Swal.fire('Ambas contraseñas deben ser iguales');

    let user = {
        username,
        useremail,
        pass1,
        pass2,
    };

    users.push(user);
    
    drawUser(users);

    formUser.reset();
});


function drawUser(arr){
    let html= '';

    for (const {username, useremail} of arr) {
        html += `
        <div class= "user">
            <h3>Nombre: ${username}</h3>
            <p>Correo: ${useremail}</p>
            <button class="btn--del">Eliminar</button>
        </div>
        `;        
    }
    const userHTML = document.querySelector(".users");
    userHTML.innerHTML= html;
}
drawUser(users);



















/*desempaquetar es como tener un objeto con sus propiedades, sacarlo e las llaves y quedarme solo co las propiedades de ese objeto
ejem.{nombre,edad,hobbies}estas son las propiedades del objeto persona,  para ingresar toca persona.edad persona.nombre, 
 
for (const user of arr) {
        html += `
        <div class= "user">
            <h3>Nombre: ${user.username}</h3>
            <p>Correo: ${user.useremail}</p>
        </div>
        `;        
    }
pero desempaquetar es decir todas
estas propiedades son igual a persona ej. nombre,edad,hobbies = persona  nombre, edad, hobbies
 for (const user of arr) {
        const{username, useremail}=user;
        html += `
        <div class= "user">
            <h3>Nombre: ${username}</h3>
            <p>Correo: ${useremail}</p>
        </div>
        `;        
    }*/
