let elements = document.querySelectorAll("button");  

document.addEventListener("keypress", () => {
    const keyPress = event.key;
    
    elements.forEach(key => {
        if(keyPress === key.id) {
            let fileName = key.innerText;
            let remove = /\(|\)/g;

            key.classList.add("pressedKey")
            fileName = fileName.replace(remove, "")

            new Audio(`sounds/${fileName}.wav`).play()

            const timeoutId = setTimeout(function(){
                key.classList.remove("pressedKey")
            }, 100);
        }
    });
})

const onClick = (event) => {
    let id = event.srcElement.id;

    elements.forEach(key => {
        if(id === key.id) {
            let fileName = key.innerText;
            let remove = /\(|\)/g;

            fileName = fileName.replace(remove, "")

            new Audio(`sounds/${fileName}.wav`).play()
        }
    });
}

window.addEventListener('click', onClick);