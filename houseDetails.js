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
    if(address1 === "1") {
        const fileContent = `Πολυτελής κατοικία στον Άλιμο με εξαιρετική θέα θάλασσα, 185 τ.μ. 3ου ορόφου με 3 υ/δ, 2 μπάνια, δυνατότητα WC, 2 θέσεις στάθμευσης και αποθήκη.
        Δάπεδα επιλογής πελάτη, VRV αντλία θερμότητας ξεχωριστή για κάθε κατοικία, ενδοδαπέδια θέρμανση, τζάκι βιοαιθανόλης, κουφώματα shuco και elvial, συναγερμός, αναμονή για δορυφορική. 900μ από την θάλασσα.`;
        document.getElementById('desc').textContent = fileContent;
        // const map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.6488794558923!2d-122.4328427238257!3d37.469011372064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f74b137aa5993%3A0x50b4f124707e7c92!2s123%20Main%20St%2C%20Half%20Moon%20Bay%2C%20CA%2094019%2C%20USA!5e0!3m2!1sen!2sgr!4v1708811391674!5m2!1sen!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        // document.getElementById('map').innerHTML = map;
    }
    else if(address1 === "2") {
        const fileContent = `Μισθώνεται στον Ασπρόπυργο ,17ο χλμ εθνικής οδού Αθηνών - Κορίνθου, μισθώνεται ακίνητο μεγάλης προβολής 1500τμ. με 60 μέτρα πρόσοψη επι της Εθνικής οδού.
        Αποτελείται απο οικοπεδο 1500τμ και κτίσμα 55τμ περίπου με χρήση γραφείων.`;
        document.getElementById('desc').textContent = fileContent;
        // const map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.701130447463!2d-122.44097591303994!3d37.46777790003434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f74ae24cc563b%3A0x22c2833c16b6e348!2s456%20Oak%20Ave%2C%20Half%20Moon%20Bay%2C%20CA%2094019%2C%20USA!5e0!3m2!1sen!2sgr!4v1708805627798!5m2!1sen!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        // document.getElementById('map').innerHTML = map;
    }
    else if(address1 === "3") {
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

