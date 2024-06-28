class Activity {
    constructor (id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getAllActivities(){
        return this.activities;
    }

    createActivity(title, description, imgUrl){
        const id = this.id
        const activity = new Activity(id, title, description, imgUrl)
        this.activities.push(activity)
    }
}

const repo =  new Repository();

function buildActivity (activity){
    const {id, title, description, imgUrl} = activity

    const h3 = document.createElement("h3");
    h3.textContent = title;
    const p = document.createElement("p");
    p.textContent = description;
    const img = document.createElement("img");
    img.src = imgUrl;

    const card = document.createElement("div");
    card.className = "card";
    card.id = id;

    card.appendChild(h3)
    card.appendChild(p)
    card.appendChild(img)

    return card;
}
 function buildAllActivities() {
    const imagenesContainer = document.getElementById("imagenesContainer");
    imagenesContainer.innerHTML = "";

    const getAllActivities = repository.getAllActivities();

    const HTMLactivities = getAllActivities.map((activity) => {
        buildActivity(activity);
    });

    HTMLActivities.forEach((activityHTML) =>{
        imagenesContainer.appendChild(activityHTML);
    });

 }

 function handleClickSubmit(){
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const imgUrl = document.getElementById("imgUrl");

    const titleValue = title.value
    const descriptionValue = description.value
    const imgUrlValue = imgUrl.value

    if(!titleValue.trim() || !descriptionValue.trim() || !imgUrlValue.trim()){
        alert("Campos obligatorios")
        return;
    }
    repository.createActivity(titleValue,descriptionValue, imgUrlValue);
    buildAllActivities();
 }

 const buttonSubmit = document.getElementById("submitButton");
 buttonSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    handleClickSubmit();
 });
