"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-bounce";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-bounce"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Bouncer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-bounce/cjs/Bouncer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bouncer = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst Bounce_1 = __webpack_require__(/*! ./Options/Classes/Bounce */ \"(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Classes/Bounce.js\");\nclass Bouncer extends tsparticles_engine_1.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n        this._processBounce = (position, radius, area) => {\n            const query = this.container.particles.quadTree.query(area, (p) => this.isEnabled(p));\n            for (const particle of query) {\n                if (area instanceof tsparticles_engine_1.Circle) {\n                    (0, tsparticles_engine_1.circleBounce)((0, tsparticles_engine_1.circleBounceDataFromParticle)(particle), {\n                        position,\n                        radius,\n                        mass: (radius ** 2 * Math.PI) / 2,\n                        velocity: tsparticles_engine_1.Vector.origin,\n                        factor: tsparticles_engine_1.Vector.origin,\n                    });\n                }\n                else if (area instanceof tsparticles_engine_1.Rectangle) {\n                    (0, tsparticles_engine_1.rectBounce)(particle, (0, tsparticles_engine_1.calculateBounds)(position, radius));\n                }\n            }\n        };\n        this._processMouseBounce = () => {\n            const container = this.container, pxRatio = container.retina.pixelRatio, tolerance = 10 * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;\n            if (!radius || radius < 0 || !mousePos) {\n                return;\n            }\n            this._processBounce(mousePos, radius, new tsparticles_engine_1.Circle(mousePos.x, mousePos.y, radius + tolerance));\n        };\n        this._singleSelectorBounce = (selector, div) => {\n            const container = this.container, query = document.querySelectorAll(selector);\n            if (!query.length) {\n                return;\n            }\n            query.forEach((item) => {\n                const elem = item, pxRatio = container.retina.pixelRatio, pos = {\n                    x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,\n                    y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,\n                }, radius = (elem.offsetWidth / 2) * pxRatio, tolerance = 10 * pxRatio, area = div.type === \"circle\"\n                    ? new tsparticles_engine_1.Circle(pos.x, pos.y, radius + tolerance)\n                    : new tsparticles_engine_1.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);\n                this._processBounce(pos, radius, area);\n            });\n        };\n    }\n    clear() {\n    }\n    init() {\n        const container = this.container, bounce = container.actualOptions.interactivity.modes.bounce;\n        if (!bounce) {\n            return;\n        }\n        container.retina.bounceModeDistance = bounce.distance * container.retina.pixelRatio;\n    }\n    async interact() {\n        const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === tsparticles_engine_1.mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;\n        if (mouseMoveStatus && hoverEnabled && (0, tsparticles_engine_1.isInArray)(\"bounce\", hoverMode)) {\n            this._processMouseBounce();\n        }\n        else {\n            (0, tsparticles_engine_1.divModeExecute)(\"bounce\", divs, (selector, div) => this._singleSelectorBounce(selector, div));\n        }\n    }\n    isEnabled(particle) {\n        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, divs = events.onDiv;\n        return ((mouse.position && events.onHover.enable && (0, tsparticles_engine_1.isInArray)(\"bounce\", events.onHover.mode)) ||\n            (0, tsparticles_engine_1.isDivModeEnabled)(\"bounce\", divs));\n    }\n    loadModeOptions(options, ...sources) {\n        if (!options.bounce) {\n            options.bounce = new Bounce_1.Bounce();\n        }\n        for (const source of sources) {\n            options.bounce.load(source?.bounce);\n        }\n    }\n    reset() {\n    }\n}\nexports.Bouncer = Bouncer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2Nqcy9Cb3VuY2VyLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZiw2QkFBNkIsbUJBQU8sQ0FBQyxnRkFBb0I7QUFDekQsaUJBQWlCLG1CQUFPLENBQUMsNEhBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLWJvdW5jZS9janMvQm91bmNlci5qcz9mZjRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Cb3VuY2VyID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfZW5naW5lXzEgPSByZXF1aXJlKFwidHNwYXJ0aWNsZXMtZW5naW5lXCIpO1xuY29uc3QgQm91bmNlXzEgPSByZXF1aXJlKFwiLi9PcHRpb25zL0NsYXNzZXMvQm91bmNlXCIpO1xuY2xhc3MgQm91bmNlciBleHRlbmRzIHRzcGFydGljbGVzX2VuZ2luZV8xLkV4dGVybmFsSW50ZXJhY3RvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIpO1xuICAgICAgICB0aGlzLl9wcm9jZXNzQm91bmNlID0gKHBvc2l0aW9uLCByYWRpdXMsIGFyZWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5jb250YWluZXIucGFydGljbGVzLnF1YWRUcmVlLnF1ZXJ5KGFyZWEsIChwKSA9PiB0aGlzLmlzRW5hYmxlZChwKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcnRpY2xlIG9mIHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZWEgaW5zdGFuY2VvZiB0c3BhcnRpY2xlc19lbmdpbmVfMS5DaXJjbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmNpcmNsZUJvdW5jZSkoKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmNpcmNsZUJvdW5jZURhdGFGcm9tUGFydGljbGUpKHBhcnRpY2xlKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzOiAocmFkaXVzICoqIDIgKiBNYXRoLlBJKSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eTogdHNwYXJ0aWNsZXNfZW5naW5lXzEuVmVjdG9yLm9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvcjogdHNwYXJ0aWNsZXNfZW5naW5lXzEuVmVjdG9yLm9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZWEgaW5zdGFuY2VvZiB0c3BhcnRpY2xlc19lbmdpbmVfMS5SZWN0YW5nbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLnJlY3RCb3VuY2UpKHBhcnRpY2xlLCAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuY2FsY3VsYXRlQm91bmRzKShwb3NpdGlvbiwgcmFkaXVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcm9jZXNzTW91c2VCb3VuY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcHhSYXRpbyA9IGNvbnRhaW5lci5yZXRpbmEucGl4ZWxSYXRpbywgdG9sZXJhbmNlID0gMTAgKiBweFJhdGlvLCBtb3VzZVBvcyA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc2l0aW9uLCByYWRpdXMgPSBjb250YWluZXIucmV0aW5hLmJvdW5jZU1vZGVEaXN0YW5jZTtcbiAgICAgICAgICAgIGlmICghcmFkaXVzIHx8IHJhZGl1cyA8IDAgfHwgIW1vdXNlUG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc0JvdW5jZShtb3VzZVBvcywgcmFkaXVzLCBuZXcgdHNwYXJ0aWNsZXNfZW5naW5lXzEuQ2lyY2xlKG1vdXNlUG9zLngsIG1vdXNlUG9zLnksIHJhZGl1cyArIHRvbGVyYW5jZSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3RvckJvdW5jZSA9IChzZWxlY3RvciwgZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmICghcXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW0gPSBpdGVtLCBweFJhdGlvID0gY29udGFpbmVyLnJldGluYS5waXhlbFJhdGlvLCBwb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IChlbGVtLm9mZnNldExlZnQgKyBlbGVtLm9mZnNldFdpZHRoIC8gMikgKiBweFJhdGlvLFxuICAgICAgICAgICAgICAgICAgICB5OiAoZWxlbS5vZmZzZXRUb3AgKyBlbGVtLm9mZnNldEhlaWdodCAvIDIpICogcHhSYXRpbyxcbiAgICAgICAgICAgICAgICB9LCByYWRpdXMgPSAoZWxlbS5vZmZzZXRXaWR0aCAvIDIpICogcHhSYXRpbywgdG9sZXJhbmNlID0gMTAgKiBweFJhdGlvLCBhcmVhID0gZGl2LnR5cGUgPT09IFwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgdHNwYXJ0aWNsZXNfZW5naW5lXzEuQ2lyY2xlKHBvcy54LCBwb3MueSwgcmFkaXVzICsgdG9sZXJhbmNlKVxuICAgICAgICAgICAgICAgICAgICA6IG5ldyB0c3BhcnRpY2xlc19lbmdpbmVfMS5SZWN0YW5nbGUoZWxlbS5vZmZzZXRMZWZ0ICogcHhSYXRpbyAtIHRvbGVyYW5jZSwgZWxlbS5vZmZzZXRUb3AgKiBweFJhdGlvIC0gdG9sZXJhbmNlLCBlbGVtLm9mZnNldFdpZHRoICogcHhSYXRpbyArIHRvbGVyYW5jZSAqIDIsIGVsZW0ub2Zmc2V0SGVpZ2h0ICogcHhSYXRpbyArIHRvbGVyYW5jZSAqIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NCb3VuY2UocG9zLCByYWRpdXMsIGFyZWEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgYm91bmNlID0gY29udGFpbmVyLmFjdHVhbE9wdGlvbnMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ib3VuY2U7XG4gICAgICAgIGlmICghYm91bmNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLnJldGluYS5ib3VuY2VNb2RlRGlzdGFuY2UgPSBib3VuY2UuZGlzdGFuY2UgKiBjb250YWluZXIucmV0aW5hLnBpeGVsUmF0aW87XG4gICAgfVxuICAgIGFzeW5jIGludGVyYWN0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgb3B0aW9ucyA9IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zLCBldmVudHMgPSBvcHRpb25zLmludGVyYWN0aXZpdHkuZXZlbnRzLCBtb3VzZU1vdmVTdGF0dXMgPSBjb250YWluZXIuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT09IHRzcGFydGljbGVzX2VuZ2luZV8xLm1vdXNlTW92ZUV2ZW50LCBob3ZlckVuYWJsZWQgPSBldmVudHMub25Ib3Zlci5lbmFibGUsIGhvdmVyTW9kZSA9IGV2ZW50cy5vbkhvdmVyLm1vZGUsIGRpdnMgPSBldmVudHMub25EaXY7XG4gICAgICAgIGlmIChtb3VzZU1vdmVTdGF0dXMgJiYgaG92ZXJFbmFibGVkICYmICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5pc0luQXJyYXkpKFwiYm91bmNlXCIsIGhvdmVyTW9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NNb3VzZUJvdW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKDAsIHRzcGFydGljbGVzX2VuZ2luZV8xLmRpdk1vZGVFeGVjdXRlKShcImJvdW5jZVwiLCBkaXZzLCAoc2VsZWN0b3IsIGRpdikgPT4gdGhpcy5fc2luZ2xlU2VsZWN0b3JCb3VuY2Uoc2VsZWN0b3IsIGRpdikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzRW5hYmxlZChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgb3B0aW9ucyA9IGNvbnRhaW5lci5hY3R1YWxPcHRpb25zLCBtb3VzZSA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLCBldmVudHMgPSAocGFydGljbGU/LmludGVyYWN0aXZpdHkgPz8gb3B0aW9ucy5pbnRlcmFjdGl2aXR5KS5ldmVudHMsIGRpdnMgPSBldmVudHMub25EaXY7XG4gICAgICAgIHJldHVybiAoKG1vdXNlLnBvc2l0aW9uICYmIGV2ZW50cy5vbkhvdmVyLmVuYWJsZSAmJiAoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuaXNJbkFycmF5KShcImJvdW5jZVwiLCBldmVudHMub25Ib3Zlci5tb2RlKSkgfHxcbiAgICAgICAgICAgICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5pc0Rpdk1vZGVFbmFibGVkKShcImJvdW5jZVwiLCBkaXZzKSk7XG4gICAgfVxuICAgIGxvYWRNb2RlT3B0aW9ucyhvcHRpb25zLCAuLi5zb3VyY2VzKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5ib3VuY2UpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYm91bmNlID0gbmV3IEJvdW5jZV8xLkJvdW5jZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYm91bmNlLmxvYWQoc291cmNlPy5ib3VuY2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgIH1cbn1cbmV4cG9ydHMuQm91bmNlciA9IEJvdW5jZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Bouncer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Classes/Bounce.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Classes/Bounce.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bounce = void 0;\nclass Bounce {\n    constructor() {\n        this.distance = 200;\n    }\n    load(data) {\n        if (!data) {\n            return;\n        }\n        if (data.distance !== undefined) {\n            this.distance = data.distance;\n        }\n    }\n}\nexports.Bounce = Bounce;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2Nqcy9PcHRpb25zL0NsYXNzZXMvQm91bmNlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2Nqcy9PcHRpb25zL0NsYXNzZXMvQm91bmNlLmpzP2RkMTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJvdW5jZSA9IHZvaWQgMDtcbmNsYXNzIEJvdW5jZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAyMDA7XG4gICAgfVxuICAgIGxvYWQoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5kaXN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gZGF0YS5kaXN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQm91bmNlID0gQm91bmNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Classes/Bounce.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Interfaces/IBounce.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Interfaces/IBounce.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2Nqcy9PcHRpb25zL0ludGVyZmFjZXMvSUJvdW5jZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1ib3VuY2UvY2pzL09wdGlvbnMvSW50ZXJmYWNlcy9JQm91bmNlLmpzPzNkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Interfaces/IBounce.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-bounce/cjs/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadExternalBounceInteraction = void 0;\nconst Bouncer_1 = __webpack_require__(/*! ./Bouncer */ \"(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Bouncer.js\");\nasync function loadExternalBounceInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalBounce\", (container) => new Bouncer_1.Bouncer(container), refresh);\n}\nexports.loadExternalBounceInteraction = loadExternalBounceInteraction;\n__exportStar(__webpack_require__(/*! ./Options/Classes/Bounce */ \"(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Classes/Bounce.js\"), exports);\n__exportStar(__webpack_require__(/*! ./Options/Interfaces/IBounce */ \"(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/Options/Interfaces/IBounce.js\"), exports);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtYm91bmNlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQ0FBcUM7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsOEZBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyw0SEFBMEI7QUFDL0MsYUFBYSxtQkFBTyxDQUFDLG9JQUE4QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1ib3VuY2UvY2pzL2luZGV4LmpzPzVlZWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEV4dGVybmFsQm91bmNlSW50ZXJhY3Rpb24gPSB2b2lkIDA7XG5jb25zdCBCb3VuY2VyXzEgPSByZXF1aXJlKFwiLi9Cb3VuY2VyXCIpO1xuYXN5bmMgZnVuY3Rpb24gbG9hZEV4dGVybmFsQm91bmNlSW50ZXJhY3Rpb24oZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRJbnRlcmFjdG9yKFwiZXh0ZXJuYWxCb3VuY2VcIiwgKGNvbnRhaW5lcikgPT4gbmV3IEJvdW5jZXJfMS5Cb3VuY2VyKGNvbnRhaW5lciksIHJlZnJlc2gpO1xufVxuZXhwb3J0cy5sb2FkRXh0ZXJuYWxCb3VuY2VJbnRlcmFjdGlvbiA9IGxvYWRFeHRlcm5hbEJvdW5jZUludGVyYWN0aW9uO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL09wdGlvbnMvQ2xhc3Nlcy9Cb3VuY2VcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL09wdGlvbnMvSW50ZXJmYWNlcy9JQm91bmNlXCIpLCBleHBvcnRzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-bounce/cjs/index.js\n");

/***/ })

};
;