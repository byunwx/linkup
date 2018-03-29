(() => {
  dataLoader();

  function dataLoader() {
    $.get("/api/user/data", function (data) {
      console.log(data);
      $('#username').text(`Username: ${data.username}`);
      $('#avatar').attr('src', data.image);
      $('#bio').text(`Bio: ${data.bio}`);
    });
  }

  document.getElementById('file-input').onchange = initUpload;

  function uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('File uploaded successfully');
          document.getElementById('avatar').setAttribute('data-url', url);
          document.getElementById('avatar').src = url;
          document.getElementById('preview').src = url;
        } else {
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }
  // response.url has the image url we can link to
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
    let firstName = $("#firstName").val().trim();
    let lastName = $("#lastName").val().trim();
    let bio = $("#userBio").val();
    let pic = $('#avatar').data('url');
    console.log(firstName, lastName, bio, pic);
    $.get("/api/user/data", function (data) {
      const ID = data.id;
      console.log(ID);
      console.log(data);
      if (bio == '') {
        bio = data.bio
      }
      if (pic == '') {
        pic = data.pic
      }
      if (firstName == '') {
        firstName = data.firstName
      }
      if (lastName == '') {
        lastName = data.lastName
      }
      let profileUpdate = {
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
          console.log(res);
          dataLoader();
          window.location.href = `/user/${ID}/all`;
          console.log(req.body);
        });
    }); // end of get request for user data
  }) // end of #profile-submit.on click

})(); // end of document.ready
