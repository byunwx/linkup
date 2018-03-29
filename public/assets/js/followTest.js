let linkIDArr = $('#linkCards .follow-btn').map(function(){
    // create an array consisting of the id the button on card displayed on screen
    return this.id;
})
console.log(linkIDArr)
let testervar = "hellooooo"
function reRender(){
    $.get("/api/user/data", function(data) {
        //current user id
        let currentUser =data.id
        // console.log(currentUser);
        let followingArr = JSON.parse(data.array)
        //current user following array

        console.log(linkIDArr);
        for( var i = 0; i<linkIDArr.length; i++){
            //loop through each card on the page
            if ($(`#${linkIDArr[i]}`).attr("data-userID")==currentUser){
                //if the current user id = button user id
                $(`#${linkIDArr[i]}`).text("this is your post: delete?")
                $(`#${linkIDArr[i]}`).attr("class", "delete-btn btn-danger")
                // render the button as "this is your post" and change class to delete
                // will be used to call the delete function
            } else
            if(followingArr!==null && followingArr.following.includes($(`#${linkIDArr[i]}`).attr("data-userID"))){
                //if the current user is following a user with the id of the button
                $(`#${linkIDArr[i]}`).text("You Already Follow this user")
                $(`#${linkIDArr[i]}`).attr("class", "unfollow-btn btn-success")
                //render the button as "you already follow this post" and change class to unfollow
                //will be used to call the unfollow function
            }
        }
    })
}
reRender();

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
}// end of calltest function
function unfollow(followee){
    $.get("/api/user/data", function(data) {
        //update follower (current user)

            let arrTest=JSON.parse(data.array)
            console.log("this is the follower data")
            console.log(JSON.parse(data.array));
            console.log("======")

            let deleteThis = arrTest.following.indexOf(followee)
            arrTest.following.splice(deleteThis,1)
            var newPost = {
                array:JSON.stringify(arrTest)
                // stringify the arrays so they can be pushed back into the databse
            };
            newPost.id = data.id;
            // setting the ID so sequelize knows where to update
            updatePost(newPost);
            updateFollowee(followee,newPost.id)
        });
        function updateFollowee(followee,follower){
        // update the followee (user being followed)
            $.get("/api/user/"+followee, function(data){
                let arrTest=JSON.parse(data.array)
                console.log("this is the follower data")
                console.log(JSON.parse(data.array));
                console.log("======")

                let deleteThis= arrTest.followers.indexOf(follower)
                //find the index of the
                arrTest.followers.splice(deleteThis,1)
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
}//end of unfollow function
// follower put request
function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/user/follow",
      data: post
    })
      .then(function() {
        location.reload()
        console.log("followed")
      });
  }
function updateLink(post){
    $.ajax({
        method: "PUT",
        url:"/api/link/update",
        data: post
    })
    .then(function(){
        location.reload()
        console.log("updated")
    })
}
function deleteLink(post){
    $.ajax({
        method:"DELETE",
        url:"/api/link/delete",
        data:{id:post}
    })
    .then(function(){
        location.reload()
    })
}
//follow user
  $(document).on("click",".follow-btn", function(){
      callTest($(this).attr("data-userID"))
})
//unfollowfollow user
$(document).on("click",".unfollow-btn", function(){
    unfollow($(this).attr("data-userID"))
  })
