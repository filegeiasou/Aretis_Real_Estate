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
      img.addEventListener('click', function() {
        openModal(url,imageUrls); // Function to open a modal with the clicked image
      });
      imageContainer.appendChild(img);
    });


    function openModal(url,imageUrls) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
      
        const modalImg = document.createElement('img');
        modalImg.src = url;
      
        const prevButton = document.createElement('button');
        prevButton.id = 'prev-btn';
        prevButton.innerHTML = '&lt;';
      
        const nextButton = document.createElement('button');
        nextButton.id = 'next-btn';
        nextButton.innerHTML = '&gt;';

        let currentIndex = imageUrls.indexOf(url);
      
        lightbox.appendChild(modalImg);
        lightbox.appendChild(prevButton);
        lightbox.appendChild(nextButton);
        document.body.appendChild(lightbox);
      
        // Add event listeners to close lightbox and navigate images
        lightbox.addEventListener('click', function(event) {
          if (event.target === lightbox) {
            lightbox.remove();
          }
        });
      
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
            modalImg.src = imageUrls[currentIndex];
          });
        
          nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % imageUrls.length;
            modalImg.src = imageUrls[currentIndex];
          });
      }
           
      
      

    // let addressElement = document.getElementById('address');
    // let address1 = addressElement.textContent;
    //let fullPath = String(address.startsWith('/') ? address : new URL(address, window.location.href).href);
    //let fullPath = window.location.href;
    //let filename = fullPath + '/desc.txt'; // append 'desc.txt' to the full path
    //slet filename = "C:\\Users\\fileg\\OneDrive\\Υπολογιστής\\areti_real_estate\\desc.txt";
    //console.log(filename);
    //document.getElementById('filename').innerText = filename;//setAttribute('data-filename', filename);
    let address1 = String(address);
    if(address1 === "123 Main St") {
        const fileContent = `Welcome to 123 Main St, a charming and spacious home nestled in a vibrant neighborhood. 
        This house boasts 3 generously-sized bedrooms and 2 full bathrooms, making it a perfect choice for families or those who enjoy having extra space. 
        The master bedroom features an en-suite bathroom for added convenience. 
        The open-concept living area is perfect for entertaining and everyday living. 
        The kitchen is equipped with modern appliances and ample storage space. 
        The house also features a large backyard, perfect for outdoor activities. 
        With its prime location close to schools, parks, and shopping centers, 123 Main St is a wonderful place to call home`;
        document.getElementById('desc').textContent = fileContent;
    }
    else if(address1 === "456 Oak Ave") {
        const fileContent = `Welcome to 456 Elm St, a beautiful and modern home located in a peaceful and serene neighborhood.
        This house features 4 bedrooms and 3 bathrooms, providing plenty of space for families and guests.
        The master bedroom includes a walk-in closet and a luxurious en-suite bathroom with a soaking tub.
        The open-concept living area is bright and spacious, perfect for entertaining or relaxing.
        The kitchen is a chef's dream, with high-end appliances and a large island for food prep and casual dining.
        The backyard is a private oasis, with a covered patio and lush landscaping.
        Located near top-rated schools and local amenities, 456 Elm St is the perfect place to call home.`;
        document.getElementById('desc').textContent = fileContent;
    }
  }

