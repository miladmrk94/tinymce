$(document).ready(function () {
  $("#get-data-form").submit(function (e) {
    var content = tinymce.get("texteditor").getContent();

    $("#data-container").html(content);

    const html = $("#data-container").html();
    console.log(html);

    const jsonHTML = JSON.stringify({ content: html });
    console.log(jsonHTML);

    // $.ajax({
    //   url: "AJAX_POST_URL",
    //   type: "POST",
    //   data: jsonHTML,
    //   success: function (data, textStatus, jqXHR) {
    //     //data - response from server
    //   },
    //   error: function (jqXHR, textStatus, errorThrown) {},
    // });

    //showHtml

    const parsHTML = JSON.parse(jsonHTML);
    console.log(parsHTML);
    $("#data-container").parsHTML;
    return false;
  });
});
