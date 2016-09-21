
// export APRS symbols from Illustrator
// Heikki Hannikainen, OH7LZB

var doc = app.activeDocument;
var docWidth = doc.width;

var fileName = doc.fullName.toString();

if (fileName.lastIndexOf(".") >= 0) {
  fileName = fileName.substr(0, fileName.lastIndexOf("."));
}

fileName = '/tmp/aprs-symbols';

var resolutions = [ 24, 64 ];
var rows = 8;
var columns = 16;

var arts = doc.artboards;
$.writeln("File " + fileName + " - Artboards: " + arts.length);

// Write out individual artboards
/*
for (var ab = 0; ab < arts.length && ab < 3; ab++) {
  arts.setActiveArtboardIndex(ab);
  
  for (var k in resolutions) {
    var res = resolutions[k];
    $.writeln("ab " + ab + " res " + res);
    do_export(doc, fileName, ab, res, "", 1);
    do_export(doc, fileName, ab, res, "@2x", 2);
  }
}
*/

aprsdroid_export();

function aprsdroid_export()
{
  // For Georg, combine all artboards in a single one and export it

  $.writeln("artboard 0 rect: " + arts[0].artboardRect);

  var ab0r = arts[0].artboardRect;
  var ab1r = arts[1].artboardRect;

  var w = ab0r[2] - ab0r[0];
  var h = ab0r[1] - ab0r[3];
  $.writeln("artboard 0 size: w " + w + " h " + h);
  
  var tempLayer = doc.layers.add();
  $.writeln("added temporary layer: " + tempLayer);
  
  var gap = 40;
  var abTr = [ ab1r[2] + gap, ab1r[1], ab1r[2] + gap + w, ab1r[1] - h*3 ];
  var tempAb = arts.add(abTr);
  $.writeln("added temporary artboard: " + tempAb + " at " + abTr);
  
  // copy each artboard to the temp one
  var sab, k;
  for (sab = 0; sab < 3; sab++) {
    arts.setActiveArtboardIndex(sab);
    
    doc.selection = null; // deselect everything  
    doc.selectObjectsOnActiveArtboard(); // select all in artboard  
    var sel = doc.selection; // get selection  
    
    for (k=0; k < sel.length; k++) {
      var newItem = sel[k].duplicate(tempLayer, ElementPlacement.PLACEATEND);  
      var newPosition = [
        newItem.position[0] - arts[sab].artboardRect[0] + abTr[0],
        newItem.position[1] - arts[sab].artboardRect[1] + abTr[1] - sab*h
        ];
      newItem.position = newPosition;
    }
  }
  
  // export the temp artboard
  $.writeln("exporting for droid: " + arts[3].artboardRect);
  arts.setActiveArtboardIndex(3);
  
  var droid_resolutions = [16, 24, 32, 36, 48, 64];
  for (var k in droid_resolutions) {
    var res = droid_resolutions[k];
    $.writeln("droid res " + res);
    do_export(doc, fileName, "droid", res, "", 1);
  }
}

function do_export(doc, fname, ab, res, fname_append, res_mult)
{
  var fn = fname + "-" + res + "-" + ab + fname_append + ".png";
  $.writeln("  " + fn);
  var targetWidth = res * columns * res_mult;
  $.writeln("  target width " + targetWidth + " doc width " + docWidth);
  
  var exportOptions = new ExportOptionsPNG24();
  exportOptions.horizontalScale = exportOptions.verticalScale = 100 * (targetWidth/docWidth);
  exportOptions.artBoardClipping = true;
  
  var file = new File('.' + fn);
  $.writeln(" file: " + file);
  doc.exportFile(file, ExportType.PNG24, exportOptions);
}

