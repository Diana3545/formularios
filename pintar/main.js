/*const user ={
    name:"diana rios",
    email:"diana@gmail.com",
    hobbies:[
        "gym",
        "musica",
        "bailar",],
} 
  */  


const users =[ 
    {
        name:"Diana Rios",
        age: 28,
        email:"diana@gmail.com",
        hobbies:[
            "gym",
            "musica",
            "bailar",],
    },
    {
        name:"Marcela Cespedes",
        age: 37,
        email:"marce@gmail.com",
        hobbies:[ "comer","dormir","reir",],
    },
    {
        name:"Samuel Benedetti",
        age: 21,
        email:"sam@gmail.com",
        hobbies:[ "bailar","tomar cafe","reir",],
    },
    {
        name:"Joseph Vasquez",
        age: 29,
        email:"jos@gmail.com",
        hobbies:[ "gym","musica","comer",],
    },{
        name:"Sofia Henao",
        age: 18,
        email:"sof@gmail.com",
        hobbies:[ "voleyball","dormir","bailar",],
    }

];

      function printHobbies(hobbies) {
        let html = "";

        for (const hobbie of hobbies) {
           html += `<li>${hobbie}</li>`;
        }

        return html;
}

    function printUsers() {
        let html = "";
        for (const user of users) {
   
        html += `
            <div class="user">
                <h3>${user.name}- ${user.age}años</h3>
                <p>${user.email}</p>
                <ul class= "hobbies">
                    ${printHobbies(user.hobbies)}
                </ul>
            </div>
            `;
        }

        const userHTML = document.querySelector(".users");

        userHTML.innerHTML = html;

}
        printUsers();



        





    