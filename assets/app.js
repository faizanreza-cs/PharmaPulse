/* Project site behaviour: copy buttons on the commands. Nothing else depends on it. */
(function () {
  "use strict";
  if (!navigator.clipboard || !window.isSecureContext) return;
  Array.prototype.forEach.call(document.querySelectorAll(".copy"), function (button) {
    var label = button.textContent;
    button.hidden = false;
    button.addEventListener("click", function () {
      var code = button.closest("li").querySelector("code").textContent;
      navigator.clipboard.writeText(code).then(function () { say("Copied"); }, function () { say("Select it"); });
    });
    function say(text) { button.textContent = text; setTimeout(function () { button.textContent = label; }, 1600); }
  });
})();
