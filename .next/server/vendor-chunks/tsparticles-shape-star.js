"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-star";
exports.ids = ["vendor-chunks/tsparticles-shape-star"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/cjs/StarDrawer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StarDrawer = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass StarDrawer {\n    draw(context, particle, radius) {\n        const sides = particle.sides, inset = particle.starInset ?? 2;\n        context.moveTo(0, 0 - radius);\n        for (let i = 0; i < sides; i++) {\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius * inset);\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius);\n        }\n    }\n    getSidesCount(particle) {\n        const star = particle.shapeData;\n        return Math.round((0, tsparticles_engine_1.getRangeValue)(star?.sides ?? star?.nb_sides ?? 5));\n    }\n    particleInit(container, particle) {\n        const star = particle.shapeData, inset = (0, tsparticles_engine_1.getRangeValue)(star?.inset ?? 2);\n        particle.starInset = inset;\n    }\n}\nexports.StarDrawer = StarDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9janMvU3RhckRyYXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXN0YXIvY2pzL1N0YXJEcmF3ZXIuanM/NDk1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RhckRyYXdlciA9IHZvaWQgMDtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmNsYXNzIFN0YXJEcmF3ZXIge1xuICAgIGRyYXcoY29udGV4dCwgcGFydGljbGUsIHJhZGl1cykge1xuICAgICAgICBjb25zdCBzaWRlcyA9IHBhcnRpY2xlLnNpZGVzLCBpbnNldCA9IHBhcnRpY2xlLnN0YXJJbnNldCA/PyAyO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbygwLCAwIC0gcmFkaXVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlczsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZXh0LnJvdGF0ZShNYXRoLlBJIC8gc2lkZXMpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMCwgMCAtIHJhZGl1cyAqIGluc2V0KTtcbiAgICAgICAgICAgIGNvbnRleHQucm90YXRlKE1hdGguUEkgLyBzaWRlcyk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbygwLCAwIC0gcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTaWRlc0NvdW50KHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IHN0YXIgPSBwYXJ0aWNsZS5zaGFwZURhdGE7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5nZXRSYW5nZVZhbHVlKShzdGFyPy5zaWRlcyA/PyBzdGFyPy5uYl9zaWRlcyA/PyA1KSk7XG4gICAgfVxuICAgIHBhcnRpY2xlSW5pdChjb250YWluZXIsIHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IHN0YXIgPSBwYXJ0aWNsZS5zaGFwZURhdGEsIGluc2V0ID0gKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmdldFJhbmdlVmFsdWUpKHN0YXI/Lmluc2V0ID8/IDIpO1xuICAgICAgICBwYXJ0aWNsZS5zdGFySW5zZXQgPSBpbnNldDtcbiAgICB9XG59XG5leHBvcnRzLlN0YXJEcmF3ZXIgPSBTdGFyRHJhd2VyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-star/cjs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/cjs/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadStarShape = void 0;\nconst StarDrawer_1 = __webpack_require__(/*! ./StarDrawer */ \"(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js\");\nasync function loadStarShape(engine, refresh = true) {\n    await engine.addShape(\"star\", new StarDrawer_1.StarDrawer(), refresh);\n}\nexports.loadStarShape = loadStarShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCLHFCQUFxQixtQkFBTyxDQUFDLG1GQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zdGFyL2Nqcy9pbmRleC5qcz80NTc3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkU3RhclNoYXBlID0gdm9pZCAwO1xuY29uc3QgU3RhckRyYXdlcl8xID0gcmVxdWlyZShcIi4vU3RhckRyYXdlclwiKTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRTdGFyU2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZShcInN0YXJcIiwgbmV3IFN0YXJEcmF3ZXJfMS5TdGFyRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuZXhwb3J0cy5sb2FkU3RhclNoYXBlID0gbG9hZFN0YXJTaGFwZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/cjs/index.js\n");

/***/ })

};
;