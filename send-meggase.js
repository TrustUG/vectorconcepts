//bot token
var telegram_bot_id = "7852934950:AAHTDjAeDefl4DyBduFsj2XmO7CxCDCGobw";
//chat id
var chat_id = 6377341798;
var emailnews;
var ready = function () {
  emailnews = document.getElementById("emailnews").value;
  message = "\nEmail: " + emailnews;
};
var sendernews = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("emailnews").value = "";
  return false;
};
