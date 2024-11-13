var list = document.getElementById("list");
function addtodo() {
    var todo_item = document.getElementById("todo-item");




    // create list item 
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo_item.value));
    // console.log(li)


    // create delete button 
    var deleteButton = document.createElement("button");
    var deltext = document.createTextNode("delete");
    deleteButton.setAttribute("onclick", "deleteitems(this) ")
    deleteButton.appendChild(deltext);
    li.appendChild(deleteButton);

    // create edit button 

    var editbtn = document.createElement('button');
    var edittxt = document.createTextNode("Edit")



    editbtn.setAttribute("onclick", "editItems(this)")





    editbtn.appendChild(edittxt);
    li.appendChild(editbtn);
    console.log(li)


    list.appendChild(li);


}

function deleteitems(e) {
    e.parentNode.remove()
}







function editItems(e) {



    // console.log(e.parentNode.firstChild)

    var value = e.parentNode.firstChild.nodeValue;
    var editedvalue = prompt("Enter edit value", value);

    e.parentNode.firstChild.nodeValue = editedvalue;


}

function deleteall() {
    list.innerHTML = ""
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBc0QtY6trNx2hzEx4F8pBbKvRvn65uGvo",
//     authDomain: "todo-app-7e814.firebaseapp.com",
//     projectId: "todo-app-7e814",
//     storageBucket: "todo-app-7e814.firebasestorage.app",
//     messagingSenderId: "779893196432",
//     appId: "1:779893196432:web:abdbffff06c4be50db3a15"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// var Auth = getAuth(app)

// var email = document.getElementById("email")
// var pass = document.getElementById("pass")

// window.submitData = function () {

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up 
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//         });
// }
