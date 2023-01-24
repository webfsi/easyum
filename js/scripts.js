// header location and courses
const locationTrigger = document.querySelector(".location-dropdown-trigger");
const locationContainer = document.querySelector(".location-dropdown-inner");
const locationClose = document.querySelector(".location-dropdown-close");
const coursesTrigger = document.querySelector(".courses-dropdown-trigger");
const coursesContainer = document.querySelector(".courses-dropdown-inner");
const coursesClose = document.querySelector(".courses-dropdown-close");

// header location active
locationTrigger.addEventListener("click", function () {
  if (locationTrigger.classList.contains("active")) {
    this.classList.remove("active");
    locationContainer.classList.remove("active");
  } else {
    this.classList.add("active");
    locationContainer.classList.add("active");
  }
});
locationClose.addEventListener("click", function () {
  locationTrigger.classList.remove("active");
  locationContainer.classList.remove("active");
});
window.addEventListener("mouseup", function (e) {
  if (locationTrigger !== e.target && locationContainer !== e.target && !locationContainer.contains(e.target)) {
    locationTrigger.classList.remove("active");
    locationContainer.classList.remove("active");
  }
});

// header courses active
coursesTrigger.addEventListener("click", function () {
  if (coursesTrigger.classList.contains("active")) {
    this.classList.remove("active");
    coursesContainer.classList.remove("active");
  } else {
    this.classList.add("active");
    coursesContainer.classList.add("active");
  }
});
coursesClose.addEventListener("click", function () {
  coursesTrigger.classList.remove("active");
  coursesContainer.classList.remove("active");
});
window.addEventListener("mouseup", function (e) {
  if (coursesTrigger !== e.target && coursesContainer !== e.target && !coursesContainer.contains(e.target)) {
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
const showMoreSuccessBtn = document.querySelector(".btn-load-more-success");
showMoreSuccessBtn?.addEventListener("click", () => {
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
    showMoreSuccessBtn.className = "d-none";
  }
});

// show more review videos
const showMoreReviewBtn = document.querySelector(".btn-load-more-review");
showMoreReviewBtn?.addEventListener("click", () => {
  let hiddenElements = document.querySelectorAll(".review-video-item.d-none");
  let successList = Array.prototype.slice.call(hiddenElements).slice(0, 3);
  successList.forEach((item, index) => {
    item.className = "review-video-item";
    if (index === 0) {
      item.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
  if (hiddenElements.length === successList.length) {
    showMoreReviewBtn.className = "d-none";
  }
});

// show more webinar videos
const webinarVideo = document.querySelectorAll(".webinar-video-item");
const showMoreWebinarBtn = document.querySelector(".btn-load-more-webinar");
showMoreWebinarBtn?.addEventListener("click", () => {
  let hiddenElements = document.querySelectorAll(".webinar-video-item.d-none");
  let successList = Array.prototype.slice.call(hiddenElements).slice(0, 3);
  successList.forEach((item, index) => {
    item.className = "webinar-video-item";
    if (index === 0) {
      item.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
  if (hiddenElements.length === successList.length) {
    showMoreWebinarBtn.className = "d-none";
  }
});

// show more lesson videos
const showMoreLessonBtn = document.querySelector(".btn-load-more-lesson");
showMoreLessonBtn?.addEventListener("click", () => {
  let hiddenElements = document.querySelectorAll(".lesson-row.d-none");
  let successList = Array.prototype.slice.call(hiddenElements).slice(0, 3);
  successList.forEach((item, index) => {
    item.className = "lesson-row";
    if (index === 0) {
      item.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
  if (hiddenElements.length === successList.length) {
    showMoreLessonBtn.className = "d-none";
  }
});

// slider, reviews
const swiperReviews = new Swiper(".swiper-review", {
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-review-next",
    prevEl: ".swiper-button-review-prev",
  },
});

// lightbox opener
document.addEventListener("DOMContentLoaded", function (event) {
  new VenoBox({
    selector: ".vbox-link",
  });
});

// animations on scroll
let isInViewport = function (elem) {
  let distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
let fadeInUp = document.querySelectorAll(".fadeInUpAnim");
let fadeInLeft = document.querySelectorAll(".fadeInLeftAnim");
window.addEventListener(
  "scroll",
  function (event) {
    // add event on scroll
    fadeInUp.forEach((element) => {
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("animate__fadeInUp");
      }
    });
    fadeInLeft.forEach((element) => {
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("animate__fadeInLeft");
      }
    });
  },
  false
);

// style first word in headings
var domReady = function (callback) {
  document.readyState === "interactive" || document.readyState === "complete"
    ? callback()
    : document.addEventListener("DOMContentLoaded", callback);
};

// on document ready https://codepen.io/NickMcBurney/pen/wGgqNY
domReady(function () {
  // run firstWord function
  firstWord();
});

// function to wrap first word of heading in <span> tags
function firstWord() {
  // get heading elements
  var $headings = document.querySelectorAll(".js-first-word");
  // run through each heading tag and insert spans
  for (var i = 0, len = $headings.length; i < len; i++) {
    console.log($headings[i].children.length);
    // if has child or has class X
    if ($headings[i].children.length < 1 && !$headings[i].classList.contains("no-first-word")) {
      // set new text variable
      var niceText = $headings[i].textContent;
      // set opening / closing spans
      var openSpan = '<span class="first-word">',
        closeSpan = "</span>";

      // make the sentence into an array
      niceText = niceText.split(" ");

      // add open span to the beginning of the array
      niceText.unshift(openSpan);

      // add closing span as the 3rd value in the array
      niceText.splice(2, 0, closeSpan);

      // turn it back into a string
      niceText = niceText.join(" ");

      // append the new HTML to the header
      $headings[i].innerHTML = niceText;
    }
  }
}

// modal
document.addEventListener("click", function (e) {
  let $target = e.target;
  if ($target.closest('[data-toggle="modal"]')) {
    e.preventDefault();
    $target = $target.closest('[data-toggle="modal"]');
    document.querySelector($target.dataset.target).classList.add("modal-show");
    document.body.classList.toggle("no-scroll");
  } else if ($target.dataset.close === "modal") {
    e.preventDefault();
    $target.closest(".modal").classList.remove("modal-show");
    document.body.classList.remove("no-scroll");
  } else {
    if (e.target.classList.contains("modal")) {
      $target.closest(".modal").classList.remove("modal-show");
      document.body.classList.remove("no-scroll");
    }
  }
});
// modal auto open
// setTimeout(function () {
//   document.querySelector(".modal")?.classList.add("modal-show");
//   if (document.body.contains(document.querySelector(".modal"))) {
//     document.body.classList.add("no-scroll");
//   }
// }, 5000);

// modal thanks
const quickModalBtn = document.querySelectorAll(".btn-quick-send");
quickModalBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.closest(".modal-content-form").classList.add("sent");
  });
});

// file upload
const uploadBtn = document.querySelectorAll(".upload-btn");
uploadBtn.forEach((upload) => {
  upload.addEventListener("change", function () {
    let fileChosen = upload.closest(":has(.form-upload-msg)").lastElementChild;
    console.log(fileChosen);
    fileChosen.classList.add("form-upload-msg-filled");
    fileChosen.textContent = this.files[0].name;
  });
});

// select
const select = document.querySelectorAll(".select-btn");
const option = document.querySelectorAll(".select-option");
let index = 1;
select.forEach((a) => {
  a.addEventListener("click", (b) => {
    const next = b.target.nextElementSibling;
    next.classList.toggle("toggle");
    next.style.zIndex = index++;
  });
});
option.forEach((a) => {
  a.addEventListener("click", (b) => {
    b.target.parentElement.classList.remove("toggle");
    const parent = b.target.closest(".select").children[0];
    parent.setAttribute("data-type", b.target.getAttribute("data-type"));
    parent.innerText = b.target.getAttribute("data-type");
  });
});

// filers
const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let selectedFilter = filter.getAttribute("data-filter");
    let itemsToHide = document.querySelectorAll(
      `.filter-list .filter-list-item:not([data-filter='${selectedFilter}'])`
    );
    let itemsToShow = document.querySelectorAll(`.filter-list [data-filter='${selectedFilter}']`);

    if (selectedFilter == "all") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(".filter-list [data-filter]");
    }

    itemsToHide.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hide");
      el.classList.add("show");
    });

    webinarVideo.forEach((el) => {
      el.classList.remove("d-none");
      document.querySelector(".btn-load-more-webinar").classList.add("d-none");
    });
  });
});
filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    filters.forEach(function (element) {
      element.classList.remove("active");
    });
    filter.classList.add("active");
  });
});
