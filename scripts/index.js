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

    function buildActivity (activity) {
    const {id, title, description, imgUrl} = activity;

    const h3 = document.createElement("h3");
    h3.innerHTML = title;
    const p = document.createElement("p");
    p.innerHTML = description;
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "Image not found";

    const card = document.createElement("div");
    card.className = "activitiesCards";
    card.id = id;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);

    return card;
 }
 function buildAllActivities() {
    const activityContainer = document.getElementById("activityContainer");
    activityContainer.innerHTML = "";

    const allActivities = repo.getAllActivities();

    const HTMLActivities = allActivities.map((activity) =>
        buildActivity(activity)
    );

    HTMLActivities.forEach((activityHTML) => {
        activityContainer.appendChild(activityHTML);
    });

 }

 function handleClickSubmit(){
    const nombre = document.getElementById("nombre");
    const descripcion = document.getElementById("descripcion");
    const imagen = document.getElementById("imagen");

    const nombreValue = nombre.value;
    const descripcionValue = descripcion.value;
    const imagenValue = imagen.value;

    if(!nombreValue.trim() || !descripcionValue.trim() || !imagenValue.trim()) {
        alert("Campos obligatorios");
        return;
    }

    repo.createActivity(nombreValue,descripcionValue,imagenValue);
    buildAllActivities();
 }

 const boton = document.getElementById("boton");
 boton.addEventListener("click", function(event) {
    event.preventDefault();
    handleClickSubmit();
 });

