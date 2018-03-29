// $(document).ready(function() {

//   console.log("I'm updating my profile");

//   // JS for file upload
//       $(document).on('change', ':file', function() {
//       var input = $(this),
//           numFiles = input.get(0).files ? input.get(0).files.length : 1,
//           label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
//       input.trigger('fileselect', [numFiles, label]);
//     });

//     $(':file').on('fileselect', function(event, numFiles, label) {
//         var input = $(this).parents('.input-group').find(':text'),
//             log = numFiles > 1 ? numFiles + ' files selected' : label;

//         if( input.length ) {
//             input.val(log);
//         } else {
//             if( log ) alert(log);
//         }
//     });
(() => {
  document.getElementById('file-input').onchange = initUpload;

  function uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('File should have uploaded successfully');
        } else {
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  function getSignedRequest(file) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          uploadFile(file, response.signedRequest, response.url);
        } else {
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  }

  function initUpload() {
    const files = document.getElementById('file-input').files;
    const file = files[0];
    if (file == null) {
      return alert('No file selected.');
    }
    getSignedRequest(file);
  }

  $("#profile-submit").on("click", function () {

    let firstName = $("#firstName").val().trim()
    let lastName = $("#lastName").val().trim()
    let bio = $("#userBio").val()
    let pic = $("#userImage").val()
    console.log(firstName, lastName, bio, pic);

    $.get("/api/user/data", function (data) {
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
        .then(function (req, res) {
          window.location.href = `/user/${ID}`;
          console.log(req.body);
        });
    }); // end of get request for user data
  }) // end of #profile-submit.on click

})(); // end of document.ready