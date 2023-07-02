document.getElementById("memeGenerator").addEventListener('submit', function(e) {
        e.preventDefault();

    const imageUrl = document.getElementById("imageUrl").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    const newMeme = document.createElement('div');
    newMeme.id = "newMeme";
    newMeme.classList.add('newMeme');
        
    const newMemeBack = document.createElement('img');
    newMemeBack.src = imageUrl;
    newMemeBack.className ="newMemeBack"
    const newMemeTopText = document.createElement("h2");
    newMemeTopText.className ="topText"
    newMemeTopText.innerText = topText;
    const newMemeBottomText = document.createElement("h2");
    newMemeBottomText.innerText = bottomText;  
    newMemeBottomText.className ="bottomText"
    
    newMeme.appendChild(newMemeTopText);
    newMeme.appendChild(newMemeBottomText);
    newMeme.appendChild(newMemeBack);
    
    document.getElementById('Memes').appendChild(newMeme);
    memeGenerator.reset();

      
           });
