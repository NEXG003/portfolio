"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/klona";
exports.ids = ["vendor-chunks/klona"];
exports.modules = {

/***/ "(ssr)/./node_modules/klona/full/index.mjs":
/*!*******************************************!*\
  !*** ./node_modules/klona/full/index.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   klona: () => (/* binding */ klona)\n/* harmony export */ });\nfunction set(obj, key, val) {\n    if (typeof val.value === \"object\") val.value = klona(val.value);\n    if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === \"__proto__\") {\n        Object.defineProperty(obj, key, val);\n    } else obj[key] = val.value;\n}\nfunction klona(x) {\n    if (typeof x !== \"object\") return x;\n    var i = 0, k, list, tmp, str = Object.prototype.toString.call(x);\n    if (str === \"[object Object]\") {\n        tmp = Object.create(x.__proto__ || null);\n    } else if (str === \"[object Array]\") {\n        tmp = Array(x.length);\n    } else if (str === \"[object Set]\") {\n        tmp = new Set;\n        x.forEach(function(val) {\n            tmp.add(klona(val));\n        });\n    } else if (str === \"[object Map]\") {\n        tmp = new Map;\n        x.forEach(function(val, key) {\n            tmp.set(klona(key), klona(val));\n        });\n    } else if (str === \"[object Date]\") {\n        tmp = new Date(+x);\n    } else if (str === \"[object RegExp]\") {\n        tmp = new RegExp(x.source, x.flags);\n    } else if (str === \"[object DataView]\") {\n        tmp = new x.constructor(klona(x.buffer));\n    } else if (str === \"[object ArrayBuffer]\") {\n        tmp = x.slice(0);\n    } else if (str.slice(-6) === \"Array]\") {\n        // ArrayBuffer.isView(x)\n        // ~> `new` bcuz `Buffer.slice` => ref\n        tmp = new x.constructor(x);\n    }\n    if (tmp) {\n        for(list = Object.getOwnPropertySymbols(x); i < list.length; i++){\n            set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));\n        }\n        for(i = 0, list = Object.getOwnPropertyNames(x); i < list.length; i++){\n            if (Object.hasOwnProperty.call(tmp, k = list[i]) && tmp[k] === x[k]) continue;\n            set(tmp, k, Object.getOwnPropertyDescriptor(x, k));\n        }\n    }\n    return tmp || x;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SjtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tsb25hL2Z1bGwvaW5kZXgubWpzPzdlNzYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWwpIHtcblx0aWYgKHR5cGVvZiB2YWwudmFsdWUgPT09ICdvYmplY3QnKSB2YWwudmFsdWUgPSBrbG9uYSh2YWwudmFsdWUpO1xuXHRpZiAoIXZhbC5lbnVtZXJhYmxlIHx8IHZhbC5nZXQgfHwgdmFsLnNldCB8fCAhdmFsLmNvbmZpZ3VyYWJsZSB8fCAhdmFsLndyaXRhYmxlIHx8IGtleSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbCk7XG5cdH0gZWxzZSBvYmpba2V5XSA9IHZhbC52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtsb25hKHgpIHtcblx0aWYgKHR5cGVvZiB4ICE9PSAnb2JqZWN0JykgcmV0dXJuIHg7XG5cblx0dmFyIGk9MCwgaywgbGlzdCwgdG1wLCBzdHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpO1xuXG5cdGlmIChzdHIgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0dG1wID0gT2JqZWN0LmNyZWF0ZSh4Ll9fcHJvdG9fXyB8fCBudWxsKTtcblx0fSBlbHNlIGlmIChzdHIgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblx0XHR0bXAgPSBBcnJheSh4Lmxlbmd0aCk7XG5cdH0gZWxzZSBpZiAoc3RyID09PSAnW29iamVjdCBTZXRdJykge1xuXHRcdHRtcCA9IG5ldyBTZXQ7XG5cdFx0eC5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHRtcC5hZGQoa2xvbmEodmFsKSk7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoc3RyID09PSAnW29iamVjdCBNYXBdJykge1xuXHRcdHRtcCA9IG5ldyBNYXA7XG5cdFx0eC5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGtleSkge1xuXHRcdFx0dG1wLnNldChrbG9uYShrZXkpLCBrbG9uYSh2YWwpKTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChzdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuXHRcdHRtcCA9IG5ldyBEYXRlKCt4KTtcblx0fSBlbHNlIGlmIChzdHIgPT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG5cdFx0dG1wID0gbmV3IFJlZ0V4cCh4LnNvdXJjZSwgeC5mbGFncyk7XG5cdH0gZWxzZSBpZiAoc3RyID09PSAnW29iamVjdCBEYXRhVmlld10nKSB7XG5cdFx0dG1wID0gbmV3IHguY29uc3RydWN0b3IoIGtsb25hKHguYnVmZmVyKSApO1xuXHR9IGVsc2UgaWYgKHN0ciA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdHRtcCA9IHguc2xpY2UoMCk7XG5cdH0gZWxzZSBpZiAoc3RyLnNsaWNlKC02KSA9PT0gJ0FycmF5XScpIHtcblx0XHQvLyBBcnJheUJ1ZmZlci5pc1ZpZXcoeClcblx0XHQvLyB+PiBgbmV3YCBiY3V6IGBCdWZmZXIuc2xpY2VgID0+IHJlZlxuXHRcdHRtcCA9IG5ldyB4LmNvbnN0cnVjdG9yKHgpO1xuXHR9XG5cblx0aWYgKHRtcCkge1xuXHRcdGZvciAobGlzdD1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHgpOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0c2V0KHRtcCwgbGlzdFtpXSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih4LCBsaXN0W2ldKSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChpPTAsIGxpc3Q9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoeCk7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodG1wLCBrPWxpc3RbaV0pICYmIHRtcFtrXSA9PT0geFtrXSkgY29udGludWU7XG5cdFx0XHRzZXQodG1wLCBrLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHgsIGspKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG1wIHx8IHg7XG59XG4iXSwibmFtZXMiOlsic2V0Iiwib2JqIiwia2V5IiwidmFsIiwidmFsdWUiLCJrbG9uYSIsImVudW1lcmFibGUiLCJnZXQiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwieCIsImkiLCJrIiwibGlzdCIsInRtcCIsInN0ciIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImNyZWF0ZSIsIl9fcHJvdG9fXyIsIkFycmF5IiwibGVuZ3RoIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsIk1hcCIsIkRhdGUiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsImNvbnN0cnVjdG9yIiwiYnVmZmVyIiwic2xpY2UiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/klona/full/index.mjs\n");

/***/ })

};
;