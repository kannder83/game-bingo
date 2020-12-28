function writeCell(letter, row, value) {
  //   var i = 1;
  for (var i = 1; i < 6; i++) {
    document.getElementById(letter + row).innerHTML = value;
  }
}

writeCell("b", 1, 12);
writeCell("b", 2, 15);
writeCell("i", 3, 36);
writeCell("n", 3, 45);
writeCell("b", 3, 76);
writeCell("g", 3, 16);
