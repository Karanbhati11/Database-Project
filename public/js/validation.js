$(() => {
  const name = $("#name");
  const email = $("#email");
  const password = $("#password");
  const passverify = $("#passverify");
  const street = $("#street");
  const city = $("#city");
  const zip = $("#zip");
  const country = $("#country");

  const regx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regx2 = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  const regx3 = /^[a-zA-Z]+$/;
  $(":input").on("input", function () {
    $(this).next().text("");
  });

  $(":input").on("input", function () {
    $(this).val($(this).val().trim());
  });

  const handleError = (selector, errorMsg) => {
    $(selector).next().text(errorMsg);
    $(selector)
      .next()
      .css({ color: "Red", "font-size": "smaller", "font-family": "Arial" });
  };

  $("#newCustomer").on("click", (evt) => {
    let isValid = true;
    if (name.val() === "") {
      handleError("#name", "First Name is Required");
      isValid = false;
    } else if (!regx3.test(name.val())) {
      handleError("#name", "First Name is Invalid");
      isValid = false;
    }
    if (email.val() === "") {
      handleError("#email", "Email ID is Required");
      isValid = false;
    } else if (!regx.test(email.val())) {
      handleError("#email", "Must be a valid Email ID");
      isValid = false;
    }
    if (password.val() == "" || passverify.val() == "") {
      handleError("#password", "Password is Required");
      handleError("#passverify", "Password is Required");
      isValid = false;
    } else if (password.val().length < 8) {
      handleError("#password", "Password should not be less than 8 digits");
      isValid = false;
    }
    if (password.val() !== passverify.val()) {
      handleError("h2", "Both Passwords must match");
      isValid = false;
    }
    if (isValid === false) {
      evt.preventDefault();
    }
  });

  // login
  $("#login").click((evt) => {
    let isValid = true;
    if (email.val() === "") {
      handleError("#email", "Email ID is Required");
      isValid = false;
    } else if (!regx.test(email.val())) {
      handleError("#email", "Must be a valid Email ID");
      isValid = false;
    }
    if (password.val() == "") {
      handleError("#password", "Password is Required");
      isValid = false;
    } else if (password.val().length < 8) {
      handleError("#password", "Password should not be less than 8 digits");
      isValid = false;
    }

    if (isValid === false) {
      evt.preventDefault();
    }
  });

  // Payments Page
  const cardNumber = $("#card-number");
  const cardName = $("#card-name");
  const cvc = $("#cvc");
  const cardExpMonth = $("#card-expiry-month");
  const cardExpYear = $("#card-expiry-year");
  $(":input").on("input", function () {
    $("#alert").hide();
  });

  $(".submit-button").click((evt) => {
    let isValid = true;
    if (
      cardName.val() === "" ||
      cardNumber.val() === "" ||
      cvc.val() === "" ||
      cardExpMonth.val() === "" ||
      cardExpYear.val() === ""
    ) {
      $("#alert").show();
      $("#alert").html("All fields are required!");
      isValid = false;
    } else if (!regx3.test(cardName.val())) {
      $("#alert").show();
      $("#alert").html("Please enter valid name value!");
      isValid = false;
    } else {
      $("#alert").hide();
    }

    if (isValid === false) {
      evt.preventDefault();
    }
  });
});
