(() => {

  const fillForm = async(id) => {    
    let response = await fetch(`https://character-database.becode.xyz/characters/${id}`);
    let character = await response.json();
    let inputs = document.querySelectorAll('input');     
    inputs[1].value = character.name;
    inputs[2].value = character.shortDescription;
    inputs[3].value = character.description; 
    let imagePreview = document.querySelector(".imgPreview");
    imagePreview.setAttribute("src", `data:image/gif;base64,${character.image}`);
    imagePreview.setAttribute("alt", "hero's photo");
  } 

  const updateCharacter = async (id) => {
    let resp = await fetch(`https://character-database.becode.xyz/characters/${id}`);
    let charac = await resp.json();
    let description = document.querySelector(".form_description").value;    
    let name = document.querySelector(".form_name").value;
    let shortDescription = document.querySelector('.form_shortDescription').value;
     let reponse = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ description, id, img, name, shortDescription })
    });   
    console.log(reponse);
  }
 
  const addCharacter = async() => {
    let description = document.querySelector('.form_description').value;
    let id = null;
    let image = "";
    let name = document.querySelector('.form_name').value;   
    let shortDescription = document.querySelector('.form_shortDescription').value;    
    console.log(shortDescription);
    let resp = await fetch("https://character-database.becode.xyz/characters/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, id, image, name, shortDescription })
    }); 
    console.log(resp);
   
  }

  const deleteCharacter = async(id) => {
    const response = await fetch(`https://character-database.becode.xyz/characters/${id}`, {
      method: "DELETE"
    });  
    if (!response.ok) {
      throw new Error("No hero with that ID");
    } 
  } 

  const encodeImageFileAsURL = (imgUrl) => {    
      let fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent) => {
      let srcData = fileLoadedEvent.target.result; // <--- data: base64
      //  console.log(srcData);
      document.querySelector(".imgPreview").setAttribute('src', srcData);  
      fileReader.readAsDataURL(imgUrl);
      console.log(imgUrl);
    }
  }

  
  if(document.location.href.split("=").length === 1){
    document.querySelector('.saveButton').addEventListener('click', async() => {
      addCharacter();
    })
  }
  else{
    let idC  = document.location.href.split("=")[1];
    fillForm(idC); 
    document.querySelector('.saveButton').addEventListener('click', async() => {
      updateCharacter(idC);
    })
  }

  /*document.querySelector('.filePicker').addEventListener('change', (e) => {
    
    var objectURL = window.URL.createObjectURL(e.target.files[0]).split('5500/')[1].createObjectURL();    */ 
    /*  let file = e.target.files[0];
      console.log(fileReader.readAsDataURL(file));    */   
      //console.log(`encodeImageFileAsURL = ${url}`);
        /*let img = document.querySelector('.imgPreview').setAttribute("src", `data:image/gif;base64,/9j/${objectURL}`);
        window.URL.revokeObjectURL(objectURL);
  })*/
 
  document.querySelector('.deleteButton').addEventListener('click', async() => { 
    let idCharac  = document.location.href.split("=")[1]; 
    deleteCharacter(idCharac);   
  });
   
})()