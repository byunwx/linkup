$(document).ready(function() {
  console.log("I'm in the form");
  const newLinkSubmit = $("#new-link-submit");
  const titleInput = $("#site-title");
  const urlInput = $("#site-url");
  const siteDescription = $("#site-description");
  const notShared = $("#not-shared");


  // check url validation on blur
  $("#site-url").on("blur", function(urlEntered){

    if (isValidURL()) {
      document.getElementById("site-url").style.background="lightgreen";
      return;
    } else {
      alert("enter a valid url starting with http:// or https:// and with .com, .net etc.");
    }
  }); // end of url validation on blue

  // URL validation
  function isValidURL(){

    const urlEntered = urlInput.val().trim();

    var urlregex =  /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    return urlregex.test(urlEntered);

  } //isValidURL function

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

       if (formValidation()) {

         enterLink(linkData);
         // clear value only after we enter the link.
         titleInput.val("");
         urlInput.val("");
         siteDescription.val("");
         notShared.val("");

       } else {
         alert("Please enter all fields and make sure the url is in the correct format before submitting")
        }

  }); // end of newLinkSubmit

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

    } // end of enterlink function

    function handleSubmitError(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }

    // Form validation
     function formValidation() {
       var isValid = true
         if (titleInput.val() === '') {
           isValid = false
         }
        // end of each of the .form-control function
         if (urlInput.val() === '' || !isValidURL()) {
           isValid = false;
         } // end of this.val()
         if (siteDescription.val() === '') {
           isValid = false;
         } // end of this.val()
       return isValid;
     } // end of formValidation function

  }); // end of document.ready
