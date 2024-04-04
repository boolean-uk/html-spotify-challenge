//console.log(data);

// WRITE YOUR CODE BELOW!
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const HeaderUl = document.querySelector('.dogs-list')


data.forEach((dogDetails) =>{

    const dogNameButton = document.createElement('li')

    dogNameButton.setAttribute('class', 'dogs-list__button')

    dogNameButton.innerText = dogDetails.name
    
    HeaderUl.append(dogNameButton)

    dogNameButton.addEventListener('click', (e)=>{
        e.target.classList.toggle('green')
    })
})
