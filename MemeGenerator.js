document.getElementById("memeGenerator").addEventListener('submit', function(e) {
        e.preventDefault();

    const imageUrl = document.getElementById("imageUrl").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    const newMeme = document.createElement('div');
    newMeme.classList.add('newMeme');
        
    const newMemeBack = document.createElement('img');
    newMemeBack.src = imageUrl;
    newMemeBack.className ="newMemeBack";
    const newMemeTopText = document.createElement("p");
    newMemeTopText.className ="topText";
    newMemeTopText.innerText = topText;
    const newMemeBottomText = document.createElement("p");
    newMemeBottomText.innerText = bottomText;  
    newMemeBottomText.className ="bottomText";
    
    newMeme.appendChild(newMemeBottomText);
    newMeme.appendChild(newMemeTopText);
    newMeme.appendChild(newMemeBack);

    const removeButton = document.createElement('button');
    removeButton.className ="removeButton";
    removeButton.addEventListener('click', function(e) {
        e.defaultPrevented

    }
    
    document.getElementById('Memes').appendChild(newMeme);
    memeGenerator.reset();

          });
