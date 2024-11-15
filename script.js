document.addEventListener("DOMContentLoaded", function () {
  // Function to show dropdown on hover for desktop
  function handleHover() {
    let dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        if (window.innerWidth >= 992) {
          this.querySelector(".dropdown-menu").style.display = "block";
        }
      });
      dropdown.addEventListener("mouseleave", function () {
        if (window.innerWidth >= 992) {
          this.querySelector(".dropdown-menu").style.display = "none";
        }
      });
    });
  }

  // Function to handle click for mobile
  function handleClick() {
    let dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        let dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display =
          dropdownMenu.style.display === "block" ? "none" : "block";
      }
    });
  }

  handleHover();
  handleClick();

  // Handle window resize
  window.addEventListener("resize", function () {
    let dropdownMenus = document.querySelectorAll(".dropdown-menu");
    if (window.innerWidth >= 992) {
      dropdownMenus.forEach(function (menu) {
        menu.style.display = "";
      });
    } else {
      dropdownMenus.forEach(function (menu) {
        menu.style.display = "none";
      });
    }
  });
});
