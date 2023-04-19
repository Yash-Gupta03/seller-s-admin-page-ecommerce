let form = document.getElementById("order-form");
form.addEventListener("submit", addToKitchen);

// Taking Order and submitting form details on crudcrud
function addToKitchen(e) {
  e.preventDefault();
  let productName = document.getElementById("productName").value;
  let price = document.getElementById("price").value;
  let category = document.getElementById("category").value;

  document.getElementById("productName").value = null;
  document.getElementById("price").value = null;
  document.getElementById("category").value = null;
  let obj = {
    productName: productName,
    price: price,
    category: category,
  };

  try {
    async function postData() {
      const res = await axios.post(
        "https://crudcrud.com/api/f7bb70362c9c452b80298695c8652437/orderDetails",
        obj
      );
      showData(res.data);
    }
    postData();
  } catch {
    (err) => console.log(err);
  }
}

// Show Data when the page is refreshed.
window.addEventListener("DOMContentLoaded", () => {
  try {
    async function getData() {
      const res = await axios.get(
        "https://crudcrud.com/api/f7bb70362c9c452b80298695c8652437/orderDetails"
      );
      for (let i = 0; i < res.data.length; i++) {
        showData(res.data[i]);
      }
    }
    getData();
  } catch {
    (err) => console.log(err);
  }
});

// Print Data on screen
function showData(value) {
  const parentNode = document.getElementById(`${value.category}`);
  // console.log(parentNode);
  const newEntry = `<li class="text-white" id='${value.id}'>${value.productName} - ${value.price} - 
  <button onclick=deleteItem('${value.id}','${value.category}')>Delete Order</button> </li><br>`;
  parentNode.innerHTML += newEntry;
}

// Delete Item from crudcrud
function deleteItem(uniqueID, categoryname) {
  try {
    async function deleteData() {
      const res = await axios.delete(
        `https://crudcrud.com/api/f7bb70362c9c452b80298695c8652437/orderDetails/${uniqueID}`
      );
      removeItemFromScreen(uniqueID, categoryname);
    }
    deleteData();
  } catch {
    (err) => console.log(err);
  }
}

// delete entry from screen
function removeItemFromScreen(userID, categoryname) {
  const parentNode = document.getElementById(`${categoryname}`);
  const elem = document.getElementById(userID);
  parentNode.removeChild(elem);
}
