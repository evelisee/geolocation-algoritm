import { addPointerToMap } from "../module/map.js";

const buttonSearchGeolocation = document.getElementById("searchGeolocation");
const coordinateInput = document.getElementById("coordinateInput");
const mapAndListContainer = document.getElementById("mapAndListContainer");

buttonSearchGeolocation.addEventListener("click", () => {
  clearList();
  const coordinate = [...coordinateInput.value.split(",")];
  addPointerToMap(coordinate);
  mapAndListContainer.classList.remove("none");
});

function clearList() {
  document.getElementById("storeInformationList").innerHTML = "";
}
