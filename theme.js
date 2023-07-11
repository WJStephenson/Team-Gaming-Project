const button = document.getElementById("theme-button");
const lightModeIcon = `<i class="fa-regular fa-sun"></i>`;
const darkModeIcon = `<i class="fa-regular fa-moon"></i>`;
const darkColors = [`#ff8a00`, `#fff`, `#13071c`, `#1a0725`];
const lightColors = [`#ff8a00`, `#fff`, `#fff`, `#E6E6E6`];
const colorVariables = [
  `--primary-text`,
  `--secondary-text`,
  `--primary-bg`,
  `--secondary-bg`,
];

// Event Listeners
button.addEventListener("click", () => {
  setTheme();
});

// Detects if the user has set a preference for dark mode or light mode previously in this session
window.addEventListener("load", () => {
  let mode = sessionStorage.getItem("mode");
  if (mode === null) {
    mode = "dark";
    setDarkMode();
  } else if (mode === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
});

// Functions

// Sets the theme based on the user's preference
function setTheme() {
  let mode = sessionStorage.getItem("mode");
  if (mode === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

// Sets the theme to dark mode
function setDarkMode() {
  sessionStorage.setItem("mode", "dark");
  button.innerHTML = darkModeIcon;
  for (let i = 0; i < darkColors.length; i++) {
    setStyleProperty(colorVariables[i], darkColors[i]);
  }
}

// Sets the theme to light mode
function setLightMode() {
  sessionStorage.setItem("mode", "light");
  button.innerHTML = lightModeIcon;
  for (let i = 0; i < lightColors.length; i++) {
    setStyleProperty(colorVariables[i], lightColors[i]);
  }
}

// Sets the CSS variable to the color passed in
function setStyleProperty(property, color) {
  document.documentElement.style.setProperty(property, color);
}
