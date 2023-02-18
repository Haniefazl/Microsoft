'use strict';

const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownDesktop = document.querySelector('.dropdown-container');

const hamburger = document.querySelector('.hamburger');
const dropdownMobile = document.querySelector('.dropdown-mobile');

const sublists = document.querySelectorAll('.sublist');
const sublistBtns = document.querySelectorAll('.sublist-btn');

const showDropdown = (el) => {
    el.classList.toggle('show');
};

dropdownBtn.addEventListener('click', () => {
    showDropdown(dropdownDesktop);
    showDropdown(dropdownBtn);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    showDropdown(dropdownMobile);
});

for (let i = 0; i < sublistBtns.length; i++) {
    sublistBtns[i].addEventListener('click', () => {
        sublistBtns[i].classList.toggle('rotate');
        showDropdown(sublists[i]);
    });
}

$(document).ready(function() {
    $($(".searching")).click(function() {
        $(".nav").addClass("hide");
    });
});
$(document).ready(function() {
    $($(".searching")).click(function() {
        $("#search").removeClass("hide");
    });
});
$(document).ready(function() {
    $($(".searching")).click(function() {
        $("#search2").removeClass("hide");
    });
});
$(document).ready(function() {
    $($(".button1")).click(function() {
        $("#search").addClass("hide");
    });
});
$(document).ready(function() {
    $($(".button1")).click(function() {
        $("#search2").addClass("hide");
    });
});
$(document).ready(function() {
    $($(".button1")).click(function() {
        $(".nav").removeClass("hide");
    });
});
$(document).ready(function() {
    $($(".searching")).click(function() {
        $(".search-icon").addClass("hide");
    });
});
$(document).ready(function() {
    $($(".button1")).click(function() {
        $(".search-icon").removeClass("hide");
    });
});