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

    // Prevent image from interfering with clicks
    image.style.pointerEvents = 'none';

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

function placeImageInCell(event) {
    if (!currentImage) return;

    let clickedCell = event.target;

    console.log('Click detected on:', clickedCell, 'Tag:', clickedCell.tagName);
    
    if (clickedCell.tagName.toLowerCase() === 'img') {
        
        // append the image to the td
        clickedCell = clickedCell.parentElement;
        
    }
    
    console.log('What got clicked: ', clickedCell);

    if (clickedCell.tagName.toLowerCase() === 'td') {
        clickedCell.appendChild(currentImage);

        // Position the image inside the <td>
        currentImage.style.position = 'relative'; 
        currentImage.style.left = '0';
        currentImage.style.top = '0';

        console.log('image placed! in: ', clickedCell);
    } else {
        console.log('Click was outside a td');
        document.body.removeChild(currentImage);
    }

    document.removeEventListener('mousemove', followMouse)
    currentImage = null;

};

document.addEventListener('click', function(event) {
    if (currentImage){

        placeImageInCell(event);

    } else {
        createImage(event);
    }
});