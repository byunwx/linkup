$(document).ready(function() {

  console.log("I'm updating my profile");

  // JS for file upload
      $(document).on('change', ':file', function() {
      var input = $(this),
          numFiles = input.get(0).files ? input.get(0).files.length : 1,
          label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.trigger('fileselect', [numFiles, label]);
    });

    $(':file').on('fileselect', function(event, numFiles, label) {
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
    });


  $("#profile-submit").on("click", function() {

    let firstName = $("#firstName").val().trim()
    let lastName = $("#lastName").val().trim()
    let bio = $("#userBio").val()
    let pic = $("#userImage").val()
    console.log(firstName, lastName, bio, pic);

    $.get("/api/user/data",function(data){
      const ID = data.id;
      console.log(ID);
      console.log(data);
      // return window.location.href = `/user/${ID}`;

        var profileUpdate = {
          firstName: firstName,
          lastName: lastName,
          bio: bio,
          image: pic,
          id: ID
        };
        $.ajax({
          method: "PUT",
          url: "/api/user/info",
          data: profileUpdate
        })
          .then(function() {
            console.log("ajax done");
          });
    });



  }) // end of #profile-submit.on click


}) // end of document.ready
