BoxParser.createFullBoxCtor("itai", function(stream) {
	var timestamp = stream.readUint64();
	var date = timestamp_to_string(timestamp);
	this.TAI_timestamp = timestamp + "  (" + date + ")";

	status_bits = stream.readUint8();
	this.sychronization_state = (status_bits >> 7) & 0x01;
	this.timestamp_generation_failure = (status_bits >> 6) & 0x01;
	this.timestamp_is_modified = (status_bits >> 5) & 0x01;
});

function timestamp_to_string(timestamp) {
	var timestamp_microseconds = timestamp / 1000;
	var timestamp_milliseconds = timestamp_microseconds / 1000;
	tai_utc_offset = 37000; // 37 seconds (37,000 milliseconds)
	var utcTimestamp = timestamp_milliseconds - tai_utc_offset;
	var date = new Date(utcTimestamp);
	var dateString = date.toLocaleString('en-US', {
		timeZone: 'UTC',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
	return dateString;
}