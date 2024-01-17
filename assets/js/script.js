// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () {
    myFunction();
    closeMenuOnScroll(); // Call the function to close menu on scroll
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        navbar.className =
            "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(
            " w3-card w3-animate-top w3-white",
            ""
        );
    }
}

// Function to close menu on scroll
function closeMenuOnScroll() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") !== -1) {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Close menu on small screens when clicked anywhere in the body
document.addEventListener("click", function (event) {
    var x = document.getElementById("navDemo");
    if (
        event.target.closest(".w3-bar") !== null ||
        event.target.closest("#navDemo") !== null
    ) {
        return;
    }
    if (x.className.indexOf("w3-show") !== -1) {
        x.className = x.className.replace(" w3-show", "");
    }
});

// Close menu on small screens when scrolled
window.addEventListener("scroll", function () {
    closeMenuOnScroll();
});

// Code bewlow for LOAD MORE / LEAD LESS button in the "My Work" section
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const imageSection = document.getElementById('imageSection');
    const originalImageCount = 4; // Number of original images to display
    let showingOriginalImages = true;
  
    // Text in these images will directly go onto the website into the Portfolio section above the images
    // url is being used by the 'function loadImages' code below using the textAboveImage.textContent method, and appending it as a <div> & <p> in the HTML code.
    const imageData = [
      { url: './assets/images/FunFoundations.jpg', text: 'Client Website - Fun Foundations', link: 'https://magmillen-dutka.github.io/Fun-Foundations/'},
      { url: './assets/images/clownWebsite.jpg', text: 'Group Project - Clowning About Inc', link:'https://github.com/simonmoore23/clowning-around-entertainment-job-board'},
      // { url: './assets/images/SylvieSewArt.jpg', text: 'Client Website - Sylvie Sew Art', link:'https://sylvie-sew.co.uk/'},
      { url: './assets/images/GPAE.jpg', text: 'Client Website - Gareth Parry Auto Electrics', link:'https://magmillen-dutka.github.io/G-P-A-E/'},
      { url: './assets/images/Weather.jpg', text: 'Mini Project - Weather Forecast App', link: 'https://magmillen-dutka.github.io/weather-forecast-app/'},
      { url: './assets/images/quiz.jpg', text: 'Mini Project - Timed Online Quiz', link:'https://magmillen-dutka.github.io/Timed-Online-Quiz/'},
      { url: './assets/images/readme.jpg', text: 'Mini Project - README Generator', link:'https://github.com/MagMillen-Dutka/README-Generator'},
      { url: './assets/images/contentmanagementsystem.jpg', text: 'Mini Project - Content Management System', link:'https://github.com/MagMillen-Dutka/content-management-system'},
      { url: './assets/images/scheduler.jpg', text: 'Mini Project - Work Scheduler', link:'https://magmillen-dutka.github.io/Work-Scheduler/'},
      
      
      // Add more image URLs here as needed
    ];
  
    function loadImages(numImages) {
        imageSection.innerHTML = '';
      
        for (let i = 0; i < numImages && i < imageData.length; i++) {
          const imageDiv = document.createElement('div');
          imageDiv.classList.add('w3-col', 'm3', 'portfolio-item');
      
          const imageLink = document.createElement('a');
          imageLink.href = imageData[i].link; // Set the link for this specific image
          imageLink.target = '_blank'; // Opens the link in a new tab

          const image = document.createElement('img');
          image.src = imageData[i].url; // Accessing URL from the imageData object
          image.style.width = '100%';
          image.classList.add('w3-hover-opacity');
          image.alt = imageData[i].text; // Accessing text from the imageData object
          image.onclick = function () {
           window.open(imageLink.href, '_blank'); // Open the link when image is clicked
    };
          imageLink.appendChild(image);

          const textAboveImage = document.createElement('p');
          textAboveImage.textContent = imageData[i].text; // Using text from imageData above
          textAboveImage.classList.add('text-above-image');
      
          imageDiv.appendChild(textAboveImage);
          imageDiv.appendChild(imageLink);
          imageSection.appendChild(imageDiv);
        }
      
        updateLoadButton(numImages);
      }
      
  
    function updateLoadButton(numImages) {
      if (showingOriginalImages) {
        loadMoreBtn.innerText = 'SHOW MORE';
      } else {
        loadMoreBtn.innerText = 'SHOW LESS';
      }
    }
  
    loadImages(originalImageCount);
  
    function toggleImages() {
      if (showingOriginalImages) {
        loadImages(imageData.length);
      } else {
        loadImages(originalImageCount);
      }
      showingOriginalImages = !showingOriginalImages;
      updateLoadButton(showingOriginalImages ? originalImageCount : imageData.length);
    }
  
    loadMoreBtn.addEventListener('click', toggleImages);
  });
  