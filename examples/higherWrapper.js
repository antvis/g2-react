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
return webpackJsonpcreateG2([5],{

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

	var HigherChart = function (_Component) {
	  _inherits(HigherChart, _Component);

	  function HigherChart(props) {
	    _classCallCheck(this, HigherChart);

	    for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      others[_key - 1] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this, props].concat(others)));

	    _this.Chart = (0, _g2React2.default)(function (chart) {
	      _this.chart = chart;
	      chart.line().position('time*price').color('name').shape(props.shape).size(2);
	      chart.render();
	    });
	    return _this;
	  }

	  HigherChart.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.shape !== this.props.shape) {
	      this.chart.clear();
	      this.chart.line().position('time*price').color('name').shape(nextProps.shape).size(2);
	      this.chart.render();
	    }
	  };

	  HigherChart.prototype.render = function render() {
	    return _react2.default.createElement(this.Chart, this.props);
	  };

	  return HigherChart;
	}(_react.Component);

	var MyComponent = function (_Component2) {
	  _inherits(MyComponent, _Component2);

	  function MyComponent() {
	    var _temp, _this2, _ret;

	    _classCallCheck(this, MyComponent);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
	      shape: 'spline',
	      data: _data2.default.slice(0, _data2.default.length / 2 - 1),
	      width: 500,
	      height: 250,
	      plotCfg: {
	        margin: [10, 100, 50, 120]
	      }
	    }, _this2.changeHandler = function () {
	      _this2.setState({
	        shape: 'line'
	      });
	    }, _temp), _possibleConstructorReturn(_this2, _ret);
	  }

	  MyComponent.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(HigherChart, {
	        shape: this.state.shape,
	        data: this.state.data,
	        width: this.state.width,
	        height: this.state.height,
	        plotCfg: this.state.plotCfg
	      }),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.changeHandler },
	        'Change shape'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvaGlnaGVyV3JhcHBlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioqKiIsIndlYnBhY2s6Ly8vZXhhbXBsZXMvaGlnaGVyV3JhcHBlci5tZCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kYXRhLmpzb24/N2NkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjcmVhdGVHMlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjcmVhdGVHMlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsImltcG9ydCBjcmVhdGVHMiBmcm9tICdnMi1yZWFjdCc7XG5pbXBvcnQgeyBTdGF0IH0gZnJvbSAnZzInO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzb24nO1xuXG5jbGFzcyBIaWdoZXJDaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIC4uLm90aGVycykge1xuICAgIHN1cGVyKHByb3BzLCAuLi5vdGhlcnMpO1xuICAgIHRoaXMuQ2hhcnQgPSBjcmVhdGVHMihjaGFydCA9PiB7XG4gICAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ3RpbWUqcHJpY2UnKS5jb2xvcignbmFtZScpLnNoYXBlKHByb3BzLnNoYXBlKS5zaXplKDIpO1xuICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuc2hhcGUgIT09IHRoaXMucHJvcHMuc2hhcGUpIHtcbiAgICAgIHRoaXMuY2hhcnQuY2xlYXIoKTtcbiAgICAgIHRoaXMuY2hhcnQubGluZSgpLnBvc2l0aW9uKCd0aW1lKnByaWNlJykuY29sb3IoJ25hbWUnKS5zaGFwZShuZXh0UHJvcHMuc2hhcGUpLnNpemUoMik7XG4gICAgICB0aGlzLmNoYXJ0LnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDx0aGlzLkNoYXJ0IHsuLi50aGlzLnByb3BzfSAvPik7XG4gIH1cbn1cblxuY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzaGFwZTogJ3NwbGluZScsXG4gICAgZGF0YTogZGF0YS5zbGljZSgwLCBkYXRhLmxlbmd0aCAvIDIgLSAxKSxcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogMjUwLFxuICAgIHBsb3RDZmc6IHtcbiAgICAgIG1hcmdpbjogWzEwLCAxMDAsIDUwLCAxMjBdLFxuICAgIH0sXG4gIH1cbiAgY2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNoYXBlOiAnbGluZScsXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPEhpZ2hlckNoYXJ0XG4gICAgICAgIHNoYXBlPXt0aGlzLnN0YXRlLnNoYXBlfVxuICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgIHdpZHRoPXt0aGlzLnN0YXRlLndpZHRofVxuICAgICAgICBoZWlnaHQ9e3RoaXMuc3RhdGUuaGVpZ2h0fVxuICAgICAgICBwbG90Q2ZnPXt0aGlzLnN0YXRlLnBsb3RDZmd9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNoYW5nZUhhbmRsZXJ9PkNoYW5nZSBzaGFwZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8TXlDb21wb25lbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX3JlYWN0LWNvbnRlbnQnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZXhhbXBsZXMvaGlnaGVyV3JhcHBlci5tZFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gW3tcInRpbWVcIjpcIjkvMVwiLFwicHJpY2VcIjoxMCxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS8xXCIsXCJwcmljZVwiOjMwLFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzJcIixcInByaWNlXCI6MTIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMlwiLFwicHJpY2VcIjozMixcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS8zXCIsXCJwcmljZVwiOjExLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzNcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvNFwiLFwicHJpY2VcIjoxNSxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS80XCIsXCJwcmljZVwiOjQwLFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzVcIixcInByaWNlXCI6MjAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvNVwiLFwicHJpY2VcIjo0MixcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS82XCIsXCJwcmljZVwiOjIyLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzZcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvN1wiLFwicHJpY2VcIjoyMSxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS83XCIsXCJwcmljZVwiOjM2LFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzhcIixcInByaWNlXCI6MjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvOFwiLFwicHJpY2VcIjozMSxcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS85XCIsXCJwcmljZVwiOjMxLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzlcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTBcIixcInByaWNlXCI6MzIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTBcIixcInByaWNlXCI6MzYsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTFcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTFcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTJcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTJcIixcInByaWNlXCI6NDIsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTNcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTNcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTRcIixcInByaWNlXCI6NDEsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTRcIixcInByaWNlXCI6MzgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTVcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTVcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTZcIixcInByaWNlXCI6NTAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTZcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTdcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTdcIixcInByaWNlXCI6MzgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMThcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMThcIixcInByaWNlXCI6MzYsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTlcIixcInByaWNlXCI6NTAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTlcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjBcIixcInByaWNlXCI6NTEsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjBcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjFcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjFcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjJcIixcInByaWNlXCI6NjAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjJcIixcInByaWNlXCI6MjUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjNcIixcInByaWNlXCI6NjIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjNcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjRcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjRcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjVcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjVcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjZcIixcInByaWNlXCI6NTUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjZcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjdcIixcInByaWNlXCI6NTksXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjdcIixcInByaWNlXCI6MzIsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjhcIixcInByaWNlXCI6NTIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjhcIixcInByaWNlXCI6MzMsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjlcIixcInByaWNlXCI6NTMsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjlcIixcInByaWNlXCI6MzQsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMzBcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMzBcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMzFcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMzFcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9XVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9leGFtcGxlcy9kYXRhLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSA0IDVcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFEQTtBQUdBOzs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBVUE7QUFDQTs7OztBQUVBOzs7Ozs7O0FDM0RBOzs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9