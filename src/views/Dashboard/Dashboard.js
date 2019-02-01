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
      <Card show="news" title={stats.news.title} help={stats.news.help}>
        {stats.news.value} { stats.news.link && <a href="{stats.news.link}">Show me more</a> }
      </Card>
    </section>
    <section>
      <Card title={stats.keywords.title} help={stats.keywords.help} notes={stats.keywords.notes}>
        <DefList show="list">
          {stats.keywords.value}
        </DefList>
      </Card>
    </section>
    <section>
      <Card title={stats.entities.title} help={stats.entities.help}>
        <DefList show="chart" max={stats.entities.max}>
          {stats.entities.value}
        </DefList>
      </Card>
    </section>
    <section>
      <Card title={stats.enrich.title} help={stats.enrich.help}>
        <DefList show="compact">
          {stats.enrich.value}
        </DefList>
      </Card>
      <Card title={stats.vocabulary.title} help={stats.vocabulary.help}>
        <DefList show="compact">
          {stats.vocabulary.value}
        </DefList>
      </Card>
      <Card title={stats.pimp.title} help={stats.pimp.help}>
        <DefList show="compact">
          {stats.pimp.value}
        </DefList>
      </Card>
    </section>
    <section>
      <Card title={stats.triples.title} help={stats.triples.help}>
        <DefList show="chart" max={stats.triples.max}>
          {stats.triples.value}
        </DefList>
      </Card>
    </section>
  </article>
);

export default Dashboard;
