const productsContainer = document.querySelector(".products");

fetch("./fakestoreapi/products.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      let product = document.createElement("div");
      product.classList.add("product");
      product.innerHTML = `
       <img src="${item.image}">
       <div class="product-title">${item.title}</div>
       <div class="product-price">${item.price} $</div>
       <div class="product-category">${item.category}</div>
       <div class="product-desc">${item.description}</div>
       <button class="add-to-cart">Add To Cart</button>
        `;
      productsContainer.appendChild(product);
    });
  })
  .catch(
    () => (productsContainer.textContent = "خطا در دریافت اطلاعات رخ داد")
  );
