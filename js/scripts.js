
  // header location and courses
  const locationTrigger = document.querySelector(".location-dropdown-trigger");
  const locationContainer = document.querySelector(".location-dropdown-inner");
  const coursesTrigger = document.querySelector(".courses-dropdown-trigger");
  const coursesContainer = document.querySelector(".courses-dropdown-inner");

  // header location active
  locationTrigger.addEventListener("click", function () {
    this.classList.add("active");
    locationContainer.classList.add("active");
  });
  window.addEventListener("mouseup", function (e) {
    if(locationContainer !== e.target && !locationContainer.contains(e.target)){
        locationTrigger.classList.remove("active");
        locationContainer.classList.remove("active");
    }
  });

  // header courses active
  coursesTrigger.addEventListener("click", function () {
    this.classList.toggle("active");
    coursesContainer.classList.toggle("active");
  });
  window.addEventListener("mouseup", function (e) {
    console.log(e.target)
    if(coursesContainer !== e.target && !coursesContainer.contains(e.target)){
      coursesTrigger.classList.remove("active");
      coursesContainer.classList.remove("active");
    }
  });

  // header tabs
  function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("header-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("header-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();