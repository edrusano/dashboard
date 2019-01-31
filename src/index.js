import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './css/wp-admin.css';
import './css/dashicons.css';
import './css/wordlift-reloaded.css';
import Dashboard from './views/Dashboard';
import * as serviceWorker from './serviceWorker';

const stats = {
  news: {
    title: "Today's tip",
    value: "The Apology of Socrates, by Plato"
  },
  keywords: {
    title: "Search rankings",
    value: [
      { title: "Keyword:", value: 230 },
      { title: "Average position:", value: 1234 }
    ]
  },
  entities: {
    title: "Top entities",
    value: [
      { title: "Senato della republica", value: 35 },
      { title: "Errore mio", value: 1234 }
    ]
  },
  enrich: {
    title: "Posts enriched",
    value: [
      { title: "Enrich", value: 122, max: 123 },
    ]
  },
  vocabulary: {
    title: "Entities created",
    value: [
      { title: "Vocabulary ", value: 21356 },
    ]
  },
  pimp: {
    title: "Average entity rating",
    value: [
      { title: "Pimp", value: 72, max: 100 },
    ]
  },
  triples: {
    title: "Graph data",
    value: [
      { title: "Triples created", value: 2340 },
      { title: "Ratio on wikidata", value: 0.002 }
    ]
  },
};

ReactDOM.render(<Dashboard stats={stats} />,
  document.querySelector('#wordlift-dashboard-react-widget .inside'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
