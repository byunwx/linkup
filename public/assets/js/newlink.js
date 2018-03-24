$(document).ready(function() {
  console.log("I'm in the form");
  const newLinkForm = $("#new-link-submit");
  const titleInput = $("#site-title");
  const urlInput = $("#site-url");
  const siteDescription = $("#site-description");
  // const notShared = ("#not-shared");

newLinkForm.on("click", function(event) {
  console.log("submited first");
  event.preventDefault();

  function submitFinal() {
    console.log("called second");
    const linkData = {
      title: titleInput.val().trim(),
      url: urlInput.val().trim(),
      description: siteDescription.val(),
      // shared: notShared.val()
    };

    if (!linkData.url) {
      return;
      console.log(linkData);
    }

    enterLink(linkData.title, linkData.url, linkData.description);
    titleInput.val("");
    urlInput.val("");
    siteDescription.val("");
    // notShared.val("");
  }
  submitFinal();
});

function enterLink(title, url, description) {
  console.log("called third");
  $.post("api/link/new", {
    title: title,
    url: url,
    description: description,
    // shared: shared
  }).then(data => {
    console.log(data);
  }).catch(handleSubmitError);
}

function handleSubmitError(err) {
  $("#alert .msg").text(err.responseJSON);
  $("#alert").fadeIn(500);
}


}); // end of document.ready
