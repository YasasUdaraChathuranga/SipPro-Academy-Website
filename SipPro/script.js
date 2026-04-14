const visibleCards = window.innerWidth < 768 ? 1 : 3;

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

const links = document.querySelectorAll("#navMenu a");

links.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});


function readMore() {
  var fullText = document.getElementById("full-text");
  var btn = document.getElementById("readBtn");

  if (fullText.style.display === "none") {
    fullText.style.display = "block";
    btn.innerText = "Read Less";
  } else {
    fullText.style.display = "none";
    btn.innerText = "Read More";
  }
}

const track = document.getElementById("noticeTrack");
const cards = document.querySelectorAll(".notice-card");
const dotsContainer = document.getElementById("dots");

let index = 0;
//const visibleCards = 3;
const total = cards.length;

// Create dots
for (let i = 0; i < total - visibleCards + 1; i++) {
  let dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dots span");

// Update slider
function updateSlider() {
  track.style.transform = `translateX(-${index * (100 / visibleCards)}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

// Auto slide (infinite loop)
setInterval(() => {
  index++;
  if (index > total - visibleCards) {
    index = 0; // loop without jump feeling
  }
  updateSlider();
}, 3000);







function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".gallery-filters button");

  // Button active state
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else {
      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}

