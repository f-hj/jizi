var Z = new function(v) {

	this.l = function(text, color) {
		if (color) {
			console.log("%c" + text, "color: " + color + ";");
		} else {
			console.log(text);
		}
	}

	this.get = function(url, values, callback) {
		if (values && values[0]) {
			url += "?";
			url += get_val(values);
		}
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				callback(JSON.parse(xhttp.responseText));
			}
		}
		xhttp.open("GET", url, false);
		xhttp.send();
	}

	this.post = function(url, values, callback) {
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				callback(JSON.parse(xhttp.responseText));
			}
		}
		xhttp.open("GET", url, false);
		xhttp.send(get_val(values));
	}

	var get_val = function(values) {
		var url = "";

		if (values && values[0]) {
			for (var k in values) {
				w += k + "=" + values[k] + "&";
			}
			if (k.length > 1) {
				url = url.slice(0, -1);
			}
		}
		return (url);
	}

}
