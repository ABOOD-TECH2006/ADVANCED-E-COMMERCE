fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
    let Favorite_cart = JSON.parse(localStorage.getItem("FavoriteCart")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const swiper_items_sale = document.getElementById("swiper_items_sale");
    const swiper_electronics = document.getElementById("swiper_electronics");
    const swiper_mobiles = document.getElementById("swiper_mobiles");
    const swiper_appliances = document.getElementById("swiper_appliances");
    const swiper_clothes = document.getElementById("swiper_clothes");
    const swiper_shoes = document.getElementById("swiper_shoes");
    const swiper_watches_jewelry = document.getElementById(
      "swiper_watches_jewelry"
    );
    data.forEach((product) => {
      if (product.old_price) {
        const IsInFavoriteCart = Favorite_cart.some(
          (item) => item.id == product.id
        );
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const IsInCart = cart.some((item) => item.id == product.id);
        const percent_des = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        swiper_items_sale.innerHTML += `
            <div class="swiper-slide product">
                <span class="sale_percent">%${percent_des}</span>
                <div class="img_product">
                  <a href="#"><img src="${product.img}"alt=""/></a>
                </div>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="name_product">
                  <a href="#">${product.name}</a>
                </p>
                <div class="price">
                  <p><span>$${product.price}</span></p>
                  <p class="old_price">$${product.old_price}</p>
                </div>
                <div class="icons">
                  <span class="btn_add_cart ${
                    IsInCart ? "active" : ""
                  }" data-id="${
          product.id
        }"><i class="fa-solid fa-cart-shopping"></i>${
          IsInCart ? "btn in cart" : "btn add cart"
        }</span
                  >
                  <span class="icon_product btn_add_favorite_cart ${
                    IsInFavoriteCart ? "active" : ""
                  }" data-id="${product.id}"
                    ><i class="fa-solid fa-heart"></i></span>
                </div>
              </div>`;
        const btn_add_favorite_cart = document.querySelectorAll(
          ".btn_add_favorite_cart"
        );
      }
    });
    data.forEach((product) => {
      if (product.catetory === "electronics") {
        const percent_des = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        const percent_des_div = product.old_price
          ? `<span class="sale_percent">%${percent_des}</span>`
          : "";
        const old_price_Pargrahp = product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";
        let Favorite_cart =
          JSON.parse(localStorage.getItem("FavoriteCart")) || [];
        const IsInFavoriteCart = Favorite_cart.some(
          (item) => item.id == product.id
        );
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const IsInCart = cart.some((item) => item.id == product.id);
        swiper_electronics.innerHTML += `
            <div class="swiper-slide product">
                ${percent_des_div}
                <div class="img_product">
                  <a href="#"><img src="${product.img}" alt="" /></a>
                </div>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="name_product">
                  <a href="#">${product.name}</a>
                </p>
                <div class="price">
                  <p><span>$${product.price}</span></p>
                  ${old_price_Pargrahp}
                </div>
                <div class="icons">
                  <span class="btn_add_cart ${
                    IsInCart ? "active" : ""
                  }" data-id="${
          product.id
        }"><i class="fa-solid fa-cart-shopping"></i>${
          IsInCart ? "btn in cart" : "btn add cart"
        }</span
                  >
                  <span  class="icon_product btn_add_favorite_cart ${
                    IsInFavoriteCart ? "active" : ""
                  }" data-id="${product.id}"
                    ><i class="fa-solid fa-heart"></i></span>
                </div>
              </div>`;
      }
    });
    data.forEach((product) => {
      if (product.catetory === "mobiles") {
        const old_price_Pargrahp = product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";
        const percent_des = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        const percent_des_div = product.old_price
          ? `<span class="sale_percent">%${percent_des}</span>`
          : "";
        let Favorite_cart =
          JSON.parse(localStorage.getItem("FavoriteCart")) || [];
        const IsInFavoriteCart = Favorite_cart.some(
          (item) => item.id == product.id
        );
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const IsInCart = cart.some((item) => item.id == product.id);
        const is = (swiper_mobiles.innerHTML += `
            <div class="swiper-slide product">
                 ${percent_des_div}
                <div class="img_product">
                  <a href="#"><img src="${product.img}" alt="" /></a>
                </div>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="name_product">
                  <a href="#">${product.name}</a>
                </p>
                <div class="price">
                  <p><span>$${product.price}</span></p>
                  ${old_price_Pargrahp}
                </div>
                <div class="icons">
                  <span class="btn_add_cart ${
                    IsInCart ? "active" : ""
                  }" data-id="${
          product.id
        }"><i class="fa-solid fa-cart-shopping"></i>${
          IsInCart ? "btn in cart" : "btn add cart"
        }</span
                  >
                  <span  class="icon_product btn_add_favorite_cart ${
                    IsInFavoriteCart ? "active" : ""
                  }" data-id="${product.id}"
                    ><i class="fa-solid fa-heart"></i></span>
                </div>
              </div>`);
      }
    });
    data.forEach((product) => {
      if (product.catetory === "appliances") {
        const percent_des = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        const percent_des_div = product.old_price
          ? `<span class="sale_percent">%${percent_des}</span>`
          : "";
        const old_price_Pargrahp = product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : " ";
        let Favorite_cart =
          JSON.parse(localStorage.getItem("FavoriteCart")) || [];
        const IsInFavoriteCart = Favorite_cart.some(
          (item) => item.id == product.id
        );
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const IsInCart = cart.some((item) => item.id == product.id);
        swiper_appliances.innerHTML += `
            <div class="swiper-slide product">
                ${percent_des_div}
                <div class="img_product">
                  <a href="#"><img src="${product.img}" alt="" /></a>
                </div>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="name_product">
                  <a href="#">${product.name}</a>
                </p>
                <div class="price">
                  <p><span>$${product.price}</span></p>
                  ${old_price_Pargrahp}
                </div>
                <div class="icons">
                  <span class="btn_add_cart ${
                    IsInCart ? "active" : ""
                  }" data-id="${
          product.id
        }"><i class="fa-solid fa-cart-shopping"></i>${
          IsInCart ? "btn in cart" : "btn add cart"
        }</span
                  >
                  <span class="icon_product btn_add_favorite_cart ${
                    IsInFavoriteCart ? "active" : ""
                  }" data-id="${product.id}"
                    ><i class="fa-solid fa-heart"></i></span>
                </div>
              </div>`;
      }
    });
    data.forEach((product) => {
      if (product.catetory === "clothes") {
        const percent_des = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        const percent_des_div = product.old_price
          ? `<span class="sale_percent">%${percent_des}</span>`
          : "";
        const old_price_Pargrahp = product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : " ";
        let Favorite_cart =
          JSON.parse(localStorage.getItem("FavoriteCart")) || [];
        const IsInFavoriteCart = Favorite_cart.some(
          (item) => item.id == product.id
        );
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const IsInCart = cart.some((item) => item.id == product.id);
        swiper_clothes.innerHTML += `
            <div class="swiper-slide product">
                ${percent_des_div}
                <div class="img_product">
                  <a href="#"><img src="${product.img}" alt="" /></a>
                </div>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="name_product">
                  <a href="#">${product.name}</a>
                </p>
                <div class="price">
                  <p><span>$${product.price}</span></p>
                  ${old_price_Pargrahp}
                </div>
                <div class="icons">
                  <span class="btn_add_cart ${
                    IsInCart ? "active" : ""
                  }" data-id="${
          product.id
        }"><i class="fa-solid fa-cart-shopping"></i>${
          IsInCart ? "btn in cart" : "btn add cart"
        }</span
                  >
                  <span class="icon_product btn_add_favorite_cart ${
                    IsInFavoriteCart ? "active" : ""
                  }" data-id="${product.id}"
                    ><i class="fa-solid fa-heart"></i></span>
                </div>
              </div>`;
      }
    });
    data.forEach((product) => {
      if (product.catetory === "shoes") {
        const percent_des = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        const percent_des_div = product.old_price
          ? `<span class="sale_percent">%${percent_des}</span>`
          : "";
        const old_price_Pargrahp = product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : " ";
        let Favorite_cart =
          JSON.parse(localStorage.getItem("FavoriteCart")) || [];
        const IsInFavoriteCart = Favorite_cart.some(
          (item) => item.id == product.id
        );
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const IsInCart = cart.some((item) => item.id == product.id);
        swiper_shoes.innerHTML += `
            <div class="swiper-slide product">
                ${percent_des_div}
                <div class="img_product">
                  <a href="#"><img src="${product.img}" alt="" /></a>
                </div>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="name_product">
                  <a href="#">${product.name}</a>
                </p>
                <div class="price">
                  <p><span>$${product.price}</span></p>
                  ${old_price_Pargrahp}
                </div>
                <div class="icons">
                  <span class="btn_add_cart ${
                    IsInCart ? "active" : ""
                  }" data-id="${
          product.id
        }"><i class="fa-solid fa-cart-shopping"></i>${
          IsInCart ? "btn in cart" : "btn add cart"
        }</span
                  >
                  <span class="icon_product btn_add_favorite_cart ${
                    IsInFavoriteCart ? "active" : ""
                  }" data-id="${product.id}"
                    ><i class="fa-solid fa-heart"></i></span>
                </div>
              </div>`;
      }
    });
    data.forEach((product) => {
      if (product.catetory === "watches&jewelry") {
        const percent_des = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100
        );
        const percent_des_div = product.old_price
          ? `<span class="sale_percent">%${percent_des}</span>`
          : "";
        const old_price_Pargrahp = product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : " ";
        let Favorite_cart =
          JSON.parse(localStorage.getItem("FavoriteCart")) || [];
        const IsInFavoriteCart = Favorite_cart.some(
          (item) => item.id == product.id
        );
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const IsInCart = cart.some((item) => item.id == product.id);
        swiper_watches_jewelry.innerHTML += `
            <div class="swiper-slide product">
                ${percent_des_div}
                <div class="img_product">
                  <a href="#"><img src="${product.img}" alt="" /></a>
                </div>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <p class="name_product">
                  <a href="#">${product.name}</a>
                </p>
                <div class="price">
                  <p><span>$${product.price}</span></p>
                  ${old_price_Pargrahp}
                </div>
                <div class="icons">
                  <span class="btn_add_cart ${
                    IsInCart ? "active" : ""
                  }" data-id="${
          product.id
        }"><i class="fa-solid fa-cart-shopping"></i>${
          IsInCart ? "btn in cart" : "btn add cart"
        }</span
                  >
                  <span class="icon_product btn_add_favorite_cart ${
                    IsInFavoriteCart ? "active" : ""
                  }" data-id="${product.id}"
                    ><i class="fa-solid fa-heart"></i></span>
                </div>
              </div>`;
      }
    });
    // icon.addEventListener("click", (e) => {
  });
