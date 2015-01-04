import DS from 'ember-data';
import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('job', 'Job', {
  needs: []
});

test('it exists', function() {
  expect(1);

  var model = this.subject();
  ok(!!model);
});

test('Job a valid ember-data Model', function() {
  expect(2);

  var job = this.subject({
    title: 'A given title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing el',
    picture: '/path/to/picture.jpg'
  });

  ok(job);
  ok(job instanceof DS.Model);
});

test('it gets a title, a description and a picture path', function() {
  expect(3);

  var job = this.subject({
    title: 'A given title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing el',
    picture: '/path/to/picture.jpg'
  });

  equal(job.get('title'), 'A given title');
  equal(job.get('description'), 'Lorem ipsum dolor sit amet, consectetur adipisicing el');
  equal(job.get('picture'), '/path/to/picture.jpg');
});
