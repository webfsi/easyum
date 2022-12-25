document.addEventListener("DOMContentLoaded", function () {
  // header location and courses
  const locationTrigger = document.querySelector(".location-dropdown-trigger");
  const locationContainer = document.querySelector(".location-dropdown-inner");
  const coursesTrigger = document.querySelector(".courses-dropdown-trigger");
  const coursesContainer = document.querySelector(".courses-dropdown");

  // header location active
  locationTrigger.addEventListener("click", function () {
    this.classList.add("active");
    locationContainer.classList.add("active");
  });
  window.addEventListener("mouseup", function (e) {
    if(e.target != locationContainer && e.target.parentNode != locationContainer){
        locationTrigger.classList.remove("active");
        locationContainer.classList.remove("active");
    }
  });

  // header courses active
  coursesTrigger.addEventListener("click", function () {
    this.classList.toggle("active");
    coursesContainer.classList.toggle("active");
  });
});
