function Library(name) {
	this.name = name;
	this.shelves = new Array();
}

function Shelf(name, num) {
	this.name = name;
	this.num = num;
	this.books = new Array();
}

function Book(name, checkedOut) {
	this.name = name;
	this.checkedOut = checkedOut;
}

Library.prototype.isBookCheckedOut = function(name) {
	for (i = 0; i < library.shelves.length; i++) {
		for (j = 0; j < library.shelves[i].books.length; j++) {
			if (library.shelves[i].books[j].name == name) {
				if (library.shelves[i].books[j].checkedOut == "Yes") {
					return library.shelves[i];
				} else {
					return false;
				}
			}
		}
	}

	return false;
};

Library.prototype.returnShelves = function() {
	return library.shelves;
};

Library.prototype.createLibrary = function() {
	document.write("<table><tr>");
	for (i = 0; i < library.shelves.length; i++) {
		document.write("<td>" + library.shelves[i].name + "</td>");
	}
	document.write("</tr><tr>");
		for (i = 0; i < library.shelves.length; i++) {
		document.write("<td>" + library.shelves[i].books[0].name + "</td>");
	}
		document.write("</tr><tr>");
		for (i = 0; i < library.shelves.length; i++) {
		document.write("<td>" + library.shelves[i].books[1].name + "</td>");
	}
		document.write("</tr><tr>");
		for (i = 0; i < library.shelves.length; i++) {
		document.write("<td>" + library.shelves[i].books[2].name + "</td>");
	}
		document.write("</tr><tr>");
		for (i = 0; i < library.shelves.length; i++) {
		document.write("<td>" + library.shelves[i].books[3].name + "</td>");
	}
	document.write("</tr>");
	document.write("</table>");
}