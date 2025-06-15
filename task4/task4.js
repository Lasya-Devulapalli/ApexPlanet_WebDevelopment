const products = [
  // ELECTRONICS
  { name: "Samsung Galaxy M14", category: "electronics", price: 13499, rating: 4.5, image: "https://m.media-amazon.com/images/I/91zMokvCNuL._SL1500_.jpg" },
  { name: "boAt Rockerz 255", category: "electronics", price: 899, rating: 4.2, image: "https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg" },
  { name: "Sony WH-CH520", category: "electronics", price: 3999, rating: 4.6, image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533161cv12d.jpg" },
  { name: "Canon EOS 1500D", category: "electronics", price: 39999, rating: 4.4, image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" },
  { name: "Lenovo Laptop V15", category: "electronics", price: 35999, rating: 4.3, image: "https://th.bing.com/th/id/OIP.DAOlDxjy6chVy9s1HF8UNQHaHa?rs=1&pid=ImgDetMain&cb=idpwebpc1" },
  { name: "Mi Smart Band 5", category: "electronics", price: 1999, rating: 4.1, image: "https://i02.appmifile.com/751_operator_in/26/09/2020/97073b3325ecd26d7f2ff87e63b680fa.jpg" },
  { name: "Fire-Boltt Ninja Call Pro", category: "electronics", price: 1299, rating: 4.0, image: "https://m.media-amazon.com/images/I/61S9aVnRZDL._SL1500_.jpg" },
  { name: "SanDisk 64GB Pendrive", category: "electronics", price: 449, rating: 4.7, image: "https://robu.in/wp-content/uploads/2021/04/Sandisk-Cruzer-Blade-32-Gb-USB-Pen-Drive-3-300x300.jpg" },
  { name: "TP-Link WiFi Router", category: "electronics", price: 1199, rating: 4.5, image: "https://th.bing.com/th/id/OIP.qNyrSpbP1ggsYiI2oKBTcwHaHa?pid=ImgDetMain&cb=idpwebpc1" },
  { name: "Noise ColorFit Pulse", category: "electronics", price: 1499, rating: 4.3, image: "https://th.bing.com/th/id/OIP.s917a_jEhVZARYizU94tnAAAAA?pid=ImgDetMain&cb=idpwebpc1" },

  // CLOTHING
  { name: "Men's Casual Shirt", category: "clothing", price: 499, rating: 4.1, image: "https://i5.walmartimages.com/asr/898458a3-145c-4777-be3e-754308e58699.ca1fab5b83506224ffcff51549503082.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" },
  { name: "Women's Kurti", category: "clothing", price: 649, rating: 4.4, image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17413170/2022/3/17/242de342-07f7-4344-b423-270927e85ee41647511495979-Anubhutee-Women-Kurtis-6331647511495433-1.jpg" },
  { name: "Men's Jeans", category: "clothing", price: 999, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMr5soVwnHNG2CtTlNv7aM7HmUZXWDd2btvQ&s" },
  { name: "Women's T-shirt", category: "clothing", price: 299, rating: 4.2, image: "https://i.pinimg.com/originals/94/58/d4/9458d419322b867a3fc74d2961e52d39.jpg" },
  { name: "Kid's Hoodie", category: "clothing", price: 599, rating: 4.0, image: "https://5.imimg.com/data5/SELLER/Default/2024/2/382883637/KS/LD/KN/108022522/kids-hoodies-1000x1000.png" },
  { name: "Men's Blazer", category: "clothing", price: 1999, rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrt3ccBWidQM98mjDFLp37vAMe9tdfVz26w&s" },
  { name: "Saree - Silk", category: "clothing", price: 1299, rating: 4.6, image: "https://static.wixstatic.com/media/faf1ba_78c7a05c62a24c61a99d18980455fc89~mv2.jpg/v1/fill/w_526,h_692,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/faf1ba_78c7a05c62a24c61a99d18980455fc89~mv2.jpg" },
  { name: "Track Pant", category: "clothing", price: 599, rating: 4.1, image: "https://m.media-amazon.com/images/I/71PEvCzT0+L._UY350_.jpg" },
  { name: "Women's Gown", category: "clothing", price: 1599, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpgQzAXoJROkZCVeTCi79mbDUUnMWp06OwA&s" },
  { name: "Formal Shirt", category: "clothing", price: 699, rating: 4.4, image: "https://saadaa.in/cdn/shop/files/134.jpg?v=1729922912" },

  // FOOTWEAR
  { name: "Campus Sneakers", category: "footwear", price: 799, rating: 4.2, image: "https://www.campusshoes.com/cdn/shop/files/LEVEL_LEVEL_WHT-L.GRY_01.webp?v=1749800176" },
  { name: "Puma Running Shoes", category: "footwear", price: 1999, rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDws7v8ig8mnAvKk3hC7901zxLMPGqdunPg&s" },
  { name: "Boy's Bata Sandals", category: "footwear", price: 599, rating: 4.1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwcTcfrpt3SkNOvW5j6SG27EXfKpY8ycbmw&s" },
  { name: "Woodland Boots", category: "footwear", price: 2899, rating: 4.3, image: "https://assets.woodlandworldwide.app/product/images/FGC0AA050061A/BLACK/FGC0AA050061A_004_0.webp" },
  { name: "Flip Flops", category: "footwear", price: 299, rating: 4.0, image: "https://www.jiomart.com/images/product/original/rvjjdv1jpg/sparx-grey-flip-flops-slides-men-sfg-144-for-men-product-images-rvjjdv1jpg-0-202402272314.jpg?im=Resize=(1000,1000)" },
  { name: "Heeled Sandals", category: "footwear", price: 699, rating: 4.4, image: "https://images-static.nykaa.com/media/catalog/product/8/6/862bd46Heel-1313-Black_1.jpg?tr=w-500" },
  { name: "Loafers", category: "footwear", price: 999, rating: 4.2, image:"https://www.shoetree.io/cdn/shop/files/AW22-LBL1232-WOOD_0_3ec869fd-138e-4bee-b266-ec90ac857484.jpg?v=1736849583" },
  { name: "Girls' Ballerina Shoes", category: "footwear", price: 499, rating: 4.1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgllCscObGYEMSB7AQU9APqXwHZMfx10EQlA&s" },
  { name: "Formal Leather Shoes", category: "footwear", price: 1599, rating: 4.5, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tUHd2bv3YkcdIue5TKR_cqtRdgKpyOLJ-A&s" },
  { name: "Casual Slippers", category: "footwear", price: 349, rating: 4.0, image: "https://admin.walkwayshoes.com/product/17-14/1080/207-43-11-40-1.JPG" },

  // APPLIANCES
  { name: "Philips Mixer Grinder", category: "appliances", price: 2999, rating: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPNoMvrbFwyygHxBL4bmUNbxMgt6nhxK61w&s" },
  { name: "LG Washing Machine", category: "appliances", price: 21990, rating: 4.6, image: "https://m.media-amazon.com/images/I/718Wy4iXY1L.jpg" },
  { name: "Samsung Refrigerator", category: "appliances", price: 15990, rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQaWV2Jln4dgvHfXY2Dwq1CYSdNk1UavE4nw&s" },
  { name: "IFB Microwave Oven", category: "appliances", price: 8990, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQla5NhjLezr_WCcvarnezsJb7dwF84Fq_dxw&s" },
  { name: "Prestige Gas Stove", category: "appliances", price: 2999, rating: 4.2, image: "https://img-prd-pim.poorvika.com/product/prestige-svachh-3-burner-gas-stove-black-front-view.png" },
  { name: "Bajaj Room Heater", category: "appliances", price: 1799, rating: 4.1, image: "https://m.media-amazon.com/images/I/718COOybK0L.jpg" },
  { name: "Inalsa Juicer", category: "appliances", price: 2499, rating: 4.0, image: "https://m.media-amazon.com/images/I/51ZHATV9fvL.jpg" },
  { name: "Usha Ceiling Fan", category: "appliances", price: 1799, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9A9Zq8ibCbsoAbqmZo2vydy0dWevjcTsPVw&s" },
  { name: "Voltas AC 1.5 Ton", category: "appliances", price: 32990, rating: 4.5, image: "https://m.media-amazon.com/images/I/41jNjA3yygL.jpg" },
  { name: "Eureka Forbes Vacuum", category: "appliances", price: 3499, rating: 4.2, image: "https://th.bing.com/th/id/OIP.E1qWrn0m94g2mW6wptJCuQHaHa?pid=ImgDetMain&cb=idpwebpc1" }
];


const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const ratingSort = document.getElementById("ratingSort");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p class="price">₹${p.price.toLocaleString()}</p>
      <p>⭐ ${p.rating}</p>
    `;
    productList.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const maxPrice = parseFloat(priceFilter.value);
  const sort = ratingSort.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (!isNaN(maxPrice)) {
    filtered = filtered.filter(p => p.price <= maxPrice);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "low") {
    filtered.sort((a, b) => a.rating - b.rating);
  }

  displayProducts(filtered);
}

// Event Listeners
categoryFilter.addEventListener("change", filterAndSort);
priceFilter.addEventListener("input", filterAndSort);
ratingSort.addEventListener("change", filterAndSort);

// Initial Load
displayProducts(products);
