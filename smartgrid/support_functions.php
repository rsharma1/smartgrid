<?
/*******************************************************************
*
*   Author: Kim Holmes
*   Function: getHeader()
*   Preconditions: none
*   Postconditions: Returns HTML for the page header.
*
*******************************************************************/
function getHeader() {
    //reserve some memory space for the HTML string
    $html ="";

    //now to append the lines of HTML to the $html string
    //doctype
    $html .= "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n";
    $html .= "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n";
    //start head
    $html .= "<head>\n";
    $html .= "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\n";
    //stylesheets
    $html .= "<link rel=\"stylesheet\" href=\"style.css\" type=\"text/css\" />\n";
    $html .= "<link rel=\"stylesheet\" href=\"nav.css\" type=\"text/css\" />\n";
    $html .= "<link rel=\"stylesheet\" href=\"grid.css\" type=\"text/css\" />\n\n";
	$html .="<script type=\"text/javascript\" src=\"jscript.js\"></script>\n\n";
    //title
    $html .= "<title>Smart Grid</title>\n\n";
    //end head
    $html .= "</head>\n\n";
    //begin page body
    $html .= "<body>\n\n";
    //content wrapper and header div for all pages
    $html .="<div class=\"container_16\">\n";
	$html .="<div class=\"grid_16 header\">&nbsp;</div>";

    //echo the HTML so that it displays
    echo $html;
}

/*******************************************************************
*
*   Author: Kim Holmes
*   Function: getSide()
*   Preconditions: none
*   Postconditions: Returns HTML for the page sidebar.
*
*******************************************************************/

function getSide() {

    //reserve mem space for $html
    $html = "";

    //append to $html the HTML strings
    $html .= "<div class=\"grid_3\">\n";
	$html .= "<div class=\"sidebar\">\n";
    $html .= "<h1>Resources</h1>\n";
    $html .= "<ul class=\"columnlist\">\n";
    $html .= "<li><a href=\"http://greencapitalalliance.org/\" title=\"Green Cap Alliance\">Green Capital Alliance</a></li>\n";
    $html .= "<li><a href=\"https://www.smud.org/en/residential/customer-service/smart-meters/\" title=\"SMUD Smart Meters\">SMUD Smart Meters</a></li>\n";
	$html .="<li><a href=\"http://www.pge.com/smartmeter/\" title=\"PG&E Smart Meter\">PG&amp;E SmartMeter</a></li>\n";
	$html .="<li><a href=\"htt://next10.org/next10/publications/green_jobs.html\" title=\"Next10 Many Shades of Green\">Next10 Many Shades of Green</a></li>\n";
	$html .="<li><a href=\"http://www.onetonline.org/find/green?n=3&g=Go\" title=\"O*Net Green Sector Jobs\">ONet Green Sector Jobs</a></li>\n";
	//$html .="<li>words</li>\n";
    $html .= "</ul>";
	$html .= "</div>";
    $html .= "</div>";

    //add $html to document
    echo $html;

}

/*******************************************************************
*
*   Author: Kim Holmes
*   Function: getNav()
*   Preconditions: none
*   Postconditions: Returns HTML for the page navigation.
*
*******************************************************************/

function getNav() {
    //reserve memory for $html
    $html = "";

    $html .= "<div class=\"grid_16 navigation\">\n";
	$html .= "<ul class=\"nav\">\n";
    $html .= "<li><a href=\"index.html\" title=\"Home\">Home</a></li>\n";
    $html .= "<li>\n";
    $html .= "<a href=\"#\" title=\"Training Programs\">Training Programs</a>\n";
    $html .= "<ul>\n";
    $html .= "<li><a href=\"uc.php\">University of California</a></li>\n";
    $html .= "</ul>\n";
    $html .= "</li>\n";
    $html .= "</ul>\n\n";
    $html .= "<div class=\"clear\"></div></div>\n";
}


/*******************************************************************
*
*   Author: Kim Holmes
*   Function: getFooter()
*   Preconditions: none
*   Postconditions: Returns HTML for the page footer.
*
*******************************************************************/

function getFooter(){
	$html = "";
	$html .= "<!-- Close content. -->\n";
	$html .= "</div>\n";
	$html .= "</div> <!-- closes the .wrapper div -->\n";
	$html .= "</body>\n";
	$html .= "</html>\n";
}
?>