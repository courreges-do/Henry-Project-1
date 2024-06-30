 class Activity {
    constructor (id, title, description, imgUrl) {
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

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        ++this.id;
        const activity = new Activity(this.id, title, description, imgUrl)
        this.activities.push(activity)
    }
 }

 const repo =  new Repository();
/*
 repo.createActivity("leer","me gusta descubrir mundos nuevos","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.abc.es%2Fcultura%2Flibros%2F20130423%2Fabci-beneficios-lectura-libro-201304221632.html&psig=AOvVaw2ORSmOpM88-IVex6xNgDLj&ust=1719845141854000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiYnd3Ig4cDFQAAAAAdAAAAABAE")
 */

    function buildActivity (activity) {
    const {id, title, description, imgUrl} = activity;

    const h3 = document.createElement("h3");
    h3.textContent = title;
    const p = document.createElement("p");
    p.textContent = description;
    const img = document.createElement("img");
    img.src = imgUrl;

    const card = document.createElement("div");
    card.className = "card";
    card.id = id;

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(img);

    return card;
 }
 function buildAllActivities() {
    const imagenesContainer = document.getElementById("imagenesContainer");
    imagenesContainer.innerHTML = "";

    const getAllActivities = repo.getAllActivities();

    const HTMLActivities = getAllActivities.map((activity) => {
        return buildActivity(activity);
    });

    HTMLActivities.forEach((activityHTML) =>{
        imagenesContainer.appendChild(activityHTML);
    });

 }

 function handleClickSubmit(){
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const imgUrl = document.getElementById("imgUrl");

    const titleValue = title.value;
    const descriptionValue = description.value;
    const imgUrlValue = imgUrl.value;

    if(!titleValue.trim() || !descriptionValue.trim() || !imgUrlValue.trim()) {
        alert("Campos obligatorios");
        return;
    }
    repo.createActivity(titleValue,descriptionValue, imgUrlValue);
    buildAllActivities();
 }

 const buttonSubmit = document.getElementById("submitButton");
 buttonSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    handleClickSubmit();
 });

