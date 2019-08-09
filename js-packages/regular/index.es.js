var prefix = "far";

var sHistory = {
  prefix: "far",
  iconName: "history",
  icon: [512, 512, [], "e915", "M269.4,31C185.9,31,112,76.3,73.9,145.4L19,90.6v155h155l-66.8-66.8c31-59.6,90.6-100.2,162.2-100.2 c97.8,0,178.9,81.1,178.9,178.9s-81.1,178.9-178.9,178.9c-78.7,0-143.1-50.1-169.3-119.3H50c26.2,95.4,114.5,167,219.4,167 c126.4,0,226.6-102.6,226.6-226.6S393.4,31,269.4,31z M233.6,150.2v121.6l112.1,66.8l19.1-31l-95.4-57.2V150.2H233.6z"]
};

var sSquare = {
  prefix: "far",
  iconName: "square",
  icon: [512, 512, [], "e916", "M438.8,72.2v367.9h-368V72.2H438.8 M493.6,17.4H16V495h477.6V17.4L493.6,17.4z"]
};


var sCircle = {
  prefix: "far",
  iconName: "circle",
  icon: [512, 512, [], "e914", "M261,50.7c54,0,104.8,21,143,59.2s59.2,89,59.2,143s-21,104.8-59.2,143s-89,59.2-143,59.2s-104.8-21-143-59.2 s-59.2-89-59.2-143s21-104.8,59.2-143S207,50.7,261,50.7 M261,14C129,14,22,121,22,253s107,239,239,239s239-107,239-239 S393,14,261,14L261,14z"]
};

/* sample object
var sample = {
  prefix: "far",
  iconName: "sample",
  icon: [512, 512, [], "", "sample"]
};
*/

var _iconsCache = {
  sHistory: sHistory,
  sSquare: sSquare,
  sCircle: sCircle,
};

export { _iconsCache as far, prefix, sHistory,sSquare,sCircle };
