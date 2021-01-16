let dataList = [
  {
    name: "Jacob",
  },
  {
    name: "William",
  },
  {
    name: "Jayden",
  },
  {
    name: "Noah",
  },
  {
    name: "Michael",
  },
  {
    name: "Ethan",
  },
  {
    name: "Alexander",
  },
  {
    name: "Aiden",
  },
  {
    name: "Daniel",
  },
  {
    name: "Chloe",
  },
];

dataList = dataList.map((data) => {
  return {
    name: data.name,
    salary: Math.floor(Math.random() * 1000000),
  };
});

// declare selectors

const doublebtn = document.querySelector("#double");
let dataContainer = document.querySelector("#databody");
const millionaire = document.querySelector("#millionaire");
const sortbtn = document.querySelector("#sort");
const totalbtn = document.querySelector("#total");
const reversebtn = document.querySelector("#reverse");
const search = document.querySelector("#search");
const submitForm = document.querySelector("#formData");

// catch listener
document.addEventListener("DOMContentLoaded", showData(dataList));
doublebtn.addEventListener("click", doubleSalary);
millionaire.addEventListener("click", showMillionaire);
sortbtn.addEventListener("click", sortSalary);
totalbtn.addEventListener("click", totalSalary);
reversebtn.addEventListener("click", reverseSalary);
search.addEventListener("input", (e) => {
  let data = dataList;
  if (e.target.value !== ""){
    let search = e.target.value.toLowerCase();
    data = data.filter(v => {
      return v.name.toLowerCase().indexOf(search) > -1;
    })
  }
  showData(data);
});

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let dataobj = {
    name: document.querySelector("#name").value,
    salary: document.querySelector("#income").value * 1
  }
  dataList.push(dataobj);
  clearDataField();
  showData(dataList);
})

function clearDataField() {
  document.querySelector("#name").value = "";
  document.querySelector("#income").value = "";
}

function showData(data) {
  dataContainer.innerHTML = "";
  data.forEach((list) => {
    const databody = document.createElement("p");
    databody.classList.add("d-flex");
    databody.innerHTML = `
				<span>${list.name}</span>
				<span class="ms-auto" id="salary">${formatNumber(list.salary)}</span>
			`;
    dataContainer.appendChild(databody);
  });
}

function formatNumber(num) {
  return Number(num).toLocaleString("mmk");
}

function doubleSalary() {
  dataList = dataList.map((list) => {
    return {
      name: list.name,
      salary: list.salary * 2,
    };
  });
  showData(dataList);
}

function showMillionaire() {
  let moredata = dataList.filter((data) => {
    return data.salary > 1000000;
  });
  showData(moredata);
}

function sortSalary() {
  let data = dataList.sort((a, b) => {
    return a.salary - b.salary;
  });
  showData(data);
}

function totalSalary() {
  let sum = dataList.reduce((total, data) => (total += data.salary), 0);
  const databody = document.createElement("p");
  databody.classList.add("d-flex");
  databody.innerHTML = `
      <span>Total</span>
      <span class="ms-auto" id="salary">${formatNumber(sum)}</span>
    `;
  dataContainer.appendChild(databody)
}

function reverseSalary(){
  let reversedata = dataList.reverse((data) => data);
  showData(reversedata);
}

