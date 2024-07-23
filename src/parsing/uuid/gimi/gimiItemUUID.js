BoxParser.createUUIDBox("4a66efa7e541526c94279e77617feb7d", false, false, function(stream) {
  this.class = "Item UUID Property";
  this.contentId = BoxParser.parseHex16(stream);
});