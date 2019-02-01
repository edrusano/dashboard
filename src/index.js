import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './css/wp-admin.css';
import './css/dashicons.css';
import './css/wordlift-font-awesome.css';
import './css/wordlift-reloaded.css';
import Dashboard from './views/Dashboard';
import * as serviceWorker from './serviceWorker';

const stats = {
  news: {
    title: "Today's tip",
    link: "https://wordlift.io/blog/en/machine-learning-for-seo",
    value: "The Apology of Socrates, by Plato."
  },
  keywords: {
    title: "Search rankings",
    help: "http://docs.wordlift.it/en/latest/faq.html#what-is-content-enrichment",
    notes: [
      { icon: "IT.png", type: "country", label: "Italia" },
      { icon: "icon-woorank.svg", type: "woorank" }
    ],
    value: [
      { title: "Keyword:", value: 230 },
      { title: "Average position:", value: 1234 }
    ]
  },
  entities: {
    title: "Top entities",
    help: "http://docs.wordlift.it/en/latest/faq.html#what-is-content-enrichment",
    notes: [
      { type: "circle", label: "Link with entities" },
      { type: "circle", label: "Post with entities" }
    ],
    value: [
      { title: "Senato della republica", value: [35,15] },
      { title: "Errore mio", value: [10,36] },
      { title: "ISTAT", value: [20,20] },
      { title: "WordPress", value: [40,30] }
    ],
    max: 40
  },
  enrich: {
    title: "Posts enriched",
    help: "http://docs.wordlift.it/en/latest/faq.html#what-is-content-enrichment",
    value: [
      { title: "Enrich", value: 122, max: 123 },
    ]
  },
  vocabulary: {
    title: "Entities created",
    help: "http://docs.wordlift.it/en/latest/faq.html#what-factors-determine-the-rating-of-an-entity",
    value: [
      { title: "Vocabulary ", value: 21356 },
    ]
  },
  pimp: {
    title: "Average entity rating",
    help: "http://docs.wordlift.it/en/latest/faq.html#what-factors-determine-the-rating-of-an-entity",
    value: [
      { title: "Pimp", value: 72, max: 100 },
    ]
  },
  triples: {
    title: "Graph data",
    help: "http://docs.wordlift.it/en/latest/faq.html#what-is-a-triple",
    value: [
      { title: "Triples created", value: [2340] },
      { title: "Ratio on wikidata", value: [2] }
    ],
    max: 2340
  },
};

ReactDOM.render(<Dashboard stats={stats} />,
  document.querySelector('#wordlift-dashboard-react-widget .inside'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
