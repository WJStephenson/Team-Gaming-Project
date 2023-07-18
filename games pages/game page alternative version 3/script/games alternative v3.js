

// // //   Giant Bomb Api
// const apiKey = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// // Array Try
// const imageReferences = [
//   document.getElementById("slide-1"),
//   document.getElementById("slide-2"),
//   document.getElementById("slide-3"),
//   document.getElementById("slide-4"),
//   document.getElementById("slide-5"),
//   document.getElementById("slide-6"),
//   document.getElementById("slide-7"),
//   document.getElementById("slide-8"),
//   document.getElementById("slide-9"),
//   document.getElementById("slide-10"),
//   document.getElementById("slide-11"),
//   document.getElementById("slide-12"),
//   document.getElementById("slide-13"),
//   document.getElementById("slide-14"),
//   document.getElementById("slide-15"),
//   document.getElementById("slide-16"),
// ];

// function searchGames() {
//   const offset = Math.floor(Math.random() * 80000);
//   return fetch(
//     `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&offset=${offset}&limit=1`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       const results = json.results;
//       return results[0].image.original_url;
//     })
//     .catch((err) => console.log(err));
// }

// imageReferences.forEach((imageRef) => {
//   searchGames()
//     .then((imageUrl) => {
//       imageRef.src = imageUrl;
//     })
//     .catch((err) => console.log(err));
// });


// const apiKey = 'a3ed24058c6960422612f376ca988d6bdc6d4a67';
// const slideData = [
//   { slideId: 'slide-1', titleId: 'slide-1-title', descriptionId: 'slide-1-description' },
//   { slideId: 'slide-2', titleId: 'slide-2-title', descriptionId: 'slide-2-description' },
//   { slideId: 'slide-3', titleId: 'slide-3-title', descriptionId: 'slide-3-description' },
//   { slideId: 'slide-4', titleId: 'slide-4-title', descriptionId: 'slide-4-description' }
// ];

// function getRandomOffset() {
//   return Math.floor(Math.random() * 80000);
// }

// function fetchGameData(offset) {
//   const url = `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&offset=${offset}&limit=1`;

//   return fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const game = data.results[0];
//       return {
//         imageUrl: game.image.original_url,
//         title: game.name,
//         description: game.description
//       };
//     })
//     .catch(error => console.log(error));
// }

// function updateSlideContent(slideId, titleId, descriptionId) {
//   const slide = document.getElementById(slideId);
//   const titleElement = document.getElementById(titleId);
//   const descriptionElement = document.getElementById(descriptionId);

//   const offset = getRandomOffset();

//   fetchGameData(offset)
//     .then(gameData => {
//       slide.src = gameData.imageUrl;
//       titleElement.textContent = gameData.title;
//       descriptionElement.innerHTML = gameData.name;
//     })
//     .catch(error => console.log(error));
// }

// slideData.forEach(slide => {
//   updateSlideContent(slide.slideId, slide.titleId, slide.descriptionId);
// });


const apiKey = 'a3ed24058c6960422612f376ca988d6bdc6d4a67';

function getRandomOffset() {
  return Math.floor(Math.random() * 80000);
}

function fetchGameData(offset) {
  const url = `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&offset=${offset}&limit=1`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const game = data.results[0];
      return {
        imageUrl: game.image.original_url,
        title: game.name,
        description: game.guid
      };
    })
    .catch(error => console.log(error));
}

function updateCardContent(cardId) {
  const card = document.querySelector(".card");
  const imageElement = card.querySelector('.imgBox img');
  const titleElement = card.querySelector('.content h2');
  const descriptionElement = card.querySelector('.content p');

  const offset = getRandomOffset();

  fetchGameData(offset)
    .then(gameData => {
      imageElement.src = gameData.imageUrl;
      titleElement.textContent = gameData.title;
      descriptionElement.textContent = gameData.guid;
    })
    .catch(error => console.log(error));
}

const cardIds = ['card-1', 'card-2'];

cardIds.forEach(cardId => {
  updateCardContent(cardId);
});
