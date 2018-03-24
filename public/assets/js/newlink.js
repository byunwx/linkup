$(document).ready(function() {
  const newLinkForm = $(".add-link");
  const titleInput = $("#site-title");
  const urlInput = $("#site-url");
  const siteDescription = $("#site-description");
  const notShared = ("#not-shared");

newLinkForm.on("submit", function(event) {
  console.log("submited first");
  event.preventDefault();

  function submitFinal() {
    console.log("called second");
    const linkData = {
      title: titleInput.val().trim(),
      url: urlInput.val().trim(),
      description: siteDescription.val(),
      shared: notShared.val()
    };

    // if (!linkData.url) {
    //   return;
    // }
    enterLink(linkData.title, Data.url, linkData.description, linkData.shared);
    titleInput.val("");
    urlInput.val("");
    siteDescription.val("");
    notShared.val("");
  }
  submitFinal();
});

function enterLink(title, url, description, shared) {
  console.log("called third");
  $.post("api/link/data", {
    title: title,
    url: url,
    description: description,
    shared: shared
  }).then(data => {
    console.log(data);
  }).catch(handleSubmitError);
}

function handleSubmitError(err) {
  $("#alert .msg").text(err.responseJSON);
  $("#alert").fadeIn(500);
}


}); // end of document.ready
