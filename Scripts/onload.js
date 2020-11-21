// Underline current page's nav link
window.addEventListener("load", function() {
  const navLink = document.getElementById(parseFilePathToNavLinkId(window.location.pathname))
  navLink.style.textDecoration = "underline"
  navLink.style.textDecorationColor = "gold"
  navLink.style.textDecorationThickness = "2px"
});

function parseFilePathToNavLinkId(filePath) {
  // On homepage file path is blank
  if (filePath === "/")
    return "home-link"
  return filePath.split(".")[0].slice(1).concat("-link")
}