"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/constants/constant.ts":
/*!***********************************!*\
  !*** ./src/constants/constant.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerItems: function() { return /* binding */ headerItems; },\n/* harmony export */   projects: function() { return /* binding */ projects; },\n/* harmony export */   userInfo: function() { return /* binding */ userInfo; }\n/* harmony export */ });\nconst userInfo = {\n    name: \"Abdul Qadir Khan\",\n    picture: \"/assets/FB_IMG_1711376579607.jpg\",\n    pic: \"/assets/4884785.jpg\",\n    heading: \"I&#39;m a Web Developer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and leveraging cutting-edge technologies to drive innovation and enhance business processes.\",\n    about: \"\\n        <p>I am a passionate Web Developer with a strong background in Web Development, I have been crafting digital experiences for 1 years.</p>\\n        <p>My journey in IT began in 2023 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>\\n        <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>\\n        \",\n    skills: [\n        \"React\",\n        \"Next\",\n        \"HTML\",\n        \"CSS\",\n        \"Typescript\"\n    ]\n};\nconst headerItems = {\n    home: {\n        label: \"Home\",\n        page: \"home\"\n    },\n    about: {\n        label: \"About\",\n        page: \"about\"\n    },\n    projects: {\n        label: \"Projects\",\n        page: \"projects\"\n    }\n};\nconst projects = [\n    {\n        name: \"Calculator\",\n        image: \"/assets/calculator.png\",\n        githubLink: \"https://github.com/Abdulqadir000/Typescript-Projects/tree/18fa3e0df10cee37e3049ed62268c26b0cd74ae7/calculator%20assigment\",\n        description: \"basic mathematical operations.\"\n    },\n    {\n        name: \"Number guessing game\",\n        image: \"/assets/noguess.png\",\n        githubLink: \"https://github.com/Abdulqadir000/Typescript-Projects/tree/18fa3e0df10cee37e3049ed62268c26b0cd74ae7/guess%20no%20assigment\",\n        description: \"Random number guess game.\"\n    },\n    {\n        name: \"Atm\",\n        image: \"/assets/Atm.png\",\n        githubLink: \"https://github.com/Abdulqadir000/Typescript-Projects/tree/e86cde5e2696544d7823fc5609875d9df1e151dd/Atm\",\n        description: \"Atm Machine\"\n    },\n    {\n        name: \"Number guessing game\",\n        image: \"/assets/noguess.png\",\n        githubLink: \"https://github.com/Abdulqadir000/Typescript-Projects/tree/18fa3e0df10cee37e3049ed62268c26b0cd74ae7/guess%20no%20assigment\",\n        description: \"Random number guess game.\"\n    },\n    {\n        name: \"Number guessing game\",\n        image: \"/assets/noguess.png\",\n        githubLink: \"https://github.com/Abdulqadir000/Typescript-Projects/tree/18fa3e0df10cee37e3049ed62268c26b0cd74ae7/guess%20no%20assigment\",\n        description: \"Random number guess game.\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb25zdGFudHMvY29uc3RhbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSU8sTUFBTUEsV0FBc0I7SUFDL0JDLE1BQU07SUFDTkMsU0FBUztJQUNUQyxLQUFLO0lBQ0xDLFNBQVM7SUFDVEMsT0FBUTtJQUtSQyxRQUFRO1FBQUM7UUFBUztRQUFRO1FBQVE7UUFBTztLQUFhO0FBQzFELEVBQUM7QUFFTSxNQUFNQyxjQUF1QjtJQUNoQ0MsTUFBTTtRQUFFQyxPQUFPO1FBQVFDLE1BQU07SUFBTTtJQUNuQ0wsT0FBTztRQUFFSSxPQUFPO1FBQVNDLE1BQU07SUFBTztJQUN0Q0MsVUFBVTtRQUFFRixPQUFPO1FBQVlDLE1BQU07SUFBVTtBQUNuRCxFQUFDO0FBSU0sTUFBTUMsV0FBc0I7SUFDakM7UUFDRVYsTUFBTTtRQUNOVyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsYUFBYTtJQUNmO0lBQ0E7UUFDRWIsTUFBTTtRQUNOVyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsYUFBYTtJQUNmO0lBQ0E7UUFDRWIsTUFBTTtRQUNOVyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsYUFBYTtJQUNmO0lBQ0E7UUFDRWIsTUFBTTtRQUNOVyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsYUFBYTtJQUNmO0lBQ0E7UUFDRWIsTUFBTTtRQUNOVyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsYUFBYTtJQUNmO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50LnRzP2I4YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlck9iamVjdCB9IGZyb20gXCJAL21vZGFscy9Vc2VyXCJcclxuaW1wb3J0IHsgbmF2SXRlbXMgfSBmcm9tIFwiQC9tb2RhbHMvSGVhZGVyXCJcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCJAL21vZGFscy9Qcm9qZWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VySW5mbzp1c2VyT2JqZWN0ID0ge1xyXG4gICAgbmFtZTogXCJBYmR1bCBRYWRpciBLaGFuXCIsXHJcbiAgICBwaWN0dXJlOiBcIi9hc3NldHMvRkJfSU1HXzE3MTEzNzY1Nzk2MDcuanBnXCIsXHJcbiAgICBwaWM6IFwiL2Fzc2V0cy80ODg0Nzg1LmpwZ1wiLFxyXG4gICAgaGVhZGluZzogJ0kmIzM5O20gYSBXZWIgRGV2ZWxvcGVyIGJhc2VkIGluIFBha2lzdGFuLCB3aXRoIGEgcGFzc2lvbiBmb3IgY3JlYXRpbmcgZWxlZ2FudCBhbmQgZWZmaWNpZW50IHNvbHV0aW9ucyB0aGF0IHNlYW1sZXNzbHkgaW50ZWdyYXRlIHVzZXItZnJpZW5kbHkgZXhwZXJpZW5jZXMuIEkmIzM5O3ZlIGJ1aWx0IHdlYnNpdGVzLCBkZXNrdG9wIGFwcGxpY2F0aW9ucywgYW5kIGxldmVyYWdpbmcgY3V0dGluZy1lZGdlIHRlY2hub2xvZ2llcyB0byBkcml2ZSBpbm5vdmF0aW9uIGFuZCBlbmhhbmNlIGJ1c2luZXNzIHByb2Nlc3Nlcy4nLFxyXG4gICAgYWJvdXQ6IGBcclxuICAgICAgICA8cD5JIGFtIGEgcGFzc2lvbmF0ZSBXZWIgRGV2ZWxvcGVyIHdpdGggYSBzdHJvbmcgYmFja2dyb3VuZCBpbiBXZWIgRGV2ZWxvcG1lbnQsIEkgaGF2ZSBiZWVuIGNyYWZ0aW5nIGRpZ2l0YWwgZXhwZXJpZW5jZXMgZm9yIDEgeWVhcnMuPC9wPlxyXG4gICAgICAgIDxwPk15IGpvdXJuZXkgaW4gSVQgYmVnYW4gaW4gMjAyMyBzaW5jZSB0aGVuLCBJJ3ZlIGhhZCB0aGUgcHJpdmlsZWdlIHRvIHdvcmsgb24gYSBkaXZlcnNlIHJhbmdlIG9mIHByb2plY3RzLCBhbGxvd2luZyBtZSB0byByZWZpbmUgbXkgc2tpbGxzIGFuZCBhcHByb2FjaCB0byBwcm9ibGVtLXNvbHZpbmcuPC9wPlxyXG4gICAgICAgIDxwPiBJIHRocml2ZSBvbiB0dXJuaW5nIGNvbXBsZXggaWRlYXMgaW50byBlbGVnYW50IHNvbHV0aW9ucyB0aGF0IG5vdCBvbmx5IG1lZXQgdXNlciBuZWVkcyBidXQgYWxzbyBjcmVhdGUgbGFzdGluZyBpbXBhY3RzLiA8L3A+XHJcbiAgICAgICAgYCxcclxuICAgIHNraWxsczogWydSZWFjdCcsICdOZXh0JywgJ0hUTUwnLCAnQ1NTJywgJ1R5cGVzY3JpcHQnXSwgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJJdGVtczogbmF2SXRlbXM9IHtcclxuICAgIGhvbWU6IHsgbGFiZWw6IFwiSG9tZVwiLCBwYWdlOiBcImhvbWVcIn0sXHJcbiAgICBhYm91dDogeyBsYWJlbDogXCJBYm91dFwiLCBwYWdlOiBcImFib3V0XCJ9LFxyXG4gICAgcHJvamVjdHM6IHsgbGFiZWw6IFwiUHJvamVjdHNcIiwgcGFnZTogXCJwcm9qZWN0c1wifVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdDYWxjdWxhdG9yJyxcclxuICAgIGltYWdlOiAnL2Fzc2V0cy9jYWxjdWxhdG9yLnBuZycsXHJcbiAgICBnaXRodWJMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0FiZHVscWFkaXIwMDAvVHlwZXNjcmlwdC1Qcm9qZWN0cy90cmVlLzE4ZmEzZTBkZjEwY2VlMzdlMzA0OWVkNjIyNjhjMjZiMGNkNzRhZTcvY2FsY3VsYXRvciUyMGFzc2lnbWVudCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ2Jhc2ljIG1hdGhlbWF0aWNhbCBvcGVyYXRpb25zLidcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOdW1iZXIgZ3Vlc3NpbmcgZ2FtZScsXHJcbiAgICBpbWFnZTogJy9hc3NldHMvbm9ndWVzcy5wbmcnLFxyXG4gICAgZ2l0aHViTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BYmR1bHFhZGlyMDAwL1R5cGVzY3JpcHQtUHJvamVjdHMvdHJlZS8xOGZhM2UwZGYxMGNlZTM3ZTMwNDllZDYyMjY4YzI2YjBjZDc0YWU3L2d1ZXNzJTIwbm8lMjBhc3NpZ21lbnQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUmFuZG9tIG51bWJlciBndWVzcyBnYW1lLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0F0bScsXHJcbiAgICBpbWFnZTogJy9hc3NldHMvQXRtLnBuZycsXHJcbiAgICBnaXRodWJMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0FiZHVscWFkaXIwMDAvVHlwZXNjcmlwdC1Qcm9qZWN0cy90cmVlL2U4NmNkZTVlMjY5NjU0NGQ3ODIzZmM1NjA5ODc1ZDlkZjFlMTUxZGQvQXRtJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkF0bSBNYWNoaW5lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTnVtYmVyIGd1ZXNzaW5nIGdhbWUnLFxyXG4gICAgaW1hZ2U6ICcvYXNzZXRzL25vZ3Vlc3MucG5nJyxcclxuICAgIGdpdGh1Ykxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vQWJkdWxxYWRpcjAwMC9UeXBlc2NyaXB0LVByb2plY3RzL3RyZWUvMThmYTNlMGRmMTBjZWUzN2UzMDQ5ZWQ2MjI2OGMyNmIwY2Q3NGFlNy9ndWVzcyUyMG5vJTIwYXNzaWdtZW50JyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlJhbmRvbSBudW1iZXIgZ3Vlc3MgZ2FtZS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdOdW1iZXIgZ3Vlc3NpbmcgZ2FtZScsXHJcbiAgICBpbWFnZTogJy9hc3NldHMvbm9ndWVzcy5wbmcnLFxyXG4gICAgZ2l0aHViTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BYmR1bHFhZGlyMDAwL1R5cGVzY3JpcHQtUHJvamVjdHMvdHJlZS8xOGZhM2UwZGYxMGNlZTM3ZTMwNDllZDYyMjY4YzI2YjBjZDc0YWU3L2d1ZXNzJTIwbm8lMjBhc3NpZ21lbnQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUmFuZG9tIG51bWJlciBndWVzcyBnYW1lLlwiLFxyXG4gIH0sXHJcbl07XHJcbiAgIl0sIm5hbWVzIjpbInVzZXJJbmZvIiwibmFtZSIsInBpY3R1cmUiLCJwaWMiLCJoZWFkaW5nIiwiYWJvdXQiLCJza2lsbHMiLCJoZWFkZXJJdGVtcyIsImhvbWUiLCJsYWJlbCIsInBhZ2UiLCJwcm9qZWN0cyIsImltYWdlIiwiZ2l0aHViTGluayIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/constants/constant.ts\n"));

/***/ })

});