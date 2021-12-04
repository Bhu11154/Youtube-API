
// Targeting DOM Elements
const btn = document.querySelector("#btn");
const search = document.getElementById("Input");
const main = document.querySelector(".main");

const APIKEY = "AIzaSyARD9vajKQ0OsoBf_68bHZZ-YpYJLP9oOk";

// Adding an event listener to the CLICK Button

btn.addEventListener("click", (e)=>{
    e.preventDefault(); // Prevents the page from reloading so no value is lost

    const name = search.value;

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=` + name + "&key=" + APIKEY; // API :)

    getData(url);
})

async function getData(url){
    const resp = await fetch(url);
    console.log(resp);

    const response = await resp.json();
    console.log(response.items);

    search.value = '';
    main.innerHTML = ``;
    display(response.items); // Calling the display function
}

function display(data){
    data.forEach(video =>{
        const element = document.createElement("div");
        element.innerHTML = `
            <img src="${video.snippet.thumbnails.default.url}" alt="Img" width="300px" height="200px">
            <div>
                <h3>${video.snippet.description}</h3>
            </div>`;
        main.appendChild(element);
    });
    const item = document.createElement("div");
    item.innerHTML = `${data[0].snippet.description}`;
    main.appendChild(item);
}

