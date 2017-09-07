## code

```html
<div id="__react-content"></div>
```
```jsx
import createG2 from 'g2-react';
import { Stat, Frame } from 'g2';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from './top2000.json';

const Line = createG2(chart => {
  chart.setMode('select'); // 开启框选模式
  chart.select('rangeX'); // 设置 X 轴范围的框选
  chart.cols({ 
    '..count': {
      alias: 'top2000 唱片总量'
    },
    release: {
      tickInterval: 5,
      alias: '唱片发行年份'
    }
  });
  chart.interval().position(Stat.summary.count('release')).color('#e50000');
  chart.render();
  // 监听双击事件，这里用于复原图表
  chart.on('plotdblclick', function(ev) {
    chart.get('options').filters = {}; // 清空 filters
    chart.repaint();
  });
});

class MyComponent extends Component {
  state = {
    data: Frame.sort(new Frame(data), 'release') ,
    width: 500,
    forceFit: true,
    height: 450,
    plotCfg: {
      margin: [20, 60, 80, 120]
    },
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          forceFit={this.state.forceFit}
          plotCfg={this.state.plotCfg}
        />
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('__react-content'));
```


## Description

- simple example for line chart
- change data by state
