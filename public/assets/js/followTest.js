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
  $("#follow").on("click", function(){
      callTest(2)
  })
function callTest(followee){
    console.log("test")
    //update follower (current user)
    $.get("/api/user/data", function(data) {
        let arrTest={}
        console.log("this is the follower data")
        console.log(JSON.parse(data.array));
        console.log("======")
        if (data.array){
        arrTest=JSON.parse(data.array)
        } else {
            arrTest = {
                following:[],
                followers:[]
            }
        }//end of JSON Parse if else
        if(arrTest.following.includes(followee)){
            console.log("you already follow this user")
            return
        }else{
        arrTest.following.push(followee)
        var newPost = {
            array:JSON.stringify(arrTest)
        };
        newPost.id = data.id;
        updatePost(newPost);  
        updateFollowee(followee,newPost.id)    
        }
    });
    // update the followee (user being followed)
    function updateFollowee(followee,follower){
        $.get("/api/user/"+followee, function(data){
            let arrTest={}
            console.log("this is the followee data")
            console.log(JSON.parse(data.array));
            console.log("=======")
            if(data.array){
                arrTest=JSON.parse(data.array)
            }else {
                arrTest={
                    following:[],
                    followers:[]
                }
            }
            arrTest.followers.push(follower)
            var newPost = {
                array: JSON.stringify(arrTest)
            };
            newPost.id =followee
            updatePost(newPost)
        })
    }
}