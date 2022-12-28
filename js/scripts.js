// fade animation
// var text = document.getElementById("fade-text"),
//   fadeBtn = document.getElementById("fade");

// fadeBtn.onclick = function () {
//   if (!text.hasAttribute("class") || text.classList.contains("fadeOut")) {
//     text.removeAttribute("class", "fadeOut");
//     text.setAttribute("class", "fadeIn");
//   } else if (text.classList.contains("fadeIn")) {
//     text.classList.remove("fadeIn");
//     text.classList.add("fadeOut");
//   }
// };

// header location and courses
const locationTrigger = document.querySelector(".location-dropdown-trigger");
const locationContainer = document.querySelector(".location-dropdown-inner");
const locationClose = document.querySelector(".location-dropdown-close");
const coursesTrigger = document.querySelector(".courses-dropdown-trigger");
const coursesContainer = document.querySelector(".courses-dropdown-inner");
const coursesClose = document.querySelector(".courses-dropdown-close");

// header location active
locationTrigger.addEventListener("click", function () {
  this.classList.toggle("active");
  locationContainer.classList.toggle("active");
});
locationClose.addEventListener("click", function () {
  locationTrigger.classList.toggle("active");
  locationContainer.classList.remove("active");
});
window.addEventListener("mouseup", function (e) {
  if (locationContainer !== e.target && !locationContainer.contains(e.target)) {
    locationTrigger.classList.remove("active");
    locationContainer.classList.remove("active");
  }
});

// header courses active
coursesTrigger.addEventListener("click", function () {
  this.classList.toggle("active");
  coursesContainer.classList.toggle("active");
});
coursesClose.addEventListener("click", function () {
  coursesTrigger.classList.toggle("active");
  coursesContainer.classList.remove("active");
});
window.addEventListener("mouseup", function (e) {
  if (coursesContainer !== e.target && !coursesContainer.contains(e.target)) {
    coursesTrigger.classList.remove("active");
    coursesContainer.classList.remove("active");
  }
});

// header academy choice
const academyContainer = document.querySelector(".academy-dropdown");
const academyItems = document.querySelectorAll(".academy-dropdown-item");
const academyItemChosen = document.querySelector(".academy-dropdown-item-chosen");
window.addEventListener("click", function (e) {
  if (academyContainer.contains(e.target)) {
    academyContainer.classList.toggle("is-open");
  } else {
    academyContainer.classList.remove("is-open");
  }
});
academyItems.forEach((academyItem) => {
  academyItem.addEventListener("click", () => {
    academyContainer.classList.add("is-open");
    academyItems.forEach(function (el) {
      el.classList.remove("active");
    });
    academyItem.classList.add("active");
    let academyItemText = academyItem.textContent;
    academyItemChosen.textContent = academyItemText;
  });
});

// adding choice to body
document.querySelector(".academy-dropdown-item-offline").addEventListener("click", function () {
  document.body.classList.add("offline");
  document.body.classList.remove("online");
  document.body.classList.remove("kids");
});
document.querySelector(".academy-dropdown-item-online").addEventListener("click", function () {
  document.body.classList.add("online");
  document.body.classList.remove("offline");
  document.body.classList.remove("kids");
});
document.querySelector(".academy-dropdown-item-kids").addEventListener("click", function () {
  document.body.classList.add("kids");
  document.body.classList.remove("online");
  document.body.classList.remove("offline");
});

// header tabs
function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("header-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("header-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// show more success items
const showMoreBtn = document.querySelector(".btn-load-more-success");

showMoreBtn?.addEventListener("click", () => {
  let hiddenElements = document.querySelectorAll(".success-item.d-none");
  let successList = Array.prototype.slice.call(hiddenElements).slice(0, 3);
  successList.forEach((item, index) => {
    item.className = "success-item";
    if (index === 0) {
      item.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
  if (hiddenElements.length === successList.length) {
    showMoreBtn.className = "d-none";
  }
});