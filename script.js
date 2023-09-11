var username = document.getElementById("username");
var generateBtn = document.getElementById("generateBtn");
var generated = document.getElementById("generated");

generateBtn.onclick = function () {
  if (username.value !== "") {
    for (let index = 0; index < 12; index++) {
      var icons = [
        "fa-solid fa-database",
        "fa-solid fa-server",
        "fa-solid fa-code",
        "fa-solid fa-file-code",
        "fa-solid fa-terminal",
        "fa-regular fa-keyboard",
        "fa-solid fa-keyboard",
        "fa-solid fa-bars",
        "fa-solid fa-microchip",
        "fa-solid fa-circle-nodes",
        "fa-solid fa-cloud",
        "fa-solid fa-pen",
        "fa-solid fa-gear",
        "fa-solid fa-headphones",
        "fa-solid fa-barcode",
        "fa-solid fa-bookmark",
        "fa-solid fa-video",
        "fa-solid fa-language",
        "fa-solid fa-crown",
        "fa-solid fa-dumbbell",
        "bx bx-bar-chart-alt-2",
        "bx bx-doughnut-chart",
        "bx bx-line-chart",
        "bx bx-pie-chart-alt-2",
        "bx bx-terminal",
        "bx bx-bracket",
      ];
      var gradients = [
        "linear-gradient(90deg, rgba(128,128,218,1) 38%, rgba(0,212,255,1) 100%)",
        "linear-gradient(90deg, rgba(5,5,112,1) 38%, rgba(60,74,77,1) 100%)",
        "linear-gradient(90deg, rgba(49,49,110,1) 12%, rgba(8,102,46,1) 100%)",
        "linear-gradient(90deg, #FFD3A5 38%, #FD6585 100%);",
        "linear-gradient(90deg, #0F3443 38%, #34E89E 100%);",
        "linear-gradient(90deg, #12C2E9 38%, #F64F59 100%);",
        "linear-gradient(90deg, #FCCF31 38%, #F55555 100%);",
        "linear-gradient(90deg, #7F7FD5 38%, #91EAE4 100%);",
        "linear-gradient(90deg, #3E5151 38%, #DECBA4 100%);",
        "linear-gradient(90deg, #333399 38%, #FF00CC 100%);",
        "linear-gradient(90deg, #31B7C2 38%, #7BC393 100%);",
        "linear-gradient(to right, #2c3e50, #4ca1af)",
        "linear-gradient(to right, #e96443, #904e95)",
        "linear-gradient(to right, #0b486b, #f56217)",
        "linear-gradient(to right, #3a7bd5, #3a6073)",
        "linear-gradient(to right, #2196f3, #f44336)",
        "linear-gradient(to right, #16bffd, #cb3066)",
        "linear-gradient(to right, #1d4350, #a43931)",
        "linear-gradient(to right, #000000, #434343)",
        "linear-gradient(to right, #4b79a1, #283e51)",
        "linear-gradient(to right, #2980b9, #2c3e50)",
        "linear-gradient(to right, #1e3c72, #2a5298)",
        "linear-gradient(to right, #114357, #f29492)",
      ];

      var fontColor = [
        "#FF5733",
        "#8A2BE2",
        "#32CD32",
        "#00FFFF",
        "#FF1493",
        "#1E90FF",
        "#FFD700",
        "#ADFF2F",
        "#D2691E",
        "#7FFF00",
        "#9932CC",
        "#BDB76B",
        "#FFFACD",
        "#87CEEB",
        "#F0E68C",
        "#AFEEEE",
        "#FFD700",
        "#D2691E",
        "#7FFF00",
        "#9932CC",
        "#BDB76B",
        "#FFFACD",
        "#87CEEB",
        "#F0E68C",
        "#AFEEEE",
        "#9370DB",
        "#7B68EE",
        "#00FA9A",
        "#191970",
        "#8B4513",
        "#DAA520",
        "#00CED1",
        "#4682B4",
        "#2E8B57",
        "#008080",
        "#BC8F8F",
        "#D2B48C",
        "#8B008B",
        "#556B2F",
        "#FF8C00",
        "#FFD700",
        "#D2691E",
        "#7FFF00",
        "#9932CC",
        "#BDB76B",
        "#FFFACD",
        "#87CEEB",
        "#F0E68C",
        "#AFEEEE",
        "#9370DB",
        "#7B68EE",
        "#00FA9A",
        "#191970",
        "#8B4513",
        "#DAA520",
        "#00CED1",
        "#4682B4",
        "#2E8B57",
        "#008080",
        "#BC8F8F",
        "#D2B48C",
        "#8B008B",
        "#556B2F",
        "#FF8C00",
        "#FFD700",
        "#D2691E",
        "#7FFF00",
        "#9932CC",
        "#BDB76B",
        "#FFFACD",
        "#87CEEB",
        "#F0E68C",
        "#AFEEEE",
        "#9370DB",
        "#7B68EE",
        "#00FA9A",
        "#191970",
        "#8B4513",
        "#DAA520",
        "#00CED1",
        "#4682B4",
        "#2E8B57",
        "#008080",
        "#BC8F8F",
        "#D2B48C",
        "#8B008B",
        "#556B2F",
        "#FF8C00",
      ];

      var fontName = [
        "Open Sans",
        "Lato",
        "Roboto",
        "Montserrat",
        "Raleway",
        "Poppins",
        "Merriweather",
        "Nunito",
        "Ubuntu",
        "Playfair Display",
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        "Roboto Condensed",
        "Oswald",
        "Dancing Script",
        "Pacifico",
        "Quicksand",
        "Courgette",
        "Josefin Sans",
        "Kaushan Script",
        "Russo One",
        "Zilla Slab",
      ];

      var iconColor = [
        "#FF5733",
        "#8A2BE2",
        "#32CD32",
        "#00FFFF",
        "#FF1493",
        "#1E90FF",
        "#FFD700",
        "#ADFF2F",
        "#D2691E",
        "#7FFF00",
        "#9932CC",
        "#BDB76B",
        "#FFFACD",
        "#87CEEB",
        "#F0E68C",
        "#AFEEEE",
        "#FFD700",
        "#D2691E",
        "#7FFF00",
        "#9932CC",
        "#BDB76B",
        "#FFFACD",
        "#87CEEB",
        "#F0E68C",
        "#AFEEEE",
        "#9370DB",
        "#7B68EE",
        "#00FA9A",
        "#191970",
        "#8B4513",
        "#DAA520",
        "#00CED1",
        "#4682B4",
        "#2E8B57",
        "#008080",
        "#BC8F8F",
        "#D2B48C",
        "#8B008B",
        "#556B2F",
        "#FF8C00",
        "#FFD700",
        "#D2691E",
        "#7FFF00",
        "#9932CC",
        "#BDB76B",
        "#FFFACD",
        "#87CEEB",
        "#F0E68C",
        "#AFEEEE",
        "#9370DB",
        "#7B68EE",
        "#00FA9A",
        "#191970",
        "#8B4513",
        "#DAA520",
        "#00CED1",
        "#4682B4",
        "#2E8B57",
        "#008080",
        "#BC8F8F",
        "#D2B48C",
        "#8B008B",
        "#556B2F",
        "#FF8C00",
        "#FFD700",
        "#D2691E",
        "#7FFF00",
        "#9932CC",
        "#BDB76B",
        "#FFFACD",
        "#87CEEB",
        "#F0E68C",
        "#AFEEEE",
        "#9370DB",
        "#7B68EE",
        "#00FA9A",
        "#191970",
        "#8B4513",
        "#DAA520",
        "#00CED1",
        "#4682B4",
        "#2E8B57",
        "#008080",
        "#BC8F8F",
        "#D2B48C",
        "#8B008B",
        "#556B2F",
        "#FF8C00",
      ];

      var logoStyle = ["logoColmn", "logo"];

      const iconRandom = Math.floor(Math.random() * icons.length);
      const iconColorRandom = Math.floor(Math.random() * iconColor.length);
      const gradientRandom = Math.floor(Math.random() * gradients.length);
      const fontColorRandom = Math.floor(Math.random() * fontColor.length);
      const fontNameRandom = Math.floor(Math.random() * fontName.length);
      const logoStyles = Math.floor(Math.random() * logoStyle.length);

      var div = document.createElement("div");
      var i = document.createElement("i");
      var h1 = document.createElement("h1");

      div.setAttribute("class", logoStyle[logoStyles]);
      div.setAttribute("id", `logo`);
      div.setAttribute("onclick", "download()");
      div.style.background = gradients[gradientRandom];
      i.setAttribute("class", `${icons[iconRandom]}`);
      i.style.color = iconColor[iconColorRandom];
      h1.style.color = fontColor[fontColorRandom];
      h1.innerText = username.value;
      h1.style.fontFamily = fontName[fontNameRandom];

      div.appendChild(i);
      div.appendChild(h1);

      generated.appendChild(div);
    }
  }
};
// html2canvas(div).then(canvas => {
//     generated.appendChild(canvas);
//     canvas.setAttribute('class', 'canvas');
// });

function download() {
  var logo = document.getElementById("logo");

  html2canvas(logo).then((canvas) => {
    const base64img = canvas.toDataURL("image/png");
    var anchor = document.createElement("a");
    anchor.setAttribute("href", base64img);
    anchor.setAttribute("download", "logo.png");
    anchor.click();
    anchor.remove();
  });
}
