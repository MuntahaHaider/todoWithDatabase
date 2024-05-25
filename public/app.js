// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE7M-w9wEHKLLhaKPTlFmzqrkGtwHC82w",
    authDomain: "todowithdatabase-ee6f1.firebaseapp.com",
    databaseURL: "https://todowithdatabase-ee6f1-default-rtdb.firebaseio.com",
    projectId: "todowithdatabase-ee6f1",
    storageBucket: "todowithdatabase-ee6f1.appspot.com",
    messagingSenderId: "708030031412",
    appId: "1:708030031412:web:754d6773540dcd01b78c61"
  };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig)

    firebase.database().ref("todos").on("child_added",function(data){

    var list = document.getElementById("list");

    list.innerHTML += `<li>${data.val().todoValue}
    <button id = ${data.val().key} onclick="editItem(this)">Edit</button>

    <button id = ${data.val().key} onclick="deleteItem(this)">Delete</button>
    </li>`;


    // We also Use this....

//     var liElement = document.createElement("li");
  
//     var liText = document.createTextNode(data.val().todoValue);

//     // var liText = document.createTextNode(input.value);
  
//     liElement.appendChild(liText);
  
//     //   console.log(liElement);
  
//     var list = document.getElementById("list");
  
//     list.appendChild(liElement);
  
//     //   delete button creation
  
//     var delBtnELement = document.createElement("button");
  
//     var delBtnText = document.createTextNode("delete");
  
//     delBtnELement.appendChild(delBtnText);
  
//     liElement.appendChild(delBtnELement);
  
//     delBtnELement.style.backgroundColor = "blue";
//     delBtnELement.style.color = "white";
  
//     delBtnELement.setAttribute("onclick", "deleteItem(this)");

//    delBtnELement.setAttribute("id",data.val().key)


//     //   Edit button creation
  
//     var EditBtnELement = document.createElement("button");
  
//     var EditBtnText = document.createTextNode("edit");
  
//     EditBtnELement.appendChild(EditBtnText);
  
//     liElement.appendChild(EditBtnELement);
  
//     EditBtnELement.setAttribute("class", "editBtn");
  
//     EditBtnELement.setAttribute("onclick", "editItem(this)");

//     EditBtnELement.setAttribute("id",data.val().todoValue)
})



function addTodo() {
    var input = document.getElementById("todoInput");
  
    var id = Date.now().toString(25)
  
    var obj = {
      key: id,
      todoValue: input.value,
    }
  
    firebase.database().ref("todos/" + id).set(obj)
  
    console.log(obj)
  
}

function deleteAll() {
    firebase.database().ref("todos").remove()
    var list = document.getElementById("list");
    list.innerHTML = "";
}

function deleteItem(e){
    firebase.database().ref("todos/" + e.id).remove()
  e.parentNode.remove()
}

function editItem(e) {
    var valueId = e.id
  var updateValue = prompt("Enter updated value..");

  firebase.database().ref("todos/" + valueId).set({
    key: e.id,
    todoValue: updateValue,
  })
  e.parentNode.firstChild.nodeValue = updateValue;
}

