const URL = new URLSearchParams(location.search);
console.log(JSON.parse(localStorage.getItem("api")));
const id = URL.get("id");
let cart = document.querySelector(".cart");
document.addEventListener("DOMContentLoaded", () => {
    const cart = document.querySelector(".cart");

    function displayCart() {
        const favorite = JSON.parse(localStorage.getItem("favorite")) || [];

        if (favorite.length === 0) {
            cart.innerHTML = "<p>Your favorite is empty.</p>";
        } else {
            cart.innerHTML = ""; 

            favorite.forEach((item) => {
                const itemElement = document.createElement("div");
                const imgElement = document.createElement("img");
                const titleElement = document.createElement("h3");
                const priceElement = document.createElement("p");
                const removeButton = document.createElement("button");

                itemElement.classList.add("item");
                imgElement.src = item.image;
                imgElement.alt = item.title;
                titleElement.textContent = item.title;
                priceElement.textContent = `Price: $${item.price}`;
                removeButton.innerHTML = `
                <i class="fa-solid fa-heart"></i>`;

                itemElement.append(imgElement,titleElement,priceElement);

                priceElement.style.marginTop="80px"
                priceElement.style.marginLeft="120px"





                removeButton.classList.add("remove-button");
                removeButton.addEventListener("click", () => {
                    const updatedFavorite = favorite.filter((favoriteItem) => favoriteItem.id !== item.id);
                    localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
                    displayCart();
                });
                itemElement.appendChild(removeButton);

                cart.appendChild(itemElement);
            });
        }
    }

    displayCart();
});
