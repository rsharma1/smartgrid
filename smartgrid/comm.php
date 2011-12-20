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
	$html .= "<h1>California Community Colleges</h1>\n";
	$html .= "<p></p>\n";
	$html .= "	<form id=\"schoolForm\" class=\"grid_14\">\n";
	$html .= "		<select id=\"schools\" onchange=\"addClasses()\">\n";
	$html .= "			<option name=\"sierra\" id=\"berk\">Sierra College</option>\n";
	$html .= "		</select>\n";
	$html .= "	</form>\n";
		
	$html .= "<div class=\"grid_13\" id=\"resultsdiv\">\n";
	
	$html .= "</div>\n";
	
	$html .= "</div>\n";
	
	$html .= "<!-- close the main content area -->\n";
	
	echo $html;
}
?>