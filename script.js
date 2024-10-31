

const images = document.querySelectorAll('.gallery img'); // Select all images
let currentIndex = 0; // Track the current image index
let interval; // To store the interval for auto-rotation

// Function to rotate the gallery based on the current index
function rotateGallery() {
  const angle = 360 / images.length; // Calculate the rotation angle
  images.forEach((image, index) => {
    const rotation = angle * (index - currentIndex);
    image.style.transform = `rotateY(${rotation}deg) translateZ(300px)`; // 3D rotation
  });
}

// Function to start automatic rotation
function startAutoRotate() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    rotateGallery();
  }, 3000); // Rotate every 3 seconds
}

// Function to stop automatic rotation when user interacts
function stopAutoRotate() {
  clearInterval(interval); // Stop the interval
}

// Add event listeners for buttons to rotate manually and stop auto-rotation
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', () => {
  stopAutoRotate(); // Stop auto-rotation on manual interaction
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image
  rotateGallery();
});

prevButton.addEventListener('click', () => {
  stopAutoRotate(); // Stop auto-rotation on manual interaction
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
  rotateGallery();
});

// Initial setup and start auto-rotation
rotateGallery();
startAutoRotate();



