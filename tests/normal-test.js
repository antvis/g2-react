const expect = require('expect.js');
const React = require('react');
const ReactDOM = require('react-dom');
const createG2 = require('..');

describe('g2-react', function () {
  const div = document.createElement('div');
  document.body.appendChild(div);

  it('chart should render successfully', () => {
    const Chart = createG2(chart => {
      chart.line().position('genre*sold').color('blue');
      chart.render();
    });

    const g2Chart = ReactDOM.render(<Chart
      width = {400}
      height = {250}
      data = {[
        { genre: 'Sports', sold: 27500 },
        { genre: 'Strategy', sold: 11500 },
        { genre: 'Action', sold: 6000 },
        { genre: 'Shooter', sold: 3500 },
        { genre: 'Other', sold: 1500 },
      ]}
    />, div);
    expect(g2Chart.chartId).to.be('rc-g2-0');
  });
});
