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
      callTest(1,2)
  })
function callTest(follower, followee){
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
    }
    arrTest.following.push(followee)
    var newPost = {
        array:JSON.stringify(arrTest)
    };
    newPost.id = follower;
    updatePost(newPost)      
    });
    // update the followee (user being followed)
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