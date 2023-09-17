let list = [];
const main = document.querySelector('main');
async function fetchData() {
    const listStr = localStorage.getItem('list');
    const result = JSON.parse(listStr);

    if (result && result.length > 0) {
        list = result;
        return;
    }

    const res = await fetch("http://gateway.marvel.com/v1/public/characters?ts=1694920421452&apikey=2078fa5f632e0e973769c2f7589535af&hash=7f69f7a5ac9941282d132772c73a2bcf");
    const data = await res.json();
    list = data.data.results;
    for (const iterator of list) {
        iterator.liked = false;
    }
    localStorage.setItem('list', JSON.stringify(list));
}

function refreshList() {
    main.innerHTML = "";
}

function toggleLike(id) {
    for (const item of list) {
        if (item.id == id) {
            item.liked = !item.liked;
            localStorage.setItem('list', JSON.stringify(list));
            refreshList();
            renderList();
            return;
        }
    }
    return;
}

async function renderList(filter = "") {
    console.log(list);
    for (const item of list) {
        if (filter && !item.name.includes(filter))
            continue;
        if (!item.liked)
        continue;
        // const anchor = document.createElement("a");
        // anchor.href = `./src/details.html?id=${item.id}`;
        const card = document.createElement("div");
        card.classList.add("hero-card");
        const imgUrl = item.thumbnail.path + "/portrait_xlarge." + item.thumbnail.extension;
        // dynamically adding element to ul list
        card.innerHTML = `
        <img src="${imgUrl}" alt="" srcset="" id=${item.id}>
        <div>${item.name}</div>
        <div class="like" id=${item.id}>${item.liked ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}</div>
        `;
        // anchor.appendChild(card);
        main.appendChild(card);
    }

    const likes = document.querySelectorAll('.like');
    console.log(likes);
    likes.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.stopPropagation();
            const id = event.target.parentNode.id;
            toggleLike(id);
        });
    });
    return;
}

document.addEventListener('DOMContentLoaded', async function () {
    await fetchData();
    refreshList();
    renderList();

    const links = document.querySelectorAll('img');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const id = event.target.id;
            event.stopPropagation();
            console.log("id :", event.target.id);
            window.location.href = `details.html?id=${id}`;
        });
    });
});

document.addEventListener("click", function (e) {
    if (e.target.id === "home") {
        window.location.href = `../index.html`;
    } else if (e.target.id === "favorite") {
        window.location.href = `favorite.html`;
    }
});