const search = () => {
  const searchbox = document.getElementsByClassName("search-bar")[0].value.toUpperCase();
  const prdcts = document.querySelectorAll(".product-box");

  prdcts.forEach((product) => {
    const productName = product.getElementsByTagName("p")[0];
    if (productName) {
      const textValue = productName.textContent || productName.innerText;
      if (textValue.toUpperCase().includes(searchbox)) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    }
  });
};

function like(event) {
  const clickedButton = event.currentTarget;
  clickedButton.classList.toggle("liked");
}

const products = [
  {
    image: 'pictures/shoes/shoe1.jpg',
    name: 'Nike Vomero 18',
    section: 'Men\'s Road Running Shoes',
    colors: '5',
    price: '150',
    category: 'shoes'
  },
  {
    image: 'pictures/shoes/shoe2.jpg',
    name: 'Nike Air Max Plus',
    section: 'Mens Shoes',
    colors: '1',
    price: '180',
    category: 'shoes'
  },
  {
    image: 'pictures/shoes/shoe3.jpg',
    name: 'Air Jordan 1 High OG',
    section: 'Big Kids Shoes',
    colors: '1',
    price: '140',
    category: 'shoes'
  },
  {
    image: 'pictures/pants/pant1.jpg',
    name: 'Nike Tech',
    section: 'Mens Woven Oversized Pants',
    colors: '9',
    price: '135',
    category: 'pants'
  },
  {
    image: 'pictures/pants/pant2.jpg',
    name: 'Nike Tech',
    section: 'Mens Woven Pants',
    colors: '5',
    price: '125',
    category: 'pants'
  },
  {
    image: 'pictures/pants/pant3.jpg',
    name: 'Nike Club Fleece',
    section: 'Mens Oversized French Terry Pants',
    colors: '2',
    price: '85',
    category: 'pants'
  },
  {
    image: 'pictures/jackets/jacket1.jpg',
    name: 'Nike Sportswear Club',
    section: 'Mens Therma-FIT Puffer Jacket',
    colors: '1',
    price: '260',
    category: 'jackets'
  },
  {
    image: 'pictures/jackets/jacket2.jpg',
    name: 'Nike ACG Wolf Tree',
    section: 'Full-Zip Hoodie',
    colors: '3',
    price: '135',
    category: 'jackets'
  },
  {
    image: 'pictures/jackets/jacket3.jpg',
    name: 'Jordan Brooklyn',
    section: 'Mens Hooded Draft Jacket',
    colors: '4',
    price: '100',
    category: 'jackets'
  }
];

let productsHTML = '';

// Function to render products based on category
function renderProducts(category = 'all') {
  productsHTML = '';
  products.forEach((product, index) => {
    if (category === 'all' || product.category === category) {
      productsHTML += `
        <div class="product-box">
          <a href="product.html?index=${index}">
            <img class="product-picture" src="${product.image}">
          </a>
          <p>${product.name}</p>
          <p>${product.section}</p>
          <p>${product.colors} Colors</p>
          <span class="buying-box"> 
            <p>${product.price}$</p>
            <button class="like-button" onclick="like(event)">
              <img class="heart-icon" src="pictures/icons/heart.svg">
              <img class="heart-icon-red" src="pictures/icons/heart-red.svg">
            </button>
          </span>
        </div>
      `;
    }
  });
  document.querySelector('.js-products-grid').innerHTML = productsHTML;
}

// Initial render of all products
renderProducts();

// Add event listeners to filter buttons
document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    renderProducts(category);
  });
});

// Like functionality
function like(event) {
  const clickedButton = event.currentTarget;
  clickedButton.classList.toggle("liked");
}

// Scroll to footer when "About Us" is clicked
document.querySelector('a[href="#"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});