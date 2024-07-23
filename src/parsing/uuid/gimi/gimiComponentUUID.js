BoxParser.createUUIDBox("12472f2315bf5289a78716e8bd1cf8dc", false, false, function(stream) {
  this.class = "Image Item Component UUID";
  this.number_of_components = stream.readUint32();
  this.components = [];
  for (var i = 0; i < this.number_of_components; i++) {
    console.log('Parsing component ' + i);
    var componentContentId = BoxParser.parseHex16(stream);
    this.components.push(componentContentId);
  }
});