document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

//Grabbing
const fortuneBtn = document.getElementById("fortuneButton");
const quoteBtn = document.getElementById("quoteBtn");

const nameInput = document.getElementById("nameInput");
const nameBtn = document.getElementById("nameButton");

const indexInput = document.getElementById("indexInput");
const indexButton = document.getElementById("indexBtn");

const form = document.querySelector("form");
const newNameInput = document.getAnimations("newNameInput");
const newNameIndex = document.getElementById("newNameIndex");
const submitForm = document.getElementById("submitForm");

//function
function getfortune() {
  axios.get("http://localhost:4000/api/fortune").then((res) => {
    console.log(res.data);
    alert(res.data);
  });
}

function getQoutes() {
  axios.get("http://localhost:4000/api/quote").then((res) => {
    console.log(res.data);
    alert(res.data);
  });
}

function createName() {
  const newName = nameInput.value;

  const body = {
    newName, // newName:newName
  };
  axios.post("http://localhost:4000/api/name", body).then((res) => {
    console.log(res.data);
    let name = res.data[res.data.length - 1];
    alert(`You just registered ${name}`);
    console.log(res.data);

    nameInput.value = "";
  });
}

function delName() {
  const newIndex = indexInput.value;
  axios
    .delete(`http://localhost:4000/api/delete/${newIndex}`)
    .then((res) => {
      alert("Deleted Successfully");
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
}

function editName() {
  const nameChange = newNameInput.value;
  const indexChange = newNameIndex.value;

  const body = {
    nameChange,
  };
  axios
    .put(`http://localhost:4000/api/edit/${indexChange}`, body)
    .then((res) => {
      alert(`Your users array now contains ${res.data}`);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

//addEventListener

fortuneBtn.addEventListener("click", getfortune);
quoteBtn.addEventListener("click", getQoutes);
nameBtn.addEventListener("click", createName);
indexButton.addEventListener("click", delName);
submitForm.addEventListener("click", editName);
