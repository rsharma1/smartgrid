<?
include_once "support_functions.php";

//gets the header function (support_functions.php)
getHeader();

//navigation (support_functions.php)
getNav();

//sidebar (support_functions.php)
getSide();

//content goes here now; for now it is HTML but later we can format it into PHP if we want.
ucContent();

getFooter();

function ucContent(){
    $html = "";
	$html .= "<div class=\"grid_13 homepage\">\n";
	$html .= "<h1>University of California</h1>\n";
	$html .= "<p></p>\n";
	$html .= "	<form id=\"schoolForm\" class=\"grid_14\">\n";
	$html .= "		<select id=\"schools\" onchange=\"addClasses()\">\n";
	$html .= "			<option name=\"select\" id=\"berk\">Select a School</option>\n";
	$html .= "			<option name=\"berk\" id=\"berk\">University of California - Berkeley</option>\n";
	$html .= "			<option name=\"davis\" id=\"davis\">University of California - Davis</option>\n";
	$html .= "			<option name=\"irvine\" id=\"irvine\">University of California - Irvine</option>\n";
	$html .= "			<option name=\"ucla\" id=\"ucla\">University of California - Los Angeles</option>\n";
	$html .= "			<option name=\"ucla\" id=\"ucla\">University of California - Riverside</option>\n";
	$html .= "			<option name=\"ucla\" id=\"ucla\">University of California - San Diego</option>\n";
	$html .= "		</select>\n";
	$html .= "	</form>\n";
		
	$html .= "<div class=\"grid_13\" id=\"resultsdiv\">\n";
	
	$html .= "</div>\n";
	
	$html .= "</div>\n";
	
	$html .= "<!-- close the main content area -->\n";
	
	echo $html;
}
?>