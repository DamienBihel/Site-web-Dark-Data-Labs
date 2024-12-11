"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-pause";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-pause"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Pauser = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass Pauser extends tsparticles_engine_1.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n        this.handleClickMode = (mode) => {\n            if (mode !== \"pause\") {\n                return;\n            }\n            const container = this.container;\n            if (container.getAnimationStatus()) {\n                container.pause();\n            }\n            else {\n                container.play();\n            }\n        };\n    }\n    clear() {\n    }\n    init() {\n    }\n    async interact() {\n    }\n    isEnabled() {\n        return true;\n    }\n    reset() {\n    }\n}\nexports.Pauser = Pauser;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvY2pzL1BhdXNlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1wYXVzZS9janMvUGF1c2VyLmpzP2M2OWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBhdXNlciA9IHZvaWQgMDtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmNsYXNzIFBhdXNlciBleHRlbmRzIHRzcGFydGljbGVzX2VuZ2luZV8xLkV4dGVybmFsSW50ZXJhY3RvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrTW9kZSA9IChtb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmdldEFuaW1hdGlvblN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICB9XG4gICAgYXN5bmMgaW50ZXJhY3QoKSB7XG4gICAgfVxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgIH1cbn1cbmV4cG9ydHMuUGF1c2VyID0gUGF1c2VyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/cjs/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadExternalPauseInteraction = void 0;\nconst Pauser_1 = __webpack_require__(/*! ./Pauser */ \"(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js\");\nasync function loadExternalPauseInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalPause\", (container) => new Pauser_1.Pauser(container), refresh);\n}\nexports.loadExternalPauseInteraction = loadExternalPauseInteraction;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9DQUFvQztBQUNwQyxpQkFBaUIsbUJBQU8sQ0FBQywyRkFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvY2pzL2luZGV4LmpzP2RiOTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRFeHRlcm5hbFBhdXNlSW50ZXJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBQYXVzZXJfMSA9IHJlcXVpcmUoXCIuL1BhdXNlclwiKTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRFeHRlcm5hbFBhdXNlSW50ZXJhY3Rpb24oZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRJbnRlcmFjdG9yKFwiZXh0ZXJuYWxQYXVzZVwiLCAoY29udGFpbmVyKSA9PiBuZXcgUGF1c2VyXzEuUGF1c2VyKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuZXhwb3J0cy5sb2FkRXh0ZXJuYWxQYXVzZUludGVyYWN0aW9uID0gbG9hZEV4dGVybmFsUGF1c2VJbnRlcmFjdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/index.js\n");

/***/ })

};
;