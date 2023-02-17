exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 5677:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "projects_main___lWPj",
	"projects": "projects_projects__HxwfX",
	"project": "projects_project__K_67W"
};


/***/ }),

/***/ 5448:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "title_title__43vRc",
	"subtitle": "title_subtitle__hcbo4",
	"hr": "title_hr__TIdfr"
};


/***/ }),

/***/ 1734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1269);
/* harmony import */ var _projects_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5677);
/* harmony import */ var _projects_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_projects_module_css__WEBPACK_IMPORTED_MODULE_4__);





const Projects = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_title__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .D, {
                text: "Proyectos",
                subtitle: "Aqu\xed hay algunos de los proyectos en los que he trabajado."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().projects),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().project),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                            src: "/assets/placeholder.png",
                            alt: "me",
                            width: 240,
                            height: 330
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().project),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
                            src: "/assets/placeholder.png",
                            alt: "me",
                            width: 240,
                            height: 330
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 1269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* reexport */ title_Title)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/title/title.module.css
var title_module = __webpack_require__(5448);
var title_module_default = /*#__PURE__*/__webpack_require__.n(title_module);
;// CONCATENATED MODULE: ./components/title/Title.js



const Title = ({ text , subtitle =null  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (title_module_default()).title,
                children: text
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (title_module_default()).subtitle,
                children: [
                    " ",
                    subtitle,
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: (title_module_default()).hr
            })
        ]
    });
};
/* harmony default export */ const title_Title = (Title);

;// CONCATENATED MODULE: ./components/title/index.js




/***/ })

};
;