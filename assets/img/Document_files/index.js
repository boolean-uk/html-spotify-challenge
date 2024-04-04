const state = {
    animals: ['dog', 'cat', 'fish', 'beaf', 'other'],
    mypets: []
}


const renderPetList = () =>{
    state.mypets.push({type: 'dog', quantity: 1} )
    state.mypets.push({type: 'cat', quantity: 2} )

    const main = document.querySelector('main')

    state.mypets.forEach((pet) =>{
        const petData = document.createElement('p')
        petData.innerText = `Number of  ${pet.type}s that i own: ${pet.quantity}`
        main.append(petData)

    })

}

const renderHeader = ()=>{

    const header = document.querySelector('header')

    state.animals.forEach((animal) => {

        const name = document.createElement('strong');
        name.innerText = animal;

        const addButton = document.createElement('button');
        addButton.innerText = `Add 1 ${animal} `;
        addButton.value = animal;

        addButton.addEventListener('click', (e)=>{

            //when the addButton is clicked,  this would loop through the mypets [], and find if the  pet.type  existed mypets []
            //if the animal is already in the mypets []
            const FoundPet = state.mypets.find((pet) => pet.type === animal)
            if(FoundPet){
                FoundPet.quantity ++
            }
            else{
                state.mypets.push({type: animal, quantity: 1})
            }
        })
        
        //when the addButton is clicked,  this would loop through the mypets [], and find if the  pet.type  existed in mypets []
        //if the animal is already in the mypets []
        const removeButton = document.createElement('button')
        removeButton.innerText = `Remove 1 ${animal}`

        removeButton.addEventListener('click', (e)=>{
            const FoundPet = state.mypets.find((pet)=> pet.type === animal)
            
            if(FoundPet){
                //quantity shouldnt go below 0 i.e if the foundpet.quantity is = 0, its stops the subtraction
                if(FoundPet.quantity !== 0){
                    FoundPet.quantity --
                    
                }
            
            }
            
        })
    
        const animalContainer =  document.createElement('div')
        animalContainer.append(addButton);
        animalContainer.append(name)
        animalContainer.append(removeButton);
        header.append(animalContainer)
     
   
    })

    renderPetList()
}


const render = ()=>{
    
    renderPetList()
    renderHeader()

}

render()