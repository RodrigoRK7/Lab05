let post = "#ButtonPost";
let clear = "#ButtonClear";
let mark = "#ButtonMark";
let deleteb = "#ButtonDelete";
let texto = "#todoText";
let lista = "#todoList";
let nombre = '[name="todo"]';

$(post).on("click", function (event) {
  event.preventDefault();
  if ($(texto).val() != "") {
    $(lista).append(
      `<input type = "checkbox" name="todo" /> ${$(texto).val()} <br>`
    );
  }
});

$(clear).on("click", function () {
  $(nombre).each(function () {
    $(this).prop("checked", false);
  });
});

$(mark).on("click", function () {
  $(nombre).each(function () {
    $(this).prop("checked", true);
  });
});

$(deleteb).on("click", function () {
  $(lista).html("");
});
