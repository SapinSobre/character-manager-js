( () => {
    const showCharacterDetails = async() => {
        let id = document.location.href.split("=")[1];
        let response = await fetch(`https://character-database.becode.xyz/characters/${id}`);
        let details = await response.json();        
        let name = document.querySelector(".characterName");
        let shortDescription = document.querySelector('.characterShortDescription');
        let description = document.querySelector(".characterDescription");            
        let photo = document.querySelector('.characterPhoto');
        name.innerText = details.name;
        shortDescription.innerText = details.shortDescription;
        description.innerText = details.description;
        photo.setAttribute("src", `data:image/gif;base64,${details.image}`);
        photo.setAttribute("alt", "hero's photo");                      
    }

    const goToForm = async() => {
        let id = document.location.href.split("=")[1];                     
        document.querySelector('.updateButton_link').href = `http://localhost:5500/pages/createEditDeleteCharacter/createEditDeleteCharacter.html?id=${id}`;
    }

    const deleteCharacter = async() => {
        let id = document.location.href.split("=")[1];
        const response = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
          method: "DELETE"
        });  
        if (!response.ok) {
          throw new Error("No hero with that ID");
        } 
    }   
      
    
 //-----------------------------------------------------------------------------------------------------------------------------   
    showCharacterDetails();     

    document.querySelector(".updateButton").addEventListener("click", () => {
        goToForm();   
    })

    document.querySelector(".deleteButton").addEventListener("click", async() => { 
        deleteCharacter();   
      });      
    
})()