/**
 * Components: BarChart.
 *
 * @since 3.20.0
 */
import React from 'react';

const BarChart = ({
  max,
  children
}) => (
  <React.Fragment>{ children.map((stat, index) => (
    <div key={index} style={ {width: 100*stat/max+'%'} } />
  ))}</React.Fragment>
);

export default BarChart;