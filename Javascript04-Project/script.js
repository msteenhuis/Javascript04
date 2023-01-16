function Initialize() {
  input = document.getElementById("add");
  appInput = document.getElementById("number");
  output = document.getElementById("list");
  listArr = ["."];
  console.log(appInput);
}

function checkData() {
  product = input.product.value;
  qty = input.qty.value;
  console.log("Clicked! " + product + " " + qty);
  const item = {type: product, qty: qty}
  listArr.push(item);
  console.log("Clicked! " + item.type + " " + item.qty);
  display();
}

function display() {
  console.log(listArr);
  for (i = 1; i < listArr.length; i++) {
    output.innerHTML += i + ". " + listArr[i].type + " (" + listArr[i].qty + ") <br />";
  }
}

function moveUp() {
  upItem = listArr[appInput.value]; 
  downItem = listArr[appInput.value - 1]; 
  [listArr[downItem], listArr[upItem]] = [listArr[upItem], listArr[downItem]];
  console.log(listArr);

  display();
}

function moveDown() {
  downItem = listArr[appInput.value]; 
  upItem = listArr[appInput.value + 1]; 
  [listArr[downItem], listArr[upItem]] = [listArr[upItem], listArr[downItem]];
  console.log(listArr);

  display();
}

function addQty() {
  incItem = listArr[appInput.value]; 
  incItem.qty++;
  display();
}

function deleteItm() {
  upItem = appInput.value;
  delete listArr[appInput.value];
  console.log(listArr);

  display();
  console.log("deleted");
  listArr.length--;
}