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
return webpackJsonpcreateG2([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _g2React = __webpack_require__(36);

	var _g2React2 = _interopRequireDefault(_g2React);

	var _g = __webpack_require__(15);

	var _react = __webpack_require__(24);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _data = __webpack_require__(56);

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

/***/ 56:
/***/ function(module, exports) {

	module.exports = [
		{
			"time": "9/1",
			"price": 10,
			"name": "商品A"
		},
		{
			"time": "9/1",
			"price": 30,
			"name": "商品B"
		},
		{
			"time": "9/2",
			"price": 12,
			"name": "商品A"
		},
		{
			"time": "9/2",
			"price": 32,
			"name": "商品B"
		},
		{
			"time": "9/3",
			"price": 11,
			"name": "商品A"
		},
		{
			"time": "9/3",
			"price": 35,
			"name": "商品B"
		},
		{
			"time": "9/4",
			"price": 15,
			"name": "商品A"
		},
		{
			"time": "9/4",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/5",
			"price": 20,
			"name": "商品A"
		},
		{
			"time": "9/5",
			"price": 42,
			"name": "商品B"
		},
		{
			"time": "9/6",
			"price": 22,
			"name": "商品A"
		},
		{
			"time": "9/6",
			"price": 35,
			"name": "商品B"
		},
		{
			"time": "9/7",
			"price": 21,
			"name": "商品A"
		},
		{
			"time": "9/7",
			"price": 36,
			"name": "商品B"
		},
		{
			"time": "9/8",
			"price": 25,
			"name": "商品A"
		},
		{
			"time": "9/8",
			"price": 31,
			"name": "商品B"
		},
		{
			"time": "9/9",
			"price": 31,
			"name": "商品A"
		},
		{
			"time": "9/9",
			"price": 35,
			"name": "商品B"
		},
		{
			"time": "9/10",
			"price": 32,
			"name": "商品A"
		},
		{
			"time": "9/10",
			"price": 36,
			"name": "商品B"
		},
		{
			"time": "9/11",
			"price": 28,
			"name": "商品A"
		},
		{
			"time": "9/11",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/12",
			"price": 29,
			"name": "商品A"
		},
		{
			"time": "9/12",
			"price": 42,
			"name": "商品B"
		},
		{
			"time": "9/13",
			"price": 40,
			"name": "商品A"
		},
		{
			"time": "9/13",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/14",
			"price": 41,
			"name": "商品A"
		},
		{
			"time": "9/14",
			"price": 38,
			"name": "商品B"
		},
		{
			"time": "9/15",
			"price": 45,
			"name": "商品A"
		},
		{
			"time": "9/15",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/16",
			"price": 50,
			"name": "商品A"
		},
		{
			"time": "9/16",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/17",
			"price": 65,
			"name": "商品A"
		},
		{
			"time": "9/17",
			"price": 38,
			"name": "商品B"
		},
		{
			"time": "9/18",
			"price": 45,
			"name": "商品A"
		},
		{
			"time": "9/18",
			"price": 36,
			"name": "商品B"
		},
		{
			"time": "9/19",
			"price": 50,
			"name": "商品A"
		},
		{
			"time": "9/19",
			"price": 30,
			"name": "商品B"
		},
		{
			"time": "9/20",
			"price": 51,
			"name": "商品A"
		},
		{
			"time": "9/20",
			"price": 29,
			"name": "商品B"
		},
		{
			"time": "9/21",
			"price": 65,
			"name": "商品A"
		},
		{
			"time": "9/21",
			"price": 28,
			"name": "商品B"
		},
		{
			"time": "9/22",
			"price": 60,
			"name": "商品A"
		},
		{
			"time": "9/22",
			"price": 25,
			"name": "商品B"
		},
		{
			"time": "9/23",
			"price": 62,
			"name": "商品A"
		},
		{
			"time": "9/23",
			"price": 28,
			"name": "商品B"
		},
		{
			"time": "9/24",
			"price": 65,
			"name": "商品A"
		},
		{
			"time": "9/24",
			"price": 29,
			"name": "商品B"
		},
		{
			"time": "9/25",
			"price": 45,
			"name": "商品A"
		},
		{
			"time": "9/25",
			"price": 30,
			"name": "商品B"
		},
		{
			"time": "9/26",
			"price": 55,
			"name": "商品A"
		},
		{
			"time": "9/26",
			"price": 40,
			"name": "商品B"
		},
		{
			"time": "9/27",
			"price": 59,
			"name": "商品A"
		},
		{
			"time": "9/27",
			"price": 32,
			"name": "商品B"
		},
		{
			"time": "9/28",
			"price": 52,
			"name": "商品A"
		},
		{
			"time": "9/28",
			"price": 33,
			"name": "商品B"
		},
		{
			"time": "9/29",
			"price": 53,
			"name": "商品A"
		},
		{
			"time": "9/29",
			"price": 34,
			"name": "商品B"
		},
		{
			"time": "9/30",
			"price": 40,
			"name": "商品A"
		},
		{
			"time": "9/30",
			"price": 30,
			"name": "商品B"
		},
		{
			"time": "9/31",
			"price": 45,
			"name": "商品A"
		},
		{
			"time": "9/31",
			"price": 35,
			"name": "商品B"
		}
	];

/***/ }

})
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbGluZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24/NWNhNioiLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2xpbmUubWQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZGF0YS5qc29uIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNyZWF0ZUcyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNyZWF0ZUcyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiaW1wb3J0IGNyZWF0ZUcyIGZyb20gJ2cyLXJlYWN0JztcbmltcG9ydCB7IFN0YXQgfSBmcm9tICdnMic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEuanNvbic7XG5cbmNvbnN0IExpbmUgPSBjcmVhdGVHMihjaGFydCA9PiB7XG4gIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigndGltZSpwcmljZScpLmNvbG9yKCduYW1lJykuc2hhcGUoJ3NwbGluZScpLnNpemUoMik7XG4gIGNoYXJ0LnJlbmRlcigpO1xufSk7XG5cbmNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGF0YTogZGF0YS5zbGljZSgwLCBkYXRhLmxlbmd0aCAvIDIgLSAxKSxcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogMjUwLFxuICAgIHBsb3RDZmc6IHtcbiAgICAgIG1hcmdpbjogWzEwLCAxMDAsIDUwLCAxMjBdLFxuICAgIH0sXG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogZGF0YS5zbGljZShkYXRhLmxlbmd0aCAvIDIsIGRhdGEubGVuZ3RoIC0gMSksXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5lXG4gICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgIHdpZHRoPXt0aGlzLnN0YXRlLndpZHRofVxuICAgICAgICAgIGhlaWdodD17dGhpcy5zdGF0ZS5oZWlnaHR9XG4gICAgICAgICAgcGxvdENmZz17dGhpcy5zdGF0ZS5wbG90Q2ZnfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2hhbmdlSGFuZGxlcn0+Q2hhbmdlIERhdGE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxNeUNvbXBvbmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fcmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9saW5lLm1kXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzFcIixcblx0XHRcInByaWNlXCI6IDEwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xXCIsXG5cdFx0XCJwcmljZVwiOiAzMCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMlwiLFxuXHRcdFwicHJpY2VcIjogMTIsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzJcIixcblx0XHRcInByaWNlXCI6IDMyLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8zXCIsXG5cdFx0XCJwcmljZVwiOiAxMSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvM1wiLFxuXHRcdFwicHJpY2VcIjogMzUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzRcIixcblx0XHRcInByaWNlXCI6IDE1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS80XCIsXG5cdFx0XCJwcmljZVwiOiA0MCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvNVwiLFxuXHRcdFwicHJpY2VcIjogMjAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzVcIixcblx0XHRcInByaWNlXCI6IDQyLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS82XCIsXG5cdFx0XCJwcmljZVwiOiAyMixcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvNlwiLFxuXHRcdFwicHJpY2VcIjogMzUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzdcIixcblx0XHRcInByaWNlXCI6IDIxLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS83XCIsXG5cdFx0XCJwcmljZVwiOiAzNixcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvOFwiLFxuXHRcdFwicHJpY2VcIjogMjUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzhcIixcblx0XHRcInByaWNlXCI6IDMxLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS85XCIsXG5cdFx0XCJwcmljZVwiOiAzMSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvOVwiLFxuXHRcdFwicHJpY2VcIjogMzUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzEwXCIsXG5cdFx0XCJwcmljZVwiOiAzMixcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTBcIixcblx0XHRcInByaWNlXCI6IDM2LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xMVwiLFxuXHRcdFwicHJpY2VcIjogMjgsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzExXCIsXG5cdFx0XCJwcmljZVwiOiA0MCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTJcIixcblx0XHRcInByaWNlXCI6IDI5LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xMlwiLFxuXHRcdFwicHJpY2VcIjogNDIsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzEzXCIsXG5cdFx0XCJwcmljZVwiOiA0MCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTNcIixcblx0XHRcInByaWNlXCI6IDQwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xNFwiLFxuXHRcdFwicHJpY2VcIjogNDEsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzE0XCIsXG5cdFx0XCJwcmljZVwiOiAzOCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTVcIixcblx0XHRcInByaWNlXCI6IDQ1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xNVwiLFxuXHRcdFwicHJpY2VcIjogNDAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzE2XCIsXG5cdFx0XCJwcmljZVwiOiA1MCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTZcIixcblx0XHRcInByaWNlXCI6IDQwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xN1wiLFxuXHRcdFwicHJpY2VcIjogNjUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzE3XCIsXG5cdFx0XCJwcmljZVwiOiAzOCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMThcIixcblx0XHRcInByaWNlXCI6IDQ1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8xOFwiLFxuXHRcdFwicHJpY2VcIjogMzYsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzE5XCIsXG5cdFx0XCJwcmljZVwiOiA1MCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMTlcIixcblx0XHRcInByaWNlXCI6IDMwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yMFwiLFxuXHRcdFwicHJpY2VcIjogNTEsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzIwXCIsXG5cdFx0XCJwcmljZVwiOiAyOSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjFcIixcblx0XHRcInByaWNlXCI6IDY1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yMVwiLFxuXHRcdFwicHJpY2VcIjogMjgsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzIyXCIsXG5cdFx0XCJwcmljZVwiOiA2MCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjJcIixcblx0XHRcInByaWNlXCI6IDI1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yM1wiLFxuXHRcdFwicHJpY2VcIjogNjIsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzIzXCIsXG5cdFx0XCJwcmljZVwiOiAyOCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjRcIixcblx0XHRcInByaWNlXCI6IDY1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yNFwiLFxuXHRcdFwicHJpY2VcIjogMjksXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzI1XCIsXG5cdFx0XCJwcmljZVwiOiA0NSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjVcIixcblx0XHRcInByaWNlXCI6IDMwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yNlwiLFxuXHRcdFwicHJpY2VcIjogNTUsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzI2XCIsXG5cdFx0XCJwcmljZVwiOiA0MCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjdcIixcblx0XHRcInByaWNlXCI6IDU5LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yN1wiLFxuXHRcdFwicHJpY2VcIjogMzIsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzI4XCIsXG5cdFx0XCJwcmljZVwiOiA1Mixcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMjhcIixcblx0XHRcInByaWNlXCI6IDMzLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8yOVwiLFxuXHRcdFwicHJpY2VcIjogNTMsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQVwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzI5XCIsXG5cdFx0XCJwcmljZVwiOiAzNCxcblx0XHRcIm5hbWVcIjogXCLllYblk4FCXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMzBcIixcblx0XHRcInByaWNlXCI6IDQwLFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUFcIlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiOS8zMFwiLFxuXHRcdFwicHJpY2VcIjogMzAsXG5cdFx0XCJuYW1lXCI6IFwi5ZWG5ZOBQlwiXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCI5LzMxXCIsXG5cdFx0XCJwcmljZVwiOiA0NSxcblx0XHRcIm5hbWVcIjogXCLllYblk4FBXCJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjkvMzFcIixcblx0XHRcInByaWNlXCI6IDM1LFxuXHRcdFwibmFtZVwiOiBcIuWVhuWTgUJcIlxuXHR9XG5dO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9leGFtcGxlcy9kYXRhLmpzb25cbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAzIDRcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7Ozs7QUFFQTs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=