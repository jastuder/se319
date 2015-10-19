$(document).ready( function () {

function enableChange() {
    changeHeaderOne();
    changeDiv();
    changeParagraph();
    changeOrderedList();
    changeUnorderedList();
}

function changeHeaderOne() {
	$('h1').css('background', 'yellow');

}

function changeDiv() {
	$('.test').css({'color': 'orange', 'font-weight': 'bold'});
}

function changeParagraph() {
	$('p').css({'font-size': '20', 'font-style': 'italic'});
}

function changeOrderedList() {
	$('ol').css({'list-style-type': 'upper-roman', 'color': 'red'});
}

function changeUnorderedList() {
	$('ul').css({'list-style-type': 'square', 'text-transform': 'uppercase'});
}

function hideTheParagraphs() {
	$('p').hide();
}

function showTheParagraphs() {
	$('p').show();
}

function fadeHeader() {
	$('h1').fadeOut(1000);
	$('h1').fadeIn(1000);
}

function fadeOrderedList() {
	$('ol').fadeTo("show", 0.5);
}

function hideUnorderedList() {
	$('ul').hide();
}

$('p').click(function() {
    alert("You clicked on a paragraph");
});

$('h1').click(function() {
	$('h1').css('background', 'blue');
});

$('ul').dblclick(function() {
	$('ul').css('list-style-type', 'circle');
});

$('ol').mouseover(function(){
    $('ol').css('color', 'green');
});

$('ol').mouseout(function(){
    $('ol').css('color', 'red');
});

$('h1').hover(function() {
	$('h1').css({'font-size': '40', 'font-weight': 'bold'})
});

$('#testbutton').click(function(){
    enableChange();
});

$('#hideParagraph').click(function(){
	hideTheParagraphs();
});

$('#showParagraph').click(function(){
	showTheParagraphs();
});

$('#doAnimation').click(function() {
	fadeHeader();
	fadeOrderedList();
	hideUnorderedList();
});

});