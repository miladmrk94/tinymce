$(document).ready(function () {
  $("#get-data-form").submit(function (e) {
    var content = tinymce.get("texteditor").getContent();

    // $("#data-container").html(content);

    const jsonHTML = JSON.stringify({ content: content });
    console.log(jsonHTML);
    console.log(content);

    $.ajax({
      url: "http://localhost:3005/content",
      type: "POST",
      data: { html: content },
      success: function (data, textStatus, jqXHR) {
        //data - response from server
        console.log("Ok");
      },
      error: function (jqXHR, textStatus, errorThrown) {},
    });

    //showHtml
    const parsHTML = JSON.parse(jsonHTML);

    $("#data-container").html(parsHTML.content);
    return false;
  });
});
