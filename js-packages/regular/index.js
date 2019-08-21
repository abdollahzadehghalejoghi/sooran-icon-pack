(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : factory((global["regular"] = {}));
})(this, function(exports) {
  "use strict";

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

  var sCirclePlus = {
    prefix: "far",
    iconName: "circle-plus",
    icon: [512, 512, [], "e922","M361.49,255.17a21.27,21.27,0,0,1-21.27,21.26H276.43v63.79a21.27,21.27,0,1,1-42.53,0V276.43H170.11a21.27,21.27,0,0,1,0-42.53H233.9V170.11a21.27,21.27,0,0,1,42.53,0V233.9h63.79A21.28,21.28,0,0,1,361.49,255.17Zm148.85,0c0,140.7-114.48,255.17-255.17,255.17S0,395.87,0,255.17,114.46,0,255.17,0,510.34,114.47,510.34,255.17Zm-42.53,0c0-117.25-95.39-212.64-212.64-212.64S42.53,137.92,42.53,255.17s95.39,212.64,212.64,212.64S467.81,372.42,467.81,255.17Z"]
  }

  var sDownload = {
    prefix: "far",
    iconName: "download",
    icon: [512, 512, [], "e930", "M29,462L29,462c0-7.2,6.1-13,13.6-13h435.9c7.5,0,13.6,5.8,13.6,13v1.1c0,7.2-6.1,13-13.6,13c-67.7-0.2-368.1-1.2-435.8-1.1 C35.1,474.9,29,469.1,29,462z M253.2,20.5c0.1,62.1-0.8,337.9-1,400c0,6.9,5.3,12.5,11.9,12.5h1c6.6,0,11.9-5.6,11.9-12.5V20.5 c0-6.9-5.3-12.5-11.9-12.5l0,0C258.5,8,253.2,13.6,253.2,20.5z M119.4,294.1c33.6,33.2,146.1,146.4,146.1,146.4l146.3-146.3 c5.1-5.1,5.1-13.3,0-18.3l-0.7-0.7c-5.1-5.1-13.3-5.1-18.3,0L274.2,393.8c-5.1,5.1-13.3,5.1-18.3,0L137.7,275.7 c-5.1-5.1-13.3-5.1-18.3,0l0,0C114.2,280.8,114.3,289,119.4,294.1z"]
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
    sDownload: sDownload,
  };

  exports.far = _iconsCache;
  exports.prefix = prefix;
  exports.sHistory = sHistory;
  exports.sSquare = sSquare;
  exports.sCircle = sCircle;
  exports.sCirclePlus = sCirclePlus;
  exports.sDownload = sDownload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});
