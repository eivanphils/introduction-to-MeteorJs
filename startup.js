if(Meteor.isServer){
    Meteor.startup(function(){
        if(Images.find().count() == 0){
            Images.insert({
                img_src: "meteor.png",
                img_alt: "imagen de meteor"
            });
            Images.insert({
                img_src: "node.png",
                img_alt: "imagen de node"
            });
            Images.insert({
                img_src: "mongodb.png",
                img_alt: "imagen de mongodb"
            });
        }
    });
}
