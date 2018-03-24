$(document).ready(function() {
  console.log("I'm in the form");
  const newLinkSubmit = $("#new-link-submit");
  const titleInput = $("#site-title");
  const urlInput = $("#site-url");
  const siteDescription = $("#site-description");
  const notShared = $("#not-shared");

newLinkSubmit.on("click", function(event) {
  console.log("submited first");
  event.preventDefault();

  // code to validate url Here
  // code to validate checkbox Here.

    console.log("called second");
    const linkData = {
      title: titleInput.val().trim(),
      url: urlInput.val().trim(),
      description: siteDescription.val(),
      shared: notShared.val()
    };

    // Form validation
     function formValidation() {
       var isValid = true
         if (titleInput.val() === '') {
           isValid = false
         }
        // end of each of the .form-control function
         if (urlInput.val() === '') {
           isValid = false;
         } // end of this.val()
         if (siteDescription.val() === '') {
           isValid = false;
         } // end of this.val()
       return isValid;
     } // end of formValidation function

     if (formValidation()){

       enterLink(linkData);
       // clear value only after we enter the link.
       titleInput.val("");
       urlInput.val("");
       siteDescription.val("");
       notShared.val("");

     } else {
       $("#validation-modal").modal('toggle');
     }

});

function enterLink(linkData) {
  console.log("called third");
  console.log(linkData);

  $.post('api/link/new/', {
    title: linkData.title,
    url: linkData.url,
    description: linkData.description,
    shared: linkData.shared
  }).then(data => {
    console.log(data)
    console.log("data Log");
  }).catch(handleSubmitError);
}

function handleSubmitError(err) {
  $("#alert .msg").text(err.responseJSON);
  $("#alert").fadeIn(500);
}


}); // end of document.ready
