/**
 * Components: BarChart.
 *
 * @since 3.20.0
 */
import React from 'react';

const BarChart = ({
  show,
  max,
  children
}) => (
  <React.Fragment>
  { children.map((stat, index) => (
    <React.Fragment>
    <div key={index} 
style=
{width:stat.value/max * 100+'%'} />
    </React.Fragment>
  ))}
  </React.Fragment>
);

export default BarChart;