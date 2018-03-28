$.get("/api/user/data", function(data){
  let myCat=data.linkCategories.split(",");
  console.log(myCat);
  for (var i = 0; i < myCat.length; i++) {
    let newOption=$("<option>").attr("value", myCat[i]);
    newOption.text(myCat[i]);
    $("#catagoryUser").append(newOption);
  }
})
$("#catagoryUser").change(function(){
  $("select option:selected").each(function(){
    const x = document.getElementById("catagoryUser").selectedIndex;
    const catagoryValue = document.getElementsByTagName("option")[x].value;
    let name = window.location.href;
    let thing= name.split("/");
    let lastUrl= thing[thing.length-1];
    console.log("adfasdfasdf",catagoryValue);
    let search={
      where:{
        UserId: lastUrl,
        catagory: catagoryValue
      },
      order:[
        ["totalClicks", "DESC"]
      ]
    }
    if(catagoryValue=="all"){
      search={
        where:{
          UserId: lastUrl,
        },
        order:[
          ["totalClicks", "DESC"]
        ]
      }
    }
    $.post("/api/link/search", search).then(data=>{
      console.log("helloloolollo",data)
    })
  })
})
