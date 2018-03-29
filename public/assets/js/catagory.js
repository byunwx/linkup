$(document).ready(function () {
$.get("/api/user/data", function(data){
  let myCat=data.linkCategories.split(",");
  console.log(myCat);
  for (var i = 0; i < myCat.length; i++) {
    let newOption=$("<option>").attr("value", myCat[i]);
    newOption.text(myCat[i]);
    $("#categoryUser").append(newOption);
  }
})

})
