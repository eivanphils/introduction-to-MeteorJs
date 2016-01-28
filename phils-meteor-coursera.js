Images = new Mongo.Collection("images");
console.log(Images.find().count());

if (Meteor.isClient) {
  var img_data = [
  {
    img_src: "meteor.png",
    img_alt: "imagen de meteor"
  },
  {
    img_src: "node.png",
    img_alt: "imagen de node"
  },
  {
    img_src: "mongodb.png",
    img_alt: "imagen de mongodb"
  }
  ];

  Template.images.helpers({images:img_data});

  Template.images.events({
    'mouseenter .js-image': function(event){
      $(event.target).css("width", "50px");
    }
  });
}

if (Meteor.isServer) {
  console.log("i am the server");
}
