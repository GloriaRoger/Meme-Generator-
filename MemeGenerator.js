document.getElementById("memeGenerator").addEventListener('submit', function(e) {
        e.preventDefault();

    const imageUrl = document.getElementById("imageUrl").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    const newMeme = document.createElement('div');
    newMeme.classList.add('newMeme');
    
    const newMemeBack = document.createElement('img');
    newMemeBack.image.src = imageUrl;
    newMemeBack.id ="newMemeBack"
    const newMemeTopText = document.createElement("h2");
    newMemeTopText.innerText = topText;
    const newMemeBottomText = document.createElement("h2");
    newMemeBottomText.innerText = bottomText;  
    
    dankMemes.appendChild(newMemeTopText);
    dankMemes.appendChild(newMemeBottomText);
    dankMemes.appendChild(newMemeBack);
    
    const removeButton = document.createElement('button');
    removeButton.type = 'submit';
    removeButton.innerHTML = 'Remove';
    removeButton.id = "removeButton";
     
     dankMemes.appendChild('removeButton');
    document.getElementById('Memes').appendChild(dankMemes);
    memeGenerator.reset();

      
           });

          document.getElementById('dankMemes').addEventListener('submit', function(e){
            e.target.parentNode.remove();
          });