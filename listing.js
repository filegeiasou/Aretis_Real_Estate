let currentPage = 1;
let listingsPerPage = 9; 
let listingsPerRow = 3; 

function displayPage(page) {
  let listings = document.querySelectorAll('.listing');
  listings.forEach((listing, index) => {
    let row = Math.floor(index / listingsPerRow);
    let startIndex = (page - 1) * listingsPerPage;
    let endIndex = startIndex + listingsPerPage;
    if (index >= startIndex && index < endIndex && index % listingsPerRow < listingsPerRow) {
      listing.style.display = 'block';
    } else {
      listing.style.display = 'none';
    }
  });

  // Scroll to the first listing of the page
  let firstListing = document.querySelector('.listing[style="display: block;"]');
  if (firstListing) {
    firstListing.scrollIntoView({ behavior: 'smooth' });
  }
}

function displayPaginationBar() {
  let listings = document.querySelectorAll('.listing');
  let totalPages = Math.ceil(listings.length / listingsPerPage);

  let paginationBar = document.getElementById('pagination-bar');
  paginationBar.innerHTML = '';

  for (let page = 1; page <= totalPages; page++) {
    let pageButton = document.createElement('button');
    pageButton.textContent = page;
    pageButton.addEventListener('click', function() {
      currentPage = page;
      displayPage(currentPage);
    });
    paginationBar.appendChild(pageButton);
  }
}

displayPage(currentPage);
displayPaginationBar();   