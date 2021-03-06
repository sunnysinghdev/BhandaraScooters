var apiEndPointUrl = 'https://safe-temple-99953.herokuapp.com';
var storeList = {};
var orderList = {
    items: [],
    amount: 0.00,
    custName: ""
};
document.getElementById('txtItemId').value = '';
document.getElementById('txtItemName').value = '';
document.getElementById('txtItemPrice').value = '';
document.getElementById("txtItemName")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            for (var itemId in storeList) {
                if (storeList[itemId].itemName == this.value) {
                    //document.getElementById("txtItemId").value = itemId;
                    // document.getElementById("txtItemPrice").value = storeList[itemId].price.toFixed(2);
                }
            }
        }
    });

function onInputName(ele) {
    // var el = document.getElementById("txtItemPrice");
    var el = ele.value;
    for (var itemId in storeList) {

        if (storeList[itemId].itemName == el) {
            document.getElementById("txtItemId").value = itemId;
            document.getElementById("txtItemPrice").value = storeList[itemId].price.toFixed(2);
            document.getElementById("btnAdd").focus();
        }
    }
}

function createStoreList(items) {
    for (var i = 0; i < 10; i++) {
        storeList[items[i].ID] = {
            itemName: items[i].Name + '-' + items[i].BrandName,
            price: Number(parseFloat(items[i].Price).toFixed(2))
        }
    }
    populateQueryLists();
}

function populateQueryLists() {
    var itemId = document.getElementById('itemIdSuggestion');
    var itemName = document.getElementById('itemNameSuggestion');
    for (var id in storeList) {
        var option = document.createElement('option');
        option.value = id;
        itemId.appendChild(option);
        var optionName = document.createElement('option');
        optionName.value = storeList[id].itemName;
        itemName.appendChild(optionName);
    }
}

function handler() {
    if (this.status == 200) {
        // success!
        var rawdata = this.response;
        var dataJson = JSON.parse(rawdata);
        createStoreList(dataJson);
    } else {

    }
}
var clientName = "SS Store";
var xhr = new XMLHttpRequest();
xhr.onload = handler;
xhr.open('GET', 'http://github.sunnysinghdev.com/BhandaraScooters/WebAngular/inv_parts.json', false);
xhr.open('GET', apiEndPointUrl + '/bhandara/db/all');
xhr.send();
// var rs = xhr.response;
//http://github.sunnysinghdev.com/BhandaraScooters/WebAngular/inv_parts.json
function addOrderList() {

    var itemId = document.getElementById('txtItemId').value;
    var itemName = document.getElementById('txtItemName').value;
    var itemPrice = document.getElementById('txtItemPrice').value;
    if (itemId == '' || itemName == '' || itemPrice == '')
        return;
    orderList.items.push(itemId);
    orderList.amount = Number(orderList.amount) + Number(itemPrice);
    document.getElementById("orderAmount").innerText = "Total Rs = " + orderList.amount.toFixed(2);

    var table = document.getElementById('ordertbody');

    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    var text1 = document.createTextNode(itemId);
    var text2 = document.createTextNode(itemName);
    var text3 = document.createTextNode(parseFloat(itemPrice).toFixed(2));

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);

    document.getElementById('txtItemId').value = '';
    document.getElementById('txtItemName').value = '';
    document.getElementById('txtItemPrice').value = '';
    document.getElementById("txtItemName").focus();
    //$("#orderarea").scrollTop(100000);
    //table.classList.add('table-striped');
    //table.className = 'table table-bordered  table-condensed';
    //table.refresh();
}