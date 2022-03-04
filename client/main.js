console.log("connected");


const newButton = document.querySelector(".newButton");






function newfortune(event){
  axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
    const data = response.data;
    alert(data);
          });
},



newButton.addEventListener("click", newfortune);
