$(document).ready(function () {

  // click to open and close Modal


  $(".add-link-button").click(function() {
    $(".newLink-box").show();
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
$("#categoryUser").change(function(){
  $("select option:selected").each(function(){
    const x = document.getElementById("categoryUser").selectedIndex;
    const categoryValue = document.getElementsByTagName("option")[x].value;
    console.log("adfasdfasdf",categoryValue);
    let search={
      where:{
        category: categoryValue
      },
      order:[
        ["totalClicks", "DESC"]
      ]
    }
    if(categoryValue=="all"){
      search={
        order:[
          ["totalClicks", "DESC"]
        ]
      }
    }
    $.post("/api/link/search", search).then(data=>{
      console.log("helloloolollo",data)
    });
  })
})
});
