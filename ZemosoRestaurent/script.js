//Loading Food Items
window.onload = () => {
    console.log('Window Loaded')
    const foodItems = '[{ "name": "Chicken Biryani", "price": "120" }, {"name": "Mutton Biryani","price": "150"},' +
        '{"name": "Chicken Lollipop","price": "200"},{"name": "Mutton Kheema","price": "300"},{"name": "Cheese Pizza","price": "80"},' +
        '{"name": "Panner Pizza","price": "100"},{"name": "Veg Fried Rice","price": "60"},{"name": "Veg Manchuria","price": "70"} ]';
    const Items = JSON.parse(foodItems);
    let divParent = document.getElementById('items');
    for (var index = 0; index < Items.length; index++) {
        let divChild = document.createElement('div');
        divChild.setAttribute("class", "itemcard");
        divChild.setAttribute("id", Items[index].name);
        divChild.setAttribute("draggable", "true");
        divChild.setAttribute("ondragstart", "dragStart()");

        let ul = document.createElement('ul');
        let liName = document.createElement('li');
        liName.setAttribute("class", "itemName")
        liName.textContent = Items[index].name;
        let liPrice = document.createElement('li');
        liPrice.setAttribute("id", "price" + Items[index].name);
        liPrice.textContent = Items[index].price;
        ul.appendChild(liName);
        ul.appendChild(liPrice);
        divChild.appendChild(ul);
        divParent.appendChild(divChild);
    }
}
//Searching Table
const searchTable = () => {
    let input = document.getElementById('searchTableInput').value.toUpperCase();
    console.log(input)
    let mainDiv = document.getElementById('tables');
    let tables = mainDiv.getElementsByTagName('div');
    for (var i = 0; i < tables.length; i++) {
        let tabItem = tables[i].getElementsByTagName('li');
        let text = tabItem[0].innerText.toUpperCase();
        if (text.toUpperCase().indexOf(input) > -1) {
            tables[i].style.display = "";
        }
        else {
            tables[i].style.display = 'none';
        }
    }
}
//Searching Items
const searchItem = () => {
    let input = document.getElementById('searchItemInput').value.toUpperCase();
    console.log(input);
    let divList = document.getElementById('items');
    let list = divList.getElementsByTagName('div');
    for (var i = 0; i < list.length; i++) {
        let liItems = list[i].getElementsByTagName('li');
        let text = liItems[0].innerText.toUpperCase();
        if (text.toUpperCase().indexOf(input) > -1) {
            list[i].style.display = "";
        }
        else {
            list[i].style.display = 'none';
        }
    }
}
//Drag Drop Events
var itemDragged;
function dragStart() {
    var element = document.getElementById(event.target.id);
    console.log(element);
    itemDragged = element.getElementsByTagName('li');
}

function addItemOnDrop() {
    event.preventDefault();
}

function onDropUpdateTableItems(event) {
    console.log('Items Dragged:'+itemDragged)
    console.log('event.target.innertext:'+event.target.innerText)
    let element = document.getElementById(event.target.innerText);
    console.log(element)
    const tableList = element.getElementsByTagName('li');
    var quantity = parseInt(tableList[1].innerText.substr(9)) + 1;
    var price = parseFloat(tableList[2].innerText.substr(6)) + parseFloat(itemDragged[1].innerText);
    let li = document.createElement('li');
    li.textContent = itemDragged[0].innerText;
    let ul = element.getElementsByTagName('ul');
    li.className = "menu";
    li.style.display = 'none';
    element.append(li);
    tableList[1].innerText = 'Quantity:'+quantity;
    tableList[2].innerText = 'Price:'+price;
}
//pay Bill(Closing Session)
function payBill(){
    console.log('Bill Paid');
}