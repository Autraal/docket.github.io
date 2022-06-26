
function deleteHistory() {
    var itemsDel = document.getElementById("items-cleared")
    
     itemsDel.addEventListener("click",()=>{

alert("Histoy cleared")
  db.collection("todo-items").get().then(querySnapshot => {
   querySnapshot.docs.forEach(snapshot => {
   snapshot.ref.delete();
   })
   })
   db.collection("todo-items").orderBy("completed" == true)
     })

    }
     
  
 
 










  

// function activeItems (id) {
//    // from the database
//     let item = db.collection("todo-items").doc(id);
//     var activeitems = document.getElementById("active-items");
//     item.get().then((doc) => {
   
   
//      let status = doc.data();
//      if (status=="active") {
//       document.querySelector(".todo-items").style.display ="flex";
//    }

   

// else if (status=="completed"){
//    document.querySelector(".todo-items").style.display = null;
// }
        
  
// })
//      } 
     

   deleteHistory()
