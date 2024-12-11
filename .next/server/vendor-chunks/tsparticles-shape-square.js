"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-square";
exports.ids = ["vendor-chunks/tsparticles-shape-square"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SquareDrawer = void 0;\nconst fixFactor = Math.sqrt(2);\nclass SquareDrawer {\n    draw(context, particle, radius) {\n        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;\n        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n    }\n    getSidesCount() {\n        return 4;\n    }\n}\nexports.SquareDrawer = SquareDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2Nqcy9TcXVhcmVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXNxdWFyZS9janMvU3F1YXJlRHJhd2VyLmpzPzM2ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNxdWFyZURyYXdlciA9IHZvaWQgMDtcbmNvbnN0IGZpeEZhY3RvciA9IE1hdGguc3FydCgyKTtcbmNsYXNzIFNxdWFyZURyYXdlciB7XG4gICAgZHJhdyhjb250ZXh0LCBwYXJ0aWNsZSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGZpeGVkUmFkaXVzID0gcmFkaXVzIC8gZml4RmFjdG9yLCBmaXhlZERpYW1ldGVyID0gZml4ZWRSYWRpdXMgKiAyO1xuICAgICAgICBjb250ZXh0LnJlY3QoLWZpeGVkUmFkaXVzLCAtZml4ZWRSYWRpdXMsIGZpeGVkRGlhbWV0ZXIsIGZpeGVkRGlhbWV0ZXIpO1xuICAgIH1cbiAgICBnZXRTaWRlc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICB9XG59XG5leHBvcnRzLlNxdWFyZURyYXdlciA9IFNxdWFyZURyYXdlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-square/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/cjs/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadSquareShape = void 0;\nconst SquareDrawer_1 = __webpack_require__(/*! ./SquareDrawer */ \"(ssr)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js\");\nasync function loadSquareShape(engine, refresh = true) {\n    await engine.addShape([\"edge\", \"square\"], new SquareDrawer_1.SquareDrawer(), refresh);\n}\nexports.loadSquareShape = loadSquareShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUI7QUFDdkIsdUJBQXVCLG1CQUFPLENBQUMseUZBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zcXVhcmUvY2pzL2luZGV4LmpzPzRiOWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRTcXVhcmVTaGFwZSA9IHZvaWQgMDtcbmNvbnN0IFNxdWFyZURyYXdlcl8xID0gcmVxdWlyZShcIi4vU3F1YXJlRHJhd2VyXCIpO1xuYXN5bmMgZnVuY3Rpb24gbG9hZFNxdWFyZVNoYXBlKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkU2hhcGUoW1wiZWRnZVwiLCBcInNxdWFyZVwiXSwgbmV3IFNxdWFyZURyYXdlcl8xLlNxdWFyZURyYXdlcigpLCByZWZyZXNoKTtcbn1cbmV4cG9ydHMubG9hZFNxdWFyZVNoYXBlID0gbG9hZFNxdWFyZVNoYXBlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/cjs/index.js\n");

/***/ })

};
;