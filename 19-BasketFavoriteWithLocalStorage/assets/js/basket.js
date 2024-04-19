const URL = new URLSearchParams(location.search);
console.log(JSON.parse(localStorage.getItem("api")));
const id = URL.get("id");
let cart = document.querySelector(".cart");
let priceSum = document.querySelector(".priceSum");

document.addEventListener("DOMContentLoaded", () => {
    const cart = document.querySelector(".cart");

    function displayCart() {
        const basket = JSON.parse(localStorage.getItem("basket")) || [];

        if (basket.length === 0) {
            cart.innerHTML = "<p>Your basket is empty.</p>";
        } else {
            cart.innerHTML = ""; 

            basket.forEach((item) => {
                const itemElement = document.createElement("div");
                const imgElement = document.createElement("img");
                const titleElement = document.createElement("h3");
                const priceElement = document.createElement("p");
                const quantityElement = document.createElement("p");
                const removeButton = document.createElement("button");

                itemElement.classList.add("item");
                imgElement.src = item.image;
                imgElement.alt = item.title;
                titleElement.textContent = item.title;
                priceElement.textContent = `Price: $${item.price}`;
                quantityElement.textContent = `Count: ${item.count}`;
                removeButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

                itemElement.append(imgElement,titleElement,priceElement,quantityElement);

                priceElement.style.marginTop="80px"
                quantityElement.style.marginTop="80px"

                priceElement.style.marginLeft="120px"
                quantityElement.style.marginLeft="20px"






                removeButton.classList.add("remove-button");
                removeButton.addEventListener("click", () => {
                    const updatedBasket = basket.filter((basketItem) => basketItem.id !== item.id);
                    localStorage.setItem("basket", JSON.stringify(updatedBasket));
                    displayCart();
                });
                itemElement.appendChild(removeButton);

                cart.appendChild(itemElement);
            });
        }
    }

    displayCart();
});


