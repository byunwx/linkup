$(document).ready(function () {

  // click to open and close Modal


  $(".add-link-button").click(function() {
    $(".newLink-box").show();
  })


  $(document).on("click",".delete-btn",function(){
    deleteLink($(this).attr("data-linkID"))
  })

  $("#edit-profile").click(function(){
    $(".profile-box").show();
  })


  $("#new-link-submit").click(function(){
    $(".newLink-box").hide();
  })
  $("profile-submit").click(function(){
    $(".profile-box").hide();
  })
  $(".close-btn").click(function(){
    $(".newLink-box").hide();
    $(".profile-box").hide();
  })

$(".target_home").on("click", function(){
  console.log("home");
  window.location.href = `/home`;
});

$(".target_search").on("click", function(){
  console.log("search");
  window.location.href = `/search`;
  });

$(".target_person").on("click", function(){
  console.log("person");

  $.get("/api/user/data",function(data){
    const ID=data.id;
    console.log(data);
    return window.location.href = `/user/${ID}`;
  });
})
});

$(".card").on("click", function(){
  let TC=$(this).data("totalclicks");
  let DC=$(this).data("dailyclicks");
  TC++
  DC++
  console.log("ajax click",TC, DC);
  var newPost = {
    totalClicks: TC,
    dailyClicks: DC,
    id: $(this).data("id")
  };
  $.ajax({
    method: "PUT",
    url: "/api/link/update",
    data: newPost
  })
    .then(function() {
      window.location.href = "/";
      console.log("ajax done");
    });
})
