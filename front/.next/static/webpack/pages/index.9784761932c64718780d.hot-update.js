webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostRoutes.js":
/*!**********************************!*\
  !*** ./components/PostRoutes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\leeoo\\Desktop\\teamProject\\front\\components\\PostRoutes.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostRoutes = function PostRoutes(_ref) {
  _s();

  var schedules = _ref.schedules;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Segmented"], {
    size: "small",
    options: [{
      label: __jsx("div", {
        style: {
          padding: 1,
          fontSize: '10px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }
      }, "1\uC77C\uCC28"), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }
      }, "07/23 \uD1A0")),
      value: '1일차'
    }, {
      label: __jsx("div", {
        style: {
          padding: 1,
          fontSize: '10px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }, "2\uC77C\uCC28"), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }, "07/24 \uC77C")),
      value: '2일차'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "\uC5D0\uBC84\uB79C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Timeline"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "\uB86F\uB370\uC6D4\uB4DC")));
};

_s(PostRoutes, "xZ+WVc/D16Fmvriq1CwZMW/wLmE=");

_c = PostRoutes;
PostRoutes.propTypes = {
  numberOfTrip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  TripDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostRoutes);

var _c;

$RefreshReg$(_c, "PostRoutes");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Um91dGVzLmpzIl0sIm5hbWVzIjpbIlBvc3RSb3V0ZXMiLCJzY2hlZHVsZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsIm9uQ2xvc2UiLCJsYWJlbCIsInBhZGRpbmciLCJmb250U2l6ZSIsInZhbHVlIiwicHJvcFR5cGVzIiwibnVtYmVyT2ZUcmlwIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIlRyaXBEYXRlcyIsImFycmF5T2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQjtFQUFBOztFQUFBLElBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0VBQ2xDLGdCQUE0Q0Msc0RBQVEsQ0FBQyxLQUFELENBQXBEO0VBQUEsSUFBT0MsY0FBUDtFQUFBLElBQXVCQyxpQkFBdkI7O0VBRUEsSUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDN0JGLGlCQUFpQixDQUFDLElBQUQsQ0FBakI7RUFDSCxDQUZ5QixFQUV2QixFQUZ1QixDQUExQjtFQUlBLElBQU1HLE9BQU8sR0FBR0QseURBQVcsQ0FBQyxZQUFNO0lBQzlCRixpQkFBaUIsQ0FBQyxLQUFELENBQWpCO0VBQ0gsQ0FGMEIsRUFFeEIsRUFGd0IsQ0FBM0I7RUFJQSxPQUNJLG1FQUNBLE1BQUMsOENBQUQ7SUFBVyxJQUFJLEVBQUMsT0FBaEI7SUFDRixPQUFPLEVBQUUsQ0FDUDtNQUNFSSxLQUFLLEVBQ0g7UUFBSyxLQUFLLEVBQUU7VUFBRUMsT0FBTyxFQUFFLENBQVg7VUFBY0MsUUFBUSxFQUFFO1FBQXhCLENBQVo7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsbUJBREYsRUFFRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLGtCQUZGLENBRko7TUFPRUMsS0FBSyxFQUFFO0lBUFQsQ0FETyxFQVVQO01BQ0VILEtBQUssRUFDSDtRQUFLLEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUUsQ0FBWDtVQUFjQyxRQUFRLEVBQUU7UUFBeEIsQ0FBWjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0U7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxtQkFERixFQUVFO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsa0JBRkYsQ0FGSjtNQU9FQyxLQUFLLEVBQUU7SUFQVCxDQVZPLENBRFA7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURBLEVBdUJKLE1BQUMsNkNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsNkNBQUQsQ0FBVSxJQUFWO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBREYsRUFFRSxNQUFDLDZDQUFELENBQVUsSUFBVjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUZGLENBdkJJLENBREo7QUE4QkgsQ0F6Q0Q7O0dBQU1YLFU7O0tBQUFBLFU7QUEyQ05BLFVBQVUsQ0FBQ1ksU0FBWCxHQUF1QjtFQUNuQkMsWUFBWSxFQUFFQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURaO0VBRW5CQyxTQUFTLEVBQUVILGlEQUFTLENBQUNJLE9BQVYsQ0FBa0JKLGlEQUFTLENBQUNLLE1BQTVCO0FBRlEsQ0FBdkI7QUFLZW5CLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk3ODQ3NjE5MzJjNjQ3MTg3ODBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBTZWdtZW50ZWQsIFRpbWVsaW5lIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5cclxuY29uc3QgUG9zdFJvdXRlcyA9ICh7IHNjaGVkdWxlcyB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8U2VnbWVudGVkIHNpemU9J3NtYWxsJ1xyXG4gICAgICBvcHRpb25zPXtbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxLCBmb250U2l6ZTogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxkaXY+MeydvOywqDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+MDcvMjMg7YagPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIHZhbHVlOiAnMeydvOywqCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEsIGZvbnRTaXplOiAnMTBweCd9fT5cclxuICAgICAgICAgICAgICA8ZGl2PjLsnbzssKg8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjA3LzI0IOydvDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICB2YWx1ZTogJzLsnbzssKgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF19XHJcbiAgICAvPlxyXG4gICAgPFRpbWVsaW5lPlxyXG4gICAgICA8VGltZWxpbmUuSXRlbT7sl5DrsoTrnpzrk5w8L1RpbWVsaW5lLkl0ZW0+XHJcbiAgICAgIDxUaW1lbGluZS5JdGVtPuuhr+uNsOyblOuTnDwvVGltZWxpbmUuSXRlbT5cclxuICAgIDwvVGltZWxpbmU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5Qb3N0Um91dGVzLnByb3BUeXBlcyA9IHtcclxuICAgIG51bWJlck9mVHJpcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgVHJpcERhdGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFJvdXRlczsiXSwic291cmNlUm9vdCI6IiJ9