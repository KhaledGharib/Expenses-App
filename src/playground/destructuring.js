// const person={
//     name:"khaled",
//     age:20,
//     location:{
//         city:"karabuk",
//         temp:11
//     }
// }

// const {name: firstName ='Anonymous',age}= person

// console.log(`${firstName} is ${age}`)




// const{temp:temperatuer,city}=person.location
// if(city && temperatuer){

//     console.log(`it's ${temperatuer} in ${city}`)
// }







// const book ={
//     title:'Ego is the enemy',
//     author:'Ryan',
//     publisher:{
//         name:'Penguin'
//     }
// }

// const{name:publisherName='Self-Published'}=book.publisher

// console.log(publisherName)



// 
// array
// 


const address = ['1080.sk','turkye','7080']

const [street,city,zip,state='Karabuk']= address

console.log(`you are in ${city} ${state}`)



const item =['Coffe (iced)','$7.00','$15.00','$20.00']

const [itmeName,,midSize] = item

console.log(`A medium ${itmeName} cost ${midSize}`)
