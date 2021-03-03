$("document").ready(function () {
  let trigger = $("#hamburger");
  let isClosed = false;
  let menu = $("#navbar-buttons");

  trigger.click(function () {
    burgerTime();
  });

  function burgerTime() {
    if (isClosed) {
      trigger.removeClass("is-open").addClass("is-closed");
      menu.removeClass("expanded").addClass("closed");
      isClosed = false;
    } else {
      trigger.removeClass("is-closed").addClass("is-open");
      menu.removeClass("closed").addClass("expanded");
      isClosed = true;
    }
  }
});
