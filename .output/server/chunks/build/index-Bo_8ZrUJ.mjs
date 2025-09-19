const keyConvert = (e) => {
  const characters = {
    "\u0131": "i",
    "\u0130": "i",
    "\u015F": "s",
    "\u015E": "s",
    "\u011F": "g",
    "\u011E": "g",
    "\xFC": "u",
    "\xDC": "u",
    "\xF6": "o",
    "\xD6": "o",
    "\xE7": "c",
    "\xC7": "c",
    " ": "-",
    "_": "-",
    ",": "",
    ".": "",
    ";": "",
    ":": "",
    "!": "",
    "?": "",
    '"': "",
    "'": "",
    "<": "",
    ">": "",
    "|": "",
    "+": "",
    "=": "",
    "&": "",
    "@": "",
    "#": "",
    "$": "",
    "%": "",
    "^": "",
    "*": "",
    "(": "",
    ")": "",
    "[": "",
    "]": "",
    "{": "",
    "}": "",
    "~": "",
    "`": "",
    "\\": "",
    "/": ""
  };
  function ilkHarfiBuyut(metin) {
    return metin.charAt(0).toUpperCase() + metin.slice(1);
  }
  return ilkHarfiBuyut(e.toString().toLowerCase().replace(/[^\w\s]/g, (char) => characters[char] || "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, ""));
};

export { keyConvert as k };
//# sourceMappingURL=index-Bo_8ZrUJ.mjs.map
