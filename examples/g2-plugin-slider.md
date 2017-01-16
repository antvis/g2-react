## code

```html
<div id="__react-content"></div>
<div id="range"></div>
```



```js
import createG2 from 'g2-react';
import G2, { Stat, Plugin, Frame } from 'g2';
import 'g2-plugin-slider';
import React from 'react';
import ReactDOM from 'react-dom';
import data from './candleSticks.json';

const MyComponent = React.createClass({

  getInitialState: function() {
    const frame = new Frame(data);
    frame.addCol('trend', function(obj) {
      return (obj.start <= obj.end) ? 0 : 1;
    });

    const Chart = createG2(chart => {
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
      chart.schema()
        .position('time*(start+end+max+min)')
        .color('trend', ['#2AF483', '#F80041'])
        .shape('candle')
        .tooltip('start*end*max*min*volumn');
      
      // 创建滑动条
      var slider = new Plugin.Slider({
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
      data: data,
      width: 500,
      height: 250,
      plotCfg: {
        margin: [30, 120, 30],
        background: {
          fill: '#191821'
        }
      },
      Chart: Chart,
    };
  },

  render: function() {
    return (
      <div>
        <this.state.Chart data={this.state.data} width={this.state.width} height={this.state.height} plotCfg={this.state.plotCfg} ref="myChart"/>
        <div id="range"></div>
      </div>
    );
  },
});

ReactDOM.render(<MyComponent />, document.getElementById('__react-content'));

```
