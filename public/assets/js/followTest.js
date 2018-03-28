function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/user/follow",
      data: post
    })
      .then(function() {
        window.location.href = "/home";
        console.log("updated")
      });
  }
  $(".follow").on("click", function(){
      callTest($(this).attr("data-userID"))
      // this will be adjusted to call the function with this.data.id or something
  })
function callTest(followee){
    console.log("test")
    $.get("/api/user/data", function(data) {
    //update follower (current user)
        let arrTest={}
        console.log("this is the follower data")
        console.log(JSON.parse(data.array));
        console.log("======")

        if (data.array){
            //if there is already data in the "arrays", parse it out
        arrTest=JSON.parse(data.array)
        } else {
            // if there is no data in the "arrays", set up empty arrays
            arrTest = {
                following:[],
                followers:[]
            }
        }//end of JSON Parse if else

        if(arrTest.following.includes(followee)){
            // if the array already includes the id of the user you are trying to follow
            // stop the function
            console.log("you already follow this user")
            return
        }else{
        arrTest.following.push(followee)
            //push the ID of the user you are trying to follow to the array 
        var newPost = {
            array:JSON.stringify(arrTest)
            // stringify the arrays so they can be pushed back into the databse
        };
        newPost.id = data.id;
        // setting the ID so sequelize knows where to update
        updatePost(newPost);  
        updateFollowee(followee,newPost.id)    
        }
    });
    function updateFollowee(followee,follower){
    // update the followee (user being followed)
        $.get("/api/user/"+followee, function(data){
            let arrTest={}
            console.log("this is the followee data")
            console.log(JSON.parse(data.array));
            console.log("=======")
            if(data.array){
                //if there is already data in the "arrays", parse it out
                arrTest=JSON.parse(data.array)
            }else {
            // if there is no data in the "arrays", set up empty arrays
                arrTest={
                    following:[],
                    followers:[]
                }
            }//end of JSON Parse if else
            arrTest.followers.push(follower)
            //push the ID of the user you are trying to follow to the array             
            var newPost = {
                array: JSON.stringify(arrTest)
                // stringify the arrays so they can be pushed back into the databse                
            };
            newPost.id =followee
            // setting the ID so sequelize knows where to update
            updatePost(newPost)
        })
    }
}