for (const brMenu of window.document.querySelectorAll(".br-menu")) {
  new core.BRMenu("br-menu", brMenu);
}

for (const brHeader of window.document.querySelectorAll(".br-header")) {
  new core.BRHeader("br-header", brHeader);
}

for (const brFooter of window.document.querySelectorAll(".br-footer")) {
  new core.BRFooter("br-footer", brFooter);
}
