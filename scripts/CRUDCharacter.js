(() => {

  document.getElementById("filepicker").addEventListener("change", function(event) {
    let output = document.getElementById("listing");
    let files = event.target.files;
  
    for (let i=0; i<files.length; i++) {
      let item = document.createElement("li");
      item.innerHTML = files[i].webkitRelativePath;
      output.appendChild(item);
      let image = document.getElementById('photo');
      image.setAttribute('src', files[i].name);
    };
  }, false);
  // your code here
 /* document.getElementById("change").addEventListener("click", () => {
  
   let inputs = Array.from(document.querySelectorAll("input"));
    console.log(inputs);
   let values = inputs.map(({ value }) => {
      return value.trim();
    });

    if (values.some((value) => value === "")) {
      alert("Please fill all fields.");
      return;
    }

    let [name, shortDescription, description] = values; 

   
    console.log(
      `Our new character in the database is ${name}. Short description : ${shortDescription} and the long description :  ${description}`
    );*/

    

  /* const postData = await fetch("https://character-database.becode.xyz/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, id, image, name, shortDescription })
    });

    console.log(postData);
  })*/

  /*document.querySelector('.imageButton').addEventListener('click', () => {
   
   
   
  })*/
 /* document.getElementById('file-selector').addEventListener('change', async (e) => {
      const fileList = e.target.files;
      //let imagePath = `${fileList[0].name}`;
     console.log(fileList)
      let prev = document.querySelector('.imgPreview');
      fileList[0].webkitRelativePath = "../images/jimmy.jpg";
      console.log(fileList[0].webkitRelativePath);*/
      /*  prev.setAttribute("style", `background-image: url("data:image/gif;base64,${image[0].name}");background-repeat: no-repeat; background-size: cover;`);
  console.log(fileList);
      const repertory = await window.showDirectoryPicker();
      let image = await window.showOpenFilePicker();
    console.log(repertory);
    });*/
})()