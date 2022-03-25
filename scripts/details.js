( () => {
    const showCharacterDetails = async() => {
        let urlName  = document.location.href;
        let urlTab = urlName.split("=");
        let id = urlTab[1];
        let response = await fetch(`https://character-database.becode.xyz/characters`);
        let details = await response.json();
        console.log(details);
        for(let i = 0; i < details.length; i++){
            if(details[i].id == id){
                let name = document.querySelector(".characterName");
                let shortDescription = document.querySelector('.characterShortDescription');
                let description = document.querySelector(".characterDescription");            
                let photo = document.querySelector('.characterPhoto');
                name.innerText = details[i].name;
                shortDescription.innerText = details[i].shortDescription;
                description.innerText = details[i].description;
                photo.setAttribute("src", `data:image/gif;base64,${details[i].image}`);
                photo.setAttribute("alt", "hero's photo");
            }
        }
    }
    showCharacterDetails();    
})()