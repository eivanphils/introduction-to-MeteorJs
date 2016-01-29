if(Meteor.isServer){
    Meteor.startup(function(){
        if(Images.find().count() == 0){
            for(var i=0; i<9; i++){
                Images.insert(
                    {
                    img_src: "image_"+i+".png",
                    img_alt: "imagen de meteor"+i
                    }
                );
            }//end of for loop
            console.log("Imagenes registradas: "+i);
        }//enf if of

    });
}
