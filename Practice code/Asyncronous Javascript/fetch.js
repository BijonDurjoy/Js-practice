function randomDog(){
    fetch(`https://dog.ceo/api/breeds/image/random`).then(function(raw){
        return raw.json();
    }).then(function(data){
        console.log(data);;
    }).catch(function (error){
        console.log("Error: ",error);
        
    })
}
randomDog();