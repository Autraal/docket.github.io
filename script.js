// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";

function addItem(event) {
  event.preventDefault();

  let text = document.getElementById("todo-input");
  db.collection("todo-items").add({
    text: text.value,
    status: "active",
  });
  text.value = "";
}

var getItems = () => {
  db.collection("todo-items").onSnapshot((snapshot) => {
    console.log(snapshot);
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    generateItems(items);
  });
};

var generateItems = (items) => {
  let itemsHTML = "";
  items.forEach((item) => {
    itemsHTML += `
    <div class="todo-item">
    <div class="check">

      <div data-id = "${item.id}" class="check-mark ${item.status == "completed" ? "checked": ""}">
        <img src="./assets/icon-check.svg" alt="" />
      </div>
    </div>

    <div class="todo-text ${item.status == "completed" ? "checked": ""}">
    ${item.text}
    
    </div>
  </div>
</div>

`;
  });
document.querySelector(".todo-items").innerHTML = itemsHTML;
createEventListeners();
};


var createEventListeners = () => {
let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark")

todoCheckMarks.forEach((checkMark) => {
checkMark.addEventListener("click", ()=>{
  markCompleted(checkMark.dataset.id);
})
})

}

var markCompleted = (id) => {
// from the database
 let item = db.collection("todo-items").doc(id);

 item.get().then((doc) => {

if (doc.exists) {
  let status = doc.data().status;
  if (status == "active") {
    item.update(
      {
        status:"completed"
      }
    )
   

  }
  else if (status == "completed") {
item.update(
  {
    status:"active"
  }
)
  }
}


 })


}



getItems();
