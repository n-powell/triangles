$(function() {
  $("#triangle form").submit(function(event) {
      // ----this child way or straight in form
    var side1 = parseInt($("input#side1").val ());
    var side2 = parseInt($("input#side2").val ());
    var side3 = parseInt($("input#side3").val ());
    if (side1 === side2 && side1 === side3) {
      $(".output").text("Equilateral")
    }
    else if (side1 === side2 || side2 === side3 || side1 === side3) {
      $(".output").text("Isosceles")
    }
    else if (side1 != side2 || side2 != side3 || side1 != side3) {
      $(".output").text("Scalene")
    }
    else if (side1 + side2 >= side3 || side2 + side3 >= side1 || side1 + side3 >= side2) {
      $(".output").text("NOT a triangle")
    }


    event.preventDefault();

  });


});
