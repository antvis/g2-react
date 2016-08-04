## code

```html
<div id="__react-content"></div>
```
```jsx
import createG2 from 'g2-react';
import { Stat } from 'g2';
import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';

const Line = createG2(chart => {
  chart.line().position('time*price').color('name').shape('spline').size(2);
  chart.render();
});

const MyComponent = React.createClass({

  getInitialState() {
    return {
      data: data.slice(0, data.length / 2 - 1),
      width: 500,
      height: 250,
      plotCfg: {
        margin: [10, 100, 50, 120],
      },
    };
  },

  changeHandler() {
    this.setState({
      data: data.slice(data.length / 2, data.length - 1),
    });
  },

  render() {
    return (
      <div>
        <Line
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          plotCfg={this.state.plotCfg}
        />
        <button onClick={this.changeHandler}>Change Data</button>
      </div>
    );
  },
});

ReactDOM.render(<MyComponent />, document.getElementById('__react-content'));
```


## Description

- simple example for line chart
- change data by state