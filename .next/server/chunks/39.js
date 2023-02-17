exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 4814:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__U_Kza",
	"main_header": "header_main_header__01eiZ",
	"float_menu": "header_float_menu__xOfqa",
	"menu_button": "header_menu_button__Ar_51"
};


/***/ }),

/***/ 5039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/header/header.module.css
var header_module = __webpack_require__(4814);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header/Header.js






const Header = ()=>{
    const { 0: showMenu , 1: setShowMenu  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (header_module_default()).header,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: (header_module_default()).main_header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: (header_module_default()).menu_button,
                                    src: "/assets/jg-logo.png",
                                    alt: "me",
                                    width: 64 * 0.75,
                                    height: 44 * 0.75
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: (header_module_default()).menu_button,
                            onClick: ()=>setShowMenu(!showMenu),
                            src: "/assets/menu-icon.png",
                            alt: "me",
                            width: 44 * 0.75,
                            height: 30 * 0.75
                        })
                    ]
                }),
                showMenu && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(header_module_default()).float_menu} animate__animated animate__fadeIn animate__faster`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Inicio"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/projects",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Projectos"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Blog"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./components/header/index.js




/***/ })

};
;