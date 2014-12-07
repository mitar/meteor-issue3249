if (Meteor.isClient) {
  Template.body.helpers({
    documents: function () {
      return {level1: [{level2: [{foo: 'bar'}]}]};
    }
  });

  Template.hello.helpers({
    commonHelper1: function () {
      return EJSON.stringify(Template.currentData());
    },
    commonHelper2: function () {
      return EJSON.stringify(Blaze.getData(Template.instance().view));
    }
  });

  Template.hello.events({
    'click button': function () {
      alert(EJSON.stringify(Template.currentData()));
    }
  });
}
