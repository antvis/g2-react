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

	var _g2React = __webpack_require__(23);

	var _g2React2 = _interopRequireDefault(_g2React);

	var _g = __webpack_require__(13);

	var _g2 = _interopRequireDefault(_g);

	__webpack_require__(104);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _candleSticks = __webpack_require__(107);

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

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Slider = __webpack_require__(106);
	var G2 = __webpack_require__(13);
	if (G2 && G2.Plugin) {
	  var Plugin = G2.Plugin;
	  Plugin.slider = Slider;
	} else {
	  console.err('Please load the G2 script first!');
	}
	module.exports = Slider;


/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview
	 * @ignore
	 */

	'use strict';

	var G2 = __webpack_require__(13);
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

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview G2's plugin for datazoom.
	 * @author sima.zhang1990@gmail.com
	 */

	'use strict';

	var G2 = __webpack_require__(13);
	var Util = G2.Util;
	var Base = G2.Base;
	var DataFrame = G2.Frame;
	var Canvas = G2.Canvas;
	var Range = __webpack_require__(105);
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


/***/ },

/***/ 107:
/***/ function(module, exports) {

	module.exports = [{"time":"2015-11-19","start":8.18,"max":8.33,"min":7.98,"end":8.32,"volumn":1810,"money":14723.56},{"time":"2015-11-18","start":8.37,"max":8.6,"min":8.03,"end":8.09,"volumn":2790.37,"money":23309.19},{"time":"2015-11-17","start":8.7,"max":8.78,"min":8.32,"end":8.37,"volumn":3729.04,"money":31709.71},{"time":"2015-11-16","start":8.18,"max":8.69,"min":8.05,"end":8.62,"volumn":3095.44,"money":26100.69},{"time":"2015-11-13","start":8.01,"max":8.75,"min":7.97,"end":8.41,"volumn":5815.58,"money":48562.37},{"time":"2015-11-12","start":7.76,"max":8.18,"min":7.61,"end":8.15,"volumn":4742.6,"money":37565.36},{"time":"2015-11-11","start":7.55,"max":7.81,"min":7.49,"end":7.8,"volumn":3133.82,"money":24065.42},{"time":"2015-11-10","start":7.5,"max":7.68,"min":7.44,"end":7.57,"volumn":2670.35,"money":20210.58},{"time":"2015-11-09","start":7.65,"max":7.66,"min":7.3,"end":7.58,"volumn":2841.79,"money":21344.36},{"time":"2015-11-06","start":7.52,"max":7.71,"min":7.48,"end":7.64,"volumn":2725.44,"money":20721.51},{"time":"2015-11-05","start":7.48,"max":7.57,"min":7.29,"end":7.48,"volumn":3520.85,"money":26140.83},{"time":"2015-11-04","start":7.01,"max":7.5,"min":7.01,"end":7.46,"volumn":3591.47,"money":26285.52},{"time":"2015-11-03","start":7.1,"max":7.17,"min":6.82,"end":7,"volumn":2029.21,"money":14202.33},{"time":"2015-11-02","start":7.09,"max":7.44,"min":6.93,"end":7.17,"volumn":3191.31,"money":23205.11},{"time":"2015-10-30","start":6.98,"max":7.27,"min":6.84,"end":7.18,"volumn":3522.61,"money":25083.44},{"time":"2015-10-29","start":6.94,"max":7.2,"min":6.8,"end":7.05,"volumn":2752.27,"money":19328.44},{"time":"2015-10-28","start":7.01,"max":7.14,"min":6.8,"end":6.85,"volumn":2311.11,"money":16137.32},{"time":"2015-10-27","start":6.91,"max":7.31,"min":6.48,"end":7.18,"volumn":3172.9,"money":21827.3},{"time":"2015-10-26","start":6.9,"max":7.08,"min":6.87,"end":6.95,"volumn":2769.31,"money":19337.44},{"time":"2015-10-23","start":6.71,"max":6.85,"min":6.58,"end":6.79,"volumn":2483.18,"money":16714.31},{"time":"2015-10-22","start":6.38,"max":6.67,"min":6.34,"end":6.65,"volumn":2225.88,"money":14465.56},{"time":"2015-10-21","start":7.08,"max":7.1,"min":6.41,"end":6.41,"volumn":2891.47,"money":19585.98},{"time":"2015-10-20","start":6.88,"max":7.19,"min":6.85,"end":7.12,"volumn":2389.62,"money":16813.58},{"time":"2015-10-19","start":7.1,"max":7.14,"min":6.8,"end":6.94,"volumn":2786.61,"money":19474.72},{"time":"2015-10-16","start":6.92,"max":7.38,"min":6.73,"end":7.15,"volumn":3289.27,"money":22963.97},{"time":"2015-10-15","start":6.63,"max":6.9,"min":6.6,"end":6.89,"volumn":2440.37,"money":16575.84},{"time":"2015-10-14","start":6.7,"max":6.99,"min":6.61,"end":6.66,"volumn":2496.38,"money":16858.28},{"time":"2015-10-13","start":6.55,"max":6.81,"min":6.55,"end":6.75,"volumn":2299.83,"money":15338.24},{"time":"2015-10-12","start":6.29,"max":6.89,"min":6.29,"end":6.69,"volumn":3147.58,"money":20738.35},{"time":"2015-10-09","start":6.1,"max":6.44,"min":6.08,"end":6.34,"volumn":2664.04,"money":16811.14},{"time":"2015-10-08","start":6.11,"max":6.28,"min":6,"end":6.12,"volumn":2197.23,"money":13440.92},{"time":"2015-09-30","start":5.93,"max":6.12,"min":5.81,"end":5.83,"volumn":1459.64,"money":8659.52},{"time":"2015-09-29","start":5.96,"max":5.98,"min":5.73,"end":5.83,"volumn":1047.42,"money":6132.72},{"time":"2015-09-28","start":5.86,"max":6.13,"min":5.85,"end":6.07,"volumn":952.45,"money":5717.33},{"time":"2015-09-25","start":6.23,"max":6.28,"min":5.85,"end":5.96,"volumn":1395.27,"money":8465.95},{"time":"2015-09-24","start":6.16,"max":6.32,"min":6.1,"end":6.27,"volumn":1434.38,"money":8920.88},{"time":"2015-09-23","start":6.18,"max":6.32,"min":6.02,"end":6.12,"volumn":1558.54,"money":9631.38},{"time":"2015-09-22","start":6.35,"max":6.4,"min":6.15,"end":6.25,"volumn":1893.83,"money":11901.51},{"time":"2015-09-21","start":5.83,"max":6.32,"min":5.83,"end":6.31,"volumn":1748.35,"money":10807.66},{"time":"2015-09-18","start":6,"max":6.1,"min":5.81,"end":6.02,"volumn":1507.09,"money":8999.44},{"time":"2015-09-17","start":6.1,"max":6.34,"min":5.8,"end":5.83,"volumn":2135.64,"money":13039.56},{"time":"2015-09-16","start":5.58,"max":6.07,"min":5.4,"end":6.07,"volumn":1758.57,"money":10132.25},{"time":"2015-09-15","start":5.81,"max":6.09,"min":5.52,"end":5.52,"volumn":1617.12,"money":9248.69},{"time":"2015-09-14","start":6.98,"max":7.06,"min":6.13,"end":6.13,"volumn":1982.9,"money":12989.01},{"time":"2015-09-11","start":6.87,"max":7.01,"min":6.68,"end":6.81,"volumn":1371.77,"money":9370.49},{"time":"2015-09-10","start":6.7,"max":7.17,"min":6.65,"end":6.86,"volumn":2181.33,"money":15169.4},{"time":"2015-09-09","start":6.76,"max":7.03,"min":6.65,"end":6.93,"volumn":2105.28,"money":14426.76},{"time":"2015-09-08","start":6.26,"max":6.7,"min":6.01,"end":6.64,"volumn":1506.53,"money":9556.54},{"time":"2015-09-07","start":6.19,"max":6.45,"min":6.09,"end":6.2,"volumn":1605.85,"money":10091.26},{"time":"2015-09-02","start":6.2,"max":6.84,"min":5.98,"end":5.99,"volumn":1934.95,"money":12225.68},{"time":"2015-09-01","start":7.22,"max":7.28,"min":6.64,"end":6.64,"volumn":2645.87,"money":18017.91},{"time":"2015-08-31","start":7.83,"max":8,"min":7.35,"end":7.38,"volumn":2984.03,"money":23031.24},{"time":"2015-08-28","start":7.3,"max":7.77,"min":7.1,"end":7.77,"volumn":3092.6,"money":23121.49},{"time":"2015-08-27","start":6.75,"max":7.1,"min":6.43,"end":7.06,"volumn":2903.76,"money":19848.87},{"time":"2015-08-26","start":7.13,"max":7.43,"min":6.42,"end":6.58,"volumn":4212.04,"money":29069.25},{"time":"2015-08-25","start":7.13,"max":7.29,"min":7.13,"end":7.13,"volumn":1838.59,"money":13140.8},{"time":"2015-08-24","start":8.4,"max":8.4,"min":7.92,"end":7.92,"volumn":1766.39,"money":14168.86},{"time":"2015-08-21","start":9,"max":9.61,"min":8.53,"end":8.8,"volumn":3388.27,"money":30952.11},{"time":"2015-08-20","start":10.02,"max":10.24,"min":9.32,"end":9.33,"volumn":3902.17,"money":38391.68},{"time":"2015-08-19","start":9.3,"max":10.59,"min":9.01,"end":10.35,"volumn":5568.96,"money":53928.79},{"time":"2015-08-18","start":11.18,"max":11.5,"min":10,"end":10,"volumn":7332.7,"money":78439.61},{"time":"2015-08-17","start":10.2,"max":11.11,"min":9.9,"end":11.11,"volumn":8121.86,"money":86298.92},{"time":"2015-08-14","start":9.58,"max":10.37,"min":9.37,"end":10.1,"volumn":6001.61,"money":58425.11},{"time":"2015-08-13","start":9.14,"max":9.5,"min":8.91,"end":9.49,"volumn":3854.19,"money":35696.27},{"time":"2015-08-12","start":9.09,"max":9.68,"min":8.98,"end":9.29,"volumn":4238.57,"money":39909.3},{"time":"2015-08-11","start":9.23,"max":9.47,"min":9,"end":9.15,"volumn":4294.85,"money":39674.71},{"time":"2015-08-10","start":8.9,"max":9.38,"min":8.76,"end":9.2,"volumn":4013.11,"money":36287.89},{"time":"2015-08-07","start":8.36,"max":8.8,"min":8.31,"end":8.7,"volumn":3092.66,"money":26336.76},{"time":"2015-08-06","start":8.03,"max":8.42,"min":7.95,"end":8.25,"volumn":2072.21,"money":17060.11},{"time":"2015-08-05","start":8.5,"max":8.69,"min":8.08,"end":8.28,"volumn":3533.94,"money":29796.96},{"time":"2015-08-04","start":7.65,"max":8.39,"min":7.65,"end":8.39,"volumn":3067.22,"money":24773.88},{"time":"2015-08-03","start":8.15,"max":8.4,"min":7.6,"end":7.63,"volumn":3098.33,"money":24382.99},{"time":"2015-07-31","start":8.7,"max":9.01,"min":8.25,"end":8.44,"volumn":3500.61,"money":30289.83},{"time":"2015-07-30","start":8.92,"max":9.65,"min":8.7,"end":8.97,"volumn":6022.8,"money":55624.85},{"time":"2015-07-29","start":8.35,"max":8.91,"min":7.78,"end":8.88,"volumn":4177.18,"money":34893.2},{"time":"2015-07-28","start":8,"max":9,"min":7.92,"end":8.1,"volumn":5114.55,"money":42095.99},{"time":"2015-07-27","start":9.4,"max":9.99,"min":8.8,"end":8.8,"volumn":6001.51,"money":56962.25},{"time":"2015-07-24","start":9.27,"max":10.28,"min":9.11,"end":9.78,"volumn":8446.76,"money":81991.19},{"time":"2015-07-23","start":9,"max":9.78,"min":8.74,"end":9.46,"volumn":8496.1,"money":77551.01},{"time":"2015-07-22","start":8.08,"max":8.97,"min":8.05,"end":8.97,"volumn":8676.75,"money":75751.1},{"time":"2015-07-21","start":7.8,"max":8.33,"min":7.65,"end":8.15,"volumn":4631.15,"money":37450.78},{"time":"2015-07-20","start":7.72,"max":8.27,"min":7.63,"end":8.05,"volumn":6428.2,"money":51127.98},{"time":"2015-07-17","start":6.94,"max":7.73,"min":6.94,"end":7.73,"volumn":4835.44,"money":36666.58},{"time":"2015-07-16","start":6.53,"max":7.48,"min":6.42,"end":7.03,"volumn":3605.77,"money":25031.15},{"time":"2015-07-15","start":7.57,"max":7.83,"min":7.13,"end":7.13,"volumn":2729.59,"money":20041.75},{"time":"2015-07-14","start":8.2,"max":8.7,"min":7.66,"end":7.92,"volumn":7073.81,"money":58131.16},{"time":"2015-07-13","start":7.5,"max":8.1,"min":7.5,"end":8.1,"volumn":4573.92,"money":36083.69},{"time":"2015-07-10","start":6.9,"max":7.36,"min":6.88,"end":7.36,"volumn":4183.37,"money":30411.19},{"time":"2015-07-09","start":5.47,"max":6.69,"min":5.47,"end":6.69,"volumn":6661.78,"money":40398.96},{"time":"2015-07-08","start":6.08,"max":6.08,"min":6.08,"end":6.08,"volumn":158.16,"money":961.61},{"time":"2015-07-07","start":6.77,"max":6.88,"min":6.75,"end":6.75,"volumn":383.45,"money":2590.85},{"time":"2015-07-06","start":9.1,"max":9.1,"min":7.5,"end":7.5,"volumn":2968.98,"money":24002.6},{"time":"2015-07-03","start":8.38,"max":8.87,"min":8.33,"end":8.33,"volumn":2641.73,"money":22223.44},{"time":"2015-07-02","start":10.38,"max":10.38,"min":9.26,"end":9.26,"volumn":2611.06,"money":24620.81},{"time":"2015-07-01","start":11.31,"max":11.61,"min":10.29,"end":10.29,"volumn":3401.45,"money":37212.87},{"time":"2015-06-30","start":10.08,"max":11.52,"min":10.01,"end":11.43,"volumn":4205.99,"money":45381.06},{"time":"2015-06-29","start":12.96,"max":12.96,"min":11.12,"end":11.12,"volumn":3745.68,"money":44252.47},{"time":"2015-06-26","start":13.15,"max":13.41,"min":12.36,"end":12.36,"volumn":3675.91,"money":46759.29},{"time":"2015-06-25","start":13.71,"max":14.46,"min":13.3,"end":13.73,"volumn":4907.6,"money":68290.5},{"time":"2015-06-24","start":13.35,"max":13.85,"min":12.9,"end":13.71,"volumn":3656.8,"money":49219.92},{"time":"2015-06-23","start":13.26,"max":13.64,"min":12.26,"end":13.2,"volumn":3566.35,"money":45904.78},{"time":"2015-06-19","start":14.45,"max":14.97,"min":13.62,"end":13.62,"volumn":3621.43,"money":51108.31},{"time":"2015-06-18","start":14.5,"max":16,"min":14.3,"end":15.13,"volumn":5046.59,"money":77208.53},{"time":"2015-06-17","start":14.46,"max":15,"min":14,"end":14.6,"volumn":3483.7,"money":50495.84},{"time":"2015-06-16","start":14,"max":15.1,"min":13.42,"end":14.8,"volumn":4844.74,"money":68953.77},{"time":"2015-06-15","start":14.5,"max":15.09,"min":14.1,"end":14.39,"volumn":4008.2,"money":58703.24},{"time":"2015-06-12","start":14.07,"max":14.97,"min":14,"end":14.37,"volumn":5399.47,"money":78592.45},{"time":"2015-06-11","start":13.4,"max":14.5,"min":13.19,"end":14.13,"volumn":5472.93,"money":76037.31},{"time":"2015-06-10","start":12.95,"max":13.47,"min":12.71,"end":13.37,"volumn":4087.74,"money":53951.64},{"time":"2015-06-09","start":13.46,"max":13.46,"min":12.85,"end":13.12,"volumn":4371.67,"money":57352.21},{"time":"2015-06-08","start":12.88,"max":13.69,"min":12.59,"end":13.61,"volumn":7406.58,"money":98236.3},{"time":"2015-06-05","start":12.38,"max":12.94,"min":12.24,"end":12.77,"volumn":5386.66,"money":68208.51},{"time":"2015-06-04","start":12.55,"max":12.81,"min":11.29,"end":12.31,"volumn":3905.22,"money":47415.64},{"time":"2015-06-03","start":13,"max":13.15,"min":12.2,"end":12.54,"volumn":4559.61,"money":57928.58},{"time":"2015-06-02","start":11.84,"max":12.77,"min":11.48,"end":12.73,"volumn":4405.17,"money":52747.92},{"time":"2015-06-01","start":11.29,"max":11.8,"min":11,"end":11.74,"volumn":3308.94,"money":38060.2},{"time":"2015-05-29","start":11.3,"max":11.65,"min":10.31,"end":11.11,"volumn":3434.12,"money":38143.88},{"time":"2015-05-28","start":12.79,"max":12.99,"min":11.39,"end":11.4,"volumn":4979.63,"money":61398.36},{"time":"2015-05-27","start":12.89,"max":13.18,"min":12.5,"end":12.66,"volumn":4886.86,"money":62349.63},{"time":"2015-05-26","start":12.4,"max":13.08,"min":11.96,"end":12.92,"volumn":5838.51,"money":73409.96},{"time":"2015-05-25","start":11.7,"max":12.87,"min":11.61,"end":12.3,"volumn":6405.2,"money":78937.32},{"time":"2015-05-22","start":11.39,"max":11.89,"min":11.18,"end":11.71,"volumn":5519.87,"money":63515.93},{"time":"2015-05-21","start":11.27,"max":11.35,"min":11.05,"end":11.33,"volumn":4132.8,"money":46318.65},{"time":"2015-05-20","start":11.23,"max":11.48,"min":10.81,"end":11.32,"volumn":6859.76,"money":76273.65},{"time":"2015-05-19","start":11.5,"max":11.78,"min":11,"end":11.33,"volumn":6864.05,"money":77731.34},{"time":"2015-05-18","start":11.68,"max":12.25,"min":11.45,"end":12.15,"volumn":4236.5,"money":50728.6},{"time":"2015-05-15","start":11.19,"max":12.28,"min":10.8,"end":11.69,"volumn":5515.66,"money":64496.32},{"time":"2015-05-14","start":10.18,"max":11.19,"min":10.11,"end":11.19,"volumn":4181.77,"money":45399.19},{"time":"2015-05-13","start":10.2,"max":10.32,"min":10,"end":10.17,"volumn":2247.39,"money":22781.23},{"time":"2015-05-12","start":10.3,"max":10.36,"min":10.01,"end":10.28,"volumn":2010.65,"money":20480.63},{"time":"2015-05-11","start":9.98,"max":10.36,"min":9.89,"end":10.3,"volumn":2101.26,"money":21367.53},{"time":"2015-05-08","start":9.82,"max":10.08,"min":9.65,"end":9.94,"volumn":1609.43,"money":15845.56},{"time":"2015-05-07","start":9.62,"max":9.84,"min":9.45,"end":9.6,"volumn":1270.86,"money":12241.17},{"time":"2015-05-06","start":10.18,"max":10.25,"min":9.6,"end":9.66,"volumn":1754.7,"money":17347.05},{"time":"2015-05-05","start":10.68,"max":10.68,"min":10,"end":10.02,"volumn":1903.5,"money":19598.64},{"time":"2015-05-04","start":10.61,"max":10.84,"min":10.55,"end":10.72,"volumn":1554.93,"money":16624.43},{"time":"2015-04-30","start":10.4,"max":11.05,"min":10.4,"end":10.63,"volumn":2169.06,"money":23333.06},{"time":"2015-04-29","start":10.31,"max":10.64,"min":10.25,"end":10.4,"volumn":1614.77,"money":16910.96},{"time":"2015-04-28","start":11.07,"max":11.25,"min":10.46,"end":10.49,"volumn":2552.21,"money":27515.88},{"time":"2015-04-27","start":10.6,"max":11.67,"min":10.6,"end":11.06,"volumn":4216.46,"money":47534.53},{"time":"2015-04-24","start":10.5,"max":10.85,"min":10.25,"end":10.61,"volumn":2326.42,"money":24599.63},{"time":"2015-04-23","start":10.26,"max":10.93,"min":10.11,"end":10.7,"volumn":3767.77,"money":39643.72},{"time":"2015-04-22","start":10.22,"max":10.42,"min":10.08,"end":10.23,"volumn":2868.77,"money":29316.49},{"time":"2015-04-21","start":9.56,"max":10.2,"min":9.4,"end":10.19,"volumn":3493.61,"money":34865.01},{"time":"2015-04-20","start":9.71,"max":9.99,"min":9.42,"end":9.6,"volumn":2462.09,"money":23769.5},{"time":"2015-04-17","start":9.79,"max":10.09,"min":9.16,"end":9.82,"volumn":4473.33,"money":43367.29},{"time":"2015-04-16","start":9.36,"max":10.04,"min":8.9,"end":9.66,"volumn":2851.79,"money":27210.03},{"time":"2015-04-15","start":10.03,"max":10.28,"min":9.37,"end":9.43,"volumn":3138.11,"money":30713.13},{"time":"2015-04-14","start":10.33,"max":10.33,"min":9.98,"end":10.03,"volumn":2951.59,"money":29803.4},{"time":"2015-04-13","start":10.3,"max":10.63,"min":10.2,"end":10.33,"volumn":3196.99,"money":33351.76},{"time":"2015-04-10","start":10.25,"max":10.5,"min":10,"end":10.28,"volumn":2565.64,"money":26337.81},{"time":"2015-04-09","start":9.78,"max":10.48,"min":9.58,"end":10.22,"volumn":4316.86,"money":43647.33},{"time":"2015-04-08","start":9.46,"max":9.86,"min":9.02,"end":9.78,"volumn":3683.43,"money":34664.66},{"time":"2015-04-07","start":9.53,"max":9.87,"min":9.38,"end":9.44,"volumn":3874.06,"money":37076.79},{"time":"2015-04-03","start":8.6,"max":9.48,"min":8.4,"end":9.48,"volumn":3760.78,"money":34361.28},{"time":"2015-04-02","start":8.45,"max":8.74,"min":8.18,"end":8.62,"volumn":3076.83,"money":26112.98},{"time":"2015-04-01","start":8.16,"max":8.61,"min":8.06,"end":8.45,"volumn":2396.89,"money":20000.88},{"time":"2015-03-31","start":8.18,"max":8.5,"min":8.13,"end":8.16,"volumn":1938,"money":15989.33},{"time":"2015-03-30","start":8.2,"max":8.53,"min":8.11,"end":8.26,"volumn":2820.79,"money":23532.99},{"time":"2015-03-27","start":8.4,"max":8.4,"min":8.01,"end":8.28,"volumn":4634.57,"money":38032.68},{"time":"2015-03-26","start":7.39,"max":8.12,"min":7.32,"end":8.12,"volumn":4209.29,"money":33643.03},{"time":"2015-03-25","start":7.36,"max":7.6,"min":7.2,"end":7.38,"volumn":1845.49,"money":13550.21},{"time":"2015-03-24","start":7.62,"max":7.62,"min":7.2,"end":7.35,"volumn":2264.5,"money":16699.5},{"time":"2015-03-23","start":7.54,"max":7.68,"min":7.46,"end":7.59,"volumn":1834.28,"money":13855.41},{"time":"2015-03-20","start":7.33,"max":7.65,"min":7.25,"end":7.55,"volumn":2470.71,"money":18588.13},{"time":"2015-03-19","start":7.38,"max":7.66,"min":7.26,"end":7.37,"volumn":2450.54,"money":18247.82},{"time":"2015-03-18","start":7.12,"max":7.46,"min":7.1,"end":7.37,"volumn":2854.4,"money":20828.88},{"time":"2015-03-17","start":6.95,"max":7.13,"min":6.87,"end":7.09,"volumn":2457.13,"money":17162.55},{"time":"2015-03-16","start":6.8,"max":7.06,"min":6.79,"end":6.95,"volumn":1858.78,"money":12924.21},{"time":"2015-03-13","start":6.85,"max":6.93,"min":6.69,"end":6.79,"volumn":1167.06,"money":7909.64},{"time":"2015-03-12","start":6.84,"max":7.06,"min":6.71,"end":6.85,"volumn":2152.85,"money":14835.41},{"time":"2015-03-11","start":6.98,"max":7.04,"min":6.77,"end":6.84,"volumn":1445.77,"money":9886.53},{"time":"2015-03-10","start":6.73,"max":6.99,"min":6.7,"end":6.97,"volumn":1999.93,"money":13770.37},{"time":"2015-03-09","start":6.59,"max":6.88,"min":6.4,"end":6.72,"volumn":2243.1,"money":14951.1},{"time":"2015-03-06","start":6.47,"max":6.6,"min":6.35,"end":6.5,"volumn":1270.49,"money":8229.96},{"time":"2015-03-05","start":6.43,"max":6.54,"min":6.34,"end":6.47,"volumn":1363.09,"money":8789.45},{"time":"2015-03-04","start":6.35,"max":6.45,"min":6.32,"end":6.41,"volumn":1295.42,"money":8265.63},{"time":"2015-03-03","start":6.16,"max":6.47,"min":6.07,"end":6.42,"volumn":2266.82,"money":14214.79},{"time":"2015-03-02","start":6.22,"max":6.25,"min":6.07,"end":6.17,"volumn":1277.88,"money":7850.34},{"time":"2015-02-27","start":6.16,"max":6.33,"min":6.15,"end":6.19,"volumn":908.98,"money":5663.74},{"time":"2015-02-26","start":6.12,"max":6.18,"min":6.1,"end":6.16,"volumn":703.72,"money":4328.56},{"time":"2015-02-25","start":6.09,"max":6.18,"min":6.03,"end":6.12,"volumn":766.56,"money":4678.73},{"time":"2015-02-17","start":6.11,"max":6.15,"min":6.06,"end":6.08,"volumn":766.73,"money":4677.31},{"time":"2015-02-16","start":6.03,"max":6.14,"min":6.01,"end":6.11,"volumn":814.71,"money":4948.33},{"time":"2015-02-13","start":5.98,"max":6.34,"min":5.93,"end":6.08,"volumn":1992.56,"money":12135.01},{"time":"2015-02-12","start":5.72,"max":6.1,"min":5.66,"end":6.01,"volumn":2572.38,"money":15312.73},{"time":"2015-02-11","start":5.69,"max":5.77,"min":5.67,"end":5.72,"volumn":602.66,"money":3443.99},{"time":"2015-02-10","start":5.46,"max":5.75,"min":5.43,"end":5.73,"volumn":1298.63,"money":7307.42},{"time":"2015-02-09","start":5.59,"max":5.59,"min":5.47,"end":5.48,"volumn":435.98,"money":2410.09},{"time":"2015-02-06","start":5.5,"max":5.62,"min":5.48,"end":5.61,"volumn":630.6,"money":3490.13},{"time":"2015-02-05","start":5.58,"max":5.59,"min":5.47,"end":5.48,"volumn":636.7,"money":3521.89},{"time":"2015-02-04","start":5.63,"max":5.67,"min":5.52,"end":5.52,"volumn":635.38,"money":3548.96},{"time":"2015-02-03","start":5.63,"max":5.67,"min":5.56,"end":5.65,"volumn":434.34,"money":2439.08},{"time":"2015-02-02","start":5.55,"max":5.65,"min":5.51,"end":5.61,"volumn":338.71,"money":1896.01},{"time":"2015-01-30","start":5.78,"max":5.85,"min":5.6,"end":5.65,"volumn":574.74,"money":3270.25},{"time":"2015-01-29","start":5.8,"max":5.87,"min":5.74,"end":5.78,"volumn":605.55,"money":3516.14},{"time":"2015-01-28","start":5.89,"max":5.95,"min":5.82,"end":5.85,"volumn":653.47,"money":3846.52},{"time":"2015-01-27","start":5.72,"max":5.94,"min":5.7,"end":5.89,"volumn":1398.84,"money":8194.18},{"time":"2015-01-26","start":5.65,"max":5.73,"min":5.58,"end":5.72,"volumn":930.19,"money":5247.01},{"time":"2015-01-23","start":5.68,"max":5.72,"min":5.6,"end":5.62,"volumn":758.13,"money":4284.8},{"time":"2015-01-22","start":5.49,"max":5.78,"min":5.41,"end":5.71,"volumn":1139.94,"money":6386.11},{"time":"2015-01-21","start":5.36,"max":5.58,"min":5.33,"end":5.55,"volumn":701.11,"money":3840.84},{"time":"2015-01-20","start":5.23,"max":5.35,"min":5.22,"end":5.33,"volumn":817.97,"money":4326.47},{"time":"2015-01-19","start":5.6,"max":5.67,"min":5.12,"end":5.16,"volumn":1248.82,"money":6669.96},{"time":"2015-01-16","start":5.67,"max":5.73,"min":5.66,"end":5.69,"volumn":399.54,"money":2274.94},{"time":"2015-01-15","start":5.6,"max":5.67,"min":5.57,"end":5.67,"volumn":361.28,"money":2031.66},{"time":"2015-01-14","start":5.62,"max":5.69,"min":5.61,"end":5.62,"volumn":321.27,"money":1812.93},{"time":"2015-01-13","start":5.64,"max":5.71,"min":5.58,"end":5.65,"volumn":375.35,"money":2120.87},{"time":"2015-01-12","start":5.79,"max":5.79,"min":5.58,"end":5.6,"volumn":516.19,"money":2921.05},{"time":"2015-01-09","start":5.95,"max":5.97,"min":5.8,"end":5.82,"volumn":701.39,"money":4123.5},{"time":"2015-01-08","start":5.95,"max":6.06,"min":5.91,"end":5.97,"volumn":676.75,"money":4056.12},{"time":"2015-01-07","start":6,"max":6.04,"min":5.92,"end":5.96,"volumn":546.93,"money":3267.16},{"time":"2015-01-06","start":5.89,"max":6.09,"min":5.84,"end":6.07,"volumn":1169.3,"money":6980.48},{"time":"2015-01-05","start":5.89,"max":6,"min":5.75,"end":5.94,"volumn":806.1,"money":4751.15}]

/***/ }

})
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvZzItcGx1Z2luLXNsaWRlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL2V4YW1wbGVzL2cyLXBsdWdpbi1zbGlkZXIubWQiLCJ3ZWJwYWNrOi8vLy4vfi9fZzItcGx1Z2luLXNsaWRlckAxLjIuMUBnMi1wbHVnaW4tc2xpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vX2cyLXBsdWdpbi1zbGlkZXJAMS4yLjFAZzItcGx1Z2luLXNsaWRlci9zcmMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9fZzItcGx1Z2luLXNsaWRlckAxLjIuMUBnMi1wbHVnaW4tc2xpZGVyL3NyYy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvY2FuZGxlU3RpY2tzLmpzb24iXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3JlYXRlRzJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3JlYXRlRzJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCJpbXBvcnQgY3JlYXRlRzIgZnJvbSAnZzItcmVhY3QnO1xuaW1wb3J0IEcyLCB7IFN0YXQsIFBsdWdpbiwgRnJhbWUgfSBmcm9tICdnMic7XG5pbXBvcnQgJ2cyLXBsdWdpbi1zbGlkZXInO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9jYW5kbGVTdGlja3MuanNvbic7XG5cbmNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIC4uLmFyZ3MpIHtcbiAgICBzdXBlcihwcm9wcywgLi4uYXJncyk7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoZGF0YSk7XG4gICAgZnJhbWUuYWRkQ29sKCd0cmVuZCcsIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIChvYmouc3RhcnQgPD0gb2JqLmVuZCkgPyAwIDogMTtcbiAgICB9KTtcblxuICAgIGNvbnN0IENoYXJ0ID0gY3JlYXRlRzIoY2hhcnQgPT4ge1xuICAgICAgY2hhcnQuc291cmNlKGZyYW1lLCB7XG4gICAgICAgICd0cmVuZCc6IHtcbiAgICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgICBhbGlhczogJ+i2i+WKvycsXG4gICAgICAgICAgdmFsdWVzOiBbJ+S4iua2qCcsICfkuIvot4wnXVxuICAgICAgICB9LFxuICAgICAgICAndGltZSc6IHtcbiAgICAgICAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgICAgICAgbmljZTogZmFsc2UsXG4gICAgICAgICAgbWFzazogJ21tLWRkJyxcbiAgICAgICAgICBhbGlhczogJ+aXtumXtCcsXG4gICAgICAgICAgdGlja0NvdW50OiAxMCxcbiAgICAgICAgICByYW5nZTogWzAsIDFdXG4gICAgICAgIH0sXG4gICAgICAgICd2b2x1bW4nOiB7XG4gICAgICAgICAgYWxpYXM6ICfmiJDkuqTph48nXG4gICAgICAgIH0sXG4gICAgICAgICdzdGFydCc6IHtcbiAgICAgICAgICBhbGlhczogJ+W8gOebmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ2VuZCc6IHtcbiAgICAgICAgICBhbGlhczogJ+aUtuebmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ21heCc6IHtcbiAgICAgICAgICBhbGlhczogJ+acgOmrmOS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ21pbic6IHtcbiAgICAgICAgICBhbGlhczogJ+acgOS9juS7tydcbiAgICAgICAgfSxcbiAgICAgICAgJ3N0YXJ0K2VuZCttYXgrbWluJzoge1xuICAgICAgICAgIGFsaWFzOiAn6IKh56Wo5Lu35qC8J1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoYXJ0LmF4aXMoJ3RpbWUnLCB7XG4gICAgICAgIHRpdGxlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIGNoYXJ0LnNjaGVtYSgpXG4gICAgICAgIC5wb3NpdGlvbigndGltZSooc3RhcnQrZW5kK21heCttaW4pJylcbiAgICAgICAgLmNvbG9yKCd0cmVuZCcsIFsnIzJBRjQ4MycsICcjRjgwMDQxJ10pXG4gICAgICAgIC5zaGFwZSgnY2FuZGxlJylcbiAgICAgICAgLnRvb2x0aXAoJ3N0YXJ0KmVuZCptYXgqbWluKnZvbHVtbicpO1xuXG4gICAgICAvLyDliJvlu7rmu5HliqjmnaFcbiAgICAgIHZhciBzbGlkZXIgPSBuZXcgUGx1Z2luLnNsaWRlcih7XG4gICAgICAgIGRvbUlkOiAncmFuZ2UnLFxuICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICBjaGFydHM6IGNoYXJ0LFxuICAgICAgICB4RGltOiAndGltZScsXG4gICAgICAgIHlEaW06ICdtYXgnXG4gICAgICB9KTtcbiAgICAgIHNsaWRlci5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgIHBsb3RDZmc6IHtcbiAgICAgICAgbWFyZ2luOiBbMzAsIDEyMCwgMzBdLFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgZmlsbDogJyMxOTE4MjEnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDaGFydDogQ2hhcnQsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHRoaXMuc3RhdGUuQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB3aWR0aD17dGhpcy5zdGF0ZS53aWR0aH0gaGVpZ2h0PXt0aGlzLnN0YXRlLmhlaWdodH0gcGxvdENmZz17dGhpcy5zdGF0ZS5wbG90Q2ZnfSByZWY9XCJteUNoYXJ0XCIvPlxuICAgICAgICA8ZGl2IGlkPVwicmFuZ2VcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxNeUNvbXBvbmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fcmVhY3QtY29udGVudCcpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBleGFtcGxlcy9nMi1wbHVnaW4tc2xpZGVyLm1kXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBTbGlkZXIgPSByZXF1aXJlKCcuL3NyYy9zbGlkZXInKTtcbnZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG5pZiAoRzIgJiYgRzIuUGx1Z2luKSB7XG4gIHZhciBQbHVnaW4gPSBHMi5QbHVnaW47XG4gIFBsdWdpbi5zbGlkZXIgPSBTbGlkZXI7XG59IGVsc2Uge1xuICBjb25zb2xlLmVycignUGxlYXNlIGxvYWQgdGhlIEcyIHNjcmlwdCBmaXJzdCEnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vX2cyLXBsdWdpbi1zbGlkZXJAMS4yLjFAZzItcGx1Z2luLXNsaWRlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBAaWdub3JlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRzIgPSByZXF1aXJlKCdnMicpO1xudmFyIFV0aWwgPSBHMi5VdGlsO1xudmFyIENhbnZhcyA9IEcyLkNhbnZhcztcbnZhciBHcm91cCA9IENhbnZhcy5Hcm91cDtcblxudmFyIFJhbmdlID0gZnVuY3Rpb24oY2ZnKSB7XG4gIFJhbmdlLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBjZmcpO1xufTtcblxuUmFuZ2UuQ0ZHID0ge1xuICAvKipcbiAgICog6IyD5Zu0XG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIHJhbmdlOiBudWxsLFxuICAvKipcbiAgICog5Lit5ruR5Z2X5bGe5oCnXG4gICAqIEB0eXBlIHtBVFRSU31cbiAgICovXG4gIG1pZGRsZUF0dHI6IG51bGwsXG4gIC8qKlxuICAgKiDog4zmma9cbiAgICogQHR5cGUge0ctRWxlbWVudH1cbiAgICovXG4gIGJhY2tncm91bmRFbGVtZW50OiBudWxsLFxuICAvKipcbiAgICog5LiL5ruR5Z2XXG4gICAqIEB0eXBlIHtHLUVsZW1lbnR9XG4gICAqL1xuICBtaW5IYW5kbGVFbGVtZW50OiBudWxsLFxuICAvKipcbiAgICog5LiK5ruR5Z2XXG4gICAqIEB0eXBlIHtHLUVsZW1lbnR9XG4gICAqL1xuICBtYXhIYW5kbGVFbGVtZW50OiBudWxsLFxuICAvKipcbiAgICog5Lit5Z2XXG4gICAqIEB0eXBlIHtHLUVsZW1lbnR9XG4gICAqL1xuICBtaWRkbGVIYW5kbGVFbGVtZW50OiBudWxsLFxuICAvKipcbiAgICog5b2T5YmN55qE5r+A5rS755qE5YWD57SgXG4gICAqIEB0eXBlIHtHLUVsZW1lbnR9XG4gICAqL1xuICBjdXJyZW50VGFyZ2V0OiBudWxsLFxuICAvKipcbiAgICog5biD5bGA5pa55byP77yaIGhvcml6b250YWzvvIx2ZXJ0aWNhbFxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgbGF5b3V0OiAndmVydGljYWwnLFxuICAvKipcbiAgICog5a69XG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICB3aWR0aDogbnVsbCxcbiAgLyoqXG4gICAqIOmrmFxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgaGVpZ2h0OiBudWxsLFxuICAvKipcbiAgICog5b2T5YmN55qEUGFnZVhcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHBhZ2VYOiBudWxsLFxuICAvKipcbiAgICog5b2T5YmN55qEUGFnZVlcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHBhZ2VZOiBudWxsLFxuICAvKipcbiAgICog5piv5ZCm5Y+C5LiO5Yqo55S7XG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgYW5pbWF0ZTogZmFsc2UsXG4gIC8qKlxuICAgKiDlj6/mk43kvZzmgKfvvIxmYWxzZSDliJnkuI3mu5HliqhcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBvcGVyYWJsZTogdHJ1ZVxufTtcblxuVXRpbC5leHRlbmQoUmFuZ2UsIEdyb3VwKTtcblxuVXRpbC5hdWdtZW50KFJhbmdlLCB7XG4gIF9iZWZvcmVSZW5kZXJVSTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuZ2V0KCdsYXlvdXQnKTtcbiAgICB2YXIgYmFja2dyb3VuZEVsZW1lbnQgPSB0aGlzLmdldCgnYmFja2dyb3VuZEVsZW1lbnQnKTtcbiAgICB2YXIgbWluSGFuZGxlRWxlbWVudCA9IHRoaXMuZ2V0KCdtaW5IYW5kbGVFbGVtZW50Jyk7XG4gICAgdmFyIG1heEhhbmRsZUVsZW1lbnQgPSB0aGlzLmdldCgnbWF4SGFuZGxlRWxlbWVudCcpO1xuICAgIHZhciBtaWRkbGVIYW5kbGVFbGVtZW50ID0gdGhpcy5hZGRTaGFwZSgncmVjdCcsIHtcbiAgICAgIGF0dHJzOiB0aGlzLmdldCgnbWlkZGxlQXR0cicpXG4gICAgfSk7XG4gICAgdmFyIHRyaWdlckN1cnNvciA9IGxheW91dCA9PT0gJ3ZlcnRpY2FsJyA/ICducy1yZXNpemUnIDogJ2V3LXJlc2l6ZSc7XG4gICAgdGhpcy5hZGQoW2JhY2tncm91bmRFbGVtZW50LCBtaW5IYW5kbGVFbGVtZW50LCBtYXhIYW5kbGVFbGVtZW50XSk7XG4gICAgdGhpcy5zZXQoJ21pZGRsZUhhbmRsZUVsZW1lbnQnLCBtaWRkbGVIYW5kbGVFbGVtZW50KTtcbiAgICBiYWNrZ3JvdW5kRWxlbWVudC5zZXQoJ3pJbmRleCcsIDApO1xuICAgIG1pZGRsZUhhbmRsZUVsZW1lbnQuc2V0KCd6SW5kZXgnLCAxKTtcbiAgICBtaW5IYW5kbGVFbGVtZW50LnNldCgnekluZGV4JywgMik7XG4gICAgbWF4SGFuZGxlRWxlbWVudC5zZXQoJ3pJbmRleCcsIDIpO1xuICAgIGlmICh0aGlzLmdldCgnb3BlcmFibGUnKSkge1xuICAgICAgbWlkZGxlSGFuZGxlRWxlbWVudC5zZXQoJ2N1cnNvcicsICdtb3ZlJyk7XG4gICAgICBVdGlsLmVhY2gobWluSGFuZGxlRWxlbWVudC5nZXQoJ2NoaWxkcmVuJyksIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnNldCgnY3Vyc29yJywgdHJpZ2VyQ3Vyc29yKTtcbiAgICAgIH0pO1xuICAgICAgVXRpbC5lYWNoKG1heEhhbmRsZUVsZW1lbnQuZ2V0KCdjaGlsZHJlbicpLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBjaGlsZC5zZXQoJ2N1cnNvcicsIHRyaWdlckN1cnNvcik7XG4gICAgICB9KTtcbiAgICAgIC8vIG1pbkhhbmRsZUVsZW1lbnQuc2V0KCdjdXJzb3InLCB0cmlnZXJDdXJzb3IpO1xuICAgICAgLy8gbWF4SGFuZGxlRWxlbWVudC5zZXQoJ2N1cnNvcicsIHRyaWdlckN1cnNvcik7XG4gICAgfVxuICAgIHRoaXMuc29ydCgpO1xuICB9LFxuICBfcmVuZGVyVUk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXlvdXQgPSB0aGlzLmdldCgnbGF5b3V0Jyk7XG4gICAgaWYgKGxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLl9yZW5kZXJIb3Jpem9udGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlclZlcnRpY2FsKCk7XG4gICAgfVxuICB9LFxuICBfdHJhbnNmb3JtOiBmdW5jdGlvbihsYXlvdXQpIHtcbiAgICB2YXIgcmFuZ2UgPSB0aGlzLmdldCgncmFuZ2UnKTtcbiAgICB2YXIgbWluUmF0aW8gPSByYW5nZVswXSAvIDEwMDtcbiAgICB2YXIgbWF4UmF0aW8gPSByYW5nZVsxXSAvIDEwMDtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldCgnd2lkdGgnKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXQoJ2hlaWdodCcpO1xuICAgIHZhciBtaW5IYW5kbGVFbGVtZW50ID0gdGhpcy5nZXQoJ21pbkhhbmRsZUVsZW1lbnQnKTtcbiAgICB2YXIgbWF4SGFuZGxlRWxlbWVudCA9IHRoaXMuZ2V0KCdtYXhIYW5kbGVFbGVtZW50Jyk7XG4gICAgdmFyIG1pZGRsZUhhbmRsZUVsZW1lbnQgPSB0aGlzLmdldCgnbWlkZGxlSGFuZGxlRWxlbWVudCcpO1xuXG4gICAgbWluSGFuZGxlRWxlbWVudC5pbml0VHJhbnNmb3JtKCk7XG4gICAgbWF4SGFuZGxlRWxlbWVudC5pbml0VHJhbnNmb3JtKCk7XG5cbiAgICBpZiAobGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIG1pZGRsZUhhbmRsZUVsZW1lbnQuYXR0cih7XG4gICAgICAgIHg6IHdpZHRoICogbWluUmF0aW8sXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAobWF4UmF0aW8gLSBtaW5SYXRpbykgKiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0pO1xuICAgICAgbWluSGFuZGxlRWxlbWVudC50cmFuc2xhdGUobWluUmF0aW8gKiB3aWR0aCwgMCk7XG4gICAgICBtYXhIYW5kbGVFbGVtZW50LnRyYW5zbGF0ZShtYXhSYXRpbyAqIHdpZHRoLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlkZGxlSGFuZGxlRWxlbWVudC5hdHRyKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogaGVpZ2h0ICogKDEgLSBtYXhSYXRpbyksXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiAobWF4UmF0aW8gLSBtaW5SYXRpbykgKiBoZWlnaHRcbiAgICAgIH0pO1xuICAgICAgbWluSGFuZGxlRWxlbWVudC50cmFuc2xhdGUod2lkdGggLyAyLCAoMSAtIG1pblJhdGlvKSAqIGhlaWdodCk7XG4gICAgICBtYXhIYW5kbGVFbGVtZW50LnRyYW5zbGF0ZSh3aWR0aCAvIDIsICgxIC0gbWF4UmF0aW8pICogaGVpZ2h0KTtcbiAgICB9XG4gIH0sXG4gIF9yZW5kZXJIb3Jpem9udGFsOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm0oJ2hvcml6b250YWwnKTtcbiAgfSxcbiAgX3JlbmRlclZlcnRpY2FsOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm0oJ3ZlcnRpY2FsJyk7XG4gIH0sXG4gIF9iaW5kVUk6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmdldCgnb3BlcmFibGUnKSkge1xuICAgICAgdGhpcy5vbignbW91c2Vkb3duJywgVXRpbC53cmFwQmVoYXZpb3IodGhpcywgJ19vbk1vdXNlRG93bicpKTtcbiAgICAgIHRoaXMub24oJ21vdXNlbW92ZScsIFV0aWwud3JhcEJlaGF2aW9yKHRoaXMsICdfb25Nb3VzZU1vdmUnKSk7XG4gICAgICB0aGlzLm9uKCdtb3VzZWxlYXZlJywgVXRpbC53cmFwQmVoYXZpb3IodGhpcywgJ19vbk1vdXNlTGVhdmUnKSk7XG4gICAgfVxuICB9LFxuICAvLyDliKTmlq3mmK/lkKbmmK/or6XlhYPntKBcbiAgX2lzRWxlbWVudDogZnVuY3Rpb24odGFyZ2V0LCBuYW1lKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldChuYW1lKTtcbiAgICBpZiAodGFyZ2V0ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuaXNHcm91cCkge1xuICAgICAgdmFyIGVsZW1lbnRDaGlsZHJlbiA9IGVsZW1lbnQuZ2V0KCdjaGlsZHJlbicpO1xuICAgICAgcmV0dXJuIGVsZW1lbnRDaGlsZHJlbi5pbmRleE9mKHRhcmdldCkgPiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBfZ2V0UmFuZ2U6IGZ1bmN0aW9uKGRpZmYsIHJhbmdlKSB7XG4gICAgdmFyIHJzdCA9IGRpZmYgKyByYW5nZTtcbiAgICByc3QgPSByc3QgPiAxMDAgPyAxMDAgOiByc3Q7XG4gICAgcnN0ID0gcnN0IDwgMCA/IDAgOiByc3Q7XG4gICAgcmV0dXJuIHJzdDtcbiAgfSxcbiAgLyoqXG4gICAqIOabtOaWsOeKtuaAgVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGltIHggfHwgeVxuICAgKiBAcGFyYW0ge09iamVjdH0gZXYgRE9NIOWOn+eUn+S6i+S7tlxuICAgKi9cbiAgX3VwZGF0ZVN0YXR1czogZnVuY3Rpb24oZGltLCBldikge1xuICAgIHZhciB0b3RhbExlbmd0aCA9IGRpbSA9PT0gJ3gnID8gdGhpcy5nZXQoJ3dpZHRoJykgOiB0aGlzLmdldCgnaGVpZ2h0Jyk7XG4gICAgdmFyIHVjRGltID0gVXRpbC51Y2ZpcnN0KGRpbSk7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5nZXQoJ3JhbmdlJyk7XG4gICAgdmFyIHBhZ2UgPSB0aGlzLmdldCgncGFnZScgKyB1Y0RpbSk7XG4gICAgdmFyIGN1cnJlbnRUYXJnZXQgPSB0aGlzLmdldCgnY3VycmVudFRhcmdldCcpO1xuICAgIHZhciByYW5nZVN0YXNoID0gdGhpcy5nZXQoJ3JhbmdlU3Rhc2gnKTtcbiAgICB2YXIgbGF5b3V0ID0gdGhpcy5nZXQoJ2xheW91dCcpO1xuICAgIHZhciBzaWduID0gbGF5b3V0ID09PSAndmVydGljYWwnID8gLTEgOiAxO1xuICAgIHZhciBjdXJyZW50UGFnZSA9IGV2WydwYWdlJyArIHVjRGltXTtcbiAgICB2YXIgZGlmZlBhZ2UgPSBjdXJyZW50UGFnZSAtIHBhZ2U7XG4gICAgdmFyIGRpZmZSYW5nZSA9IChkaWZmUGFnZSAvIHRvdGFsTGVuZ3RoKSAqIDEwMCAqIHNpZ247XG4gICAgdmFyIGRpZmZTdGFzaFJhbmdlO1xuXG4gICAgaWYgKHJhbmdlWzFdIDw9IHJhbmdlWzBdKSB7XG4gICAgICBpZiAodGhpcy5faXNFbGVtZW50KGN1cnJlbnRUYXJnZXQsICdtaW5IYW5kbGVFbGVtZW50JykgfHwgdGhpcy5faXNFbGVtZW50KGN1cnJlbnRUYXJnZXQsICdtYXhIYW5kbGVFbGVtZW50JykpIHtcbiAgICAgICAgcmFuZ2VbMF0gPSB0aGlzLl9nZXRSYW5nZShkaWZmUmFuZ2UsIHJhbmdlWzBdKTtcbiAgICAgICAgcmFuZ2VbMV0gPSB0aGlzLl9nZXRSYW5nZShkaWZmUmFuZ2UsIHJhbmdlWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2lzRWxlbWVudChjdXJyZW50VGFyZ2V0LCAnbWluSGFuZGxlRWxlbWVudCcpKSB7XG4gICAgICAgIHJhbmdlWzBdID0gdGhpcy5fZ2V0UmFuZ2UoZGlmZlJhbmdlLCByYW5nZVswXSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faXNFbGVtZW50KGN1cnJlbnRUYXJnZXQsICdtYXhIYW5kbGVFbGVtZW50JykpIHtcbiAgICAgICAgcmFuZ2VbMV0gPSB0aGlzLl9nZXRSYW5nZShkaWZmUmFuZ2UsIHJhbmdlWzFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNFbGVtZW50KGN1cnJlbnRUYXJnZXQsICdtaWRkbGVIYW5kbGVFbGVtZW50JykpIHtcbiAgICAgIGRpZmZTdGFzaFJhbmdlID0gKHJhbmdlU3Rhc2hbMV0gLSByYW5nZVN0YXNoWzBdKTtcbiAgICAgIHJhbmdlWzBdID0gdGhpcy5fZ2V0UmFuZ2UoZGlmZlJhbmdlLCByYW5nZVswXSk7XG4gICAgICByYW5nZVsxXSA9IHJhbmdlWzBdICsgZGlmZlN0YXNoUmFuZ2U7XG4gICAgICBpZiAocmFuZ2VbMV0gPiAxMDApIHtcbiAgICAgICAgcmFuZ2VbMV0gPSAxMDA7XG4gICAgICAgIHJhbmdlWzBdID0gcmFuZ2VbMV0gLSBkaWZmU3Rhc2hSYW5nZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpcmUoJ3JhbmdlQ2hhbmdlJywge1xuICAgICAgcmFuZ2U6IHJhbmdlXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldCgncGFnZScgKyB1Y0RpbSwgY3VycmVudFBhZ2UpO1xuICAgIHRoaXMuX3JlbmRlclVJKCk7XG4gICAgdGhpcy5nZXQoJ2NhbnZhcycpLmRyYXcoKTsgLy8gbmVlZCBkZWxldGVcbiAgICByZXR1cm47XG4gIH0sXG4gIF9vbk1vdXNlTGVhdmU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250YWluZXJET00gPSB0aGlzLmdldCgnY2FudmFzJykuZ2V0KCdjb250YWluZXJET00nKTtcbiAgICBjb250YWluZXJET00uc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuICB9LFxuICBfb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2KSB7XG4gICAgdmFyIGN1cnNvciA9IGV2LmN1cnJlbnRUYXJnZXQuZ2V0KCdjdXJzb3InLCB0cnVlKTtcbiAgICB2YXIgY29udGFpbmVyRE9NID0gdGhpcy5nZXQoJ2NhbnZhcycpLmdldCgnY29udGFpbmVyRE9NJyk7XG4gICAgaWYgKGNvbnRhaW5lckRPTSkge1xuICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICBjb250YWluZXJET00uc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyRE9NLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9vbk1vdXNlRG93bjogZnVuY3Rpb24oZXYpIHtcbiAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gICAgdmFyIG9yaWdpbkV2ZW50ID0gZXYuZXZlbnQ7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5nZXQoJ3JhbmdlJyk7XG4gICAgb3JpZ2luRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb3JpZ2luRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldCgncGFnZVgnLCBvcmlnaW5FdmVudC5wYWdlWCk7XG4gICAgdGhpcy5zZXQoJ3BhZ2VZJywgb3JpZ2luRXZlbnQucGFnZVkpO1xuICAgIHRoaXMuc2V0KCdjdXJyZW50VGFyZ2V0JywgY3VycmVudFRhcmdldCk7XG4gICAgdGhpcy5zZXQoJ3JhbmdlU3Rhc2gnLCBbcmFuZ2VbMF0sIHJhbmdlWzFdXSk7XG4gICAgdGhpcy5fYmluZENhbnZhc0V2ZW50cygpO1xuICB9LFxuICBfYmluZENhbnZhc0V2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vbk1vdXNlTW92ZUxpc3RlbmVyID0gVXRpbC5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgVXRpbC53cmFwQmVoYXZpb3IodGhpcywgJ19vbkNhbnZhc01vdXNlTW92ZScpKTtcbiAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyID0gVXRpbC5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2V1cCcsIFV0aWwud3JhcEJlaGF2aW9yKHRoaXMsICdfb25DYW52YXNNb3VzZVVwJykpO1xuICB9LFxuICBfb25DYW52YXNNb3VzZU1vdmU6IGZ1bmN0aW9uKGV2KSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuZ2V0KCdsYXlvdXQnKTtcbiAgICBpZiAobGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygneCcsIGV2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlU3RhdHVzKCd5JywgZXYpO1xuICAgIH1cbiAgfSxcbiAgX29uQ2FudmFzTW91c2VVcDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcbiAgfSxcbiAgX3JlbW92ZURvY3VtZW50RXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9uTW91c2VNb3ZlTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmFuZ2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9fZzItcGx1Z2luLXNsaWRlckAxLjIuMUBnMi1wbHVnaW4tc2xpZGVyL3NyYy9yYW5nZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEcyJ3MgcGx1Z2luIGZvciBkYXRhem9vbS5cbiAqIEBhdXRob3Igc2ltYS56aGFuZzE5OTBAZ21haWwuY29tXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRzIgPSByZXF1aXJlKCdnMicpO1xudmFyIFV0aWwgPSBHMi5VdGlsO1xudmFyIEJhc2UgPSBHMi5CYXNlO1xudmFyIERhdGFGcmFtZSA9IEcyLkZyYW1lO1xudmFyIENhbnZhcyA9IEcyLkNhbnZhcztcbnZhciBSYW5nZSA9IHJlcXVpcmUoJy4vcmFuZ2UnKTtcbnZhciBPRkZTRVQgPSA1O1xuXG52YXIgU2xpZGVyID0gZnVuY3Rpb24oY2ZnKSB7XG4gIFNsaWRlci5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgY2ZnKTtcbiAgdGhpcy5faW5pdCgpO1xufTtcblxuU2xpZGVyLkFUVFJTID0ge1xuICBjaGFydHM6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgd2lkdGg6IG51bGwsXG4gIHN0YXJ0OiBudWxsLFxuICBlbmQ6IG51bGwsXG4gIGRvbUlkOiBudWxsLFxuICB4RGltOiBudWxsLFxuICB5RGltOiBudWxsLFxuICAvKipcbiAgICog5Lit6Ze05ruR5Z2XXG4gICAqIEB0eXBlIHtBVFRSU31cbiAgICovXG4gIG1pZGRsZUF0dHI6IHtcbiAgICBmaWxsOiAnI0Q1REFFMycsXG4gICAgZmlsbE9wYWNpdHk6IDAuMlxuICB9LFxuICBiYWNrZ3JvdW5kQXR0cjoge1xuICAgIHN0cm9rZTogJyNFMkUyRTInLFxuICAgIGZpbGw6ICcjRjNGM0YzJyxcbiAgICBvcGFjaXR5OiAwLjIsXG4gICAgbGluZVdpZHRoOiAxXG4gIH0sXG4gIHJhbmdlOiBbMCwgMTAwXSxcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gIHRleHRBdHRyOiB7XG4gICAgZmlsbDogJyMzMzMnXG4gIH0sXG4gIGhhbmRsZUljb246ICdodHRwczovL3QuYWxpcGF5b2JqZWN0cy5jb20vaW1hZ2VzL3Jtc3dlYi9UMVlvaGhYZDRiWFhYWFhYWFgucG5nJ1xufTtcblxuVXRpbC5leHRlbmQoU2xpZGVyLCBCYXNlKTtcblxuVXRpbC5hdWdtZW50KFNsaWRlciwge1xuICBfaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXQoJ2NvbnRhaW5lcicsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2V0KCdkb21JZCcpKSk7XG4gICAgdGhpcy5zZXQoJ2ZpcnN0UmVuZGVyJywgJ3RydWUnKTtcbiAgICB2YXIgbGlua0NoYXJ0cyA9IHRoaXMuZ2V0KCdjaGFydHMnKTtcbiAgICB2YXIgY2hhcnQgPSBVdGlsLmlzQXJyYXkobGlua0NoYXJ0cykgPyBsaW5rQ2hhcnRzWzBdIDogbGlua0NoYXJ0cztcbiAgICB2YXIgZm9yY2VGaXQgPSBjaGFydC5nZXQoJ3BhcmVudCcpID8gY2hhcnQuZ2V0KCdwYXJlbnQnKS5nZXQoJ2ZvcmNlRml0JykgOiBjaGFydC5nZXQoJ2ZvcmNlRml0Jyk7XG4gICAgaWYgKGZvcmNlRml0KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgVXRpbC53cmFwQmVoYXZpb3IodGhpcywgJ19pbml0Rm9yY2VGaXRFdmVudCcpKTtcbiAgICB9XG4gIH0sXG4gIF9pbml0Rm9yY2VGaXRFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChVdGlsLndyYXBCZWhhdmlvcih0aGlzLCAnZm9yY2VGaXQnKSwgMjAwKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5nZXQoJ3Jlc2l6ZVRpbWVyJykpO1xuICAgIHRoaXMuc2V0KCdyZXNpemVUaW1lcicsIHRpbWVyKTtcbiAgfSxcbiAgZm9yY2VGaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaW5rQ2hhcnRzID0gdGhpcy5nZXQoJ2NoYXJ0cycpO1xuICAgIHZhciBjaGFydCA9IFV0aWwuaXNBcnJheShsaW5rQ2hhcnRzKSA/IGxpbmtDaGFydHNbMF0gOiBsaW5rQ2hhcnRzO1xuICAgIHZhciB3aWR0aCA9IGNoYXJ0LmdldCgncGFyZW50JykgPyBjaGFydC5nZXQoJ3BhcmVudCcpLmdldCgnd2lkdGgnKSA6IGNoYXJ0LmdldCgnd2lkdGgnKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXQoJ2hlaWdodCcpO1xuICAgIGlmICh3aWR0aCAhPT0gdGhpcy5nZXQoJ3dpZHRoJykpIHtcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmdldCgnY2FudmFzJyk7XG4gICAgICB2YXIgZmlsdGVycyA9IGNoYXJ0LmdldCgnb3B0aW9ucycpLmZpbHRlcnM7XG4gICAgICB2YXIgeERpbSA9IHRoaXMuZ2V0KCd4RGltJyk7XG4gICAgICB0aGlzLnNldCgnc3RhcnQnLCBmaWx0ZXJzW3hEaW1dWzBdKTtcbiAgICAgIHRoaXMuc2V0KCdlbmQnLCBmaWx0ZXJzW3hEaW1dWzFdKTtcbiAgICAgIHRoaXMuc2V0KCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgIGNhbnZhcy5jaGFuZ2VTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdGhpcy5zZXQoJ2NoYW5nZVNpemUnLCB0cnVlKTtcbiAgICAgIHRoaXMucmVwYWludCgpO1xuICAgIH1cbiAgfSxcbiAgX2luaXRDYW52YXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0KCd3aWR0aCcpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldCgnaGVpZ2h0Jyk7XG4gICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXMoe1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBjb250YWluZXJET006IHRoaXMuZ2V0KCdjb250YWluZXInKSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSk7XG4gICAgY2FudmFzLnNldCgnZm9udEZhbWlseScsIEcyLkdsb2JhbC5mb250RmFtaWx5KTtcbiAgICAvLyBzdHlsZSBjYW52YXNcbiAgICB2YXIgbm9kZSA9IGNhbnZhcy5nZXQoJ2VsJyk7XG4gICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgbm9kZS5zdHlsZS50b3AgPSAwO1xuICAgIG5vZGUuc3R5bGUubGVmdCA9IDA7XG4gICAgbm9kZS5zdHlsZS56SW5kZXggPSAzO1xuICAgIHRoaXMuc2V0KCdjYW52YXMnLCBjYW52YXMpO1xuICB9LFxuICBfaW5pdEJhY2tncm91bmQ6IGZ1bmN0aW9uKGxpbmtDaGFydCkge1xuICAgIHZhciBkYXRhID0gbGlua0NoYXJ0LmdldCgnZGF0YScpO1xuICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBEYXRhRnJhbWUpKSB7XG4gICAgICBkYXRhID0gbmV3IERhdGFGcmFtZShkYXRhKTtcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSBsaW5rQ2hhcnQuZ2V0KCdvcHRpb25zJyk7XG5cbiAgICB2YXIgeERpbSA9IHRoaXMuZ2V0KCd4RGltJyk7XG4gICAgdmFyIHlEaW0gPSB0aGlzLmdldCgneURpbScpO1xuICAgIHZhciB4U2NhbGU7XG4gICAgaWYgKHRoaXMuZ2V0KCdjaGFuZ2VTaXplJykpIHtcbiAgICAgIHhTY2FsZSA9IHRoaXMuZ2V0KCd4U2NhbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjYWxlQXNzaXN0ID0gbGlua0NoYXJ0LmdldCgnc2NhbGVBc3Npc3QnKTtcbiAgICAgIHNjYWxlQXNzaXN0LmRlZnMgPSBVdGlsLm1peCh7fSwgdHJ1ZSwgc2NhbGVBc3Npc3QuZGVmcywgb3B0aW9ucy5zY2FsZXMpO1xuICAgICAgeFNjYWxlID0gc2NhbGVBc3Npc3QuY3JlYXRlU2NhbGUoeERpbSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHlEaW0pIHsgLy8g5aaC5p6c5aOw5piO5LqGIHlEaW0sIOWImeWIm+W7uua7keWdl+iDjOaZr+WbvlxuICAgICAgdmFyIGJnQ2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgICBpZDogdGhpcy5nZXQoJ2RvbUlkJyksXG4gICAgICAgIHdpZHRoOiB0aGlzLmdldCgncGxvdFdpZHRoJyksXG4gICAgICAgIGhlaWdodDogdGhpcy5nZXQoJ2hlaWdodCcpLFxuICAgICAgICBwbG90Q2ZnOiB7XG4gICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYmdDaGFydC5zb3VyY2UoZGF0YSk7XG4gICAgICBiZ0NoYXJ0LmNvbCh4RGltLCB7XG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICAgIG5pY2U6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGJnQ2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgICBiZ0NoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgICAgYmdDaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgICAgYmdDaGFydC5hcmVhKCkucG9zaXRpb24oeERpbSArICcqJyArIHlEaW0pLmNvbG9yKCcjQ0VEMUQ0Jyk7XG4gICAgICBiZ0NoYXJ0LmxpbmUoKS5wb3NpdGlvbih4RGltICsgJyonICsgeURpbSkuY29sb3IoJyNDRUQxRDQnKTtcbiAgICAgIGJnQ2hhcnQucmVuZGVyKCk7XG4gICAgICAvLyDoh6rliqjlr7npvZBcbiAgICAgIHZhciBjYW52YXMgPSBiZ0NoYXJ0LmdldCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGFpbmVyID0gY2FudmFzLmdldCgnZWwnKS5wYXJlbnROb2RlO1xuICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbkxlZnQgPSB0aGlzLmdldCgnbWFyZ2luTGVmdCcpICsgJ3B4JztcbiAgICAgIHRoaXMuc2V0KCdiZ0NoYXJ0JywgYmdDaGFydCk7XG4gICAgfVxuICAgIHRoaXMuc2V0KCd4U2NhbGUnLCB4U2NhbGUpO1xuICB9LFxuICBfaW5pdFJhbmdlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmdldCgnc3RhcnQnKTtcbiAgICB2YXIgZW5kID0gdGhpcy5nZXQoJ2VuZCcpO1xuICAgIHZhciB4U2NhbGUgPSB0aGlzLmdldCgneFNjYWxlJyk7XG4gICAgdmFyIG1pbiA9IHN0YXJ0ID8geFNjYWxlLnNjYWxlKHN0YXJ0KSA6IDAuMztcbiAgICB2YXIgbWF4ID0gZW5kID8geFNjYWxlLnNjYWxlKGVuZCkgOiAwLjc7XG4gICAgdmFyIHJhbmdlID0gW21pbiAqIDEwMCwgbWF4ICogMTAwXTtcbiAgICB0aGlzLnNldCgncmFuZ2UnLCByYW5nZSk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9LFxuICBfZ2V0SGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5nZXQoJ3JhbmdlJyk7XG4gICAgdmFyIG1pbiA9IHJhbmdlWzBdIC8gMTAwO1xuICAgIHZhciBtYXggPSByYW5nZVsxXSAvIDEwMDtcbiAgICB2YXIgeFNjYWxlID0gdGhpcy5nZXQoJ3hTY2FsZScpO1xuICAgIGlmICh0eXBlID09PSAnbWluJykge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldCgnc3RhcnQnKSA/IHRoaXMuZ2V0KCdzdGFydCcpIDogeFNjYWxlLmludmVydChtaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0KCdlbmQnKSA/IHRoaXMuZ2V0KCdlbmQnKSA6IHhTY2FsZS5pbnZlcnQobWF4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBfaW5pdEhvcml6b250YWxIYW5kbGU6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5nZXQoJ2NhbnZhcycpO1xuICAgIHZhciBoYW5kbGUgPSBjYW52YXMuYWRkR3JvdXAoKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXQoJ2hlaWdodCcpO1xuICAgIHZhciB4U2NhbGUgPSB0aGlzLmdldCgneFNjYWxlJyk7XG4gICAgdmFyIGhhbmRsZVZhbHVlID0geFNjYWxlLmdldFRleHQodGhpcy5fZ2V0SGFuZGxlVmFsdWUodHlwZSkpO1xuXG4gICAgaGFuZGxlLmFkZFNoYXBlKCdJbWFnZScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHg6IC1oZWlnaHQgLyAyLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogaGVpZ2h0LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgaW1nOiB0aGlzLmdldCgnaGFuZGxlSWNvbicpXG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHRleHQgPSBoYW5kbGUuYWRkU2hhcGUoJ1RleHQnLCB7XG4gICAgICBhdHRyczogVXRpbC5taXgoe1xuICAgICAgICB4OiAodHlwZSA9PT0gJ21pbicpID8gLShoZWlnaHQgLyAyICsgT0ZGU0VUKSA6IGhlaWdodCAvIDIgKyBPRkZTRVQsXG4gICAgICAgIHk6IGhlaWdodCAvIDIsXG4gICAgICAgIHRleHRBbGlnbjogKHR5cGUgPT09ICdtaW4nKSA/ICdlbmQnIDogJ3N0YXJ0JyxcbiAgICAgICAgdGV4dEJhc2VsaW5lOiAnbWlkZGxlJyxcbiAgICAgICAgdGV4dDogaGFuZGxlVmFsdWVcbiAgICAgIH0sIHRoaXMuZ2V0KCd0ZXh0QXR0cicpKVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXQodHlwZSArICdUZXh0RWxlbWVudCcsIHRleHQpO1xuICAgIHJldHVybiBoYW5kbGU7XG4gIH0sXG4gIF9pbml0U2xpZGVyQmFja2dyb3VuZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZ2V0KCdjYW52YXMnKTtcbiAgICB2YXIgYmFja2dyb3VuZEVsZW1lbnQgPSBjYW52YXMuYWRkR3JvdXAoKTtcbiAgICBiYWNrZ3JvdW5kRWxlbWVudC5pbml0VHJhbnNmb3JtKCk7XG4gICAgYmFja2dyb3VuZEVsZW1lbnQudHJhbnNsYXRlKDAsIDApO1xuICAgIGJhY2tncm91bmRFbGVtZW50LmFkZFNoYXBlKCdSZWN0Jywge1xuICAgICAgYXR0cnM6IFV0aWwubWl4KHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IHRoaXMuZ2V0KCdwbG90V2lkdGgnKSxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmdldCgnaGVpZ2h0JylcbiAgICAgIH0sIHRoaXMuZ2V0KCdiYWNrZ3JvdW5kQXR0cicpKVxuICAgIH0pO1xuICAgIHJldHVybiBiYWNrZ3JvdW5kRWxlbWVudDtcbiAgfSxcbiAgX2luaXRTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmdldCgnY2FudmFzJyk7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5faW5pdFJhbmdlKCk7XG4gICAgdmFyIG1pbkhhbmRsZUVsZW1lbnQgPSB0aGlzLl9pbml0SG9yaXpvbnRhbEhhbmRsZSgnbWluJyk7XG4gICAgdmFyIG1heEhhbmRsZUVsZW1lbnQgPSB0aGlzLl9pbml0SG9yaXpvbnRhbEhhbmRsZSgnbWF4Jyk7XG4gICAgdmFyIGJhY2tncm91bmRFbGVtZW50ID0gdGhpcy5faW5pdFNsaWRlckJhY2tncm91bmQoKTtcblxuICAgIHZhciByYW5nZUVsZW1lbnQgPSBjYW52YXMuYWRkR3JvdXAoUmFuZ2UsIHtcbiAgICAgIG1pbkhhbmRsZUVsZW1lbnQ6IG1pbkhhbmRsZUVsZW1lbnQsXG4gICAgICBtYXhIYW5kbGVFbGVtZW50OiBtYXhIYW5kbGVFbGVtZW50LFxuICAgICAgYmFja2dyb3VuZEVsZW1lbnQ6IGJhY2tncm91bmRFbGVtZW50LFxuICAgICAgbWlkZGxlQXR0cjogdGhpcy5nZXQoJ21pZGRsZUF0dHInKSxcbiAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgIGxheW91dDogdGhpcy5nZXQoJ2xheW91dCcpLFxuICAgICAgd2lkdGg6IHRoaXMuZ2V0KCdwbG90V2lkdGgnKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXQoJ2hlaWdodCcpXG4gICAgfSk7XG4gICAgcmFuZ2VFbGVtZW50LnRyYW5zbGF0ZSh0aGlzLmdldCgnbWFyZ2luTGVmdCcpLCAwKTtcbiAgICB0aGlzLnNldCgncmFuZ2VFbGVtZW50JywgcmFuZ2VFbGVtZW50KTtcbiAgfSxcbiAgX2JpbmRFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByYW5nZUVsZW1lbnQgPSBzZWxmLmdldCgncmFuZ2VFbGVtZW50Jyk7XG4gICAgdmFyIHhEaW0gPSBzZWxmLmdldCgneERpbScpO1xuICAgIHZhciB4U2NhbGUgPSBzZWxmLmdldCgneFNjYWxlJyk7XG5cbiAgICByYW5nZUVsZW1lbnQub24oJ3JhbmdlQ2hhbmdlJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgIHZhciByYW5nZSA9IGV2LnJhbmdlO1xuICAgICAgdmFyIG1pblJhdGlvID0gcmFuZ2VbMF0gLyAxMDA7XG4gICAgICB2YXIgbWF4UmF0aW8gPSByYW5nZVsxXSAvIDEwMDtcbiAgICAgIHZhciBtaW4gPSB4U2NhbGUuaW52ZXJ0KG1pblJhdGlvKTtcbiAgICAgIHZhciBtYXggPSB4U2NhbGUuaW52ZXJ0KG1heFJhdGlvKTtcbiAgICAgIHZhciBtaW5UZXh0ID0geFNjYWxlLmdldFRleHQobWluKTtcbiAgICAgIHZhciBtYXhUZXh0ID0geFNjYWxlLmdldFRleHQobWF4KTtcbiAgICAgIHNlbGYuX3VwZGF0ZUVsZW1lbnQobWluVGV4dCwgbWF4VGV4dCk7XG4gICAgICBzZWxmLl91cGRhdGVMaW5rQ2hhcnRzKHhEaW0sIFttaW4sIG1heF0pO1xuICAgIH0pO1xuICB9LFxuICBfdXBkYXRlRWxlbWVudDogZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICB2YXIgbWluVGV4dEVsZW1lbnQgPSB0aGlzLmdldCgnbWluVGV4dEVsZW1lbnQnKTtcbiAgICB2YXIgbWF4VGV4dEVsZW1lbnQgPSB0aGlzLmdldCgnbWF4VGV4dEVsZW1lbnQnKTtcbiAgICBtaW5UZXh0RWxlbWVudC5hdHRyKFV0aWwubWl4KHt9LCBtaW5UZXh0RWxlbWVudC5fX2F0dHJzLCB7XG4gICAgICB0ZXh0OiBtaW5cbiAgICB9KSk7XG4gICAgbWF4VGV4dEVsZW1lbnQuYXR0cihVdGlsLm1peCh7fSwgbWF4VGV4dEVsZW1lbnQuX19hdHRycywge1xuICAgICAgdGV4dDogbWF4XG4gICAgfSkpO1xuXG4gICAgaWYgKHRoaXMuZ2V0KCdiZ0NoYXJ0JykpIHsgLy8g5bCG6IOM5pmv5Zu+6KGo6L2s5o2i5Li66IOM5pmv5Zu+XG4gICAgICB2YXIgYmdDaGFydCA9IHRoaXMuZ2V0KCdiZ0NoYXJ0Jyk7XG4gICAgICB2YXIgY2FudmFzID0gYmdDaGFydC5nZXQoJ2NhbnZhcycpLmdldCgnZWwnKTtcbiAgICAgIHZhciBpbWcgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldCgnY29udGFpbmVyJyk7XG4gICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLmdldCgnd2lkdGgnKSArICdweCc7XG4gICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXQoJ2hlaWdodCcpICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWcgKyAnKSc7XG4gICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSB0aGlzLmdldCgnbWFyZ2luTGVmdCcpICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgICAgIGJnQ2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5zZXQoJ2JnQ2hhcnQnLCBudWxsKTtcbiAgICB9XG4gICAgdGhpcy5zZXQoJ2ZpcnN0UmVuZGVyJywgZmFsc2UpO1xuICB9LFxuICBfdXBkYXRlTGlua0NoYXJ0czogZnVuY3Rpb24oZGltLCByYW5nZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbGlua0NoYXJ0cyA9IFV0aWwuaXNBcnJheShzZWxmLmdldCgnY2hhcnRzJykpID8gc2VsZi5nZXQoJ2NoYXJ0cycpIDogW3NlbGYuZ2V0KCdjaGFydHMnKV07XG4gICAgaWYgKGxpbmtDaGFydHNbMF0uZ2V0KCdwYXJlbnQnKSkge1xuICAgICAgVXRpbC5lYWNoKGxpbmtDaGFydHMsIGZ1bmN0aW9uKGNoYXJ0KSB7XG4gICAgICAgIGNoYXJ0LmZpbHRlcihkaW0sIHJhbmdlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHBhcmVudENoYXJ0ID0gbGlua0NoYXJ0c1swXS5nZXQoJ3BhcmVudCcpO1xuICAgICAgaWYgKHNlbGYuZ2V0KCdmaXJzdFJlbmRlcicpKSB7XG4gICAgICAgIHBhcmVudENoYXJ0LnJlbmRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Q2hhcnQucmVwYWludCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBVdGlsLmVhY2gobGlua0NoYXJ0cywgZnVuY3Rpb24oY2hhcnQpIHtcbiAgICAgICAgY2hhcnQuZmlsdGVyKGRpbSwgcmFuZ2UpO1xuICAgICAgICBpZiAoc2VsZi5nZXQoJ2ZpcnN0UmVuZGVyJykpIHtcbiAgICAgICAgICBjaGFydC5yZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGFydC5yZXBhaW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGlua0NoYXJ0cyA9IHRoaXMuZ2V0KCdjaGFydHMnKTtcbiAgICB2YXIgY2hhcnQgPSBVdGlsLmlzQXJyYXkobGlua0NoYXJ0cykgPyBsaW5rQ2hhcnRzWzBdIDogbGlua0NoYXJ0cztcbiAgICB2YXIgcGxvdFJhbmdlO1xuICAgIHZhciB3aWR0aDtcbiAgICBpZiAoY2hhcnQuZ2V0KCdwYXJlbnQnKSkge1xuICAgICAgcGxvdFJhbmdlID0gY2hhcnQuZ2V0KCdwYXJlbnQnKS5nZXQoJ3Bsb3RSYW5nZScpO1xuICAgICAgd2lkdGggPSBjaGFydC5nZXQoJ3BhcmVudCcpLmdldCgnd2lkdGgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxvdFJhbmdlID0gY2hhcnQuZ2V0KCdwbG90UmFuZ2UnKTtcbiAgICAgIHdpZHRoID0gY2hhcnQuZ2V0KCd3aWR0aCcpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0KCdwbG90V2lkdGgnLCBwbG90UmFuZ2UudHIueCAtIHBsb3RSYW5nZS50bC54KTtcbiAgICB0aGlzLnNldCgnbWFyZ2luTGVmdCcsIHBsb3RSYW5nZS50bC54KTtcbiAgICB0aGlzLnNldCgnd2lkdGgnLCB3aWR0aCk7XG5cbiAgICBpZiAoIXRoaXMuZ2V0KCdjYW52YXMnKSkge1xuICAgICAgdGhpcy5faW5pdENhbnZhcygpO1xuICAgIH1cbiAgICB0aGlzLl9pbml0QmFja2dyb3VuZChjaGFydCk7XG4gICAgdGhpcy5faW5pdFNsaWRlcigpO1xuICAgIHRoaXMuX2JpbmRFdmVudCgpO1xuXG4gICAgdmFyIHhEaW0gPSB0aGlzLmdldCgneERpbScpO1xuICAgIHZhciBtaW4gPSB0aGlzLl9nZXRIYW5kbGVWYWx1ZSgnbWluJyk7XG4gICAgdmFyIG1heCA9IHRoaXMuX2dldEhhbmRsZVZhbHVlKCdtYXgnKTtcbiAgICBpZiAoIXRoaXMuZ2V0KCdjaGFuZ2VTaXplJykpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUxpbmtDaGFydHMoeERpbSwgW21pbiwgbWF4XSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0KCdjYW52YXMnKS5kcmF3KCk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYW5nZUVsZW1lbnQgPSB0aGlzLmdldCgncmFuZ2VFbGVtZW50Jyk7XG4gICAgcmFuZ2VFbGVtZW50Lm9mZigncmFuZ2VDaGFuZ2UnKTtcbiAgICB0aGlzLmdldCgnYmdDaGFydCcpICYmIHRoaXMuZ2V0KCdiZ0NoYXJ0JykuZGVzdHJveSgpO1xuICAgIHRoaXMuZ2V0KCdjYW52YXMnKS5kZXN0cm95KCk7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0KCdjb250YWluZXInKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgU2xpZGVyLnN1cGVyY2xhc3MuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBVdGlsLmdldFdyYXBCZWhhdmlvcih0aGlzLCAnX2luaXRGb3JjZUZpdEV2ZW50JykpO1xuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0KCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgdGhpcy5nZXQoJ2NhbnZhcycpLmNsZWFyKCk7XG4gICAgdGhpcy5nZXQoJ2JnQ2hhcnQnKSAmJiB0aGlzLmdldCgnYmdDaGFydCcpLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNldCgnYmdDaGFydCcsIG51bGwpO1xuICB9LFxuICByZXBhaW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldCgnZmlyc3RSZW5kZXInLCBmYWxzZSk7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L19nMi1wbHVnaW4tc2xpZGVyQDEuMi4xQGcyLXBsdWdpbi1zbGlkZXIvc3JjL3NsaWRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBbe1widGltZVwiOlwiMjAxNS0xMS0xOVwiLFwic3RhcnRcIjo4LjE4LFwibWF4XCI6OC4zMyxcIm1pblwiOjcuOTgsXCJlbmRcIjo4LjMyLFwidm9sdW1uXCI6MTgxMCxcIm1vbmV5XCI6MTQ3MjMuNTZ9LHtcInRpbWVcIjpcIjIwMTUtMTEtMThcIixcInN0YXJ0XCI6OC4zNyxcIm1heFwiOjguNixcIm1pblwiOjguMDMsXCJlbmRcIjo4LjA5LFwidm9sdW1uXCI6Mjc5MC4zNyxcIm1vbmV5XCI6MjMzMDkuMTl9LHtcInRpbWVcIjpcIjIwMTUtMTEtMTdcIixcInN0YXJ0XCI6OC43LFwibWF4XCI6OC43OCxcIm1pblwiOjguMzIsXCJlbmRcIjo4LjM3LFwidm9sdW1uXCI6MzcyOS4wNCxcIm1vbmV5XCI6MzE3MDkuNzF9LHtcInRpbWVcIjpcIjIwMTUtMTEtMTZcIixcInN0YXJ0XCI6OC4xOCxcIm1heFwiOjguNjksXCJtaW5cIjo4LjA1LFwiZW5kXCI6OC42MixcInZvbHVtblwiOjMwOTUuNDQsXCJtb25leVwiOjI2MTAwLjY5fSx7XCJ0aW1lXCI6XCIyMDE1LTExLTEzXCIsXCJzdGFydFwiOjguMDEsXCJtYXhcIjo4Ljc1LFwibWluXCI6Ny45NyxcImVuZFwiOjguNDEsXCJ2b2x1bW5cIjo1ODE1LjU4LFwibW9uZXlcIjo0ODU2Mi4zN30se1widGltZVwiOlwiMjAxNS0xMS0xMlwiLFwic3RhcnRcIjo3Ljc2LFwibWF4XCI6OC4xOCxcIm1pblwiOjcuNjEsXCJlbmRcIjo4LjE1LFwidm9sdW1uXCI6NDc0Mi42LFwibW9uZXlcIjozNzU2NS4zNn0se1widGltZVwiOlwiMjAxNS0xMS0xMVwiLFwic3RhcnRcIjo3LjU1LFwibWF4XCI6Ny44MSxcIm1pblwiOjcuNDksXCJlbmRcIjo3LjgsXCJ2b2x1bW5cIjozMTMzLjgyLFwibW9uZXlcIjoyNDA2NS40Mn0se1widGltZVwiOlwiMjAxNS0xMS0xMFwiLFwic3RhcnRcIjo3LjUsXCJtYXhcIjo3LjY4LFwibWluXCI6Ny40NCxcImVuZFwiOjcuNTcsXCJ2b2x1bW5cIjoyNjcwLjM1LFwibW9uZXlcIjoyMDIxMC41OH0se1widGltZVwiOlwiMjAxNS0xMS0wOVwiLFwic3RhcnRcIjo3LjY1LFwibWF4XCI6Ny42NixcIm1pblwiOjcuMyxcImVuZFwiOjcuNTgsXCJ2b2x1bW5cIjoyODQxLjc5LFwibW9uZXlcIjoyMTM0NC4zNn0se1widGltZVwiOlwiMjAxNS0xMS0wNlwiLFwic3RhcnRcIjo3LjUyLFwibWF4XCI6Ny43MSxcIm1pblwiOjcuNDgsXCJlbmRcIjo3LjY0LFwidm9sdW1uXCI6MjcyNS40NCxcIm1vbmV5XCI6MjA3MjEuNTF9LHtcInRpbWVcIjpcIjIwMTUtMTEtMDVcIixcInN0YXJ0XCI6Ny40OCxcIm1heFwiOjcuNTcsXCJtaW5cIjo3LjI5LFwiZW5kXCI6Ny40OCxcInZvbHVtblwiOjM1MjAuODUsXCJtb25leVwiOjI2MTQwLjgzfSx7XCJ0aW1lXCI6XCIyMDE1LTExLTA0XCIsXCJzdGFydFwiOjcuMDEsXCJtYXhcIjo3LjUsXCJtaW5cIjo3LjAxLFwiZW5kXCI6Ny40NixcInZvbHVtblwiOjM1OTEuNDcsXCJtb25leVwiOjI2Mjg1LjUyfSx7XCJ0aW1lXCI6XCIyMDE1LTExLTAzXCIsXCJzdGFydFwiOjcuMSxcIm1heFwiOjcuMTcsXCJtaW5cIjo2LjgyLFwiZW5kXCI6NyxcInZvbHVtblwiOjIwMjkuMjEsXCJtb25leVwiOjE0MjAyLjMzfSx7XCJ0aW1lXCI6XCIyMDE1LTExLTAyXCIsXCJzdGFydFwiOjcuMDksXCJtYXhcIjo3LjQ0LFwibWluXCI6Ni45MyxcImVuZFwiOjcuMTcsXCJ2b2x1bW5cIjozMTkxLjMxLFwibW9uZXlcIjoyMzIwNS4xMX0se1widGltZVwiOlwiMjAxNS0xMC0zMFwiLFwic3RhcnRcIjo2Ljk4LFwibWF4XCI6Ny4yNyxcIm1pblwiOjYuODQsXCJlbmRcIjo3LjE4LFwidm9sdW1uXCI6MzUyMi42MSxcIm1vbmV5XCI6MjUwODMuNDR9LHtcInRpbWVcIjpcIjIwMTUtMTAtMjlcIixcInN0YXJ0XCI6Ni45NCxcIm1heFwiOjcuMixcIm1pblwiOjYuOCxcImVuZFwiOjcuMDUsXCJ2b2x1bW5cIjoyNzUyLjI3LFwibW9uZXlcIjoxOTMyOC40NH0se1widGltZVwiOlwiMjAxNS0xMC0yOFwiLFwic3RhcnRcIjo3LjAxLFwibWF4XCI6Ny4xNCxcIm1pblwiOjYuOCxcImVuZFwiOjYuODUsXCJ2b2x1bW5cIjoyMzExLjExLFwibW9uZXlcIjoxNjEzNy4zMn0se1widGltZVwiOlwiMjAxNS0xMC0yN1wiLFwic3RhcnRcIjo2LjkxLFwibWF4XCI6Ny4zMSxcIm1pblwiOjYuNDgsXCJlbmRcIjo3LjE4LFwidm9sdW1uXCI6MzE3Mi45LFwibW9uZXlcIjoyMTgyNy4zfSx7XCJ0aW1lXCI6XCIyMDE1LTEwLTI2XCIsXCJzdGFydFwiOjYuOSxcIm1heFwiOjcuMDgsXCJtaW5cIjo2Ljg3LFwiZW5kXCI6Ni45NSxcInZvbHVtblwiOjI3NjkuMzEsXCJtb25leVwiOjE5MzM3LjQ0fSx7XCJ0aW1lXCI6XCIyMDE1LTEwLTIzXCIsXCJzdGFydFwiOjYuNzEsXCJtYXhcIjo2Ljg1LFwibWluXCI6Ni41OCxcImVuZFwiOjYuNzksXCJ2b2x1bW5cIjoyNDgzLjE4LFwibW9uZXlcIjoxNjcxNC4zMX0se1widGltZVwiOlwiMjAxNS0xMC0yMlwiLFwic3RhcnRcIjo2LjM4LFwibWF4XCI6Ni42NyxcIm1pblwiOjYuMzQsXCJlbmRcIjo2LjY1LFwidm9sdW1uXCI6MjIyNS44OCxcIm1vbmV5XCI6MTQ0NjUuNTZ9LHtcInRpbWVcIjpcIjIwMTUtMTAtMjFcIixcInN0YXJ0XCI6Ny4wOCxcIm1heFwiOjcuMSxcIm1pblwiOjYuNDEsXCJlbmRcIjo2LjQxLFwidm9sdW1uXCI6Mjg5MS40NyxcIm1vbmV5XCI6MTk1ODUuOTh9LHtcInRpbWVcIjpcIjIwMTUtMTAtMjBcIixcInN0YXJ0XCI6Ni44OCxcIm1heFwiOjcuMTksXCJtaW5cIjo2Ljg1LFwiZW5kXCI6Ny4xMixcInZvbHVtblwiOjIzODkuNjIsXCJtb25leVwiOjE2ODEzLjU4fSx7XCJ0aW1lXCI6XCIyMDE1LTEwLTE5XCIsXCJzdGFydFwiOjcuMSxcIm1heFwiOjcuMTQsXCJtaW5cIjo2LjgsXCJlbmRcIjo2Ljk0LFwidm9sdW1uXCI6Mjc4Ni42MSxcIm1vbmV5XCI6MTk0NzQuNzJ9LHtcInRpbWVcIjpcIjIwMTUtMTAtMTZcIixcInN0YXJ0XCI6Ni45MixcIm1heFwiOjcuMzgsXCJtaW5cIjo2LjczLFwiZW5kXCI6Ny4xNSxcInZvbHVtblwiOjMyODkuMjcsXCJtb25leVwiOjIyOTYzLjk3fSx7XCJ0aW1lXCI6XCIyMDE1LTEwLTE1XCIsXCJzdGFydFwiOjYuNjMsXCJtYXhcIjo2LjksXCJtaW5cIjo2LjYsXCJlbmRcIjo2Ljg5LFwidm9sdW1uXCI6MjQ0MC4zNyxcIm1vbmV5XCI6MTY1NzUuODR9LHtcInRpbWVcIjpcIjIwMTUtMTAtMTRcIixcInN0YXJ0XCI6Ni43LFwibWF4XCI6Ni45OSxcIm1pblwiOjYuNjEsXCJlbmRcIjo2LjY2LFwidm9sdW1uXCI6MjQ5Ni4zOCxcIm1vbmV5XCI6MTY4NTguMjh9LHtcInRpbWVcIjpcIjIwMTUtMTAtMTNcIixcInN0YXJ0XCI6Ni41NSxcIm1heFwiOjYuODEsXCJtaW5cIjo2LjU1LFwiZW5kXCI6Ni43NSxcInZvbHVtblwiOjIyOTkuODMsXCJtb25leVwiOjE1MzM4LjI0fSx7XCJ0aW1lXCI6XCIyMDE1LTEwLTEyXCIsXCJzdGFydFwiOjYuMjksXCJtYXhcIjo2Ljg5LFwibWluXCI6Ni4yOSxcImVuZFwiOjYuNjksXCJ2b2x1bW5cIjozMTQ3LjU4LFwibW9uZXlcIjoyMDczOC4zNX0se1widGltZVwiOlwiMjAxNS0xMC0wOVwiLFwic3RhcnRcIjo2LjEsXCJtYXhcIjo2LjQ0LFwibWluXCI6Ni4wOCxcImVuZFwiOjYuMzQsXCJ2b2x1bW5cIjoyNjY0LjA0LFwibW9uZXlcIjoxNjgxMS4xNH0se1widGltZVwiOlwiMjAxNS0xMC0wOFwiLFwic3RhcnRcIjo2LjExLFwibWF4XCI6Ni4yOCxcIm1pblwiOjYsXCJlbmRcIjo2LjEyLFwidm9sdW1uXCI6MjE5Ny4yMyxcIm1vbmV5XCI6MTM0NDAuOTJ9LHtcInRpbWVcIjpcIjIwMTUtMDktMzBcIixcInN0YXJ0XCI6NS45MyxcIm1heFwiOjYuMTIsXCJtaW5cIjo1LjgxLFwiZW5kXCI6NS44MyxcInZvbHVtblwiOjE0NTkuNjQsXCJtb25leVwiOjg2NTkuNTJ9LHtcInRpbWVcIjpcIjIwMTUtMDktMjlcIixcInN0YXJ0XCI6NS45NixcIm1heFwiOjUuOTgsXCJtaW5cIjo1LjczLFwiZW5kXCI6NS44MyxcInZvbHVtblwiOjEwNDcuNDIsXCJtb25leVwiOjYxMzIuNzJ9LHtcInRpbWVcIjpcIjIwMTUtMDktMjhcIixcInN0YXJ0XCI6NS44NixcIm1heFwiOjYuMTMsXCJtaW5cIjo1Ljg1LFwiZW5kXCI6Ni4wNyxcInZvbHVtblwiOjk1Mi40NSxcIm1vbmV5XCI6NTcxNy4zM30se1widGltZVwiOlwiMjAxNS0wOS0yNVwiLFwic3RhcnRcIjo2LjIzLFwibWF4XCI6Ni4yOCxcIm1pblwiOjUuODUsXCJlbmRcIjo1Ljk2LFwidm9sdW1uXCI6MTM5NS4yNyxcIm1vbmV5XCI6ODQ2NS45NX0se1widGltZVwiOlwiMjAxNS0wOS0yNFwiLFwic3RhcnRcIjo2LjE2LFwibWF4XCI6Ni4zMixcIm1pblwiOjYuMSxcImVuZFwiOjYuMjcsXCJ2b2x1bW5cIjoxNDM0LjM4LFwibW9uZXlcIjo4OTIwLjg4fSx7XCJ0aW1lXCI6XCIyMDE1LTA5LTIzXCIsXCJzdGFydFwiOjYuMTgsXCJtYXhcIjo2LjMyLFwibWluXCI6Ni4wMixcImVuZFwiOjYuMTIsXCJ2b2x1bW5cIjoxNTU4LjU0LFwibW9uZXlcIjo5NjMxLjM4fSx7XCJ0aW1lXCI6XCIyMDE1LTA5LTIyXCIsXCJzdGFydFwiOjYuMzUsXCJtYXhcIjo2LjQsXCJtaW5cIjo2LjE1LFwiZW5kXCI6Ni4yNSxcInZvbHVtblwiOjE4OTMuODMsXCJtb25leVwiOjExOTAxLjUxfSx7XCJ0aW1lXCI6XCIyMDE1LTA5LTIxXCIsXCJzdGFydFwiOjUuODMsXCJtYXhcIjo2LjMyLFwibWluXCI6NS44MyxcImVuZFwiOjYuMzEsXCJ2b2x1bW5cIjoxNzQ4LjM1LFwibW9uZXlcIjoxMDgwNy42Nn0se1widGltZVwiOlwiMjAxNS0wOS0xOFwiLFwic3RhcnRcIjo2LFwibWF4XCI6Ni4xLFwibWluXCI6NS44MSxcImVuZFwiOjYuMDIsXCJ2b2x1bW5cIjoxNTA3LjA5LFwibW9uZXlcIjo4OTk5LjQ0fSx7XCJ0aW1lXCI6XCIyMDE1LTA5LTE3XCIsXCJzdGFydFwiOjYuMSxcIm1heFwiOjYuMzQsXCJtaW5cIjo1LjgsXCJlbmRcIjo1LjgzLFwidm9sdW1uXCI6MjEzNS42NCxcIm1vbmV5XCI6MTMwMzkuNTZ9LHtcInRpbWVcIjpcIjIwMTUtMDktMTZcIixcInN0YXJ0XCI6NS41OCxcIm1heFwiOjYuMDcsXCJtaW5cIjo1LjQsXCJlbmRcIjo2LjA3LFwidm9sdW1uXCI6MTc1OC41NyxcIm1vbmV5XCI6MTAxMzIuMjV9LHtcInRpbWVcIjpcIjIwMTUtMDktMTVcIixcInN0YXJ0XCI6NS44MSxcIm1heFwiOjYuMDksXCJtaW5cIjo1LjUyLFwiZW5kXCI6NS41MixcInZvbHVtblwiOjE2MTcuMTIsXCJtb25leVwiOjkyNDguNjl9LHtcInRpbWVcIjpcIjIwMTUtMDktMTRcIixcInN0YXJ0XCI6Ni45OCxcIm1heFwiOjcuMDYsXCJtaW5cIjo2LjEzLFwiZW5kXCI6Ni4xMyxcInZvbHVtblwiOjE5ODIuOSxcIm1vbmV5XCI6MTI5ODkuMDF9LHtcInRpbWVcIjpcIjIwMTUtMDktMTFcIixcInN0YXJ0XCI6Ni44NyxcIm1heFwiOjcuMDEsXCJtaW5cIjo2LjY4LFwiZW5kXCI6Ni44MSxcInZvbHVtblwiOjEzNzEuNzcsXCJtb25leVwiOjkzNzAuNDl9LHtcInRpbWVcIjpcIjIwMTUtMDktMTBcIixcInN0YXJ0XCI6Ni43LFwibWF4XCI6Ny4xNyxcIm1pblwiOjYuNjUsXCJlbmRcIjo2Ljg2LFwidm9sdW1uXCI6MjE4MS4zMyxcIm1vbmV5XCI6MTUxNjkuNH0se1widGltZVwiOlwiMjAxNS0wOS0wOVwiLFwic3RhcnRcIjo2Ljc2LFwibWF4XCI6Ny4wMyxcIm1pblwiOjYuNjUsXCJlbmRcIjo2LjkzLFwidm9sdW1uXCI6MjEwNS4yOCxcIm1vbmV5XCI6MTQ0MjYuNzZ9LHtcInRpbWVcIjpcIjIwMTUtMDktMDhcIixcInN0YXJ0XCI6Ni4yNixcIm1heFwiOjYuNyxcIm1pblwiOjYuMDEsXCJlbmRcIjo2LjY0LFwidm9sdW1uXCI6MTUwNi41MyxcIm1vbmV5XCI6OTU1Ni41NH0se1widGltZVwiOlwiMjAxNS0wOS0wN1wiLFwic3RhcnRcIjo2LjE5LFwibWF4XCI6Ni40NSxcIm1pblwiOjYuMDksXCJlbmRcIjo2LjIsXCJ2b2x1bW5cIjoxNjA1Ljg1LFwibW9uZXlcIjoxMDA5MS4yNn0se1widGltZVwiOlwiMjAxNS0wOS0wMlwiLFwic3RhcnRcIjo2LjIsXCJtYXhcIjo2Ljg0LFwibWluXCI6NS45OCxcImVuZFwiOjUuOTksXCJ2b2x1bW5cIjoxOTM0Ljk1LFwibW9uZXlcIjoxMjIyNS42OH0se1widGltZVwiOlwiMjAxNS0wOS0wMVwiLFwic3RhcnRcIjo3LjIyLFwibWF4XCI6Ny4yOCxcIm1pblwiOjYuNjQsXCJlbmRcIjo2LjY0LFwidm9sdW1uXCI6MjY0NS44NyxcIm1vbmV5XCI6MTgwMTcuOTF9LHtcInRpbWVcIjpcIjIwMTUtMDgtMzFcIixcInN0YXJ0XCI6Ny44MyxcIm1heFwiOjgsXCJtaW5cIjo3LjM1LFwiZW5kXCI6Ny4zOCxcInZvbHVtblwiOjI5ODQuMDMsXCJtb25leVwiOjIzMDMxLjI0fSx7XCJ0aW1lXCI6XCIyMDE1LTA4LTI4XCIsXCJzdGFydFwiOjcuMyxcIm1heFwiOjcuNzcsXCJtaW5cIjo3LjEsXCJlbmRcIjo3Ljc3LFwidm9sdW1uXCI6MzA5Mi42LFwibW9uZXlcIjoyMzEyMS40OX0se1widGltZVwiOlwiMjAxNS0wOC0yN1wiLFwic3RhcnRcIjo2Ljc1LFwibWF4XCI6Ny4xLFwibWluXCI6Ni40MyxcImVuZFwiOjcuMDYsXCJ2b2x1bW5cIjoyOTAzLjc2LFwibW9uZXlcIjoxOTg0OC44N30se1widGltZVwiOlwiMjAxNS0wOC0yNlwiLFwic3RhcnRcIjo3LjEzLFwibWF4XCI6Ny40MyxcIm1pblwiOjYuNDIsXCJlbmRcIjo2LjU4LFwidm9sdW1uXCI6NDIxMi4wNCxcIm1vbmV5XCI6MjkwNjkuMjV9LHtcInRpbWVcIjpcIjIwMTUtMDgtMjVcIixcInN0YXJ0XCI6Ny4xMyxcIm1heFwiOjcuMjksXCJtaW5cIjo3LjEzLFwiZW5kXCI6Ny4xMyxcInZvbHVtblwiOjE4MzguNTksXCJtb25leVwiOjEzMTQwLjh9LHtcInRpbWVcIjpcIjIwMTUtMDgtMjRcIixcInN0YXJ0XCI6OC40LFwibWF4XCI6OC40LFwibWluXCI6Ny45MixcImVuZFwiOjcuOTIsXCJ2b2x1bW5cIjoxNzY2LjM5LFwibW9uZXlcIjoxNDE2OC44Nn0se1widGltZVwiOlwiMjAxNS0wOC0yMVwiLFwic3RhcnRcIjo5LFwibWF4XCI6OS42MSxcIm1pblwiOjguNTMsXCJlbmRcIjo4LjgsXCJ2b2x1bW5cIjozMzg4LjI3LFwibW9uZXlcIjozMDk1Mi4xMX0se1widGltZVwiOlwiMjAxNS0wOC0yMFwiLFwic3RhcnRcIjoxMC4wMixcIm1heFwiOjEwLjI0LFwibWluXCI6OS4zMixcImVuZFwiOjkuMzMsXCJ2b2x1bW5cIjozOTAyLjE3LFwibW9uZXlcIjozODM5MS42OH0se1widGltZVwiOlwiMjAxNS0wOC0xOVwiLFwic3RhcnRcIjo5LjMsXCJtYXhcIjoxMC41OSxcIm1pblwiOjkuMDEsXCJlbmRcIjoxMC4zNSxcInZvbHVtblwiOjU1NjguOTYsXCJtb25leVwiOjUzOTI4Ljc5fSx7XCJ0aW1lXCI6XCIyMDE1LTA4LTE4XCIsXCJzdGFydFwiOjExLjE4LFwibWF4XCI6MTEuNSxcIm1pblwiOjEwLFwiZW5kXCI6MTAsXCJ2b2x1bW5cIjo3MzMyLjcsXCJtb25leVwiOjc4NDM5LjYxfSx7XCJ0aW1lXCI6XCIyMDE1LTA4LTE3XCIsXCJzdGFydFwiOjEwLjIsXCJtYXhcIjoxMS4xMSxcIm1pblwiOjkuOSxcImVuZFwiOjExLjExLFwidm9sdW1uXCI6ODEyMS44NixcIm1vbmV5XCI6ODYyOTguOTJ9LHtcInRpbWVcIjpcIjIwMTUtMDgtMTRcIixcInN0YXJ0XCI6OS41OCxcIm1heFwiOjEwLjM3LFwibWluXCI6OS4zNyxcImVuZFwiOjEwLjEsXCJ2b2x1bW5cIjo2MDAxLjYxLFwibW9uZXlcIjo1ODQyNS4xMX0se1widGltZVwiOlwiMjAxNS0wOC0xM1wiLFwic3RhcnRcIjo5LjE0LFwibWF4XCI6OS41LFwibWluXCI6OC45MSxcImVuZFwiOjkuNDksXCJ2b2x1bW5cIjozODU0LjE5LFwibW9uZXlcIjozNTY5Ni4yN30se1widGltZVwiOlwiMjAxNS0wOC0xMlwiLFwic3RhcnRcIjo5LjA5LFwibWF4XCI6OS42OCxcIm1pblwiOjguOTgsXCJlbmRcIjo5LjI5LFwidm9sdW1uXCI6NDIzOC41NyxcIm1vbmV5XCI6Mzk5MDkuM30se1widGltZVwiOlwiMjAxNS0wOC0xMVwiLFwic3RhcnRcIjo5LjIzLFwibWF4XCI6OS40NyxcIm1pblwiOjksXCJlbmRcIjo5LjE1LFwidm9sdW1uXCI6NDI5NC44NSxcIm1vbmV5XCI6Mzk2NzQuNzF9LHtcInRpbWVcIjpcIjIwMTUtMDgtMTBcIixcInN0YXJ0XCI6OC45LFwibWF4XCI6OS4zOCxcIm1pblwiOjguNzYsXCJlbmRcIjo5LjIsXCJ2b2x1bW5cIjo0MDEzLjExLFwibW9uZXlcIjozNjI4Ny44OX0se1widGltZVwiOlwiMjAxNS0wOC0wN1wiLFwic3RhcnRcIjo4LjM2LFwibWF4XCI6OC44LFwibWluXCI6OC4zMSxcImVuZFwiOjguNyxcInZvbHVtblwiOjMwOTIuNjYsXCJtb25leVwiOjI2MzM2Ljc2fSx7XCJ0aW1lXCI6XCIyMDE1LTA4LTA2XCIsXCJzdGFydFwiOjguMDMsXCJtYXhcIjo4LjQyLFwibWluXCI6Ny45NSxcImVuZFwiOjguMjUsXCJ2b2x1bW5cIjoyMDcyLjIxLFwibW9uZXlcIjoxNzA2MC4xMX0se1widGltZVwiOlwiMjAxNS0wOC0wNVwiLFwic3RhcnRcIjo4LjUsXCJtYXhcIjo4LjY5LFwibWluXCI6OC4wOCxcImVuZFwiOjguMjgsXCJ2b2x1bW5cIjozNTMzLjk0LFwibW9uZXlcIjoyOTc5Ni45Nn0se1widGltZVwiOlwiMjAxNS0wOC0wNFwiLFwic3RhcnRcIjo3LjY1LFwibWF4XCI6OC4zOSxcIm1pblwiOjcuNjUsXCJlbmRcIjo4LjM5LFwidm9sdW1uXCI6MzA2Ny4yMixcIm1vbmV5XCI6MjQ3NzMuODh9LHtcInRpbWVcIjpcIjIwMTUtMDgtMDNcIixcInN0YXJ0XCI6OC4xNSxcIm1heFwiOjguNCxcIm1pblwiOjcuNixcImVuZFwiOjcuNjMsXCJ2b2x1bW5cIjozMDk4LjMzLFwibW9uZXlcIjoyNDM4Mi45OX0se1widGltZVwiOlwiMjAxNS0wNy0zMVwiLFwic3RhcnRcIjo4LjcsXCJtYXhcIjo5LjAxLFwibWluXCI6OC4yNSxcImVuZFwiOjguNDQsXCJ2b2x1bW5cIjozNTAwLjYxLFwibW9uZXlcIjozMDI4OS44M30se1widGltZVwiOlwiMjAxNS0wNy0zMFwiLFwic3RhcnRcIjo4LjkyLFwibWF4XCI6OS42NSxcIm1pblwiOjguNyxcImVuZFwiOjguOTcsXCJ2b2x1bW5cIjo2MDIyLjgsXCJtb25leVwiOjU1NjI0Ljg1fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTI5XCIsXCJzdGFydFwiOjguMzUsXCJtYXhcIjo4LjkxLFwibWluXCI6Ny43OCxcImVuZFwiOjguODgsXCJ2b2x1bW5cIjo0MTc3LjE4LFwibW9uZXlcIjozNDg5My4yfSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTI4XCIsXCJzdGFydFwiOjgsXCJtYXhcIjo5LFwibWluXCI6Ny45MixcImVuZFwiOjguMSxcInZvbHVtblwiOjUxMTQuNTUsXCJtb25leVwiOjQyMDk1Ljk5fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTI3XCIsXCJzdGFydFwiOjkuNCxcIm1heFwiOjkuOTksXCJtaW5cIjo4LjgsXCJlbmRcIjo4LjgsXCJ2b2x1bW5cIjo2MDAxLjUxLFwibW9uZXlcIjo1Njk2Mi4yNX0se1widGltZVwiOlwiMjAxNS0wNy0yNFwiLFwic3RhcnRcIjo5LjI3LFwibWF4XCI6MTAuMjgsXCJtaW5cIjo5LjExLFwiZW5kXCI6OS43OCxcInZvbHVtblwiOjg0NDYuNzYsXCJtb25leVwiOjgxOTkxLjE5fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTIzXCIsXCJzdGFydFwiOjksXCJtYXhcIjo5Ljc4LFwibWluXCI6OC43NCxcImVuZFwiOjkuNDYsXCJ2b2x1bW5cIjo4NDk2LjEsXCJtb25leVwiOjc3NTUxLjAxfSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTIyXCIsXCJzdGFydFwiOjguMDgsXCJtYXhcIjo4Ljk3LFwibWluXCI6OC4wNSxcImVuZFwiOjguOTcsXCJ2b2x1bW5cIjo4Njc2Ljc1LFwibW9uZXlcIjo3NTc1MS4xfSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTIxXCIsXCJzdGFydFwiOjcuOCxcIm1heFwiOjguMzMsXCJtaW5cIjo3LjY1LFwiZW5kXCI6OC4xNSxcInZvbHVtblwiOjQ2MzEuMTUsXCJtb25leVwiOjM3NDUwLjc4fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTIwXCIsXCJzdGFydFwiOjcuNzIsXCJtYXhcIjo4LjI3LFwibWluXCI6Ny42MyxcImVuZFwiOjguMDUsXCJ2b2x1bW5cIjo2NDI4LjIsXCJtb25leVwiOjUxMTI3Ljk4fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTE3XCIsXCJzdGFydFwiOjYuOTQsXCJtYXhcIjo3LjczLFwibWluXCI6Ni45NCxcImVuZFwiOjcuNzMsXCJ2b2x1bW5cIjo0ODM1LjQ0LFwibW9uZXlcIjozNjY2Ni41OH0se1widGltZVwiOlwiMjAxNS0wNy0xNlwiLFwic3RhcnRcIjo2LjUzLFwibWF4XCI6Ny40OCxcIm1pblwiOjYuNDIsXCJlbmRcIjo3LjAzLFwidm9sdW1uXCI6MzYwNS43NyxcIm1vbmV5XCI6MjUwMzEuMTV9LHtcInRpbWVcIjpcIjIwMTUtMDctMTVcIixcInN0YXJ0XCI6Ny41NyxcIm1heFwiOjcuODMsXCJtaW5cIjo3LjEzLFwiZW5kXCI6Ny4xMyxcInZvbHVtblwiOjI3MjkuNTksXCJtb25leVwiOjIwMDQxLjc1fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTE0XCIsXCJzdGFydFwiOjguMixcIm1heFwiOjguNyxcIm1pblwiOjcuNjYsXCJlbmRcIjo3LjkyLFwidm9sdW1uXCI6NzA3My44MSxcIm1vbmV5XCI6NTgxMzEuMTZ9LHtcInRpbWVcIjpcIjIwMTUtMDctMTNcIixcInN0YXJ0XCI6Ny41LFwibWF4XCI6OC4xLFwibWluXCI6Ny41LFwiZW5kXCI6OC4xLFwidm9sdW1uXCI6NDU3My45MixcIm1vbmV5XCI6MzYwODMuNjl9LHtcInRpbWVcIjpcIjIwMTUtMDctMTBcIixcInN0YXJ0XCI6Ni45LFwibWF4XCI6Ny4zNixcIm1pblwiOjYuODgsXCJlbmRcIjo3LjM2LFwidm9sdW1uXCI6NDE4My4zNyxcIm1vbmV5XCI6MzA0MTEuMTl9LHtcInRpbWVcIjpcIjIwMTUtMDctMDlcIixcInN0YXJ0XCI6NS40NyxcIm1heFwiOjYuNjksXCJtaW5cIjo1LjQ3LFwiZW5kXCI6Ni42OSxcInZvbHVtblwiOjY2NjEuNzgsXCJtb25leVwiOjQwMzk4Ljk2fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTA4XCIsXCJzdGFydFwiOjYuMDgsXCJtYXhcIjo2LjA4LFwibWluXCI6Ni4wOCxcImVuZFwiOjYuMDgsXCJ2b2x1bW5cIjoxNTguMTYsXCJtb25leVwiOjk2MS42MX0se1widGltZVwiOlwiMjAxNS0wNy0wN1wiLFwic3RhcnRcIjo2Ljc3LFwibWF4XCI6Ni44OCxcIm1pblwiOjYuNzUsXCJlbmRcIjo2Ljc1LFwidm9sdW1uXCI6MzgzLjQ1LFwibW9uZXlcIjoyNTkwLjg1fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTA2XCIsXCJzdGFydFwiOjkuMSxcIm1heFwiOjkuMSxcIm1pblwiOjcuNSxcImVuZFwiOjcuNSxcInZvbHVtblwiOjI5NjguOTgsXCJtb25leVwiOjI0MDAyLjZ9LHtcInRpbWVcIjpcIjIwMTUtMDctMDNcIixcInN0YXJ0XCI6OC4zOCxcIm1heFwiOjguODcsXCJtaW5cIjo4LjMzLFwiZW5kXCI6OC4zMyxcInZvbHVtblwiOjI2NDEuNzMsXCJtb25leVwiOjIyMjIzLjQ0fSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTAyXCIsXCJzdGFydFwiOjEwLjM4LFwibWF4XCI6MTAuMzgsXCJtaW5cIjo5LjI2LFwiZW5kXCI6OS4yNixcInZvbHVtblwiOjI2MTEuMDYsXCJtb25leVwiOjI0NjIwLjgxfSx7XCJ0aW1lXCI6XCIyMDE1LTA3LTAxXCIsXCJzdGFydFwiOjExLjMxLFwibWF4XCI6MTEuNjEsXCJtaW5cIjoxMC4yOSxcImVuZFwiOjEwLjI5LFwidm9sdW1uXCI6MzQwMS40NSxcIm1vbmV5XCI6MzcyMTIuODd9LHtcInRpbWVcIjpcIjIwMTUtMDYtMzBcIixcInN0YXJ0XCI6MTAuMDgsXCJtYXhcIjoxMS41MixcIm1pblwiOjEwLjAxLFwiZW5kXCI6MTEuNDMsXCJ2b2x1bW5cIjo0MjA1Ljk5LFwibW9uZXlcIjo0NTM4MS4wNn0se1widGltZVwiOlwiMjAxNS0wNi0yOVwiLFwic3RhcnRcIjoxMi45NixcIm1heFwiOjEyLjk2LFwibWluXCI6MTEuMTIsXCJlbmRcIjoxMS4xMixcInZvbHVtblwiOjM3NDUuNjgsXCJtb25leVwiOjQ0MjUyLjQ3fSx7XCJ0aW1lXCI6XCIyMDE1LTA2LTI2XCIsXCJzdGFydFwiOjEzLjE1LFwibWF4XCI6MTMuNDEsXCJtaW5cIjoxMi4zNixcImVuZFwiOjEyLjM2LFwidm9sdW1uXCI6MzY3NS45MSxcIm1vbmV5XCI6NDY3NTkuMjl9LHtcInRpbWVcIjpcIjIwMTUtMDYtMjVcIixcInN0YXJ0XCI6MTMuNzEsXCJtYXhcIjoxNC40NixcIm1pblwiOjEzLjMsXCJlbmRcIjoxMy43MyxcInZvbHVtblwiOjQ5MDcuNixcIm1vbmV5XCI6NjgyOTAuNX0se1widGltZVwiOlwiMjAxNS0wNi0yNFwiLFwic3RhcnRcIjoxMy4zNSxcIm1heFwiOjEzLjg1LFwibWluXCI6MTIuOSxcImVuZFwiOjEzLjcxLFwidm9sdW1uXCI6MzY1Ni44LFwibW9uZXlcIjo0OTIxOS45Mn0se1widGltZVwiOlwiMjAxNS0wNi0yM1wiLFwic3RhcnRcIjoxMy4yNixcIm1heFwiOjEzLjY0LFwibWluXCI6MTIuMjYsXCJlbmRcIjoxMy4yLFwidm9sdW1uXCI6MzU2Ni4zNSxcIm1vbmV5XCI6NDU5MDQuNzh9LHtcInRpbWVcIjpcIjIwMTUtMDYtMTlcIixcInN0YXJ0XCI6MTQuNDUsXCJtYXhcIjoxNC45NyxcIm1pblwiOjEzLjYyLFwiZW5kXCI6MTMuNjIsXCJ2b2x1bW5cIjozNjIxLjQzLFwibW9uZXlcIjo1MTEwOC4zMX0se1widGltZVwiOlwiMjAxNS0wNi0xOFwiLFwic3RhcnRcIjoxNC41LFwibWF4XCI6MTYsXCJtaW5cIjoxNC4zLFwiZW5kXCI6MTUuMTMsXCJ2b2x1bW5cIjo1MDQ2LjU5LFwibW9uZXlcIjo3NzIwOC41M30se1widGltZVwiOlwiMjAxNS0wNi0xN1wiLFwic3RhcnRcIjoxNC40NixcIm1heFwiOjE1LFwibWluXCI6MTQsXCJlbmRcIjoxNC42LFwidm9sdW1uXCI6MzQ4My43LFwibW9uZXlcIjo1MDQ5NS44NH0se1widGltZVwiOlwiMjAxNS0wNi0xNlwiLFwic3RhcnRcIjoxNCxcIm1heFwiOjE1LjEsXCJtaW5cIjoxMy40MixcImVuZFwiOjE0LjgsXCJ2b2x1bW5cIjo0ODQ0Ljc0LFwibW9uZXlcIjo2ODk1My43N30se1widGltZVwiOlwiMjAxNS0wNi0xNVwiLFwic3RhcnRcIjoxNC41LFwibWF4XCI6MTUuMDksXCJtaW5cIjoxNC4xLFwiZW5kXCI6MTQuMzksXCJ2b2x1bW5cIjo0MDA4LjIsXCJtb25leVwiOjU4NzAzLjI0fSx7XCJ0aW1lXCI6XCIyMDE1LTA2LTEyXCIsXCJzdGFydFwiOjE0LjA3LFwibWF4XCI6MTQuOTcsXCJtaW5cIjoxNCxcImVuZFwiOjE0LjM3LFwidm9sdW1uXCI6NTM5OS40NyxcIm1vbmV5XCI6Nzg1OTIuNDV9LHtcInRpbWVcIjpcIjIwMTUtMDYtMTFcIixcInN0YXJ0XCI6MTMuNCxcIm1heFwiOjE0LjUsXCJtaW5cIjoxMy4xOSxcImVuZFwiOjE0LjEzLFwidm9sdW1uXCI6NTQ3Mi45MyxcIm1vbmV5XCI6NzYwMzcuMzF9LHtcInRpbWVcIjpcIjIwMTUtMDYtMTBcIixcInN0YXJ0XCI6MTIuOTUsXCJtYXhcIjoxMy40NyxcIm1pblwiOjEyLjcxLFwiZW5kXCI6MTMuMzcsXCJ2b2x1bW5cIjo0MDg3Ljc0LFwibW9uZXlcIjo1Mzk1MS42NH0se1widGltZVwiOlwiMjAxNS0wNi0wOVwiLFwic3RhcnRcIjoxMy40NixcIm1heFwiOjEzLjQ2LFwibWluXCI6MTIuODUsXCJlbmRcIjoxMy4xMixcInZvbHVtblwiOjQzNzEuNjcsXCJtb25leVwiOjU3MzUyLjIxfSx7XCJ0aW1lXCI6XCIyMDE1LTA2LTA4XCIsXCJzdGFydFwiOjEyLjg4LFwibWF4XCI6MTMuNjksXCJtaW5cIjoxMi41OSxcImVuZFwiOjEzLjYxLFwidm9sdW1uXCI6NzQwNi41OCxcIm1vbmV5XCI6OTgyMzYuM30se1widGltZVwiOlwiMjAxNS0wNi0wNVwiLFwic3RhcnRcIjoxMi4zOCxcIm1heFwiOjEyLjk0LFwibWluXCI6MTIuMjQsXCJlbmRcIjoxMi43NyxcInZvbHVtblwiOjUzODYuNjYsXCJtb25leVwiOjY4MjA4LjUxfSx7XCJ0aW1lXCI6XCIyMDE1LTA2LTA0XCIsXCJzdGFydFwiOjEyLjU1LFwibWF4XCI6MTIuODEsXCJtaW5cIjoxMS4yOSxcImVuZFwiOjEyLjMxLFwidm9sdW1uXCI6MzkwNS4yMixcIm1vbmV5XCI6NDc0MTUuNjR9LHtcInRpbWVcIjpcIjIwMTUtMDYtMDNcIixcInN0YXJ0XCI6MTMsXCJtYXhcIjoxMy4xNSxcIm1pblwiOjEyLjIsXCJlbmRcIjoxMi41NCxcInZvbHVtblwiOjQ1NTkuNjEsXCJtb25leVwiOjU3OTI4LjU4fSx7XCJ0aW1lXCI6XCIyMDE1LTA2LTAyXCIsXCJzdGFydFwiOjExLjg0LFwibWF4XCI6MTIuNzcsXCJtaW5cIjoxMS40OCxcImVuZFwiOjEyLjczLFwidm9sdW1uXCI6NDQwNS4xNyxcIm1vbmV5XCI6NTI3NDcuOTJ9LHtcInRpbWVcIjpcIjIwMTUtMDYtMDFcIixcInN0YXJ0XCI6MTEuMjksXCJtYXhcIjoxMS44LFwibWluXCI6MTEsXCJlbmRcIjoxMS43NCxcInZvbHVtblwiOjMzMDguOTQsXCJtb25leVwiOjM4MDYwLjJ9LHtcInRpbWVcIjpcIjIwMTUtMDUtMjlcIixcInN0YXJ0XCI6MTEuMyxcIm1heFwiOjExLjY1LFwibWluXCI6MTAuMzEsXCJlbmRcIjoxMS4xMSxcInZvbHVtblwiOjM0MzQuMTIsXCJtb25leVwiOjM4MTQzLjg4fSx7XCJ0aW1lXCI6XCIyMDE1LTA1LTI4XCIsXCJzdGFydFwiOjEyLjc5LFwibWF4XCI6MTIuOTksXCJtaW5cIjoxMS4zOSxcImVuZFwiOjExLjQsXCJ2b2x1bW5cIjo0OTc5LjYzLFwibW9uZXlcIjo2MTM5OC4zNn0se1widGltZVwiOlwiMjAxNS0wNS0yN1wiLFwic3RhcnRcIjoxMi44OSxcIm1heFwiOjEzLjE4LFwibWluXCI6MTIuNSxcImVuZFwiOjEyLjY2LFwidm9sdW1uXCI6NDg4Ni44NixcIm1vbmV5XCI6NjIzNDkuNjN9LHtcInRpbWVcIjpcIjIwMTUtMDUtMjZcIixcInN0YXJ0XCI6MTIuNCxcIm1heFwiOjEzLjA4LFwibWluXCI6MTEuOTYsXCJlbmRcIjoxMi45MixcInZvbHVtblwiOjU4MzguNTEsXCJtb25leVwiOjczNDA5Ljk2fSx7XCJ0aW1lXCI6XCIyMDE1LTA1LTI1XCIsXCJzdGFydFwiOjExLjcsXCJtYXhcIjoxMi44NyxcIm1pblwiOjExLjYxLFwiZW5kXCI6MTIuMyxcInZvbHVtblwiOjY0MDUuMixcIm1vbmV5XCI6Nzg5MzcuMzJ9LHtcInRpbWVcIjpcIjIwMTUtMDUtMjJcIixcInN0YXJ0XCI6MTEuMzksXCJtYXhcIjoxMS44OSxcIm1pblwiOjExLjE4LFwiZW5kXCI6MTEuNzEsXCJ2b2x1bW5cIjo1NTE5Ljg3LFwibW9uZXlcIjo2MzUxNS45M30se1widGltZVwiOlwiMjAxNS0wNS0yMVwiLFwic3RhcnRcIjoxMS4yNyxcIm1heFwiOjExLjM1LFwibWluXCI6MTEuMDUsXCJlbmRcIjoxMS4zMyxcInZvbHVtblwiOjQxMzIuOCxcIm1vbmV5XCI6NDYzMTguNjV9LHtcInRpbWVcIjpcIjIwMTUtMDUtMjBcIixcInN0YXJ0XCI6MTEuMjMsXCJtYXhcIjoxMS40OCxcIm1pblwiOjEwLjgxLFwiZW5kXCI6MTEuMzIsXCJ2b2x1bW5cIjo2ODU5Ljc2LFwibW9uZXlcIjo3NjI3My42NX0se1widGltZVwiOlwiMjAxNS0wNS0xOVwiLFwic3RhcnRcIjoxMS41LFwibWF4XCI6MTEuNzgsXCJtaW5cIjoxMSxcImVuZFwiOjExLjMzLFwidm9sdW1uXCI6Njg2NC4wNSxcIm1vbmV5XCI6Nzc3MzEuMzR9LHtcInRpbWVcIjpcIjIwMTUtMDUtMThcIixcInN0YXJ0XCI6MTEuNjgsXCJtYXhcIjoxMi4yNSxcIm1pblwiOjExLjQ1LFwiZW5kXCI6MTIuMTUsXCJ2b2x1bW5cIjo0MjM2LjUsXCJtb25leVwiOjUwNzI4LjZ9LHtcInRpbWVcIjpcIjIwMTUtMDUtMTVcIixcInN0YXJ0XCI6MTEuMTksXCJtYXhcIjoxMi4yOCxcIm1pblwiOjEwLjgsXCJlbmRcIjoxMS42OSxcInZvbHVtblwiOjU1MTUuNjYsXCJtb25leVwiOjY0NDk2LjMyfSx7XCJ0aW1lXCI6XCIyMDE1LTA1LTE0XCIsXCJzdGFydFwiOjEwLjE4LFwibWF4XCI6MTEuMTksXCJtaW5cIjoxMC4xMSxcImVuZFwiOjExLjE5LFwidm9sdW1uXCI6NDE4MS43NyxcIm1vbmV5XCI6NDUzOTkuMTl9LHtcInRpbWVcIjpcIjIwMTUtMDUtMTNcIixcInN0YXJ0XCI6MTAuMixcIm1heFwiOjEwLjMyLFwibWluXCI6MTAsXCJlbmRcIjoxMC4xNyxcInZvbHVtblwiOjIyNDcuMzksXCJtb25leVwiOjIyNzgxLjIzfSx7XCJ0aW1lXCI6XCIyMDE1LTA1LTEyXCIsXCJzdGFydFwiOjEwLjMsXCJtYXhcIjoxMC4zNixcIm1pblwiOjEwLjAxLFwiZW5kXCI6MTAuMjgsXCJ2b2x1bW5cIjoyMDEwLjY1LFwibW9uZXlcIjoyMDQ4MC42M30se1widGltZVwiOlwiMjAxNS0wNS0xMVwiLFwic3RhcnRcIjo5Ljk4LFwibWF4XCI6MTAuMzYsXCJtaW5cIjo5Ljg5LFwiZW5kXCI6MTAuMyxcInZvbHVtblwiOjIxMDEuMjYsXCJtb25leVwiOjIxMzY3LjUzfSx7XCJ0aW1lXCI6XCIyMDE1LTA1LTA4XCIsXCJzdGFydFwiOjkuODIsXCJtYXhcIjoxMC4wOCxcIm1pblwiOjkuNjUsXCJlbmRcIjo5Ljk0LFwidm9sdW1uXCI6MTYwOS40MyxcIm1vbmV5XCI6MTU4NDUuNTZ9LHtcInRpbWVcIjpcIjIwMTUtMDUtMDdcIixcInN0YXJ0XCI6OS42MixcIm1heFwiOjkuODQsXCJtaW5cIjo5LjQ1LFwiZW5kXCI6OS42LFwidm9sdW1uXCI6MTI3MC44NixcIm1vbmV5XCI6MTIyNDEuMTd9LHtcInRpbWVcIjpcIjIwMTUtMDUtMDZcIixcInN0YXJ0XCI6MTAuMTgsXCJtYXhcIjoxMC4yNSxcIm1pblwiOjkuNixcImVuZFwiOjkuNjYsXCJ2b2x1bW5cIjoxNzU0LjcsXCJtb25leVwiOjE3MzQ3LjA1fSx7XCJ0aW1lXCI6XCIyMDE1LTA1LTA1XCIsXCJzdGFydFwiOjEwLjY4LFwibWF4XCI6MTAuNjgsXCJtaW5cIjoxMCxcImVuZFwiOjEwLjAyLFwidm9sdW1uXCI6MTkwMy41LFwibW9uZXlcIjoxOTU5OC42NH0se1widGltZVwiOlwiMjAxNS0wNS0wNFwiLFwic3RhcnRcIjoxMC42MSxcIm1heFwiOjEwLjg0LFwibWluXCI6MTAuNTUsXCJlbmRcIjoxMC43MixcInZvbHVtblwiOjE1NTQuOTMsXCJtb25leVwiOjE2NjI0LjQzfSx7XCJ0aW1lXCI6XCIyMDE1LTA0LTMwXCIsXCJzdGFydFwiOjEwLjQsXCJtYXhcIjoxMS4wNSxcIm1pblwiOjEwLjQsXCJlbmRcIjoxMC42MyxcInZvbHVtblwiOjIxNjkuMDYsXCJtb25leVwiOjIzMzMzLjA2fSx7XCJ0aW1lXCI6XCIyMDE1LTA0LTI5XCIsXCJzdGFydFwiOjEwLjMxLFwibWF4XCI6MTAuNjQsXCJtaW5cIjoxMC4yNSxcImVuZFwiOjEwLjQsXCJ2b2x1bW5cIjoxNjE0Ljc3LFwibW9uZXlcIjoxNjkxMC45Nn0se1widGltZVwiOlwiMjAxNS0wNC0yOFwiLFwic3RhcnRcIjoxMS4wNyxcIm1heFwiOjExLjI1LFwibWluXCI6MTAuNDYsXCJlbmRcIjoxMC40OSxcInZvbHVtblwiOjI1NTIuMjEsXCJtb25leVwiOjI3NTE1Ljg4fSx7XCJ0aW1lXCI6XCIyMDE1LTA0LTI3XCIsXCJzdGFydFwiOjEwLjYsXCJtYXhcIjoxMS42NyxcIm1pblwiOjEwLjYsXCJlbmRcIjoxMS4wNixcInZvbHVtblwiOjQyMTYuNDYsXCJtb25leVwiOjQ3NTM0LjUzfSx7XCJ0aW1lXCI6XCIyMDE1LTA0LTI0XCIsXCJzdGFydFwiOjEwLjUsXCJtYXhcIjoxMC44NSxcIm1pblwiOjEwLjI1LFwiZW5kXCI6MTAuNjEsXCJ2b2x1bW5cIjoyMzI2LjQyLFwibW9uZXlcIjoyNDU5OS42M30se1widGltZVwiOlwiMjAxNS0wNC0yM1wiLFwic3RhcnRcIjoxMC4yNixcIm1heFwiOjEwLjkzLFwibWluXCI6MTAuMTEsXCJlbmRcIjoxMC43LFwidm9sdW1uXCI6Mzc2Ny43NyxcIm1vbmV5XCI6Mzk2NDMuNzJ9LHtcInRpbWVcIjpcIjIwMTUtMDQtMjJcIixcInN0YXJ0XCI6MTAuMjIsXCJtYXhcIjoxMC40MixcIm1pblwiOjEwLjA4LFwiZW5kXCI6MTAuMjMsXCJ2b2x1bW5cIjoyODY4Ljc3LFwibW9uZXlcIjoyOTMxNi40OX0se1widGltZVwiOlwiMjAxNS0wNC0yMVwiLFwic3RhcnRcIjo5LjU2LFwibWF4XCI6MTAuMixcIm1pblwiOjkuNCxcImVuZFwiOjEwLjE5LFwidm9sdW1uXCI6MzQ5My42MSxcIm1vbmV5XCI6MzQ4NjUuMDF9LHtcInRpbWVcIjpcIjIwMTUtMDQtMjBcIixcInN0YXJ0XCI6OS43MSxcIm1heFwiOjkuOTksXCJtaW5cIjo5LjQyLFwiZW5kXCI6OS42LFwidm9sdW1uXCI6MjQ2Mi4wOSxcIm1vbmV5XCI6MjM3NjkuNX0se1widGltZVwiOlwiMjAxNS0wNC0xN1wiLFwic3RhcnRcIjo5Ljc5LFwibWF4XCI6MTAuMDksXCJtaW5cIjo5LjE2LFwiZW5kXCI6OS44MixcInZvbHVtblwiOjQ0NzMuMzMsXCJtb25leVwiOjQzMzY3LjI5fSx7XCJ0aW1lXCI6XCIyMDE1LTA0LTE2XCIsXCJzdGFydFwiOjkuMzYsXCJtYXhcIjoxMC4wNCxcIm1pblwiOjguOSxcImVuZFwiOjkuNjYsXCJ2b2x1bW5cIjoyODUxLjc5LFwibW9uZXlcIjoyNzIxMC4wM30se1widGltZVwiOlwiMjAxNS0wNC0xNVwiLFwic3RhcnRcIjoxMC4wMyxcIm1heFwiOjEwLjI4LFwibWluXCI6OS4zNyxcImVuZFwiOjkuNDMsXCJ2b2x1bW5cIjozMTM4LjExLFwibW9uZXlcIjozMDcxMy4xM30se1widGltZVwiOlwiMjAxNS0wNC0xNFwiLFwic3RhcnRcIjoxMC4zMyxcIm1heFwiOjEwLjMzLFwibWluXCI6OS45OCxcImVuZFwiOjEwLjAzLFwidm9sdW1uXCI6Mjk1MS41OSxcIm1vbmV5XCI6Mjk4MDMuNH0se1widGltZVwiOlwiMjAxNS0wNC0xM1wiLFwic3RhcnRcIjoxMC4zLFwibWF4XCI6MTAuNjMsXCJtaW5cIjoxMC4yLFwiZW5kXCI6MTAuMzMsXCJ2b2x1bW5cIjozMTk2Ljk5LFwibW9uZXlcIjozMzM1MS43Nn0se1widGltZVwiOlwiMjAxNS0wNC0xMFwiLFwic3RhcnRcIjoxMC4yNSxcIm1heFwiOjEwLjUsXCJtaW5cIjoxMCxcImVuZFwiOjEwLjI4LFwidm9sdW1uXCI6MjU2NS42NCxcIm1vbmV5XCI6MjYzMzcuODF9LHtcInRpbWVcIjpcIjIwMTUtMDQtMDlcIixcInN0YXJ0XCI6OS43OCxcIm1heFwiOjEwLjQ4LFwibWluXCI6OS41OCxcImVuZFwiOjEwLjIyLFwidm9sdW1uXCI6NDMxNi44NixcIm1vbmV5XCI6NDM2NDcuMzN9LHtcInRpbWVcIjpcIjIwMTUtMDQtMDhcIixcInN0YXJ0XCI6OS40NixcIm1heFwiOjkuODYsXCJtaW5cIjo5LjAyLFwiZW5kXCI6OS43OCxcInZvbHVtblwiOjM2ODMuNDMsXCJtb25leVwiOjM0NjY0LjY2fSx7XCJ0aW1lXCI6XCIyMDE1LTA0LTA3XCIsXCJzdGFydFwiOjkuNTMsXCJtYXhcIjo5Ljg3LFwibWluXCI6OS4zOCxcImVuZFwiOjkuNDQsXCJ2b2x1bW5cIjozODc0LjA2LFwibW9uZXlcIjozNzA3Ni43OX0se1widGltZVwiOlwiMjAxNS0wNC0wM1wiLFwic3RhcnRcIjo4LjYsXCJtYXhcIjo5LjQ4LFwibWluXCI6OC40LFwiZW5kXCI6OS40OCxcInZvbHVtblwiOjM3NjAuNzgsXCJtb25leVwiOjM0MzYxLjI4fSx7XCJ0aW1lXCI6XCIyMDE1LTA0LTAyXCIsXCJzdGFydFwiOjguNDUsXCJtYXhcIjo4Ljc0LFwibWluXCI6OC4xOCxcImVuZFwiOjguNjIsXCJ2b2x1bW5cIjozMDc2LjgzLFwibW9uZXlcIjoyNjExMi45OH0se1widGltZVwiOlwiMjAxNS0wNC0wMVwiLFwic3RhcnRcIjo4LjE2LFwibWF4XCI6OC42MSxcIm1pblwiOjguMDYsXCJlbmRcIjo4LjQ1LFwidm9sdW1uXCI6MjM5Ni44OSxcIm1vbmV5XCI6MjAwMDAuODh9LHtcInRpbWVcIjpcIjIwMTUtMDMtMzFcIixcInN0YXJ0XCI6OC4xOCxcIm1heFwiOjguNSxcIm1pblwiOjguMTMsXCJlbmRcIjo4LjE2LFwidm9sdW1uXCI6MTkzOCxcIm1vbmV5XCI6MTU5ODkuMzN9LHtcInRpbWVcIjpcIjIwMTUtMDMtMzBcIixcInN0YXJ0XCI6OC4yLFwibWF4XCI6OC41MyxcIm1pblwiOjguMTEsXCJlbmRcIjo4LjI2LFwidm9sdW1uXCI6MjgyMC43OSxcIm1vbmV5XCI6MjM1MzIuOTl9LHtcInRpbWVcIjpcIjIwMTUtMDMtMjdcIixcInN0YXJ0XCI6OC40LFwibWF4XCI6OC40LFwibWluXCI6OC4wMSxcImVuZFwiOjguMjgsXCJ2b2x1bW5cIjo0NjM0LjU3LFwibW9uZXlcIjozODAzMi42OH0se1widGltZVwiOlwiMjAxNS0wMy0yNlwiLFwic3RhcnRcIjo3LjM5LFwibWF4XCI6OC4xMixcIm1pblwiOjcuMzIsXCJlbmRcIjo4LjEyLFwidm9sdW1uXCI6NDIwOS4yOSxcIm1vbmV5XCI6MzM2NDMuMDN9LHtcInRpbWVcIjpcIjIwMTUtMDMtMjVcIixcInN0YXJ0XCI6Ny4zNixcIm1heFwiOjcuNixcIm1pblwiOjcuMixcImVuZFwiOjcuMzgsXCJ2b2x1bW5cIjoxODQ1LjQ5LFwibW9uZXlcIjoxMzU1MC4yMX0se1widGltZVwiOlwiMjAxNS0wMy0yNFwiLFwic3RhcnRcIjo3LjYyLFwibWF4XCI6Ny42MixcIm1pblwiOjcuMixcImVuZFwiOjcuMzUsXCJ2b2x1bW5cIjoyMjY0LjUsXCJtb25leVwiOjE2Njk5LjV9LHtcInRpbWVcIjpcIjIwMTUtMDMtMjNcIixcInN0YXJ0XCI6Ny41NCxcIm1heFwiOjcuNjgsXCJtaW5cIjo3LjQ2LFwiZW5kXCI6Ny41OSxcInZvbHVtblwiOjE4MzQuMjgsXCJtb25leVwiOjEzODU1LjQxfSx7XCJ0aW1lXCI6XCIyMDE1LTAzLTIwXCIsXCJzdGFydFwiOjcuMzMsXCJtYXhcIjo3LjY1LFwibWluXCI6Ny4yNSxcImVuZFwiOjcuNTUsXCJ2b2x1bW5cIjoyNDcwLjcxLFwibW9uZXlcIjoxODU4OC4xM30se1widGltZVwiOlwiMjAxNS0wMy0xOVwiLFwic3RhcnRcIjo3LjM4LFwibWF4XCI6Ny42NixcIm1pblwiOjcuMjYsXCJlbmRcIjo3LjM3LFwidm9sdW1uXCI6MjQ1MC41NCxcIm1vbmV5XCI6MTgyNDcuODJ9LHtcInRpbWVcIjpcIjIwMTUtMDMtMThcIixcInN0YXJ0XCI6Ny4xMixcIm1heFwiOjcuNDYsXCJtaW5cIjo3LjEsXCJlbmRcIjo3LjM3LFwidm9sdW1uXCI6Mjg1NC40LFwibW9uZXlcIjoyMDgyOC44OH0se1widGltZVwiOlwiMjAxNS0wMy0xN1wiLFwic3RhcnRcIjo2Ljk1LFwibWF4XCI6Ny4xMyxcIm1pblwiOjYuODcsXCJlbmRcIjo3LjA5LFwidm9sdW1uXCI6MjQ1Ny4xMyxcIm1vbmV5XCI6MTcxNjIuNTV9LHtcInRpbWVcIjpcIjIwMTUtMDMtMTZcIixcInN0YXJ0XCI6Ni44LFwibWF4XCI6Ny4wNixcIm1pblwiOjYuNzksXCJlbmRcIjo2Ljk1LFwidm9sdW1uXCI6MTg1OC43OCxcIm1vbmV5XCI6MTI5MjQuMjF9LHtcInRpbWVcIjpcIjIwMTUtMDMtMTNcIixcInN0YXJ0XCI6Ni44NSxcIm1heFwiOjYuOTMsXCJtaW5cIjo2LjY5LFwiZW5kXCI6Ni43OSxcInZvbHVtblwiOjExNjcuMDYsXCJtb25leVwiOjc5MDkuNjR9LHtcInRpbWVcIjpcIjIwMTUtMDMtMTJcIixcInN0YXJ0XCI6Ni44NCxcIm1heFwiOjcuMDYsXCJtaW5cIjo2LjcxLFwiZW5kXCI6Ni44NSxcInZvbHVtblwiOjIxNTIuODUsXCJtb25leVwiOjE0ODM1LjQxfSx7XCJ0aW1lXCI6XCIyMDE1LTAzLTExXCIsXCJzdGFydFwiOjYuOTgsXCJtYXhcIjo3LjA0LFwibWluXCI6Ni43NyxcImVuZFwiOjYuODQsXCJ2b2x1bW5cIjoxNDQ1Ljc3LFwibW9uZXlcIjo5ODg2LjUzfSx7XCJ0aW1lXCI6XCIyMDE1LTAzLTEwXCIsXCJzdGFydFwiOjYuNzMsXCJtYXhcIjo2Ljk5LFwibWluXCI6Ni43LFwiZW5kXCI6Ni45NyxcInZvbHVtblwiOjE5OTkuOTMsXCJtb25leVwiOjEzNzcwLjM3fSx7XCJ0aW1lXCI6XCIyMDE1LTAzLTA5XCIsXCJzdGFydFwiOjYuNTksXCJtYXhcIjo2Ljg4LFwibWluXCI6Ni40LFwiZW5kXCI6Ni43MixcInZvbHVtblwiOjIyNDMuMSxcIm1vbmV5XCI6MTQ5NTEuMX0se1widGltZVwiOlwiMjAxNS0wMy0wNlwiLFwic3RhcnRcIjo2LjQ3LFwibWF4XCI6Ni42LFwibWluXCI6Ni4zNSxcImVuZFwiOjYuNSxcInZvbHVtblwiOjEyNzAuNDksXCJtb25leVwiOjgyMjkuOTZ9LHtcInRpbWVcIjpcIjIwMTUtMDMtMDVcIixcInN0YXJ0XCI6Ni40MyxcIm1heFwiOjYuNTQsXCJtaW5cIjo2LjM0LFwiZW5kXCI6Ni40NyxcInZvbHVtblwiOjEzNjMuMDksXCJtb25leVwiOjg3ODkuNDV9LHtcInRpbWVcIjpcIjIwMTUtMDMtMDRcIixcInN0YXJ0XCI6Ni4zNSxcIm1heFwiOjYuNDUsXCJtaW5cIjo2LjMyLFwiZW5kXCI6Ni40MSxcInZvbHVtblwiOjEyOTUuNDIsXCJtb25leVwiOjgyNjUuNjN9LHtcInRpbWVcIjpcIjIwMTUtMDMtMDNcIixcInN0YXJ0XCI6Ni4xNixcIm1heFwiOjYuNDcsXCJtaW5cIjo2LjA3LFwiZW5kXCI6Ni40MixcInZvbHVtblwiOjIyNjYuODIsXCJtb25leVwiOjE0MjE0Ljc5fSx7XCJ0aW1lXCI6XCIyMDE1LTAzLTAyXCIsXCJzdGFydFwiOjYuMjIsXCJtYXhcIjo2LjI1LFwibWluXCI6Ni4wNyxcImVuZFwiOjYuMTcsXCJ2b2x1bW5cIjoxMjc3Ljg4LFwibW9uZXlcIjo3ODUwLjM0fSx7XCJ0aW1lXCI6XCIyMDE1LTAyLTI3XCIsXCJzdGFydFwiOjYuMTYsXCJtYXhcIjo2LjMzLFwibWluXCI6Ni4xNSxcImVuZFwiOjYuMTksXCJ2b2x1bW5cIjo5MDguOTgsXCJtb25leVwiOjU2NjMuNzR9LHtcInRpbWVcIjpcIjIwMTUtMDItMjZcIixcInN0YXJ0XCI6Ni4xMixcIm1heFwiOjYuMTgsXCJtaW5cIjo2LjEsXCJlbmRcIjo2LjE2LFwidm9sdW1uXCI6NzAzLjcyLFwibW9uZXlcIjo0MzI4LjU2fSx7XCJ0aW1lXCI6XCIyMDE1LTAyLTI1XCIsXCJzdGFydFwiOjYuMDksXCJtYXhcIjo2LjE4LFwibWluXCI6Ni4wMyxcImVuZFwiOjYuMTIsXCJ2b2x1bW5cIjo3NjYuNTYsXCJtb25leVwiOjQ2NzguNzN9LHtcInRpbWVcIjpcIjIwMTUtMDItMTdcIixcInN0YXJ0XCI6Ni4xMSxcIm1heFwiOjYuMTUsXCJtaW5cIjo2LjA2LFwiZW5kXCI6Ni4wOCxcInZvbHVtblwiOjc2Ni43MyxcIm1vbmV5XCI6NDY3Ny4zMX0se1widGltZVwiOlwiMjAxNS0wMi0xNlwiLFwic3RhcnRcIjo2LjAzLFwibWF4XCI6Ni4xNCxcIm1pblwiOjYuMDEsXCJlbmRcIjo2LjExLFwidm9sdW1uXCI6ODE0LjcxLFwibW9uZXlcIjo0OTQ4LjMzfSx7XCJ0aW1lXCI6XCIyMDE1LTAyLTEzXCIsXCJzdGFydFwiOjUuOTgsXCJtYXhcIjo2LjM0LFwibWluXCI6NS45MyxcImVuZFwiOjYuMDgsXCJ2b2x1bW5cIjoxOTkyLjU2LFwibW9uZXlcIjoxMjEzNS4wMX0se1widGltZVwiOlwiMjAxNS0wMi0xMlwiLFwic3RhcnRcIjo1LjcyLFwibWF4XCI6Ni4xLFwibWluXCI6NS42NixcImVuZFwiOjYuMDEsXCJ2b2x1bW5cIjoyNTcyLjM4LFwibW9uZXlcIjoxNTMxMi43M30se1widGltZVwiOlwiMjAxNS0wMi0xMVwiLFwic3RhcnRcIjo1LjY5LFwibWF4XCI6NS43NyxcIm1pblwiOjUuNjcsXCJlbmRcIjo1LjcyLFwidm9sdW1uXCI6NjAyLjY2LFwibW9uZXlcIjozNDQzLjk5fSx7XCJ0aW1lXCI6XCIyMDE1LTAyLTEwXCIsXCJzdGFydFwiOjUuNDYsXCJtYXhcIjo1Ljc1LFwibWluXCI6NS40MyxcImVuZFwiOjUuNzMsXCJ2b2x1bW5cIjoxMjk4LjYzLFwibW9uZXlcIjo3MzA3LjQyfSx7XCJ0aW1lXCI6XCIyMDE1LTAyLTA5XCIsXCJzdGFydFwiOjUuNTksXCJtYXhcIjo1LjU5LFwibWluXCI6NS40NyxcImVuZFwiOjUuNDgsXCJ2b2x1bW5cIjo0MzUuOTgsXCJtb25leVwiOjI0MTAuMDl9LHtcInRpbWVcIjpcIjIwMTUtMDItMDZcIixcInN0YXJ0XCI6NS41LFwibWF4XCI6NS42MixcIm1pblwiOjUuNDgsXCJlbmRcIjo1LjYxLFwidm9sdW1uXCI6NjMwLjYsXCJtb25leVwiOjM0OTAuMTN9LHtcInRpbWVcIjpcIjIwMTUtMDItMDVcIixcInN0YXJ0XCI6NS41OCxcIm1heFwiOjUuNTksXCJtaW5cIjo1LjQ3LFwiZW5kXCI6NS40OCxcInZvbHVtblwiOjYzNi43LFwibW9uZXlcIjozNTIxLjg5fSx7XCJ0aW1lXCI6XCIyMDE1LTAyLTA0XCIsXCJzdGFydFwiOjUuNjMsXCJtYXhcIjo1LjY3LFwibWluXCI6NS41MixcImVuZFwiOjUuNTIsXCJ2b2x1bW5cIjo2MzUuMzgsXCJtb25leVwiOjM1NDguOTZ9LHtcInRpbWVcIjpcIjIwMTUtMDItMDNcIixcInN0YXJ0XCI6NS42MyxcIm1heFwiOjUuNjcsXCJtaW5cIjo1LjU2LFwiZW5kXCI6NS42NSxcInZvbHVtblwiOjQzNC4zNCxcIm1vbmV5XCI6MjQzOS4wOH0se1widGltZVwiOlwiMjAxNS0wMi0wMlwiLFwic3RhcnRcIjo1LjU1LFwibWF4XCI6NS42NSxcIm1pblwiOjUuNTEsXCJlbmRcIjo1LjYxLFwidm9sdW1uXCI6MzM4LjcxLFwibW9uZXlcIjoxODk2LjAxfSx7XCJ0aW1lXCI6XCIyMDE1LTAxLTMwXCIsXCJzdGFydFwiOjUuNzgsXCJtYXhcIjo1Ljg1LFwibWluXCI6NS42LFwiZW5kXCI6NS42NSxcInZvbHVtblwiOjU3NC43NCxcIm1vbmV5XCI6MzI3MC4yNX0se1widGltZVwiOlwiMjAxNS0wMS0yOVwiLFwic3RhcnRcIjo1LjgsXCJtYXhcIjo1Ljg3LFwibWluXCI6NS43NCxcImVuZFwiOjUuNzgsXCJ2b2x1bW5cIjo2MDUuNTUsXCJtb25leVwiOjM1MTYuMTR9LHtcInRpbWVcIjpcIjIwMTUtMDEtMjhcIixcInN0YXJ0XCI6NS44OSxcIm1heFwiOjUuOTUsXCJtaW5cIjo1LjgyLFwiZW5kXCI6NS44NSxcInZvbHVtblwiOjY1My40NyxcIm1vbmV5XCI6Mzg0Ni41Mn0se1widGltZVwiOlwiMjAxNS0wMS0yN1wiLFwic3RhcnRcIjo1LjcyLFwibWF4XCI6NS45NCxcIm1pblwiOjUuNyxcImVuZFwiOjUuODksXCJ2b2x1bW5cIjoxMzk4Ljg0LFwibW9uZXlcIjo4MTk0LjE4fSx7XCJ0aW1lXCI6XCIyMDE1LTAxLTI2XCIsXCJzdGFydFwiOjUuNjUsXCJtYXhcIjo1LjczLFwibWluXCI6NS41OCxcImVuZFwiOjUuNzIsXCJ2b2x1bW5cIjo5MzAuMTksXCJtb25leVwiOjUyNDcuMDF9LHtcInRpbWVcIjpcIjIwMTUtMDEtMjNcIixcInN0YXJ0XCI6NS42OCxcIm1heFwiOjUuNzIsXCJtaW5cIjo1LjYsXCJlbmRcIjo1LjYyLFwidm9sdW1uXCI6NzU4LjEzLFwibW9uZXlcIjo0Mjg0Ljh9LHtcInRpbWVcIjpcIjIwMTUtMDEtMjJcIixcInN0YXJ0XCI6NS40OSxcIm1heFwiOjUuNzgsXCJtaW5cIjo1LjQxLFwiZW5kXCI6NS43MSxcInZvbHVtblwiOjExMzkuOTQsXCJtb25leVwiOjYzODYuMTF9LHtcInRpbWVcIjpcIjIwMTUtMDEtMjFcIixcInN0YXJ0XCI6NS4zNixcIm1heFwiOjUuNTgsXCJtaW5cIjo1LjMzLFwiZW5kXCI6NS41NSxcInZvbHVtblwiOjcwMS4xMSxcIm1vbmV5XCI6Mzg0MC44NH0se1widGltZVwiOlwiMjAxNS0wMS0yMFwiLFwic3RhcnRcIjo1LjIzLFwibWF4XCI6NS4zNSxcIm1pblwiOjUuMjIsXCJlbmRcIjo1LjMzLFwidm9sdW1uXCI6ODE3Ljk3LFwibW9uZXlcIjo0MzI2LjQ3fSx7XCJ0aW1lXCI6XCIyMDE1LTAxLTE5XCIsXCJzdGFydFwiOjUuNixcIm1heFwiOjUuNjcsXCJtaW5cIjo1LjEyLFwiZW5kXCI6NS4xNixcInZvbHVtblwiOjEyNDguODIsXCJtb25leVwiOjY2NjkuOTZ9LHtcInRpbWVcIjpcIjIwMTUtMDEtMTZcIixcInN0YXJ0XCI6NS42NyxcIm1heFwiOjUuNzMsXCJtaW5cIjo1LjY2LFwiZW5kXCI6NS42OSxcInZvbHVtblwiOjM5OS41NCxcIm1vbmV5XCI6MjI3NC45NH0se1widGltZVwiOlwiMjAxNS0wMS0xNVwiLFwic3RhcnRcIjo1LjYsXCJtYXhcIjo1LjY3LFwibWluXCI6NS41NyxcImVuZFwiOjUuNjcsXCJ2b2x1bW5cIjozNjEuMjgsXCJtb25leVwiOjIwMzEuNjZ9LHtcInRpbWVcIjpcIjIwMTUtMDEtMTRcIixcInN0YXJ0XCI6NS42MixcIm1heFwiOjUuNjksXCJtaW5cIjo1LjYxLFwiZW5kXCI6NS42MixcInZvbHVtblwiOjMyMS4yNyxcIm1vbmV5XCI6MTgxMi45M30se1widGltZVwiOlwiMjAxNS0wMS0xM1wiLFwic3RhcnRcIjo1LjY0LFwibWF4XCI6NS43MSxcIm1pblwiOjUuNTgsXCJlbmRcIjo1LjY1LFwidm9sdW1uXCI6Mzc1LjM1LFwibW9uZXlcIjoyMTIwLjg3fSx7XCJ0aW1lXCI6XCIyMDE1LTAxLTEyXCIsXCJzdGFydFwiOjUuNzksXCJtYXhcIjo1Ljc5LFwibWluXCI6NS41OCxcImVuZFwiOjUuNixcInZvbHVtblwiOjUxNi4xOSxcIm1vbmV5XCI6MjkyMS4wNX0se1widGltZVwiOlwiMjAxNS0wMS0wOVwiLFwic3RhcnRcIjo1Ljk1LFwibWF4XCI6NS45NyxcIm1pblwiOjUuOCxcImVuZFwiOjUuODIsXCJ2b2x1bW5cIjo3MDEuMzksXCJtb25leVwiOjQxMjMuNX0se1widGltZVwiOlwiMjAxNS0wMS0wOFwiLFwic3RhcnRcIjo1Ljk1LFwibWF4XCI6Ni4wNixcIm1pblwiOjUuOTEsXCJlbmRcIjo1Ljk3LFwidm9sdW1uXCI6Njc2Ljc1LFwibW9uZXlcIjo0MDU2LjEyfSx7XCJ0aW1lXCI6XCIyMDE1LTAxLTA3XCIsXCJzdGFydFwiOjYsXCJtYXhcIjo2LjA0LFwibWluXCI6NS45MixcImVuZFwiOjUuOTYsXCJ2b2x1bW5cIjo1NDYuOTMsXCJtb25leVwiOjMyNjcuMTZ9LHtcInRpbWVcIjpcIjIwMTUtMDEtMDZcIixcInN0YXJ0XCI6NS44OSxcIm1heFwiOjYuMDksXCJtaW5cIjo1Ljg0LFwiZW5kXCI6Ni4wNyxcInZvbHVtblwiOjExNjkuMyxcIm1vbmV5XCI6Njk4MC40OH0se1widGltZVwiOlwiMjAxNS0wMS0wNVwiLFwic3RhcnRcIjo1Ljg5LFwibWF4XCI6NixcIm1pblwiOjUuNzUsXCJlbmRcIjo1Ljk0LFwidm9sdW1uXCI6ODA2LjEsXCJtb25leVwiOjQ3NTEuMTV9XVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9leGFtcGxlcy9jYW5kbGVTdGlja3MuanNvblxuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQTdCQTtBQWlDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFWQTtBQTdEQTtBQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7O0FBRUE7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzV0E7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=