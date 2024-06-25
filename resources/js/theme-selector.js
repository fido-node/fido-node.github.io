// Function to set the theme based on the preferred color scheme
function setPrismTheme() {
  const prismThemeLink = document.getElementById("prism-theme");
  const darkTheme =
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css";
  const lightTheme =
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-solarizedlight.min.css";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    prismThemeLink.href = darkTheme;
  } else {
    prismThemeLink.href = lightTheme;
  }
}

// Initial theme set
setPrismTheme();

// Listen for changes in the preferred color scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setPrismTheme);
