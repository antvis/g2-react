webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _g2React = __webpack_require__(36);

	var _g2React2 = _interopRequireDefault(_g2React);

	var _g = __webpack_require__(18);

	var _g2 = _interopRequireDefault(_g);

	__webpack_require__(164);

	var _react = __webpack_require__(24);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _candleSticks = __webpack_require__(148);

	var _candleSticks2 = _interopRequireDefault(_candleSticks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MyComponent = _react2.default.createClass({
	  displayName: 'MyComponent',


	  getInitialState: function getInitialState() {
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
	    return {
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
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(this.state.Chart, { data: this.state.data, width: this.state.width, height: this.state.height, plotCfg: this.state.plotCfg, ref: 'myChart' }),
	      _react2.default.createElement('div', { id: 'range' })
	    );
	  }
	});

		_reactDom2.default.render(_react2.default.createElement(MyComponent, null), document.getElementById('__react-content'));

/***/ },

/***/ 148:
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

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Slider = __webpack_require__(165);
	var G2 = __webpack_require__(18);
	if (G2 && G2.Plugin) {
	  var Plugin = G2.Plugin;
	  Plugin.slider = Slider;
	} else {
	  console.err('Please load the G2 script first!');
	}
	module.exports = Slider;


/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview G2's plugin for datazoom.
	 * @author sima.zhang1990@gmail.com
	 */

	'use strict';

	var G2 = __webpack_require__(18);
	var Util = G2.Util;
	var Base = G2.Base;
	var Canvas = G2.Canvas;
	var Components = Canvas.Components;
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
	    globalAlpha: 0.2,
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
	  _initBackground: function() {
	    var linkCharts = this.get('charts');
	    var linkChart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;

	    var xDim = this.get('xDim');
	    var yDim = this.get('yDim');
	    var xScale = Util.clone(linkChart.getScale(xDim));

	    if (yDim) { // 如果声明了 yDim, 则创建滑块背景图
	      var xDimCfg = {};
	      if (xScale.type === 'time' || xScale.type === 'timeCat') {
	        xDimCfg.type = 'time';
	        xDimCfg.mask = xScale.mask;
	      }
	      var bgChart = new G2.Chart({
	        id: this.get('domId'),
	        width: this.get('plotWidth'),
	        height: this.get('height'),
	        plotCfg: {
	          margin: 0
	        }
	      });
	      bgChart.source(linkChart.get('data'));
	      bgChart.col(xDim, Util.mix({
	        range: [0, 1],
	        nice: false
	      }, xDimCfg));

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

	    var rangeElement = canvas.addGroup(Components.Range, {
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
	      var chart = linkCharts[0].get('parent');
	      if (self.get('firstRender')) {
	        chart.render();
	      } else {
	        chart.repaint();
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
	    var plotRange = chart.get('plotRange');
	    if (chart.get('parent')) {
	      plotRange = chart.get('parent').get('plotRange');
	    }
	    this.set('plotWidth', plotRange.tr.x - plotRange.tl.x);
	    this.set('marginLeft', plotRange.tl.x);
	    if (!this.get('canvas')) {
	      this._initCanvas();
	    }
	    this._initBackground();
	    this._initSlider();
	    this._bindEvent();

	    var xDim = this.get('xDim');
	    var min = this._getHandleValue('min');
	    var max = this._getHandleValue('max');
	    this._updateLinkCharts(xDim, [min, max]);
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
	  },
	  clear: function() {
	    this.get('canvas').clear();
	    this.get('bgChart') && this.get('bgChart').destroy();
	  },
	  repaint: function() {
	    this.set('firstRender', false);
	    this.clear();
	    this.render();
	  }
	});

	module.exports = Slider;


/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvZzItcGx1Z2luLXNsaWRlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9nMi1wbHVnaW4tc2xpZGVyLm1kIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2NhbmRsZVN0aWNrcy5qc29uIiwid2VicGFjazovLy8uL34vLjEuMC4wLWJldGFAZzItcGx1Z2luLXNsaWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjAuMC1iZXRhQGcyLXBsdWdpbi1zbGlkZXIvc3JjL3NsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRzIgZnJvbSAnZzItcmVhY3QnO1xuaW1wb3J0IEcyLCB7IFN0YXQsIFBsdWdpbiwgRnJhbWUgfSBmcm9tICdnMic7XG5pbXBvcnQgJ2cyLXBsdWdpbi1zbGlkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9jYW5kbGVTdGlja3MuanNvbic7XG5cbmNvbnN0IE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoZGF0YSk7XG4gICAgZnJhbWUuYWRkQ29sKCd0cmVuZCcsIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIChvYmouc3RhcnQgPD0gb2JqLmVuZCkgPyAwIDogMTtcbiAgICB9KTtcblxuICAgIGNvbnN0IENoYXJ0ID0gY3JlYXRlRzIoY2hhcnQgPT4ge1xuICAgICAgY2hhcnQuc291cmNlKGZyYW1lLCB7XG4gICAgICAgICd0cmVuZCc6IHtcbiAgICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgICBhbGlhczogJ+i2i+WKvycsXG4gICAgICAgICAgdmFsdWVzOiBbJ+S4iua2qCcsICfkuIvot4wnXVxuICAgICAgICB9LFxuICAgICAgICAndGltZSc6IHtcbiAgICAgICAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgICAgICAgbmljZTogZmFsc2UsXG4gICAgICAgICAgbWFzazogJ21tLWRkJyxcbiAgICAgICAgICBhbGlhczogJ+aXtumXtCcsXG4gICAgICAgICAgdGlja0NvdW50OiAxMCxcbiAgICAgICAgICByYW5nZTogWzAsIDFdXG4gICAgICAgIH0sXG4gICAgICAgICd2b2x1bW4nOiB7XG4gICAgICAgICAgYWxpYXM6ICfmiJDkuqTph48nXG4gICAgICAgIH0sXG4gICAgICAgICdzdGFydCc6IHtcbiAgICAgICAgICBhbGlhczogJ+W8gOebmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ2VuZCc6IHtcbiAgICAgICAgICBhbGlhczogJ+aUtuebmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ21heCc6IHtcbiAgICAgICAgICBhbGlhczogJ+acgOmrmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ21pbic6IHtcbiAgICAgICAgICBhbGlhczogJ+acgOS9juS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ3N0YXJ0K2VuZCttYXgrbWluJzoge1xuICAgICAgICAgIGFsaWFzOiAn6IKh56Wo5Lu35qC8J1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7XG4gICAgICAgIHRpdGxlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIGNoYXJ0LnNjaGVtYSgpXG4gICAgICAgIC5wb3NpdGlvbigndGltZSooc3RhcnQrZW5kK21heCttaW4pJylcbiAgICAgICAgLmNvbG9yKCd0cmVuZCcsIFsnIzJBRjQ4MycsICcjRjgwMDQxJ10pXG4gICAgICAgIC5zaGFwZSgnY2FuZGxlJylcbiAgICAgICAgLnRvb2x0aXAoJ3N0YXJ0KmVuZCptYXgqbWluKnZvbHVtbicpO1xuXG4gICAgICAvLyDliJvlu7rmu5HliqjmnaFcbiAgICAgIHZhciBzbGlkZXIgPSBuZXcgUGx1Z2luLnNsaWRlcih7XG4gICAgICAgIGRvbUlkOiAncmFuZ2UnLFxuICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICBjaGFydHM6IGNoYXJ0LFxuICAgICAgICB4RGltOiAndGltZScsXG4gICAgICAgIHlEaW06ICdtYXgnXG4gICAgICB9KTtcbiAgICAgIHNsaWRlci5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgIHBsb3RDZmc6IHtcbiAgICAgICAgbWFyZ2luOiBbMzAsIDEyMCwgMzBdLFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgZmlsbDogJyMxOTE4MjEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDaGFydDogQ2hhcnQsXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dGhpcy5zdGF0ZS5DaGFydCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHdpZHRoPXt0aGlzLnN0YXRlLndpZHRofSBoZWlnaHQ9e3RoaXMuc3RhdGUuaGVpZ2h0fSBwbG90Q2ZnPXt0aGlzLnN0YXRlLnBsb3RDZmd9IHJlZj1cIm15Q2hhcnRcIi8+XG4gICAgICAgIDxkaXYgaWQ9XCJyYW5nZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPE15Q29tcG9uZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19yZWFjdC1jb250ZW50JykpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2cyLXBsdWdpbi1zbGlkZXIubWRcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFtcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMTlcIixcblx0XHRcInN0YXJ0XCI6IDguMTgsXG5cdFx0XCJtYXhcIjogOC4zMyxcblx0XHRcIm1pblwiOiA3Ljk4LFxuXHRcdFwiZW5kXCI6IDguMzIsXG5cdFx0XCJ2b2x1bW5cIjogMTgxMCxcblx0XHRcIm1vbmV5XCI6IDE0NzIzLjU2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTE4XCIsXG5cdFx0XCJzdGFydFwiOiA4LjM3LFxuXHRcdFwibWF4XCI6IDguNixcblx0XHRcIm1pblwiOiA4LjAzLFxuXHRcdFwiZW5kXCI6IDguMDksXG5cdFx0XCJ2b2x1bW5cIjogMjc5MC4zNyxcblx0XHRcIm1vbmV5XCI6IDIzMzA5LjE5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTE3XCIsXG5cdFx0XCJzdGFydFwiOiA4LjcsXG5cdFx0XCJtYXhcIjogOC43OCxcblx0XHRcIm1pblwiOiA4LjMyLFxuXHRcdFwiZW5kXCI6IDguMzcsXG5cdFx0XCJ2b2x1bW5cIjogMzcyOS4wNCxcblx0XHRcIm1vbmV5XCI6IDMxNzA5LjcxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTE2XCIsXG5cdFx0XCJzdGFydFwiOiA4LjE4LFxuXHRcdFwibWF4XCI6IDguNjksXG5cdFx0XCJtaW5cIjogOC4wNSxcblx0XHRcImVuZFwiOiA4LjYyLFxuXHRcdFwidm9sdW1uXCI6IDMwOTUuNDQsXG5cdFx0XCJtb25leVwiOiAyNjEwMC42OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0xM1wiLFxuXHRcdFwic3RhcnRcIjogOC4wMSxcblx0XHRcIm1heFwiOiA4Ljc1LFxuXHRcdFwibWluXCI6IDcuOTcsXG5cdFx0XCJlbmRcIjogOC40MSxcblx0XHRcInZvbHVtblwiOiA1ODE1LjU4LFxuXHRcdFwibW9uZXlcIjogNDg1NjIuMzdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMTJcIixcblx0XHRcInN0YXJ0XCI6IDcuNzYsXG5cdFx0XCJtYXhcIjogOC4xOCxcblx0XHRcIm1pblwiOiA3LjYxLFxuXHRcdFwiZW5kXCI6IDguMTUsXG5cdFx0XCJ2b2x1bW5cIjogNDc0Mi42LFxuXHRcdFwibW9uZXlcIjogMzc1NjUuMzZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMTFcIixcblx0XHRcInN0YXJ0XCI6IDcuNTUsXG5cdFx0XCJtYXhcIjogNy44MSxcblx0XHRcIm1pblwiOiA3LjQ5LFxuXHRcdFwiZW5kXCI6IDcuOCxcblx0XHRcInZvbHVtblwiOiAzMTMzLjgyLFxuXHRcdFwibW9uZXlcIjogMjQwNjUuNDJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMTBcIixcblx0XHRcInN0YXJ0XCI6IDcuNSxcblx0XHRcIm1heFwiOiA3LjY4LFxuXHRcdFwibWluXCI6IDcuNDQsXG5cdFx0XCJlbmRcIjogNy41Nyxcblx0XHRcInZvbHVtblwiOiAyNjcwLjM1LFxuXHRcdFwibW9uZXlcIjogMjAyMTAuNThcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMDlcIixcblx0XHRcInN0YXJ0XCI6IDcuNjUsXG5cdFx0XCJtYXhcIjogNy42Nixcblx0XHRcIm1pblwiOiA3LjMsXG5cdFx0XCJlbmRcIjogNy41OCxcblx0XHRcInZvbHVtblwiOiAyODQxLjc5LFxuXHRcdFwibW9uZXlcIjogMjEzNDQuMzZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTEtMDZcIixcblx0XHRcInN0YXJ0XCI6IDcuNTIsXG5cdFx0XCJtYXhcIjogNy43MSxcblx0XHRcIm1pblwiOiA3LjQ4LFxuXHRcdFwiZW5kXCI6IDcuNjQsXG5cdFx0XCJ2b2x1bW5cIjogMjcyNS40NCxcblx0XHRcIm1vbmV5XCI6IDIwNzIxLjUxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTExLTA1XCIsXG5cdFx0XCJzdGFydFwiOiA3LjQ4LFxuXHRcdFwibWF4XCI6IDcuNTcsXG5cdFx0XCJtaW5cIjogNy4yOSxcblx0XHRcImVuZFwiOiA3LjQ4LFxuXHRcdFwidm9sdW1uXCI6IDM1MjAuODUsXG5cdFx0XCJtb25leVwiOiAyNjE0MC44M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0wNFwiLFxuXHRcdFwic3RhcnRcIjogNy4wMSxcblx0XHRcIm1heFwiOiA3LjUsXG5cdFx0XCJtaW5cIjogNy4wMSxcblx0XHRcImVuZFwiOiA3LjQ2LFxuXHRcdFwidm9sdW1uXCI6IDM1OTEuNDcsXG5cdFx0XCJtb25leVwiOiAyNjI4NS41MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0wM1wiLFxuXHRcdFwic3RhcnRcIjogNy4xLFxuXHRcdFwibWF4XCI6IDcuMTcsXG5cdFx0XCJtaW5cIjogNi44Mixcblx0XHRcImVuZFwiOiA3LFxuXHRcdFwidm9sdW1uXCI6IDIwMjkuMjEsXG5cdFx0XCJtb25leVwiOiAxNDIwMi4zM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMS0wMlwiLFxuXHRcdFwic3RhcnRcIjogNy4wOSxcblx0XHRcIm1heFwiOiA3LjQ0LFxuXHRcdFwibWluXCI6IDYuOTMsXG5cdFx0XCJlbmRcIjogNy4xNyxcblx0XHRcInZvbHVtblwiOiAzMTkxLjMxLFxuXHRcdFwibW9uZXlcIjogMjMyMDUuMTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMzBcIixcblx0XHRcInN0YXJ0XCI6IDYuOTgsXG5cdFx0XCJtYXhcIjogNy4yNyxcblx0XHRcIm1pblwiOiA2Ljg0LFxuXHRcdFwiZW5kXCI6IDcuMTgsXG5cdFx0XCJ2b2x1bW5cIjogMzUyMi42MSxcblx0XHRcIm1vbmV5XCI6IDI1MDgzLjQ0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTI5XCIsXG5cdFx0XCJzdGFydFwiOiA2Ljk0LFxuXHRcdFwibWF4XCI6IDcuMixcblx0XHRcIm1pblwiOiA2LjgsXG5cdFx0XCJlbmRcIjogNy4wNSxcblx0XHRcInZvbHVtblwiOiAyNzUyLjI3LFxuXHRcdFwibW9uZXlcIjogMTkzMjguNDRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMjhcIixcblx0XHRcInN0YXJ0XCI6IDcuMDEsXG5cdFx0XCJtYXhcIjogNy4xNCxcblx0XHRcIm1pblwiOiA2LjgsXG5cdFx0XCJlbmRcIjogNi44NSxcblx0XHRcInZvbHVtblwiOiAyMzExLjExLFxuXHRcdFwibW9uZXlcIjogMTYxMzcuMzJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMjdcIixcblx0XHRcInN0YXJ0XCI6IDYuOTEsXG5cdFx0XCJtYXhcIjogNy4zMSxcblx0XHRcIm1pblwiOiA2LjQ4LFxuXHRcdFwiZW5kXCI6IDcuMTgsXG5cdFx0XCJ2b2x1bW5cIjogMzE3Mi45LFxuXHRcdFwibW9uZXlcIjogMjE4MjcuM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0yNlwiLFxuXHRcdFwic3RhcnRcIjogNi45LFxuXHRcdFwibWF4XCI6IDcuMDgsXG5cdFx0XCJtaW5cIjogNi44Nyxcblx0XHRcImVuZFwiOiA2Ljk1LFxuXHRcdFwidm9sdW1uXCI6IDI3NjkuMzEsXG5cdFx0XCJtb25leVwiOiAxOTMzNy40NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0yM1wiLFxuXHRcdFwic3RhcnRcIjogNi43MSxcblx0XHRcIm1heFwiOiA2Ljg1LFxuXHRcdFwibWluXCI6IDYuNTgsXG5cdFx0XCJlbmRcIjogNi43OSxcblx0XHRcInZvbHVtblwiOiAyNDgzLjE4LFxuXHRcdFwibW9uZXlcIjogMTY3MTQuMzFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMjJcIixcblx0XHRcInN0YXJ0XCI6IDYuMzgsXG5cdFx0XCJtYXhcIjogNi42Nyxcblx0XHRcIm1pblwiOiA2LjM0LFxuXHRcdFwiZW5kXCI6IDYuNjUsXG5cdFx0XCJ2b2x1bW5cIjogMjIyNS44OCxcblx0XHRcIm1vbmV5XCI6IDE0NDY1LjU2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTIxXCIsXG5cdFx0XCJzdGFydFwiOiA3LjA4LFxuXHRcdFwibWF4XCI6IDcuMSxcblx0XHRcIm1pblwiOiA2LjQxLFxuXHRcdFwiZW5kXCI6IDYuNDEsXG5cdFx0XCJ2b2x1bW5cIjogMjg5MS40Nyxcblx0XHRcIm1vbmV5XCI6IDE5NTg1Ljk4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTIwXCIsXG5cdFx0XCJzdGFydFwiOiA2Ljg4LFxuXHRcdFwibWF4XCI6IDcuMTksXG5cdFx0XCJtaW5cIjogNi44NSxcblx0XHRcImVuZFwiOiA3LjEyLFxuXHRcdFwidm9sdW1uXCI6IDIzODkuNjIsXG5cdFx0XCJtb25leVwiOiAxNjgxMy41OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0xOVwiLFxuXHRcdFwic3RhcnRcIjogNy4xLFxuXHRcdFwibWF4XCI6IDcuMTQsXG5cdFx0XCJtaW5cIjogNi44LFxuXHRcdFwiZW5kXCI6IDYuOTQsXG5cdFx0XCJ2b2x1bW5cIjogMjc4Ni42MSxcblx0XHRcIm1vbmV5XCI6IDE5NDc0LjcyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTE2XCIsXG5cdFx0XCJzdGFydFwiOiA2LjkyLFxuXHRcdFwibWF4XCI6IDcuMzgsXG5cdFx0XCJtaW5cIjogNi43Myxcblx0XHRcImVuZFwiOiA3LjE1LFxuXHRcdFwidm9sdW1uXCI6IDMyODkuMjcsXG5cdFx0XCJtb25leVwiOiAyMjk2My45N1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0xNVwiLFxuXHRcdFwic3RhcnRcIjogNi42Myxcblx0XHRcIm1heFwiOiA2LjksXG5cdFx0XCJtaW5cIjogNi42LFxuXHRcdFwiZW5kXCI6IDYuODksXG5cdFx0XCJ2b2x1bW5cIjogMjQ0MC4zNyxcblx0XHRcIm1vbmV5XCI6IDE2NTc1Ljg0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTE0XCIsXG5cdFx0XCJzdGFydFwiOiA2LjcsXG5cdFx0XCJtYXhcIjogNi45OSxcblx0XHRcIm1pblwiOiA2LjYxLFxuXHRcdFwiZW5kXCI6IDYuNjYsXG5cdFx0XCJ2b2x1bW5cIjogMjQ5Ni4zOCxcblx0XHRcIm1vbmV5XCI6IDE2ODU4LjI4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTEwLTEzXCIsXG5cdFx0XCJzdGFydFwiOiA2LjU1LFxuXHRcdFwibWF4XCI6IDYuODEsXG5cdFx0XCJtaW5cIjogNi41NSxcblx0XHRcImVuZFwiOiA2Ljc1LFxuXHRcdFwidm9sdW1uXCI6IDIyOTkuODMsXG5cdFx0XCJtb25leVwiOiAxNTMzOC4yNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0xMC0xMlwiLFxuXHRcdFwic3RhcnRcIjogNi4yOSxcblx0XHRcIm1heFwiOiA2Ljg5LFxuXHRcdFwibWluXCI6IDYuMjksXG5cdFx0XCJlbmRcIjogNi42OSxcblx0XHRcInZvbHVtblwiOiAzMTQ3LjU4LFxuXHRcdFwibW9uZXlcIjogMjA3MzguMzVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMDlcIixcblx0XHRcInN0YXJ0XCI6IDYuMSxcblx0XHRcIm1heFwiOiA2LjQ0LFxuXHRcdFwibWluXCI6IDYuMDgsXG5cdFx0XCJlbmRcIjogNi4zNCxcblx0XHRcInZvbHVtblwiOiAyNjY0LjA0LFxuXHRcdFwibW9uZXlcIjogMTY4MTEuMTRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMTAtMDhcIixcblx0XHRcInN0YXJ0XCI6IDYuMTEsXG5cdFx0XCJtYXhcIjogNi4yOCxcblx0XHRcIm1pblwiOiA2LFxuXHRcdFwiZW5kXCI6IDYuMTIsXG5cdFx0XCJ2b2x1bW5cIjogMjE5Ny4yMyxcblx0XHRcIm1vbmV5XCI6IDEzNDQwLjkyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTMwXCIsXG5cdFx0XCJzdGFydFwiOiA1LjkzLFxuXHRcdFwibWF4XCI6IDYuMTIsXG5cdFx0XCJtaW5cIjogNS44MSxcblx0XHRcImVuZFwiOiA1LjgzLFxuXHRcdFwidm9sdW1uXCI6IDE0NTkuNjQsXG5cdFx0XCJtb25leVwiOiA4NjU5LjUyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTI5XCIsXG5cdFx0XCJzdGFydFwiOiA1Ljk2LFxuXHRcdFwibWF4XCI6IDUuOTgsXG5cdFx0XCJtaW5cIjogNS43Myxcblx0XHRcImVuZFwiOiA1LjgzLFxuXHRcdFwidm9sdW1uXCI6IDEwNDcuNDIsXG5cdFx0XCJtb25leVwiOiA2MTMyLjcyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTI4XCIsXG5cdFx0XCJzdGFydFwiOiA1Ljg2LFxuXHRcdFwibWF4XCI6IDYuMTMsXG5cdFx0XCJtaW5cIjogNS44NSxcblx0XHRcImVuZFwiOiA2LjA3LFxuXHRcdFwidm9sdW1uXCI6IDk1Mi40NSxcblx0XHRcIm1vbmV5XCI6IDU3MTcuMzNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMjVcIixcblx0XHRcInN0YXJ0XCI6IDYuMjMsXG5cdFx0XCJtYXhcIjogNi4yOCxcblx0XHRcIm1pblwiOiA1Ljg1LFxuXHRcdFwiZW5kXCI6IDUuOTYsXG5cdFx0XCJ2b2x1bW5cIjogMTM5NS4yNyxcblx0XHRcIm1vbmV5XCI6IDg0NjUuOTVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMjRcIixcblx0XHRcInN0YXJ0XCI6IDYuMTYsXG5cdFx0XCJtYXhcIjogNi4zMixcblx0XHRcIm1pblwiOiA2LjEsXG5cdFx0XCJlbmRcIjogNi4yNyxcblx0XHRcInZvbHVtblwiOiAxNDM0LjM4LFxuXHRcdFwibW9uZXlcIjogODkyMC44OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0yM1wiLFxuXHRcdFwic3RhcnRcIjogNi4xOCxcblx0XHRcIm1heFwiOiA2LjMyLFxuXHRcdFwibWluXCI6IDYuMDIsXG5cdFx0XCJlbmRcIjogNi4xMixcblx0XHRcInZvbHVtblwiOiAxNTU4LjU0LFxuXHRcdFwibW9uZXlcIjogOTYzMS4zOFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0yMlwiLFxuXHRcdFwic3RhcnRcIjogNi4zNSxcblx0XHRcIm1heFwiOiA2LjQsXG5cdFx0XCJtaW5cIjogNi4xNSxcblx0XHRcImVuZFwiOiA2LjI1LFxuXHRcdFwidm9sdW1uXCI6IDE4OTMuODMsXG5cdFx0XCJtb25leVwiOiAxMTkwMS41MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0yMVwiLFxuXHRcdFwic3RhcnRcIjogNS44Myxcblx0XHRcIm1heFwiOiA2LjMyLFxuXHRcdFwibWluXCI6IDUuODMsXG5cdFx0XCJlbmRcIjogNi4zMSxcblx0XHRcInZvbHVtblwiOiAxNzQ4LjM1LFxuXHRcdFwibW9uZXlcIjogMTA4MDcuNjZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMThcIixcblx0XHRcInN0YXJ0XCI6IDYsXG5cdFx0XCJtYXhcIjogNi4xLFxuXHRcdFwibWluXCI6IDUuODEsXG5cdFx0XCJlbmRcIjogNi4wMixcblx0XHRcInZvbHVtblwiOiAxNTA3LjA5LFxuXHRcdFwibW9uZXlcIjogODk5OS40NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOS0xN1wiLFxuXHRcdFwic3RhcnRcIjogNi4xLFxuXHRcdFwibWF4XCI6IDYuMzQsXG5cdFx0XCJtaW5cIjogNS44LFxuXHRcdFwiZW5kXCI6IDUuODMsXG5cdFx0XCJ2b2x1bW5cIjogMjEzNS42NCxcblx0XHRcIm1vbmV5XCI6IDEzMDM5LjU2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTE2XCIsXG5cdFx0XCJzdGFydFwiOiA1LjU4LFxuXHRcdFwibWF4XCI6IDYuMDcsXG5cdFx0XCJtaW5cIjogNS40LFxuXHRcdFwiZW5kXCI6IDYuMDcsXG5cdFx0XCJ2b2x1bW5cIjogMTc1OC41Nyxcblx0XHRcIm1vbmV5XCI6IDEwMTMyLjI1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTE1XCIsXG5cdFx0XCJzdGFydFwiOiA1LjgxLFxuXHRcdFwibWF4XCI6IDYuMDksXG5cdFx0XCJtaW5cIjogNS41Mixcblx0XHRcImVuZFwiOiA1LjUyLFxuXHRcdFwidm9sdW1uXCI6IDE2MTcuMTIsXG5cdFx0XCJtb25leVwiOiA5MjQ4LjY5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTE0XCIsXG5cdFx0XCJzdGFydFwiOiA2Ljk4LFxuXHRcdFwibWF4XCI6IDcuMDYsXG5cdFx0XCJtaW5cIjogNi4xMyxcblx0XHRcImVuZFwiOiA2LjEzLFxuXHRcdFwidm9sdW1uXCI6IDE5ODIuOSxcblx0XHRcIm1vbmV5XCI6IDEyOTg5LjAxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTExXCIsXG5cdFx0XCJzdGFydFwiOiA2Ljg3LFxuXHRcdFwibWF4XCI6IDcuMDEsXG5cdFx0XCJtaW5cIjogNi42OCxcblx0XHRcImVuZFwiOiA2LjgxLFxuXHRcdFwidm9sdW1uXCI6IDEzNzEuNzcsXG5cdFx0XCJtb25leVwiOiA5MzcwLjQ5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTEwXCIsXG5cdFx0XCJzdGFydFwiOiA2LjcsXG5cdFx0XCJtYXhcIjogNy4xNyxcblx0XHRcIm1pblwiOiA2LjY1LFxuXHRcdFwiZW5kXCI6IDYuODYsXG5cdFx0XCJ2b2x1bW5cIjogMjE4MS4zMyxcblx0XHRcIm1vbmV5XCI6IDE1MTY5LjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMDlcIixcblx0XHRcInN0YXJ0XCI6IDYuNzYsXG5cdFx0XCJtYXhcIjogNy4wMyxcblx0XHRcIm1pblwiOiA2LjY1LFxuXHRcdFwiZW5kXCI6IDYuOTMsXG5cdFx0XCJ2b2x1bW5cIjogMjEwNS4yOCxcblx0XHRcIm1vbmV5XCI6IDE0NDI2Ljc2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA5LTA4XCIsXG5cdFx0XCJzdGFydFwiOiA2LjI2LFxuXHRcdFwibWF4XCI6IDYuNyxcblx0XHRcIm1pblwiOiA2LjAxLFxuXHRcdFwiZW5kXCI6IDYuNjQsXG5cdFx0XCJ2b2x1bW5cIjogMTUwNi41Myxcblx0XHRcIm1vbmV5XCI6IDk1NTYuNTRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMDdcIixcblx0XHRcInN0YXJ0XCI6IDYuMTksXG5cdFx0XCJtYXhcIjogNi40NSxcblx0XHRcIm1pblwiOiA2LjA5LFxuXHRcdFwiZW5kXCI6IDYuMixcblx0XHRcInZvbHVtblwiOiAxNjA1Ljg1LFxuXHRcdFwibW9uZXlcIjogMTAwOTEuMjZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMDJcIixcblx0XHRcInN0YXJ0XCI6IDYuMixcblx0XHRcIm1heFwiOiA2Ljg0LFxuXHRcdFwibWluXCI6IDUuOTgsXG5cdFx0XCJlbmRcIjogNS45OSxcblx0XHRcInZvbHVtblwiOiAxOTM0Ljk1LFxuXHRcdFwibW9uZXlcIjogMTIyMjUuNjhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDktMDFcIixcblx0XHRcInN0YXJ0XCI6IDcuMjIsXG5cdFx0XCJtYXhcIjogNy4yOCxcblx0XHRcIm1pblwiOiA2LjY0LFxuXHRcdFwiZW5kXCI6IDYuNjQsXG5cdFx0XCJ2b2x1bW5cIjogMjY0NS44Nyxcblx0XHRcIm1vbmV5XCI6IDE4MDE3LjkxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTMxXCIsXG5cdFx0XCJzdGFydFwiOiA3LjgzLFxuXHRcdFwibWF4XCI6IDgsXG5cdFx0XCJtaW5cIjogNy4zNSxcblx0XHRcImVuZFwiOiA3LjM4LFxuXHRcdFwidm9sdW1uXCI6IDI5ODQuMDMsXG5cdFx0XCJtb25leVwiOiAyMzAzMS4yNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0yOFwiLFxuXHRcdFwic3RhcnRcIjogNy4zLFxuXHRcdFwibWF4XCI6IDcuNzcsXG5cdFx0XCJtaW5cIjogNy4xLFxuXHRcdFwiZW5kXCI6IDcuNzcsXG5cdFx0XCJ2b2x1bW5cIjogMzA5Mi42LFxuXHRcdFwibW9uZXlcIjogMjMxMjEuNDlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMjdcIixcblx0XHRcInN0YXJ0XCI6IDYuNzUsXG5cdFx0XCJtYXhcIjogNy4xLFxuXHRcdFwibWluXCI6IDYuNDMsXG5cdFx0XCJlbmRcIjogNy4wNixcblx0XHRcInZvbHVtblwiOiAyOTAzLjc2LFxuXHRcdFwibW9uZXlcIjogMTk4NDguODdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMjZcIixcblx0XHRcInN0YXJ0XCI6IDcuMTMsXG5cdFx0XCJtYXhcIjogNy40Myxcblx0XHRcIm1pblwiOiA2LjQyLFxuXHRcdFwiZW5kXCI6IDYuNTgsXG5cdFx0XCJ2b2x1bW5cIjogNDIxMi4wNCxcblx0XHRcIm1vbmV5XCI6IDI5MDY5LjI1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTI1XCIsXG5cdFx0XCJzdGFydFwiOiA3LjEzLFxuXHRcdFwibWF4XCI6IDcuMjksXG5cdFx0XCJtaW5cIjogNy4xMyxcblx0XHRcImVuZFwiOiA3LjEzLFxuXHRcdFwidm9sdW1uXCI6IDE4MzguNTksXG5cdFx0XCJtb25leVwiOiAxMzE0MC44XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTI0XCIsXG5cdFx0XCJzdGFydFwiOiA4LjQsXG5cdFx0XCJtYXhcIjogOC40LFxuXHRcdFwibWluXCI6IDcuOTIsXG5cdFx0XCJlbmRcIjogNy45Mixcblx0XHRcInZvbHVtblwiOiAxNzY2LjM5LFxuXHRcdFwibW9uZXlcIjogMTQxNjguODZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMjFcIixcblx0XHRcInN0YXJ0XCI6IDksXG5cdFx0XCJtYXhcIjogOS42MSxcblx0XHRcIm1pblwiOiA4LjUzLFxuXHRcdFwiZW5kXCI6IDguOCxcblx0XHRcInZvbHVtblwiOiAzMzg4LjI3LFxuXHRcdFwibW9uZXlcIjogMzA5NTIuMTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMjBcIixcblx0XHRcInN0YXJ0XCI6IDEwLjAyLFxuXHRcdFwibWF4XCI6IDEwLjI0LFxuXHRcdFwibWluXCI6IDkuMzIsXG5cdFx0XCJlbmRcIjogOS4zMyxcblx0XHRcInZvbHVtblwiOiAzOTAyLjE3LFxuXHRcdFwibW9uZXlcIjogMzgzOTEuNjhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMTlcIixcblx0XHRcInN0YXJ0XCI6IDkuMyxcblx0XHRcIm1heFwiOiAxMC41OSxcblx0XHRcIm1pblwiOiA5LjAxLFxuXHRcdFwiZW5kXCI6IDEwLjM1LFxuXHRcdFwidm9sdW1uXCI6IDU1NjguOTYsXG5cdFx0XCJtb25leVwiOiA1MzkyOC43OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0xOFwiLFxuXHRcdFwic3RhcnRcIjogMTEuMTgsXG5cdFx0XCJtYXhcIjogMTEuNSxcblx0XHRcIm1pblwiOiAxMCxcblx0XHRcImVuZFwiOiAxMCxcblx0XHRcInZvbHVtblwiOiA3MzMyLjcsXG5cdFx0XCJtb25leVwiOiA3ODQzOS42MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0xN1wiLFxuXHRcdFwic3RhcnRcIjogMTAuMixcblx0XHRcIm1heFwiOiAxMS4xMSxcblx0XHRcIm1pblwiOiA5LjksXG5cdFx0XCJlbmRcIjogMTEuMTEsXG5cdFx0XCJ2b2x1bW5cIjogODEyMS44Nixcblx0XHRcIm1vbmV5XCI6IDg2Mjk4LjkyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTE0XCIsXG5cdFx0XCJzdGFydFwiOiA5LjU4LFxuXHRcdFwibWF4XCI6IDEwLjM3LFxuXHRcdFwibWluXCI6IDkuMzcsXG5cdFx0XCJlbmRcIjogMTAuMSxcblx0XHRcInZvbHVtblwiOiA2MDAxLjYxLFxuXHRcdFwibW9uZXlcIjogNTg0MjUuMTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMTNcIixcblx0XHRcInN0YXJ0XCI6IDkuMTQsXG5cdFx0XCJtYXhcIjogOS41LFxuXHRcdFwibWluXCI6IDguOTEsXG5cdFx0XCJlbmRcIjogOS40OSxcblx0XHRcInZvbHVtblwiOiAzODU0LjE5LFxuXHRcdFwibW9uZXlcIjogMzU2OTYuMjdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMTJcIixcblx0XHRcInN0YXJ0XCI6IDkuMDksXG5cdFx0XCJtYXhcIjogOS42OCxcblx0XHRcIm1pblwiOiA4Ljk4LFxuXHRcdFwiZW5kXCI6IDkuMjksXG5cdFx0XCJ2b2x1bW5cIjogNDIzOC41Nyxcblx0XHRcIm1vbmV5XCI6IDM5OTA5LjNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMTFcIixcblx0XHRcInN0YXJ0XCI6IDkuMjMsXG5cdFx0XCJtYXhcIjogOS40Nyxcblx0XHRcIm1pblwiOiA5LFxuXHRcdFwiZW5kXCI6IDkuMTUsXG5cdFx0XCJ2b2x1bW5cIjogNDI5NC44NSxcblx0XHRcIm1vbmV5XCI6IDM5Njc0LjcxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTEwXCIsXG5cdFx0XCJzdGFydFwiOiA4LjksXG5cdFx0XCJtYXhcIjogOS4zOCxcblx0XHRcIm1pblwiOiA4Ljc2LFxuXHRcdFwiZW5kXCI6IDkuMixcblx0XHRcInZvbHVtblwiOiA0MDEzLjExLFxuXHRcdFwibW9uZXlcIjogMzYyODcuODlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMDdcIixcblx0XHRcInN0YXJ0XCI6IDguMzYsXG5cdFx0XCJtYXhcIjogOC44LFxuXHRcdFwibWluXCI6IDguMzEsXG5cdFx0XCJlbmRcIjogOC43LFxuXHRcdFwidm9sdW1uXCI6IDMwOTIuNjYsXG5cdFx0XCJtb25leVwiOiAyNjMzNi43NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wOC0wNlwiLFxuXHRcdFwic3RhcnRcIjogOC4wMyxcblx0XHRcIm1heFwiOiA4LjQyLFxuXHRcdFwibWluXCI6IDcuOTUsXG5cdFx0XCJlbmRcIjogOC4yNSxcblx0XHRcInZvbHVtblwiOiAyMDcyLjIxLFxuXHRcdFwibW9uZXlcIjogMTcwNjAuMTFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMDVcIixcblx0XHRcInN0YXJ0XCI6IDguNSxcblx0XHRcIm1heFwiOiA4LjY5LFxuXHRcdFwibWluXCI6IDguMDgsXG5cdFx0XCJlbmRcIjogOC4yOCxcblx0XHRcInZvbHVtblwiOiAzNTMzLjk0LFxuXHRcdFwibW9uZXlcIjogMjk3OTYuOTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDgtMDRcIixcblx0XHRcInN0YXJ0XCI6IDcuNjUsXG5cdFx0XCJtYXhcIjogOC4zOSxcblx0XHRcIm1pblwiOiA3LjY1LFxuXHRcdFwiZW5kXCI6IDguMzksXG5cdFx0XCJ2b2x1bW5cIjogMzA2Ny4yMixcblx0XHRcIm1vbmV5XCI6IDI0NzczLjg4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA4LTAzXCIsXG5cdFx0XCJzdGFydFwiOiA4LjE1LFxuXHRcdFwibWF4XCI6IDguNCxcblx0XHRcIm1pblwiOiA3LjYsXG5cdFx0XCJlbmRcIjogNy42Myxcblx0XHRcInZvbHVtblwiOiAzMDk4LjMzLFxuXHRcdFwibW9uZXlcIjogMjQzODIuOTlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMzFcIixcblx0XHRcInN0YXJ0XCI6IDguNyxcblx0XHRcIm1heFwiOiA5LjAxLFxuXHRcdFwibWluXCI6IDguMjUsXG5cdFx0XCJlbmRcIjogOC40NCxcblx0XHRcInZvbHVtblwiOiAzNTAwLjYxLFxuXHRcdFwibW9uZXlcIjogMzAyODkuODNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMzBcIixcblx0XHRcInN0YXJ0XCI6IDguOTIsXG5cdFx0XCJtYXhcIjogOS42NSxcblx0XHRcIm1pblwiOiA4LjcsXG5cdFx0XCJlbmRcIjogOC45Nyxcblx0XHRcInZvbHVtblwiOiA2MDIyLjgsXG5cdFx0XCJtb25leVwiOiA1NTYyNC44NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0yOVwiLFxuXHRcdFwic3RhcnRcIjogOC4zNSxcblx0XHRcIm1heFwiOiA4LjkxLFxuXHRcdFwibWluXCI6IDcuNzgsXG5cdFx0XCJlbmRcIjogOC44OCxcblx0XHRcInZvbHVtblwiOiA0MTc3LjE4LFxuXHRcdFwibW9uZXlcIjogMzQ4OTMuMlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0yOFwiLFxuXHRcdFwic3RhcnRcIjogOCxcblx0XHRcIm1heFwiOiA5LFxuXHRcdFwibWluXCI6IDcuOTIsXG5cdFx0XCJlbmRcIjogOC4xLFxuXHRcdFwidm9sdW1uXCI6IDUxMTQuNTUsXG5cdFx0XCJtb25leVwiOiA0MjA5NS45OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0yN1wiLFxuXHRcdFwic3RhcnRcIjogOS40LFxuXHRcdFwibWF4XCI6IDkuOTksXG5cdFx0XCJtaW5cIjogOC44LFxuXHRcdFwiZW5kXCI6IDguOCxcblx0XHRcInZvbHVtblwiOiA2MDAxLjUxLFxuXHRcdFwibW9uZXlcIjogNTY5NjIuMjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMjRcIixcblx0XHRcInN0YXJ0XCI6IDkuMjcsXG5cdFx0XCJtYXhcIjogMTAuMjgsXG5cdFx0XCJtaW5cIjogOS4xMSxcblx0XHRcImVuZFwiOiA5Ljc4LFxuXHRcdFwidm9sdW1uXCI6IDg0NDYuNzYsXG5cdFx0XCJtb25leVwiOiA4MTk5MS4xOVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0yM1wiLFxuXHRcdFwic3RhcnRcIjogOSxcblx0XHRcIm1heFwiOiA5Ljc4LFxuXHRcdFwibWluXCI6IDguNzQsXG5cdFx0XCJlbmRcIjogOS40Nixcblx0XHRcInZvbHVtblwiOiA4NDk2LjEsXG5cdFx0XCJtb25leVwiOiA3NzU1MS4wMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0yMlwiLFxuXHRcdFwic3RhcnRcIjogOC4wOCxcblx0XHRcIm1heFwiOiA4Ljk3LFxuXHRcdFwibWluXCI6IDguMDUsXG5cdFx0XCJlbmRcIjogOC45Nyxcblx0XHRcInZvbHVtblwiOiA4Njc2Ljc1LFxuXHRcdFwibW9uZXlcIjogNzU3NTEuMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0yMVwiLFxuXHRcdFwic3RhcnRcIjogNy44LFxuXHRcdFwibWF4XCI6IDguMzMsXG5cdFx0XCJtaW5cIjogNy42NSxcblx0XHRcImVuZFwiOiA4LjE1LFxuXHRcdFwidm9sdW1uXCI6IDQ2MzEuMTUsXG5cdFx0XCJtb25leVwiOiAzNzQ1MC43OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0yMFwiLFxuXHRcdFwic3RhcnRcIjogNy43Mixcblx0XHRcIm1heFwiOiA4LjI3LFxuXHRcdFwibWluXCI6IDcuNjMsXG5cdFx0XCJlbmRcIjogOC4wNSxcblx0XHRcInZvbHVtblwiOiA2NDI4LjIsXG5cdFx0XCJtb25leVwiOiA1MTEyNy45OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0xN1wiLFxuXHRcdFwic3RhcnRcIjogNi45NCxcblx0XHRcIm1heFwiOiA3LjczLFxuXHRcdFwibWluXCI6IDYuOTQsXG5cdFx0XCJlbmRcIjogNy43Myxcblx0XHRcInZvbHVtblwiOiA0ODM1LjQ0LFxuXHRcdFwibW9uZXlcIjogMzY2NjYuNThcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMTZcIixcblx0XHRcInN0YXJ0XCI6IDYuNTMsXG5cdFx0XCJtYXhcIjogNy40OCxcblx0XHRcIm1pblwiOiA2LjQyLFxuXHRcdFwiZW5kXCI6IDcuMDMsXG5cdFx0XCJ2b2x1bW5cIjogMzYwNS43Nyxcblx0XHRcIm1vbmV5XCI6IDI1MDMxLjE1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTE1XCIsXG5cdFx0XCJzdGFydFwiOiA3LjU3LFxuXHRcdFwibWF4XCI6IDcuODMsXG5cdFx0XCJtaW5cIjogNy4xMyxcblx0XHRcImVuZFwiOiA3LjEzLFxuXHRcdFwidm9sdW1uXCI6IDI3MjkuNTksXG5cdFx0XCJtb25leVwiOiAyMDA0MS43NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0xNFwiLFxuXHRcdFwic3RhcnRcIjogOC4yLFxuXHRcdFwibWF4XCI6IDguNyxcblx0XHRcIm1pblwiOiA3LjY2LFxuXHRcdFwiZW5kXCI6IDcuOTIsXG5cdFx0XCJ2b2x1bW5cIjogNzA3My44MSxcblx0XHRcIm1vbmV5XCI6IDU4MTMxLjE2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTEzXCIsXG5cdFx0XCJzdGFydFwiOiA3LjUsXG5cdFx0XCJtYXhcIjogOC4xLFxuXHRcdFwibWluXCI6IDcuNSxcblx0XHRcImVuZFwiOiA4LjEsXG5cdFx0XCJ2b2x1bW5cIjogNDU3My45Mixcblx0XHRcIm1vbmV5XCI6IDM2MDgzLjY5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTEwXCIsXG5cdFx0XCJzdGFydFwiOiA2LjksXG5cdFx0XCJtYXhcIjogNy4zNixcblx0XHRcIm1pblwiOiA2Ljg4LFxuXHRcdFwiZW5kXCI6IDcuMzYsXG5cdFx0XCJ2b2x1bW5cIjogNDE4My4zNyxcblx0XHRcIm1vbmV5XCI6IDMwNDExLjE5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTA5XCIsXG5cdFx0XCJzdGFydFwiOiA1LjQ3LFxuXHRcdFwibWF4XCI6IDYuNjksXG5cdFx0XCJtaW5cIjogNS40Nyxcblx0XHRcImVuZFwiOiA2LjY5LFxuXHRcdFwidm9sdW1uXCI6IDY2NjEuNzgsXG5cdFx0XCJtb25leVwiOiA0MDM5OC45NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0wOFwiLFxuXHRcdFwic3RhcnRcIjogNi4wOCxcblx0XHRcIm1heFwiOiA2LjA4LFxuXHRcdFwibWluXCI6IDYuMDgsXG5cdFx0XCJlbmRcIjogNi4wOCxcblx0XHRcInZvbHVtblwiOiAxNTguMTYsXG5cdFx0XCJtb25leVwiOiA5NjEuNjFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDctMDdcIixcblx0XHRcInN0YXJ0XCI6IDYuNzcsXG5cdFx0XCJtYXhcIjogNi44OCxcblx0XHRcIm1pblwiOiA2Ljc1LFxuXHRcdFwiZW5kXCI6IDYuNzUsXG5cdFx0XCJ2b2x1bW5cIjogMzgzLjQ1LFxuXHRcdFwibW9uZXlcIjogMjU5MC44NVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0wNlwiLFxuXHRcdFwic3RhcnRcIjogOS4xLFxuXHRcdFwibWF4XCI6IDkuMSxcblx0XHRcIm1pblwiOiA3LjUsXG5cdFx0XCJlbmRcIjogNy41LFxuXHRcdFwidm9sdW1uXCI6IDI5NjguOTgsXG5cdFx0XCJtb25leVwiOiAyNDAwMi42XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA3LTAzXCIsXG5cdFx0XCJzdGFydFwiOiA4LjM4LFxuXHRcdFwibWF4XCI6IDguODcsXG5cdFx0XCJtaW5cIjogOC4zMyxcblx0XHRcImVuZFwiOiA4LjMzLFxuXHRcdFwidm9sdW1uXCI6IDI2NDEuNzMsXG5cdFx0XCJtb25leVwiOiAyMjIyMy40NFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0wMlwiLFxuXHRcdFwic3RhcnRcIjogMTAuMzgsXG5cdFx0XCJtYXhcIjogMTAuMzgsXG5cdFx0XCJtaW5cIjogOS4yNixcblx0XHRcImVuZFwiOiA5LjI2LFxuXHRcdFwidm9sdW1uXCI6IDI2MTEuMDYsXG5cdFx0XCJtb25leVwiOiAyNDYyMC44MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNy0wMVwiLFxuXHRcdFwic3RhcnRcIjogMTEuMzEsXG5cdFx0XCJtYXhcIjogMTEuNjEsXG5cdFx0XCJtaW5cIjogMTAuMjksXG5cdFx0XCJlbmRcIjogMTAuMjksXG5cdFx0XCJ2b2x1bW5cIjogMzQwMS40NSxcblx0XHRcIm1vbmV5XCI6IDM3MjEyLjg3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTMwXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4wOCxcblx0XHRcIm1heFwiOiAxMS41Mixcblx0XHRcIm1pblwiOiAxMC4wMSxcblx0XHRcImVuZFwiOiAxMS40Myxcblx0XHRcInZvbHVtblwiOiA0MjA1Ljk5LFxuXHRcdFwibW9uZXlcIjogNDUzODEuMDZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMjlcIixcblx0XHRcInN0YXJ0XCI6IDEyLjk2LFxuXHRcdFwibWF4XCI6IDEyLjk2LFxuXHRcdFwibWluXCI6IDExLjEyLFxuXHRcdFwiZW5kXCI6IDExLjEyLFxuXHRcdFwidm9sdW1uXCI6IDM3NDUuNjgsXG5cdFx0XCJtb25leVwiOiA0NDI1Mi40N1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0yNlwiLFxuXHRcdFwic3RhcnRcIjogMTMuMTUsXG5cdFx0XCJtYXhcIjogMTMuNDEsXG5cdFx0XCJtaW5cIjogMTIuMzYsXG5cdFx0XCJlbmRcIjogMTIuMzYsXG5cdFx0XCJ2b2x1bW5cIjogMzY3NS45MSxcblx0XHRcIm1vbmV5XCI6IDQ2NzU5LjI5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTI1XCIsXG5cdFx0XCJzdGFydFwiOiAxMy43MSxcblx0XHRcIm1heFwiOiAxNC40Nixcblx0XHRcIm1pblwiOiAxMy4zLFxuXHRcdFwiZW5kXCI6IDEzLjczLFxuXHRcdFwidm9sdW1uXCI6IDQ5MDcuNixcblx0XHRcIm1vbmV5XCI6IDY4MjkwLjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMjRcIixcblx0XHRcInN0YXJ0XCI6IDEzLjM1LFxuXHRcdFwibWF4XCI6IDEzLjg1LFxuXHRcdFwibWluXCI6IDEyLjksXG5cdFx0XCJlbmRcIjogMTMuNzEsXG5cdFx0XCJ2b2x1bW5cIjogMzY1Ni44LFxuXHRcdFwibW9uZXlcIjogNDkyMTkuOTJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMjNcIixcblx0XHRcInN0YXJ0XCI6IDEzLjI2LFxuXHRcdFwibWF4XCI6IDEzLjY0LFxuXHRcdFwibWluXCI6IDEyLjI2LFxuXHRcdFwiZW5kXCI6IDEzLjIsXG5cdFx0XCJ2b2x1bW5cIjogMzU2Ni4zNSxcblx0XHRcIm1vbmV5XCI6IDQ1OTA0Ljc4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTE5XCIsXG5cdFx0XCJzdGFydFwiOiAxNC40NSxcblx0XHRcIm1heFwiOiAxNC45Nyxcblx0XHRcIm1pblwiOiAxMy42Mixcblx0XHRcImVuZFwiOiAxMy42Mixcblx0XHRcInZvbHVtblwiOiAzNjIxLjQzLFxuXHRcdFwibW9uZXlcIjogNTExMDguMzFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMThcIixcblx0XHRcInN0YXJ0XCI6IDE0LjUsXG5cdFx0XCJtYXhcIjogMTYsXG5cdFx0XCJtaW5cIjogMTQuMyxcblx0XHRcImVuZFwiOiAxNS4xMyxcblx0XHRcInZvbHVtblwiOiA1MDQ2LjU5LFxuXHRcdFwibW9uZXlcIjogNzcyMDguNTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMTdcIixcblx0XHRcInN0YXJ0XCI6IDE0LjQ2LFxuXHRcdFwibWF4XCI6IDE1LFxuXHRcdFwibWluXCI6IDE0LFxuXHRcdFwiZW5kXCI6IDE0LjYsXG5cdFx0XCJ2b2x1bW5cIjogMzQ4My43LFxuXHRcdFwibW9uZXlcIjogNTA0OTUuODRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMTZcIixcblx0XHRcInN0YXJ0XCI6IDE0LFxuXHRcdFwibWF4XCI6IDE1LjEsXG5cdFx0XCJtaW5cIjogMTMuNDIsXG5cdFx0XCJlbmRcIjogMTQuOCxcblx0XHRcInZvbHVtblwiOiA0ODQ0Ljc0LFxuXHRcdFwibW9uZXlcIjogNjg5NTMuNzdcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMTVcIixcblx0XHRcInN0YXJ0XCI6IDE0LjUsXG5cdFx0XCJtYXhcIjogMTUuMDksXG5cdFx0XCJtaW5cIjogMTQuMSxcblx0XHRcImVuZFwiOiAxNC4zOSxcblx0XHRcInZvbHVtblwiOiA0MDA4LjIsXG5cdFx0XCJtb25leVwiOiA1ODcwMy4yNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0xMlwiLFxuXHRcdFwic3RhcnRcIjogMTQuMDcsXG5cdFx0XCJtYXhcIjogMTQuOTcsXG5cdFx0XCJtaW5cIjogMTQsXG5cdFx0XCJlbmRcIjogMTQuMzcsXG5cdFx0XCJ2b2x1bW5cIjogNTM5OS40Nyxcblx0XHRcIm1vbmV5XCI6IDc4NTkyLjQ1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTExXCIsXG5cdFx0XCJzdGFydFwiOiAxMy40LFxuXHRcdFwibWF4XCI6IDE0LjUsXG5cdFx0XCJtaW5cIjogMTMuMTksXG5cdFx0XCJlbmRcIjogMTQuMTMsXG5cdFx0XCJ2b2x1bW5cIjogNTQ3Mi45Myxcblx0XHRcIm1vbmV5XCI6IDc2MDM3LjMxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTEwXCIsXG5cdFx0XCJzdGFydFwiOiAxMi45NSxcblx0XHRcIm1heFwiOiAxMy40Nyxcblx0XHRcIm1pblwiOiAxMi43MSxcblx0XHRcImVuZFwiOiAxMy4zNyxcblx0XHRcInZvbHVtblwiOiA0MDg3Ljc0LFxuXHRcdFwibW9uZXlcIjogNTM5NTEuNjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMDlcIixcblx0XHRcInN0YXJ0XCI6IDEzLjQ2LFxuXHRcdFwibWF4XCI6IDEzLjQ2LFxuXHRcdFwibWluXCI6IDEyLjg1LFxuXHRcdFwiZW5kXCI6IDEzLjEyLFxuXHRcdFwidm9sdW1uXCI6IDQzNzEuNjcsXG5cdFx0XCJtb25leVwiOiA1NzM1Mi4yMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0wOFwiLFxuXHRcdFwic3RhcnRcIjogMTIuODgsXG5cdFx0XCJtYXhcIjogMTMuNjksXG5cdFx0XCJtaW5cIjogMTIuNTksXG5cdFx0XCJlbmRcIjogMTMuNjEsXG5cdFx0XCJ2b2x1bW5cIjogNzQwNi41OCxcblx0XHRcIm1vbmV5XCI6IDk4MjM2LjNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDYtMDVcIixcblx0XHRcInN0YXJ0XCI6IDEyLjM4LFxuXHRcdFwibWF4XCI6IDEyLjk0LFxuXHRcdFwibWluXCI6IDEyLjI0LFxuXHRcdFwiZW5kXCI6IDEyLjc3LFxuXHRcdFwidm9sdW1uXCI6IDUzODYuNjYsXG5cdFx0XCJtb25leVwiOiA2ODIwOC41MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0wNFwiLFxuXHRcdFwic3RhcnRcIjogMTIuNTUsXG5cdFx0XCJtYXhcIjogMTIuODEsXG5cdFx0XCJtaW5cIjogMTEuMjksXG5cdFx0XCJlbmRcIjogMTIuMzEsXG5cdFx0XCJ2b2x1bW5cIjogMzkwNS4yMixcblx0XHRcIm1vbmV5XCI6IDQ3NDE1LjY0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTAzXCIsXG5cdFx0XCJzdGFydFwiOiAxMyxcblx0XHRcIm1heFwiOiAxMy4xNSxcblx0XHRcIm1pblwiOiAxMi4yLFxuXHRcdFwiZW5kXCI6IDEyLjU0LFxuXHRcdFwidm9sdW1uXCI6IDQ1NTkuNjEsXG5cdFx0XCJtb25leVwiOiA1NzkyOC41OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNi0wMlwiLFxuXHRcdFwic3RhcnRcIjogMTEuODQsXG5cdFx0XCJtYXhcIjogMTIuNzcsXG5cdFx0XCJtaW5cIjogMTEuNDgsXG5cdFx0XCJlbmRcIjogMTIuNzMsXG5cdFx0XCJ2b2x1bW5cIjogNDQwNS4xNyxcblx0XHRcIm1vbmV5XCI6IDUyNzQ3LjkyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA2LTAxXCIsXG5cdFx0XCJzdGFydFwiOiAxMS4yOSxcblx0XHRcIm1heFwiOiAxMS44LFxuXHRcdFwibWluXCI6IDExLFxuXHRcdFwiZW5kXCI6IDExLjc0LFxuXHRcdFwidm9sdW1uXCI6IDMzMDguOTQsXG5cdFx0XCJtb25leVwiOiAzODA2MC4yXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTI5XCIsXG5cdFx0XCJzdGFydFwiOiAxMS4zLFxuXHRcdFwibWF4XCI6IDExLjY1LFxuXHRcdFwibWluXCI6IDEwLjMxLFxuXHRcdFwiZW5kXCI6IDExLjExLFxuXHRcdFwidm9sdW1uXCI6IDM0MzQuMTIsXG5cdFx0XCJtb25leVwiOiAzODE0My44OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0yOFwiLFxuXHRcdFwic3RhcnRcIjogMTIuNzksXG5cdFx0XCJtYXhcIjogMTIuOTksXG5cdFx0XCJtaW5cIjogMTEuMzksXG5cdFx0XCJlbmRcIjogMTEuNCxcblx0XHRcInZvbHVtblwiOiA0OTc5LjYzLFxuXHRcdFwibW9uZXlcIjogNjEzOTguMzZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMjdcIixcblx0XHRcInN0YXJ0XCI6IDEyLjg5LFxuXHRcdFwibWF4XCI6IDEzLjE4LFxuXHRcdFwibWluXCI6IDEyLjUsXG5cdFx0XCJlbmRcIjogMTIuNjYsXG5cdFx0XCJ2b2x1bW5cIjogNDg4Ni44Nixcblx0XHRcIm1vbmV5XCI6IDYyMzQ5LjYzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTI2XCIsXG5cdFx0XCJzdGFydFwiOiAxMi40LFxuXHRcdFwibWF4XCI6IDEzLjA4LFxuXHRcdFwibWluXCI6IDExLjk2LFxuXHRcdFwiZW5kXCI6IDEyLjkyLFxuXHRcdFwidm9sdW1uXCI6IDU4MzguNTEsXG5cdFx0XCJtb25leVwiOiA3MzQwOS45NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0yNVwiLFxuXHRcdFwic3RhcnRcIjogMTEuNyxcblx0XHRcIm1heFwiOiAxMi44Nyxcblx0XHRcIm1pblwiOiAxMS42MSxcblx0XHRcImVuZFwiOiAxMi4zLFxuXHRcdFwidm9sdW1uXCI6IDY0MDUuMixcblx0XHRcIm1vbmV5XCI6IDc4OTM3LjMyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTIyXCIsXG5cdFx0XCJzdGFydFwiOiAxMS4zOSxcblx0XHRcIm1heFwiOiAxMS44OSxcblx0XHRcIm1pblwiOiAxMS4xOCxcblx0XHRcImVuZFwiOiAxMS43MSxcblx0XHRcInZvbHVtblwiOiA1NTE5Ljg3LFxuXHRcdFwibW9uZXlcIjogNjM1MTUuOTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMjFcIixcblx0XHRcInN0YXJ0XCI6IDExLjI3LFxuXHRcdFwibWF4XCI6IDExLjM1LFxuXHRcdFwibWluXCI6IDExLjA1LFxuXHRcdFwiZW5kXCI6IDExLjMzLFxuXHRcdFwidm9sdW1uXCI6IDQxMzIuOCxcblx0XHRcIm1vbmV5XCI6IDQ2MzE4LjY1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTIwXCIsXG5cdFx0XCJzdGFydFwiOiAxMS4yMyxcblx0XHRcIm1heFwiOiAxMS40OCxcblx0XHRcIm1pblwiOiAxMC44MSxcblx0XHRcImVuZFwiOiAxMS4zMixcblx0XHRcInZvbHVtblwiOiA2ODU5Ljc2LFxuXHRcdFwibW9uZXlcIjogNzYyNzMuNjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMTlcIixcblx0XHRcInN0YXJ0XCI6IDExLjUsXG5cdFx0XCJtYXhcIjogMTEuNzgsXG5cdFx0XCJtaW5cIjogMTEsXG5cdFx0XCJlbmRcIjogMTEuMzMsXG5cdFx0XCJ2b2x1bW5cIjogNjg2NC4wNSxcblx0XHRcIm1vbmV5XCI6IDc3NzMxLjM0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTE4XCIsXG5cdFx0XCJzdGFydFwiOiAxMS42OCxcblx0XHRcIm1heFwiOiAxMi4yNSxcblx0XHRcIm1pblwiOiAxMS40NSxcblx0XHRcImVuZFwiOiAxMi4xNSxcblx0XHRcInZvbHVtblwiOiA0MjM2LjUsXG5cdFx0XCJtb25leVwiOiA1MDcyOC42XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTE1XCIsXG5cdFx0XCJzdGFydFwiOiAxMS4xOSxcblx0XHRcIm1heFwiOiAxMi4yOCxcblx0XHRcIm1pblwiOiAxMC44LFxuXHRcdFwiZW5kXCI6IDExLjY5LFxuXHRcdFwidm9sdW1uXCI6IDU1MTUuNjYsXG5cdFx0XCJtb25leVwiOiA2NDQ5Ni4zMlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0xNFwiLFxuXHRcdFwic3RhcnRcIjogMTAuMTgsXG5cdFx0XCJtYXhcIjogMTEuMTksXG5cdFx0XCJtaW5cIjogMTAuMTEsXG5cdFx0XCJlbmRcIjogMTEuMTksXG5cdFx0XCJ2b2x1bW5cIjogNDE4MS43Nyxcblx0XHRcIm1vbmV5XCI6IDQ1Mzk5LjE5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTEzXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4yLFxuXHRcdFwibWF4XCI6IDEwLjMyLFxuXHRcdFwibWluXCI6IDEwLFxuXHRcdFwiZW5kXCI6IDEwLjE3LFxuXHRcdFwidm9sdW1uXCI6IDIyNDcuMzksXG5cdFx0XCJtb25leVwiOiAyMjc4MS4yM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0xMlwiLFxuXHRcdFwic3RhcnRcIjogMTAuMyxcblx0XHRcIm1heFwiOiAxMC4zNixcblx0XHRcIm1pblwiOiAxMC4wMSxcblx0XHRcImVuZFwiOiAxMC4yOCxcblx0XHRcInZvbHVtblwiOiAyMDEwLjY1LFxuXHRcdFwibW9uZXlcIjogMjA0ODAuNjNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMTFcIixcblx0XHRcInN0YXJ0XCI6IDkuOTgsXG5cdFx0XCJtYXhcIjogMTAuMzYsXG5cdFx0XCJtaW5cIjogOS44OSxcblx0XHRcImVuZFwiOiAxMC4zLFxuXHRcdFwidm9sdW1uXCI6IDIxMDEuMjYsXG5cdFx0XCJtb25leVwiOiAyMTM2Ny41M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0wOFwiLFxuXHRcdFwic3RhcnRcIjogOS44Mixcblx0XHRcIm1heFwiOiAxMC4wOCxcblx0XHRcIm1pblwiOiA5LjY1LFxuXHRcdFwiZW5kXCI6IDkuOTQsXG5cdFx0XCJ2b2x1bW5cIjogMTYwOS40Myxcblx0XHRcIm1vbmV5XCI6IDE1ODQ1LjU2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTA3XCIsXG5cdFx0XCJzdGFydFwiOiA5LjYyLFxuXHRcdFwibWF4XCI6IDkuODQsXG5cdFx0XCJtaW5cIjogOS40NSxcblx0XHRcImVuZFwiOiA5LjYsXG5cdFx0XCJ2b2x1bW5cIjogMTI3MC44Nixcblx0XHRcIm1vbmV5XCI6IDEyMjQxLjE3XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA1LTA2XCIsXG5cdFx0XCJzdGFydFwiOiAxMC4xOCxcblx0XHRcIm1heFwiOiAxMC4yNSxcblx0XHRcIm1pblwiOiA5LjYsXG5cdFx0XCJlbmRcIjogOS42Nixcblx0XHRcInZvbHVtblwiOiAxNzU0LjcsXG5cdFx0XCJtb25leVwiOiAxNzM0Ny4wNVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNS0wNVwiLFxuXHRcdFwic3RhcnRcIjogMTAuNjgsXG5cdFx0XCJtYXhcIjogMTAuNjgsXG5cdFx0XCJtaW5cIjogMTAsXG5cdFx0XCJlbmRcIjogMTAuMDIsXG5cdFx0XCJ2b2x1bW5cIjogMTkwMy41LFxuXHRcdFwibW9uZXlcIjogMTk1OTguNjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDUtMDRcIixcblx0XHRcInN0YXJ0XCI6IDEwLjYxLFxuXHRcdFwibWF4XCI6IDEwLjg0LFxuXHRcdFwibWluXCI6IDEwLjU1LFxuXHRcdFwiZW5kXCI6IDEwLjcyLFxuXHRcdFwidm9sdW1uXCI6IDE1NTQuOTMsXG5cdFx0XCJtb25leVwiOiAxNjYyNC40M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0zMFwiLFxuXHRcdFwic3RhcnRcIjogMTAuNCxcblx0XHRcIm1heFwiOiAxMS4wNSxcblx0XHRcIm1pblwiOiAxMC40LFxuXHRcdFwiZW5kXCI6IDEwLjYzLFxuXHRcdFwidm9sdW1uXCI6IDIxNjkuMDYsXG5cdFx0XCJtb25leVwiOiAyMzMzMy4wNlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0yOVwiLFxuXHRcdFwic3RhcnRcIjogMTAuMzEsXG5cdFx0XCJtYXhcIjogMTAuNjQsXG5cdFx0XCJtaW5cIjogMTAuMjUsXG5cdFx0XCJlbmRcIjogMTAuNCxcblx0XHRcInZvbHVtblwiOiAxNjE0Ljc3LFxuXHRcdFwibW9uZXlcIjogMTY5MTAuOTZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMjhcIixcblx0XHRcInN0YXJ0XCI6IDExLjA3LFxuXHRcdFwibWF4XCI6IDExLjI1LFxuXHRcdFwibWluXCI6IDEwLjQ2LFxuXHRcdFwiZW5kXCI6IDEwLjQ5LFxuXHRcdFwidm9sdW1uXCI6IDI1NTIuMjEsXG5cdFx0XCJtb25leVwiOiAyNzUxNS44OFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0yN1wiLFxuXHRcdFwic3RhcnRcIjogMTAuNixcblx0XHRcIm1heFwiOiAxMS42Nyxcblx0XHRcIm1pblwiOiAxMC42LFxuXHRcdFwiZW5kXCI6IDExLjA2LFxuXHRcdFwidm9sdW1uXCI6IDQyMTYuNDYsXG5cdFx0XCJtb25leVwiOiA0NzUzNC41M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0yNFwiLFxuXHRcdFwic3RhcnRcIjogMTAuNSxcblx0XHRcIm1heFwiOiAxMC44NSxcblx0XHRcIm1pblwiOiAxMC4yNSxcblx0XHRcImVuZFwiOiAxMC42MSxcblx0XHRcInZvbHVtblwiOiAyMzI2LjQyLFxuXHRcdFwibW9uZXlcIjogMjQ1OTkuNjNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMjNcIixcblx0XHRcInN0YXJ0XCI6IDEwLjI2LFxuXHRcdFwibWF4XCI6IDEwLjkzLFxuXHRcdFwibWluXCI6IDEwLjExLFxuXHRcdFwiZW5kXCI6IDEwLjcsXG5cdFx0XCJ2b2x1bW5cIjogMzc2Ny43Nyxcblx0XHRcIm1vbmV5XCI6IDM5NjQzLjcyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTIyXCIsXG5cdFx0XCJzdGFydFwiOiAxMC4yMixcblx0XHRcIm1heFwiOiAxMC40Mixcblx0XHRcIm1pblwiOiAxMC4wOCxcblx0XHRcImVuZFwiOiAxMC4yMyxcblx0XHRcInZvbHVtblwiOiAyODY4Ljc3LFxuXHRcdFwibW9uZXlcIjogMjkzMTYuNDlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMjFcIixcblx0XHRcInN0YXJ0XCI6IDkuNTYsXG5cdFx0XCJtYXhcIjogMTAuMixcblx0XHRcIm1pblwiOiA5LjQsXG5cdFx0XCJlbmRcIjogMTAuMTksXG5cdFx0XCJ2b2x1bW5cIjogMzQ5My42MSxcblx0XHRcIm1vbmV5XCI6IDM0ODY1LjAxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTIwXCIsXG5cdFx0XCJzdGFydFwiOiA5LjcxLFxuXHRcdFwibWF4XCI6IDkuOTksXG5cdFx0XCJtaW5cIjogOS40Mixcblx0XHRcImVuZFwiOiA5LjYsXG5cdFx0XCJ2b2x1bW5cIjogMjQ2Mi4wOSxcblx0XHRcIm1vbmV5XCI6IDIzNzY5LjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMTdcIixcblx0XHRcInN0YXJ0XCI6IDkuNzksXG5cdFx0XCJtYXhcIjogMTAuMDksXG5cdFx0XCJtaW5cIjogOS4xNixcblx0XHRcImVuZFwiOiA5LjgyLFxuXHRcdFwidm9sdW1uXCI6IDQ0NzMuMzMsXG5cdFx0XCJtb25leVwiOiA0MzM2Ny4yOVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0xNlwiLFxuXHRcdFwic3RhcnRcIjogOS4zNixcblx0XHRcIm1heFwiOiAxMC4wNCxcblx0XHRcIm1pblwiOiA4LjksXG5cdFx0XCJlbmRcIjogOS42Nixcblx0XHRcInZvbHVtblwiOiAyODUxLjc5LFxuXHRcdFwibW9uZXlcIjogMjcyMTAuMDNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMTVcIixcblx0XHRcInN0YXJ0XCI6IDEwLjAzLFxuXHRcdFwibWF4XCI6IDEwLjI4LFxuXHRcdFwibWluXCI6IDkuMzcsXG5cdFx0XCJlbmRcIjogOS40Myxcblx0XHRcInZvbHVtblwiOiAzMTM4LjExLFxuXHRcdFwibW9uZXlcIjogMzA3MTMuMTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMTRcIixcblx0XHRcInN0YXJ0XCI6IDEwLjMzLFxuXHRcdFwibWF4XCI6IDEwLjMzLFxuXHRcdFwibWluXCI6IDkuOTgsXG5cdFx0XCJlbmRcIjogMTAuMDMsXG5cdFx0XCJ2b2x1bW5cIjogMjk1MS41OSxcblx0XHRcIm1vbmV5XCI6IDI5ODAzLjRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMTNcIixcblx0XHRcInN0YXJ0XCI6IDEwLjMsXG5cdFx0XCJtYXhcIjogMTAuNjMsXG5cdFx0XCJtaW5cIjogMTAuMixcblx0XHRcImVuZFwiOiAxMC4zMyxcblx0XHRcInZvbHVtblwiOiAzMTk2Ljk5LFxuXHRcdFwibW9uZXlcIjogMzMzNTEuNzZcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMTBcIixcblx0XHRcInN0YXJ0XCI6IDEwLjI1LFxuXHRcdFwibWF4XCI6IDEwLjUsXG5cdFx0XCJtaW5cIjogMTAsXG5cdFx0XCJlbmRcIjogMTAuMjgsXG5cdFx0XCJ2b2x1bW5cIjogMjU2NS42NCxcblx0XHRcIm1vbmV5XCI6IDI2MzM3LjgxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTA5XCIsXG5cdFx0XCJzdGFydFwiOiA5Ljc4LFxuXHRcdFwibWF4XCI6IDEwLjQ4LFxuXHRcdFwibWluXCI6IDkuNTgsXG5cdFx0XCJlbmRcIjogMTAuMjIsXG5cdFx0XCJ2b2x1bW5cIjogNDMxNi44Nixcblx0XHRcIm1vbmV5XCI6IDQzNjQ3LjMzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTA0LTA4XCIsXG5cdFx0XCJzdGFydFwiOiA5LjQ2LFxuXHRcdFwibWF4XCI6IDkuODYsXG5cdFx0XCJtaW5cIjogOS4wMixcblx0XHRcImVuZFwiOiA5Ljc4LFxuXHRcdFwidm9sdW1uXCI6IDM2ODMuNDMsXG5cdFx0XCJtb25leVwiOiAzNDY2NC42NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0wN1wiLFxuXHRcdFwic3RhcnRcIjogOS41Myxcblx0XHRcIm1heFwiOiA5Ljg3LFxuXHRcdFwibWluXCI6IDkuMzgsXG5cdFx0XCJlbmRcIjogOS40NCxcblx0XHRcInZvbHVtblwiOiAzODc0LjA2LFxuXHRcdFwibW9uZXlcIjogMzcwNzYuNzlcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMDNcIixcblx0XHRcInN0YXJ0XCI6IDguNixcblx0XHRcIm1heFwiOiA5LjQ4LFxuXHRcdFwibWluXCI6IDguNCxcblx0XHRcImVuZFwiOiA5LjQ4LFxuXHRcdFwidm9sdW1uXCI6IDM3NjAuNzgsXG5cdFx0XCJtb25leVwiOiAzNDM2MS4yOFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wNC0wMlwiLFxuXHRcdFwic3RhcnRcIjogOC40NSxcblx0XHRcIm1heFwiOiA4Ljc0LFxuXHRcdFwibWluXCI6IDguMTgsXG5cdFx0XCJlbmRcIjogOC42Mixcblx0XHRcInZvbHVtblwiOiAzMDc2LjgzLFxuXHRcdFwibW9uZXlcIjogMjYxMTIuOThcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDQtMDFcIixcblx0XHRcInN0YXJ0XCI6IDguMTYsXG5cdFx0XCJtYXhcIjogOC42MSxcblx0XHRcIm1pblwiOiA4LjA2LFxuXHRcdFwiZW5kXCI6IDguNDUsXG5cdFx0XCJ2b2x1bW5cIjogMjM5Ni44OSxcblx0XHRcIm1vbmV5XCI6IDIwMDAwLjg4XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTMxXCIsXG5cdFx0XCJzdGFydFwiOiA4LjE4LFxuXHRcdFwibWF4XCI6IDguNSxcblx0XHRcIm1pblwiOiA4LjEzLFxuXHRcdFwiZW5kXCI6IDguMTYsXG5cdFx0XCJ2b2x1bW5cIjogMTkzOCxcblx0XHRcIm1vbmV5XCI6IDE1OTg5LjMzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTMwXCIsXG5cdFx0XCJzdGFydFwiOiA4LjIsXG5cdFx0XCJtYXhcIjogOC41Myxcblx0XHRcIm1pblwiOiA4LjExLFxuXHRcdFwiZW5kXCI6IDguMjYsXG5cdFx0XCJ2b2x1bW5cIjogMjgyMC43OSxcblx0XHRcIm1vbmV5XCI6IDIzNTMyLjk5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTI3XCIsXG5cdFx0XCJzdGFydFwiOiA4LjQsXG5cdFx0XCJtYXhcIjogOC40LFxuXHRcdFwibWluXCI6IDguMDEsXG5cdFx0XCJlbmRcIjogOC4yOCxcblx0XHRcInZvbHVtblwiOiA0NjM0LjU3LFxuXHRcdFwibW9uZXlcIjogMzgwMzIuNjhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMjZcIixcblx0XHRcInN0YXJ0XCI6IDcuMzksXG5cdFx0XCJtYXhcIjogOC4xMixcblx0XHRcIm1pblwiOiA3LjMyLFxuXHRcdFwiZW5kXCI6IDguMTIsXG5cdFx0XCJ2b2x1bW5cIjogNDIwOS4yOSxcblx0XHRcIm1vbmV5XCI6IDMzNjQzLjAzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTI1XCIsXG5cdFx0XCJzdGFydFwiOiA3LjM2LFxuXHRcdFwibWF4XCI6IDcuNixcblx0XHRcIm1pblwiOiA3LjIsXG5cdFx0XCJlbmRcIjogNy4zOCxcblx0XHRcInZvbHVtblwiOiAxODQ1LjQ5LFxuXHRcdFwibW9uZXlcIjogMTM1NTAuMjFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMjRcIixcblx0XHRcInN0YXJ0XCI6IDcuNjIsXG5cdFx0XCJtYXhcIjogNy42Mixcblx0XHRcIm1pblwiOiA3LjIsXG5cdFx0XCJlbmRcIjogNy4zNSxcblx0XHRcInZvbHVtblwiOiAyMjY0LjUsXG5cdFx0XCJtb25leVwiOiAxNjY5OS41XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTIzXCIsXG5cdFx0XCJzdGFydFwiOiA3LjU0LFxuXHRcdFwibWF4XCI6IDcuNjgsXG5cdFx0XCJtaW5cIjogNy40Nixcblx0XHRcImVuZFwiOiA3LjU5LFxuXHRcdFwidm9sdW1uXCI6IDE4MzQuMjgsXG5cdFx0XCJtb25leVwiOiAxMzg1NS40MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0yMFwiLFxuXHRcdFwic3RhcnRcIjogNy4zMyxcblx0XHRcIm1heFwiOiA3LjY1LFxuXHRcdFwibWluXCI6IDcuMjUsXG5cdFx0XCJlbmRcIjogNy41NSxcblx0XHRcInZvbHVtblwiOiAyNDcwLjcxLFxuXHRcdFwibW9uZXlcIjogMTg1ODguMTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMTlcIixcblx0XHRcInN0YXJ0XCI6IDcuMzgsXG5cdFx0XCJtYXhcIjogNy42Nixcblx0XHRcIm1pblwiOiA3LjI2LFxuXHRcdFwiZW5kXCI6IDcuMzcsXG5cdFx0XCJ2b2x1bW5cIjogMjQ1MC41NCxcblx0XHRcIm1vbmV5XCI6IDE4MjQ3LjgyXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTE4XCIsXG5cdFx0XCJzdGFydFwiOiA3LjEyLFxuXHRcdFwibWF4XCI6IDcuNDYsXG5cdFx0XCJtaW5cIjogNy4xLFxuXHRcdFwiZW5kXCI6IDcuMzcsXG5cdFx0XCJ2b2x1bW5cIjogMjg1NC40LFxuXHRcdFwibW9uZXlcIjogMjA4MjguODhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMTdcIixcblx0XHRcInN0YXJ0XCI6IDYuOTUsXG5cdFx0XCJtYXhcIjogNy4xMyxcblx0XHRcIm1pblwiOiA2Ljg3LFxuXHRcdFwiZW5kXCI6IDcuMDksXG5cdFx0XCJ2b2x1bW5cIjogMjQ1Ny4xMyxcblx0XHRcIm1vbmV5XCI6IDE3MTYyLjU1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTE2XCIsXG5cdFx0XCJzdGFydFwiOiA2LjgsXG5cdFx0XCJtYXhcIjogNy4wNixcblx0XHRcIm1pblwiOiA2Ljc5LFxuXHRcdFwiZW5kXCI6IDYuOTUsXG5cdFx0XCJ2b2x1bW5cIjogMTg1OC43OCxcblx0XHRcIm1vbmV5XCI6IDEyOTI0LjIxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTEzXCIsXG5cdFx0XCJzdGFydFwiOiA2Ljg1LFxuXHRcdFwibWF4XCI6IDYuOTMsXG5cdFx0XCJtaW5cIjogNi42OSxcblx0XHRcImVuZFwiOiA2Ljc5LFxuXHRcdFwidm9sdW1uXCI6IDExNjcuMDYsXG5cdFx0XCJtb25leVwiOiA3OTA5LjY0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTEyXCIsXG5cdFx0XCJzdGFydFwiOiA2Ljg0LFxuXHRcdFwibWF4XCI6IDcuMDYsXG5cdFx0XCJtaW5cIjogNi43MSxcblx0XHRcImVuZFwiOiA2Ljg1LFxuXHRcdFwidm9sdW1uXCI6IDIxNTIuODUsXG5cdFx0XCJtb25leVwiOiAxNDgzNS40MVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0xMVwiLFxuXHRcdFwic3RhcnRcIjogNi45OCxcblx0XHRcIm1heFwiOiA3LjA0LFxuXHRcdFwibWluXCI6IDYuNzcsXG5cdFx0XCJlbmRcIjogNi44NCxcblx0XHRcInZvbHVtblwiOiAxNDQ1Ljc3LFxuXHRcdFwibW9uZXlcIjogOTg4Ni41M1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0xMFwiLFxuXHRcdFwic3RhcnRcIjogNi43Myxcblx0XHRcIm1heFwiOiA2Ljk5LFxuXHRcdFwibWluXCI6IDYuNyxcblx0XHRcImVuZFwiOiA2Ljk3LFxuXHRcdFwidm9sdW1uXCI6IDE5OTkuOTMsXG5cdFx0XCJtb25leVwiOiAxMzc3MC4zN1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0wOVwiLFxuXHRcdFwic3RhcnRcIjogNi41OSxcblx0XHRcIm1heFwiOiA2Ljg4LFxuXHRcdFwibWluXCI6IDYuNCxcblx0XHRcImVuZFwiOiA2LjcyLFxuXHRcdFwidm9sdW1uXCI6IDIyNDMuMSxcblx0XHRcIm1vbmV5XCI6IDE0OTUxLjFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDMtMDZcIixcblx0XHRcInN0YXJ0XCI6IDYuNDcsXG5cdFx0XCJtYXhcIjogNi42LFxuXHRcdFwibWluXCI6IDYuMzUsXG5cdFx0XCJlbmRcIjogNi41LFxuXHRcdFwidm9sdW1uXCI6IDEyNzAuNDksXG5cdFx0XCJtb25leVwiOiA4MjI5Ljk2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTA1XCIsXG5cdFx0XCJzdGFydFwiOiA2LjQzLFxuXHRcdFwibWF4XCI6IDYuNTQsXG5cdFx0XCJtaW5cIjogNi4zNCxcblx0XHRcImVuZFwiOiA2LjQ3LFxuXHRcdFwidm9sdW1uXCI6IDEzNjMuMDksXG5cdFx0XCJtb25leVwiOiA4Nzg5LjQ1XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTA0XCIsXG5cdFx0XCJzdGFydFwiOiA2LjM1LFxuXHRcdFwibWF4XCI6IDYuNDUsXG5cdFx0XCJtaW5cIjogNi4zMixcblx0XHRcImVuZFwiOiA2LjQxLFxuXHRcdFwidm9sdW1uXCI6IDEyOTUuNDIsXG5cdFx0XCJtb25leVwiOiA4MjY1LjYzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAzLTAzXCIsXG5cdFx0XCJzdGFydFwiOiA2LjE2LFxuXHRcdFwibWF4XCI6IDYuNDcsXG5cdFx0XCJtaW5cIjogNi4wNyxcblx0XHRcImVuZFwiOiA2LjQyLFxuXHRcdFwidm9sdW1uXCI6IDIyNjYuODIsXG5cdFx0XCJtb25leVwiOiAxNDIxNC43OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMy0wMlwiLFxuXHRcdFwic3RhcnRcIjogNi4yMixcblx0XHRcIm1heFwiOiA2LjI1LFxuXHRcdFwibWluXCI6IDYuMDcsXG5cdFx0XCJlbmRcIjogNi4xNyxcblx0XHRcInZvbHVtblwiOiAxMjc3Ljg4LFxuXHRcdFwibW9uZXlcIjogNzg1MC4zNFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0yN1wiLFxuXHRcdFwic3RhcnRcIjogNi4xNixcblx0XHRcIm1heFwiOiA2LjMzLFxuXHRcdFwibWluXCI6IDYuMTUsXG5cdFx0XCJlbmRcIjogNi4xOSxcblx0XHRcInZvbHVtblwiOiA5MDguOTgsXG5cdFx0XCJtb25leVwiOiA1NjYzLjc0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTI2XCIsXG5cdFx0XCJzdGFydFwiOiA2LjEyLFxuXHRcdFwibWF4XCI6IDYuMTgsXG5cdFx0XCJtaW5cIjogNi4xLFxuXHRcdFwiZW5kXCI6IDYuMTYsXG5cdFx0XCJ2b2x1bW5cIjogNzAzLjcyLFxuXHRcdFwibW9uZXlcIjogNDMyOC41NlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0yNVwiLFxuXHRcdFwic3RhcnRcIjogNi4wOSxcblx0XHRcIm1heFwiOiA2LjE4LFxuXHRcdFwibWluXCI6IDYuMDMsXG5cdFx0XCJlbmRcIjogNi4xMixcblx0XHRcInZvbHVtblwiOiA3NjYuNTYsXG5cdFx0XCJtb25leVwiOiA0Njc4LjczXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTE3XCIsXG5cdFx0XCJzdGFydFwiOiA2LjExLFxuXHRcdFwibWF4XCI6IDYuMTUsXG5cdFx0XCJtaW5cIjogNi4wNixcblx0XHRcImVuZFwiOiA2LjA4LFxuXHRcdFwidm9sdW1uXCI6IDc2Ni43Myxcblx0XHRcIm1vbmV5XCI6IDQ2NzcuMzFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMTZcIixcblx0XHRcInN0YXJ0XCI6IDYuMDMsXG5cdFx0XCJtYXhcIjogNi4xNCxcblx0XHRcIm1pblwiOiA2LjAxLFxuXHRcdFwiZW5kXCI6IDYuMTEsXG5cdFx0XCJ2b2x1bW5cIjogODE0LjcxLFxuXHRcdFwibW9uZXlcIjogNDk0OC4zM1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0xM1wiLFxuXHRcdFwic3RhcnRcIjogNS45OCxcblx0XHRcIm1heFwiOiA2LjM0LFxuXHRcdFwibWluXCI6IDUuOTMsXG5cdFx0XCJlbmRcIjogNi4wOCxcblx0XHRcInZvbHVtblwiOiAxOTkyLjU2LFxuXHRcdFwibW9uZXlcIjogMTIxMzUuMDFcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMTJcIixcblx0XHRcInN0YXJ0XCI6IDUuNzIsXG5cdFx0XCJtYXhcIjogNi4xLFxuXHRcdFwibWluXCI6IDUuNjYsXG5cdFx0XCJlbmRcIjogNi4wMSxcblx0XHRcInZvbHVtblwiOiAyNTcyLjM4LFxuXHRcdFwibW9uZXlcIjogMTUzMTIuNzNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMTFcIixcblx0XHRcInN0YXJ0XCI6IDUuNjksXG5cdFx0XCJtYXhcIjogNS43Nyxcblx0XHRcIm1pblwiOiA1LjY3LFxuXHRcdFwiZW5kXCI6IDUuNzIsXG5cdFx0XCJ2b2x1bW5cIjogNjAyLjY2LFxuXHRcdFwibW9uZXlcIjogMzQ0My45OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0xMFwiLFxuXHRcdFwic3RhcnRcIjogNS40Nixcblx0XHRcIm1heFwiOiA1Ljc1LFxuXHRcdFwibWluXCI6IDUuNDMsXG5cdFx0XCJlbmRcIjogNS43Myxcblx0XHRcInZvbHVtblwiOiAxMjk4LjYzLFxuXHRcdFwibW9uZXlcIjogNzMwNy40MlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0wOVwiLFxuXHRcdFwic3RhcnRcIjogNS41OSxcblx0XHRcIm1heFwiOiA1LjU5LFxuXHRcdFwibWluXCI6IDUuNDcsXG5cdFx0XCJlbmRcIjogNS40OCxcblx0XHRcInZvbHVtblwiOiA0MzUuOTgsXG5cdFx0XCJtb25leVwiOiAyNDEwLjA5XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTA2XCIsXG5cdFx0XCJzdGFydFwiOiA1LjUsXG5cdFx0XCJtYXhcIjogNS42Mixcblx0XHRcIm1pblwiOiA1LjQ4LFxuXHRcdFwiZW5kXCI6IDUuNjEsXG5cdFx0XCJ2b2x1bW5cIjogNjMwLjYsXG5cdFx0XCJtb25leVwiOiAzNDkwLjEzXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTA1XCIsXG5cdFx0XCJzdGFydFwiOiA1LjU4LFxuXHRcdFwibWF4XCI6IDUuNTksXG5cdFx0XCJtaW5cIjogNS40Nyxcblx0XHRcImVuZFwiOiA1LjQ4LFxuXHRcdFwidm9sdW1uXCI6IDYzNi43LFxuXHRcdFwibW9uZXlcIjogMzUyMS44OVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMi0wNFwiLFxuXHRcdFwic3RhcnRcIjogNS42Myxcblx0XHRcIm1heFwiOiA1LjY3LFxuXHRcdFwibWluXCI6IDUuNTIsXG5cdFx0XCJlbmRcIjogNS41Mixcblx0XHRcInZvbHVtblwiOiA2MzUuMzgsXG5cdFx0XCJtb25leVwiOiAzNTQ4Ljk2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAyLTAzXCIsXG5cdFx0XCJzdGFydFwiOiA1LjYzLFxuXHRcdFwibWF4XCI6IDUuNjcsXG5cdFx0XCJtaW5cIjogNS41Nixcblx0XHRcImVuZFwiOiA1LjY1LFxuXHRcdFwidm9sdW1uXCI6IDQzNC4zNCxcblx0XHRcIm1vbmV5XCI6IDI0MzkuMDhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDItMDJcIixcblx0XHRcInN0YXJ0XCI6IDUuNTUsXG5cdFx0XCJtYXhcIjogNS42NSxcblx0XHRcIm1pblwiOiA1LjUxLFxuXHRcdFwiZW5kXCI6IDUuNjEsXG5cdFx0XCJ2b2x1bW5cIjogMzM4LjcxLFxuXHRcdFwibW9uZXlcIjogMTg5Ni4wMVxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0zMFwiLFxuXHRcdFwic3RhcnRcIjogNS43OCxcblx0XHRcIm1heFwiOiA1Ljg1LFxuXHRcdFwibWluXCI6IDUuNixcblx0XHRcImVuZFwiOiA1LjY1LFxuXHRcdFwidm9sdW1uXCI6IDU3NC43NCxcblx0XHRcIm1vbmV5XCI6IDMyNzAuMjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMjlcIixcblx0XHRcInN0YXJ0XCI6IDUuOCxcblx0XHRcIm1heFwiOiA1Ljg3LFxuXHRcdFwibWluXCI6IDUuNzQsXG5cdFx0XCJlbmRcIjogNS43OCxcblx0XHRcInZvbHVtblwiOiA2MDUuNTUsXG5cdFx0XCJtb25leVwiOiAzNTE2LjE0XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTI4XCIsXG5cdFx0XCJzdGFydFwiOiA1Ljg5LFxuXHRcdFwibWF4XCI6IDUuOTUsXG5cdFx0XCJtaW5cIjogNS44Mixcblx0XHRcImVuZFwiOiA1Ljg1LFxuXHRcdFwidm9sdW1uXCI6IDY1My40Nyxcblx0XHRcIm1vbmV5XCI6IDM4NDYuNTJcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMjdcIixcblx0XHRcInN0YXJ0XCI6IDUuNzIsXG5cdFx0XCJtYXhcIjogNS45NCxcblx0XHRcIm1pblwiOiA1LjcsXG5cdFx0XCJlbmRcIjogNS44OSxcblx0XHRcInZvbHVtblwiOiAxMzk4Ljg0LFxuXHRcdFwibW9uZXlcIjogODE5NC4xOFxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0yNlwiLFxuXHRcdFwic3RhcnRcIjogNS42NSxcblx0XHRcIm1heFwiOiA1LjczLFxuXHRcdFwibWluXCI6IDUuNTgsXG5cdFx0XCJlbmRcIjogNS43Mixcblx0XHRcInZvbHVtblwiOiA5MzAuMTksXG5cdFx0XCJtb25leVwiOiA1MjQ3LjAxXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTIzXCIsXG5cdFx0XCJzdGFydFwiOiA1LjY4LFxuXHRcdFwibWF4XCI6IDUuNzIsXG5cdFx0XCJtaW5cIjogNS42LFxuXHRcdFwiZW5kXCI6IDUuNjIsXG5cdFx0XCJ2b2x1bW5cIjogNzU4LjEzLFxuXHRcdFwibW9uZXlcIjogNDI4NC44XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTIyXCIsXG5cdFx0XCJzdGFydFwiOiA1LjQ5LFxuXHRcdFwibWF4XCI6IDUuNzgsXG5cdFx0XCJtaW5cIjogNS40MSxcblx0XHRcImVuZFwiOiA1LjcxLFxuXHRcdFwidm9sdW1uXCI6IDExMzkuOTQsXG5cdFx0XCJtb25leVwiOiA2Mzg2LjExXG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTIxXCIsXG5cdFx0XCJzdGFydFwiOiA1LjM2LFxuXHRcdFwibWF4XCI6IDUuNTgsXG5cdFx0XCJtaW5cIjogNS4zMyxcblx0XHRcImVuZFwiOiA1LjU1LFxuXHRcdFwidm9sdW1uXCI6IDcwMS4xMSxcblx0XHRcIm1vbmV5XCI6IDM4NDAuODRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMjBcIixcblx0XHRcInN0YXJ0XCI6IDUuMjMsXG5cdFx0XCJtYXhcIjogNS4zNSxcblx0XHRcIm1pblwiOiA1LjIyLFxuXHRcdFwiZW5kXCI6IDUuMzMsXG5cdFx0XCJ2b2x1bW5cIjogODE3Ljk3LFxuXHRcdFwibW9uZXlcIjogNDMyNi40N1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0xOVwiLFxuXHRcdFwic3RhcnRcIjogNS42LFxuXHRcdFwibWF4XCI6IDUuNjcsXG5cdFx0XCJtaW5cIjogNS4xMixcblx0XHRcImVuZFwiOiA1LjE2LFxuXHRcdFwidm9sdW1uXCI6IDEyNDguODIsXG5cdFx0XCJtb25leVwiOiA2NjY5Ljk2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTE2XCIsXG5cdFx0XCJzdGFydFwiOiA1LjY3LFxuXHRcdFwibWF4XCI6IDUuNzMsXG5cdFx0XCJtaW5cIjogNS42Nixcblx0XHRcImVuZFwiOiA1LjY5LFxuXHRcdFwidm9sdW1uXCI6IDM5OS41NCxcblx0XHRcIm1vbmV5XCI6IDIyNzQuOTRcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMTVcIixcblx0XHRcInN0YXJ0XCI6IDUuNixcblx0XHRcIm1heFwiOiA1LjY3LFxuXHRcdFwibWluXCI6IDUuNTcsXG5cdFx0XCJlbmRcIjogNS42Nyxcblx0XHRcInZvbHVtblwiOiAzNjEuMjgsXG5cdFx0XCJtb25leVwiOiAyMDMxLjY2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTE0XCIsXG5cdFx0XCJzdGFydFwiOiA1LjYyLFxuXHRcdFwibWF4XCI6IDUuNjksXG5cdFx0XCJtaW5cIjogNS42MSxcblx0XHRcImVuZFwiOiA1LjYyLFxuXHRcdFwidm9sdW1uXCI6IDMyMS4yNyxcblx0XHRcIm1vbmV5XCI6IDE4MTIuOTNcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMTNcIixcblx0XHRcInN0YXJ0XCI6IDUuNjQsXG5cdFx0XCJtYXhcIjogNS43MSxcblx0XHRcIm1pblwiOiA1LjU4LFxuXHRcdFwiZW5kXCI6IDUuNjUsXG5cdFx0XCJ2b2x1bW5cIjogMzc1LjM1LFxuXHRcdFwibW9uZXlcIjogMjEyMC44N1xuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0xMlwiLFxuXHRcdFwic3RhcnRcIjogNS43OSxcblx0XHRcIm1heFwiOiA1Ljc5LFxuXHRcdFwibWluXCI6IDUuNTgsXG5cdFx0XCJlbmRcIjogNS42LFxuXHRcdFwidm9sdW1uXCI6IDUxNi4xOSxcblx0XHRcIm1vbmV5XCI6IDI5MjEuMDVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMDlcIixcblx0XHRcInN0YXJ0XCI6IDUuOTUsXG5cdFx0XCJtYXhcIjogNS45Nyxcblx0XHRcIm1pblwiOiA1LjgsXG5cdFx0XCJlbmRcIjogNS44Mixcblx0XHRcInZvbHVtblwiOiA3MDEuMzksXG5cdFx0XCJtb25leVwiOiA0MTIzLjVcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMDhcIixcblx0XHRcInN0YXJ0XCI6IDUuOTUsXG5cdFx0XCJtYXhcIjogNi4wNixcblx0XHRcIm1pblwiOiA1LjkxLFxuXHRcdFwiZW5kXCI6IDUuOTcsXG5cdFx0XCJ2b2x1bW5cIjogNjc2Ljc1LFxuXHRcdFwibW9uZXlcIjogNDA1Ni4xMlxuXHR9LFxuXHR7XG5cdFx0XCJ0aW1lXCI6IFwiMjAxNS0wMS0wN1wiLFxuXHRcdFwic3RhcnRcIjogNixcblx0XHRcIm1heFwiOiA2LjA0LFxuXHRcdFwibWluXCI6IDUuOTIsXG5cdFx0XCJlbmRcIjogNS45Nixcblx0XHRcInZvbHVtblwiOiA1NDYuOTMsXG5cdFx0XCJtb25leVwiOiAzMjY3LjE2XG5cdH0sXG5cdHtcblx0XHRcInRpbWVcIjogXCIyMDE1LTAxLTA2XCIsXG5cdFx0XCJzdGFydFwiOiA1Ljg5LFxuXHRcdFwibWF4XCI6IDYuMDksXG5cdFx0XCJtaW5cIjogNS44NCxcblx0XHRcImVuZFwiOiA2LjA3LFxuXHRcdFwidm9sdW1uXCI6IDExNjkuMyxcblx0XHRcIm1vbmV5XCI6IDY5ODAuNDhcblx0fSxcblx0e1xuXHRcdFwidGltZVwiOiBcIjIwMTUtMDEtMDVcIixcblx0XHRcInN0YXJ0XCI6IDUuODksXG5cdFx0XCJtYXhcIjogNixcblx0XHRcIm1pblwiOiA1Ljc1LFxuXHRcdFwiZW5kXCI6IDUuOTQsXG5cdFx0XCJ2b2x1bW5cIjogODA2LjEsXG5cdFx0XCJtb25leVwiOiA0NzUxLjE1XG5cdH1cbl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2V4YW1wbGVzL2NhbmRsZVN0aWNrcy5qc29uXG4gKiogbW9kdWxlIGlkID0gMTQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFNsaWRlciA9IHJlcXVpcmUoJy4vc3JjL3NsaWRlcicpO1xudmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbmlmIChHMiAmJiBHMi5QbHVnaW4pIHtcbiAgdmFyIFBsdWdpbiA9IEcyLlBsdWdpbjtcbiAgUGx1Z2luLnNsaWRlciA9IFNsaWRlcjtcbn0gZWxzZSB7XG4gIGNvbnNvbGUuZXJyKCdQbGVhc2UgbG9hZCB0aGUgRzIgc2NyaXB0IGZpcnN0IScpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi8uMS4wLjAtYmV0YUBnMi1wbHVnaW4tc2xpZGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgRzIncyBwbHVnaW4gZm9yIGRhdGF6b29tLlxuICogQGF1dGhvciBzaW1hLnpoYW5nMTk5MEBnbWFpbC5jb21cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG52YXIgVXRpbCA9IEcyLlV0aWw7XG52YXIgQmFzZSA9IEcyLkJhc2U7XG52YXIgQ2FudmFzID0gRzIuQ2FudmFzO1xudmFyIENvbXBvbmVudHMgPSBDYW52YXMuQ29tcG9uZW50cztcbnZhciBPRkZTRVQgPSA1O1xuXG52YXIgU2xpZGVyID0gZnVuY3Rpb24oY2ZnKSB7XG4gIFNsaWRlci5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgY2ZnKTtcbiAgdGhpcy5faW5pdCgpO1xufTtcblxuU2xpZGVyLkFUVFJTID0ge1xuICBjaGFydHM6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgd2lkdGg6IG51bGwsXG4gIHN0YXJ0OiBudWxsLFxuICBlbmQ6IG51bGwsXG4gIGRvbUlkOiBudWxsLFxuICB4RGltOiBudWxsLFxuICB5RGltOiBudWxsLFxuICAvKipcbiAgICog5Lit6Ze05ruR5Z2XXG4gICAqIEB0eXBlIHtBVFRSU31cbiAgICovXG4gIG1pZGRsZUF0dHI6IHtcbiAgICBmaWxsOiAnI0Q1REFFMycsXG4gICAgZmlsbE9wYWNpdHk6IDAuMlxuICB9LFxuICBiYWNrZ3JvdW5kQXR0cjoge1xuICAgIHN0cm9rZTogJyNFMkUyRTInLFxuICAgIGZpbGw6ICcjRjNGM0YzJyxcbiAgICBnbG9iYWxBbHBoYTogMC4yLFxuICAgIGxpbmVXaWR0aDogMVxuICB9LFxuICByYW5nZTogWzAsIDEwMF0sXG4gIGxheW91dDogJ2hvcml6b250YWwnLFxuICB0ZXh0QXR0cjoge1xuICAgIGZpbGw6ICcjMzMzJ1xuICB9LFxuICBoYW5kbGVJY29uOiAnaHR0cHM6Ly90LmFsaXBheW9iamVjdHMuY29tL2ltYWdlcy9ybXN3ZWIvVDFZb2hoWGQ0YlhYWFhYWFhYLnBuZydcbn07XG5cblV0aWwuZXh0ZW5kKFNsaWRlciwgQmFzZSk7XG5cblV0aWwuYXVnbWVudChTbGlkZXIsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0KCdjb250YWluZXInLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmdldCgnZG9tSWQnKSkpO1xuICAgIHRoaXMuc2V0KCdmaXJzdFJlbmRlcicsICd0cnVlJyk7XG4gIH0sXG4gIF9pbml0Q2FudmFzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldCgnd2lkdGgnKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXQoJ2hlaWdodCcpO1xuICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgY29udGFpbmVyRE9NOiB0aGlzLmdldCgnY29udGFpbmVyJyksXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0pO1xuICAgIGNhbnZhcy5zZXQoJ2ZvbnRGYW1pbHknLCBHMi5HbG9iYWwuZm9udEZhbWlseSk7XG4gICAgLy8gc3R5bGUgY2FudmFzXG4gICAgdmFyIG5vZGUgPSBjYW52YXMuZ2V0KCdlbCcpO1xuICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG5vZGUuc3R5bGUudG9wID0gMDtcbiAgICBub2RlLnN0eWxlLmxlZnQgPSAwO1xuICAgIG5vZGUuc3R5bGUuekluZGV4ID0gMztcbiAgICB0aGlzLnNldCgnY2FudmFzJywgY2FudmFzKTtcbiAgfSxcbiAgX2luaXRCYWNrZ3JvdW5kOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGlua0NoYXJ0cyA9IHRoaXMuZ2V0KCdjaGFydHMnKTtcbiAgICB2YXIgbGlua0NoYXJ0ID0gVXRpbC5pc0FycmF5KGxpbmtDaGFydHMpID8gbGlua0NoYXJ0c1swXSA6IGxpbmtDaGFydHM7XG5cbiAgICB2YXIgeERpbSA9IHRoaXMuZ2V0KCd4RGltJyk7XG4gICAgdmFyIHlEaW0gPSB0aGlzLmdldCgneURpbScpO1xuICAgIHZhciB4U2NhbGUgPSBVdGlsLmNsb25lKGxpbmtDaGFydC5nZXRTY2FsZSh4RGltKSk7XG5cbiAgICBpZiAoeURpbSkgeyAvLyDlpoLmnpzlo7DmmI7kuoYgeURpbSwg5YiZ5Yib5bu65ruR5Z2X6IOM5pmv5Zu+XG4gICAgICB2YXIgeERpbUNmZyA9IHt9O1xuICAgICAgaWYgKHhTY2FsZS50eXBlID09PSAndGltZScgfHwgeFNjYWxlLnR5cGUgPT09ICd0aW1lQ2F0Jykge1xuICAgICAgICB4RGltQ2ZnLnR5cGUgPSAndGltZSc7XG4gICAgICAgIHhEaW1DZmcubWFzayA9IHhTY2FsZS5tYXNrO1xuICAgICAgfVxuICAgICAgdmFyIGJnQ2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgICBpZDogdGhpcy5nZXQoJ2RvbUlkJyksXG4gICAgICAgIHdpZHRoOiB0aGlzLmdldCgncGxvdFdpZHRoJyksXG4gICAgICAgIGhlaWdodDogdGhpcy5nZXQoJ2hlaWdodCcpLFxuICAgICAgICBwbG90Q2ZnOiB7XG4gICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYmdDaGFydC5zb3VyY2UobGlua0NoYXJ0LmdldCgnZGF0YScpKTtcbiAgICAgIGJnQ2hhcnQuY29sKHhEaW0sIFV0aWwubWl4KHtcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgICAgbmljZTogZmFsc2VcbiAgICAgIH0sIHhEaW1DZmcpKTtcblxuICAgICAgYmdDaGFydC5heGlzKGZhbHNlKTtcbiAgICAgIGJnQ2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgICBiZ0NoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgICBiZ0NoYXJ0LmFyZWEoKS5wb3NpdGlvbih4RGltICsgJyonICsgeURpbSkuY29sb3IoJyNDRUQxRDQnKTtcbiAgICAgIGJnQ2hhcnQubGluZSgpLnBvc2l0aW9uKHhEaW0gKyAnKicgKyB5RGltKS5jb2xvcignI0NFRDFENCcpO1xuICAgICAgYmdDaGFydC5yZW5kZXIoKTtcbiAgICAgIC8vIOiHquWKqOWvuem9kFxuICAgICAgdmFyIGNhbnZhcyA9IGJnQ2hhcnQuZ2V0KCdjYW52YXMnKTtcbiAgICAgIHZhciBjb250YWluZXIgPSBjYW52YXMuZ2V0KCdlbCcpLnBhcmVudE5vZGU7XG4gICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9IHRoaXMuZ2V0KCdtYXJnaW5MZWZ0JykgKyAncHgnO1xuICAgICAgdGhpcy5zZXQoJ2JnQ2hhcnQnLCBiZ0NoYXJ0KTtcbiAgICB9XG4gICAgdGhpcy5zZXQoJ3hTY2FsZScsIHhTY2FsZSk7XG4gIH0sXG4gIF9pbml0UmFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuZ2V0KCdzdGFydCcpO1xuICAgIHZhciBlbmQgPSB0aGlzLmdldCgnZW5kJyk7XG4gICAgdmFyIHhTY2FsZSA9IHRoaXMuZ2V0KCd4U2NhbGUnKTtcbiAgICB2YXIgbWluID0gc3RhcnQgPyB4U2NhbGUuc2NhbGUoc3RhcnQpIDogMC4zO1xuICAgIHZhciBtYXggPSBlbmQgPyB4U2NhbGUuc2NhbGUoZW5kKSA6IDAuNztcbiAgICB2YXIgcmFuZ2UgPSBbbWluICogMTAwLCBtYXggKiAxMDBdO1xuICAgIHRoaXMuc2V0KCdyYW5nZScsIHJhbmdlKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH0sXG4gIF9nZXRIYW5kbGVWYWx1ZTogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLmdldCgncmFuZ2UnKTtcbiAgICB2YXIgbWluID0gcmFuZ2VbMF0gLyAxMDA7XG4gICAgdmFyIG1heCA9IHJhbmdlWzFdIC8gMTAwO1xuICAgIHZhciB4U2NhbGUgPSB0aGlzLmdldCgneFNjYWxlJyk7XG4gICAgaWYgKHR5cGUgPT09ICdtaW4nKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0KCdzdGFydCcpID8gdGhpcy5nZXQoJ3N0YXJ0JykgOiB4U2NhbGUuaW52ZXJ0KG1pbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5nZXQoJ2VuZCcpID8gdGhpcy5nZXQoJ2VuZCcpIDogeFNjYWxlLmludmVydChtYXgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIF9pbml0SG9yaXpvbnRhbEhhbmRsZTogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmdldCgnY2FudmFzJyk7XG4gICAgdmFyIGhhbmRsZSA9IGNhbnZhcy5hZGRHcm91cCgpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldCgnaGVpZ2h0Jyk7XG4gICAgdmFyIHhTY2FsZSA9IHRoaXMuZ2V0KCd4U2NhbGUnKTtcbiAgICB2YXIgaGFuZGxlVmFsdWUgPSB4U2NhbGUuZ2V0VGV4dCh0aGlzLl9nZXRIYW5kbGVWYWx1ZSh0eXBlKSk7XG5cbiAgICBoYW5kbGUuYWRkU2hhcGUoJ0ltYWdlJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgeDogLWhlaWdodCAvIDIsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBpbWc6IHRoaXMuZ2V0KCdoYW5kbGVJY29uJylcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgdGV4dCA9IGhhbmRsZS5hZGRTaGFwZSgnVGV4dCcsIHtcbiAgICAgIGF0dHJzOiBVdGlsLm1peCh7XG4gICAgICAgIHg6ICh0eXBlID09PSAnbWluJykgPyAtKGhlaWdodCAvIDIgKyBPRkZTRVQpIDogaGVpZ2h0IC8gMiArIE9GRlNFVCxcbiAgICAgICAgeTogaGVpZ2h0IC8gMixcbiAgICAgICAgdGV4dEFsaWduOiAodHlwZSA9PT0gJ21pbicpID8gJ2VuZCcgOiAnc3RhcnQnLFxuICAgICAgICB0ZXh0QmFzZWxpbmU6ICdtaWRkbGUnLFxuICAgICAgICB0ZXh0OiBoYW5kbGVWYWx1ZVxuICAgICAgfSwgdGhpcy5nZXQoJ3RleHRBdHRyJykpXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldCh0eXBlICsgJ1RleHRFbGVtZW50JywgdGV4dCk7XG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfSxcbiAgX2luaXRTbGlkZXJCYWNrZ3JvdW5kOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5nZXQoJ2NhbnZhcycpO1xuICAgIHZhciBiYWNrZ3JvdW5kRWxlbWVudCA9IGNhbnZhcy5hZGRHcm91cCgpO1xuICAgIGJhY2tncm91bmRFbGVtZW50LmluaXRUcmFuc2Zvcm0oKTtcbiAgICBiYWNrZ3JvdW5kRWxlbWVudC50cmFuc2xhdGUoMCwgMCk7XG4gICAgYmFja2dyb3VuZEVsZW1lbnQuYWRkU2hhcGUoJ1JlY3QnLCB7XG4gICAgICBhdHRyczogVXRpbC5taXgoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogdGhpcy5nZXQoJ3Bsb3RXaWR0aCcpLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0KCdoZWlnaHQnKVxuICAgICAgfSwgdGhpcy5nZXQoJ2JhY2tncm91bmRBdHRyJykpXG4gICAgfSk7XG4gICAgcmV0dXJuIGJhY2tncm91bmRFbGVtZW50O1xuICB9LFxuICBfaW5pdFNsaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZ2V0KCdjYW52YXMnKTtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLl9pbml0UmFuZ2UoKTtcbiAgICB2YXIgbWluSGFuZGxlRWxlbWVudCA9IHRoaXMuX2luaXRIb3Jpem9udGFsSGFuZGxlKCdtaW4nKTtcbiAgICB2YXIgbWF4SGFuZGxlRWxlbWVudCA9IHRoaXMuX2luaXRIb3Jpem9udGFsSGFuZGxlKCdtYXgnKTtcbiAgICB2YXIgYmFja2dyb3VuZEVsZW1lbnQgPSB0aGlzLl9pbml0U2xpZGVyQmFja2dyb3VuZCgpO1xuXG4gICAgdmFyIHJhbmdlRWxlbWVudCA9IGNhbnZhcy5hZGRHcm91cChDb21wb25lbnRzLlJhbmdlLCB7XG4gICAgICBtaW5IYW5kbGVFbGVtZW50OiBtaW5IYW5kbGVFbGVtZW50LFxuICAgICAgbWF4SGFuZGxlRWxlbWVudDogbWF4SGFuZGxlRWxlbWVudCxcbiAgICAgIGJhY2tncm91bmRFbGVtZW50OiBiYWNrZ3JvdW5kRWxlbWVudCxcbiAgICAgIG1pZGRsZUF0dHI6IHRoaXMuZ2V0KCdtaWRkbGVBdHRyJyksXG4gICAgICByYW5nZTogcmFuZ2UsXG4gICAgICBsYXlvdXQ6IHRoaXMuZ2V0KCdsYXlvdXQnKSxcbiAgICAgIHdpZHRoOiB0aGlzLmdldCgncGxvdFdpZHRoJyksXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2V0KCdoZWlnaHQnKVxuICAgIH0pO1xuICAgIHJhbmdlRWxlbWVudC50cmFuc2xhdGUodGhpcy5nZXQoJ21hcmdpbkxlZnQnKSwgMCk7XG4gICAgdGhpcy5zZXQoJ3JhbmdlRWxlbWVudCcsIHJhbmdlRWxlbWVudCk7XG4gIH0sXG4gIF9iaW5kRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcmFuZ2VFbGVtZW50ID0gc2VsZi5nZXQoJ3JhbmdlRWxlbWVudCcpO1xuICAgIHZhciB4RGltID0gc2VsZi5nZXQoJ3hEaW0nKTtcbiAgICB2YXIgeFNjYWxlID0gc2VsZi5nZXQoJ3hTY2FsZScpO1xuXG4gICAgcmFuZ2VFbGVtZW50Lm9uKCdyYW5nZUNoYW5nZScsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICB2YXIgcmFuZ2UgPSBldi5yYW5nZTtcbiAgICAgIHZhciBtaW5SYXRpbyA9IHJhbmdlWzBdIC8gMTAwO1xuICAgICAgdmFyIG1heFJhdGlvID0gcmFuZ2VbMV0gLyAxMDA7XG4gICAgICB2YXIgbWluID0geFNjYWxlLmludmVydChtaW5SYXRpbyk7XG4gICAgICB2YXIgbWF4ID0geFNjYWxlLmludmVydChtYXhSYXRpbyk7XG4gICAgICB2YXIgbWluVGV4dCA9IHhTY2FsZS5nZXRUZXh0KG1pbik7XG4gICAgICB2YXIgbWF4VGV4dCA9IHhTY2FsZS5nZXRUZXh0KG1heCk7XG4gICAgICBzZWxmLl91cGRhdGVFbGVtZW50KG1pblRleHQsIG1heFRleHQpO1xuICAgICAgc2VsZi5fdXBkYXRlTGlua0NoYXJ0cyh4RGltLCBbbWluLCBtYXhdKTtcbiAgICB9KTtcbiAgfSxcbiAgX3VwZGF0ZUVsZW1lbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgdmFyIG1pblRleHRFbGVtZW50ID0gdGhpcy5nZXQoJ21pblRleHRFbGVtZW50Jyk7XG4gICAgdmFyIG1heFRleHRFbGVtZW50ID0gdGhpcy5nZXQoJ21heFRleHRFbGVtZW50Jyk7XG4gICAgbWluVGV4dEVsZW1lbnQuYXR0cihVdGlsLm1peCh7fSwgbWluVGV4dEVsZW1lbnQuX19hdHRycywge1xuICAgICAgdGV4dDogbWluXG4gICAgfSkpO1xuICAgIG1heFRleHRFbGVtZW50LmF0dHIoVXRpbC5taXgoe30sIG1heFRleHRFbGVtZW50Ll9fYXR0cnMsIHtcbiAgICAgIHRleHQ6IG1heFxuICAgIH0pKTtcblxuICAgIGlmICh0aGlzLmdldCgnYmdDaGFydCcpKSB7IC8vIOWwhuiDjOaZr+WbvuihqOi9rOaNouS4uuiDjOaZr+WbvlxuICAgICAgdmFyIGJnQ2hhcnQgPSB0aGlzLmdldCgnYmdDaGFydCcpO1xuICAgICAgdmFyIGNhbnZhcyA9IGJnQ2hhcnQuZ2V0KCdjYW52YXMnKS5nZXQoJ2VsJyk7XG4gICAgICB2YXIgaW1nID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXQoJ2NvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy5nZXQoJ3dpZHRoJykgKyAncHgnO1xuICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0KCdoZWlnaHQnKSArICdweCc7XG4gICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nICsgJyknO1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gdGhpcy5nZXQoJ21hcmdpbkxlZnQnKSArICdweCc7XG4gICAgICBiZ0NoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2V0KCdiZ0NoYXJ0JywgbnVsbCk7XG4gICAgfVxuICAgIHRoaXMuc2V0KCdmaXJzdFJlbmRlcicsIGZhbHNlKTtcbiAgfSxcbiAgX3VwZGF0ZUxpbmtDaGFydHM6IGZ1bmN0aW9uKGRpbSwgcmFuZ2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGxpbmtDaGFydHMgPSBVdGlsLmlzQXJyYXkoc2VsZi5nZXQoJ2NoYXJ0cycpKSA/IHNlbGYuZ2V0KCdjaGFydHMnKSA6IFtzZWxmLmdldCgnY2hhcnRzJyldO1xuICAgIGlmIChsaW5rQ2hhcnRzWzBdLmdldCgncGFyZW50JykpIHtcbiAgICAgIFV0aWwuZWFjaChsaW5rQ2hhcnRzLCBmdW5jdGlvbihjaGFydCkge1xuICAgICAgICBjaGFydC5maWx0ZXIoZGltLCByYW5nZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBjaGFydCA9IGxpbmtDaGFydHNbMF0uZ2V0KCdwYXJlbnQnKTtcbiAgICAgIGlmIChzZWxmLmdldCgnZmlyc3RSZW5kZXInKSkge1xuICAgICAgICBjaGFydC5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYXJ0LnJlcGFpbnQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgVXRpbC5lYWNoKGxpbmtDaGFydHMsIGZ1bmN0aW9uKGNoYXJ0KSB7XG4gICAgICAgIGNoYXJ0LmZpbHRlcihkaW0sIHJhbmdlKTtcbiAgICAgICAgaWYgKHNlbGYuZ2V0KCdmaXJzdFJlbmRlcicpKSB7XG4gICAgICAgICAgY2hhcnQucmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhcnQucmVwYWludCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpbmtDaGFydHMgPSB0aGlzLmdldCgnY2hhcnRzJyk7XG4gICAgdmFyIGNoYXJ0ID0gVXRpbC5pc0FycmF5KGxpbmtDaGFydHMpID8gbGlua0NoYXJ0c1swXSA6IGxpbmtDaGFydHM7XG4gICAgdmFyIHBsb3RSYW5nZSA9IGNoYXJ0LmdldCgncGxvdFJhbmdlJyk7XG4gICAgaWYgKGNoYXJ0LmdldCgncGFyZW50JykpIHtcbiAgICAgIHBsb3RSYW5nZSA9IGNoYXJ0LmdldCgncGFyZW50JykuZ2V0KCdwbG90UmFuZ2UnKTtcbiAgICB9XG4gICAgdGhpcy5zZXQoJ3Bsb3RXaWR0aCcsIHBsb3RSYW5nZS50ci54IC0gcGxvdFJhbmdlLnRsLngpO1xuICAgIHRoaXMuc2V0KCdtYXJnaW5MZWZ0JywgcGxvdFJhbmdlLnRsLngpO1xuICAgIGlmICghdGhpcy5nZXQoJ2NhbnZhcycpKSB7XG4gICAgICB0aGlzLl9pbml0Q2FudmFzKCk7XG4gICAgfVxuICAgIHRoaXMuX2luaXRCYWNrZ3JvdW5kKCk7XG4gICAgdGhpcy5faW5pdFNsaWRlcigpO1xuICAgIHRoaXMuX2JpbmRFdmVudCgpO1xuXG4gICAgdmFyIHhEaW0gPSB0aGlzLmdldCgneERpbScpO1xuICAgIHZhciBtaW4gPSB0aGlzLl9nZXRIYW5kbGVWYWx1ZSgnbWluJyk7XG4gICAgdmFyIG1heCA9IHRoaXMuX2dldEhhbmRsZVZhbHVlKCdtYXgnKTtcbiAgICB0aGlzLl91cGRhdGVMaW5rQ2hhcnRzKHhEaW0sIFttaW4sIG1heF0pO1xuICAgIHRoaXMuZ2V0KCdjYW52YXMnKS5kcmF3KCk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYW5nZUVsZW1lbnQgPSB0aGlzLmdldCgncmFuZ2VFbGVtZW50Jyk7XG4gICAgcmFuZ2VFbGVtZW50Lm9mZigncmFuZ2VDaGFuZ2UnKTtcbiAgICB0aGlzLmdldCgnYmdDaGFydCcpICYmIHRoaXMuZ2V0KCdiZ0NoYXJ0JykuZGVzdHJveSgpO1xuICAgIHRoaXMuZ2V0KCdjYW52YXMnKS5kZXN0cm95KCk7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0KCdjb250YWluZXInKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgU2xpZGVyLnN1cGVyY2xhc3MuZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXQoJ2NhbnZhcycpLmNsZWFyKCk7XG4gICAgdGhpcy5nZXQoJ2JnQ2hhcnQnKSAmJiB0aGlzLmdldCgnYmdDaGFydCcpLmRlc3Ryb3koKTtcbiAgfSxcbiAgcmVwYWludDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXQoJ2ZpcnN0UmVuZGVyJywgZmFsc2UpO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi8uMS4wLjAtYmV0YUBnMi1wbHVnaW4tc2xpZGVyL3NyYy9zbGlkZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBN0JBO0FBaUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFuRkE7QUFDQTtBQXFGQTs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdjREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=