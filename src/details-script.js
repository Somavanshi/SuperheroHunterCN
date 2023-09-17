const main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    try {
        if (id) {
            console.log(`Received ID: ${id}`);
            await renderCard(id);
        } else {
            console.error('No ID provided in the URL');
        }
    } catch (error) {
        console.log(error);
    }

});

document.addEventListener("click", function (e) {
    if (e.target.id === "home") {
        window.location.href = `../index.html`;
    } else if (e.target.id === "favorite") {
        window.location.href = `favorite.html`;
    }
});

document.addEventListener("click", function (e) {
    if (e.target.id === "home") {
        window.location.href = `../index.html`;
    }
});

async function renderCard(id) {
    const listStr = localStorage.getItem('list');
    const result = JSON.parse(listStr);
    console.log(result);
    if (result && result.length > 0) {
        for (const item of result) {
            if (item.id != id)
                continue;
            console.log("here");
            const card = document.createElement("div");
            card.classList.add("hero-card");
            const imgUrl = item.thumbnail.path + "/portrait_xlarge." + item.thumbnail.extension;
            // dynamically adding element to ul list
            card.innerHTML = `   
            <div class="character-details">
        <h1>Character Details</h1>

        <div class="thumbnail">
            <img src=${imgUrl} alt="Character Thumbnail">
        </div>

        <h2>Name: ${item.name}</h2>
        <p>Description: ${item.description ? item.description : "Description not available"}</p>

        <h2>Comics</h2>
        <ul class="comics-list">
            <li>${item.comics.items[0]?.name}</li>
            <li>${item.comics.items[1]?.name}</li>
            <li>${item.comics.items[2]?.name}</li>
            <li>${item.comics.items[3]?.name}</li>
        </ul>

        <h2>Series</h2>
        <ul class="series-list">
            <li>${item.series.items[0]?.name}</li>
            <li>${item.series.items[1]?.name}</li>
            <li>${item.series.items[2]?.name}</li>
            <li>${item.series.items[3]?.name}</li>
        </ul>

        <h2>Stories</h2>
        <ul class="series-list">
            <li>${item.stories.items[0]?.name}</li>
            <li>${item.stories.items[1]?.name}</li>
            <li>${item.stories.items[2]?.name}</li>
            <li>${item.stories.items[3]?.name}</li>
        </ul>

        <h2>Events</h2>
        <ul class="series-list">
            <li>${ item.events.items[0] ? item.events.items[0]?.name : ""}</li>
        </ul>
    </div>
            `;
            main.appendChild(card);
            break;
        }
        return;
    }
}