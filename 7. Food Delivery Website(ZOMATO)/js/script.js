// document.addEventListener("DOMContentLoaded", () => {
//   const inputField = document.querySelector("input");

//   // Add focus effect to search bar
//   inputField.addEventListener("focus", () => {
//     inputField.style.boxShadow = "0 0 10px rgba(216, 35, 42, 0.5)";
//   });

//   inputField.addEventListener("blur", () => {
//     inputField.style.boxShadow = "none";
//   });

//   // Smooth scrolling for header links
//   document.querySelectorAll("ul li a").forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       alert(`Navigating to ${link.textContent}`);
//     });
//   });

//   // Add hover effect to food items
//   document.querySelectorAll(".food-item").forEach((item) => {
//     item.addEventListener("mouseenter", () => {
//       item.style.transform = "scale(1.1)";
//       item.style.transition = "0.3s ease-in-out";
//     });

//     item.addEventListener("mouseleave", () => {
//       item.style.transform = "scale(1)";
//     });
//   });
// });
