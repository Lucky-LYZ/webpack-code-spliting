(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(4);
            var content = __webpack_require__(11);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".album {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.photo {\r\n  width: 250px;\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.photo img {\r\n  width: 200px;\r\n}\r\n\r\n.photo h3 {\r\n  padding: 0 10px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  font-size: 20px;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_album_css__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const album = document.createElement('div')
  album.className = 'album'

  album.innerHTML = '<h2>Albums</h2>'

  Object(_common_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/photos?albumId=1').then(data => {
    data.forEach(item => {
      const section = document.createElement('section')
      section.className = 'photo'

      const img = document.createElement('img')
      img.src = item.thumbnailUrl
      section.appendChild(img)

      const h3 = document.createElement('h3')
      h3.textContent = item.title
      section.appendChild(h3)

      album.appendChild(section)
    })
  })

  return album
});


/***/ })

}]);