hljs.highlightAll(); // Initialize highlight.js

// Function to set the theme based on the preferred color scheme
function setHighlightTheme() {
  const highlightThemeLink = document.getElementById("highlight-theme");
  const darkTheme =
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/solarized-dark.min.css";
  const lightTheme =
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/solarized-light.min.css";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    highlightThemeLink.href = darkTheme;
  } else {
    highlightThemeLink.href = lightTheme;
  }
}

// Initial theme set
setHighlightTheme();

// Listen for changes in the preferred color scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setHighlightTheme);
