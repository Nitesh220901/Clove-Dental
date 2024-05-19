const toggleNav = () => {
    menu = document.getElementById("btn-nav-toggle")
    sideNav = document.getElementById("side-nav")
    sideNavCloser = document.getElementById("side-nav-closer")

    sideNav.classList.toggle("translate-side-nav")
    sideNavCloser.classList.toggle("d-none")

    // Hamburger (Menu) - animation code
    menu.children[0].classList.toggle("rotate-45")
    menu.children[0].classList.toggle("top-2")
    menu.children[1].classList.toggle("rotate-135")
    menu.children[2].classList.toggle("opacity-0")
    menu.children[2].classList.toggle("rotate-45")
}

const toggleTreatmentsModal = () => {
    treatModal = document.getElementById("treatments-modal")
    treatModalCloser = document.getElementById("treatments-modal-closer")
    treatModal.classList.toggle("d-none")
    setTimeout(() => {
        treatModal.classList.toggle("opacity-0")
    }, 50);
    treatModalCloser.classList.toggle("d-none")
}

const toggleBookModal = () => {
    bookModalContainer = document.getElementById("book-modal-container")
    bookModalCloser = document.getElementById("book-modal-closer")

    bookModalContainer.classList.toggle("d-none")
    bookModalCloser.classList.toggle("d-none")
    setTimeout(() => {
        bookModalContainer.classList.toggle("opacity-0")
        bookModalCloser.classList.toggle("opacity-0")
    }, 50);
}

const toggleHelpModal = () => {
    helpModal = document.getElementById("help-modal")
    helpModalCloser = document.getElementById("help-modal-closer")

    helpModal.classList.toggle("d-none")
    helpModalCloser.classList.toggle("d-none")
    setTimeout(() => {
        helpModal.classList.toggle("opacity-0")
    }, 50);
}

const toggleSelectCity = () => {
    options = document.querySelector(".options")
    optionsCloser = document.querySelector(".options-closer")
    options.classList.toggle("d-none")
    optionsCloser.classList.toggle("d-none")
    setTimeout(() => {
        options.classList.toggle("opacity-0")
    }, 50);
}

const toggleSelectConcern = () => {
    concerns = document.getElementById("concerns")
    concernsCloser = document.getElementById("concerns-closer")
    concerns.classList.toggle("d-none")
    concernsCloser.classList.toggle("d-none")
    setTimeout(() => {
        concerns.classList.toggle("opacity-0")
    }, 50);
}

const selectCity = (p) => {
    let value = p.innerHTML
    document.getElementById("selected-city").innerHTML = value;
    document.getElementById("selected-city").style.color = "black";
}

const selectConcern = (p) => {
    let value = p.innerHTML
    document.getElementById("selected-concern").innerHTML = value;
    document.getElementById("selected-concern").style.color = "black";
}


// To scroll words section

var scrollableDiv = document.getElementById("word-slider");

scrollableDiv.addEventListener("mousedown", function(event) {
    var startX = event.pageX;
    var scrollLeft = this.scrollLeft;

    function scrollOnMove(event) {
        var x = event.pageX;
        var moveX = x - startX;
        scrollableDiv.scrollLeft = scrollLeft - moveX;
    }

    function stopScrolling() {
        scrollableDiv.removeEventListener("mousemove", scrollOnMove);
        document.removeEventListener("mouseup", stopScrolling);
    }

    scrollableDiv.addEventListener("mousemove", scrollOnMove);
    document.addEventListener("mouseup", stopScrolling);
});

// For touch devices
scrollableDiv.addEventListener("touchstart", function(event) {
    var startX = event.touches[0].pageX;
    var scrollLeft = this.scrollLeft;

    function scrollOnMove(event) {
        var x = event.touches[0].pageX;
        var moveX = x - startX;
        scrollableDiv.scrollLeft = scrollLeft - moveX;
    }

    function stopScrolling() {
        scrollableDiv.removeEventListener("touchmove", scrollOnMove);
        document.removeEventListener("touchend", stopScrolling);
    }

    scrollableDiv.addEventListener("touchmove", scrollOnMove);
    document.addEventListener("touchend", stopScrolling);
});

// To scroll specialists

var specialistDiv = document.getElementById("special-slide");

specialistDiv.addEventListener("mousedown", function(event) {
    var startX = event.pageX;
    var scrollLeft = this.scrollLeft;

    function scrollOnMove(event) {
        var x = event.pageX;
        var moveX = x - startX;
        specialistDiv.scrollLeft = scrollLeft - moveX;
    }

    function stopScrolling() {
        specialistDiv.removeEventListener("mousemove", scrollOnMove);
        document.removeEventListener("mouseup", stopScrolling);
    }

    specialistDiv.addEventListener("mousemove", scrollOnMove);
    document.addEventListener("mouseup", stopScrolling);
});

// For touch devices
specialistDiv.addEventListener("touchstart", function(event) {
    var startX = event.touches[0].pageX;
    var scrollLeft = this.scrollLeft;

    function scrollOnMove(event) {
        var x = event.touches[0].pageX;
        var moveX = x - startX;
        specialistDiv.scrollLeft = scrollLeft - moveX;
    }

    function stopScrolling() {
        specialistDiv.removeEventListener("touchmove", scrollOnMove);
        document.removeEventListener("touchend", stopScrolling);
    }

    specialistDiv.addEventListener("touchmove", scrollOnMove);
    document.addEventListener("touchend", stopScrolling);
});


// To scroll image slider

var imgDiv = document.getElementById("img-slider");

imgDiv.addEventListener("mousedown", function(event) {
    var startX = event.pageX;
    var scrollLeft = this.scrollLeft;

    function scrollOnMove(event) {
        var x = event.pageX;
        var moveX = x - startX;
        imgDiv.scrollLeft = scrollLeft - moveX;
    }

    function stopScrolling() {
        imgDiv.removeEventListener("mousemove", scrollOnMove);
        document.removeEventListener("mouseup", stopScrolling);
    }

    imgDiv.addEventListener("mousemove", scrollOnMove);
    document.addEventListener("mouseup", stopScrolling);
});

// For touch devices
imgDiv.addEventListener("touchstart", function(event) {
    var startX = event.touches[0].pageX;
    var scrollLeft = this.scrollLeft;

    function scrollOnMove(event) {
        var x = event.touches[0].pageX;
        var moveX = x - startX;
        imgDiv.scrollLeft = scrollLeft - moveX;
    }

    function stopScrolling() {
        imgDiv.removeEventListener("touchmove", scrollOnMove);
        document.removeEventListener("touchend", stopScrolling);
    }

    imgDiv.addEventListener("touchmove", scrollOnMove);
    document.addEventListener("touchend", stopScrolling);
});