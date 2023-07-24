import { apiKey } from "./apiKey.js";
import { searchGameName } from "../main.js";

const similarContainer = document.getElementById("similar-container");
const reviewContainer = document.getElementById("review-container");
const releaseContainer = document.getElementById("release-container");
const aboutContainer = document.getElementById("about-container");
const searchInput = document.getElementById("search-input");


export function createAbout(data) {
    aboutContainer.innerHTML = '';
    if (data.description === null) {
        const aboutP = document.createElement('p');
        aboutP.innerHTML = 'No description found';
        aboutContainer.appendChild(aboutP);
        return;
    }
    const aboutP = document.createElement('p');
    aboutP.innerHTML = data.description;
    aboutContainer.appendChild(aboutP);
}


export function createRelease(data) {
    releaseContainer.innerHTML = '';
    if (data.original_release_date === null) {
        const releaseP = document.createElement('p');
        releaseP.innerHTML = 'No release date found';
        releaseContainer.appendChild(releaseP);
        return;
    }
    const releaseP = document.createElement('p');
    releaseP.innerHTML = `${data.name} was originally released on ${data.original_release_date}`;
    releaseContainer.appendChild(releaseP);
}


export function createSimilar(data) {
    similarContainer.innerHTML = '';
    const newList = document.createElement('ul');
    if (data.similar_games.length === 0) {
        const similarLi = document.createElement('li');
        similarLi.innerHTML = 'No similar games found';
        newList.appendChild(similarLi);
        return;
    }
    for (let i = 0; i < data.similar_games.length; i++) {
        const similarLi = document.createElement('li');
        similarLi.innerHTML = data.similar_games[i].name;

        similarLi.addEventListener('click', () => {
            window.scrollTo(0, 0);
            searchGameName(similarLi.innerHTML);
            searchInput.value = similarLi.innerHTML;
        });

        newList.appendChild(similarLi);
    }

    similarContainer.appendChild(newList);
}


export function createReview(data) {
    reviewContainer.innerHTML = '';
    const reviewURL = data.reviews[0].api_detail_url;
    if (reviewURL === null) {
        const reviewP = document.createElement('p');
        reviewP.innerHTML = 'No review found';
        reviewContainer.appendChild(reviewP);
        return;
    }
    fetch(`${reviewURL}?api_key=${apiKey}&format=json`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            reviewContainer.innerHTML = data.results.description;
        })
        .catch((err) => console.log(err));
}