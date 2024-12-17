const stockpile = document.getElementById('stockpile');
const firstCell = document.getElementById('firstCell');

let currentImage = null;

function createImage(event) {
    const image = document.createElement('img');
    image.src = 'images/Enemy1.png';
    image.alt = 'A new item to be placed';
    image.style.position = 'absolute';
    image.style.left = `${event.clientX}px`;
    image.style.top = `${event.clientY}px`;
    document.body.appendChild(image);

    currentImage = image;

    document.addEventListener('mousemove', followMouse);
}

function followMouse(event) {
    if (currentImage) {
        currentImage.style.left = `${event.clientX}px`;
        currentImage.style.top = `${event.clientY}px`;
    }

}

document.addEventListener('click', function(event) {
    if (currentImage){

        // If there's already an image, "un-stick" it 
        // by removing the mousemove listener
        document.removeEventListener('mousemove', followMouse);

        // Reset the currentImage variable
        currentImage = null;

    } else {
        createImage(event);
    }
});