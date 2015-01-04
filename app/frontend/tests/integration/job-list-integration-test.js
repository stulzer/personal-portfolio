import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App, server;

module('An Integration test', {
  setup: function() {
    App = startApp();
    var jobs = [
      {
        id: 1,
        title: 'Bugs Bunny',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
      },
      {
        id: 2,
        title: 'Wile E. Coyote',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
      }
    ];

    server = new Pretender(function() {
      this.get('/jobs', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({jobs: jobs})];
      });

      this.get('/jobs/:id', function(request) {
        var job = jobs.find(function(job) {
          if (job.id === parseInt(request.params.id, 10)) {
            return job;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({job: job})];
      });
    });
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    server.shutdown();
  }
});

test('Page contents', function() {
  expect(4);

  visit('/');

  andThen(function() {
    equal(find('.jobs-list').length, 1, 'Page contains list of models');
    equal(find('.jobs-list .job').length, 2, 'List contains expected number of models');
    equal(find('.jobs-list .job:First').text(), 'Bugs Bunny', 'Shows the first job title');
    equal(find('.jobs-list .job:last').text(), 'Wile E. Coyote', 'Shows the last job title');
  });
});
