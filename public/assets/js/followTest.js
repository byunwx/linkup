let linkIDArr = $('#linkCards .follow-btn').map(function(){
    return this.id;
})
function reRender(){
    $.get("/api/user/data", function(data) {
        //current user id
        let currentUser =data.id
        console.log(currentUser);
        //current user following array
        let followingArr = JSON.parse(data.array)
        console.log(followingArr)

        // .get();
        console.log(linkIDArr);
        for( var i = 0; i<linkIDArr.length; i++){
            if ($(`#${linkIDArr[i]}`).attr("data-userID")==currentUser){
                console.log("condintional true")
                $(`#${linkIDArr[i]}`).text("this is you")
                $(`#${linkIDArr[i]}`).attr("class", "edit")
                
            } else if(followingArr!==null && followingArr.following.includes($(`#${linkIDArr[i]}`).attr("data-userID")))
            {
                $(`#${linkIDArr[i]}`).text("You Already Follow this user")
                $(`#${linkIDArr[i]}`).attr("class", "unfollow")
                
            }
            console.log($(`#${linkIDArr[i]}`).attr("data-userID"))
        }
        
    })    
}
reRender();
function callTest(followee){
    console.log("test")
    // console.log($(this.text())
    // if($(this).text() !== "Follow User"){
    //     return
    // }
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
        if(followee==data.id){
            console.log("you cannot follow yourself")
            return

        }
        if(arrTest.following.includes(followee)){
            // if the array already includes the id of the user you are trying to follow
            // stop the function
            console.log("you already follow this user")
            return
        }//else{
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
        //}
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
  $(document).on("click",".follow-btn", function(){
      callTest($(this).attr("data-userID"))

      // this will be adjusted to call the function with this.data.id or something
  })