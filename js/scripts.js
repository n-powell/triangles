$(function() {
  $(".content").toggle().fadeToggle(3000);
  $("#triangle form").submit(function(event) {

      // ----this child way or straight in form
    var side1 = parseInt($("input#side1").val ());
    var side2 = parseInt($("input#side2").val ());
    var side3 = parseInt($("input#side3").val ());
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      $(".output").text("That is NOT valid input. Please use positive numbers only.").toggle().fadeToggle();
    }
    else if (side1 === side2 && side1 === side3) {
      $(".output").text("Equilateral").toggle().fadeToggle();
    }
    else if ((side1 === side2 && side1 + side2 > side3) || (side2 === side3 && side2 + side3 > side1) || (side1 === side3 && side1 + side3 > side2)) {
      $(".output").text("Isosceles").toggle().fadeToggle(1000);
    }
    else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      $(".output").text("NOT a triangle").toggle().fadeToggle(1000);
    }
    else if ((side1 != side2 && side1 + side2 > side3 ) || (side2 != side3 && side2 + side3 > side1 ) || (side1 != side3 && side1 + side3 > side2)) {
      $(".output").text("Scalene").toggle().fadeToggle(1000);
    }
    else {
      $(".output").text("That is NOT valid input. Please use positive numbers only.").toggle().fadeToggle(1000);
    }




    event.preventDefault();

  });


});
