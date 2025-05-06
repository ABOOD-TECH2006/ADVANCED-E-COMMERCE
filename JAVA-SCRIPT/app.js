// ! The Start of  Set up the function for hidding and showing & favorites cart cart
const cart = document.querySelector(".cart");
const favorites_cart = document.querySelector(".favorites_cart");
const showingCart = () => {
  if (favorites_cart.classList.contains("active")) {
    favorites_cart.classList.remove("active");
    cart.classList.add("active");
  } else {
    cart.classList.toggle("active");
  }
};
const showingFavoritesCart = () => {
  if (cart.classList.contains("active")) {
    cart.classList.remove("active");
    favorites_cart.classList.add("active");
  } else {
    favorites_cart.classList.toggle("active");
  }
};

// ! The End of  Setting up the function for hidding and showing & favorites cart cart
const category_btn = document.querySelector(".category_btn");
const category_nav_list = document.querySelector(".category__list");
const category_a = document.querySelectorAll(".category__list a");
const category_links = document.querySelectorAll(".nav_links li a");
const nav = document.querySelector(".nav");
const f = document.querySelectorAll(".category_nav_list");
const category_nav = document.querySelector(".category_nav");

nav.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    category_links.forEach((link) => {
      link.classList.remove("active");
      e.target.classList.add("active");
    });
  }
});
console.log(category_links);

const showCategory = () => {
  category_nav_list.classList.toggle("active");
};

// ? The first button for some bubbles
const regitration_login = document.querySelector(".regitration-login");
regitration_login.addEventListener("click", (e) => {
  regitration_login.classList.add("animate");
  setTimeout(() => {
    regitration_login.classList.remove("animate");
  }, 600);
});
// ? The Second button for some bubbles
const registration_sgin_up = document.querySelector(".registration_sgin_up");
registration_sgin_up.addEventListener("click", (e) => {
  registration_sgin_up.classList.add("animate");
  setTimeout(() => {
    registration_sgin_up.classList.remove("animate");
  }, 600);
});
const icon_product = document.querySelectorAll(".icon_product");
icon_product.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});

const newDate = new Date();
const date = document.getElementById("date").innerHTML =
  newDate.getFullYear();
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const addToCartButton = document.querySelectorAll(".btn_add_cart");
    addToCartButton.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-id");
        const SelectedId = data.find((product) => product.id == productId);
        console.log(SelectedId);
        addToCart(SelectedId); //! "" without the string made a prob that the function of active for btn runs after reload the page
        const AllMatchingBuuttons = document.querySelectorAll(
          `.btn_add_cart[data-id="${productId}"]`
        ); //? this one means to bring the id that you chose
        AllMatchingBuuttons.forEach((btn) => {
          btn.classList.add("active");
          btn.innerHTML = `
           <i class="fa-solid fa-cart-shopping"></i>Item In Cart`;
        });
      });
    });
  });
function addToCart(product) {
  //!!  let cart = [] //? with this array just we add 1 product as much you add so
  let cart = JSON.parse(localStorage.getItem("cart")) || []; //? the last thing || [] solves the prob if you new to  the website and want to add somthing it won't add because you want to getitem from the localstorage and it's empty so this function means to add   empty[] if the local storage is empty
  cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  UpdateCart();
  UpdateFavoriteCart()
}
function UpdateCart() {
  const CartItemContainer = document.getElementById("cart_items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let checkout_items = document.getElementById("checkout_items");
  let Items_inputs = document.getElementById("Items");
  let Total_price_inputs = document.getElementById("Total_Price");
  let Count_Items_inputs = document.getElementById("Count_Items");
  if (checkout_items) {
    checkout_items.innerHTML = ""; //? without this function it'd never delete the items from check out
    Items_inputs.value = "";
    Total_price_inputs.value = "";
    Count_Items_inputs.value = "";
  }

  var total_price = 0;
  var total_count = 0;

  CartItemContainer.innerHTML = ""; //? this function to prevent print all the data once you add another product to the cart
  cart.forEach((item, index) => {
    // ? count the price according to the quantity
    let total_Price_item = item.price * item.quantity;
    total_price += total_Price_item; //! The final price
    total_count += item.quantity; //! The final count
    // ? checkout inputs
    if (checkout_items) {
      Items_inputs.value +=
        item.name +
        "     ---     " +
        "price :" +
        total_Price_item +
        "       ---    " +
        "count :" +
        item.quantity +
        "\n";
      console.log(Items_inputs);
      Total_price_inputs.value = total_price + 20;
      Count_Items_inputs.value = total_count;
    }
    CartItemContainer.innerHTML += `
        <div class="item_cart">
          <img src="${item.img}" alt="" />
          <div class="content">
            <h4>
            ${item.name}
            </h4>
            <p class="price_cart">$${total_Price_item}</p>
            <div class="quantity_control">
              <button class="Decrease_quantity" data-index="${index}">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="Increase_quantity" data-index="${index}">+</button>
            </div>
          </div>
          <button class="delete_item" data-index="${index}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
    `;
    if (checkout_items) {
      checkout_items.innerHTML += `


          <div class="item_cart">
                <div class="image_name">
                  <img src="${item.img}" alt="" />
                  <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${total_Price_item}</p>
                    <div class="quantity_control">
                      <button class="Decrease_quantity" data-index="${index}">-</button>
                      <span class="quantity">${item.quantity}</span>
                      <button class="Increase_quantity" data-index="${index}">+</button>
                    </div>
                  </div>
                </div>
                <button class="delete_item" data-index="${index}">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
          </div>
      
      
      
      `;
    }
  });
  //? set for counting the price and the quantity of the items
  const price_cart_total = document.querySelector(".price_cart_total");
  const count_item_cart = document.querySelector(".count_item_cart");
  const count_item_header = document.querySelector(".count_item_header");
  price_cart_total.innerHTML = `$${total_price}`;
  count_item_cart.innerHTML = total_count;
  count_item_header.innerHTML = total_count;
  if (checkout_items) {
    const Subtotal_CheckOut = document.querySelector(".Subtotal_CheckOut");
    const total_checkout = document.querySelector(".Total_CheckOut");
    Subtotal_CheckOut.innerHTML = `$${total_price}`;
    total_checkout.innerHTML = `$${total_price + 20}`;
  }

  // ! set the decrease & increase buttons
  const IncreaseButtos = document.querySelectorAll(".Increase_quantity");
  const DecreaseButtos = document.querySelectorAll(".Decrease_quantity");
  IncreaseButtos.forEach((button) => {
    button.addEventListener("click", (event) => {
      const ItemIndex = event.target.getAttribute("data-index");
      increaseQuantity(ItemIndex);
    });
  });
  DecreaseButtos.forEach((button) => {
    button.addEventListener("click", (event) => {
      const ItemIndex = event.target.getAttribute("data-index");
      DecreaseQuantity(ItemIndex);
    });
  });
  const DeleteButton = document.querySelectorAll(".delete_item");
  DeleteButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      const indexItem = event.target
        .closest("button")
        .getAttribute("data-index");
      removeFromCart(indexItem);
    });
  });
}
// ? generate function for increasing the quantity
function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  UpdateCart();
}
// ? generate function for decreasing the quantity
function DecreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  UpdateCart();
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const removeProduct = cart.splice(index, 1)[0];
  localStorage.setItem("cart", JSON.stringify(cart));
  UpdateCart();
  UpdateButtonsState(removeProduct.id);
}
function UpdateButtonsState(productId) {
  const AllMatchingBuuttons = document.querySelectorAll(
    `.btn_add_cart[data-id="${productId}"]`
  );
  AllMatchingBuuttons.forEach((button) => {
    button.classList.remove("active");
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>add to cart`;
  });
}
let nav_links = document.querySelector(".nav_links");
// ! open_meu_links_button
function open_meu_links() {
  nav_links.classList.toggle("open_menu_links");
}
// !Favorite cart
fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    const Favorite_cart =
      JSON.parse(localStorage.getItem("FavoriteCart")) || [];

    const totalFavoriteCart = Favorite_cart.length;
    const addToFavoriteCartButton = document.querySelectorAll(".btn_add_favorite_cart");
    addToFavoriteCartButton.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const productId = e.target.getAttribute("data-id");
        const SelectedId = data.find((product) => product.id == productId);
        console.log(SelectedId);
        addToFavoriteCart(SelectedId);

        const AllMatchingFavoriteBuuttons = document.querySelectorAll(
          `.btn_add_favorite_cart[data-id="${productId}"]`
        );
        AllMatchingFavoriteBuuttons.forEach((btn) => {
          btn.classList.add("active");
        });
      });
    });
  });
function addToFavoriteCart(product) {
  let Favorite_cart = JSON.parse(localStorage.getItem("FavoriteCart")) || [];
  Favorite_cart.push({ ...product });
  localStorage.setItem("FavoriteCart", JSON.stringify(Favorite_cart));
  UpdateFavoriteCart();
}
const UpdateFavoriteCart = () => {
  const FavoriteCartItemContainer = document.getElementById(
    "cart_Favorite_items"
  );

  let Favorite_cart = JSON.parse(localStorage.getItem("FavoriteCart")) || [];
  const favorites_cart_count = (document.getElementById(
    "favorites_cart_count"
  ).innerHTML = Favorite_cart.length);
  const count_favourite = (document.querySelector(
    ".count_favourite"
  ).innerHTML = Favorite_cart.length);
  FavoriteCartItemContainer.innerHTML = "";
  Favorite_cart.forEach((item, index) => {
    FavoriteCartItemContainer.innerHTML += `               
              <div class="item_cart" style="margin-top: 10px; display: flex;" >
                <div class="image_name">
                  <img src="${item.img}" alt="" />
                </div>
                <div class="content">
                    <h4> ${item.name}</h4>
                    <p class="price_cart">$${item.price}</p>
                  </div>
                  <div class="favorite_icons">
                    <button class="cart_favorite_item" data-id="${item.id}" data-index="${index}">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>

                    
                    <button class="delete_favorite_item" data-index="${index}">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
          </div>`;
  });
 
  const cart_favorite_item = document.querySelectorAll(".cart_favorite_item");
  cart_favorite_item.forEach((btn) => {
  let Favorite_cart = JSON.parse(localStorage.getItem("FavoriteCart")) || [];
   let cart = JSON.parse(localStorage.getItem("cart")) || [];

    btn.addEventListener("click", (event) => {
      const FavoriteItemIndex = event.target
        .closest("button")
        .getAttribute("data-index");
      removeFromFavoriteCart(FavoriteItemIndex);
      const productId = event.target.getAttribute("data-id");
      console.log(productId);
      fetch("products.json").then(Response=>Response.json()).then(data=>{
         const SelectedId = data.find((product) => product.id == productId );
        //  const final = cart.find(product=>product.id == SelectedId.id) //! we had a undefined with the selected id because we add === instead of ==
         console.log(SelectedId);
         console.log(cart);
        const newCart =  cart.filter((product) => SelectedId.id !== product.id);
          localStorage.setItem("cart",JSON.stringify(newCart))      
         addToCart(SelectedId);
         removeFromCart(index)
         UpdateCart()
         UpdateFavoriteCart()

      })

    });
    
  });
  const delete_favorite_item_buttons = document.querySelectorAll(
    ".delete_favorite_item"
  );

  delete_favorite_item_buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const FavoriteItemIndex = event.target
        .closest("button")
        .getAttribute("data-index");
      console.log(FavoriteItemIndex);
      removeFromFavoriteCart(FavoriteItemIndex);
    });
  });
  const removeFromFavoriteCart = (index) => {
    let Favorite_cart = JSON.parse(localStorage.getItem("FavoriteCart")) || [];
    const removeProduct = Favorite_cart.splice(index, 1)[0];
    localStorage.setItem("FavoriteCart", JSON.stringify(Favorite_cart));
    UpdateFavoriteCart();
    UpdateFavoriteButtonsStatus(removeProduct.id);
  };
  const UpdateFavoriteButtonsStatus = (productId) => {
    const AllMatchingFavoriteBuuttons = document.querySelectorAll(
      `.btn_add_favorite_cart[data-id="${productId}"]`
    );
    AllMatchingFavoriteBuuttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  };
};
function send(){
  let Favorite_cart = JSON.parse(localStorage.getItem("FavoriteCart")) || [];
      Favorite_cart.forEach((item) => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        const newCart = cart.filter(product=>product.id !== item.id)
        localStorage.setItem("cart",JSON.stringify(newCart))
        UpdateCart()
        addToCart(item);
      });
    localStorage.removeItem("FavoriteCart")
    Favorite_cart.splice(0)
    UpdateCart()
    UpdateFavoriteCart()
     

}
UpdateCart();
UpdateFavoriteCart();
// ! Significant notes about the problems that i had today accroding to the problems null and undefined with SelectedId is to not add pointer
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};
for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay;
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
  const sendAllFavorite = document.getElementById("sendAllFavorite");
  sendAllFavorite.addEventListener("click", () => {
    send();
  });
  const preloader = document.querySelector(".preloader");
window.addEventListener("load",()=>{
  setTimeout(()=>{
    preloader.classList.add("active")
    document.body.style.overflowY = "visible"

  },400)

})