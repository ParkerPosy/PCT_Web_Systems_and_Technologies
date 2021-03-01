$("document").ready(function () {
  let trigger = $("#hamburger")
  let isClosed = false
  let menu = $('#navbar-buttons')

  trigger.click(function () {
    burgerTime();
  });

  function burgerTime() {
    if (isClosed == true) {
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      menu.removeClass('expanded');
      menu.addClass('closed');
      isClosed = false;
    } else {
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      menu.removeClass('closed');
      menu.addClass('expanded');
      isClosed = true;
    }
  }
});