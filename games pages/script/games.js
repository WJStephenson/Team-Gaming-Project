// const apiKey = 'a3ed24058c6960422612f376ca988d6bdc6d4a67'; // Remplacez par votre clé d'API Giant Bomb

// // Fetch for Slide 1

// function get_random_image() {
//     fetch('https://picsum.photos/800/600')
//       .then(response => {
//         if (response.ok) {
//           return response.url;
//         } else {
//           throw new Error('Image not found');
//         }
//       })
//       .then(imageUrl => {
//         document.getElementById('slide-1').src = imageUrl;
//       })
//       .catch(error => console.log(error));
//   }
  
//   get_random_image();

// //   Fetch for Slide 2

// function get_random_image2() {
//     fetch('https://picsum.photos/800/600')
//       .then(response => {
//         if (response.ok) {
//           return response.url;
//         } else {
//           throw new Error('Image not found');
//         }
//       })
//       .then(imageUrl => {
//         document.getElementById('slide-2').src = imageUrl;
//       })
//       .catch(error => console.log(error));
//   }
  
//   get_random_image2();

// //   Fetch for Slide 3

// function get_random_image3() {
//     fetch('https://picsum.photos/800/600')
//       .then(response => {
//         if (response.ok) {
//           return response.url;
//         } else {
//           throw new Error('Image not found');
//         }
//       })
//       .then(imageUrl => {
//         document.getElementById('slide-3').src = imageUrl;
//       })
//       .catch(error => console.log(error));
//   }
  
//   get_random_image3();

// //   Fetch for Slide 4

// function get_random_image4() {
//     fetch('https://picsum.photos/800/600')
//       .then(response => {
//         if (response.ok) {
//           return response.url;
//         } else {
//           throw new Error('Image not found');
//         }
//       })
//       .then(imageUrl => {
//         document.getElementById('slide-4').src = imageUrl;
//       })
//       .catch(error => console.log(error));
//   }
  
//   get_random_image4();
  





// //   Giant Bomb Api

  
const apiKey = 'a3ed24058c6960422612f376ca988d6bdc6d4a67'


// Array Try 


const imageReferences = [
  document.getElementById("slide-1"),
  document.getElementById("slide-2"),
  document.getElementById("slide-3"),
  document.getElementById("slide-4")
];

function searchGames() {
 const offset = Math.floor(Math.random() * 80000);
 return fetch(
   `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&offset=${offset}&limit=1`
 )
   .then((res) => res.json())
   .then((json) => {
     const results = json.results;
     return results[0].image.original_url;
   })
   .catch((err) => console.log(err))
}

imageReferences.forEach(imageRef => {
  searchGames()
    .then(imageUrl => {
      imageRef.src = imageUrl;
    })
    .catch(err => console.log(err));
});



// V1
// const slider1 = document.getElementById("slide-1")
// const slider2 = document.getElementById("slide-2")
// const slider3 = document.getElementById("slide-3")
// const slider4 = document.getElementById("slide-4")

// function searchGames() {
//   const offset = Math.floor(Math.random() * 80000);
//   fetch(
//     `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&offset=${offset}&limit=1`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       const results = json.results;
//       console.log(results[0].image.original_url);
//       console.log(results[0].name);
//       // let img_random = document.getElementById('slide-1').src = results[0].image.original_url;
//       slider1.src = results[0].image.original_url;
//     })
//     .catch((err) => console.log(err));
//   }

// const numberOfImagesRequired = 6;

// for (let i = 0; i < numberOfImagesRequired; i++) {
//   searchGames();
// }






// Backup 

// function searchGames() {
//   const offset = Math.floor(Math.random() * 80000);
//   fetch(
//     `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&offset=${offset}&limit=1`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       const results = json.results;
//         console.log(results[0].image.original_url);
//         console.log(results[0].name);
//       })
//     .then(results => {
//           document.getElementById('slide-4').src = results[0].image.original_url;
//         })
//     .catch((err) => console.log(err))
// }


// const numberOfImagesRequired = 6;

// for (let i = 0; i < numberOfImagesRequired; i++) {
//   searchGames();
// }