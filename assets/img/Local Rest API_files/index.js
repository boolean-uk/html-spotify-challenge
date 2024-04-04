// HTTP CRUD
// CREATE --> POST
// READ --> GET
// UPDATE --> PATCH /PUT
// DELETE --> DELETE

//CREATE DOGS

const root = 'http://localhost:3000';
const newDogForm = document.querySelector('#new-dog');
const dogContainer = document.querySelector('#dogs')
newDogForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    //Getting data from the for
    //This is a plain Js object known as POJO, (plain js object)
    const data = {
        name : e.target[0].value,
        breed: e.target[1].value
 
    }
/*     e.target[0].value = '';
    e.target[1].value = '';  */


    const options = {   
        method: 'POST',
        headers: {'Content-Type': 'application/json' }, //The body of the data will be in JSON format
        body: JSON.stringify(data)
        //body must be a JSON format of object data
    }
    
    //same thing as http://localhost:3000/dogs
    //fetch are get request by default
    fetch(`${root}/posts/`, options)
    .then((response) => response.json)
    .then((data) => console.log(data)) //return data
})

fetch(`${root}/posts`)