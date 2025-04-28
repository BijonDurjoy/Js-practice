async function randomDog(){
    let dogInfo = await fetch(`https://dog.ceo/api/breeds/image/random`);
    let rawData = await dogInfo.json();
    console.log(rawData);
}
randomDog();