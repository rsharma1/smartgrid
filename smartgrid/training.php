<?
include_once "support_functions.php";

//gets the header function (support_functions.php)
getHeader();

//navigation (support_functions.php)
getNav();

//sidebar (support_functions.php)
getSide();

//content goes here now; for now it is HTML but later we can format it into PHP if we want.
trainingContent();

getFooter();

function trainingContent(){
    $html = "";
	$html .= "<h3>Training Resources</h3>\n";
	$html .="<p>This page is dedicated to providing you with a set of links to the different California Universities that offer Smart Grid training.</p>\n\n";
	
	$html .="<ul>\n";
	$html .="<li>University of California</li>\n";
	$html .="<ul>\n";
	$html .="<li>University of California, Berkeley</li>\n";
	$html .="<li>University of California, Irvine</li>\n";
	$html .="<li>University of California, Merced</li>\n";
	$html .="<li>University of California, Riverside</li>\n";
	$html .="</ul>\n";
	$html .="<li>Community Colleges</li>\n";
	$html .="<li>California State University</li>\n";
	$html .="</ul>\n";
	
	echo $html;
}
?>