
 (() => {
    const onloadFunction = async() => {     
      const response = await fetch("https://character-database.becode.xyz/characters");
      const characters = await response.json();
      console.log(characters);
      let vignette = document.getElementById('characterVignette');      
      for(let i = 0; i < characters.length; i++){
         let clone = document.importNode(vignette, true);
         let name = clone.querySelector(".characterName");
         let description = clone.querySelector(".characterDescription");            
         let photo = clone.querySelector('.characterPhoto');
         let button = clone.querySelector(".detailsButton");
         name.innerText = characters[i].name;
         description.innerText = characters[i].shortDescription;
         photo.setAttribute("src", `data:image/gif;base64,${characters[i].image}`);
         photo.setAttribute("alt", "hero's photo");
         let template = document.getElementById('target');
         template.appendChild(clone);  
         
         button.addEventListener("click", (e) => {
            e.target.setAttribute('href',`../pages/character/character.html?id=${characters[i].id}`);  
         })   
      }     
   }     
   document.onload = onloadFunction();    
})() 