"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#FFFCF7\", \"#202023\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            },\n            \"gradient\": {\n                fontSize: \"20px\",\n                background: \"-webkit-linear-gradient(#eee, #333)\",\n                webkitBackgroundClip: \"text\",\n                webkitTextFillColor: \"transparent\"\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    glassTeal: \"#88ccca\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0g7QUFHM0MsSUFBTUUsTUFBTSxHQUFHO0lBQ1hDLE1BQU0sRUFBRUMsU0FBQUEsS0FBSztlQUFLO1lBQ2RDLElBQUksRUFBRTtnQkFDRkMsRUFBRSxFQUFFTCw0REFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQ0csS0FBSyxDQUFDO2FBQ3hDO1NBQ0o7S0FBQztDQUNMO0FBRUQsSUFBTUcsVUFBVSxHQUFHO0lBQ2ZDLE9BQU8sRUFBRTtRQUNMQyxRQUFRLEVBQUU7WUFDTixlQUFlLEVBQUU7Z0JBQ2JDLGNBQWMsRUFBRSxXQUFXO2dCQUMzQkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3RCQyxtQkFBbUIsRUFBRSxTQUFTO2dCQUM5QkMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDMUJDLFNBQVMsRUFBRSxDQUFDO2dCQUNaQyxZQUFZLEVBQUUsQ0FBQzthQUNsQjtZQUNELFVBQVUsRUFBQztnQkFDSEwsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCTSxVQUFVLEVBQUUscUNBQXFDO2dCQUNqREMsb0JBQW9CLEVBQUUsTUFBTTtnQkFDNUJDLG1CQUFtQixFQUFFLGFBQWE7YUFDekM7U0FDSjtLQUNKO0lBQ0RDLElBQUksRUFBRTtRQUNGQyxTQUFTLEVBQUVqQixTQUFBQSxLQUFLO21CQUFLO2dCQUNqQmtCLEtBQUssRUFBRXJCLDREQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDRyxLQUFLLENBQUM7Z0JBQ3hDUSxtQkFBbUIsRUFBRSxDQUFDO2FBQ3pCO1NBQUM7S0FDTDtDQUNKO0FBRUQsSUFBTVcsS0FBSyxHQUFHO0lBQ1ZDLE9BQU8sRUFBRSxxQkFBcUI7Q0FDakM7QUFFRCxJQUFNQyxNQUFNLEdBQUc7SUFDWEMsU0FBUyxFQUFFLFNBQVM7Q0FDdkI7QUFFRCxJQUFNQyxNQUFNLEdBQUc7SUFDWEMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QkMsa0JBQWtCLEVBQUUsSUFBSTtDQUMzQjtBQUVELElBQU1DLEtBQUssR0FBRzlCLDZEQUFXLENBQUM7SUFDdEIyQixNQUFNLEVBQU5BLE1BQU07SUFDTnpCLE1BQU0sRUFBTkEsTUFBTTtJQUNOSyxVQUFVLEVBQVZBLFVBQVU7SUFDVmtCLE1BQU0sRUFBTkEsTUFBTTtJQUNORixLQUFLLEVBQUxBLEtBQUs7Q0FDUixDQUFDO0FBRUYsK0RBQWVPLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQge21vZGV9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgYmc6IG1vZGUoJyNGRkZDRjcnLCAnIzIwMjAyMycpKHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBIZWFkaW5nOiB7XHJcbiAgICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICAgICAgJ3NlY3Rpb24tdGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiA2LFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IDQsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2dyYWRpZW50Jzp7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2VlZSwgIzMzMyknLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlYmtpdEJhY2tncm91bmRDbGlwOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2Via2l0VGV4dEZpbGxDb2xvcjogJ3RyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBMaW5rOiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnIzNkN2FlZCcsICcjZmY2M2MzJykocHJvcHMpLFxyXG4gICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxYydcIlxyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBnbGFzc1RlYWw6ICcjODhjY2NhJ1xyXG59XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcclxufVxyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgICBjb25maWcsXHJcbiAgICBzdHlsZXMsXHJcbiAgICBjb21wb25lbnRzLFxyXG4gICAgY29sb3JzLFxyXG4gICAgZm9udHNcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lXHJcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmQiLCJ3ZWJraXRCYWNrZ3JvdW5kQ2xpcCIsIndlYmtpdFRleHRGaWxsQ29sb3IiLCJMaW5rIiwiYmFzZVN0eWxlIiwiY29sb3IiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJnbGFzc1RlYWwiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});