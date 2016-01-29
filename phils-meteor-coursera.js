Images = new Mongo.Collection("images");

if (Meteor.isClient) {

//  Template.images.helpers({images:img_data});
    Template.images.helpers({images:
        Images.find({},{sort:{rating:1}})
    });

    Template.images.events({
        //event mouseenter change width to image
        'mouseenter .js-image': function(event){
            $(event.target).css("width", "50px");
        },
        //event click delete image by id
        'click .js-del-image': function(event){
            var image_id = this._id;
            console.log("Imagen id: "+image_id+" eliminada");
            $("#"+image_id).hide('slow', function(){
                Images.remove({"_id":image_id});
            })
        },
        'click .js-rating-image':function(event){
              var rating = $(event.currentTarget).data("userrating");
              console.log("log "+rating);
              var image_id = this.id;
              console.log(image_id);

              Images.update({_id:image_id},
                            {$set: {rating :rating}});
        }
    });
}
