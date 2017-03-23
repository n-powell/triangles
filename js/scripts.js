$(function() {
  $("#triangle form").submit(function(event) {
      // ----this child way or straight in form
    var side1 = parseFloat($("input#side1").val ());
    var side2 = parseFloat($("input#side2").val ());
    var side3 = parseFloat($("input#side3").val ());

    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      $(".output").text("That is NOT valid input. Please use positive numbers only.");
    }
    else if (side1 === side2 && side1 === side3) {
      $(".output").text("Equilateral");
    }
    else if ((side1 === side2 && side1 + side2 > side3) || (side2 === side3 && side2 + side3 > side1) || (side1 === side3 && side1 + side3 > side2)) {
      $(".output").text("Isosceles");
    }
    else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      $(".output").text("NOT a triangle");
    }
    else if ((side1 != side2 && side1 + side2 > side3 ) || (side2 != side3 && side2 + side3 > side1 ) || (side1 != side3 && side1 + side3 > side2)) {
      $(".output").text("Scalene");
    }
    else {
      $(".output").text("That is NOT valid input. Please use positive numbers only.");
    }




    event.preventDefault();

  });


});
