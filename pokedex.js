const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");  //busca en elcodigo el id con es enombre
    let pokeInput = pokeName.value.toLowerCase(); //el value es lo que tiene adentro el input
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => { //consulta una api para sustraer la información, .then es la promesa de una función
        if(res.status != "200"){
            console.log(res);
            pokeImage("https://navisaf.com/wp-content/themes/consultix/images/no-image-found-360x250.png");
        }else{
            return res.json(); //nos regresa el estado de la respuesta
        }
    }).then((data) => {
        console.log(data); //nos regresa la informacion
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg); 
    })
}
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}
const pokeNombre = (pokeInput) => {
    
}