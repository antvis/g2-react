(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["createG2"] = factory();
	else
		root["createG2"] = factory();
})(this, function() {
return webpackJsonpcreateG2([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _g2React = __webpack_require__(23);

	var _g2React2 = _interopRequireDefault(_g2React);

	var _g = __webpack_require__(13);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _data = __webpack_require__(38);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Line = (0, _g2React2.default)(function (chart) {
	  chart.line().position('time*price').color('name').shape('spline').size(2);
	  chart.render();
	});

	var MyComponent = function (_Component) {
	  _inherits(MyComponent, _Component);

	  function MyComponent() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, MyComponent);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	      data: _data2.default.slice(0, _data2.default.length / 2 - 1),
	      width: 500,
	      height: 250,
	      plotCfg: {
	        margin: [10, 100, 50, 120]
	      }
	    }, _this.changeHandler = function () {
	      _this.setState({
	        data: _data2.default.slice(_data2.default.length / 2, _data2.default.length - 1)
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  MyComponent.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(Line, {
	        data: this.state.data,
	        width: this.state.width,
	        height: this.state.height,
	        plotCfg: this.state.plotCfg
	      }),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.changeHandler },
	        'Change Data'
	      )
	    );
	  };

	  return MyComponent;
	}(_react.Component);

		_reactDom2.default.render(_react2.default.createElement(MyComponent, null), document.getElementById('__react-content'));

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = [{"time":"9/1","price":10,"name":"商品A"},{"time":"9/1","price":30,"name":"商品B"},{"time":"9/2","price":12,"name":"商品A"},{"time":"9/2","price":32,"name":"商品B"},{"time":"9/3","price":11,"name":"商品A"},{"time":"9/3","price":35,"name":"商品B"},{"time":"9/4","price":15,"name":"商品A"},{"time":"9/4","price":40,"name":"商品B"},{"time":"9/5","price":20,"name":"商品A"},{"time":"9/5","price":42,"name":"商品B"},{"time":"9/6","price":22,"name":"商品A"},{"time":"9/6","price":35,"name":"商品B"},{"time":"9/7","price":21,"name":"商品A"},{"time":"9/7","price":36,"name":"商品B"},{"time":"9/8","price":25,"name":"商品A"},{"time":"9/8","price":31,"name":"商品B"},{"time":"9/9","price":31,"name":"商品A"},{"time":"9/9","price":35,"name":"商品B"},{"time":"9/10","price":32,"name":"商品A"},{"time":"9/10","price":36,"name":"商品B"},{"time":"9/11","price":28,"name":"商品A"},{"time":"9/11","price":40,"name":"商品B"},{"time":"9/12","price":29,"name":"商品A"},{"time":"9/12","price":42,"name":"商品B"},{"time":"9/13","price":40,"name":"商品A"},{"time":"9/13","price":40,"name":"商品B"},{"time":"9/14","price":41,"name":"商品A"},{"time":"9/14","price":38,"name":"商品B"},{"time":"9/15","price":45,"name":"商品A"},{"time":"9/15","price":40,"name":"商品B"},{"time":"9/16","price":50,"name":"商品A"},{"time":"9/16","price":40,"name":"商品B"},{"time":"9/17","price":65,"name":"商品A"},{"time":"9/17","price":38,"name":"商品B"},{"time":"9/18","price":45,"name":"商品A"},{"time":"9/18","price":36,"name":"商品B"},{"time":"9/19","price":50,"name":"商品A"},{"time":"9/19","price":30,"name":"商品B"},{"time":"9/20","price":51,"name":"商品A"},{"time":"9/20","price":29,"name":"商品B"},{"time":"9/21","price":65,"name":"商品A"},{"time":"9/21","price":28,"name":"商品B"},{"time":"9/22","price":60,"name":"商品A"},{"time":"9/22","price":25,"name":"商品B"},{"time":"9/23","price":62,"name":"商品A"},{"time":"9/23","price":28,"name":"商品B"},{"time":"9/24","price":65,"name":"商品A"},{"time":"9/24","price":29,"name":"商品B"},{"time":"9/25","price":45,"name":"商品A"},{"time":"9/25","price":30,"name":"商品B"},{"time":"9/26","price":55,"name":"商品A"},{"time":"9/26","price":40,"name":"商品B"},{"time":"9/27","price":59,"name":"商品A"},{"time":"9/27","price":32,"name":"商品B"},{"time":"9/28","price":52,"name":"商品A"},{"time":"9/28","price":33,"name":"商品B"},{"time":"9/29","price":53,"name":"商品A"},{"time":"9/29","price":34,"name":"商品B"},{"time":"9/30","price":40,"name":"商品A"},{"time":"9/30","price":30,"name":"商品B"},{"time":"9/31","price":45,"name":"商品A"},{"time":"9/31","price":35,"name":"商品B"}]

/***/ }

})
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbGluZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqIiwid2VicGFjazovLy9leGFtcGxlcy9saW5lLm1kIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2RhdGEuanNvbiJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjcmVhdGVHMlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjcmVhdGVHMlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsImltcG9ydCBjcmVhdGVHMiBmcm9tICdnMi1yZWFjdCc7XG5pbXBvcnQgeyBTdGF0IH0gZnJvbSAnZzInO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzb24nO1xuXG5jb25zdCBMaW5lID0gY3JlYXRlRzIoY2hhcnQgPT4ge1xuICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3RpbWUqcHJpY2UnKS5jb2xvcignbmFtZScpLnNoYXBlKCdzcGxpbmUnKS5zaXplKDIpO1xuICBjaGFydC5yZW5kZXIoKTtcbn0pO1xuXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRhdGE6IGRhdGEuc2xpY2UoMCwgZGF0YS5sZW5ndGggLyAyIC0gMSksXG4gICAgd2lkdGg6IDUwMCxcbiAgICBoZWlnaHQ6IDI1MCxcbiAgICBwbG90Q2ZnOiB7XG4gICAgICBtYXJnaW46IFsxMCwgMTAwLCA1MCwgMTIwXSxcbiAgICB9LFxuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGRhdGEuc2xpY2UoZGF0YS5sZW5ndGggLyAyLCBkYXRhLmxlbmd0aCAtIDEpLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluZVxuICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICB3aWR0aD17dGhpcy5zdGF0ZS53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e3RoaXMuc3RhdGUuaGVpZ2h0fVxuICAgICAgICAgIHBsb3RDZmc9e3RoaXMuc3RhdGUucGxvdENmZ31cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNoYW5nZUhhbmRsZXJ9PkNoYW5nZSBEYXRhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8TXlDb21wb25lbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvbGluZS5tZFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gW3tcInRpbWVcIjpcIjkvMVwiLFwicHJpY2VcIjoxMCxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS8xXCIsXCJwcmljZVwiOjMwLFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzJcIixcInByaWNlXCI6MTIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMlwiLFwicHJpY2VcIjozMixcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS8zXCIsXCJwcmljZVwiOjExLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzNcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvNFwiLFwicHJpY2VcIjoxNSxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS80XCIsXCJwcmljZVwiOjQwLFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzVcIixcInByaWNlXCI6MjAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvNVwiLFwicHJpY2VcIjo0MixcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS82XCIsXCJwcmljZVwiOjIyLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzZcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvN1wiLFwicHJpY2VcIjoyMSxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS83XCIsXCJwcmljZVwiOjM2LFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzhcIixcInByaWNlXCI6MjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvOFwiLFwicHJpY2VcIjozMSxcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS85XCIsXCJwcmljZVwiOjMxLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzlcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTBcIixcInByaWNlXCI6MzIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTBcIixcInByaWNlXCI6MzYsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTFcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTFcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTJcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTJcIixcInByaWNlXCI6NDIsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTNcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTNcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTRcIixcInByaWNlXCI6NDEsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTRcIixcInByaWNlXCI6MzgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTVcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTVcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTZcIixcInByaWNlXCI6NTAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTZcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTdcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTdcIixcInByaWNlXCI6MzgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMThcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMThcIixcInByaWNlXCI6MzYsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTlcIixcInByaWNlXCI6NTAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTlcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjBcIixcInByaWNlXCI6NTEsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjBcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjFcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjFcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjJcIixcInByaWNlXCI6NjAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjJcIixcInByaWNlXCI6MjUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjNcIixcInByaWNlXCI6NjIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjNcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjRcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjRcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjVcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjVcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjZcIixcInByaWNlXCI6NTUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjZcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjdcIixcInByaWNlXCI6NTksXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjdcIixcInByaWNlXCI6MzIsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjhcIixcInByaWNlXCI6NTIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjhcIixcInByaWNlXCI6MzMsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjlcIixcInByaWNlXCI6NTMsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjlcIixcInByaWNlXCI6MzQsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMzBcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMzBcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMzFcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMzFcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9XVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9leGFtcGxlcy9kYXRhLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSA0IDVcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7Ozs7QUFFQTs7Ozs7OztBQzFDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==