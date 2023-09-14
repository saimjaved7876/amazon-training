// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// commands.js (Cypress custom command)
// const pixelmatch = require('pixelmatch');
// const fs = require('fs-extra');
// const { PNG } = require('pngjs');

// Cypress.Commands.add('compareScreenshotsInFolder', (folderPath) => {
//   // Read all image files in the specified folder
//   const imageFiles = fs.readdirSync(folderPath);

//   // Create an array to store image data
//   const imageDatas = [];

//   imageFiles.forEach((imageFile) => {
//     if (imageFile.endsWith('.png')) {
//       const imagePath = `${folderPath}/${imageFile}`;
//       const imageBuffer = fs.readFileSync(imagePath);
//       const imageData = PNG.sync.read(imageBuffer);
//       imageDatas.push(imageData);
//     }
//   });

//   // Compare all images in the folder with the first image
//   const referenceImageData = imageDatas[0];
//   const numDifferentPixels = imageDatas.slice(1).reduce((totalDiffPixels, currentImageData) => {
//     const diff = new PNG({ width: referenceImageData.width, height: referenceImageData.height });
//     const diffPixels = pixelmatch(referenceImageData.data, currentImageData.data, diff.data, referenceImageData.width, referenceImageData.height, { threshold: 0.1 });
//     return totalDiffPixels + diffPixels;
//   }, 0);

//   return numDifferentPixels === 0;
// });












