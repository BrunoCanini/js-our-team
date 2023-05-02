const listTeam = 
[
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "./img/wayne-barnett-founder-ceo.jpg"
    },

    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto : "./img/angela-caroll-chief-editor.jpg"
    },

    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto : "./img/walter-gordon-office-manager.jpg"
    },

    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto : "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "./img/scott-estrada-developer.jpg"
    },

    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "./img/barbara-ramos-graphic-designer.jpg"
    }

]

console.log(listTeam)

// let contenitore = document.getElementById("container");
// let box;

// for (const key in listTeam) {
//     const element = listTeam[key];

//     console.log(element.nome ,element.ruolo , element.foto)

//     box = document.createElement("li");
//     box.innerText = `${element.nome} , ${element.ruolo} , ${element.foto}`;
//     contenitore.append(box);
// }

let contenitore = document.getElementById("container");
let box;
let foto;

for (const key in listTeam) {
    const element = listTeam[key];

    console.log(element.nome ,element.ruolo , element.foto)

    box = document.createElement("li");
    box.innerText = `${element.nome} , ${element.ruolo}`;

    foto = document.createElement("img");
    foto.src = element.foto;
    foto.classList.add("pic")

    contenitore.append(foto , box);

}