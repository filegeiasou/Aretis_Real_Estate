window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const address = urlParams.get('address');
    const details = urlParams.get('details');
    const price = urlParams.get('price');
    const imageUrls = JSON.parse(urlParams.get('imageUrls'));
  
    document.getElementById('address').innerText = address;
    document.getElementById('details').innerText = details;
    document.getElementById('price').innerText = price;
  
    const imageContainer = document.getElementById('image-container');
    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'House Image';
      imageContainer.appendChild(img);
    });
  }