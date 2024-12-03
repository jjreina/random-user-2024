import "./style.css";
import { Person } from "./classes/person";
import { parserToPersonClass } from "./helpers/promiseHelper";
import {
  url_randomuser_api,
  url_world_time_api,
  options_world_time_api,
} from "./apis";

const BUTTON_TEXT = "GENERATE USER";

const container = document.querySelector(".container");
const completeNameSpan = document.createElement("span");
const mailSpan = document.createElement("span");
const phoneSpan = document.createElement("span");
const citySpan = document.createElement("span");
const timeSpan = document.createElement("span");
const img = document.createElement("img");

// Solo se crea una instancia y se reutiliza, usando los setters
let person = new Person();

// Contenendero para la información del usuario
const card = document.createElement("div");
card.className = "card";

const button = document.createElement("button");
button.textContent = BUTTON_TEXT;

container.appendChild(card);
container.appendChild(button);

const createContentCard = (name, surname, mail, phone, image, city, time) => {
  img.src = image;
  completeNameSpan.innerHTML = `<strong>Name:</strong> ${name} ${surname}`;
  mailSpan.innerHTML = `<strong>Mail:</strong> ${mail}`;
  phoneSpan.innerHTML = `<strong>Phone:</strong> ${phone}`;
  citySpan.innerHTML = `<strong>Location:</strong> ${city}`;
  timeSpan.innerHTML = `<strong>Current Time:</strong> ${time}`;
  card.appendChild(img);
  card.appendChild(completeNameSpan);
  card.appendChild(mailSpan);
  card.appendChild(phoneSpan);
  card.appendChild(citySpan);
  card.appendChild(timeSpan);
};

button.addEventListener("click", async () => {
  try {
    // Get data from Rando user
    const userResponse = await fetch(url_randomuser_api);
    const { results } = await userResponse.json();
    // Parse ramdon user object to Person class
    const personClass = await parserToPersonClass(results[0], person);
    // Get current time from Time API with location of ramfon user
    const timeResponse = await fetch(
      `${url_world_time_api}${personClass.location}`,
      options_world_time_api
    );
    const currentTime = await timeResponse.json();

    createContentCard(
      personClass.name_last,
      personClass.name_first,
      personClass.mail,
      personClass.phone,
      personClass.picture,
      personClass.location,
      currentTime.datetime
    );
  } catch (error) {
    console.log(new Error(error));
  }
});

// Firt time
createContentCard(
  "name",
  "surname",
  "mail",
  "phone",
  "./user_nt_found.jpg",
  "city",
  "time"
);
