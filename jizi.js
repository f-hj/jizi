var Z = new function(v) {

	this.l = function(text, color) {
		if (color) {
			console.log("%c" + text, "color: " + color + ";");
		} else {
			console.log(text);
		}
	}

	this.id = function(id) {
		return document.getElementById(id);
	}

	this.class = function(c) {
		return document.getElementsByClassName(c);
	}

	this.get = function(url, values, good, bad) {
		var xhttp = new XMLHttpRequest();
		if (values) {
			url += "?";
			url += get_val(values);
		}
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				if (good) {
					good(xhttp.responseText);
				}
			} else if (xhttp.readyState == 4) {
				if (bad) {
					bad(xhttp);
				}
			}
		}
		xhttp.open("GET", url, true);
		xhttp.send();
	}

	this.post = function(url, values, good, bad) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				if (good) {
					good(xhttp.responseText);
				}
			} else if (xhttp.readyState == 4) {
				if (bad) {
					bad(xhttp);
				}
			}
		}
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(get_val(values));
	}

	this.getVal = function() {
		var vars = {};

		window.location.href.replace(location.hash, '' ).replace(
			/[?&]+([^=&]+)=?([^&]*)?/gi,
			function(m, key, value) {
				vars[key] = value !== undefined ? value : '';
			}
		);

		return vars;
	}

	var get_val = function(values) {
		var url = "";

		if (values) {
			for (var k in values) {
				url += k + "=" + values[k] + "&";
			}
			if (values.length > 1) {
				url = url.slice(0, -1);
			}
		}
		return (url);
	}

}
