/**
 * Components: DefList.
 *
 * @since 3.20.0
 */
import React from 'react';
import BarChart from './../../components/BarChart';

const DefList = ({
  show,
  max,
  children
}) => (
  <dl className={'wl-deflist-' + show}>
  { children && children.map((stat, index) => (
    <React.Fragment>
    <dt key={index}>{stat.title}</dt>
    <dd key={index}>{ (show === 'chart') ? (
      <BarChart max={max}>{stat.value}</BarChart>
    ) : (
      <React.Fragment>
      <em>{stat.value}</em>{ stat.max && 
        <React.Fragment> /{stat.max}</React.Fragment>
      }
      </React.Fragment>
    )}
    </dd>
    </React.Fragment>
  ))}
  </dl>
);

export default DefList;