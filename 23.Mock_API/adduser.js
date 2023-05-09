

const adduser = document.querySelector(".adduser");
const boxes = document.querySelector("#boxes");

async function getAllData() {
    const res = await fetch("http://localhost:8080/users");
    const data = await res.json();
    data.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add('col-5', 'rounded', 'p-4','box');
        box.innerHTML = `
        <div class = "d-flex justify-content-between">
      <div>
        <h4>${item.name}</h4>
        <h5>${item.usertype}</h5>
        <h5>${item.email}</h5>
      </div>
      <div class="gap-4 d-flex align-items-center">
      <i class="fa-solid fa-pen editBtn" onclick= editBox("${item.id}") "></i>
  <i class="fa-solid fa-trash-can" onclick= deleteBox("${item.id}") style="color:rgb(197, 15, 15)"></i>
      </div>
    </div>
        `;
        boxes.append(box);
    });
}
getAllData();


const deleteBox = async (id) => {
    await fetch(`http://localhost:8080/users/${id}`, {
        method: "DELETE",
    });
    getAllData();
};







