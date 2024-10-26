/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderCards = __webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    url = \"https://students-api.up.railway.app/movies\";\r\n    $.get(url, (data) => {\r\n        renderCards(data);\r\n    });\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("const section = document.getElementById('movies');\r\n\r\n    const renderCards = (data) => {\r\n        data.forEach(movie => {\r\n            const newDivCard = document.createElement('div');\r\n            newDivCard.classList.add('card-movie');\r\n            \r\n        const newLink = document.createElement('a');\r\n        newLink.href = \"#\"\r\n\r\n        const newDivContainer = document.createElement('div');\r\n        newDivContainer.classList.add('image-container')\r\n        const newImg = document.createElement('img');\r\n        newImg.src = movie.poster;\r\n        newImg.classList.add('image-movie')\r\n        const newTitle = document.createElement('h2');\r\n        newTitle.classList.add('title')\r\n        newTitle.innerHTML = movie.title;\r\n        const newYear = document.createElement('h2');\r\n        newYear.classList.add('year');\r\n        newYear.innerHTML = movie.year;\r\n        \r\n        newDivContainer.append(newImg, newTitle, newYear);\r\n        newLink.append(newDivContainer);\r\n        newDivCard.append(newLink);\r\n        \r\n        section.append(newDivCard);\r\n\r\n        newImg.addEventListener('mouseenter', () => renderInfo(movie, newDivContainer));\r\n        \r\n        newImg.addEventListener('mouseleave', () => deleteInfo(newDivContainer));\r\n\r\n        \r\n    });\r\n    };\r\n\r\n    function renderInfo(movie, divImg) {\r\n        \r\n        const mInfo = document.createElement('div');\r\n        mInfo.innerHTML = `<h4>| Duración |</h4><p>${movie.duration}</p>\r\n        <h4>| Director |</h4>  <p>${movie.director}</p>\r\n        <h4>| Género | </h4>\r\n        <p>${movie.genre.join(', ')}</p>\r\n        <h4>| Rating |</h4> <h5>\r\n        <img class=\"img-star\" src=\"/assets/img/star.png\" alt=\"star\">\r\n        ${movie.rate}\r\n        </h5>`;\r\n        mInfo.classList.add('movie-info')\r\n\r\n        divImg.append(mInfo);\r\n    }\r\n    function deleteInfo(divImg) {\r\n        const existingInfo = divImg.querySelector('div');\r\n        if (existingInfo) {\r\n            divImg.removeChild(existingInfo);\r\n        }\r\n    }\r\n\r\nmodule.exports = renderCards;\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;