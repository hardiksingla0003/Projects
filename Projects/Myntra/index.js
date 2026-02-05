
let bagItems;
onLoad();
function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagCount();
}
function displayBagCount() {
  if (bagItems.length > 0) {
    document.querySelector(".bag_item_count").style.visibility = "visible";
    document.querySelector(".bag_item_count").innerText = bagItems.length;
  } else {
    document.querySelector(".bag_item_count").style.visibility = "hidden";
  }
}
function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagCount();
}

function displayItemsOnHomePage() {
  let mainContainerElement = document.querySelector(".main_container");
  
  if(!mainContainerElement) return;

  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `

  <div class="item_container">
    <img class="item_img" src="${item.image}" alt="item image" />
    <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
    <div class="company_name">${item.company} </div>
    <div class="item_name">${item.item_name} </div>
    <div class="price">
      <span class="current_price">Rs ${item.current_price}</span>
      <span class="prev_price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="add_bag_btn" onclick="addToBag(${item.id} )">Add To Bag</button>
  </div>
  `;
  });
  mainContainerElement.innerHTML = innerHtml;
}
