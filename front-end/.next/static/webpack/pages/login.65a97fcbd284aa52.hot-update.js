"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdb-react-ui-kit */ \"./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gapi_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gapi-script */ \"./node_modules/gapi-script/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// import { googleSignIn, login } from '../redux/features/authSlice';\n\n\nvar initialState = {\n    email: \"\",\n    password: \"\"\n};\nvar Login = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState), formValue = ref[0], setFormValue = ref[1];\n    //const { loading, error } = useSelector(state => ({ ...state.auth }));\n    var email = formValue.email, password = formValue.password;\n    // const dispatch = useDispatch();\n    // const navigate = useNavigate();\n    // prod -> 394690414160-so4bm60imi3uc3kgqk6b5kiv0b0cd4iq.apps.googleusercontent.com\n    var devEnv = \"development\" !== \"production\";\n    var clientId = devEnv ? \"394690414160-qp153jod9qkbk0tq78f2v0sbeau9fhb3.apps.googleusercontent.com\" : \"394690414160-so4bm60imi3uc3kgqk6b5kiv0b0cd4iq.apps.googleusercontent.com\";\n    // useEffect(() => {\n    //     error && toast.error(error);\n    // }, [error]);\n    gapi_script__WEBPACK_IMPORTED_MODULE_4__.gapi.load(\"client:auth2\", function() {\n        gapi_script__WEBPACK_IMPORTED_MODULE_4__.gapi.client.init({\n            clientId: clientId,\n            plugin_name: \"travelling\"\n        });\n    });\n    // const handleSubmit = e => {\n    //     e.preventDefault();\n    //     if (email && password) {\n    //         // dispatch(login({ formValue, navigate, toast }));\n    //     }\n    // };\n    // const onInputChange = e => {\n    //     let { name, value } = e.target;\n    //     setFormValue({ ...formValue, [name]: value });\n    // };\n    // const googleSuccess = res => {\n    //     const email = res?.profileObj?.email;\n    //     const name = res?.profileObj?.name;\n    //     const token = res?.tokenId;\n    //     const googleId = res?.googleId;\n    //     const result = {\n    //         email,\n    //         name,\n    //         token,\n    //         googleId,\n    //     };\n    //     // dispatch(googleSignIn({ result, navigate, toast }));\n    // };\n    // const googleFailure = err => {\n    //     console.log(err);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            margin: \"auto\",\n            padding: \"15px\",\n            maxWidth: \"450px\",\n            alignContent: \"center\",\n            marginTop: \"120px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBCard, {\n            alignment: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {\n                    fas: true,\n                    icon: \"user-circle\",\n                    className: \"fa-2x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"Sign In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBCardBody, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBValidation, {\n                            // onSubmit={handleSubmit}\n                            noValidate: true,\n                            className: \"row g-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBInput, {\n                                        label: \"Email\",\n                                        type: \"email\",\n                                        value: email,\n                                        name: \"email\",\n                                        // onChange={onInputChange}\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBInput, {\n                                        label: \"Password\",\n                                        type: \"password\",\n                                        value: password,\n                                        name: \"password\",\n                                        // onChange={onInputChange}\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {\n                                        style: {\n                                            width: \"100%\"\n                                        },\n                                        className: \"mt-2\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_3__.GoogleLogin, {\n                            clientId: clientId,\n                            render: function(renderProps) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {\n                                    style: {\n                                        width: \"100%\"\n                                    },\n                                    color: \"danger\",\n                                    onClick: renderProps.onClick,\n                                    disabled: renderProps.disabled,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {\n                                            className: \"me-2\",\n                                            fab: true,\n                                            icon: \"google\"\n                                        }, void 0, false, void 0, void 0),\n                                        \"Google Sign IN\"\n                                    ]\n                                }, void 0, true, void 0, void 0);\n                            },\n                            // onSuccess={googleSuccess}\n                            // onFailure={googleFailure}\n                            cookiePolicy: \"single_host_origin\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBCardFooter, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Don't have an account ? Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n                    lineNumber: 168,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n            lineNumber: 97,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Walid\\\\Documents\\\\The campers\\\\front-end\\\\pages\\\\login.tsx\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, _this);\n};\n_s(Login, \"ivzlgorP4GeLgLCP2g2oo8lrHBQ=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQkMsUUFBUTs7Ozs7NkNBQ1Y7Ozs7O3lDQUNBOzhDQUNOLDhEQUFDakIsS0FBRztvQ0FBQ1UsU0FBUyxFQUFDLFFBQVE7OENBQ25CLDRFQUFDM0Isb0RBQU07d0NBQ0hrQixLQUFLLEVBQUU7NENBQUVpQixLQUFLLEVBQUUsTUFBTTt5Q0FBRTt3Q0FDeEJSLFNBQVMsRUFBQyxNQUFNO2tEQVdYLE9BRVQ7Ozs7OzZDQUFTOzs7Ozt5Q0FDUDs7Ozs7O2lDQUNNO3NDQUNoQiw4REFBQ1MsSUFBRTs7OztpQ0FBRztzQ0FDTiw4REFBQ2xDLDJEQUFXOzRCQUNSVSxRQUFRLEVBQUVBLFFBQVE7NEJBQ2xCeUIsTUFBTSxFQUFFLFNBQUNDLFdBQVc7cURBQ2hCLDhEQUFFdEMsb0RBQU07b0NBQ0prQixLQUFLLEVBQUU7d0NBQUVpQixLQUFLLEVBQUUsTUFBTTtxQ0FBRTtvQ0FDeEJJLEtBQUssRUFBQyxRQUFRO29DQUNkQyxPQUFPLEVBQUdGLFdBQVcsQ0FBQ0UsT0FBTztvQ0FDN0JDLFFBQVEsRUFBR0gsV0FBVyxDQUFDRyxRQUFROztzREFFL0IsOERBQUN4QyxxREFBTzs0Q0FDSjBCLFNBQVMsRUFBQyxNQUFNOzRDQUNoQmUsR0FBRzs0Q0FDSGhCLElBQUksRUFBQyxRQUFRO3lFQUNmO3dDQUFBLGdCQUVOOztnRUFBUzs2QkFDWjs0QkFDRCw0QkFBNEI7NEJBQzVCLDRCQUE0Qjs0QkFDNUJpQixZQUFZLEVBQUUsb0JBQW9COzs7OztpQ0FDcEM7Ozs7Ozt5QkFDUTs4QkFDZCw4REFBQzdDLDJEQUFhOzhCQUVOLDRFQUFDOEMsR0FBQztrQ0FBQyxpQ0FBK0I7Ozs7OzZCQUFJOzs7Ozt5QkFFOUI7Ozs7OztpQkFDVjs7Ozs7YUFDUixDQUNSO0NBQ0w7R0F0SktyQyxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUF5SlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi50c3g/NzI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIE1EQkNhcmQsXHJcbiAgICBNREJDYXJkQm9keSxcclxuICAgIE1EQklucHV0LFxyXG4gICAgTURCQ2FyZEZvb3RlcixcclxuICAgIE1EQlZhbGlkYXRpb24sXHJcbiAgICBNREJCdG4sXHJcbiAgICBNREJJY29uLFxyXG4gICAgTURCU3Bpbm5lclxyXG59IGZyb20gJ21kYi1yZWFjdC11aS1raXQnO1xyXG4vLyBpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG4vLyBpbXBvcnQgeyBnb29nbGVTaWduSW4sIGxvZ2luIH0gZnJvbSAnLi4vcmVkdXgvZmVhdHVyZXMvYXV0aFNsaWNlJztcclxuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQgeyBnYXBpIH0gZnJvbSAnZ2FwaS1zY3JpcHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxufTtcclxuXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZm9ybVZhbHVlLCBzZXRGb3JtVmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvL2NvbnN0IHsgbG9hZGluZywgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+ICh7IC4uLnN0YXRlLmF1dGggfSkpO1xyXG5cclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBmb3JtVmFsdWU7XHJcblxyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICAvLyBwcm9kIC0+IDM5NDY5MDQxNDE2MC1zbzRibTYwaW1pM3VjM2tncWs2YjVraXYwYjBjZDRpcS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVxyXG5cclxuICAgIGNvbnN0IGRldkVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIjtcclxuXHJcbiAgICBjb25zdCBjbGllbnRJZCA9IGRldkVudlxyXG4gICAgICAgID8gJzM5NDY5MDQxNDE2MC1xcDE1M2pvZDlxa2JrMHRxNzhmMnYwc2JlYXU5ZmhiMy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcclxuICAgICAgICA6ICczOTQ2OTA0MTQxNjAtc280Ym02MGltaTN1YzNrZ3FrNmI1a2l2MGIwY2Q0aXEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgZXJyb3IgJiYgdG9hc3QuZXJyb3IoZXJyb3IpO1xyXG4gICAgLy8gfSwgW2Vycm9yXSk7XHJcblxyXG4gICAgZ2FwaS5sb2FkKFwiY2xpZW50OmF1dGgyXCIsICgpID0+IHtcclxuICAgICAgICBnYXBpLmNsaWVudC5pbml0KHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxyXG4gICAgICAgICAgICBwbHVnaW5fbmFtZTogXCJ0cmF2ZWxsaW5nXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgaWYgKGVtYWlsICYmIHBhc3N3b3JkKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGRpc3BhdGNoKGxvZ2luKHsgZm9ybVZhbHVlLCBuYXZpZ2F0ZSwgdG9hc3QgfSkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gY29uc3Qgb25JbnB1dENoYW5nZSA9IGUgPT4ge1xyXG4gICAgLy8gICAgIGxldCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIC8vICAgICBzZXRGb3JtVmFsdWUoeyAuLi5mb3JtVmFsdWUsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGdvb2dsZVN1Y2Nlc3MgPSByZXMgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGVtYWlsID0gcmVzPy5wcm9maWxlT2JqPy5lbWFpbDtcclxuICAgIC8vICAgICBjb25zdCBuYW1lID0gcmVzPy5wcm9maWxlT2JqPy5uYW1lO1xyXG4gICAgLy8gICAgIGNvbnN0IHRva2VuID0gcmVzPy50b2tlbklkO1xyXG4gICAgLy8gICAgIGNvbnN0IGdvb2dsZUlkID0gcmVzPy5nb29nbGVJZDtcclxuICAgIC8vICAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAvLyAgICAgICAgIGVtYWlsLFxyXG4gICAgLy8gICAgICAgICBuYW1lLFxyXG4gICAgLy8gICAgICAgICB0b2tlbixcclxuICAgIC8vICAgICAgICAgZ29vZ2xlSWQsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICAvLyBkaXNwYXRjaChnb29nbGVTaWduSW4oeyByZXN1bHQsIG5hdmlnYXRlLCB0b2FzdCB9KSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGdvb2dsZUZhaWx1cmUgPSBlcnIgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTVweCcsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzQ1MHB4JyxcclxuICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMjBweCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TURCQ2FyZCBhbGlnbm1lbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8TURCSWNvbiBmYXMgaWNvbj0ndXNlci1jaXJjbGUnIGNsYXNzTmFtZT0nZmEtMngnIC8+XHJcbiAgICAgICAgICAgICAgICA8aDU+U2lnbiBJbjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8TURCQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1EQlZhbGlkYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdyBnLTMnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1EQkJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TURCU3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9J3N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc9J3NwYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtZS0yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTURCQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L01EQlZhbGlkYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPXtjbGllbnRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsocmVuZGVyUHJvcHMpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgTURCQnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdkYW5nZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KHJlbmRlclByb3BzLm9uQ2xpY2spfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsocmVuZGVyUHJvcHMuZGlzYWJsZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWUtMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249J2dvb2dsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBTaWduIElOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25TdWNjZXNzPXtnb29nbGVTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkZhaWx1cmU9e2dvb2dsZUZhaWx1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTURCQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TURCQ2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgdG89Jy8nPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50ID8gU2lnbiBVcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDwvTURCQ2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgPC9NREJDYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1EQkNhcmQiLCJNREJDYXJkQm9keSIsIk1EQklucHV0IiwiTURCQ2FyZEZvb3RlciIsIk1EQlZhbGlkYXRpb24iLCJNREJCdG4iLCJNREJJY29uIiwiR29vZ2xlTG9naW4iLCJnYXBpIiwiaW5pdGlhbFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIkxvZ2luIiwiZm9ybVZhbHVlIiwic2V0Rm9ybVZhbHVlIiwiZGV2RW52IiwicHJvY2VzcyIsImNsaWVudElkIiwibG9hZCIsImNsaWVudCIsImluaXQiLCJwbHVnaW5fbmFtZSIsImRpdiIsInN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsIm1heFdpZHRoIiwiYWxpZ25Db250ZW50IiwibWFyZ2luVG9wIiwiYWxpZ25tZW50IiwiZmFzIiwiaWNvbiIsImNsYXNzTmFtZSIsImg1Iiwibm9WYWxpZGF0ZSIsImxhYmVsIiwidHlwZSIsInZhbHVlIiwibmFtZSIsInJlcXVpcmVkIiwid2lkdGgiLCJiciIsInJlbmRlciIsInJlbmRlclByb3BzIiwiY29sb3IiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJmYWIiLCJjb29raWVQb2xpY3kiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});