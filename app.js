class People {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class UI {
  addPeople(people) {
    const peopleList = document.getElementById("list-people");
    const element = document.createElement("div");

    element.innerHTML = `
        <div class="text-center card mb-3">
            <div class="card-body">
                <span><strong>${people.name}</strong></span>
                <span><strong>${people.lastname}</strong></span>
                <a href="#" name="delete" class="badge badge-danger text-ligth text-center float">DELETE</a>
            </div>
        </div>
    `;

    peopleList.appendChild(element);
  }

  deletePeople(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
    }
  }

  showMessage(message, classCss) {
    const element = document.createElement("div");
    element.className = `alert alert-${classCss} text-center`;

    element.appendChild(document.createTextNode(message));
    //Mostrarlo
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");
    container.insertBefore(element, app);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  resetForm() {
    document.getElementById("form-people").reset();
  }
}

//Main - Manejar eventos
const form = document
  .getElementById("form-people")
  .addEventListener("submit", (e) => {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;

    const people = new People(name, lastname);

    const ui = new UI();
    ui.addPeople(people);
    ui.resetForm();
    ui.showMessage("People added!", "success");
    e.preventDefault();
  });

const list = document
  .getElementById("list-people")
  .addEventListener("click", (e) => {
    const ui = new UI();
    ui.deletePeople(e.target);
    ui.showMessage("People delete!", "danger");
  });
