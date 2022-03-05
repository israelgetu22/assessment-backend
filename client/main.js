document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

//Grabbing
const fortuneBtn = document.getElementById("fortuneButton");
const quoteBtn = document.getElementById("qouteBtn");

const nameInput = document.getElementById("nameInput");
const nameBtn = document.getElementById("nameButton");

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

    nameInput.value = "";
  });
}

//addEventListener

fortuneBtn.addEventListener("click", getfortune);
quoteBtn.addEventListener("click", getQoutes);

nameBtn.addEventListener("click", createName);
