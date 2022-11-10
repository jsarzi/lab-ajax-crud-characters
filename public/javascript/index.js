const charactersAPI = new APIHandler("http://localhost:8000");
const template = document.querySelector("#character-template");
const view = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      axios
        .get("http://localhost:8000/characters")
        .then((res) => {
          view.innerHTML = "";
          const arr = res.data;

          arr.forEach((e) => {
            appendCharacterToView(e);
          });
        })
        .catch((error) => console.log(error));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.querySelector("#input").value;
      axios
        .get(`http://localhost:8000/characters/${id}`)
        .then((res) => {
          view.innerHTML = "";
          const e = res.data;
          appendCharacterToView(e);
        })
        .catch((error) => console.log(error));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const id = document.querySelector("#input2").value;
      axios
        .delete(`http://localhost:8000/characters/${id}`)
        .then((res) => {
          const e = res.data;
          console.log(id);
        })
        .catch((error) => console.log(error));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});

function appendCharacterToView(e) {
  const clone = template.content.cloneNode(true);
  let div = clone.querySelector(".character-info");
  let id = clone.querySelector(".id span ");
  let name = clone.querySelector(".name span");
  let occupation = clone.querySelector(".occupation span");
  let cartoon = clone.querySelector(".cartoon span");
  let weapon = clone.querySelector(".weapon span");
  console.log(name, occupation, cartoon, weapon);
  id.textContent = `${e.id}`;
  name.textContent = `${e.name}`;
  occupation.textContent = `${e.occupation}`;
  cartoon.textContent = `${e.cartoon}`;
  weapon.textContent = `${e.weapon}`;

  view.append(clone);
}
