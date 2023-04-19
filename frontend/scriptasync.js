let form = document.getElementById("order-form");
form.addEventListener("submit", saveProduct);

// Taking Order and submitting form details on crudcrud
function saveProduct(e) {
  e.preventDefault();
  let productname = document.getElementById("productname").value;
  let price = document.getElementById("price").value;
  let category = document.getElementById("category").value;

  document.getElementById("productname").value = null;
  document.getElementById("price").value = null;
  document.getElementById("category").value = null;

  let obj = {
    productname: productname,
    price: price,
    category: category,
  };

  axios
    .post("http://localhost:3000/add-product", obj)
    .then((response) => {
      const newProduct = response.data.newProductDetail;
      showData(newProduct);
    })
    .catch((err) => console.log(err));
}

// Show Data when the page is refreshed.
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/get-products")
    .then((res) => {
      for (let i = 0; i < res.data.allProducts.length; i++) {
        showData(res.data.allProducts[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// Print Data on screen
function showData(value) {
  const parentNode = document.getElementById(`${value.category}`);
  // console.log(parentNode);
  const newEntry = `<li class="text-white" id='${value.id}'>${value.productname} - ${value.price} - 
  <button onclick=deleteProduct('${value.id}','${value.category}')>Delete Order</button> </li><br>`;
  parentNode.innerHTML += newEntry;
}

// Delete Item from crudcrud
function deleteProduct(uniqueID, categoryname) {
  axios
    .delete(`http://localhost:3000/delete-product/${uniqueID}`)
    .then((res) => {
      removeProductFromScreen(uniqueID, categoryname);
    })
    .catch((err) => console.log(err));
}

// delete entry from screen
function removeProductFromScreen(userID, categoryname) {
  const parentNode = document.getElementById(`${categoryname}`);
  const elem = document.getElementById(userID);
  parentNode.removeChild(elem);
}
