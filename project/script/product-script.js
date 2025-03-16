const products = [
  {
    image: 'pictures/shoes/shoe1.jpg',
    images: ["pictures/shoes/3.jfif", "pictures/shoes/2.jfif", "pictures/shoes/4.jfif","pictures/shoes/5.jfif"],
    name: 'Nike Vomero 18',
    section: 'Men\'s Road Running Shoes',
    colors: '5',
    price: '150',
    category: 'shoes'
  },
  {
    image: 'pictures/shoes/shoe2.jpg',
    images: ["pictures/shoes/6.jfif", "pictures/shoes/7.jfif", "pictures/shoes/8.jfif","pictures/shoes/9.jfif"],
    name: 'Nike Air Max Plus',
    section: 'Mens Shoes',
    colors: '1',
    price: '180',
    category: 'shoes'
  },
  {
    image: 'pictures/shoes/shoe3.jpg',
    images: ["pictures/shoes/10.jfif", "pictures/shoes/11.jfif", "pictures/shoes/12.jfif","pictures/shoes/13.jfif"],
    name: 'Air Jordan 1 High OG',
    section: 'Big Kids Shoes',
    colors: '1',
    price: '140',
    category: 'shoes'
  },
  {
    image: 'pictures/pants/pant1.jpg',
    images: ["pictures/pants/1.jfif", "pictures/pants/2.jfif", "pictures/pants/3.jfif","pictures/pants/4.jfif"],
    name: 'Nike Tech',
    section: 'Mens Woven Oversized Pants',
    colors: '9',
    price: '135',
    category: 'pants'
  },
  {
    image: 'pictures/pants/pant2.jpg',
    images: ["pictures/pants/5.jfif", "pictures/pants/6.jfif", "pictures/pants/7.jfif","pictures/pants/8.jfif"],
    name: 'Nike Tech',
    section: 'Mens Woven Pants',
    colors: '5',
    price: '125',
    category: 'pants'
  },
  {
    image: 'pictures/pants/pant3.jpg',
    images: ["pictures/pants/9.jfif", "pictures/pants/10.jfif", "pictures/pants/11.jfif","pictures/pants/12.jfif"],
    name: 'Nike Club Fleece',
    section: 'Mens Oversized French Terry Pants',
    colors: '2',
    price: '85',
    category: 'pants'
  },
  {
    image: 'pictures/jackets/jacket1.jpg',
    images: ["pictures/jackets/1.jfif", "pictures/jackets/2.jfif", "pictures/jackets/3.jfif","pictures/jackets/4.jfif"],
    name: 'Nike Sportswear Club',
    section: 'Mens Therma-FIT Puffer Jacket',
    colors: '1',
    price: '260',
    category: 'jackets'
  },
  {
    image: 'pictures/jackets/jacket2.jpg',
    images: ["pictures/jackets/5.jfif", "pictures/jackets/6.jfif", "pictures/jackets/7.jfif","pictures/jackets/8.jfif"],
    name: 'Nike ACG Wolf Tree',
    section: 'Full-Zip Hoodie',
    colors: '3',
    price: '135',
    category: 'jackets'
  },
  {
    image: 'pictures/jackets/jacket3.jpg',
    images: ["pictures/jackets/9.jfif", "pictures/jackets/10.jfif", "pictures/jackets/11.jfif","pictures/jackets/12.jfif"],
    name: 'Jordan Brooklyn',
    section: 'Mens Hooded Draft Jacket',
    colors: '4',
    price: '100',
    category: 'jackets'
  }
];

const urlParams = new URLSearchParams(window.location.search);
const productIndex = parseInt(urlParams.get('index'));
const product = products[productIndex];

if (product) {
  document.querySelector('.product-details h1').textContent = product.name;
  document.querySelector('.price').textContent = `$${product.price}`;
  document.querySelector('.description').textContent = product.section;
  document.querySelector('.colors').textContent = `${product.colors} Colors Available`;

  const mainImage = document.getElementById('main-image');
  mainImage.src = product.images[0];
  let images = product.images;
  let currentImageIndex = 0;

  window.changeImage = function (direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    mainImage.src = images[currentImageIndex];
  };

  const sizeContainer = document.querySelector('.size-buttons');
  let sizeButtonsHTML = '';

  // Set size options based on product category
  if (product.category === 'shoes') {
    sizeButtonsHTML = `
      <button class="size-button" data-size="39">39</button>
      <button class="size-button" data-size="40">40</button>
      <button class="size-button" data-size="41">41</button>
      <button class="size-button" data-size="42">42</button>
      <button class="size-button" data-size="43">43</button>
      <button class="size-button" data-size="44">44</button>
    `;
  } else if (product.category === 'pants' || product.category === 'jackets') {
    sizeButtonsHTML = `
      <button class="size-button" data-size="XS">XS</button>
      <button class="size-button" data-size="S">S</button>
      <button class="size-button" data-size="M">M</button>
      <button class="size-button" data-size="L">L</button>
      <button class="size-button" data-size="XL">XL</button>
      <button class="size-button" data-size="XXL">XXL</button>
    `;
  }

  sizeContainer.innerHTML = sizeButtonsHTML;

  const sizeButtons = document.querySelectorAll('.size-button');
  let selectedSize = null;

  sizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sizeButtons.forEach((btn) => {
        btn.classList.remove("selected-size-button");
      });
      button.classList.add("selected-size-button");
      selectedSize = button.getAttribute("data-size");
    });
  });

  document.querySelector('.js-add-to-cart').addEventListener('click', () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    addToCart(product.name, product.price, selectedSize, product.images[0]);
    alert(`${product.name} (Size: ${selectedSize}) added to cart!`);
  });
}

document.querySelector('a[href="#"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
});