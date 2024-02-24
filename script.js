// function openHouseDetails(address, details, price, imageUrls) {
//     window.open(`houseDetails.html?address=${encodeURIComponent(address)}&details=${encodeURIComponent(details)}&price=${encodeURIComponent(price)}&imageUrls=${encodeURIComponent(JSON.stringify(imageUrls))}`, '_blank');
// }

function openHouseDetails(address, details, price, imageUrls) {
    window.location.href = `houseDetails.html?address=${encodeURIComponent(address)}&details=${encodeURIComponent(details)}&price=${encodeURIComponent(price)}&imageUrls=${encodeURIComponent(JSON.stringify(imageUrls))}`;
}

function a(listingElement) {
    let address = listingElement.querySelector('h3').textContent;
    let details = listingElement.querySelector('p').textContent;
    let price = listingElement.querySelectorAll('p')[1].textContent;
    address = address.replace(/ /g, '_');
    let imageUrls = [];
    let i = 1;

    function loadImage() {
        let imageUrl = address + '/house' + i + '.jpg';
        let img = new Image();
        img.src = imageUrl;
        img.onload = function() {
            imageUrls.push(imageUrl); // Only add the URL to the array if the image loads successfully
            i++;
            if (i <= 10) {
                loadImage(); // Load the next image
            } else {
                address = address.replace(/_/g, ' ');
                openHouseDetails(address, details, price, imageUrls); // All images loaded, call openHouseDetails
            }
        };
        img.onerror = function() {
            console.log('Image not found:', imageUrl);
            address = address.replace(/_/g, ' ');
            openHouseDetails(address, details, price, imageUrls); // Image failed to load, call openHouseDetails with the images that loaded successfully
        };
    }

    loadImage(); // Start loading images
}