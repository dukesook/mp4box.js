BoxParser.createFullBoxCtor("itai", function(stream) {
	this.TAI_timestamp_decimal = stream.readUint64();

	var timestamp_microseconds = this.TAI_timestamp_decimal / 1000;
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
	this.TAI_timestamp_date = dateString;

	status_bits = stream.readUint8();
	this.sychronization_state = (status_bits >> 7) & 0x01;
	this.timestamp_generation_failure = (status_bits >> 6) & 0x01;
	this.timestamp_is_modified = (status_bits >> 5) & 0x01;
});