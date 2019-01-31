/**
 * Views: Dashboard.
 *
 * @since 3.20.0
 */
import './Dashboard.scss';
import React from 'react';
import Card from './../../components/Card';
import DefList from './../../components/DefList';

const Dashboard = ({
  stats
}) => (
  <article class="wl-dashboard">
    <section>
      <Card show="news" title={stats.news.title}>
        {stats.news.value}
      </Card>
    </section>
    <section>
      <Card title={stats.keywords.title} icons={true}>
        <DefList show="list">
          {stats.keywords.value}
        </DefList>
      </Card>
    </section>
    <section>
      <Card title={stats.entities.title}>
        <DefList show="chart" max={stats.entities.max}>
          {stats.entities.value}
        </DefList>
      </Card>
    </section>
    <section>
      <Card title={stats.enrich.title}>
        <DefList show="compact">
          {stats.enrich.value}
        </DefList>
      </Card>
      <Card title={stats.vocabulary.title}>
        <DefList show="compact">
          {stats.vocabulary.value}
        </DefList>
      </Card>
      <Card title={stats.pimp.title}>
        <DefList show="compact">
          {stats.pimp.value}
        </DefList>
      </Card>
    </section>
    <section>
      <Card title={stats.triples.title}>
        <DefList show="chart">
          {stats.triples.value}
        </DefList>
      </Card>
    </section>
  </article>
);

export default Dashboard;
