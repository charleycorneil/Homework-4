// function initListeners() {
//   console.log("Listen");

//   $("#open").on("click", (e) => {
//     console.log("open");
//     login("Please Login");
//   });

//   $(".close-modal").on("click", (e) => {
//     console.log("click modal");
//     $(".modal").css("display", "none");
//   });
// }

// function login(feedbackText) {
//   $(".feedback").html(feedbackText);
//   $(".modal").css("display", "flex");
// }

// $(window).on("load", function () {
//   //   console.log("Loaded");
//   $(".modal").css("display", "none");
// });

// $(document).ready(function () {
//   initListeners();
// });

$(document).ready(function () {
  initListeners(); // Initialize listeners only
});

function initListeners() {
  // Open initial login modal only on clicking the "Login" button
  $("#open").on("click", () => {
    showPopup("loginPopup");
  });

  // Open secondary login form modal when "LOGIN" button inside initial modal is clicked
  $("#openLoginForm").on("click", () => {
    closePopup("loginPopup"); // Close the initial login popup
    showPopup("loginFormPopup");
  });

  // Close modals when any element with 'close-modal' class is clicked
  $(".close-modal").on("click", () => {
    $(".modal").css("display", "none");
  });
}

// Function to show a specific pop-up
function showPopup(popupId) {
  $("#" + popupId).css("display", "flex");
}

// Function to close a specific pop-up
function closePopup(popupId) {
  $("#" + popupId).css("display", "none");
}
