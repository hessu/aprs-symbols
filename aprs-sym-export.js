
// export APRS symbols from Illustrator
// Heikki Hannikainen, OH7LZB

var doc = app.activeDocument;
var docWidth = doc.width;

var fileName = doc.fullName.toString();

if (fileName.lastIndexOf(".") >= 0) {
  fileName = fileName.substr(0, fileName.lastIndexOf("."));
}

var resolutions = [ 24, 64 ];
var rows = 8;
var columns = 16;

var arts = doc.artboards;
$.writeln("File " + fileName + " - Artboards: " + arts.length);

for (var ab = 0; ab < arts.length; ab++) {
  arts.setActiveArtboardIndex(ab);
  
  for (var k in resolutions) {
    var res = resolutions[k];
    $.writeln("ab " + ab + " res " + res);
    do_export(doc, fileName, ab, res, "", 1);
    do_export(doc, fileName, ab, res, "@2x", 2);
  }
}

function do_export(doc, fname, ab, res, fname_append, res_mult)
{
  var fn = "png/" + fname + "-" + res + "-" + ab + fname_append + ".png";
  $.writeln("  " + fn);
  var targetWidth = res * columns * res_mult;
  $.writeln("  target width " + targetWidth + " doc width " + docWidth);
  
  var exportOptions = new ExportOptionsPNG24();
  exportOptions.horizontalScale = exportOptions.verticalScale = 100 * (targetWidth/docWidth);
  exportOptions.artBoardClipping = true;
  
  var file = new File(fn);
  doc.exportFile(file, ExportType.PNG24, exportOptions);
}

