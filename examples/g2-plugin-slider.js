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
return webpackJsonpcreateG2([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _g2React = __webpack_require__(36);

	var _g2React2 = _interopRequireDefault(_g2React);

	var _g = __webpack_require__(15);

	var _g2 = _interopRequireDefault(_g);

	__webpack_require__(168);

	var _react = __webpack_require__(24);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _candleSticks = __webpack_require__(152);

	var _candleSticks2 = _interopRequireDefault(_candleSticks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var MyComponent = function (_Component) {
	  _inherits(MyComponent, _Component);

	  function MyComponent(props) {
	    _classCallCheck(this, MyComponent);

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this, props].concat(args)));

	    var frame = new _g.Frame(_candleSticks2.default);
	    frame.addCol('trend', function (obj) {
	      return obj.start <= obj.end ? 0 : 1;
	    });

	    var Chart = (0, _g2React2.default)(function (chart) {
	      chart.source(frame, {
	        'trend': {
	          type: 'cat',
	          alias: '趋势',
	          values: ['上涨', '下跌']
	        },
	        'time': {
	          type: 'timeCat',
	          nice: false,
	          mask: 'mm-dd',
	          alias: '时间',
	          tickCount: 10,
	          range: [0, 1]
	        },
	        'volumn': {
	          alias: '成交量'
	        },
	        'start': {
	          alias: '开盘价'
	        },
	        'end': {
	          alias: '收盘价'
	        },
	        'max': {
	          alias: '最高价'
	        },
	        'min': {
	          alias: '最低价'
	        },
	        'start+end+max+min': {
	          alias: '股票价格'
	        }
	      });
	      chart.axis('time', {
	        title: null
	      });
	      chart.schema().position('time*(start+end+max+min)').color('trend', ['#2AF483', '#F80041']).shape('candle').tooltip('start*end*max*min*volumn');

	      // 创建滑动条
	      var slider = new _g.Plugin.slider({
	        domId: 'range',
	        width: 500,
	        height: 30,
	        charts: chart,
	        xDim: 'time',
	        yDim: 'max'
	      });
	      slider.render();
	    });
	    _this.state = {
	      data: _candleSticks2.default,
	      width: 500,
	      height: 250,
	      plotCfg: {
	        margin: [30, 120, 30],
	        background: {
	          fill: '#191821'
	        }
	      },
	      Chart: Chart
	    };
	    return _this;
	  }

	  MyComponent.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(this.state.Chart, { data: this.state.data, width: this.state.width, height: this.state.height, plotCfg: this.state.plotCfg, ref: 'myChart' }),
	      _react2.default.createElement('div', { id: 'range' })
	    );
	  };

	  return MyComponent;
	}(_react.Component);

		_reactDom2.default.render(_react2.default.createElement(MyComponent, null), document.getElementById('__react-content'));

/***/ },

/***/ 152:
/***/ function(module, exports) {

	module.exports = [
		{
			"time": "2015-11-19",
			"start": 8.18,
			"max": 8.33,
			"min": 7.98,
			"end": 8.32,
			"volumn": 1810,
			"money": 14723.56
		},
		{
			"time": "2015-11-18",
			"start": 8.37,
			"max": 8.6,
			"min": 8.03,
			"end": 8.09,
			"volumn": 2790.37,
			"money": 23309.19
		},
		{
			"time": "2015-11-17",
			"start": 8.7,
			"max": 8.78,
			"min": 8.32,
			"end": 8.37,
			"volumn": 3729.04,
			"money": 31709.71
		},
		{
			"time": "2015-11-16",
			"start": 8.18,
			"max": 8.69,
			"min": 8.05,
			"end": 8.62,
			"volumn": 3095.44,
			"money": 26100.69
		},
		{
			"time": "2015-11-13",
			"start": 8.01,
			"max": 8.75,
			"min": 7.97,
			"end": 8.41,
			"volumn": 5815.58,
			"money": 48562.37
		},
		{
			"time": "2015-11-12",
			"start": 7.76,
			"max": 8.18,
			"min": 7.61,
			"end": 8.15,
			"volumn": 4742.6,
			"money": 37565.36
		},
		{
			"time": "2015-11-11",
			"start": 7.55,
			"max": 7.81,
			"min": 7.49,
			"end": 7.8,
			"volumn": 3133.82,
			"money": 24065.42
		},
		{
			"time": "2015-11-10",
			"start": 7.5,
			"max": 7.68,
			"min": 7.44,
			"end": 7.57,
			"volumn": 2670.35,
			"money": 20210.58
		},
		{
			"time": "2015-11-09",
			"start": 7.65,
			"max": 7.66,
			"min": 7.3,
			"end": 7.58,
			"volumn": 2841.79,
			"money": 21344.36
		},
		{
			"time": "2015-11-06",
			"start": 7.52,
			"max": 7.71,
			"min": 7.48,
			"end": 7.64,
			"volumn": 2725.44,
			"money": 20721.51
		},
		{
			"time": "2015-11-05",
			"start": 7.48,
			"max": 7.57,
			"min": 7.29,
			"end": 7.48,
			"volumn": 3520.85,
			"money": 26140.83
		},
		{
			"time": "2015-11-04",
			"start": 7.01,
			"max": 7.5,
			"min": 7.01,
			"end": 7.46,
			"volumn": 3591.47,
			"money": 26285.52
		},
		{
			"time": "2015-11-03",
			"start": 7.1,
			"max": 7.17,
			"min": 6.82,
			"end": 7,
			"volumn": 2029.21,
			"money": 14202.33
		},
		{
			"time": "2015-11-02",
			"start": 7.09,
			"max": 7.44,
			"min": 6.93,
			"end": 7.17,
			"volumn": 3191.31,
			"money": 23205.11
		},
		{
			"time": "2015-10-30",
			"start": 6.98,
			"max": 7.27,
			"min": 6.84,
			"end": 7.18,
			"volumn": 3522.61,
			"money": 25083.44
		},
		{
			"time": "2015-10-29",
			"start": 6.94,
			"max": 7.2,
			"min": 6.8,
			"end": 7.05,
			"volumn": 2752.27,
			"money": 19328.44
		},
		{
			"time": "2015-10-28",
			"start": 7.01,
			"max": 7.14,
			"min": 6.8,
			"end": 6.85,
			"volumn": 2311.11,
			"money": 16137.32
		},
		{
			"time": "2015-10-27",
			"start": 6.91,
			"max": 7.31,
			"min": 6.48,
			"end": 7.18,
			"volumn": 3172.9,
			"money": 21827.3
		},
		{
			"time": "2015-10-26",
			"start": 6.9,
			"max": 7.08,
			"min": 6.87,
			"end": 6.95,
			"volumn": 2769.31,
			"money": 19337.44
		},
		{
			"time": "2015-10-23",
			"start": 6.71,
			"max": 6.85,
			"min": 6.58,
			"end": 6.79,
			"volumn": 2483.18,
			"money": 16714.31
		},
		{
			"time": "2015-10-22",
			"start": 6.38,
			"max": 6.67,
			"min": 6.34,
			"end": 6.65,
			"volumn": 2225.88,
			"money": 14465.56
		},
		{
			"time": "2015-10-21",
			"start": 7.08,
			"max": 7.1,
			"min": 6.41,
			"end": 6.41,
			"volumn": 2891.47,
			"money": 19585.98
		},
		{
			"time": "2015-10-20",
			"start": 6.88,
			"max": 7.19,
			"min": 6.85,
			"end": 7.12,
			"volumn": 2389.62,
			"money": 16813.58
		},
		{
			"time": "2015-10-19",
			"start": 7.1,
			"max": 7.14,
			"min": 6.8,
			"end": 6.94,
			"volumn": 2786.61,
			"money": 19474.72
		},
		{
			"time": "2015-10-16",
			"start": 6.92,
			"max": 7.38,
			"min": 6.73,
			"end": 7.15,
			"volumn": 3289.27,
			"money": 22963.97
		},
		{
			"time": "2015-10-15",
			"start": 6.63,
			"max": 6.9,
			"min": 6.6,
			"end": 6.89,
			"volumn": 2440.37,
			"money": 16575.84
		},
		{
			"time": "2015-10-14",
			"start": 6.7,
			"max": 6.99,
			"min": 6.61,
			"end": 6.66,
			"volumn": 2496.38,
			"money": 16858.28
		},
		{
			"time": "2015-10-13",
			"start": 6.55,
			"max": 6.81,
			"min": 6.55,
			"end": 6.75,
			"volumn": 2299.83,
			"money": 15338.24
		},
		{
			"time": "2015-10-12",
			"start": 6.29,
			"max": 6.89,
			"min": 6.29,
			"end": 6.69,
			"volumn": 3147.58,
			"money": 20738.35
		},
		{
			"time": "2015-10-09",
			"start": 6.1,
			"max": 6.44,
			"min": 6.08,
			"end": 6.34,
			"volumn": 2664.04,
			"money": 16811.14
		},
		{
			"time": "2015-10-08",
			"start": 6.11,
			"max": 6.28,
			"min": 6,
			"end": 6.12,
			"volumn": 2197.23,
			"money": 13440.92
		},
		{
			"time": "2015-09-30",
			"start": 5.93,
			"max": 6.12,
			"min": 5.81,
			"end": 5.83,
			"volumn": 1459.64,
			"money": 8659.52
		},
		{
			"time": "2015-09-29",
			"start": 5.96,
			"max": 5.98,
			"min": 5.73,
			"end": 5.83,
			"volumn": 1047.42,
			"money": 6132.72
		},
		{
			"time": "2015-09-28",
			"start": 5.86,
			"max": 6.13,
			"min": 5.85,
			"end": 6.07,
			"volumn": 952.45,
			"money": 5717.33
		},
		{
			"time": "2015-09-25",
			"start": 6.23,
			"max": 6.28,
			"min": 5.85,
			"end": 5.96,
			"volumn": 1395.27,
			"money": 8465.95
		},
		{
			"time": "2015-09-24",
			"start": 6.16,
			"max": 6.32,
			"min": 6.1,
			"end": 6.27,
			"volumn": 1434.38,
			"money": 8920.88
		},
		{
			"time": "2015-09-23",
			"start": 6.18,
			"max": 6.32,
			"min": 6.02,
			"end": 6.12,
			"volumn": 1558.54,
			"money": 9631.38
		},
		{
			"time": "2015-09-22",
			"start": 6.35,
			"max": 6.4,
			"min": 6.15,
			"end": 6.25,
			"volumn": 1893.83,
			"money": 11901.51
		},
		{
			"time": "2015-09-21",
			"start": 5.83,
			"max": 6.32,
			"min": 5.83,
			"end": 6.31,
			"volumn": 1748.35,
			"money": 10807.66
		},
		{
			"time": "2015-09-18",
			"start": 6,
			"max": 6.1,
			"min": 5.81,
			"end": 6.02,
			"volumn": 1507.09,
			"money": 8999.44
		},
		{
			"time": "2015-09-17",
			"start": 6.1,
			"max": 6.34,
			"min": 5.8,
			"end": 5.83,
			"volumn": 2135.64,
			"money": 13039.56
		},
		{
			"time": "2015-09-16",
			"start": 5.58,
			"max": 6.07,
			"min": 5.4,
			"end": 6.07,
			"volumn": 1758.57,
			"money": 10132.25
		},
		{
			"time": "2015-09-15",
			"start": 5.81,
			"max": 6.09,
			"min": 5.52,
			"end": 5.52,
			"volumn": 1617.12,
			"money": 9248.69
		},
		{
			"time": "2015-09-14",
			"start": 6.98,
			"max": 7.06,
			"min": 6.13,
			"end": 6.13,
			"volumn": 1982.9,
			"money": 12989.01
		},
		{
			"time": "2015-09-11",
			"start": 6.87,
			"max": 7.01,
			"min": 6.68,
			"end": 6.81,
			"volumn": 1371.77,
			"money": 9370.49
		},
		{
			"time": "2015-09-10",
			"start": 6.7,
			"max": 7.17,
			"min": 6.65,
			"end": 6.86,
			"volumn": 2181.33,
			"money": 15169.4
		},
		{
			"time": "2015-09-09",
			"start": 6.76,
			"max": 7.03,
			"min": 6.65,
			"end": 6.93,
			"volumn": 2105.28,
			"money": 14426.76
		},
		{
			"time": "2015-09-08",
			"start": 6.26,
			"max": 6.7,
			"min": 6.01,
			"end": 6.64,
			"volumn": 1506.53,
			"money": 9556.54
		},
		{
			"time": "2015-09-07",
			"start": 6.19,
			"max": 6.45,
			"min": 6.09,
			"end": 6.2,
			"volumn": 1605.85,
			"money": 10091.26
		},
		{
			"time": "2015-09-02",
			"start": 6.2,
			"max": 6.84,
			"min": 5.98,
			"end": 5.99,
			"volumn": 1934.95,
			"money": 12225.68
		},
		{
			"time": "2015-09-01",
			"start": 7.22,
			"max": 7.28,
			"min": 6.64,
			"end": 6.64,
			"volumn": 2645.87,
			"money": 18017.91
		},
		{
			"time": "2015-08-31",
			"start": 7.83,
			"max": 8,
			"min": 7.35,
			"end": 7.38,
			"volumn": 2984.03,
			"money": 23031.24
		},
		{
			"time": "2015-08-28",
			"start": 7.3,
			"max": 7.77,
			"min": 7.1,
			"end": 7.77,
			"volumn": 3092.6,
			"money": 23121.49
		},
		{
			"time": "2015-08-27",
			"start": 6.75,
			"max": 7.1,
			"min": 6.43,
			"end": 7.06,
			"volumn": 2903.76,
			"money": 19848.87
		},
		{
			"time": "2015-08-26",
			"start": 7.13,
			"max": 7.43,
			"min": 6.42,
			"end": 6.58,
			"volumn": 4212.04,
			"money": 29069.25
		},
		{
			"time": "2015-08-25",
			"start": 7.13,
			"max": 7.29,
			"min": 7.13,
			"end": 7.13,
			"volumn": 1838.59,
			"money": 13140.8
		},
		{
			"time": "2015-08-24",
			"start": 8.4,
			"max": 8.4,
			"min": 7.92,
			"end": 7.92,
			"volumn": 1766.39,
			"money": 14168.86
		},
		{
			"time": "2015-08-21",
			"start": 9,
			"max": 9.61,
			"min": 8.53,
			"end": 8.8,
			"volumn": 3388.27,
			"money": 30952.11
		},
		{
			"time": "2015-08-20",
			"start": 10.02,
			"max": 10.24,
			"min": 9.32,
			"end": 9.33,
			"volumn": 3902.17,
			"money": 38391.68
		},
		{
			"time": "2015-08-19",
			"start": 9.3,
			"max": 10.59,
			"min": 9.01,
			"end": 10.35,
			"volumn": 5568.96,
			"money": 53928.79
		},
		{
			"time": "2015-08-18",
			"start": 11.18,
			"max": 11.5,
			"min": 10,
			"end": 10,
			"volumn": 7332.7,
			"money": 78439.61
		},
		{
			"time": "2015-08-17",
			"start": 10.2,
			"max": 11.11,
			"min": 9.9,
			"end": 11.11,
			"volumn": 8121.86,
			"money": 86298.92
		},
		{
			"time": "2015-08-14",
			"start": 9.58,
			"max": 10.37,
			"min": 9.37,
			"end": 10.1,
			"volumn": 6001.61,
			"money": 58425.11
		},
		{
			"time": "2015-08-13",
			"start": 9.14,
			"max": 9.5,
			"min": 8.91,
			"end": 9.49,
			"volumn": 3854.19,
			"money": 35696.27
		},
		{
			"time": "2015-08-12",
			"start": 9.09,
			"max": 9.68,
			"min": 8.98,
			"end": 9.29,
			"volumn": 4238.57,
			"money": 39909.3
		},
		{
			"time": "2015-08-11",
			"start": 9.23,
			"max": 9.47,
			"min": 9,
			"end": 9.15,
			"volumn": 4294.85,
			"money": 39674.71
		},
		{
			"time": "2015-08-10",
			"start": 8.9,
			"max": 9.38,
			"min": 8.76,
			"end": 9.2,
			"volumn": 4013.11,
			"money": 36287.89
		},
		{
			"time": "2015-08-07",
			"start": 8.36,
			"max": 8.8,
			"min": 8.31,
			"end": 8.7,
			"volumn": 3092.66,
			"money": 26336.76
		},
		{
			"time": "2015-08-06",
			"start": 8.03,
			"max": 8.42,
			"min": 7.95,
			"end": 8.25,
			"volumn": 2072.21,
			"money": 17060.11
		},
		{
			"time": "2015-08-05",
			"start": 8.5,
			"max": 8.69,
			"min": 8.08,
			"end": 8.28,
			"volumn": 3533.94,
			"money": 29796.96
		},
		{
			"time": "2015-08-04",
			"start": 7.65,
			"max": 8.39,
			"min": 7.65,
			"end": 8.39,
			"volumn": 3067.22,
			"money": 24773.88
		},
		{
			"time": "2015-08-03",
			"start": 8.15,
			"max": 8.4,
			"min": 7.6,
			"end": 7.63,
			"volumn": 3098.33,
			"money": 24382.99
		},
		{
			"time": "2015-07-31",
			"start": 8.7,
			"max": 9.01,
			"min": 8.25,
			"end": 8.44,
			"volumn": 3500.61,
			"money": 30289.83
		},
		{
			"time": "2015-07-30",
			"start": 8.92,
			"max": 9.65,
			"min": 8.7,
			"end": 8.97,
			"volumn": 6022.8,
			"money": 55624.85
		},
		{
			"time": "2015-07-29",
			"start": 8.35,
			"max": 8.91,
			"min": 7.78,
			"end": 8.88,
			"volumn": 4177.18,
			"money": 34893.2
		},
		{
			"time": "2015-07-28",
			"start": 8,
			"max": 9,
			"min": 7.92,
			"end": 8.1,
			"volumn": 5114.55,
			"money": 42095.99
		},
		{
			"time": "2015-07-27",
			"start": 9.4,
			"max": 9.99,
			"min": 8.8,
			"end": 8.8,
			"volumn": 6001.51,
			"money": 56962.25
		},
		{
			"time": "2015-07-24",
			"start": 9.27,
			"max": 10.28,
			"min": 9.11,
			"end": 9.78,
			"volumn": 8446.76,
			"money": 81991.19
		},
		{
			"time": "2015-07-23",
			"start": 9,
			"max": 9.78,
			"min": 8.74,
			"end": 9.46,
			"volumn": 8496.1,
			"money": 77551.01
		},
		{
			"time": "2015-07-22",
			"start": 8.08,
			"max": 8.97,
			"min": 8.05,
			"end": 8.97,
			"volumn": 8676.75,
			"money": 75751.1
		},
		{
			"time": "2015-07-21",
			"start": 7.8,
			"max": 8.33,
			"min": 7.65,
			"end": 8.15,
			"volumn": 4631.15,
			"money": 37450.78
		},
		{
			"time": "2015-07-20",
			"start": 7.72,
			"max": 8.27,
			"min": 7.63,
			"end": 8.05,
			"volumn": 6428.2,
			"money": 51127.98
		},
		{
			"time": "2015-07-17",
			"start": 6.94,
			"max": 7.73,
			"min": 6.94,
			"end": 7.73,
			"volumn": 4835.44,
			"money": 36666.58
		},
		{
			"time": "2015-07-16",
			"start": 6.53,
			"max": 7.48,
			"min": 6.42,
			"end": 7.03,
			"volumn": 3605.77,
			"money": 25031.15
		},
		{
			"time": "2015-07-15",
			"start": 7.57,
			"max": 7.83,
			"min": 7.13,
			"end": 7.13,
			"volumn": 2729.59,
			"money": 20041.75
		},
		{
			"time": "2015-07-14",
			"start": 8.2,
			"max": 8.7,
			"min": 7.66,
			"end": 7.92,
			"volumn": 7073.81,
			"money": 58131.16
		},
		{
			"time": "2015-07-13",
			"start": 7.5,
			"max": 8.1,
			"min": 7.5,
			"end": 8.1,
			"volumn": 4573.92,
			"money": 36083.69
		},
		{
			"time": "2015-07-10",
			"start": 6.9,
			"max": 7.36,
			"min": 6.88,
			"end": 7.36,
			"volumn": 4183.37,
			"money": 30411.19
		},
		{
			"time": "2015-07-09",
			"start": 5.47,
			"max": 6.69,
			"min": 5.47,
			"end": 6.69,
			"volumn": 6661.78,
			"money": 40398.96
		},
		{
			"time": "2015-07-08",
			"start": 6.08,
			"max": 6.08,
			"min": 6.08,
			"end": 6.08,
			"volumn": 158.16,
			"money": 961.61
		},
		{
			"time": "2015-07-07",
			"start": 6.77,
			"max": 6.88,
			"min": 6.75,
			"end": 6.75,
			"volumn": 383.45,
			"money": 2590.85
		},
		{
			"time": "2015-07-06",
			"start": 9.1,
			"max": 9.1,
			"min": 7.5,
			"end": 7.5,
			"volumn": 2968.98,
			"money": 24002.6
		},
		{
			"time": "2015-07-03",
			"start": 8.38,
			"max": 8.87,
			"min": 8.33,
			"end": 8.33,
			"volumn": 2641.73,
			"money": 22223.44
		},
		{
			"time": "2015-07-02",
			"start": 10.38,
			"max": 10.38,
			"min": 9.26,
			"end": 9.26,
			"volumn": 2611.06,
			"money": 24620.81
		},
		{
			"time": "2015-07-01",
			"start": 11.31,
			"max": 11.61,
			"min": 10.29,
			"end": 10.29,
			"volumn": 3401.45,
			"money": 37212.87
		},
		{
			"time": "2015-06-30",
			"start": 10.08,
			"max": 11.52,
			"min": 10.01,
			"end": 11.43,
			"volumn": 4205.99,
			"money": 45381.06
		},
		{
			"time": "2015-06-29",
			"start": 12.96,
			"max": 12.96,
			"min": 11.12,
			"end": 11.12,
			"volumn": 3745.68,
			"money": 44252.47
		},
		{
			"time": "2015-06-26",
			"start": 13.15,
			"max": 13.41,
			"min": 12.36,
			"end": 12.36,
			"volumn": 3675.91,
			"money": 46759.29
		},
		{
			"time": "2015-06-25",
			"start": 13.71,
			"max": 14.46,
			"min": 13.3,
			"end": 13.73,
			"volumn": 4907.6,
			"money": 68290.5
		},
		{
			"time": "2015-06-24",
			"start": 13.35,
			"max": 13.85,
			"min": 12.9,
			"end": 13.71,
			"volumn": 3656.8,
			"money": 49219.92
		},
		{
			"time": "2015-06-23",
			"start": 13.26,
			"max": 13.64,
			"min": 12.26,
			"end": 13.2,
			"volumn": 3566.35,
			"money": 45904.78
		},
		{
			"time": "2015-06-19",
			"start": 14.45,
			"max": 14.97,
			"min": 13.62,
			"end": 13.62,
			"volumn": 3621.43,
			"money": 51108.31
		},
		{
			"time": "2015-06-18",
			"start": 14.5,
			"max": 16,
			"min": 14.3,
			"end": 15.13,
			"volumn": 5046.59,
			"money": 77208.53
		},
		{
			"time": "2015-06-17",
			"start": 14.46,
			"max": 15,
			"min": 14,
			"end": 14.6,
			"volumn": 3483.7,
			"money": 50495.84
		},
		{
			"time": "2015-06-16",
			"start": 14,
			"max": 15.1,
			"min": 13.42,
			"end": 14.8,
			"volumn": 4844.74,
			"money": 68953.77
		},
		{
			"time": "2015-06-15",
			"start": 14.5,
			"max": 15.09,
			"min": 14.1,
			"end": 14.39,
			"volumn": 4008.2,
			"money": 58703.24
		},
		{
			"time": "2015-06-12",
			"start": 14.07,
			"max": 14.97,
			"min": 14,
			"end": 14.37,
			"volumn": 5399.47,
			"money": 78592.45
		},
		{
			"time": "2015-06-11",
			"start": 13.4,
			"max": 14.5,
			"min": 13.19,
			"end": 14.13,
			"volumn": 5472.93,
			"money": 76037.31
		},
		{
			"time": "2015-06-10",
			"start": 12.95,
			"max": 13.47,
			"min": 12.71,
			"end": 13.37,
			"volumn": 4087.74,
			"money": 53951.64
		},
		{
			"time": "2015-06-09",
			"start": 13.46,
			"max": 13.46,
			"min": 12.85,
			"end": 13.12,
			"volumn": 4371.67,
			"money": 57352.21
		},
		{
			"time": "2015-06-08",
			"start": 12.88,
			"max": 13.69,
			"min": 12.59,
			"end": 13.61,
			"volumn": 7406.58,
			"money": 98236.3
		},
		{
			"time": "2015-06-05",
			"start": 12.38,
			"max": 12.94,
			"min": 12.24,
			"end": 12.77,
			"volumn": 5386.66,
			"money": 68208.51
		},
		{
			"time": "2015-06-04",
			"start": 12.55,
			"max": 12.81,
			"min": 11.29,
			"end": 12.31,
			"volumn": 3905.22,
			"money": 47415.64
		},
		{
			"time": "2015-06-03",
			"start": 13,
			"max": 13.15,
			"min": 12.2,
			"end": 12.54,
			"volumn": 4559.61,
			"money": 57928.58
		},
		{
			"time": "2015-06-02",
			"start": 11.84,
			"max": 12.77,
			"min": 11.48,
			"end": 12.73,
			"volumn": 4405.17,
			"money": 52747.92
		},
		{
			"time": "2015-06-01",
			"start": 11.29,
			"max": 11.8,
			"min": 11,
			"end": 11.74,
			"volumn": 3308.94,
			"money": 38060.2
		},
		{
			"time": "2015-05-29",
			"start": 11.3,
			"max": 11.65,
			"min": 10.31,
			"end": 11.11,
			"volumn": 3434.12,
			"money": 38143.88
		},
		{
			"time": "2015-05-28",
			"start": 12.79,
			"max": 12.99,
			"min": 11.39,
			"end": 11.4,
			"volumn": 4979.63,
			"money": 61398.36
		},
		{
			"time": "2015-05-27",
			"start": 12.89,
			"max": 13.18,
			"min": 12.5,
			"end": 12.66,
			"volumn": 4886.86,
			"money": 62349.63
		},
		{
			"time": "2015-05-26",
			"start": 12.4,
			"max": 13.08,
			"min": 11.96,
			"end": 12.92,
			"volumn": 5838.51,
			"money": 73409.96
		},
		{
			"time": "2015-05-25",
			"start": 11.7,
			"max": 12.87,
			"min": 11.61,
			"end": 12.3,
			"volumn": 6405.2,
			"money": 78937.32
		},
		{
			"time": "2015-05-22",
			"start": 11.39,
			"max": 11.89,
			"min": 11.18,
			"end": 11.71,
			"volumn": 5519.87,
			"money": 63515.93
		},
		{
			"time": "2015-05-21",
			"start": 11.27,
			"max": 11.35,
			"min": 11.05,
			"end": 11.33,
			"volumn": 4132.8,
			"money": 46318.65
		},
		{
			"time": "2015-05-20",
			"start": 11.23,
			"max": 11.48,
			"min": 10.81,
			"end": 11.32,
			"volumn": 6859.76,
			"money": 76273.65
		},
		{
			"time": "2015-05-19",
			"start": 11.5,
			"max": 11.78,
			"min": 11,
			"end": 11.33,
			"volumn": 6864.05,
			"money": 77731.34
		},
		{
			"time": "2015-05-18",
			"start": 11.68,
			"max": 12.25,
			"min": 11.45,
			"end": 12.15,
			"volumn": 4236.5,
			"money": 50728.6
		},
		{
			"time": "2015-05-15",
			"start": 11.19,
			"max": 12.28,
			"min": 10.8,
			"end": 11.69,
			"volumn": 5515.66,
			"money": 64496.32
		},
		{
			"time": "2015-05-14",
			"start": 10.18,
			"max": 11.19,
			"min": 10.11,
			"end": 11.19,
			"volumn": 4181.77,
			"money": 45399.19
		},
		{
			"time": "2015-05-13",
			"start": 10.2,
			"max": 10.32,
			"min": 10,
			"end": 10.17,
			"volumn": 2247.39,
			"money": 22781.23
		},
		{
			"time": "2015-05-12",
			"start": 10.3,
			"max": 10.36,
			"min": 10.01,
			"end": 10.28,
			"volumn": 2010.65,
			"money": 20480.63
		},
		{
			"time": "2015-05-11",
			"start": 9.98,
			"max": 10.36,
			"min": 9.89,
			"end": 10.3,
			"volumn": 2101.26,
			"money": 21367.53
		},
		{
			"time": "2015-05-08",
			"start": 9.82,
			"max": 10.08,
			"min": 9.65,
			"end": 9.94,
			"volumn": 1609.43,
			"money": 15845.56
		},
		{
			"time": "2015-05-07",
			"start": 9.62,
			"max": 9.84,
			"min": 9.45,
			"end": 9.6,
			"volumn": 1270.86,
			"money": 12241.17
		},
		{
			"time": "2015-05-06",
			"start": 10.18,
			"max": 10.25,
			"min": 9.6,
			"end": 9.66,
			"volumn": 1754.7,
			"money": 17347.05
		},
		{
			"time": "2015-05-05",
			"start": 10.68,
			"max": 10.68,
			"min": 10,
			"end": 10.02,
			"volumn": 1903.5,
			"money": 19598.64
		},
		{
			"time": "2015-05-04",
			"start": 10.61,
			"max": 10.84,
			"min": 10.55,
			"end": 10.72,
			"volumn": 1554.93,
			"money": 16624.43
		},
		{
			"time": "2015-04-30",
			"start": 10.4,
			"max": 11.05,
			"min": 10.4,
			"end": 10.63,
			"volumn": 2169.06,
			"money": 23333.06
		},
		{
			"time": "2015-04-29",
			"start": 10.31,
			"max": 10.64,
			"min": 10.25,
			"end": 10.4,
			"volumn": 1614.77,
			"money": 16910.96
		},
		{
			"time": "2015-04-28",
			"start": 11.07,
			"max": 11.25,
			"min": 10.46,
			"end": 10.49,
			"volumn": 2552.21,
			"money": 27515.88
		},
		{
			"time": "2015-04-27",
			"start": 10.6,
			"max": 11.67,
			"min": 10.6,
			"end": 11.06,
			"volumn": 4216.46,
			"money": 47534.53
		},
		{
			"time": "2015-04-24",
			"start": 10.5,
			"max": 10.85,
			"min": 10.25,
			"end": 10.61,
			"volumn": 2326.42,
			"money": 24599.63
		},
		{
			"time": "2015-04-23",
			"start": 10.26,
			"max": 10.93,
			"min": 10.11,
			"end": 10.7,
			"volumn": 3767.77,
			"money": 39643.72
		},
		{
			"time": "2015-04-22",
			"start": 10.22,
			"max": 10.42,
			"min": 10.08,
			"end": 10.23,
			"volumn": 2868.77,
			"money": 29316.49
		},
		{
			"time": "2015-04-21",
			"start": 9.56,
			"max": 10.2,
			"min": 9.4,
			"end": 10.19,
			"volumn": 3493.61,
			"money": 34865.01
		},
		{
			"time": "2015-04-20",
			"start": 9.71,
			"max": 9.99,
			"min": 9.42,
			"end": 9.6,
			"volumn": 2462.09,
			"money": 23769.5
		},
		{
			"time": "2015-04-17",
			"start": 9.79,
			"max": 10.09,
			"min": 9.16,
			"end": 9.82,
			"volumn": 4473.33,
			"money": 43367.29
		},
		{
			"time": "2015-04-16",
			"start": 9.36,
			"max": 10.04,
			"min": 8.9,
			"end": 9.66,
			"volumn": 2851.79,
			"money": 27210.03
		},
		{
			"time": "2015-04-15",
			"start": 10.03,
			"max": 10.28,
			"min": 9.37,
			"end": 9.43,
			"volumn": 3138.11,
			"money": 30713.13
		},
		{
			"time": "2015-04-14",
			"start": 10.33,
			"max": 10.33,
			"min": 9.98,
			"end": 10.03,
			"volumn": 2951.59,
			"money": 29803.4
		},
		{
			"time": "2015-04-13",
			"start": 10.3,
			"max": 10.63,
			"min": 10.2,
			"end": 10.33,
			"volumn": 3196.99,
			"money": 33351.76
		},
		{
			"time": "2015-04-10",
			"start": 10.25,
			"max": 10.5,
			"min": 10,
			"end": 10.28,
			"volumn": 2565.64,
			"money": 26337.81
		},
		{
			"time": "2015-04-09",
			"start": 9.78,
			"max": 10.48,
			"min": 9.58,
			"end": 10.22,
			"volumn": 4316.86,
			"money": 43647.33
		},
		{
			"time": "2015-04-08",
			"start": 9.46,
			"max": 9.86,
			"min": 9.02,
			"end": 9.78,
			"volumn": 3683.43,
			"money": 34664.66
		},
		{
			"time": "2015-04-07",
			"start": 9.53,
			"max": 9.87,
			"min": 9.38,
			"end": 9.44,
			"volumn": 3874.06,
			"money": 37076.79
		},
		{
			"time": "2015-04-03",
			"start": 8.6,
			"max": 9.48,
			"min": 8.4,
			"end": 9.48,
			"volumn": 3760.78,
			"money": 34361.28
		},
		{
			"time": "2015-04-02",
			"start": 8.45,
			"max": 8.74,
			"min": 8.18,
			"end": 8.62,
			"volumn": 3076.83,
			"money": 26112.98
		},
		{
			"time": "2015-04-01",
			"start": 8.16,
			"max": 8.61,
			"min": 8.06,
			"end": 8.45,
			"volumn": 2396.89,
			"money": 20000.88
		},
		{
			"time": "2015-03-31",
			"start": 8.18,
			"max": 8.5,
			"min": 8.13,
			"end": 8.16,
			"volumn": 1938,
			"money": 15989.33
		},
		{
			"time": "2015-03-30",
			"start": 8.2,
			"max": 8.53,
			"min": 8.11,
			"end": 8.26,
			"volumn": 2820.79,
			"money": 23532.99
		},
		{
			"time": "2015-03-27",
			"start": 8.4,
			"max": 8.4,
			"min": 8.01,
			"end": 8.28,
			"volumn": 4634.57,
			"money": 38032.68
		},
		{
			"time": "2015-03-26",
			"start": 7.39,
			"max": 8.12,
			"min": 7.32,
			"end": 8.12,
			"volumn": 4209.29,
			"money": 33643.03
		},
		{
			"time": "2015-03-25",
			"start": 7.36,
			"max": 7.6,
			"min": 7.2,
			"end": 7.38,
			"volumn": 1845.49,
			"money": 13550.21
		},
		{
			"time": "2015-03-24",
			"start": 7.62,
			"max": 7.62,
			"min": 7.2,
			"end": 7.35,
			"volumn": 2264.5,
			"money": 16699.5
		},
		{
			"time": "2015-03-23",
			"start": 7.54,
			"max": 7.68,
			"min": 7.46,
			"end": 7.59,
			"volumn": 1834.28,
			"money": 13855.41
		},
		{
			"time": "2015-03-20",
			"start": 7.33,
			"max": 7.65,
			"min": 7.25,
			"end": 7.55,
			"volumn": 2470.71,
			"money": 18588.13
		},
		{
			"time": "2015-03-19",
			"start": 7.38,
			"max": 7.66,
			"min": 7.26,
			"end": 7.37,
			"volumn": 2450.54,
			"money": 18247.82
		},
		{
			"time": "2015-03-18",
			"start": 7.12,
			"max": 7.46,
			"min": 7.1,
			"end": 7.37,
			"volumn": 2854.4,
			"money": 20828.88
		},
		{
			"time": "2015-03-17",
			"start": 6.95,
			"max": 7.13,
			"min": 6.87,
			"end": 7.09,
			"volumn": 2457.13,
			"money": 17162.55
		},
		{
			"time": "2015-03-16",
			"start": 6.8,
			"max": 7.06,
			"min": 6.79,
			"end": 6.95,
			"volumn": 1858.78,
			"money": 12924.21
		},
		{
			"time": "2015-03-13",
			"start": 6.85,
			"max": 6.93,
			"min": 6.69,
			"end": 6.79,
			"volumn": 1167.06,
			"money": 7909.64
		},
		{
			"time": "2015-03-12",
			"start": 6.84,
			"max": 7.06,
			"min": 6.71,
			"end": 6.85,
			"volumn": 2152.85,
			"money": 14835.41
		},
		{
			"time": "2015-03-11",
			"start": 6.98,
			"max": 7.04,
			"min": 6.77,
			"end": 6.84,
			"volumn": 1445.77,
			"money": 9886.53
		},
		{
			"time": "2015-03-10",
			"start": 6.73,
			"max": 6.99,
			"min": 6.7,
			"end": 6.97,
			"volumn": 1999.93,
			"money": 13770.37
		},
		{
			"time": "2015-03-09",
			"start": 6.59,
			"max": 6.88,
			"min": 6.4,
			"end": 6.72,
			"volumn": 2243.1,
			"money": 14951.1
		},
		{
			"time": "2015-03-06",
			"start": 6.47,
			"max": 6.6,
			"min": 6.35,
			"end": 6.5,
			"volumn": 1270.49,
			"money": 8229.96
		},
		{
			"time": "2015-03-05",
			"start": 6.43,
			"max": 6.54,
			"min": 6.34,
			"end": 6.47,
			"volumn": 1363.09,
			"money": 8789.45
		},
		{
			"time": "2015-03-04",
			"start": 6.35,
			"max": 6.45,
			"min": 6.32,
			"end": 6.41,
			"volumn": 1295.42,
			"money": 8265.63
		},
		{
			"time": "2015-03-03",
			"start": 6.16,
			"max": 6.47,
			"min": 6.07,
			"end": 6.42,
			"volumn": 2266.82,
			"money": 14214.79
		},
		{
			"time": "2015-03-02",
			"start": 6.22,
			"max": 6.25,
			"min": 6.07,
			"end": 6.17,
			"volumn": 1277.88,
			"money": 7850.34
		},
		{
			"time": "2015-02-27",
			"start": 6.16,
			"max": 6.33,
			"min": 6.15,
			"end": 6.19,
			"volumn": 908.98,
			"money": 5663.74
		},
		{
			"time": "2015-02-26",
			"start": 6.12,
			"max": 6.18,
			"min": 6.1,
			"end": 6.16,
			"volumn": 703.72,
			"money": 4328.56
		},
		{
			"time": "2015-02-25",
			"start": 6.09,
			"max": 6.18,
			"min": 6.03,
			"end": 6.12,
			"volumn": 766.56,
			"money": 4678.73
		},
		{
			"time": "2015-02-17",
			"start": 6.11,
			"max": 6.15,
			"min": 6.06,
			"end": 6.08,
			"volumn": 766.73,
			"money": 4677.31
		},
		{
			"time": "2015-02-16",
			"start": 6.03,
			"max": 6.14,
			"min": 6.01,
			"end": 6.11,
			"volumn": 814.71,
			"money": 4948.33
		},
		{
			"time": "2015-02-13",
			"start": 5.98,
			"max": 6.34,
			"min": 5.93,
			"end": 6.08,
			"volumn": 1992.56,
			"money": 12135.01
		},
		{
			"time": "2015-02-12",
			"start": 5.72,
			"max": 6.1,
			"min": 5.66,
			"end": 6.01,
			"volumn": 2572.38,
			"money": 15312.73
		},
		{
			"time": "2015-02-11",
			"start": 5.69,
			"max": 5.77,
			"min": 5.67,
			"end": 5.72,
			"volumn": 602.66,
			"money": 3443.99
		},
		{
			"time": "2015-02-10",
			"start": 5.46,
			"max": 5.75,
			"min": 5.43,
			"end": 5.73,
			"volumn": 1298.63,
			"money": 7307.42
		},
		{
			"time": "2015-02-09",
			"start": 5.59,
			"max": 5.59,
			"min": 5.47,
			"end": 5.48,
			"volumn": 435.98,
			"money": 2410.09
		},
		{
			"time": "2015-02-06",
			"start": 5.5,
			"max": 5.62,
			"min": 5.48,
			"end": 5.61,
			"volumn": 630.6,
			"money": 3490.13
		},
		{
			"time": "2015-02-05",
			"start": 5.58,
			"max": 5.59,
			"min": 5.47,
			"end": 5.48,
			"volumn": 636.7,
			"money": 3521.89
		},
		{
			"time": "2015-02-04",
			"start": 5.63,
			"max": 5.67,
			"min": 5.52,
			"end": 5.52,
			"volumn": 635.38,
			"money": 3548.96
		},
		{
			"time": "2015-02-03",
			"start": 5.63,
			"max": 5.67,
			"min": 5.56,
			"end": 5.65,
			"volumn": 434.34,
			"money": 2439.08
		},
		{
			"time": "2015-02-02",
			"start": 5.55,
			"max": 5.65,
			"min": 5.51,
			"end": 5.61,
			"volumn": 338.71,
			"money": 1896.01
		},
		{
			"time": "2015-01-30",
			"start": 5.78,
			"max": 5.85,
			"min": 5.6,
			"end": 5.65,
			"volumn": 574.74,
			"money": 3270.25
		},
		{
			"time": "2015-01-29",
			"start": 5.8,
			"max": 5.87,
			"min": 5.74,
			"end": 5.78,
			"volumn": 605.55,
			"money": 3516.14
		},
		{
			"time": "2015-01-28",
			"start": 5.89,
			"max": 5.95,
			"min": 5.82,
			"end": 5.85,
			"volumn": 653.47,
			"money": 3846.52
		},
		{
			"time": "2015-01-27",
			"start": 5.72,
			"max": 5.94,
			"min": 5.7,
			"end": 5.89,
			"volumn": 1398.84,
			"money": 8194.18
		},
		{
			"time": "2015-01-26",
			"start": 5.65,
			"max": 5.73,
			"min": 5.58,
			"end": 5.72,
			"volumn": 930.19,
			"money": 5247.01
		},
		{
			"time": "2015-01-23",
			"start": 5.68,
			"max": 5.72,
			"min": 5.6,
			"end": 5.62,
			"volumn": 758.13,
			"money": 4284.8
		},
		{
			"time": "2015-01-22",
			"start": 5.49,
			"max": 5.78,
			"min": 5.41,
			"end": 5.71,
			"volumn": 1139.94,
			"money": 6386.11
		},
		{
			"time": "2015-01-21",
			"start": 5.36,
			"max": 5.58,
			"min": 5.33,
			"end": 5.55,
			"volumn": 701.11,
			"money": 3840.84
		},
		{
			"time": "2015-01-20",
			"start": 5.23,
			"max": 5.35,
			"min": 5.22,
			"end": 5.33,
			"volumn": 817.97,
			"money": 4326.47
		},
		{
			"time": "2015-01-19",
			"start": 5.6,
			"max": 5.67,
			"min": 5.12,
			"end": 5.16,
			"volumn": 1248.82,
			"money": 6669.96
		},
		{
			"time": "2015-01-16",
			"start": 5.67,
			"max": 5.73,
			"min": 5.66,
			"end": 5.69,
			"volumn": 399.54,
			"money": 2274.94
		},
		{
			"time": "2015-01-15",
			"start": 5.6,
			"max": 5.67,
			"min": 5.57,
			"end": 5.67,
			"volumn": 361.28,
			"money": 2031.66
		},
		{
			"time": "2015-01-14",
			"start": 5.62,
			"max": 5.69,
			"min": 5.61,
			"end": 5.62,
			"volumn": 321.27,
			"money": 1812.93
		},
		{
			"time": "2015-01-13",
			"start": 5.64,
			"max": 5.71,
			"min": 5.58,
			"end": 5.65,
			"volumn": 375.35,
			"money": 2120.87
		},
		{
			"time": "2015-01-12",
			"start": 5.79,
			"max": 5.79,
			"min": 5.58,
			"end": 5.6,
			"volumn": 516.19,
			"money": 2921.05
		},
		{
			"time": "2015-01-09",
			"start": 5.95,
			"max": 5.97,
			"min": 5.8,
			"end": 5.82,
			"volumn": 701.39,
			"money": 4123.5
		},
		{
			"time": "2015-01-08",
			"start": 5.95,
			"max": 6.06,
			"min": 5.91,
			"end": 5.97,
			"volumn": 676.75,
			"money": 4056.12
		},
		{
			"time": "2015-01-07",
			"start": 6,
			"max": 6.04,
			"min": 5.92,
			"end": 5.96,
			"volumn": 546.93,
			"money": 3267.16
		},
		{
			"time": "2015-01-06",
			"start": 5.89,
			"max": 6.09,
			"min": 5.84,
			"end": 6.07,
			"volumn": 1169.3,
			"money": 6980.48
		},
		{
			"time": "2015-01-05",
			"start": 5.89,
			"max": 6,
			"min": 5.75,
			"end": 5.94,
			"volumn": 806.1,
			"money": 4751.15
		}
	];

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Slider = __webpack_require__(170);
	var G2 = __webpack_require__(15);
	if (G2 && G2.Plugin) {
	  var Plugin = G2.Plugin;
	  Plugin.slider = Slider;
	} else {
	  console.err('Please load the G2 script first!');
	}
	module.exports = Slider;


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview
	 * @ignore
	 */

	'use strict';

	var G2 = __webpack_require__(15);
	var Util = G2.Util;
	var Canvas = G2.Canvas;
	var Group = Canvas.Group;

	var Range = function(cfg) {
	  Range.superclass.constructor.call(this, cfg);
	};

	Range.CFG = {
	  /**
	   * 范围
	   * @type {Array}
	   */
	  range: null,
	  /**
	   * 中滑块属性
	   * @type {ATTRS}
	   */
	  middleAttr: null,
	  /**
	   * 背景
	   * @type {G-Element}
	   */
	  backgroundElement: null,
	  /**
	   * 下滑块
	   * @type {G-Element}
	   */
	  minHandleElement: null,
	  /**
	   * 上滑块
	   * @type {G-Element}
	   */
	  maxHandleElement: null,
	  /**
	   * 中块
	   * @type {G-Element}
	   */
	  middleHandleElement: null,
	  /**
	   * 当前的激活的元素
	   * @type {G-Element}
	   */
	  currentTarget: null,
	  /**
	   * 布局方式： horizontal，vertical
	   * @type {String}
	   */
	  layout: 'vertical',
	  /**
	   * 宽
	   * @type {Number}
	   */
	  width: null,
	  /**
	   * 高
	   * @type {Number}
	   */
	  height: null,
	  /**
	   * 当前的PageX
	   * @type {Number}
	   */
	  pageX: null,
	  /**
	   * 当前的PageY
	   * @type {Number}
	   */
	  pageY: null,
	  /**
	   * 是否参与动画
	   * @type {Boolean}
	   */
	  animate: false,
	  /**
	   * 可操作性，false 则不滑动
	   * @type {Boolean}
	   */
	  operable: true
	};

	Util.extend(Range, Group);

	Util.augment(Range, {
	  _beforeRenderUI: function() {
	    var layout = this.get('layout');
	    var backgroundElement = this.get('backgroundElement');
	    var minHandleElement = this.get('minHandleElement');
	    var maxHandleElement = this.get('maxHandleElement');
	    var middleHandleElement = this.addShape('rect', {
	      attrs: this.get('middleAttr')
	    });
	    var trigerCursor = layout === 'vertical' ? 'ns-resize' : 'ew-resize';
	    this.add([backgroundElement, minHandleElement, maxHandleElement]);
	    this.set('middleHandleElement', middleHandleElement);
	    backgroundElement.set('zIndex', 0);
	    middleHandleElement.set('zIndex', 1);
	    minHandleElement.set('zIndex', 2);
	    maxHandleElement.set('zIndex', 2);
	    if (this.get('operable')) {
	      middleHandleElement.set('cursor', 'move');
	      Util.each(minHandleElement.get('children'), function(child) {
	        child.set('cursor', trigerCursor);
	      });
	      Util.each(maxHandleElement.get('children'), function(child) {
	        child.set('cursor', trigerCursor);
	      });
	      // minHandleElement.set('cursor', trigerCursor);
	      // maxHandleElement.set('cursor', trigerCursor);
	    }
	    this.sort();
	  },
	  _renderUI: function() {
	    var layout = this.get('layout');
	    if (layout === 'horizontal') {
	      this._renderHorizontal();
	    } else {
	      this._renderVertical();
	    }
	  },
	  _transform: function(layout) {
	    var range = this.get('range');
	    var minRatio = range[0] / 100;
	    var maxRatio = range[1] / 100;
	    var width = this.get('width');
	    var height = this.get('height');
	    var minHandleElement = this.get('minHandleElement');
	    var maxHandleElement = this.get('maxHandleElement');
	    var middleHandleElement = this.get('middleHandleElement');

	    minHandleElement.initTransform();
	    maxHandleElement.initTransform();

	    if (layout === 'horizontal') {
	      middleHandleElement.attr({
	        x: width * minRatio,
	        y: 0,
	        width: (maxRatio - minRatio) * width,
	        height: height
	      });
	      minHandleElement.translate(minRatio * width, 0);
	      maxHandleElement.translate(maxRatio * width, 0);
	    } else {
	      middleHandleElement.attr({
	        x: 0,
	        y: height * (1 - maxRatio),
	        width: width,
	        height: (maxRatio - minRatio) * height
	      });
	      minHandleElement.translate(width / 2, (1 - minRatio) * height);
	      maxHandleElement.translate(width / 2, (1 - maxRatio) * height);
	    }
	  },
	  _renderHorizontal: function() {
	    this._transform('horizontal');
	  },
	  _renderVertical: function() {
	    this._transform('vertical');
	  },
	  _bindUI: function() {
	    if (this.get('operable')) {
	      this.on('mousedown', Util.wrapBehavior(this, '_onMouseDown'));
	      this.on('mousemove', Util.wrapBehavior(this, '_onMouseMove'));
	      this.on('mouseleave', Util.wrapBehavior(this, '_onMouseLeave'));
	    }
	  },
	  // 判断是否是该元素
	  _isElement: function(target, name) {
	    var element = this.get(name);
	    if (target === element) {
	      return true;
	    }
	    if (element.isGroup) {
	      var elementChildren = element.get('children');
	      return elementChildren.indexOf(target) > -1;
	    }
	    return false;
	  },
	  _getRange: function(diff, range) {
	    var rst = diff + range;
	    rst = rst > 100 ? 100 : rst;
	    rst = rst < 0 ? 0 : rst;
	    return rst;
	  },
	  /**
	   * 更新状态
	   * @param {String} dim x || y
	   * @param {Object} ev DOM 原生事件
	   */
	  _updateStatus: function(dim, ev) {
	    var totalLength = dim === 'x' ? this.get('width') : this.get('height');
	    var ucDim = Util.ucfirst(dim);
	    var range = this.get('range');
	    var page = this.get('page' + ucDim);
	    var currentTarget = this.get('currentTarget');
	    var rangeStash = this.get('rangeStash');
	    var layout = this.get('layout');
	    var sign = layout === 'vertical' ? -1 : 1;
	    var currentPage = ev['page' + ucDim];
	    var diffPage = currentPage - page;
	    var diffRange = (diffPage / totalLength) * 100 * sign;
	    var diffStashRange;

	    if (range[1] <= range[0]) {
	      if (this._isElement(currentTarget, 'minHandleElement') || this._isElement(currentTarget, 'maxHandleElement')) {
	        range[0] = this._getRange(diffRange, range[0]);
	        range[1] = this._getRange(diffRange, range[0]);
	      }
	    } else {
	      if (this._isElement(currentTarget, 'minHandleElement')) {
	        range[0] = this._getRange(diffRange, range[0]);
	      }
	      if (this._isElement(currentTarget, 'maxHandleElement')) {
	        range[1] = this._getRange(diffRange, range[1]);
	      }
	    }

	    if (this._isElement(currentTarget, 'middleHandleElement')) {
	      diffStashRange = (rangeStash[1] - rangeStash[0]);
	      range[0] = this._getRange(diffRange, range[0]);
	      range[1] = range[0] + diffStashRange;
	      if (range[1] > 100) {
	        range[1] = 100;
	        range[0] = range[1] - diffStashRange;
	      }
	    }

	    this.fire('rangeChange', {
	      range: range
	    });

	    this.set('page' + ucDim, currentPage);
	    this._renderUI();
	    this.get('canvas').draw(); // need delete
	    return;
	  },
	  _onMouseLeave: function() {
	    var containerDOM = this.get('canvas').get('containerDOM');
	    containerDOM.style.cursor = 'default';
	  },
	  _onMouseMove: function(ev) {
	    var cursor = ev.currentTarget.get('cursor', true);
	    var containerDOM = this.get('canvas').get('containerDOM');
	    if (containerDOM) {
	      if (cursor) {
	        containerDOM.style.cursor = cursor;
	      } else {
	        containerDOM.style.cursor = 'default';
	      }
	    }
	  },
	  _onMouseDown: function(ev) {
	    var currentTarget = ev.currentTarget;
	    var originEvent = ev.event;
	    var range = this.get('range');
	    originEvent.stopPropagation();
	    originEvent.preventDefault();
	    this.set('pageX', originEvent.pageX);
	    this.set('pageY', originEvent.pageY);
	    this.set('currentTarget', currentTarget);
	    this.set('rangeStash', [range[0], range[1]]);
	    this._bindCanvasEvents();
	  },
	  _bindCanvasEvents: function() {
	    this.onMouseMoveListener = Util.addEventListener(document, 'mousemove', Util.wrapBehavior(this, '_onCanvasMouseMove'));
	    this.onMouseUpListener = Util.addEventListener(document, 'mouseup', Util.wrapBehavior(this, '_onCanvasMouseUp'));
	  },
	  _onCanvasMouseMove: function(ev) {
	    var layout = this.get('layout');
	    if (layout === 'horizontal') {
	      this._updateStatus('x', ev);
	    } else {
	      this._updateStatus('y', ev);
	    }
	  },
	  _onCanvasMouseUp: function() {
	    this._removeDocumentEvents();
	  },
	  _removeDocumentEvents: function() {
	    this.onMouseMoveListener.remove();
	    this.onMouseUpListener.remove();
	  }
	});

	module.exports = Range;


/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview G2's plugin for datazoom.
	 * @author sima.zhang1990@gmail.com
	 */

	'use strict';

	var G2 = __webpack_require__(15);
	var Util = G2.Util;
	var Base = G2.Base;
	var DataFrame = G2.Frame;
	var Canvas = G2.Canvas;
	var Range = __webpack_require__(169);
	var OFFSET = 5;

	var Slider = function(cfg) {
	  Slider.superclass.constructor.call(this, cfg);
	  this._init();
	};

	Slider.ATTRS = {
	  charts: null,
	  height: null,
	  width: null,
	  start: null,
	  end: null,
	  domId: null,
	  xDim: null,
	  yDim: null,
	  /**
	   * 中间滑块
	   * @type {ATTRS}
	   */
	  middleAttr: {
	    fill: '#D5DAE3',
	    fillOpacity: 0.2
	  },
	  backgroundAttr: {
	    stroke: '#E2E2E2',
	    fill: '#F3F3F3',
	    opacity: 0.2,
	    lineWidth: 1
	  },
	  range: [0, 100],
	  layout: 'horizontal',
	  textAttr: {
	    fill: '#333'
	  },
	  handleIcon: 'https://t.alipayobjects.com/images/rmsweb/T1YohhXd4bXXXXXXXX.png'
	};

	Util.extend(Slider, Base);

	Util.augment(Slider, {
	  _init: function() {
	    this.set('container', document.getElementById(this.get('domId')));
	    this.set('firstRender', 'true');
	    var linkCharts = this.get('charts');
	    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
	    var forceFit = chart.get('parent') ? chart.get('parent').get('forceFit') : chart.get('forceFit');
	    if (forceFit) {
	      window.addEventListener('resize', Util.wrapBehavior(this, '_initForceFitEvent'));
	    }
	  },
	  _initForceFitEvent: function() {
	    var timer = setTimeout(Util.wrapBehavior(this, 'forceFit'), 200);
	    clearTimeout(this.get('resizeTimer'));
	    this.set('resizeTimer', timer);
	  },
	  forceFit: function() {
	    var linkCharts = this.get('charts');
	    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
	    var width = chart.get('parent') ? chart.get('parent').get('width') : chart.get('width');
	    var height = this.get('height');
	    if (width !== this.get('width')) {
	      var canvas = this.get('canvas');
	      var filters = chart.get('options').filters;
	      var xDim = this.get('xDim');
	      this.set('start', filters[xDim][0]);
	      this.set('end', filters[xDim][1]);
	      this.set('width', width);
	      canvas.changeSize(width, height);
	      this.set('changeSize', true);
	      this.repaint();
	    }
	  },
	  _initCanvas: function() {
	    var width = this.get('width');
	    var height = this.get('height');
	    var canvas = new Canvas({
	      width: width,
	      height: height,
	      containerDOM: this.get('container'),
	      capture: false
	    });
	    canvas.set('fontFamily', G2.Global.fontFamily);
	    // style canvas
	    var node = canvas.get('el');
	    node.style.position = 'absolute';
	    node.style.top = 0;
	    node.style.left = 0;
	    node.style.zIndex = 3;
	    this.set('canvas', canvas);
	  },
	  _initBackground: function(linkChart) {
	    var data = linkChart.get('data');
	    if (!(data instanceof DataFrame)) {
	      data = new DataFrame(data);
	    }
	    var options = linkChart.get('options');

	    var xDim = this.get('xDim');
	    var yDim = this.get('yDim');
	    var xScale;
	    if (this.get('changeSize')) {
	      xScale = this.get('xScale');
	    } else {
	      var scaleAssist = linkChart.get('scaleAssist');
	      scaleAssist.defs = Util.mix({}, true, scaleAssist.defs, options.scales);
	      xScale = scaleAssist.createScale(xDim, data);
	    }

	    if (yDim) { // 如果声明了 yDim, 则创建滑块背景图
	      var bgChart = new G2.Chart({
	        id: this.get('domId'),
	        width: this.get('plotWidth'),
	        height: this.get('height'),
	        plotCfg: {
	          margin: 0
	        }
	      });
	      bgChart.source(data);
	      bgChart.col(xDim, {
	        range: [0, 1],
	        nice: false
	      });
	      bgChart.axis(false);
	      bgChart.tooltip(false);
	      bgChart.legend(false);
	      bgChart.area().position(xDim + '*' + yDim).color('#CED1D4');
	      bgChart.line().position(xDim + '*' + yDim).color('#CED1D4');
	      bgChart.render();
	      // 自动对齐
	      var canvas = bgChart.get('canvas');
	      var container = canvas.get('el').parentNode;
	      container.style.marginLeft = this.get('marginLeft') + 'px';
	      this.set('bgChart', bgChart);
	    }
	    this.set('xScale', xScale);
	  },
	  _initRange: function() {
	    var start = this.get('start');
	    var end = this.get('end');
	    var xScale = this.get('xScale');
	    var min = start ? xScale.scale(start) : 0.3;
	    var max = end ? xScale.scale(end) : 0.7;
	    var range = [min * 100, max * 100];
	    this.set('range', range);
	    return range;
	  },
	  _getHandleValue: function(type) {
	    var value;
	    var range = this.get('range');
	    var min = range[0] / 100;
	    var max = range[1] / 100;
	    var xScale = this.get('xScale');
	    if (type === 'min') {
	      value = this.get('start') ? this.get('start') : xScale.invert(min);
	    } else {
	      value = this.get('end') ? this.get('end') : xScale.invert(max);
	    }
	    return value;
	  },
	  _initHorizontalHandle: function(type) {
	    var canvas = this.get('canvas');
	    var handle = canvas.addGroup();
	    var height = this.get('height');
	    var xScale = this.get('xScale');
	    var handleValue = xScale.getText(this._getHandleValue(type));

	    handle.addShape('Image', {
	      attrs: {
	        x: -height / 2,
	        y: 0,
	        width: height,
	        height: height,
	        img: this.get('handleIcon')
	      }
	    });
	    var text = handle.addShape('Text', {
	      attrs: Util.mix({
	        x: (type === 'min') ? -(height / 2 + OFFSET) : height / 2 + OFFSET,
	        y: height / 2,
	        textAlign: (type === 'min') ? 'end' : 'start',
	        textBaseline: 'middle',
	        text: handleValue
	      }, this.get('textAttr'))
	    });

	    this.set(type + 'TextElement', text);
	    return handle;
	  },
	  _initSliderBackground: function() {
	    var canvas = this.get('canvas');
	    var backgroundElement = canvas.addGroup();
	    backgroundElement.initTransform();
	    backgroundElement.translate(0, 0);
	    backgroundElement.addShape('Rect', {
	      attrs: Util.mix({
	        x: 0,
	        y: 0,
	        width: this.get('plotWidth'),
	        height: this.get('height')
	      }, this.get('backgroundAttr'))
	    });
	    return backgroundElement;
	  },
	  _initSlider: function() {
	    var canvas = this.get('canvas');
	    var range = this._initRange();
	    var minHandleElement = this._initHorizontalHandle('min');
	    var maxHandleElement = this._initHorizontalHandle('max');
	    var backgroundElement = this._initSliderBackground();

	    var rangeElement = canvas.addGroup(Range, {
	      minHandleElement: minHandleElement,
	      maxHandleElement: maxHandleElement,
	      backgroundElement: backgroundElement,
	      middleAttr: this.get('middleAttr'),
	      range: range,
	      layout: this.get('layout'),
	      width: this.get('plotWidth'),
	      height: this.get('height')
	    });
	    rangeElement.translate(this.get('marginLeft'), 0);
	    this.set('rangeElement', rangeElement);
	  },
	  _bindEvent: function() {
	    var self = this;
	    var rangeElement = self.get('rangeElement');
	    var xDim = self.get('xDim');
	    var xScale = self.get('xScale');

	    rangeElement.on('rangeChange', function(ev) {
	      var range = ev.range;
	      var minRatio = range[0] / 100;
	      var maxRatio = range[1] / 100;
	      var min = xScale.invert(minRatio);
	      var max = xScale.invert(maxRatio);
	      var minText = xScale.getText(min);
	      var maxText = xScale.getText(max);
	      self._updateElement(minText, maxText);
	      self._updateLinkCharts(xDim, [min, max]);
	    });
	  },
	  _updateElement: function(min, max) {
	    var minTextElement = this.get('minTextElement');
	    var maxTextElement = this.get('maxTextElement');
	    minTextElement.attr(Util.mix({}, minTextElement.__attrs, {
	      text: min
	    }));
	    maxTextElement.attr(Util.mix({}, maxTextElement.__attrs, {
	      text: max
	    }));

	    if (this.get('bgChart')) { // 将背景图表转换为背景图
	      var bgChart = this.get('bgChart');
	      var canvas = bgChart.get('canvas').get('el');
	      var img = canvas.toDataURL('image/png');
	      var container = this.get('container');
	      container.style.width = this.get('width') + 'px';
	      container.style.height = this.get('height') + 'px';
	      container.style.backgroundImage = 'url(' + img + ')';
	      container.style.backgroundRepeat = 'no-repeat';
	      container.style.backgroundPositionX = this.get('marginLeft') + 'px';
	      container.style.backgroundSize = 'contain';
	      bgChart.destroy();
	      this.set('bgChart', null);
	    }
	    this.set('firstRender', false);
	  },
	  _updateLinkCharts: function(dim, range) {
	    var self = this;
	    var linkCharts = Util.isArray(self.get('charts')) ? self.get('charts') : [self.get('charts')];
	    if (linkCharts[0].get('parent')) {
	      Util.each(linkCharts, function(chart) {
	        chart.filter(dim, range);
	      });
	      var parentChart = linkCharts[0].get('parent');
	      if (self.get('firstRender')) {
	        parentChart.render();
	      } else {
	        parentChart.repaint();
	      }
	    } else {
	      Util.each(linkCharts, function(chart) {
	        chart.filter(dim, range);
	        if (self.get('firstRender')) {
	          chart.render();
	        } else {
	          chart.repaint();
	        }
	      });
	    }
	  },
	  render: function() {
	    var linkCharts = this.get('charts');
	    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
	    var plotRange;
	    var width;
	    if (chart.get('parent')) {
	      plotRange = chart.get('parent').get('plotRange');
	      width = chart.get('parent').get('width');
	    } else {
	      plotRange = chart.get('plotRange');
	      width = chart.get('width');
	    }

	    this.set('plotWidth', plotRange.tr.x - plotRange.tl.x);
	    this.set('marginLeft', plotRange.tl.x);
	    this.set('width', width);

	    if (!this.get('canvas')) {
	      this._initCanvas();
	    }
	    this._initBackground(chart);
	    this._initSlider();
	    this._bindEvent();

	    var xDim = this.get('xDim');
	    var min = this._getHandleValue('min');
	    var max = this._getHandleValue('max');
	    if (!this.get('changeSize')) {
	      this._updateLinkCharts(xDim, [min, max]);
	    }
	    this.get('canvas').draw();
	  },
	  destroy: function() {
	    var rangeElement = this.get('rangeElement');
	    rangeElement.off('rangeChange');
	    this.get('bgChart') && this.get('bgChart').destroy();
	    this.get('canvas').destroy();
	    var container = this.get('container');
	    while (container.hasChildNodes()) {
	      container.removeChild(container.firstChild);
	    }
	    Slider.superclass.destroy.call(this);
	    window.removeEventListener('resize', Util.getWrapBehavior(this, '_initForceFitEvent'));
	  },
	  clear: function() {
	    var container = this.get('container');
	    container.style.backgroundImage = '';
	    this.get('canvas').clear();
	    this.get('bgChart') && this.get('bgChart').destroy();
	    this.set('bgChart', null);
	  },
	  repaint: function() {
	    this.set('firstRender', false);
	    this.clear();
	    this.render();
	  }
	});

	module.exports = Slider;


/***/ }

})
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvZzItcGx1Z2luLXNsaWRlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2cyLXBsdWdpbi1zbGlkZXIubWQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvY2FuZGxlU3RpY2tzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vfi8uMS4yLjFAZzItcGx1Z2luLXNsaWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjIuMUBnMi1wbHVnaW4tc2xpZGVyL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjIuMUBnMi1wbHVnaW4tc2xpZGVyL3NyYy9zbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3JlYXRlRzJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3JlYXRlRzJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCJpbXBvcnQgY3JlYXRlRzIgZnJvbSAnZzItcmVhY3QnO1xuaW1wb3J0IEcyLCB7IFN0YXQsIFBsdWdpbiwgRnJhbWUgfSBmcm9tICdnMic7XG5pbXBvcnQgJ2cyLXBsdWdpbi1zbGlkZXInO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9jYW5kbGVTdGlja3MuanNvbic7XG5cbmNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIC4uLmFyZ3MpIHtcbiAgICBzdXBlcihwcm9wcywgLi4uYXJncyk7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoZGF0YSk7XG4gICAgZnJhbWUuYWRkQ29sKCd0cmVuZCcsIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIChvYmouc3RhcnQgPD0gb2JqLmVuZCkgPyAwIDogMTtcbiAgICB9KTtcblxuICAgIGNvbnN0IENoYXJ0ID0gY3JlYXRlRzIoY2hhcnQgPT4ge1xuICAgICAgY2hhcnQuc291cmNlKGZyYW1lLCB7XG4gICAgICAgICd0cmVuZCc6IHtcbiAgICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgICBhbGlhczogJ+i2i+WKvycsXG4gICAgICAgICAgdmFsdWVzOiBbJ+S4iua2qCcsICfkuIvot4wnXVxuICAgICAgICB9LFxuICAgICAgICAndGltZSc6IHtcbiAgICAgICAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgICAgICAgbmljZTogZmFsc2UsXG4gICAgICAgICAgbWFzazogJ21tLWRkJyxcbiAgICAgICAgICBhbGlhczogJ+aXtumXtCcsXG4gICAgICAgICAgdGlja0NvdW50OiAxMCxcbiAgICAgICAgICByYW5nZTogWzAsIDFdXG4gICAgICAgIH0sXG4gICAgICAgICd2b2x1bW4nOiB7XG4gICAgICAgICAgYWxpYXM6ICfmiJDkuqTph48nXG4gICAgICAgIH0sXG4gICAgICAgICdzdGFydCc6IHtcbiAgICAgICAgICBhbGlhczogJ+W8gOebmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ2VuZCc6IHtcbiAgICAgICAgICBhbGlhczogJ+aUtuebmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ21heCc6IHtcbiAgICAgICAgICBhbGlhczogJ+acgOmrmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ21pbic6IHtcbiAgICAgICAgICBhbGlhczogJ+acgOS9juS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ3N0YXJ0K2VuZCttYXgrbWluJzoge1xuICAgICAgICAgIGFsaWFzOiAn6IKh56Wo5Lu35qC8J1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7XG4gICAgICAgIHRpdGxlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIGNoYXJ0LnNjaGVtYSgpXG4gICAgICAgIC5wb3NpdGlvbigndGltZSooc3RhcnQrZW5kK21heCttaW4pJylcbiAgICAgICAgLmNvbG9yKCd0cmVuZCcsIFsnIzJBRjQ4MycsICcjRjgwMDQxJ10pXG4gICAgICAgIC5zaGFwZSgnY2FuZGxlJylcbiAgICAgICAgLnRvb2x0aXAoJ3N0YXJ0KmVuZCptYXgqbWluKnZvbHVtbicpO1xuXG4gICAgICAvLyDliJvlu7rmu5HliqjmnaFcbiAgICAgIHZhciBzbGlkZXIgPSBuZXcgUGx1Z2luLnNsaWRlcih7XG4gICAgICAgIGRvbUlkOiAncmFuZ2UnLFxuICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICBjaGFydHM6IGNoYXJ0LFxuICAgICAgICB4RGltOiAndGltZScsXG4gICAgICAgIHlEaW06ICdtYXgnXG4gICAgICB9KTtcbiAgICAgIHNsaWRlci5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgIHBsb3RDZmc6IHtcbiAgICAgICAgbWFyZ2luOiBbMzAsIDEyMCwgMzBdLFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgZmlsbDogJyMxOTE4MjEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDaGFydDogQ2hhcnQsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHRoaXMuc3RhdGUuQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB3aWR0aD17dGhpcy5zdGF0ZS53aWR0aH0gaGVpZ2h0PXt0aGlzLnN0YXRlLmhlaWdodH0gcGxvdENmZz17dGhpcy5zdGF0ZS5wbG90Q2ZnfSByZWY9XCJteUNoYXJ0XCIvPlxuICAgICAgICA8ZGl2IGlkPVwicmFuZ2VcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxNeUNvbXBvbmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fcmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9nMi1wbHVnaW4tc2xpZGVyLm1kXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTE5XCIsXG5cdFx0XCJzdGFydFwiOiA4LjE4LFxuXHRcdFwibWF4XCI6IDguMzMsXG5cdFx0XCJtaW5cIjogNy45OCxcblx0XHRcImVuZFwiOiA4LjMyLFxuXHRcdFwidm9sdW1uXCI6IDE4MTAsXG5cdFx0XCJtb25leVwiOiAxNDcyMy41NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0xOFwiLFxuXHRcdFwic3RhcnRcIjogOC4zNyxcblx0XHRcIm1heFwiOiA4LjYsXG5cdFx0XCJtaW5cIjogOC4wMyxcblx0XHRcImVuZFwiOiA4LjA5LFxuXHRcdFwidm9sdW1uXCI6IDI3OTAuMzcsXG5cdFx0XCJtb25leVwiOiAyMzMwOS4xOVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0xN1wiLFxuXHRcdFwic3RhcnRcIjogOC43LFxuXHRcdFwibWF4XCI6IDguNzgsXG5cdFx0XCJtaW5cIjogOC4zMixcblx0XHRcImVuZFwiOiA4LjM3LFxuXHRcdFwidm9sdW1uXCI6IDM3MjkuMDQsXG5cdFx0XCJtb25leVwiOiAzMTcwOS43MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0xNlwiLFxuXHRcdFwic3RhcnRcIjogOC4xOCxcblx0XHRcIm1heFwiOiA4LjY5LFxuXHRcdFwibWluXCI6IDguMDUsXG5cdFx0XCJlbmRcIjogOC42Mixcblx0XHRcInZvbHVtblwiOiAzMDk1LjQ0LFxuXHRcdFwibW9uZXlcIjogMjYxMDAuNjlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMTNcIixcblx0XHRcInN0YXJ0XCI6IDguMDEsXG5cdFx0XCJtYXhcIjogOC43NSxcblx0XHRcIm1pblwiOiA3Ljk3LFxuXHRcdFwiZW5kXCI6IDguNDEsXG5cdFx0XCJ2b2x1bW5cIjogNTgxNS41OCxcblx0XHRcIm1vbmV5XCI6IDQ4NTYyLjM3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTEyXCIsXG5cdFx0XCJzdGFydFwiOiA3Ljc2LFxuXHRcdFwibWF4XCI6IDguMTgsXG5cdFx0XCJtaW5cIjogNy42MSxcblx0XHRcImVuZFwiOiA4LjE1LFxuXHRcdFwidm9sdW1uXCI6IDQ3NDIuNixcblx0XHRcIm1vbmV5XCI6IDM3NTY1LjM2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTExXCIsXG5cdFx0XCJzdGFydFwiOiA3LjU1LFxuXHRcdFwibWF4XCI6IDcuODEsXG5cdFx0XCJtaW5cIjogNy40OSxcblx0XHRcImVuZFwiOiA3LjgsXG5cdFx0XCJ2b2x1bW5cIjogMzEzMy44Mixcblx0XHRcIm1vbmV5XCI6IDI0MDY1LjQyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTEwXCIsXG5cdFx0XCJzdGFydFwiOiA3LjUsXG5cdFx0XCJtYXhcIjogNy42OCxcblx0XHRcIm1pblwiOiA3LjQ0LFxuXHRcdFwiZW5kXCI6IDcuNTcsXG5cdFx0XCJ2b2x1bW5cIjogMjY3MC4zNSxcblx0XHRcIm1vbmV5XCI6IDIwMjEwLjU4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTA5XCIsXG5cdFx0XCJzdGFydFwiOiA3LjY1LFxuXHRcdFwibWF4XCI6IDcuNjYsXG5cdFx0XCJtaW5cIjogNy4zLFxuXHRcdFwiZW5kXCI6IDcuNTgsXG5cdFx0XCJ2b2x1bW5cIjogMjg0MS43OSxcblx0XHRcIm1vbmV5XCI6IDIxMzQ0LjM2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTA2XCIsXG5cdFx0XCJzdGFydFwiOiA3LjUyLFxuXHRcdFwibWF4XCI6IDcuNzEsXG5cdFx0XCJtaW5cIjogNy40OCxcblx0XHRcImVuZFwiOiA3LjY0LFxuXHRcdFwidm9sdW1uXCI6IDI3MjUuNDQsXG5cdFx0XCJtb25leVwiOiAyMDcyMS41MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0wNVwiLFxuXHRcdFwic3RhcnRcIjogNy40OCxcblx0XHRcIm1heFwiOiA3LjU3LFxuXHRcdFwibWluXCI6IDcuMjksXG5cdFx0XCJlbmRcIjogNy40OCxcblx0XHRcInZvbHVtblwiOiAzNTIwLjg1LFxuXHRcdFwibW9uZXlcIjogMjYxNDAuODNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMDRcIixcblx0XHRcInN0YXJ0XCI6IDcuMDEsXG5cdFx0XCJtYXhcIjogNy41LFxuXHRcdFwibWluXCI6IDcuMDEsXG5cdFx0XCJlbmRcIjogNy40Nixcblx0XHRcInZvbHVtblwiOiAzNTkxLjQ3LFxuXHRcdFwibW9uZXlcIjogMjYyODUuNTJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMDNcIixcblx0XHRcInN0YXJ0XCI6IDcuMSxcblx0XHRcIm1heFwiOiA3LjE3LFxuXHRcdFwibWluXCI6IDYuODIsXG5cdFx0XCJlbmRcIjogNyxcblx0XHRcInZvbHVtblwiOiAyMDI5LjIxLFxuXHRcdFwibW9uZXlcIjogMTQyMDIuMzNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMDJcIixcblx0XHRcInN0YXJ0XCI6IDcuMDksXG5cdFx0XCJtYXhcIjogNy40NCxcblx0XHRcIm1pblwiOiA2LjkzLFxuXHRcdFwiZW5kXCI6IDcuMTcsXG5cdFx0XCJ2b2x1bW5cIjogMzE5MS4zMSxcblx0XHRcIm1vbmV5XCI6IDIzMjA1LjExXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTMwXCIsXG5cdFx0XCJzdGFydFwiOiA2Ljk4LFxuXHRcdFwibWF4XCI6IDcuMjcsXG5cdFx0XCJtaW5cIjogNi44NCxcblx0XHRcImVuZFwiOiA3LjE4LFxuXHRcdFwidm9sdW1uXCI6IDM1MjIuNjEsXG5cdFx0XCJtb25leVwiOiAyNTA4My40NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0yOVwiLFxuXHRcdFwic3RhcnRcIjogNi45NCxcblx0XHRcIm1heFwiOiA3LjIsXG5cdFx0XCJtaW5cIjogNi44LFxuXHRcdFwiZW5kXCI6IDcuMDUsXG5cdFx0XCJ2b2x1bW5cIjogMjc1Mi4yNyxcblx0XHRcIm1vbmV5XCI6IDE5MzI4LjQ0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTI4XCIsXG5cdFx0XCJzdGFydFwiOiA3LjAxLFxuXHRcdFwibWF4XCI6IDcuMTQsXG5cdFx0XCJtaW5cIjogNi44LFxuXHRcdFwiZW5kXCI6IDYuODUsXG5cdFx0XCJ2b2x1bW5cIjogMjMxMS4xMSxcblx0XHRcIm1vbmV5XCI6IDE2MTM3LjMyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTI3XCIsXG5cdFx0XCJzdGFydFwiOiA2LjkxLFxuXHRcdFwibWF4XCI6IDcuMzEsXG5cdFx0XCJtaW5cIjogNi40OCxcblx0XHRcImVuZFwiOiA3LjE4LFxuXHRcdFwidm9sdW1uXCI6IDMxNzIuOSxcblx0XHRcIm1vbmV5XCI6IDIxODI3LjNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMjZcIixcblx0XHRcInN0YXJ0XCI6IDYuOSxcblx0XHRcIm1heFwiOiA3LjA4LFxuXHRcdFwibWluXCI6IDYuODcsXG5cdFx0XCJlbmRcIjogNi45NSxcblx0XHRcInZvbHVtblwiOiAyNzY5LjMxLFxuXHRcdFwibW9uZXlcIjogMTkzMzcuNDRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMjNcIixcblx0XHRcInN0YXJ0XCI6IDYuNzEsXG5cdFx0XCJtYXhcIjogNi44NSxcblx0XHRcIm1pblwiOiA2LjU4LFxuXHRcdFwiZW5kXCI6IDYuNzksXG5cdFx0XCJ2b2x1bW5cIjogMjQ4My4xOCxcblx0XHRcIm1vbmV5XCI6IDE2NzE0LjMxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTIyXCIsXG5cdFx0XCJzdGFydFwiOiA2LjM4LFxuXHRcdFwibWF4XCI6IDYuNjcsXG5cdFx0XCJtaW5cIjogNi4zNCxcblx0XHRcImVuZFwiOiA2LjY1LFxuXHRcdFwidm9sdW1uXCI6IDIyMjUuODgsXG5cdFx0XCJtb25leVwiOiAxNDQ2NS41NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0yMVwiLFxuXHRcdFwic3RhcnRcIjogNy4wOCxcblx0XHRcIm1heFwiOiA3LjEsXG5cdFx0XCJtaW5cIjogNi40MSxcblx0XHRcImVuZFwiOiA2LjQxLFxuXHRcdFwidm9sdW1uXCI6IDI4OTEuNDcsXG5cdFx0XCJtb25leVwiOiAxOTU4NS45OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0yMFwiLFxuXHRcdFwic3RhcnRcIjogNi44OCxcblx0XHRcIm1heFwiOiA3LjE5LFxuXHRcdFwibWluXCI6IDYuODUsXG5cdFx0XCJlbmRcIjogNy4xMixcblx0XHRcInZvbHVtblwiOiAyMzg5LjYyLFxuXHRcdFwibW9uZXlcIjogMTY4MTMuNThcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMTlcIixcblx0XHRcInN0YXJ0XCI6IDcuMSxcblx0XHRcIm1heFwiOiA3LjE0LFxuXHRcdFwibWluXCI6IDYuOCxcblx0XHRcImVuZFwiOiA2Ljk0LFxuXHRcdFwidm9sdW1uXCI6IDI3ODYuNjEsXG5cdFx0XCJtb25leVwiOiAxOTQ3NC43MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0xNlwiLFxuXHRcdFwic3RhcnRcIjogNi45Mixcblx0XHRcIm1heFwiOiA3LjM4LFxuXHRcdFwibWluXCI6IDYuNzMsXG5cdFx0XCJlbmRcIjogNy4xNSxcblx0XHRcInZvbHVtblwiOiAzMjg5LjI3LFxuXHRcdFwibW9uZXlcIjogMjI5NjMuOTdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMTVcIixcblx0XHRcInN0YXJ0XCI6IDYuNjMsXG5cdFx0XCJtYXhcIjogNi45LFxuXHRcdFwibWluXCI6IDYuNixcblx0XHRcImVuZFwiOiA2Ljg5LFxuXHRcdFwidm9sdW1uXCI6IDI0NDAuMzcsXG5cdFx0XCJtb25leVwiOiAxNjU3NS44NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0xNFwiLFxuXHRcdFwic3RhcnRcIjogNi43LFxuXHRcdFwibWF4XCI6IDYuOTksXG5cdFx0XCJtaW5cIjogNi42MSxcblx0XHRcImVuZFwiOiA2LjY2LFxuXHRcdFwidm9sdW1uXCI6IDI0OTYuMzgsXG5cdFx0XCJtb25leVwiOiAxNjg1OC4yOFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0xM1wiLFxuXHRcdFwic3RhcnRcIjogNi41NSxcblx0XHRcIm1heFwiOiA2LjgxLFxuXHRcdFwibWluXCI6IDYuNTUsXG5cdFx0XCJlbmRcIjogNi43NSxcblx0XHRcInZvbHVtblwiOiAyMjk5LjgzLFxuXHRcdFwibW9uZXlcIjogMTUzMzguMjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMTJcIixcblx0XHRcInN0YXJ0XCI6IDYuMjksXG5cdFx0XCJtYXhcIjogNi44OSxcblx0XHRcIm1pblwiOiA2LjI5LFxuXHRcdFwiZW5kXCI6IDYuNjksXG5cdFx0XCJ2b2x1bW5cIjogMzE0Ny41OCxcblx0XHRcIm1vbmV5XCI6IDIwNzM4LjM1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTA5XCIsXG5cdFx0XCJzdGFydFwiOiA2LjEsXG5cdFx0XCJtYXhcIjogNi40NCxcblx0XHRcIm1pblwiOiA2LjA4LFxuXHRcdFwiZW5kXCI6IDYuMzQsXG5cdFx0XCJ2b2x1bW5cIjogMjY2NC4wNCxcblx0XHRcIm1vbmV5XCI6IDE2ODExLjE0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTA4XCIsXG5cdFx0XCJzdGFydFwiOiA2LjExLFxuXHRcdFwibWF4XCI6IDYuMjgsXG5cdFx0XCJtaW5cIjogNixcblx0XHRcImVuZFwiOiA2LjEyLFxuXHRcdFwidm9sdW1uXCI6IDIxOTcuMjMsXG5cdFx0XCJtb25leVwiOiAxMzQ0MC45MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0zMFwiLFxuXHRcdFwic3RhcnRcIjogNS45Myxcblx0XHRcIm1heFwiOiA2LjEyLFxuXHRcdFwibWluXCI6IDUuODEsXG5cdFx0XCJlbmRcIjogNS44Myxcblx0XHRcInZvbHVtblwiOiAxNDU5LjY0LFxuXHRcdFwibW9uZXlcIjogODY1OS41MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0yOVwiLFxuXHRcdFwic3RhcnRcIjogNS45Nixcblx0XHRcIm1heFwiOiA1Ljk4LFxuXHRcdFwibWluXCI6IDUuNzMsXG5cdFx0XCJlbmRcIjogNS44Myxcblx0XHRcInZvbHVtblwiOiAxMDQ3LjQyLFxuXHRcdFwibW9uZXlcIjogNjEzMi43MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0yOFwiLFxuXHRcdFwic3RhcnRcIjogNS44Nixcblx0XHRcIm1heFwiOiA2LjEzLFxuXHRcdFwibWluXCI6IDUuODUsXG5cdFx0XCJlbmRcIjogNi4wNyxcblx0XHRcInZvbHVtblwiOiA5NTIuNDUsXG5cdFx0XCJtb25leVwiOiA1NzE3LjMzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTI1XCIsXG5cdFx0XCJzdGFydFwiOiA2LjIzLFxuXHRcdFwibWF4XCI6IDYuMjgsXG5cdFx0XCJtaW5cIjogNS44NSxcblx0XHRcImVuZFwiOiA1Ljk2LFxuXHRcdFwidm9sdW1uXCI6IDEzOTUuMjcsXG5cdFx0XCJtb25leVwiOiA4NDY1Ljk1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTI0XCIsXG5cdFx0XCJzdGFydFwiOiA2LjE2LFxuXHRcdFwibWF4XCI6IDYuMzIsXG5cdFx0XCJtaW5cIjogNi4xLFxuXHRcdFwiZW5kXCI6IDYuMjcsXG5cdFx0XCJ2b2x1bW5cIjogMTQzNC4zOCxcblx0XHRcIm1vbmV5XCI6IDg5MjAuODhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMjNcIixcblx0XHRcInN0YXJ0XCI6IDYuMTgsXG5cdFx0XCJtYXhcIjogNi4zMixcblx0XHRcIm1pblwiOiA2LjAyLFxuXHRcdFwiZW5kXCI6IDYuMTIsXG5cdFx0XCJ2b2x1bW5cIjogMTU1OC41NCxcblx0XHRcIm1vbmV5XCI6IDk2MzEuMzhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMjJcIixcblx0XHRcInN0YXJ0XCI6IDYuMzUsXG5cdFx0XCJtYXhcIjogNi40LFxuXHRcdFwibWluXCI6IDYuMTUsXG5cdFx0XCJlbmRcIjogNi4yNSxcblx0XHRcInZvbHVtblwiOiAxODkzLjgzLFxuXHRcdFwibW9uZXlcIjogMTE5MDEuNTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMjFcIixcblx0XHRcInN0YXJ0XCI6IDUuODMsXG5cdFx0XCJtYXhcIjogNi4zMixcblx0XHRcIm1pblwiOiA1LjgzLFxuXHRcdFwiZW5kXCI6IDYuMzEsXG5cdFx0XCJ2b2x1bW5cIjogMTc0OC4zNSxcblx0XHRcIm1vbmV5XCI6IDEwODA3LjY2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTE4XCIsXG5cdFx0XCJzdGFydFwiOiA2LFxuXHRcdFwibWF4XCI6IDYuMSxcblx0XHRcIm1pblwiOiA1LjgxLFxuXHRcdFwiZW5kXCI6IDYuMDIsXG5cdFx0XCJ2b2x1bW5cIjogMTUwNy4wOSxcblx0XHRcIm1vbmV5XCI6IDg5OTkuNDRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMTdcIixcblx0XHRcInN0YXJ0XCI6IDYuMSxcblx0XHRcIm1heFwiOiA2LjM0LFxuXHRcdFwibWluXCI6IDUuOCxcblx0XHRcImVuZFwiOiA1LjgzLFxuXHRcdFwidm9sdW1uXCI6IDIxMzUuNjQsXG5cdFx0XCJtb25leVwiOiAxMzAzOS41NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0xNlwiLFxuXHRcdFwic3RhcnRcIjogNS41OCxcblx0XHRcIm1heFwiOiA2LjA3LFxuXHRcdFwibWluXCI6IDUuNCxcblx0XHRcImVuZFwiOiA2LjA3LFxuXHRcdFwidm9sdW1uXCI6IDE3NTguNTcsXG5cdFx0XCJtb25leVwiOiAxMDEzMi4yNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0xNVwiLFxuXHRcdFwic3RhcnRcIjogNS44MSxcblx0XHRcIm1heFwiOiA2LjA5LFxuXHRcdFwibWluXCI6IDUuNTIsXG5cdFx0XCJlbmRcIjogNS41Mixcblx0XHRcInZvbHVtblwiOiAxNjE3LjEyLFxuXHRcdFwibW9uZXlcIjogOTI0OC42OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0xNFwiLFxuXHRcdFwic3RhcnRcIjogNi45OCxcblx0XHRcIm1heFwiOiA3LjA2LFxuXHRcdFwibWluXCI6IDYuMTMsXG5cdFx0XCJlbmRcIjogNi4xMyxcblx0XHRcInZvbHVtblwiOiAxOTgyLjksXG5cdFx0XCJtb25leVwiOiAxMjk4OS4wMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0xMVwiLFxuXHRcdFwic3RhcnRcIjogNi44Nyxcblx0XHRcIm1heFwiOiA3LjAxLFxuXHRcdFwibWluXCI6IDYuNjgsXG5cdFx0XCJlbmRcIjogNi44MSxcblx0XHRcInZvbHVtblwiOiAxMzcxLjc3LFxuXHRcdFwibW9uZXlcIjogOTM3MC40OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0xMFwiLFxuXHRcdFwic3RhcnRcIjogNi43LFxuXHRcdFwibWF4XCI6IDcuMTcsXG5cdFx0XCJtaW5cIjogNi42NSxcblx0XHRcImVuZFwiOiA2Ljg2LFxuXHRcdFwidm9sdW1uXCI6IDIxODEuMzMsXG5cdFx0XCJtb25leVwiOiAxNTE2OS40XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTA5XCIsXG5cdFx0XCJzdGFydFwiOiA2Ljc2LFxuXHRcdFwibWF4XCI6IDcuMDMsXG5cdFx0XCJtaW5cIjogNi42NSxcblx0XHRcImVuZFwiOiA2LjkzLFxuXHRcdFwidm9sdW1uXCI6IDIxMDUuMjgsXG5cdFx0XCJtb25leVwiOiAxNDQyNi43NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0wOFwiLFxuXHRcdFwic3RhcnRcIjogNi4yNixcblx0XHRcIm1heFwiOiA2LjcsXG5cdFx0XCJtaW5cIjogNi4wMSxcblx0XHRcImVuZFwiOiA2LjY0LFxuXHRcdFwidm9sdW1uXCI6IDE1MDYuNTMsXG5cdFx0XCJtb25leVwiOiA5NTU2LjU0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTA3XCIsXG5cdFx0XCJzdGFydFwiOiA2LjE5LFxuXHRcdFwibWF4XCI6IDYuNDUsXG5cdFx0XCJtaW5cIjogNi4wOSxcblx0XHRcImVuZFwiOiA2LjIsXG5cdFx0XCJ2b2x1bW5cIjogMTYwNS44NSxcblx0XHRcIm1vbmV5XCI6IDEwMDkxLjI2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTAyXCIsXG5cdFx0XCJzdGFydFwiOiA2LjIsXG5cdFx0XCJtYXhcIjogNi44NCxcblx0XHRcIm1pblwiOiA1Ljk4LFxuXHRcdFwiZW5kXCI6IDUuOTksXG5cdFx0XCJ2b2x1bW5cIjogMTkzNC45NSxcblx0XHRcIm1vbmV5XCI6IDEyMjI1LjY4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTAxXCIsXG5cdFx0XCJzdGFydFwiOiA3LjIyLFxuXHRcdFwibWF4XCI6IDcuMjgsXG5cdFx0XCJtaW5cIjogNi42NCxcblx0XHRcImVuZFwiOiA2LjY0LFxuXHRcdFwidm9sdW1uXCI6IDI2NDUuODcsXG5cdFx0XCJtb25leVwiOiAxODAxNy45MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0zMVwiLFxuXHRcdFwic3RhcnRcIjogNy44Myxcblx0XHRcIm1heFwiOiA4LFxuXHRcdFwibWluXCI6IDcuMzUsXG5cdFx0XCJlbmRcIjogNy4zOCxcblx0XHRcInZvbHVtblwiOiAyOTg0LjAzLFxuXHRcdFwibW9uZXlcIjogMjMwMzEuMjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMjhcIixcblx0XHRcInN0YXJ0XCI6IDcuMyxcblx0XHRcIm1heFwiOiA3Ljc3LFxuXHRcdFwibWluXCI6IDcuMSxcblx0XHRcImVuZFwiOiA3Ljc3LFxuXHRcdFwidm9sdW1uXCI6IDMwOTIuNixcblx0XHRcIm1vbmV5XCI6IDIzMTIxLjQ5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTI3XCIsXG5cdFx0XCJzdGFydFwiOiA2Ljc1LFxuXHRcdFwibWF4XCI6IDcuMSxcblx0XHRcIm1pblwiOiA2LjQzLFxuXHRcdFwiZW5kXCI6IDcuMDYsXG5cdFx0XCJ2b2x1bW5cIjogMjkwMy43Nixcblx0XHRcIm1vbmV5XCI6IDE5ODQ4Ljg3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTI2XCIsXG5cdFx0XCJzdGFydFwiOiA3LjEzLFxuXHRcdFwibWF4XCI6IDcuNDMsXG5cdFx0XCJtaW5cIjogNi40Mixcblx0XHRcImVuZFwiOiA2LjU4LFxuXHRcdFwidm9sdW1uXCI6IDQyMTIuMDQsXG5cdFx0XCJtb25leVwiOiAyOTA2OS4yNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0yNVwiLFxuXHRcdFwic3RhcnRcIjogNy4xMyxcblx0XHRcIm1heFwiOiA3LjI5LFxuXHRcdFwibWluXCI6IDcuMTMsXG5cdFx0XCJlbmRcIjogNy4xMyxcblx0XHRcInZvbHVtblwiOiAxODM4LjU5LFxuXHRcdFwibW9uZXlcIjogMTMxNDAuOFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0yNFwiLFxuXHRcdFwic3RhcnRcIjogOC40LFxuXHRcdFwibWF4XCI6IDguNCxcblx0XHRcIm1pblwiOiA3LjkyLFxuXHRcdFwiZW5kXCI6IDcuOTIsXG5cdFx0XCJ2b2x1bW5cIjogMTc2Ni4zOSxcblx0XHRcIm1vbmV5XCI6IDE0MTY4Ljg2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTIxXCIsXG5cdFx0XCJzdGFydFwiOiA5LFxuXHRcdFwibWF4XCI6IDkuNjEsXG5cdFx0XCJtaW5cIjogOC41Myxcblx0XHRcImVuZFwiOiA4LjgsXG5cdFx0XCJ2b2x1bW5cIjogMzM4OC4yNyxcblx0XHRcIm1vbmV5XCI6IDMwOTUyLjExXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTIwXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4wMixcblx0XHRcIm1heFwiOiAxMC4yNCxcblx0XHRcIm1pblwiOiA5LjMyLFxuXHRcdFwiZW5kXCI6IDkuMzMsXG5cdFx0XCJ2b2x1bW5cIjogMzkwMi4xNyxcblx0XHRcIm1vbmV5XCI6IDM4MzkxLjY4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTE5XCIsXG5cdFx0XCJzdGFydFwiOiA5LjMsXG5cdFx0XCJtYXhcIjogMTAuNTksXG5cdFx0XCJtaW5cIjogOS4wMSxcblx0XHRcImVuZFwiOiAxMC4zNSxcblx0XHRcInZvbHVtblwiOiA1NTY4Ljk2LFxuXHRcdFwibW9uZXlcIjogNTM5MjguNzlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMThcIixcblx0XHRcInN0YXJ0XCI6IDExLjE4LFxuXHRcdFwibWF4XCI6IDExLjUsXG5cdFx0XCJtaW5cIjogMTAsXG5cdFx0XCJlbmRcIjogMTAsXG5cdFx0XCJ2b2x1bW5cIjogNzMzMi43LFxuXHRcdFwibW9uZXlcIjogNzg0MzkuNjFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMTdcIixcblx0XHRcInN0YXJ0XCI6IDEwLjIsXG5cdFx0XCJtYXhcIjogMTEuMTEsXG5cdFx0XCJtaW5cIjogOS45LFxuXHRcdFwiZW5kXCI6IDExLjExLFxuXHRcdFwidm9sdW1uXCI6IDgxMjEuODYsXG5cdFx0XCJtb25leVwiOiA4NjI5OC45MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0xNFwiLFxuXHRcdFwic3RhcnRcIjogOS41OCxcblx0XHRcIm1heFwiOiAxMC4zNyxcblx0XHRcIm1pblwiOiA5LjM3LFxuXHRcdFwiZW5kXCI6IDEwLjEsXG5cdFx0XCJ2b2x1bW5cIjogNjAwMS42MSxcblx0XHRcIm1vbmV5XCI6IDU4NDI1LjExXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTEzXCIsXG5cdFx0XCJzdGFydFwiOiA5LjE0LFxuXHRcdFwibWF4XCI6IDkuNSxcblx0XHRcIm1pblwiOiA4LjkxLFxuXHRcdFwiZW5kXCI6IDkuNDksXG5cdFx0XCJ2b2x1bW5cIjogMzg1NC4xOSxcblx0XHRcIm1vbmV5XCI6IDM1Njk2LjI3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTEyXCIsXG5cdFx0XCJzdGFydFwiOiA5LjA5LFxuXHRcdFwibWF4XCI6IDkuNjgsXG5cdFx0XCJtaW5cIjogOC45OCxcblx0XHRcImVuZFwiOiA5LjI5LFxuXHRcdFwidm9sdW1uXCI6IDQyMzguNTcsXG5cdFx0XCJtb25leVwiOiAzOTkwOS4zXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTExXCIsXG5cdFx0XCJzdGFydFwiOiA5LjIzLFxuXHRcdFwibWF4XCI6IDkuNDcsXG5cdFx0XCJtaW5cIjogOSxcblx0XHRcImVuZFwiOiA5LjE1LFxuXHRcdFwidm9sdW1uXCI6IDQyOTQuODUsXG5cdFx0XCJtb25leVwiOiAzOTY3NC43MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0xMFwiLFxuXHRcdFwic3RhcnRcIjogOC45LFxuXHRcdFwibWF4XCI6IDkuMzgsXG5cdFx0XCJtaW5cIjogOC43Nixcblx0XHRcImVuZFwiOiA5LjIsXG5cdFx0XCJ2b2x1bW5cIjogNDAxMy4xMSxcblx0XHRcIm1vbmV5XCI6IDM2Mjg3Ljg5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTA3XCIsXG5cdFx0XCJzdGFydFwiOiA4LjM2LFxuXHRcdFwibWF4XCI6IDguOCxcblx0XHRcIm1pblwiOiA4LjMxLFxuXHRcdFwiZW5kXCI6IDguNyxcblx0XHRcInZvbHVtblwiOiAzMDkyLjY2LFxuXHRcdFwibW9uZXlcIjogMjYzMzYuNzZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMDZcIixcblx0XHRcInN0YXJ0XCI6IDguMDMsXG5cdFx0XCJtYXhcIjogOC40Mixcblx0XHRcIm1pblwiOiA3Ljk1LFxuXHRcdFwiZW5kXCI6IDguMjUsXG5cdFx0XCJ2b2x1bW5cIjogMjA3Mi4yMSxcblx0XHRcIm1vbmV5XCI6IDE3MDYwLjExXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTA1XCIsXG5cdFx0XCJzdGFydFwiOiA4LjUsXG5cdFx0XCJtYXhcIjogOC42OSxcblx0XHRcIm1pblwiOiA4LjA4LFxuXHRcdFwiZW5kXCI6IDguMjgsXG5cdFx0XCJ2b2x1bW5cIjogMzUzMy45NCxcblx0XHRcIm1vbmV5XCI6IDI5Nzk2Ljk2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTA0XCIsXG5cdFx0XCJzdGFydFwiOiA3LjY1LFxuXHRcdFwibWF4XCI6IDguMzksXG5cdFx0XCJtaW5cIjogNy42NSxcblx0XHRcImVuZFwiOiA4LjM5LFxuXHRcdFwidm9sdW1uXCI6IDMwNjcuMjIsXG5cdFx0XCJtb25leVwiOiAyNDc3My44OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0wM1wiLFxuXHRcdFwic3RhcnRcIjogOC4xNSxcblx0XHRcIm1heFwiOiA4LjQsXG5cdFx0XCJtaW5cIjogNy42LFxuXHRcdFwiZW5kXCI6IDcuNjMsXG5cdFx0XCJ2b2x1bW5cIjogMzA5OC4zMyxcblx0XHRcIm1vbmV5XCI6IDI0MzgyLjk5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTMxXCIsXG5cdFx0XCJzdGFydFwiOiA4LjcsXG5cdFx0XCJtYXhcIjogOS4wMSxcblx0XHRcIm1pblwiOiA4LjI1LFxuXHRcdFwiZW5kXCI6IDguNDQsXG5cdFx0XCJ2b2x1bW5cIjogMzUwMC42MSxcblx0XHRcIm1vbmV5XCI6IDMwMjg5LjgzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTMwXCIsXG5cdFx0XCJzdGFydFwiOiA4LjkyLFxuXHRcdFwibWF4XCI6IDkuNjUsXG5cdFx0XCJtaW5cIjogOC43LFxuXHRcdFwiZW5kXCI6IDguOTcsXG5cdFx0XCJ2b2x1bW5cIjogNjAyMi44LFxuXHRcdFwibW9uZXlcIjogNTU2MjQuODVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMjlcIixcblx0XHRcInN0YXJ0XCI6IDguMzUsXG5cdFx0XCJtYXhcIjogOC45MSxcblx0XHRcIm1pblwiOiA3Ljc4LFxuXHRcdFwiZW5kXCI6IDguODgsXG5cdFx0XCJ2b2x1bW5cIjogNDE3Ny4xOCxcblx0XHRcIm1vbmV5XCI6IDM0ODkzLjJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMjhcIixcblx0XHRcInN0YXJ0XCI6IDgsXG5cdFx0XCJtYXhcIjogOSxcblx0XHRcIm1pblwiOiA3LjkyLFxuXHRcdFwiZW5kXCI6IDguMSxcblx0XHRcInZvbHVtblwiOiA1MTE0LjU1LFxuXHRcdFwibW9uZXlcIjogNDIwOTUuOTlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMjdcIixcblx0XHRcInN0YXJ0XCI6IDkuNCxcblx0XHRcIm1heFwiOiA5Ljk5LFxuXHRcdFwibWluXCI6IDguOCxcblx0XHRcImVuZFwiOiA4LjgsXG5cdFx0XCJ2b2x1bW5cIjogNjAwMS41MSxcblx0XHRcIm1vbmV5XCI6IDU2OTYyLjI1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTI0XCIsXG5cdFx0XCJzdGFydFwiOiA5LjI3LFxuXHRcdFwibWF4XCI6IDEwLjI4LFxuXHRcdFwibWluXCI6IDkuMTEsXG5cdFx0XCJlbmRcIjogOS43OCxcblx0XHRcInZvbHVtblwiOiA4NDQ2Ljc2LFxuXHRcdFwibW9uZXlcIjogODE5OTEuMTlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMjNcIixcblx0XHRcInN0YXJ0XCI6IDksXG5cdFx0XCJtYXhcIjogOS43OCxcblx0XHRcIm1pblwiOiA4Ljc0LFxuXHRcdFwiZW5kXCI6IDkuNDYsXG5cdFx0XCJ2b2x1bW5cIjogODQ5Ni4xLFxuXHRcdFwibW9uZXlcIjogNzc1NTEuMDFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMjJcIixcblx0XHRcInN0YXJ0XCI6IDguMDgsXG5cdFx0XCJtYXhcIjogOC45Nyxcblx0XHRcIm1pblwiOiA4LjA1LFxuXHRcdFwiZW5kXCI6IDguOTcsXG5cdFx0XCJ2b2x1bW5cIjogODY3Ni43NSxcblx0XHRcIm1vbmV5XCI6IDc1NzUxLjFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMjFcIixcblx0XHRcInN0YXJ0XCI6IDcuOCxcblx0XHRcIm1heFwiOiA4LjMzLFxuXHRcdFwibWluXCI6IDcuNjUsXG5cdFx0XCJlbmRcIjogOC4xNSxcblx0XHRcInZvbHVtblwiOiA0NjMxLjE1LFxuXHRcdFwibW9uZXlcIjogMzc0NTAuNzhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMjBcIixcblx0XHRcInN0YXJ0XCI6IDcuNzIsXG5cdFx0XCJtYXhcIjogOC4yNyxcblx0XHRcIm1pblwiOiA3LjYzLFxuXHRcdFwiZW5kXCI6IDguMDUsXG5cdFx0XCJ2b2x1bW5cIjogNjQyOC4yLFxuXHRcdFwibW9uZXlcIjogNTExMjcuOThcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMTdcIixcblx0XHRcInN0YXJ0XCI6IDYuOTQsXG5cdFx0XCJtYXhcIjogNy43Myxcblx0XHRcIm1pblwiOiA2Ljk0LFxuXHRcdFwiZW5kXCI6IDcuNzMsXG5cdFx0XCJ2b2x1bW5cIjogNDgzNS40NCxcblx0XHRcIm1vbmV5XCI6IDM2NjY2LjU4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTE2XCIsXG5cdFx0XCJzdGFydFwiOiA2LjUzLFxuXHRcdFwibWF4XCI6IDcuNDgsXG5cdFx0XCJtaW5cIjogNi40Mixcblx0XHRcImVuZFwiOiA3LjAzLFxuXHRcdFwidm9sdW1uXCI6IDM2MDUuNzcsXG5cdFx0XCJtb25leVwiOiAyNTAzMS4xNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0xNVwiLFxuXHRcdFwic3RhcnRcIjogNy41Nyxcblx0XHRcIm1heFwiOiA3LjgzLFxuXHRcdFwibWluXCI6IDcuMTMsXG5cdFx0XCJlbmRcIjogNy4xMyxcblx0XHRcInZvbHVtblwiOiAyNzI5LjU5LFxuXHRcdFwibW9uZXlcIjogMjAwNDEuNzVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMTRcIixcblx0XHRcInN0YXJ0XCI6IDguMixcblx0XHRcIm1heFwiOiA4LjcsXG5cdFx0XCJtaW5cIjogNy42Nixcblx0XHRcImVuZFwiOiA3LjkyLFxuXHRcdFwidm9sdW1uXCI6IDcwNzMuODEsXG5cdFx0XCJtb25leVwiOiA1ODEzMS4xNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0xM1wiLFxuXHRcdFwic3RhcnRcIjogNy41LFxuXHRcdFwibWF4XCI6IDguMSxcblx0XHRcIm1pblwiOiA3LjUsXG5cdFx0XCJlbmRcIjogOC4xLFxuXHRcdFwidm9sdW1uXCI6IDQ1NzMuOTIsXG5cdFx0XCJtb25leVwiOiAzNjA4My42OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0xMFwiLFxuXHRcdFwic3RhcnRcIjogNi45LFxuXHRcdFwibWF4XCI6IDcuMzYsXG5cdFx0XCJtaW5cIjogNi44OCxcblx0XHRcImVuZFwiOiA3LjM2LFxuXHRcdFwidm9sdW1uXCI6IDQxODMuMzcsXG5cdFx0XCJtb25leVwiOiAzMDQxMS4xOVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0wOVwiLFxuXHRcdFwic3RhcnRcIjogNS40Nyxcblx0XHRcIm1heFwiOiA2LjY5LFxuXHRcdFwibWluXCI6IDUuNDcsXG5cdFx0XCJlbmRcIjogNi42OSxcblx0XHRcInZvbHVtblwiOiA2NjYxLjc4LFxuXHRcdFwibW9uZXlcIjogNDAzOTguOTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMDhcIixcblx0XHRcInN0YXJ0XCI6IDYuMDgsXG5cdFx0XCJtYXhcIjogNi4wOCxcblx0XHRcIm1pblwiOiA2LjA4LFxuXHRcdFwiZW5kXCI6IDYuMDgsXG5cdFx0XCJ2b2x1bW5cIjogMTU4LjE2LFxuXHRcdFwibW9uZXlcIjogOTYxLjYxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTA3XCIsXG5cdFx0XCJzdGFydFwiOiA2Ljc3LFxuXHRcdFwibWF4XCI6IDYuODgsXG5cdFx0XCJtaW5cIjogNi43NSxcblx0XHRcImVuZFwiOiA2Ljc1LFxuXHRcdFwidm9sdW1uXCI6IDM4My40NSxcblx0XHRcIm1vbmV5XCI6IDI1OTAuODVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMDZcIixcblx0XHRcInN0YXJ0XCI6IDkuMSxcblx0XHRcIm1heFwiOiA5LjEsXG5cdFx0XCJtaW5cIjogNy41LFxuXHRcdFwiZW5kXCI6IDcuNSxcblx0XHRcInZvbHVtblwiOiAyOTY4Ljk4LFxuXHRcdFwibW9uZXlcIjogMjQwMDIuNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0wM1wiLFxuXHRcdFwic3RhcnRcIjogOC4zOCxcblx0XHRcIm1heFwiOiA4Ljg3LFxuXHRcdFwibWluXCI6IDguMzMsXG5cdFx0XCJlbmRcIjogOC4zMyxcblx0XHRcInZvbHVtblwiOiAyNjQxLjczLFxuXHRcdFwibW9uZXlcIjogMjIyMjMuNDRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMDJcIixcblx0XHRcInN0YXJ0XCI6IDEwLjM4LFxuXHRcdFwibWF4XCI6IDEwLjM4LFxuXHRcdFwibWluXCI6IDkuMjYsXG5cdFx0XCJlbmRcIjogOS4yNixcblx0XHRcInZvbHVtblwiOiAyNjExLjA2LFxuXHRcdFwibW9uZXlcIjogMjQ2MjAuODFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMDFcIixcblx0XHRcInN0YXJ0XCI6IDExLjMxLFxuXHRcdFwibWF4XCI6IDExLjYxLFxuXHRcdFwibWluXCI6IDEwLjI5LFxuXHRcdFwiZW5kXCI6IDEwLjI5LFxuXHRcdFwidm9sdW1uXCI6IDM0MDEuNDUsXG5cdFx0XCJtb25leVwiOiAzNzIxMi44N1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0zMFwiLFxuXHRcdFwic3RhcnRcIjogMTAuMDgsXG5cdFx0XCJtYXhcIjogMTEuNTIsXG5cdFx0XCJtaW5cIjogMTAuMDEsXG5cdFx0XCJlbmRcIjogMTEuNDMsXG5cdFx0XCJ2b2x1bW5cIjogNDIwNS45OSxcblx0XHRcIm1vbmV5XCI6IDQ1MzgxLjA2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTI5XCIsXG5cdFx0XCJzdGFydFwiOiAxMi45Nixcblx0XHRcIm1heFwiOiAxMi45Nixcblx0XHRcIm1pblwiOiAxMS4xMixcblx0XHRcImVuZFwiOiAxMS4xMixcblx0XHRcInZvbHVtblwiOiAzNzQ1LjY4LFxuXHRcdFwibW9uZXlcIjogNDQyNTIuNDdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMjZcIixcblx0XHRcInN0YXJ0XCI6IDEzLjE1LFxuXHRcdFwibWF4XCI6IDEzLjQxLFxuXHRcdFwibWluXCI6IDEyLjM2LFxuXHRcdFwiZW5kXCI6IDEyLjM2LFxuXHRcdFwidm9sdW1uXCI6IDM2NzUuOTEsXG5cdFx0XCJtb25leVwiOiA0Njc1OS4yOVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0yNVwiLFxuXHRcdFwic3RhcnRcIjogMTMuNzEsXG5cdFx0XCJtYXhcIjogMTQuNDYsXG5cdFx0XCJtaW5cIjogMTMuMyxcblx0XHRcImVuZFwiOiAxMy43Myxcblx0XHRcInZvbHVtblwiOiA0OTA3LjYsXG5cdFx0XCJtb25leVwiOiA2ODI5MC41XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTI0XCIsXG5cdFx0XCJzdGFydFwiOiAxMy4zNSxcblx0XHRcIm1heFwiOiAxMy44NSxcblx0XHRcIm1pblwiOiAxMi45LFxuXHRcdFwiZW5kXCI6IDEzLjcxLFxuXHRcdFwidm9sdW1uXCI6IDM2NTYuOCxcblx0XHRcIm1vbmV5XCI6IDQ5MjE5LjkyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTIzXCIsXG5cdFx0XCJzdGFydFwiOiAxMy4yNixcblx0XHRcIm1heFwiOiAxMy42NCxcblx0XHRcIm1pblwiOiAxMi4yNixcblx0XHRcImVuZFwiOiAxMy4yLFxuXHRcdFwidm9sdW1uXCI6IDM1NjYuMzUsXG5cdFx0XCJtb25leVwiOiA0NTkwNC43OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0xOVwiLFxuXHRcdFwic3RhcnRcIjogMTQuNDUsXG5cdFx0XCJtYXhcIjogMTQuOTcsXG5cdFx0XCJtaW5cIjogMTMuNjIsXG5cdFx0XCJlbmRcIjogMTMuNjIsXG5cdFx0XCJ2b2x1bW5cIjogMzYyMS40Myxcblx0XHRcIm1vbmV5XCI6IDUxMTA4LjMxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTE4XCIsXG5cdFx0XCJzdGFydFwiOiAxNC41LFxuXHRcdFwibWF4XCI6IDE2LFxuXHRcdFwibWluXCI6IDE0LjMsXG5cdFx0XCJlbmRcIjogMTUuMTMsXG5cdFx0XCJ2b2x1bW5cIjogNTA0Ni41OSxcblx0XHRcIm1vbmV5XCI6IDc3MjA4LjUzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTE3XCIsXG5cdFx0XCJzdGFydFwiOiAxNC40Nixcblx0XHRcIm1heFwiOiAxNSxcblx0XHRcIm1pblwiOiAxNCxcblx0XHRcImVuZFwiOiAxNC42LFxuXHRcdFwidm9sdW1uXCI6IDM0ODMuNyxcblx0XHRcIm1vbmV5XCI6IDUwNDk1Ljg0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTE2XCIsXG5cdFx0XCJzdGFydFwiOiAxNCxcblx0XHRcIm1heFwiOiAxNS4xLFxuXHRcdFwibWluXCI6IDEzLjQyLFxuXHRcdFwiZW5kXCI6IDE0LjgsXG5cdFx0XCJ2b2x1bW5cIjogNDg0NC43NCxcblx0XHRcIm1vbmV5XCI6IDY4OTUzLjc3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTE1XCIsXG5cdFx0XCJzdGFydFwiOiAxNC41LFxuXHRcdFwibWF4XCI6IDE1LjA5LFxuXHRcdFwibWluXCI6IDE0LjEsXG5cdFx0XCJlbmRcIjogMTQuMzksXG5cdFx0XCJ2b2x1bW5cIjogNDAwOC4yLFxuXHRcdFwibW9uZXlcIjogNTg3MDMuMjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMTJcIixcblx0XHRcInN0YXJ0XCI6IDE0LjA3LFxuXHRcdFwibWF4XCI6IDE0Ljk3LFxuXHRcdFwibWluXCI6IDE0LFxuXHRcdFwiZW5kXCI6IDE0LjM3LFxuXHRcdFwidm9sdW1uXCI6IDUzOTkuNDcsXG5cdFx0XCJtb25leVwiOiA3ODU5Mi40NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0xMVwiLFxuXHRcdFwic3RhcnRcIjogMTMuNCxcblx0XHRcIm1heFwiOiAxNC41LFxuXHRcdFwibWluXCI6IDEzLjE5LFxuXHRcdFwiZW5kXCI6IDE0LjEzLFxuXHRcdFwidm9sdW1uXCI6IDU0NzIuOTMsXG5cdFx0XCJtb25leVwiOiA3NjAzNy4zMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0xMFwiLFxuXHRcdFwic3RhcnRcIjogMTIuOTUsXG5cdFx0XCJtYXhcIjogMTMuNDcsXG5cdFx0XCJtaW5cIjogMTIuNzEsXG5cdFx0XCJlbmRcIjogMTMuMzcsXG5cdFx0XCJ2b2x1bW5cIjogNDA4Ny43NCxcblx0XHRcIm1vbmV5XCI6IDUzOTUxLjY0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTA5XCIsXG5cdFx0XCJzdGFydFwiOiAxMy40Nixcblx0XHRcIm1heFwiOiAxMy40Nixcblx0XHRcIm1pblwiOiAxMi44NSxcblx0XHRcImVuZFwiOiAxMy4xMixcblx0XHRcInZvbHVtblwiOiA0MzcxLjY3LFxuXHRcdFwibW9uZXlcIjogNTczNTIuMjFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMDhcIixcblx0XHRcInN0YXJ0XCI6IDEyLjg4LFxuXHRcdFwibWF4XCI6IDEzLjY5LFxuXHRcdFwibWluXCI6IDEyLjU5LFxuXHRcdFwiZW5kXCI6IDEzLjYxLFxuXHRcdFwidm9sdW1uXCI6IDc0MDYuNTgsXG5cdFx0XCJtb25leVwiOiA5ODIzNi4zXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTA1XCIsXG5cdFx0XCJzdGFydFwiOiAxMi4zOCxcblx0XHRcIm1heFwiOiAxMi45NCxcblx0XHRcIm1pblwiOiAxMi4yNCxcblx0XHRcImVuZFwiOiAxMi43Nyxcblx0XHRcInZvbHVtblwiOiA1Mzg2LjY2LFxuXHRcdFwibW9uZXlcIjogNjgyMDguNTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMDRcIixcblx0XHRcInN0YXJ0XCI6IDEyLjU1LFxuXHRcdFwibWF4XCI6IDEyLjgxLFxuXHRcdFwibWluXCI6IDExLjI5LFxuXHRcdFwiZW5kXCI6IDEyLjMxLFxuXHRcdFwidm9sdW1uXCI6IDM5MDUuMjIsXG5cdFx0XCJtb25leVwiOiA0NzQxNS42NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0wM1wiLFxuXHRcdFwic3RhcnRcIjogMTMsXG5cdFx0XCJtYXhcIjogMTMuMTUsXG5cdFx0XCJtaW5cIjogMTIuMixcblx0XHRcImVuZFwiOiAxMi41NCxcblx0XHRcInZvbHVtblwiOiA0NTU5LjYxLFxuXHRcdFwibW9uZXlcIjogNTc5MjguNThcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMDJcIixcblx0XHRcInN0YXJ0XCI6IDExLjg0LFxuXHRcdFwibWF4XCI6IDEyLjc3LFxuXHRcdFwibWluXCI6IDExLjQ4LFxuXHRcdFwiZW5kXCI6IDEyLjczLFxuXHRcdFwidm9sdW1uXCI6IDQ0MDUuMTcsXG5cdFx0XCJtb25leVwiOiA1Mjc0Ny45MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0wMVwiLFxuXHRcdFwic3RhcnRcIjogMTEuMjksXG5cdFx0XCJtYXhcIjogMTEuOCxcblx0XHRcIm1pblwiOiAxMSxcblx0XHRcImVuZFwiOiAxMS43NCxcblx0XHRcInZvbHVtblwiOiAzMzA4Ljk0LFxuXHRcdFwibW9uZXlcIjogMzgwNjAuMlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0yOVwiLFxuXHRcdFwic3RhcnRcIjogMTEuMyxcblx0XHRcIm1heFwiOiAxMS42NSxcblx0XHRcIm1pblwiOiAxMC4zMSxcblx0XHRcImVuZFwiOiAxMS4xMSxcblx0XHRcInZvbHVtblwiOiAzNDM0LjEyLFxuXHRcdFwibW9uZXlcIjogMzgxNDMuODhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMjhcIixcblx0XHRcInN0YXJ0XCI6IDEyLjc5LFxuXHRcdFwibWF4XCI6IDEyLjk5LFxuXHRcdFwibWluXCI6IDExLjM5LFxuXHRcdFwiZW5kXCI6IDExLjQsXG5cdFx0XCJ2b2x1bW5cIjogNDk3OS42Myxcblx0XHRcIm1vbmV5XCI6IDYxMzk4LjM2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTI3XCIsXG5cdFx0XCJzdGFydFwiOiAxMi44OSxcblx0XHRcIm1heFwiOiAxMy4xOCxcblx0XHRcIm1pblwiOiAxMi41LFxuXHRcdFwiZW5kXCI6IDEyLjY2LFxuXHRcdFwidm9sdW1uXCI6IDQ4ODYuODYsXG5cdFx0XCJtb25leVwiOiA2MjM0OS42M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0yNlwiLFxuXHRcdFwic3RhcnRcIjogMTIuNCxcblx0XHRcIm1heFwiOiAxMy4wOCxcblx0XHRcIm1pblwiOiAxMS45Nixcblx0XHRcImVuZFwiOiAxMi45Mixcblx0XHRcInZvbHVtblwiOiA1ODM4LjUxLFxuXHRcdFwibW9uZXlcIjogNzM0MDkuOTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMjVcIixcblx0XHRcInN0YXJ0XCI6IDExLjcsXG5cdFx0XCJtYXhcIjogMTIuODcsXG5cdFx0XCJtaW5cIjogMTEuNjEsXG5cdFx0XCJlbmRcIjogMTIuMyxcblx0XHRcInZvbHVtblwiOiA2NDA1LjIsXG5cdFx0XCJtb25leVwiOiA3ODkzNy4zMlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0yMlwiLFxuXHRcdFwic3RhcnRcIjogMTEuMzksXG5cdFx0XCJtYXhcIjogMTEuODksXG5cdFx0XCJtaW5cIjogMTEuMTgsXG5cdFx0XCJlbmRcIjogMTEuNzEsXG5cdFx0XCJ2b2x1bW5cIjogNTUxOS44Nyxcblx0XHRcIm1vbmV5XCI6IDYzNTE1LjkzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTIxXCIsXG5cdFx0XCJzdGFydFwiOiAxMS4yNyxcblx0XHRcIm1heFwiOiAxMS4zNSxcblx0XHRcIm1pblwiOiAxMS4wNSxcblx0XHRcImVuZFwiOiAxMS4zMyxcblx0XHRcInZvbHVtblwiOiA0MTMyLjgsXG5cdFx0XCJtb25leVwiOiA0NjMxOC42NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0yMFwiLFxuXHRcdFwic3RhcnRcIjogMTEuMjMsXG5cdFx0XCJtYXhcIjogMTEuNDgsXG5cdFx0XCJtaW5cIjogMTAuODEsXG5cdFx0XCJlbmRcIjogMTEuMzIsXG5cdFx0XCJ2b2x1bW5cIjogNjg1OS43Nixcblx0XHRcIm1vbmV5XCI6IDc2MjczLjY1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTE5XCIsXG5cdFx0XCJzdGFydFwiOiAxMS41LFxuXHRcdFwibWF4XCI6IDExLjc4LFxuXHRcdFwibWluXCI6IDExLFxuXHRcdFwiZW5kXCI6IDExLjMzLFxuXHRcdFwidm9sdW1uXCI6IDY4NjQuMDUsXG5cdFx0XCJtb25leVwiOiA3NzczMS4zNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0xOFwiLFxuXHRcdFwic3RhcnRcIjogMTEuNjgsXG5cdFx0XCJtYXhcIjogMTIuMjUsXG5cdFx0XCJtaW5cIjogMTEuNDUsXG5cdFx0XCJlbmRcIjogMTIuMTUsXG5cdFx0XCJ2b2x1bW5cIjogNDIzNi41LFxuXHRcdFwibW9uZXlcIjogNTA3MjguNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0xNVwiLFxuXHRcdFwic3RhcnRcIjogMTEuMTksXG5cdFx0XCJtYXhcIjogMTIuMjgsXG5cdFx0XCJtaW5cIjogMTAuOCxcblx0XHRcImVuZFwiOiAxMS42OSxcblx0XHRcInZvbHVtblwiOiA1NTE1LjY2LFxuXHRcdFwibW9uZXlcIjogNjQ0OTYuMzJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMTRcIixcblx0XHRcInN0YXJ0XCI6IDEwLjE4LFxuXHRcdFwibWF4XCI6IDExLjE5LFxuXHRcdFwibWluXCI6IDEwLjExLFxuXHRcdFwiZW5kXCI6IDExLjE5LFxuXHRcdFwidm9sdW1uXCI6IDQxODEuNzcsXG5cdFx0XCJtb25leVwiOiA0NTM5OS4xOVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0xM1wiLFxuXHRcdFwic3RhcnRcIjogMTAuMixcblx0XHRcIm1heFwiOiAxMC4zMixcblx0XHRcIm1pblwiOiAxMCxcblx0XHRcImVuZFwiOiAxMC4xNyxcblx0XHRcInZvbHVtblwiOiAyMjQ3LjM5LFxuXHRcdFwibW9uZXlcIjogMjI3ODEuMjNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMTJcIixcblx0XHRcInN0YXJ0XCI6IDEwLjMsXG5cdFx0XCJtYXhcIjogMTAuMzYsXG5cdFx0XCJtaW5cIjogMTAuMDEsXG5cdFx0XCJlbmRcIjogMTAuMjgsXG5cdFx0XCJ2b2x1bW5cIjogMjAxMC42NSxcblx0XHRcIm1vbmV5XCI6IDIwNDgwLjYzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTExXCIsXG5cdFx0XCJzdGFydFwiOiA5Ljk4LFxuXHRcdFwibWF4XCI6IDEwLjM2LFxuXHRcdFwibWluXCI6IDkuODksXG5cdFx0XCJlbmRcIjogMTAuMyxcblx0XHRcInZvbHVtblwiOiAyMTAxLjI2LFxuXHRcdFwibW9uZXlcIjogMjEzNjcuNTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMDhcIixcblx0XHRcInN0YXJ0XCI6IDkuODIsXG5cdFx0XCJtYXhcIjogMTAuMDgsXG5cdFx0XCJtaW5cIjogOS42NSxcblx0XHRcImVuZFwiOiA5Ljk0LFxuXHRcdFwidm9sdW1uXCI6IDE2MDkuNDMsXG5cdFx0XCJtb25leVwiOiAxNTg0NS41NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0wN1wiLFxuXHRcdFwic3RhcnRcIjogOS42Mixcblx0XHRcIm1heFwiOiA5Ljg0LFxuXHRcdFwibWluXCI6IDkuNDUsXG5cdFx0XCJlbmRcIjogOS42LFxuXHRcdFwidm9sdW1uXCI6IDEyNzAuODYsXG5cdFx0XCJtb25leVwiOiAxMjI0MS4xN1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0wNlwiLFxuXHRcdFwic3RhcnRcIjogMTAuMTgsXG5cdFx0XCJtYXhcIjogMTAuMjUsXG5cdFx0XCJtaW5cIjogOS42LFxuXHRcdFwiZW5kXCI6IDkuNjYsXG5cdFx0XCJ2b2x1bW5cIjogMTc1NC43LFxuXHRcdFwibW9uZXlcIjogMTczNDcuMDVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMDVcIixcblx0XHRcInN0YXJ0XCI6IDEwLjY4LFxuXHRcdFwibWF4XCI6IDEwLjY4LFxuXHRcdFwibWluXCI6IDEwLFxuXHRcdFwiZW5kXCI6IDEwLjAyLFxuXHRcdFwidm9sdW1uXCI6IDE5MDMuNSxcblx0XHRcIm1vbmV5XCI6IDE5NTk4LjY0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTA0XCIsXG5cdFx0XCJzdGFydFwiOiAxMC42MSxcblx0XHRcIm1heFwiOiAxMC44NCxcblx0XHRcIm1pblwiOiAxMC41NSxcblx0XHRcImVuZFwiOiAxMC43Mixcblx0XHRcInZvbHVtblwiOiAxNTU0LjkzLFxuXHRcdFwibW9uZXlcIjogMTY2MjQuNDNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMzBcIixcblx0XHRcInN0YXJ0XCI6IDEwLjQsXG5cdFx0XCJtYXhcIjogMTEuMDUsXG5cdFx0XCJtaW5cIjogMTAuNCxcblx0XHRcImVuZFwiOiAxMC42Myxcblx0XHRcInZvbHVtblwiOiAyMTY5LjA2LFxuXHRcdFwibW9uZXlcIjogMjMzMzMuMDZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMjlcIixcblx0XHRcInN0YXJ0XCI6IDEwLjMxLFxuXHRcdFwibWF4XCI6IDEwLjY0LFxuXHRcdFwibWluXCI6IDEwLjI1LFxuXHRcdFwiZW5kXCI6IDEwLjQsXG5cdFx0XCJ2b2x1bW5cIjogMTYxNC43Nyxcblx0XHRcIm1vbmV5XCI6IDE2OTEwLjk2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTI4XCIsXG5cdFx0XCJzdGFydFwiOiAxMS4wNyxcblx0XHRcIm1heFwiOiAxMS4yNSxcblx0XHRcIm1pblwiOiAxMC40Nixcblx0XHRcImVuZFwiOiAxMC40OSxcblx0XHRcInZvbHVtblwiOiAyNTUyLjIxLFxuXHRcdFwibW9uZXlcIjogMjc1MTUuODhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMjdcIixcblx0XHRcInN0YXJ0XCI6IDEwLjYsXG5cdFx0XCJtYXhcIjogMTEuNjcsXG5cdFx0XCJtaW5cIjogMTAuNixcblx0XHRcImVuZFwiOiAxMS4wNixcblx0XHRcInZvbHVtblwiOiA0MjE2LjQ2LFxuXHRcdFwibW9uZXlcIjogNDc1MzQuNTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMjRcIixcblx0XHRcInN0YXJ0XCI6IDEwLjUsXG5cdFx0XCJtYXhcIjogMTAuODUsXG5cdFx0XCJtaW5cIjogMTAuMjUsXG5cdFx0XCJlbmRcIjogMTAuNjEsXG5cdFx0XCJ2b2x1bW5cIjogMjMyNi40Mixcblx0XHRcIm1vbmV5XCI6IDI0NTk5LjYzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTIzXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4yNixcblx0XHRcIm1heFwiOiAxMC45Myxcblx0XHRcIm1pblwiOiAxMC4xMSxcblx0XHRcImVuZFwiOiAxMC43LFxuXHRcdFwidm9sdW1uXCI6IDM3NjcuNzcsXG5cdFx0XCJtb25leVwiOiAzOTY0My43MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0yMlwiLFxuXHRcdFwic3RhcnRcIjogMTAuMjIsXG5cdFx0XCJtYXhcIjogMTAuNDIsXG5cdFx0XCJtaW5cIjogMTAuMDgsXG5cdFx0XCJlbmRcIjogMTAuMjMsXG5cdFx0XCJ2b2x1bW5cIjogMjg2OC43Nyxcblx0XHRcIm1vbmV5XCI6IDI5MzE2LjQ5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTIxXCIsXG5cdFx0XCJzdGFydFwiOiA5LjU2LFxuXHRcdFwibWF4XCI6IDEwLjIsXG5cdFx0XCJtaW5cIjogOS40LFxuXHRcdFwiZW5kXCI6IDEwLjE5LFxuXHRcdFwidm9sdW1uXCI6IDM0OTMuNjEsXG5cdFx0XCJtb25leVwiOiAzNDg2NS4wMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0yMFwiLFxuXHRcdFwic3RhcnRcIjogOS43MSxcblx0XHRcIm1heFwiOiA5Ljk5LFxuXHRcdFwibWluXCI6IDkuNDIsXG5cdFx0XCJlbmRcIjogOS42LFxuXHRcdFwidm9sdW1uXCI6IDI0NjIuMDksXG5cdFx0XCJtb25leVwiOiAyMzc2OS41XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTE3XCIsXG5cdFx0XCJzdGFydFwiOiA5Ljc5LFxuXHRcdFwibWF4XCI6IDEwLjA5LFxuXHRcdFwibWluXCI6IDkuMTYsXG5cdFx0XCJlbmRcIjogOS44Mixcblx0XHRcInZvbHVtblwiOiA0NDczLjMzLFxuXHRcdFwibW9uZXlcIjogNDMzNjcuMjlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMTZcIixcblx0XHRcInN0YXJ0XCI6IDkuMzYsXG5cdFx0XCJtYXhcIjogMTAuMDQsXG5cdFx0XCJtaW5cIjogOC45LFxuXHRcdFwiZW5kXCI6IDkuNjYsXG5cdFx0XCJ2b2x1bW5cIjogMjg1MS43OSxcblx0XHRcIm1vbmV5XCI6IDI3MjEwLjAzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTE1XCIsXG5cdFx0XCJzdGFydFwiOiAxMC4wMyxcblx0XHRcIm1heFwiOiAxMC4yOCxcblx0XHRcIm1pblwiOiA5LjM3LFxuXHRcdFwiZW5kXCI6IDkuNDMsXG5cdFx0XCJ2b2x1bW5cIjogMzEzOC4xMSxcblx0XHRcIm1vbmV5XCI6IDMwNzEzLjEzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTE0XCIsXG5cdFx0XCJzdGFydFwiOiAxMC4zMyxcblx0XHRcIm1heFwiOiAxMC4zMyxcblx0XHRcIm1pblwiOiA5Ljk4LFxuXHRcdFwiZW5kXCI6IDEwLjAzLFxuXHRcdFwidm9sdW1uXCI6IDI5NTEuNTksXG5cdFx0XCJtb25leVwiOiAyOTgwMy40XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTEzXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4zLFxuXHRcdFwibWF4XCI6IDEwLjYzLFxuXHRcdFwibWluXCI6IDEwLjIsXG5cdFx0XCJlbmRcIjogMTAuMzMsXG5cdFx0XCJ2b2x1bW5cIjogMzE5Ni45OSxcblx0XHRcIm1vbmV5XCI6IDMzMzUxLjc2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTEwXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4yNSxcblx0XHRcIm1heFwiOiAxMC41LFxuXHRcdFwibWluXCI6IDEwLFxuXHRcdFwiZW5kXCI6IDEwLjI4LFxuXHRcdFwidm9sdW1uXCI6IDI1NjUuNjQsXG5cdFx0XCJtb25leVwiOiAyNjMzNy44MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0wOVwiLFxuXHRcdFwic3RhcnRcIjogOS43OCxcblx0XHRcIm1heFwiOiAxMC40OCxcblx0XHRcIm1pblwiOiA5LjU4LFxuXHRcdFwiZW5kXCI6IDEwLjIyLFxuXHRcdFwidm9sdW1uXCI6IDQzMTYuODYsXG5cdFx0XCJtb25leVwiOiA0MzY0Ny4zM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0wOFwiLFxuXHRcdFwic3RhcnRcIjogOS40Nixcblx0XHRcIm1heFwiOiA5Ljg2LFxuXHRcdFwibWluXCI6IDkuMDIsXG5cdFx0XCJlbmRcIjogOS43OCxcblx0XHRcInZvbHVtblwiOiAzNjgzLjQzLFxuXHRcdFwibW9uZXlcIjogMzQ2NjQuNjZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMDdcIixcblx0XHRcInN0YXJ0XCI6IDkuNTMsXG5cdFx0XCJtYXhcIjogOS44Nyxcblx0XHRcIm1pblwiOiA5LjM4LFxuXHRcdFwiZW5kXCI6IDkuNDQsXG5cdFx0XCJ2b2x1bW5cIjogMzg3NC4wNixcblx0XHRcIm1vbmV5XCI6IDM3MDc2Ljc5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTAzXCIsXG5cdFx0XCJzdGFydFwiOiA4LjYsXG5cdFx0XCJtYXhcIjogOS40OCxcblx0XHRcIm1pblwiOiA4LjQsXG5cdFx0XCJlbmRcIjogOS40OCxcblx0XHRcInZvbHVtblwiOiAzNzYwLjc4LFxuXHRcdFwibW9uZXlcIjogMzQzNjEuMjhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMDJcIixcblx0XHRcInN0YXJ0XCI6IDguNDUsXG5cdFx0XCJtYXhcIjogOC43NCxcblx0XHRcIm1pblwiOiA4LjE4LFxuXHRcdFwiZW5kXCI6IDguNjIsXG5cdFx0XCJ2b2x1bW5cIjogMzA3Ni44Myxcblx0XHRcIm1vbmV5XCI6IDI2MTEyLjk4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTAxXCIsXG5cdFx0XCJzdGFydFwiOiA4LjE2LFxuXHRcdFwibWF4XCI6IDguNjEsXG5cdFx0XCJtaW5cIjogOC4wNixcblx0XHRcImVuZFwiOiA4LjQ1LFxuXHRcdFwidm9sdW1uXCI6IDIzOTYuODksXG5cdFx0XCJtb25leVwiOiAyMDAwMC44OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0zMVwiLFxuXHRcdFwic3RhcnRcIjogOC4xOCxcblx0XHRcIm1heFwiOiA4LjUsXG5cdFx0XCJtaW5cIjogOC4xMyxcblx0XHRcImVuZFwiOiA4LjE2LFxuXHRcdFwidm9sdW1uXCI6IDE5MzgsXG5cdFx0XCJtb25leVwiOiAxNTk4OS4zM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0zMFwiLFxuXHRcdFwic3RhcnRcIjogOC4yLFxuXHRcdFwibWF4XCI6IDguNTMsXG5cdFx0XCJtaW5cIjogOC4xMSxcblx0XHRcImVuZFwiOiA4LjI2LFxuXHRcdFwidm9sdW1uXCI6IDI4MjAuNzksXG5cdFx0XCJtb25leVwiOiAyMzUzMi45OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0yN1wiLFxuXHRcdFwic3RhcnRcIjogOC40LFxuXHRcdFwibWF4XCI6IDguNCxcblx0XHRcIm1pblwiOiA4LjAxLFxuXHRcdFwiZW5kXCI6IDguMjgsXG5cdFx0XCJ2b2x1bW5cIjogNDYzNC41Nyxcblx0XHRcIm1vbmV5XCI6IDM4MDMyLjY4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTI2XCIsXG5cdFx0XCJzdGFydFwiOiA3LjM5LFxuXHRcdFwibWF4XCI6IDguMTIsXG5cdFx0XCJtaW5cIjogNy4zMixcblx0XHRcImVuZFwiOiA4LjEyLFxuXHRcdFwidm9sdW1uXCI6IDQyMDkuMjksXG5cdFx0XCJtb25leVwiOiAzMzY0My4wM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0yNVwiLFxuXHRcdFwic3RhcnRcIjogNy4zNixcblx0XHRcIm1heFwiOiA3LjYsXG5cdFx0XCJtaW5cIjogNy4yLFxuXHRcdFwiZW5kXCI6IDcuMzgsXG5cdFx0XCJ2b2x1bW5cIjogMTg0NS40OSxcblx0XHRcIm1vbmV5XCI6IDEzNTUwLjIxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTI0XCIsXG5cdFx0XCJzdGFydFwiOiA3LjYyLFxuXHRcdFwibWF4XCI6IDcuNjIsXG5cdFx0XCJtaW5cIjogNy4yLFxuXHRcdFwiZW5kXCI6IDcuMzUsXG5cdFx0XCJ2b2x1bW5cIjogMjI2NC41LFxuXHRcdFwibW9uZXlcIjogMTY2OTkuNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0yM1wiLFxuXHRcdFwic3RhcnRcIjogNy41NCxcblx0XHRcIm1heFwiOiA3LjY4LFxuXHRcdFwibWluXCI6IDcuNDYsXG5cdFx0XCJlbmRcIjogNy41OSxcblx0XHRcInZvbHVtblwiOiAxODM0LjI4LFxuXHRcdFwibW9uZXlcIjogMTM4NTUuNDFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMjBcIixcblx0XHRcInN0YXJ0XCI6IDcuMzMsXG5cdFx0XCJtYXhcIjogNy42NSxcblx0XHRcIm1pblwiOiA3LjI1LFxuXHRcdFwiZW5kXCI6IDcuNTUsXG5cdFx0XCJ2b2x1bW5cIjogMjQ3MC43MSxcblx0XHRcIm1vbmV5XCI6IDE4NTg4LjEzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTE5XCIsXG5cdFx0XCJzdGFydFwiOiA3LjM4LFxuXHRcdFwibWF4XCI6IDcuNjYsXG5cdFx0XCJtaW5cIjogNy4yNixcblx0XHRcImVuZFwiOiA3LjM3LFxuXHRcdFwidm9sdW1uXCI6IDI0NTAuNTQsXG5cdFx0XCJtb25leVwiOiAxODI0Ny44MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0xOFwiLFxuXHRcdFwic3RhcnRcIjogNy4xMixcblx0XHRcIm1heFwiOiA3LjQ2LFxuXHRcdFwibWluXCI6IDcuMSxcblx0XHRcImVuZFwiOiA3LjM3LFxuXHRcdFwidm9sdW1uXCI6IDI4NTQuNCxcblx0XHRcIm1vbmV5XCI6IDIwODI4Ljg4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTE3XCIsXG5cdFx0XCJzdGFydFwiOiA2Ljk1LFxuXHRcdFwibWF4XCI6IDcuMTMsXG5cdFx0XCJtaW5cIjogNi44Nyxcblx0XHRcImVuZFwiOiA3LjA5LFxuXHRcdFwidm9sdW1uXCI6IDI0NTcuMTMsXG5cdFx0XCJtb25leVwiOiAxNzE2Mi41NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0xNlwiLFxuXHRcdFwic3RhcnRcIjogNi44LFxuXHRcdFwibWF4XCI6IDcuMDYsXG5cdFx0XCJtaW5cIjogNi43OSxcblx0XHRcImVuZFwiOiA2Ljk1LFxuXHRcdFwidm9sdW1uXCI6IDE4NTguNzgsXG5cdFx0XCJtb25leVwiOiAxMjkyNC4yMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0xM1wiLFxuXHRcdFwic3RhcnRcIjogNi44NSxcblx0XHRcIm1heFwiOiA2LjkzLFxuXHRcdFwibWluXCI6IDYuNjksXG5cdFx0XCJlbmRcIjogNi43OSxcblx0XHRcInZvbHVtblwiOiAxMTY3LjA2LFxuXHRcdFwibW9uZXlcIjogNzkwOS42NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0xMlwiLFxuXHRcdFwic3RhcnRcIjogNi44NCxcblx0XHRcIm1heFwiOiA3LjA2LFxuXHRcdFwibWluXCI6IDYuNzEsXG5cdFx0XCJlbmRcIjogNi44NSxcblx0XHRcInZvbHVtblwiOiAyMTUyLjg1LFxuXHRcdFwibW9uZXlcIjogMTQ4MzUuNDFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMTFcIixcblx0XHRcInN0YXJ0XCI6IDYuOTgsXG5cdFx0XCJtYXhcIjogNy4wNCxcblx0XHRcIm1pblwiOiA2Ljc3LFxuXHRcdFwiZW5kXCI6IDYuODQsXG5cdFx0XCJ2b2x1bW5cIjogMTQ0NS43Nyxcblx0XHRcIm1vbmV5XCI6IDk4ODYuNTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMTBcIixcblx0XHRcInN0YXJ0XCI6IDYuNzMsXG5cdFx0XCJtYXhcIjogNi45OSxcblx0XHRcIm1pblwiOiA2LjcsXG5cdFx0XCJlbmRcIjogNi45Nyxcblx0XHRcInZvbHVtblwiOiAxOTk5LjkzLFxuXHRcdFwibW9uZXlcIjogMTM3NzAuMzdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMDlcIixcblx0XHRcInN0YXJ0XCI6IDYuNTksXG5cdFx0XCJtYXhcIjogNi44OCxcblx0XHRcIm1pblwiOiA2LjQsXG5cdFx0XCJlbmRcIjogNi43Mixcblx0XHRcInZvbHVtblwiOiAyMjQzLjEsXG5cdFx0XCJtb25leVwiOiAxNDk1MS4xXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTA2XCIsXG5cdFx0XCJzdGFydFwiOiA2LjQ3LFxuXHRcdFwibWF4XCI6IDYuNixcblx0XHRcIm1pblwiOiA2LjM1LFxuXHRcdFwiZW5kXCI6IDYuNSxcblx0XHRcInZvbHVtblwiOiAxMjcwLjQ5LFxuXHRcdFwibW9uZXlcIjogODIyOS45NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0wNVwiLFxuXHRcdFwic3RhcnRcIjogNi40Myxcblx0XHRcIm1heFwiOiA2LjU0LFxuXHRcdFwibWluXCI6IDYuMzQsXG5cdFx0XCJlbmRcIjogNi40Nyxcblx0XHRcInZvbHVtblwiOiAxMzYzLjA5LFxuXHRcdFwibW9uZXlcIjogODc4OS40NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0wNFwiLFxuXHRcdFwic3RhcnRcIjogNi4zNSxcblx0XHRcIm1heFwiOiA2LjQ1LFxuXHRcdFwibWluXCI6IDYuMzIsXG5cdFx0XCJlbmRcIjogNi40MSxcblx0XHRcInZvbHVtblwiOiAxMjk1LjQyLFxuXHRcdFwibW9uZXlcIjogODI2NS42M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0wM1wiLFxuXHRcdFwic3RhcnRcIjogNi4xNixcblx0XHRcIm1heFwiOiA2LjQ3LFxuXHRcdFwibWluXCI6IDYuMDcsXG5cdFx0XCJlbmRcIjogNi40Mixcblx0XHRcInZvbHVtblwiOiAyMjY2LjgyLFxuXHRcdFwibW9uZXlcIjogMTQyMTQuNzlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMDJcIixcblx0XHRcInN0YXJ0XCI6IDYuMjIsXG5cdFx0XCJtYXhcIjogNi4yNSxcblx0XHRcIm1pblwiOiA2LjA3LFxuXHRcdFwiZW5kXCI6IDYuMTcsXG5cdFx0XCJ2b2x1bW5cIjogMTI3Ny44OCxcblx0XHRcIm1vbmV5XCI6IDc4NTAuMzRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMjdcIixcblx0XHRcInN0YXJ0XCI6IDYuMTYsXG5cdFx0XCJtYXhcIjogNi4zMyxcblx0XHRcIm1pblwiOiA2LjE1LFxuXHRcdFwiZW5kXCI6IDYuMTksXG5cdFx0XCJ2b2x1bW5cIjogOTA4Ljk4LFxuXHRcdFwibW9uZXlcIjogNTY2My43NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0yNlwiLFxuXHRcdFwic3RhcnRcIjogNi4xMixcblx0XHRcIm1heFwiOiA2LjE4LFxuXHRcdFwibWluXCI6IDYuMSxcblx0XHRcImVuZFwiOiA2LjE2LFxuXHRcdFwidm9sdW1uXCI6IDcwMy43Mixcblx0XHRcIm1vbmV5XCI6IDQzMjguNTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMjVcIixcblx0XHRcInN0YXJ0XCI6IDYuMDksXG5cdFx0XCJtYXhcIjogNi4xOCxcblx0XHRcIm1pblwiOiA2LjAzLFxuXHRcdFwiZW5kXCI6IDYuMTIsXG5cdFx0XCJ2b2x1bW5cIjogNzY2LjU2LFxuXHRcdFwibW9uZXlcIjogNDY3OC43M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0xN1wiLFxuXHRcdFwic3RhcnRcIjogNi4xMSxcblx0XHRcIm1heFwiOiA2LjE1LFxuXHRcdFwibWluXCI6IDYuMDYsXG5cdFx0XCJlbmRcIjogNi4wOCxcblx0XHRcInZvbHVtblwiOiA3NjYuNzMsXG5cdFx0XCJtb25leVwiOiA0Njc3LjMxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTE2XCIsXG5cdFx0XCJzdGFydFwiOiA2LjAzLFxuXHRcdFwibWF4XCI6IDYuMTQsXG5cdFx0XCJtaW5cIjogNi4wMSxcblx0XHRcImVuZFwiOiA2LjExLFxuXHRcdFwidm9sdW1uXCI6IDgxNC43MSxcblx0XHRcIm1vbmV5XCI6IDQ5NDguMzNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMTNcIixcblx0XHRcInN0YXJ0XCI6IDUuOTgsXG5cdFx0XCJtYXhcIjogNi4zNCxcblx0XHRcIm1pblwiOiA1LjkzLFxuXHRcdFwiZW5kXCI6IDYuMDgsXG5cdFx0XCJ2b2x1bW5cIjogMTk5Mi41Nixcblx0XHRcIm1vbmV5XCI6IDEyMTM1LjAxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTEyXCIsXG5cdFx0XCJzdGFydFwiOiA1LjcyLFxuXHRcdFwibWF4XCI6IDYuMSxcblx0XHRcIm1pblwiOiA1LjY2LFxuXHRcdFwiZW5kXCI6IDYuMDEsXG5cdFx0XCJ2b2x1bW5cIjogMjU3Mi4zOCxcblx0XHRcIm1vbmV5XCI6IDE1MzEyLjczXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTExXCIsXG5cdFx0XCJzdGFydFwiOiA1LjY5LFxuXHRcdFwibWF4XCI6IDUuNzcsXG5cdFx0XCJtaW5cIjogNS42Nyxcblx0XHRcImVuZFwiOiA1LjcyLFxuXHRcdFwidm9sdW1uXCI6IDYwMi42Nixcblx0XHRcIm1vbmV5XCI6IDM0NDMuOTlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMTBcIixcblx0XHRcInN0YXJ0XCI6IDUuNDYsXG5cdFx0XCJtYXhcIjogNS43NSxcblx0XHRcIm1pblwiOiA1LjQzLFxuXHRcdFwiZW5kXCI6IDUuNzMsXG5cdFx0XCJ2b2x1bW5cIjogMTI5OC42Myxcblx0XHRcIm1vbmV5XCI6IDczMDcuNDJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMDlcIixcblx0XHRcInN0YXJ0XCI6IDUuNTksXG5cdFx0XCJtYXhcIjogNS41OSxcblx0XHRcIm1pblwiOiA1LjQ3LFxuXHRcdFwiZW5kXCI6IDUuNDgsXG5cdFx0XCJ2b2x1bW5cIjogNDM1Ljk4LFxuXHRcdFwibW9uZXlcIjogMjQxMC4wOVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0wNlwiLFxuXHRcdFwic3RhcnRcIjogNS41LFxuXHRcdFwibWF4XCI6IDUuNjIsXG5cdFx0XCJtaW5cIjogNS40OCxcblx0XHRcImVuZFwiOiA1LjYxLFxuXHRcdFwidm9sdW1uXCI6IDYzMC42LFxuXHRcdFwibW9uZXlcIjogMzQ5MC4xM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0wNVwiLFxuXHRcdFwic3RhcnRcIjogNS41OCxcblx0XHRcIm1heFwiOiA1LjU5LFxuXHRcdFwibWluXCI6IDUuNDcsXG5cdFx0XCJlbmRcIjogNS40OCxcblx0XHRcInZvbHVtblwiOiA2MzYuNyxcblx0XHRcIm1vbmV5XCI6IDM1MjEuODlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMDRcIixcblx0XHRcInN0YXJ0XCI6IDUuNjMsXG5cdFx0XCJtYXhcIjogNS42Nyxcblx0XHRcIm1pblwiOiA1LjUyLFxuXHRcdFwiZW5kXCI6IDUuNTIsXG5cdFx0XCJ2b2x1bW5cIjogNjM1LjM4LFxuXHRcdFwibW9uZXlcIjogMzU0OC45NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0wM1wiLFxuXHRcdFwic3RhcnRcIjogNS42Myxcblx0XHRcIm1heFwiOiA1LjY3LFxuXHRcdFwibWluXCI6IDUuNTYsXG5cdFx0XCJlbmRcIjogNS42NSxcblx0XHRcInZvbHVtblwiOiA0MzQuMzQsXG5cdFx0XCJtb25leVwiOiAyNDM5LjA4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTAyXCIsXG5cdFx0XCJzdGFydFwiOiA1LjU1LFxuXHRcdFwibWF4XCI6IDUuNjUsXG5cdFx0XCJtaW5cIjogNS41MSxcblx0XHRcImVuZFwiOiA1LjYxLFxuXHRcdFwidm9sdW1uXCI6IDMzOC43MSxcblx0XHRcIm1vbmV5XCI6IDE4OTYuMDFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMzBcIixcblx0XHRcInN0YXJ0XCI6IDUuNzgsXG5cdFx0XCJtYXhcIjogNS44NSxcblx0XHRcIm1pblwiOiA1LjYsXG5cdFx0XCJlbmRcIjogNS42NSxcblx0XHRcInZvbHVtblwiOiA1NzQuNzQsXG5cdFx0XCJtb25leVwiOiAzMjcwLjI1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTI5XCIsXG5cdFx0XCJzdGFydFwiOiA1LjgsXG5cdFx0XCJtYXhcIjogNS44Nyxcblx0XHRcIm1pblwiOiA1Ljc0LFxuXHRcdFwiZW5kXCI6IDUuNzgsXG5cdFx0XCJ2b2x1bW5cIjogNjA1LjU1LFxuXHRcdFwibW9uZXlcIjogMzUxNi4xNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0yOFwiLFxuXHRcdFwic3RhcnRcIjogNS44OSxcblx0XHRcIm1heFwiOiA1Ljk1LFxuXHRcdFwibWluXCI6IDUuODIsXG5cdFx0XCJlbmRcIjogNS44NSxcblx0XHRcInZvbHVtblwiOiA2NTMuNDcsXG5cdFx0XCJtb25leVwiOiAzODQ2LjUyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTI3XCIsXG5cdFx0XCJzdGFydFwiOiA1LjcyLFxuXHRcdFwibWF4XCI6IDUuOTQsXG5cdFx0XCJtaW5cIjogNS43LFxuXHRcdFwiZW5kXCI6IDUuODksXG5cdFx0XCJ2b2x1bW5cIjogMTM5OC44NCxcblx0XHRcIm1vbmV5XCI6IDgxOTQuMThcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMjZcIixcblx0XHRcInN0YXJ0XCI6IDUuNjUsXG5cdFx0XCJtYXhcIjogNS43Myxcblx0XHRcIm1pblwiOiA1LjU4LFxuXHRcdFwiZW5kXCI6IDUuNzIsXG5cdFx0XCJ2b2x1bW5cIjogOTMwLjE5LFxuXHRcdFwibW9uZXlcIjogNTI0Ny4wMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0yM1wiLFxuXHRcdFwic3RhcnRcIjogNS42OCxcblx0XHRcIm1heFwiOiA1LjcyLFxuXHRcdFwibWluXCI6IDUuNixcblx0XHRcImVuZFwiOiA1LjYyLFxuXHRcdFwidm9sdW1uXCI6IDc1OC4xMyxcblx0XHRcIm1vbmV5XCI6IDQyODQuOFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0yMlwiLFxuXHRcdFwic3RhcnRcIjogNS40OSxcblx0XHRcIm1heFwiOiA1Ljc4LFxuXHRcdFwibWluXCI6IDUuNDEsXG5cdFx0XCJlbmRcIjogNS43MSxcblx0XHRcInZvbHVtblwiOiAxMTM5Ljk0LFxuXHRcdFwibW9uZXlcIjogNjM4Ni4xMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0yMVwiLFxuXHRcdFwic3RhcnRcIjogNS4zNixcblx0XHRcIm1heFwiOiA1LjU4LFxuXHRcdFwibWluXCI6IDUuMzMsXG5cdFx0XCJlbmRcIjogNS41NSxcblx0XHRcInZvbHVtblwiOiA3MDEuMTEsXG5cdFx0XCJtb25leVwiOiAzODQwLjg0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTIwXCIsXG5cdFx0XCJzdGFydFwiOiA1LjIzLFxuXHRcdFwibWF4XCI6IDUuMzUsXG5cdFx0XCJtaW5cIjogNS4yMixcblx0XHRcImVuZFwiOiA1LjMzLFxuXHRcdFwidm9sdW1uXCI6IDgxNy45Nyxcblx0XHRcIm1vbmV5XCI6IDQzMjYuNDdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMTlcIixcblx0XHRcInN0YXJ0XCI6IDUuNixcblx0XHRcIm1heFwiOiA1LjY3LFxuXHRcdFwibWluXCI6IDUuMTIsXG5cdFx0XCJlbmRcIjogNS4xNixcblx0XHRcInZvbHVtblwiOiAxMjQ4LjgyLFxuXHRcdFwibW9uZXlcIjogNjY2OS45NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0xNlwiLFxuXHRcdFwic3RhcnRcIjogNS42Nyxcblx0XHRcIm1heFwiOiA1LjczLFxuXHRcdFwibWluXCI6IDUuNjYsXG5cdFx0XCJlbmRcIjogNS42OSxcblx0XHRcInZvbHVtblwiOiAzOTkuNTQsXG5cdFx0XCJtb25leVwiOiAyMjc0Ljk0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTE1XCIsXG5cdFx0XCJzdGFydFwiOiA1LjYsXG5cdFx0XCJtYXhcIjogNS42Nyxcblx0XHRcIm1pblwiOiA1LjU3LFxuXHRcdFwiZW5kXCI6IDUuNjcsXG5cdFx0XCJ2b2x1bW5cIjogMzYxLjI4LFxuXHRcdFwibW9uZXlcIjogMjAzMS42NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0xNFwiLFxuXHRcdFwic3RhcnRcIjogNS42Mixcblx0XHRcIm1heFwiOiA1LjY5LFxuXHRcdFwibWluXCI6IDUuNjEsXG5cdFx0XCJlbmRcIjogNS42Mixcblx0XHRcInZvbHVtblwiOiAzMjEuMjcsXG5cdFx0XCJtb25leVwiOiAxODEyLjkzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTEzXCIsXG5cdFx0XCJzdGFydFwiOiA1LjY0LFxuXHRcdFwibWF4XCI6IDUuNzEsXG5cdFx0XCJtaW5cIjogNS41OCxcblx0XHRcImVuZFwiOiA1LjY1LFxuXHRcdFwidm9sdW1uXCI6IDM3NS4zNSxcblx0XHRcIm1vbmV5XCI6IDIxMjAuODdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMTJcIixcblx0XHRcInN0YXJ0XCI6IDUuNzksXG5cdFx0XCJtYXhcIjogNS43OSxcblx0XHRcIm1pblwiOiA1LjU4LFxuXHRcdFwiZW5kXCI6IDUuNixcblx0XHRcInZvbHVtblwiOiA1MTYuMTksXG5cdFx0XCJtb25leVwiOiAyOTIxLjA1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTA5XCIsXG5cdFx0XCJzdGFydFwiOiA1Ljk1LFxuXHRcdFwibWF4XCI6IDUuOTcsXG5cdFx0XCJtaW5cIjogNS44LFxuXHRcdFwiZW5kXCI6IDUuODIsXG5cdFx0XCJ2b2x1bW5cIjogNzAxLjM5LFxuXHRcdFwibW9uZXlcIjogNDEyMy41XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTA4XCIsXG5cdFx0XCJzdGFydFwiOiA1Ljk1LFxuXHRcdFwibWF4XCI6IDYuMDYsXG5cdFx0XCJtaW5cIjogNS45MSxcblx0XHRcImVuZFwiOiA1Ljk3LFxuXHRcdFwidm9sdW1uXCI6IDY3Ni43NSxcblx0XHRcIm1vbmV5XCI6IDQwNTYuMTJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMDdcIixcblx0XHRcInN0YXJ0XCI6IDYsXG5cdFx0XCJtYXhcIjogNi4wNCxcblx0XHRcIm1pblwiOiA1LjkyLFxuXHRcdFwiZW5kXCI6IDUuOTYsXG5cdFx0XCJ2b2x1bW5cIjogNTQ2LjkzLFxuXHRcdFwibW9uZXlcIjogMzI2Ny4xNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0wNlwiLFxuXHRcdFwic3RhcnRcIjogNS44OSxcblx0XHRcIm1heFwiOiA2LjA5LFxuXHRcdFwibWluXCI6IDUuODQsXG5cdFx0XCJlbmRcIjogNi4wNyxcblx0XHRcInZvbHVtblwiOiAxMTY5LjMsXG5cdFx0XCJtb25leVwiOiA2OTgwLjQ4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTA1XCIsXG5cdFx0XCJzdGFydFwiOiA1Ljg5LFxuXHRcdFwibWF4XCI6IDYsXG5cdFx0XCJtaW5cIjogNS43NSxcblx0XHRcImVuZFwiOiA1Ljk0LFxuXHRcdFwidm9sdW1uXCI6IDgwNi4xLFxuXHRcdFwibW9uZXlcIjogNDc1MS4xNVxuXHR9XG5dO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9leGFtcGxlcy9jYW5kbGVTdGlja3MuanNvblxuICoqIG1vZHVsZSBpZCA9IDE1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBTbGlkZXIgPSByZXF1aXJlKCcuL3NyYy9zbGlkZXInKTtcbnZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG5pZiAoRzIgJiYgRzIuUGx1Z2luKSB7XG4gIHZhciBQbHVnaW4gPSBHMi5QbHVnaW47XG4gIFBsdWdpbi5zbGlkZXIgPSBTbGlkZXI7XG59IGVsc2Uge1xuICBjb25zb2xlLmVycignUGxlYXNlIGxvYWQgdGhlIEcyIHNjcmlwdCBmaXJzdCEnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vLjEuMi4xQGcyLXBsdWdpbi1zbGlkZXIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogQGlnbm9yZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbnZhciBVdGlsID0gRzIuVXRpbDtcbnZhciBDYW52YXMgPSBHMi5DYW52YXM7XG52YXIgR3JvdXAgPSBDYW52YXMuR3JvdXA7XG5cbnZhciBSYW5nZSA9IGZ1bmN0aW9uKGNmZykge1xuICBSYW5nZS5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgY2ZnKTtcbn07XG5cblJhbmdlLkNGRyA9IHtcbiAgLyoqXG4gICAqIOiMg+WbtFxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICByYW5nZTogbnVsbCxcbiAgLyoqXG4gICAqIOS4rea7keWdl+WxnuaAp1xuICAgKiBAdHlwZSB7QVRUUlN9XG4gICAqL1xuICBtaWRkbGVBdHRyOiBudWxsLFxuICAvKipcbiAgICog6IOM5pmvXG4gICAqIEB0eXBlIHtHLUVsZW1lbnR9XG4gICAqL1xuICBiYWNrZ3JvdW5kRWxlbWVudDogbnVsbCxcbiAgLyoqXG4gICAqIOS4i+a7keWdl1xuICAgKiBAdHlwZSB7Ry1FbGVtZW50fVxuICAgKi9cbiAgbWluSGFuZGxlRWxlbWVudDogbnVsbCxcbiAgLyoqXG4gICAqIOS4iua7keWdl1xuICAgKiBAdHlwZSB7Ry1FbGVtZW50fVxuICAgKi9cbiAgbWF4SGFuZGxlRWxlbWVudDogbnVsbCxcbiAgLyoqXG4gICAqIOS4reWdl1xuICAgKiBAdHlwZSB7Ry1FbGVtZW50fVxuICAgKi9cbiAgbWlkZGxlSGFuZGxlRWxlbWVudDogbnVsbCxcbiAgLyoqXG4gICAqIOW9k+WJjeeahOa/gOa0u+eahOWFg+e0oFxuICAgKiBAdHlwZSB7Ry1FbGVtZW50fVxuICAgKi9cbiAgY3VycmVudFRhcmdldDogbnVsbCxcbiAgLyoqXG4gICAqIOW4g+WxgOaWueW8j++8miBob3Jpem9udGFs77yMdmVydGljYWxcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGxheW91dDogJ3ZlcnRpY2FsJyxcbiAgLyoqXG4gICAqIOWuvVxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgd2lkdGg6IG51bGwsXG4gIC8qKlxuICAgKiDpq5hcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGhlaWdodDogbnVsbCxcbiAgLyoqXG4gICAqIOW9k+WJjeeahFBhZ2VYXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBwYWdlWDogbnVsbCxcbiAgLyoqXG4gICAqIOW9k+WJjeeahFBhZ2VZXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBwYWdlWTogbnVsbCxcbiAgLyoqXG4gICAqIOaYr+WQpuWPguS4juWKqOeUu1xuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGFuaW1hdGU6IGZhbHNlLFxuICAvKipcbiAgICog5Y+v5pON5L2c5oCn77yMZmFsc2Ug5YiZ5LiN5ruR5YqoXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgb3BlcmFibGU6IHRydWVcbn07XG5cblV0aWwuZXh0ZW5kKFJhbmdlLCBHcm91cCk7XG5cblV0aWwuYXVnbWVudChSYW5nZSwge1xuICBfYmVmb3JlUmVuZGVyVUk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLmdldCgnbGF5b3V0Jyk7XG4gICAgdmFyIGJhY2tncm91bmRFbGVtZW50ID0gdGhpcy5nZXQoJ2JhY2tncm91bmRFbGVtZW50Jyk7XG4gICAgdmFyIG1pbkhhbmRsZUVsZW1lbnQgPSB0aGlzLmdldCgnbWluSGFuZGxlRWxlbWVudCcpO1xuICAgIHZhciBtYXhIYW5kbGVFbGVtZW50ID0gdGhpcy5nZXQoJ21heEhhbmRsZUVsZW1lbnQnKTtcbiAgICB2YXIgbWlkZGxlSGFuZGxlRWxlbWVudCA9IHRoaXMuYWRkU2hhcGUoJ3JlY3QnLCB7XG4gICAgICBhdHRyczogdGhpcy5nZXQoJ21pZGRsZUF0dHInKVxuICAgIH0pO1xuICAgIHZhciB0cmlnZXJDdXJzb3IgPSBsYXlvdXQgPT09ICd2ZXJ0aWNhbCcgPyAnbnMtcmVzaXplJyA6ICdldy1yZXNpemUnO1xuICAgIHRoaXMuYWRkKFtiYWNrZ3JvdW5kRWxlbWVudCwgbWluSGFuZGxlRWxlbWVudCwgbWF4SGFuZGxlRWxlbWVudF0pO1xuICAgIHRoaXMuc2V0KCdtaWRkbGVIYW5kbGVFbGVtZW50JywgbWlkZGxlSGFuZGxlRWxlbWVudCk7XG4gICAgYmFja2dyb3VuZEVsZW1lbnQuc2V0KCd6SW5kZXgnLCAwKTtcbiAgICBtaWRkbGVIYW5kbGVFbGVtZW50LnNldCgnekluZGV4JywgMSk7XG4gICAgbWluSGFuZGxlRWxlbWVudC5zZXQoJ3pJbmRleCcsIDIpO1xuICAgIG1heEhhbmRsZUVsZW1lbnQuc2V0KCd6SW5kZXgnLCAyKTtcbiAgICBpZiAodGhpcy5nZXQoJ29wZXJhYmxlJykpIHtcbiAgICAgIG1pZGRsZUhhbmRsZUVsZW1lbnQuc2V0KCdjdXJzb3InLCAnbW92ZScpO1xuICAgICAgVXRpbC5lYWNoKG1pbkhhbmRsZUVsZW1lbnQuZ2V0KCdjaGlsZHJlbicpLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBjaGlsZC5zZXQoJ2N1cnNvcicsIHRyaWdlckN1cnNvcik7XG4gICAgICB9KTtcbiAgICAgIFV0aWwuZWFjaChtYXhIYW5kbGVFbGVtZW50LmdldCgnY2hpbGRyZW4nKSwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc2V0KCdjdXJzb3InLCB0cmlnZXJDdXJzb3IpO1xuICAgICAgfSk7XG4gICAgICAvLyBtaW5IYW5kbGVFbGVtZW50LnNldCgnY3Vyc29yJywgdHJpZ2VyQ3Vyc29yKTtcbiAgICAgIC8vIG1heEhhbmRsZUVsZW1lbnQuc2V0KCdjdXJzb3InLCB0cmlnZXJDdXJzb3IpO1xuICAgIH1cbiAgICB0aGlzLnNvcnQoKTtcbiAgfSxcbiAgX3JlbmRlclVJOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5nZXQoJ2xheW91dCcpO1xuICAgIGlmIChsYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5fcmVuZGVySG9yaXpvbnRhbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJWZXJ0aWNhbCgpO1xuICAgIH1cbiAgfSxcbiAgX3RyYW5zZm9ybTogZnVuY3Rpb24obGF5b3V0KSB7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5nZXQoJ3JhbmdlJyk7XG4gICAgdmFyIG1pblJhdGlvID0gcmFuZ2VbMF0gLyAxMDA7XG4gICAgdmFyIG1heFJhdGlvID0gcmFuZ2VbMV0gLyAxMDA7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5nZXQoJ3dpZHRoJyk7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMuZ2V0KCdoZWlnaHQnKTtcbiAgICB2YXIgbWluSGFuZGxlRWxlbWVudCA9IHRoaXMuZ2V0KCdtaW5IYW5kbGVFbGVtZW50Jyk7XG4gICAgdmFyIG1heEhhbmRsZUVsZW1lbnQgPSB0aGlzLmdldCgnbWF4SGFuZGxlRWxlbWVudCcpO1xuICAgIHZhciBtaWRkbGVIYW5kbGVFbGVtZW50ID0gdGhpcy5nZXQoJ21pZGRsZUhhbmRsZUVsZW1lbnQnKTtcblxuICAgIG1pbkhhbmRsZUVsZW1lbnQuaW5pdFRyYW5zZm9ybSgpO1xuICAgIG1heEhhbmRsZUVsZW1lbnQuaW5pdFRyYW5zZm9ybSgpO1xuXG4gICAgaWYgKGxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBtaWRkbGVIYW5kbGVFbGVtZW50LmF0dHIoe1xuICAgICAgICB4OiB3aWR0aCAqIG1pblJhdGlvLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogKG1heFJhdGlvIC0gbWluUmF0aW8pICogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIG1pbkhhbmRsZUVsZW1lbnQudHJhbnNsYXRlKG1pblJhdGlvICogd2lkdGgsIDApO1xuICAgICAgbWF4SGFuZGxlRWxlbWVudC50cmFuc2xhdGUobWF4UmF0aW8gKiB3aWR0aCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pZGRsZUhhbmRsZUVsZW1lbnQuYXR0cih7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IGhlaWdodCAqICgxIC0gbWF4UmF0aW8pLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogKG1heFJhdGlvIC0gbWluUmF0aW8pICogaGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIG1pbkhhbmRsZUVsZW1lbnQudHJhbnNsYXRlKHdpZHRoIC8gMiwgKDEgLSBtaW5SYXRpbykgKiBoZWlnaHQpO1xuICAgICAgbWF4SGFuZGxlRWxlbWVudC50cmFuc2xhdGUod2lkdGggLyAyLCAoMSAtIG1heFJhdGlvKSAqIGhlaWdodCk7XG4gICAgfVxuICB9LFxuICBfcmVuZGVySG9yaXpvbnRhbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtKCdob3Jpem9udGFsJyk7XG4gIH0sXG4gIF9yZW5kZXJWZXJ0aWNhbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtKCd2ZXJ0aWNhbCcpO1xuICB9LFxuICBfYmluZFVJOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5nZXQoJ29wZXJhYmxlJykpIHtcbiAgICAgIHRoaXMub24oJ21vdXNlZG93bicsIFV0aWwud3JhcEJlaGF2aW9yKHRoaXMsICdfb25Nb3VzZURvd24nKSk7XG4gICAgICB0aGlzLm9uKCdtb3VzZW1vdmUnLCBVdGlsLndyYXBCZWhhdmlvcih0aGlzLCAnX29uTW91c2VNb3ZlJykpO1xuICAgICAgdGhpcy5vbignbW91c2VsZWF2ZScsIFV0aWwud3JhcEJlaGF2aW9yKHRoaXMsICdfb25Nb3VzZUxlYXZlJykpO1xuICAgIH1cbiAgfSxcbiAgLy8g5Yik5pat5piv5ZCm5piv6K+l5YWD57SgXG4gIF9pc0VsZW1lbnQ6IGZ1bmN0aW9uKHRhcmdldCwgbmFtZSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5nZXQobmFtZSk7XG4gICAgaWYgKHRhcmdldCA9PT0gZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmlzR3JvdXApIHtcbiAgICAgIHZhciBlbGVtZW50Q2hpbGRyZW4gPSBlbGVtZW50LmdldCgnY2hpbGRyZW4nKTtcbiAgICAgIHJldHVybiBlbGVtZW50Q2hpbGRyZW4uaW5kZXhPZih0YXJnZXQpID4gLTE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgX2dldFJhbmdlOiBmdW5jdGlvbihkaWZmLCByYW5nZSkge1xuICAgIHZhciByc3QgPSBkaWZmICsgcmFuZ2U7XG4gICAgcnN0ID0gcnN0ID4gMTAwID8gMTAwIDogcnN0O1xuICAgIHJzdCA9IHJzdCA8IDAgPyAwIDogcnN0O1xuICAgIHJldHVybiByc3Q7XG4gIH0sXG4gIC8qKlxuICAgKiDmm7TmlrDnirbmgIFcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRpbSB4IHx8IHlcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2IERPTSDljp/nlJ/kuovku7ZcbiAgICovXG4gIF91cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKGRpbSwgZXYpIHtcbiAgICB2YXIgdG90YWxMZW5ndGggPSBkaW0gPT09ICd4JyA/IHRoaXMuZ2V0KCd3aWR0aCcpIDogdGhpcy5nZXQoJ2hlaWdodCcpO1xuICAgIHZhciB1Y0RpbSA9IFV0aWwudWNmaXJzdChkaW0pO1xuICAgIHZhciByYW5nZSA9IHRoaXMuZ2V0KCdyYW5nZScpO1xuICAgIHZhciBwYWdlID0gdGhpcy5nZXQoJ3BhZ2UnICsgdWNEaW0pO1xuICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gdGhpcy5nZXQoJ2N1cnJlbnRUYXJnZXQnKTtcbiAgICB2YXIgcmFuZ2VTdGFzaCA9IHRoaXMuZ2V0KCdyYW5nZVN0YXNoJyk7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuZ2V0KCdsYXlvdXQnKTtcbiAgICB2YXIgc2lnbiA9IGxheW91dCA9PT0gJ3ZlcnRpY2FsJyA/IC0xIDogMTtcbiAgICB2YXIgY3VycmVudFBhZ2UgPSBldlsncGFnZScgKyB1Y0RpbV07XG4gICAgdmFyIGRpZmZQYWdlID0gY3VycmVudFBhZ2UgLSBwYWdlO1xuICAgIHZhciBkaWZmUmFuZ2UgPSAoZGlmZlBhZ2UgLyB0b3RhbExlbmd0aCkgKiAxMDAgKiBzaWduO1xuICAgIHZhciBkaWZmU3Rhc2hSYW5nZTtcblxuICAgIGlmIChyYW5nZVsxXSA8PSByYW5nZVswXSkge1xuICAgICAgaWYgKHRoaXMuX2lzRWxlbWVudChjdXJyZW50VGFyZ2V0LCAnbWluSGFuZGxlRWxlbWVudCcpIHx8IHRoaXMuX2lzRWxlbWVudChjdXJyZW50VGFyZ2V0LCAnbWF4SGFuZGxlRWxlbWVudCcpKSB7XG4gICAgICAgIHJhbmdlWzBdID0gdGhpcy5fZ2V0UmFuZ2UoZGlmZlJhbmdlLCByYW5nZVswXSk7XG4gICAgICAgIHJhbmdlWzFdID0gdGhpcy5fZ2V0UmFuZ2UoZGlmZlJhbmdlLCByYW5nZVswXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pc0VsZW1lbnQoY3VycmVudFRhcmdldCwgJ21pbkhhbmRsZUVsZW1lbnQnKSkge1xuICAgICAgICByYW5nZVswXSA9IHRoaXMuX2dldFJhbmdlKGRpZmZSYW5nZSwgcmFuZ2VbMF0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzRWxlbWVudChjdXJyZW50VGFyZ2V0LCAnbWF4SGFuZGxlRWxlbWVudCcpKSB7XG4gICAgICAgIHJhbmdlWzFdID0gdGhpcy5fZ2V0UmFuZ2UoZGlmZlJhbmdlLCByYW5nZVsxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzRWxlbWVudChjdXJyZW50VGFyZ2V0LCAnbWlkZGxlSGFuZGxlRWxlbWVudCcpKSB7XG4gICAgICBkaWZmU3Rhc2hSYW5nZSA9IChyYW5nZVN0YXNoWzFdIC0gcmFuZ2VTdGFzaFswXSk7XG4gICAgICByYW5nZVswXSA9IHRoaXMuX2dldFJhbmdlKGRpZmZSYW5nZSwgcmFuZ2VbMF0pO1xuICAgICAgcmFuZ2VbMV0gPSByYW5nZVswXSArIGRpZmZTdGFzaFJhbmdlO1xuICAgICAgaWYgKHJhbmdlWzFdID4gMTAwKSB7XG4gICAgICAgIHJhbmdlWzFdID0gMTAwO1xuICAgICAgICByYW5nZVswXSA9IHJhbmdlWzFdIC0gZGlmZlN0YXNoUmFuZ2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maXJlKCdyYW5nZUNoYW5nZScsIHtcbiAgICAgIHJhbmdlOiByYW5nZVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXQoJ3BhZ2UnICsgdWNEaW0sIGN1cnJlbnRQYWdlKTtcbiAgICB0aGlzLl9yZW5kZXJVSSgpO1xuICAgIHRoaXMuZ2V0KCdjYW52YXMnKS5kcmF3KCk7IC8vIG5lZWQgZGVsZXRlXG4gICAgcmV0dXJuO1xuICB9LFxuICBfb25Nb3VzZUxlYXZlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGFpbmVyRE9NID0gdGhpcy5nZXQoJ2NhbnZhcycpLmdldCgnY29udGFpbmVyRE9NJyk7XG4gICAgY29udGFpbmVyRE9NLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgfSxcbiAgX29uTW91c2VNb3ZlOiBmdW5jdGlvbihldikge1xuICAgIHZhciBjdXJzb3IgPSBldi5jdXJyZW50VGFyZ2V0LmdldCgnY3Vyc29yJywgdHJ1ZSk7XG4gICAgdmFyIGNvbnRhaW5lckRPTSA9IHRoaXMuZ2V0KCdjYW52YXMnKS5nZXQoJ2NvbnRhaW5lckRPTScpO1xuICAgIGlmIChjb250YWluZXJET00pIHtcbiAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgY29udGFpbmVyRE9NLnN0eWxlLmN1cnNvciA9IGN1cnNvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lckRPTS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2KSB7XG4gICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgIHZhciBvcmlnaW5FdmVudCA9IGV2LmV2ZW50O1xuICAgIHZhciByYW5nZSA9IHRoaXMuZ2V0KCdyYW5nZScpO1xuICAgIG9yaWdpbkV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9yaWdpbkV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXQoJ3BhZ2VYJywgb3JpZ2luRXZlbnQucGFnZVgpO1xuICAgIHRoaXMuc2V0KCdwYWdlWScsIG9yaWdpbkV2ZW50LnBhZ2VZKTtcbiAgICB0aGlzLnNldCgnY3VycmVudFRhcmdldCcsIGN1cnJlbnRUYXJnZXQpO1xuICAgIHRoaXMuc2V0KCdyYW5nZVN0YXNoJywgW3JhbmdlWzBdLCByYW5nZVsxXV0pO1xuICAgIHRoaXMuX2JpbmRDYW52YXNFdmVudHMoKTtcbiAgfSxcbiAgX2JpbmRDYW52YXNFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lciA9IFV0aWwuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlbW92ZScsIFV0aWwud3JhcEJlaGF2aW9yKHRoaXMsICdfb25DYW52YXNNb3VzZU1vdmUnKSk7XG4gICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lciA9IFV0aWwuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNldXAnLCBVdGlsLndyYXBCZWhhdmlvcih0aGlzLCAnX29uQ2FudmFzTW91c2VVcCcpKTtcbiAgfSxcbiAgX29uQ2FudmFzTW91c2VNb3ZlOiBmdW5jdGlvbihldikge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLmdldCgnbGF5b3V0Jyk7XG4gICAgaWYgKGxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLl91cGRhdGVTdGF0dXMoJ3gnLCBldik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygneScsIGV2KTtcbiAgICB9XG4gIH0sXG4gIF9vbkNhbnZhc01vdXNlVXA6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gIH0sXG4gIF9yZW1vdmVEb2N1bWVudEV2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vbk1vdXNlTW92ZUxpc3RlbmVyLnJlbW92ZSgpO1xuICAgIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmdlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vLjEuMi4xQGcyLXBsdWdpbi1zbGlkZXIvc3JjL3JhbmdlLmpzXG4gKiogbW9kdWxlIGlkID0gMTY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgRzIncyBwbHVnaW4gZm9yIGRhdGF6b29tLlxuICogQGF1dGhvciBzaW1hLnpoYW5nMTk5MEBnbWFpbC5jb21cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG52YXIgVXRpbCA9IEcyLlV0aWw7XG52YXIgQmFzZSA9IEcyLkJhc2U7XG52YXIgRGF0YUZyYW1lID0gRzIuRnJhbWU7XG52YXIgQ2FudmFzID0gRzIuQ2FudmFzO1xudmFyIFJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZScpO1xudmFyIE9GRlNFVCA9IDU7XG5cbnZhciBTbGlkZXIgPSBmdW5jdGlvbihjZmcpIHtcbiAgU2xpZGVyLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBjZmcpO1xuICB0aGlzLl9pbml0KCk7XG59O1xuXG5TbGlkZXIuQVRUUlMgPSB7XG4gIGNoYXJ0czogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxuICB3aWR0aDogbnVsbCxcbiAgc3RhcnQ6IG51bGwsXG4gIGVuZDogbnVsbCxcbiAgZG9tSWQ6IG51bGwsXG4gIHhEaW06IG51bGwsXG4gIHlEaW06IG51bGwsXG4gIC8qKlxuICAgKiDkuK3pl7Tmu5HlnZdcbiAgICogQHR5cGUge0FUVFJTfVxuICAgKi9cbiAgbWlkZGxlQXR0cjoge1xuICAgIGZpbGw6ICcjRDVEQUUzJyxcbiAgICBmaWxsT3BhY2l0eTogMC4yXG4gIH0sXG4gIGJhY2tncm91bmRBdHRyOiB7XG4gICAgc3Ryb2tlOiAnI0UyRTJFMicsXG4gICAgZmlsbDogJyNGM0YzRjMnLFxuICAgIG9wYWNpdHk6IDAuMixcbiAgICBsaW5lV2lkdGg6IDFcbiAgfSxcbiAgcmFuZ2U6IFswLCAxMDBdLFxuICBsYXlvdXQ6ICdob3Jpem9udGFsJyxcbiAgdGV4dEF0dHI6IHtcbiAgICBmaWxsOiAnIzMzMydcbiAgfSxcbiAgaGFuZGxlSWNvbjogJ2h0dHBzOi8vdC5hbGlwYXlvYmplY3RzLmNvbS9pbWFnZXMvcm1zd2ViL1QxWW9oaFhkNGJYWFhYWFhYWC5wbmcnXG59O1xuXG5VdGlsLmV4dGVuZChTbGlkZXIsIEJhc2UpO1xuXG5VdGlsLmF1Z21lbnQoU2xpZGVyLCB7XG4gIF9pbml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldCgnY29udGFpbmVyJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXQoJ2RvbUlkJykpKTtcbiAgICB0aGlzLnNldCgnZmlyc3RSZW5kZXInLCAndHJ1ZScpO1xuICAgIHZhciBsaW5rQ2hhcnRzID0gdGhpcy5nZXQoJ2NoYXJ0cycpO1xuICAgIHZhciBjaGFydCA9IFV0aWwuaXNBcnJheShsaW5rQ2hhcnRzKSA/IGxpbmtDaGFydHNbMF0gOiBsaW5rQ2hhcnRzO1xuICAgIHZhciBmb3JjZUZpdCA9IGNoYXJ0LmdldCgncGFyZW50JykgPyBjaGFydC5nZXQoJ3BhcmVudCcpLmdldCgnZm9yY2VGaXQnKSA6IGNoYXJ0LmdldCgnZm9yY2VGaXQnKTtcbiAgICBpZiAoZm9yY2VGaXQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBVdGlsLndyYXBCZWhhdmlvcih0aGlzLCAnX2luaXRGb3JjZUZpdEV2ZW50JykpO1xuICAgIH1cbiAgfSxcbiAgX2luaXRGb3JjZUZpdEV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KFV0aWwud3JhcEJlaGF2aW9yKHRoaXMsICdmb3JjZUZpdCcpLCAyMDApO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmdldCgncmVzaXplVGltZXInKSk7XG4gICAgdGhpcy5zZXQoJ3Jlc2l6ZVRpbWVyJywgdGltZXIpO1xuICB9LFxuICBmb3JjZUZpdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpbmtDaGFydHMgPSB0aGlzLmdldCgnY2hhcnRzJyk7XG4gICAgdmFyIGNoYXJ0ID0gVXRpbC5pc0FycmF5KGxpbmtDaGFydHMpID8gbGlua0NoYXJ0c1swXSA6IGxpbmtDaGFydHM7XG4gICAgdmFyIHdpZHRoID0gY2hhcnQuZ2V0KCdwYXJlbnQnKSA/IGNoYXJ0LmdldCgncGFyZW50JykuZ2V0KCd3aWR0aCcpIDogY2hhcnQuZ2V0KCd3aWR0aCcpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldCgnaGVpZ2h0Jyk7XG4gICAgaWYgKHdpZHRoICE9PSB0aGlzLmdldCgnd2lkdGgnKSkge1xuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZ2V0KCdjYW52YXMnKTtcbiAgICAgIHZhciBmaWx0ZXJzID0gY2hhcnQuZ2V0KCdvcHRpb25zJykuZmlsdGVycztcbiAgICAgIHZhciB4RGltID0gdGhpcy5nZXQoJ3hEaW0nKTtcbiAgICAgIHRoaXMuc2V0KCdzdGFydCcsIGZpbHRlcnNbeERpbV1bMF0pO1xuICAgICAgdGhpcy5zZXQoJ2VuZCcsIGZpbHRlcnNbeERpbV1bMV0pO1xuICAgICAgdGhpcy5zZXQoJ3dpZHRoJywgd2lkdGgpO1xuICAgICAgY2FudmFzLmNoYW5nZVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICB0aGlzLnNldCgnY2hhbmdlU2l6ZScsIHRydWUpO1xuICAgICAgdGhpcy5yZXBhaW50KCk7XG4gICAgfVxuICB9LFxuICBfaW5pdENhbnZhczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5nZXQoJ3dpZHRoJyk7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMuZ2V0KCdoZWlnaHQnKTtcbiAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcyh7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIGNvbnRhaW5lckRPTTogdGhpcy5nZXQoJ2NvbnRhaW5lcicpLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9KTtcbiAgICBjYW52YXMuc2V0KCdmb250RmFtaWx5JywgRzIuR2xvYmFsLmZvbnRGYW1pbHkpO1xuICAgIC8vIHN0eWxlIGNhbnZhc1xuICAgIHZhciBub2RlID0gY2FudmFzLmdldCgnZWwnKTtcbiAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBub2RlLnN0eWxlLnRvcCA9IDA7XG4gICAgbm9kZS5zdHlsZS5sZWZ0ID0gMDtcbiAgICBub2RlLnN0eWxlLnpJbmRleCA9IDM7XG4gICAgdGhpcy5zZXQoJ2NhbnZhcycsIGNhbnZhcyk7XG4gIH0sXG4gIF9pbml0QmFja2dyb3VuZDogZnVuY3Rpb24obGlua0NoYXJ0KSB7XG4gICAgdmFyIGRhdGEgPSBsaW5rQ2hhcnQuZ2V0KCdkYXRhJyk7XG4gICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIERhdGFGcmFtZSkpIHtcbiAgICAgIGRhdGEgPSBuZXcgRGF0YUZyYW1lKGRhdGEpO1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IGxpbmtDaGFydC5nZXQoJ29wdGlvbnMnKTtcblxuICAgIHZhciB4RGltID0gdGhpcy5nZXQoJ3hEaW0nKTtcbiAgICB2YXIgeURpbSA9IHRoaXMuZ2V0KCd5RGltJyk7XG4gICAgdmFyIHhTY2FsZTtcbiAgICBpZiAodGhpcy5nZXQoJ2NoYW5nZVNpemUnKSkge1xuICAgICAgeFNjYWxlID0gdGhpcy5nZXQoJ3hTY2FsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2NhbGVBc3Npc3QgPSBsaW5rQ2hhcnQuZ2V0KCdzY2FsZUFzc2lzdCcpO1xuICAgICAgc2NhbGVBc3Npc3QuZGVmcyA9IFV0aWwubWl4KHt9LCB0cnVlLCBzY2FsZUFzc2lzdC5kZWZzLCBvcHRpb25zLnNjYWxlcyk7XG4gICAgICB4U2NhbGUgPSBzY2FsZUFzc2lzdC5jcmVhdGVTY2FsZSh4RGltLCBkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoeURpbSkgeyAvLyDlpoLmnpzlo7DmmI7kuoYgeURpbSwg5YiZ5Yib5bu65ruR5Z2X6IOM5pmv5Zu+XG4gICAgICB2YXIgYmdDaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICAgIGlkOiB0aGlzLmdldCgnZG9tSWQnKSxcbiAgICAgICAgd2lkdGg6IHRoaXMuZ2V0KCdwbG90V2lkdGgnKSxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdldCgnaGVpZ2h0JyksXG4gICAgICAgIHBsb3RDZmc6IHtcbiAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBiZ0NoYXJ0LnNvdXJjZShkYXRhKTtcbiAgICAgIGJnQ2hhcnQuY29sKHhEaW0sIHtcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgICAgbmljZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgYmdDaGFydC5heGlzKGZhbHNlKTtcbiAgICAgIGJnQ2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgICBiZ0NoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgICBiZ0NoYXJ0LmFyZWEoKS5wb3NpdGlvbih4RGltICsgJyonICsgeURpbSkuY29sb3IoJyNDRUQxRDQnKTtcbiAgICAgIGJnQ2hhcnQubGluZSgpLnBvc2l0aW9uKHhEaW0gKyAnKicgKyB5RGltKS5jb2xvcignI0NFRDFENCcpO1xuICAgICAgYmdDaGFydC5yZW5kZXIoKTtcbiAgICAgIC8vIOiHquWKqOWvuem9kFxuICAgICAgdmFyIGNhbnZhcyA9IGJnQ2hhcnQuZ2V0KCdjYW52YXMnKTtcbiAgICAgIHZhciBjb250YWluZXIgPSBjYW52YXMuZ2V0KCdlbCcpLnBhcmVudE5vZGU7XG4gICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9IHRoaXMuZ2V0KCdtYXJnaW5MZWZ0JykgKyAncHgnO1xuICAgICAgdGhpcy5zZXQoJ2JnQ2hhcnQnLCBiZ0NoYXJ0KTtcbiAgICB9XG4gICAgdGhpcy5zZXQoJ3hTY2FsZScsIHhTY2FsZSk7XG4gIH0sXG4gIF9pbml0UmFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuZ2V0KCdzdGFydCcpO1xuICAgIHZhciBlbmQgPSB0aGlzLmdldCgnZW5kJyk7XG4gICAgdmFyIHhTY2FsZSA9IHRoaXMuZ2V0KCd4U2NhbGUnKTtcbiAgICB2YXIgbWluID0gc3RhcnQgPyB4U2NhbGUuc2NhbGUoc3RhcnQpIDogMC4zO1xuICAgIHZhciBtYXggPSBlbmQgPyB4U2NhbGUuc2NhbGUoZW5kKSA6IDAuNztcbiAgICB2YXIgcmFuZ2UgPSBbbWluICogMTAwLCBtYXggKiAxMDBdO1xuICAgIHRoaXMuc2V0KCdyYW5nZScsIHJhbmdlKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH0sXG4gIF9nZXRIYW5kbGVWYWx1ZTogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLmdldCgncmFuZ2UnKTtcbiAgICB2YXIgbWluID0gcmFuZ2VbMF0gLyAxMDA7XG4gICAgdmFyIG1heCA9IHJhbmdlWzFdIC8gMTAwO1xuICAgIHZhciB4U2NhbGUgPSB0aGlzLmdldCgneFNjYWxlJyk7XG4gICAgaWYgKHR5cGUgPT09ICdtaW4nKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0KCdzdGFydCcpID8gdGhpcy5nZXQoJ3N0YXJ0JykgOiB4U2NhbGUuaW52ZXJ0KG1pbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5nZXQoJ2VuZCcpID8gdGhpcy5nZXQoJ2VuZCcpIDogeFNjYWxlLmludmVydChtYXgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIF9pbml0SG9yaXpvbnRhbEhhbmRsZTogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmdldCgnY2FudmFzJyk7XG4gICAgdmFyIGhhbmRsZSA9IGNhbnZhcy5hZGRHcm91cCgpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldCgnaGVpZ2h0Jyk7XG4gICAgdmFyIHhTY2FsZSA9IHRoaXMuZ2V0KCd4U2NhbGUnKTtcbiAgICB2YXIgaGFuZGxlVmFsdWUgPSB4U2NhbGUuZ2V0VGV4dCh0aGlzLl9nZXRIYW5kbGVWYWx1ZSh0eXBlKSk7XG5cbiAgICBoYW5kbGUuYWRkU2hhcGUoJ0ltYWdlJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgeDogLWhlaWdodCAvIDIsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBpbWc6IHRoaXMuZ2V0KCdoYW5kbGVJY29uJylcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgdGV4dCA9IGhhbmRsZS5hZGRTaGFwZSgnVGV4dCcsIHtcbiAgICAgIGF0dHJzOiBVdGlsLm1peCh7XG4gICAgICAgIHg6ICh0eXBlID09PSAnbWluJykgPyAtKGhlaWdodCAvIDIgKyBPRkZTRVQpIDogaGVpZ2h0IC8gMiArIE9GRlNFVCxcbiAgICAgICAgeTogaGVpZ2h0IC8gMixcbiAgICAgICAgdGV4dEFsaWduOiAodHlwZSA9PT0gJ21pbicpID8gJ2VuZCcgOiAnc3RhcnQnLFxuICAgICAgICB0ZXh0QmFzZWxpbmU6ICdtaWRkbGUnLFxuICAgICAgICB0ZXh0OiBoYW5kbGVWYWx1ZVxuICAgICAgfSwgdGhpcy5nZXQoJ3RleHRBdHRyJykpXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldCh0eXBlICsgJ1RleHRFbGVtZW50JywgdGV4dCk7XG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfSxcbiAgX2luaXRTbGlkZXJCYWNrZ3JvdW5kOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5nZXQoJ2NhbnZhcycpO1xuICAgIHZhciBiYWNrZ3JvdW5kRWxlbWVudCA9IGNhbnZhcy5hZGRHcm91cCgpO1xuICAgIGJhY2tncm91bmRFbGVtZW50LmluaXRUcmFuc2Zvcm0oKTtcbiAgICBiYWNrZ3JvdW5kRWxlbWVudC50cmFuc2xhdGUoMCwgMCk7XG4gICAgYmFja2dyb3VuZEVsZW1lbnQuYWRkU2hhcGUoJ1JlY3QnLCB7XG4gICAgICBhdHRyczogVXRpbC5taXgoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogdGhpcy5nZXQoJ3Bsb3RXaWR0aCcpLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0KCdoZWlnaHQnKVxuICAgICAgfSwgdGhpcy5nZXQoJ2JhY2tncm91bmRBdHRyJykpXG4gICAgfSk7XG4gICAgcmV0dXJuIGJhY2tncm91bmRFbGVtZW50O1xuICB9LFxuICBfaW5pdFNsaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZ2V0KCdjYW52YXMnKTtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLl9pbml0UmFuZ2UoKTtcbiAgICB2YXIgbWluSGFuZGxlRWxlbWVudCA9IHRoaXMuX2luaXRIb3Jpem9udGFsSGFuZGxlKCdtaW4nKTtcbiAgICB2YXIgbWF4SGFuZGxlRWxlbWVudCA9IHRoaXMuX2luaXRIb3Jpem9udGFsSGFuZGxlKCdtYXgnKTtcbiAgICB2YXIgYmFja2dyb3VuZEVsZW1lbnQgPSB0aGlzLl9pbml0U2xpZGVyQmFja2dyb3VuZCgpO1xuXG4gICAgdmFyIHJhbmdlRWxlbWVudCA9IGNhbnZhcy5hZGRHcm91cChSYW5nZSwge1xuICAgICAgbWluSGFuZGxlRWxlbWVudDogbWluSGFuZGxlRWxlbWVudCxcbiAgICAgIG1heEhhbmRsZUVsZW1lbnQ6IG1heEhhbmRsZUVsZW1lbnQsXG4gICAgICBiYWNrZ3JvdW5kRWxlbWVudDogYmFja2dyb3VuZEVsZW1lbnQsXG4gICAgICBtaWRkbGVBdHRyOiB0aGlzLmdldCgnbWlkZGxlQXR0cicpLFxuICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgbGF5b3V0OiB0aGlzLmdldCgnbGF5b3V0JyksXG4gICAgICB3aWR0aDogdGhpcy5nZXQoJ3Bsb3RXaWR0aCcpLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldCgnaGVpZ2h0JylcbiAgICB9KTtcbiAgICByYW5nZUVsZW1lbnQudHJhbnNsYXRlKHRoaXMuZ2V0KCdtYXJnaW5MZWZ0JyksIDApO1xuICAgIHRoaXMuc2V0KCdyYW5nZUVsZW1lbnQnLCByYW5nZUVsZW1lbnQpO1xuICB9LFxuICBfYmluZEV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHJhbmdlRWxlbWVudCA9IHNlbGYuZ2V0KCdyYW5nZUVsZW1lbnQnKTtcbiAgICB2YXIgeERpbSA9IHNlbGYuZ2V0KCd4RGltJyk7XG4gICAgdmFyIHhTY2FsZSA9IHNlbGYuZ2V0KCd4U2NhbGUnKTtcblxuICAgIHJhbmdlRWxlbWVudC5vbigncmFuZ2VDaGFuZ2UnLCBmdW5jdGlvbihldikge1xuICAgICAgdmFyIHJhbmdlID0gZXYucmFuZ2U7XG4gICAgICB2YXIgbWluUmF0aW8gPSByYW5nZVswXSAvIDEwMDtcbiAgICAgIHZhciBtYXhSYXRpbyA9IHJhbmdlWzFdIC8gMTAwO1xuICAgICAgdmFyIG1pbiA9IHhTY2FsZS5pbnZlcnQobWluUmF0aW8pO1xuICAgICAgdmFyIG1heCA9IHhTY2FsZS5pbnZlcnQobWF4UmF0aW8pO1xuICAgICAgdmFyIG1pblRleHQgPSB4U2NhbGUuZ2V0VGV4dChtaW4pO1xuICAgICAgdmFyIG1heFRleHQgPSB4U2NhbGUuZ2V0VGV4dChtYXgpO1xuICAgICAgc2VsZi5fdXBkYXRlRWxlbWVudChtaW5UZXh0LCBtYXhUZXh0KTtcbiAgICAgIHNlbGYuX3VwZGF0ZUxpbmtDaGFydHMoeERpbSwgW21pbiwgbWF4XSk7XG4gICAgfSk7XG4gIH0sXG4gIF91cGRhdGVFbGVtZW50OiBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIHZhciBtaW5UZXh0RWxlbWVudCA9IHRoaXMuZ2V0KCdtaW5UZXh0RWxlbWVudCcpO1xuICAgIHZhciBtYXhUZXh0RWxlbWVudCA9IHRoaXMuZ2V0KCdtYXhUZXh0RWxlbWVudCcpO1xuICAgIG1pblRleHRFbGVtZW50LmF0dHIoVXRpbC5taXgoe30sIG1pblRleHRFbGVtZW50Ll9fYXR0cnMsIHtcbiAgICAgIHRleHQ6IG1pblxuICAgIH0pKTtcbiAgICBtYXhUZXh0RWxlbWVudC5hdHRyKFV0aWwubWl4KHt9LCBtYXhUZXh0RWxlbWVudC5fX2F0dHJzLCB7XG4gICAgICB0ZXh0OiBtYXhcbiAgICB9KSk7XG5cbiAgICBpZiAodGhpcy5nZXQoJ2JnQ2hhcnQnKSkgeyAvLyDlsIbog4zmma/lm77ooajovazmjaLkuLrog4zmma/lm75cbiAgICAgIHZhciBiZ0NoYXJ0ID0gdGhpcy5nZXQoJ2JnQ2hhcnQnKTtcbiAgICAgIHZhciBjYW52YXMgPSBiZ0NoYXJ0LmdldCgnY2FudmFzJykuZ2V0KCdlbCcpO1xuICAgICAgdmFyIGltZyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0KCdjb250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0KCd3aWR0aCcpICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldCgnaGVpZ2h0JykgKyAncHgnO1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltZyArICcpJztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IHRoaXMuZ2V0KCdtYXJnaW5MZWZ0JykgKyAncHgnO1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgYmdDaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNldCgnYmdDaGFydCcsIG51bGwpO1xuICAgIH1cbiAgICB0aGlzLnNldCgnZmlyc3RSZW5kZXInLCBmYWxzZSk7XG4gIH0sXG4gIF91cGRhdGVMaW5rQ2hhcnRzOiBmdW5jdGlvbihkaW0sIHJhbmdlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBsaW5rQ2hhcnRzID0gVXRpbC5pc0FycmF5KHNlbGYuZ2V0KCdjaGFydHMnKSkgPyBzZWxmLmdldCgnY2hhcnRzJykgOiBbc2VsZi5nZXQoJ2NoYXJ0cycpXTtcbiAgICBpZiAobGlua0NoYXJ0c1swXS5nZXQoJ3BhcmVudCcpKSB7XG4gICAgICBVdGlsLmVhY2gobGlua0NoYXJ0cywgZnVuY3Rpb24oY2hhcnQpIHtcbiAgICAgICAgY2hhcnQuZmlsdGVyKGRpbSwgcmFuZ2UpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcGFyZW50Q2hhcnQgPSBsaW5rQ2hhcnRzWzBdLmdldCgncGFyZW50Jyk7XG4gICAgICBpZiAoc2VsZi5nZXQoJ2ZpcnN0UmVuZGVyJykpIHtcbiAgICAgICAgcGFyZW50Q2hhcnQucmVuZGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRDaGFydC5yZXBhaW50KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFV0aWwuZWFjaChsaW5rQ2hhcnRzLCBmdW5jdGlvbihjaGFydCkge1xuICAgICAgICBjaGFydC5maWx0ZXIoZGltLCByYW5nZSk7XG4gICAgICAgIGlmIChzZWxmLmdldCgnZmlyc3RSZW5kZXInKSkge1xuICAgICAgICAgIGNoYXJ0LnJlbmRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYXJ0LnJlcGFpbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaW5rQ2hhcnRzID0gdGhpcy5nZXQoJ2NoYXJ0cycpO1xuICAgIHZhciBjaGFydCA9IFV0aWwuaXNBcnJheShsaW5rQ2hhcnRzKSA/IGxpbmtDaGFydHNbMF0gOiBsaW5rQ2hhcnRzO1xuICAgIHZhciBwbG90UmFuZ2U7XG4gICAgdmFyIHdpZHRoO1xuICAgIGlmIChjaGFydC5nZXQoJ3BhcmVudCcpKSB7XG4gICAgICBwbG90UmFuZ2UgPSBjaGFydC5nZXQoJ3BhcmVudCcpLmdldCgncGxvdFJhbmdlJyk7XG4gICAgICB3aWR0aCA9IGNoYXJ0LmdldCgncGFyZW50JykuZ2V0KCd3aWR0aCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbG90UmFuZ2UgPSBjaGFydC5nZXQoJ3Bsb3RSYW5nZScpO1xuICAgICAgd2lkdGggPSBjaGFydC5nZXQoJ3dpZHRoJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXQoJ3Bsb3RXaWR0aCcsIHBsb3RSYW5nZS50ci54IC0gcGxvdFJhbmdlLnRsLngpO1xuICAgIHRoaXMuc2V0KCdtYXJnaW5MZWZ0JywgcGxvdFJhbmdlLnRsLngpO1xuICAgIHRoaXMuc2V0KCd3aWR0aCcsIHdpZHRoKTtcblxuICAgIGlmICghdGhpcy5nZXQoJ2NhbnZhcycpKSB7XG4gICAgICB0aGlzLl9pbml0Q2FudmFzKCk7XG4gICAgfVxuICAgIHRoaXMuX2luaXRCYWNrZ3JvdW5kKGNoYXJ0KTtcbiAgICB0aGlzLl9pbml0U2xpZGVyKCk7XG4gICAgdGhpcy5fYmluZEV2ZW50KCk7XG5cbiAgICB2YXIgeERpbSA9IHRoaXMuZ2V0KCd4RGltJyk7XG4gICAgdmFyIG1pbiA9IHRoaXMuX2dldEhhbmRsZVZhbHVlKCdtaW4nKTtcbiAgICB2YXIgbWF4ID0gdGhpcy5fZ2V0SGFuZGxlVmFsdWUoJ21heCcpO1xuICAgIGlmICghdGhpcy5nZXQoJ2NoYW5nZVNpemUnKSkge1xuICAgICAgdGhpcy5fdXBkYXRlTGlua0NoYXJ0cyh4RGltLCBbbWluLCBtYXhdKTtcbiAgICB9XG4gICAgdGhpcy5nZXQoJ2NhbnZhcycpLmRyYXcoKTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJhbmdlRWxlbWVudCA9IHRoaXMuZ2V0KCdyYW5nZUVsZW1lbnQnKTtcbiAgICByYW5nZUVsZW1lbnQub2ZmKCdyYW5nZUNoYW5nZScpO1xuICAgIHRoaXMuZ2V0KCdiZ0NoYXJ0JykgJiYgdGhpcy5nZXQoJ2JnQ2hhcnQnKS5kZXN0cm95KCk7XG4gICAgdGhpcy5nZXQoJ2NhbnZhcycpLmRlc3Ryb3koKTtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXQoJ2NvbnRhaW5lcicpO1xuICAgIHdoaWxlIChjb250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBTbGlkZXIuc3VwZXJjbGFzcy5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIFV0aWwuZ2V0V3JhcEJlaGF2aW9yKHRoaXMsICdfaW5pdEZvcmNlRml0RXZlbnQnKSk7XG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICB0aGlzLmdldCgnY2FudmFzJykuY2xlYXIoKTtcbiAgICB0aGlzLmdldCgnYmdDaGFydCcpICYmIHRoaXMuZ2V0KCdiZ0NoYXJ0JykuZGVzdHJveSgpO1xuICAgIHRoaXMuc2V0KCdiZ0NoYXJ0JywgbnVsbCk7XG4gIH0sXG4gIHJlcGFpbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0KCdmaXJzdFJlbmRlcicsIGZhbHNlKTtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vLjEuMi4xQGcyLXBsdWdpbi1zbGlkZXIvc3JjL3NsaWRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQTdCQTtBQWlDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFWQTtBQTdEQTtBQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7O0FBRUE7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3Y0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=