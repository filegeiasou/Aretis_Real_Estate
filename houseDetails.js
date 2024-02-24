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
    else if(address1 === "789 Elm St") {
        const fileContent = `Welcome to 789 Elm St, a stunning and luxurious home located in a prestigious and sought-after neighborhood.
        This house features 5 bedrooms and 4.5 bathrooms, offering plenty of space for families and guests.
        The master suite is a private retreat, with a spacious bedroom, a sitting area, and a spa-like en-suite bathroom.
        The living area is grand and elegant, with high ceilings, custom millwork, and a cozy fireplace.
        The gourmet kitchen is a chef's dream, with top-of-the-line appliances, a large island, and a sunny breakfast nook.
        The backyard is an entertainer's paradise, with a sparkling pool, a built-in barbecue, and a covered patio.
        Located near top-rated schools and upscale shopping and dining, 789 Elm St is the epitome of luxury living.`;
        document.getElementById('desc').textContent = fileContent;
    }
    else if(address1 === "101 Pine St") {
        const fileContent = `Welcome to 101 Pine St, a charming and cozy home located in a quiet and friendly neighborhood.
        This house features 2 bedrooms and 1 bathroom, making it an ideal choice for first-time homebuyers or those looking to downsize.
        The living area is bright and inviting, with large windows and a cozy fireplace.
        The kitchen is equipped with modern appliances and plenty of storage space.
        The backyard is a peaceful retreat, with a covered patio and a lush garden.
        Located near parks, schools, and local amenities, 101 Pine St is the perfect place to call home.`;
        document.getElementById('desc').textContent = fileContent;
    }
    else {
        document.getElementById('desc').textContent = "No description available";
    }
  }

