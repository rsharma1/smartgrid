// JavaScript Document

/********************************************************************
* File Name:   student_assistant_app.js
*
* Description: Inputs classes based off of selected college
* 
* Programmer:  Kim Holmes 
*              zorianak@me.com
********************************************************************/
function addClasses()
{
  var result = document.getElementById('resultsdiv');
  var selecter = document.getElementById('schools');
  
  //define some classes for each
  //UC Berkeley
  var berkClasses = "<h2>Mechanical Engineering</h2>";
  berkClasses += "<p>110. Introduction to Product Development</p>";
  berkClasses += "<p>128. Computer-Aided Mechanical Design</p>";
  
  //UC Davis
  var davisClasses = "<h2>Mechanical Engineering</h2>";
  davisClasses += "<p> 152. Computer-Aided Mechanism Design</p>";
  davisClasses += "<p> 154. Mechatronics</p>";
  
  //UC Merced
  var irvineClasses = "<h2>Mechanical Engineering</h2>";
  irvineClasses += "<p>MAE117 Solar and Renewable Energy Systems</p>";
  irvineClasses += "<p>MAE118 Sustainable Energy Systems</p>";
  
  //UCLA
  var uclaClasses = "<h2>Mechanical Engineering</h2>";
  uclaClasses += "<p>133AL. Power Conversion Thermodynamics Laboratory</p>";
  uclaClasses += "<p>136. Energy and Environment</p>";
  
  //get the value
  var valu = selecter.options[selecter.selectedIndex].id;
  
  if (valu == "berk") {result.innerHTML = berkClasses;}
  if (valu == "davis") {result.innerHTML = davisClasses;}
  if (valu == "irvine") {result.innerHTML = irvineClasses;}
  if (valu == "ucla") {result.innerHTML = uclaClasses;}
}