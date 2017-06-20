# g2-react

Factory wrapper for using [G2](http://g2.alipay.com) easier in a React Component with dynamic `data` and `size` props

*Note that `g2-react` is just a wrapper, if you want to make a better chart, `docs of G2` is [HERE](http://g2.alipay.com/)*

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/g2-react.svg?style=flat-square
[npm-url]: http://npmjs.org/package/g2-react
[download-image]: https://img.shields.io/npm/dm/g2-react.svg?style=flat-square
[download-url]: https://npmjs.org/package/g2-react

## Example

- [online example](https://antvis.github.io/g2-react)

- [local example](http://localhost:8989/)


## Install

```bash
$ npm install g2 --save
$ npm install g2-react --save
```

`g2-react` works with a [peerDependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) of `g2`, you can specify the version of `g2` in your `package.json`

## Usage

```js
import createG2 from 'g2-react';
import { Stat } from 'g2';

const Pie = createG2(chart => {
  chart.coord('theta');
  chart.intervalStack().position(Stat.summary.proportion()).color('cut');
  chart.render();
});

React.render(
  <Pie
    data={this.state.data}
    width={this.state.width}
    height={this.state.height}
    plotCfg={this.state.plotCfg}
    ref="myChart"
  />
);
```
Note that you can make a dynamic props wrap just like [higherWrapper demo](https://github.com/antvis/g2-react/blob/master/examples/higherWrapper.md)

## Props

See detail api of [g2](http://g2.alipay.com/api/)

<table class="table table-bordered table-striped">
  <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 100px;">default</th>
        <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>width</td>
      <td>number.isRequired</td>
      <td></td>
      <td>width of chart</td>
    </tr>
    <tr>
      <td>height</td>
      <td>number.isRequired</td>
      <td></td>
      <td>height of chart</td>
    </tr>
    <tr>
      <td>plotCfg</td>
      <td>object</td>
      <td></td>
      <td>config of chart, margin, border, backgroud...</td>
    </tr>
    <tr>
      <td>data</td>
      <td>arrayOf(object).isRequired</td>
      <td></td>
      <td>data source</td>
    </tr>
    <tr>
      <td>forceFit</td>
      <td>bool</td>
      <td>false</td>
      <td>if the width of chart autoFit with parent</td>
    </tr>
     <tr>
      <td>configs</td>
      <td>any</td>
      <td></td>
      <td>as arguments of createG2((chart, configs))</td>
    </tr>
  </tbody>
</table>


## Development

```bash
$ git clone git@github.com:antvis/g2-react.git
$ npm install
$ npm run doc
```

## License

g2-react is released under the MIT license.
