document.getElementById("memeGenerator").addEventListener('submit', function(e) {
        e.preventDefault();
// creating Variables from the Meme Generator Form input values by grabbing them using 'getElementbyId' 
    const imageUrl = document.getElementById("imageUrl").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    //Create Div container for the Generated Meme to append to 
    const newMeme = document.createElement('div');
    newMeme.classList.add('newMeme');
    //Create "Generated Meme" Image variable from the image link input variable established above  
    const newMemeBack = document.createElement('img');
    newMemeBack.src = imageUrl;
    newMemeBack.classList.add("newMemeBack");
    //Create "Generated Meme" Top Text variable from the Top Text input variable established above  
    const newMemeTopText = document.createElement("p");
    newMemeTopText.classList.add("topText");
    newMemeTopText.innerText = topText;
    newMeme.classList.add('newMeme');
    //Create "Generated Meme" Bottom Text variable from the Bottom Text input variable established above 
    const newMemeBottomText = document.createElement("p");
    newMemeBottomText.innerText = bottomText;  
    newMemeBottomText.classList.add("bottomText");
    //create "remove" button and append it to "newMeme" div. add event listenere to remove the "newMeme" from the "Memes" div established in html body
    const removeButton = document.createElement('button');
    removeButton.classList.add("removeButton");
    removeButton.id ="removeButton";
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', function(e) {
        this.parentElement.remove();
    });
    //append all elements to dive "newMeme" to create the "Generated Meme"
    newMeme.appendChild(newMemeBottomText);
    newMeme.appendChild(newMemeTopText);
    newMeme.appendChild(newMemeBack);
    newMeme.appendChild(removeButton);

    //append the "newMeme" div to the established "memes" div in the body to view the NewMeme in the body
    document.getElementById('Memes').appendChild(newMeme);
    memeGenerator.reset();


          });
          
         
          
            
