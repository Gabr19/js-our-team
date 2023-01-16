// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.

const team = [
    {name : 'Wayne Barnett',
    role : 'Founder & CEO',
    image : 'wayne-barnett-founde-ceo.jpg'
    }, 
    {name : 'Angela Caroll',
    role : 'Chief Editor',
    image : 'angela-caroll-chief-editor.jpg',
    },
    {name : 'Walter Gordon',
    role : 'Office Manager',
    image : 'walter-gordon-office-manager.jpg'
    }, 
    {name : 'Angela Lopez',
    role : 'Social Media Manager',
    image : 'angela-lopez-social-media-manager.jpg',
    },
    {name : 'Scott Estrada',
    role : 'Developer',
    image : 'scott-estrada-developer.jpg'
    }, 
    {name : 'Barbara Ramos',
    role : 'Graphic Designer',
    image : 'barbara-ramos-graphic-designer.jpg',
    }

];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
let key;

for ( key in team ){
     console.log(team[key])
    
 }

//  MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


    let cont = document.getElementById('container').innerHTML =  team[i, name]



// for(let i = 0 ; i < team.length ; i++){

//     // container.innerHTML = team{key}
//     document.write(team[i])


// }


