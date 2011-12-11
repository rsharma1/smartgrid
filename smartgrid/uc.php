<?
include_once "support_functions.php";

//gets the header function (support_functions.php)
getHeader();

//navigation (support_functions.php)
getNav();

//sidebar (support_functions.php)
getSide();

//content goes here now; for now it is HTML but later we can format it into PHP if we want.


?>

<div class="grid_13 homepage">
<h1>University of California</h1>
<p></p>
    <form id="schoolForm" class="grid_14">
    	<select id="schools" onchange="addClasses()">
        	<option name="berk" id="berk">University of California - Berkeley</option>
            <option name="davis" id="davis">University of California - Davis</option>
            <option name="irvine" id="irvine">University of California - Irvine</option>
            <option name="ucla" id="ucla">University of California - Los Angeles</option>
        </select>
    </form>
    
<div class="grid_13" id="resultsdiv">

</div>

</div>

<!-- close the main content area -->

<!-- Close content. -->
</div>
</div> <!-- closes the .wrapper div -->
</body>
</html>