import { getProducts } from "./database.js";

// Viewing Products on Click (adapted from DeShawn Dog Walking)

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("product")) {
    const [, productId] = itemClicked.id.split("--");

    for (const product of products) {
      if (product.id === parseInt(productId)) {
        window.alert(`${product.name} costs $${product.price}.`);
      }
    }
  }
});

// Original code below

const products = getProducts();

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li id="product--${product.id}">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};

// Test comment
