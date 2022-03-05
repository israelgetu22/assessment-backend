document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

//Grabbing
const fortuneBtn = document.getElementById("fortuneButton");
const quoteBtn = document.getElementById("qouteBtn");

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
//addEventListener

fortuneBtn.addEventListener("click", getfortune);
quoteBtn.addEventListener("click", getQoutes);
