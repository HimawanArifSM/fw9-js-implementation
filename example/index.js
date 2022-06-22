//repo hari ini fw9-js-implementation


const fetch = require('node-fetch')


// fetch('https://rickandmortyapi.com/api/character/1')
// //fetch akan mengembalikan promise dg tipe response => response.json()
// //untuk mengubah tipe json menjadi object
// .then(res => res.json())//promise: data yang sudah diubah || res.json di return karena tidak di kurung kurawal
// //.then(data => console.log(data))
// .then(data => {
//     console.log(data.name)
//     console.log(data.gender)
//     data.episode.forEach(eps =>{
//         console.log(eps)
//     })
// }).catch(e=>{
//     //
// })

// .then(res => {
//     res.json().then(data => {
//         console.log(data.name)
//         console.log(data.gender)
//         data.episode.forEach(eps =>{
//             console.log(eps)
//         })
//     }).catch(e=>{
//          console.log('parsing error')
// })
// }).catch(e=>{
//     console.log('failed no retrieve data')
// })

async function getCharacterData(){
    try{
    const request = await fetch('https://rickandmortyapi.com/api/character/1')// wait hingga respon object diterima
    const data = await request.json()
    //ingat jika promise harus ada await (fetch dan json itu promise)
    //console.log(data)
    data.episode.forEach(eps =>{
                console.log(eps)
            })
}catch(e){
    //handling error
}
}

getCharacterData();

(async function(){
    const request = await fetch('https://rickandmortyapi.com/api/character/1')// wait hingga respon object diterima
    const data = await request.json()
    //ingat jika promise harus ada await (fetch dan json itu promise)
    //console.log(data)
    data.episode.forEach(eps =>{
                console.log(eps)
            })
})();