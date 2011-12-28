// JavaScript Document

/********************************************************************
* File Name:   jscript.js
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
  var berkClasses = "<h1>University of California, Berkeley</h1>";
  var berkClasses = "<a href=\"#fulltime\">Skip to full time courses >></a>";
  berkClasses += "<p>Below are a list of courses one can take at the University to gain knowledge into the various streams on Engineering to gain base knowledge of Smart Grid.</p>";
  berkClasses += "<h2>UC Berkeley Specialized Programs of Study:</h2>";

  
  berkClasses += "Website: <a href=\"http://extension.berkeley.edu/spos/smartgrid.html\">http://extension.berkeley.edu/spos/smartgrid.html</a>";
  berkClasses += "<br>Brochure: <a href=\"http://extension.berkeley.edu/spos/pdf/sustainability.pdf\">http://extension.berkeley.edu/spos/pdf/sustainability.pdf</a>";
  berkClasses += "<br>Email Address: <a href=\"mailto:course@unex.berkeley.edu\">course@unex.berkeley.edu</a>";
  berkClasses += "<br>Phone: (510) 642-4151";
  
  berkClasses += "<h2>UC Berkeley Extension</h2>";
  berkClasses += "<h3>Smart Grid Technology</h3>";
  berkClasses += "<p>The entry-level program provides a solid foundation in smart grid technology (SGT), including a technical overview of networking, electrical engineering, and power transmission and distribution. In addition to a wide range of smart grid theory, you study deployment issues, vendors, demand shaping, and statutory and regulatory requirements—instruction that prepares one to seize new opportunities in the emerging field of networked power.</p>";
  berkClasses += "<h4>Who Will Benefit</h4>";
  berkClasses += "<p>Any sustainable professional looking for increased technical knowledge or a technology worker interested in migrating to SGT, the program provides the knowledge needed. The program is also an excellent fit if you're an urban planner, home developer, real estate professional or policy maker looking for new or advanced opportunities in public utilities, commercial construction, renewable energy or electric transportation.</p>";
  
  berkClasses += "<p class=\"course\">Smart Grids: Introduction</p>";
  berkClasses += "<p>Learn about the new intelligent energy grid that supports the green-energy initiatives of the 21st century. Study real-world value propositions, business perspectives and solution scenarios from business economics and technical practicalities points of view.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Command and Control</p>";
  berkClasses += "<p>In this survey course, you first review the communication technology for distribution automation of AC energy and then advance into technology trade-off considerations. You build a foundation for understanding the control network.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Energy-Efficient Transmission</p>";
  berkClasses += "<p>Learn about the challenges of high-power interconnections and review quality considerations.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Internet of Things</p>";
  berkClasses += "<p>Taking smart energy grids as a model, you investigate topics such as wireless sensor network issues, the role of middleware, radio frequency identification (RFID) and sensor network technologies and security and privacy issues.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Metering and Home Area Networks</p>";
  berkClasses += "<p>Gain a solid technical foundation for understanding smart meters and home power networking, including Open HAN system requirements, modern wireless sensor networks, home automation and ZigBee Smart Energy.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Microgrids</p>";
  berkClasses += "<p>Variety of microgrid topics, including distributed generation, wind, photovoltaics, fuel cells, supervisory control and data acquisition (SCADA) systems, securing smart grids, matching community needs, smart meters and devices.</p>";
  
  berkClasses += "<h3>Sustainability and Energy</h3>";
  berkClasses += "<p>Focus on energy use and its impact on the environment in the Professional Program in Sustainability and Energy. Understand the impact of current energy use patterns on climate change. Learn about climate change law, such as California's AB 32 and its impact on local government and businesses. Examine energy and sustainability from the perspectives of technology, municipal planning and policy. With the specialized knowledge you gain from this program—which is designed for professionals working in both the public and private sectors, from government agencies and nonprofit organizations to utility companies, energy consulting firms and other businesses—you are prepared to manage energy use and develop successful sustainable energy strategies.</p>";
  berkClasses += "<h4>Who Will Benefit</h4>";
  berkClasses += "<p>The curriculum is beneficial if you are a career changer or advancer; working professional in the public or private sector, including public agencies, utilities and energy conservation; energy consultant; business owner; nonprofit organization employee; or sustainability manager. The program is also ideal if you wish to better understand sustainable energy management.</p>";
  berkClasses += "<p>Upon successful completion of the program, you understand the principles of sustainability management and the impact of climate change law on businesses and government; have the necessary skills and knowledge to make assessments and analyze and manage issues related to energy use, climate change and sustainability; and focus your career on clean energy.</p>";
  
  berkClasses += "<p class=\"course\">Introduction to Sustainability Management</p>";
  berkClasses += "<p>Sustainability in the context of environmental, economic, and social forces that shape emerging policies and management decisions. Investigate the possibility of creating a common set of sustainability principles</p>";
  berkClasses += "<p class=\"course\">Climate Change and Law AB 32: What It Means for You</p>";
  berkClasses += "<p>Learn requirements set forth in AB 32 and other laws, and gain a solid understanding of related issues.</p>";
  berkClasses += "<p class=\"course\">Energy for Sustainability: Technology, Planning and Policy</p>";
  berkClasses += "<p>Evaluate policies, regulations, and laws at the local and state level. Learn how energy strategies impact residential and commercial sectors, corporations, and governments. Examine issues in science, technology, policy, law, and business.</p>";
  berkClasses += "<p class=\"course\">Energy Use and Climate Change</p>";
  berkClasses += "<p>Examine the threat from the lack of significant incentives to change behavior and shift habits toward sustainable energy consumption in the United States. Study the fundamental impacts from current energy use and the support infrastructure.</p>";
  
  //full time courses for UC Berkeley
  berkClasses += "<h2><a href=\"#\" name=\"fulltime\"></a>Full Time Courses</h2>";
  berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Mechanical+Engineering&p_dept_cd=MEC+ENG\" name=\"Mechanical Engineering\">Mechanical Engineering</a></h3>";
  berkClasses += "<h4>110.  Introduction to Product Development</h4>";
  berkClasses += "<h4>146.  Energy Conversion Principles</h4>";
  berkClasses += "<h4>C232.  Advanced Control Systems I.</h4>";
  berkClasses += "<h4>239.  Advanced Design and Automation</h4>";
  
  berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Electrical+Engineering+and+Computer+Sciences&p_dept_cd=EECS&p_path=*\">Electrical Engineering</a></h3>";
  berkClasses += "<h4>122.  Introduction to Communication Networks.</h4>";
  berkClasses += "<h4>C128.  Feedback Control Systems.</h4>";
  berkClasses += "<h4>224B.  Fundamentals of Wireless Communication.</h4>";
  
   berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Electrical+Engineering+and+Computer+Sciences&p_dept_cd=EECS&p_path=*\">Computer Science</a></h3>";
  berkClasses += "<h4>161.  Computer Security.</h4>";
  berkClasses += "<h4>195.  Social Implications of Computer Technology.</h4>";
  berkClasses += "<h4>261.  Security in Computer Systems.</h4>";
  berkClasses += "<h4>268.  Computer Networks.</h4>";
  berkClasses += "<h4>276.  Cryptography.</h4>";
  
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

/********************************************************************
* File Name:   jscript.js
*
* Description: Directs the user to get_school.php's proper function for
*				the school they have selected.
* 
* Programmer:  Kim Holmes 
*              zorianak@me.com
********************************************************************/
function addClasses2()
{
  var result = document.getElementById('resultsdiv');
  var selecter = document.getElementById('schools');
  
  var valu = selecter.options[selecter.selectedIndex].id;
  
  if (valu == "berk") {result.innerHTML = "<input type=\"submit\" value=\"Continue\" name=\"Continue_berk\" action=\"submit\" /> <input type=\"hidden\" id=\"berk\" name=\"berk\" value=\"berk\" />";
  }
  if (valu == "davis") {result.innerHTML = davisClasses;}
  if (valu == "irvine") {result.innerHTML = irvineClasses;}
  if (valu == "ucla") {result.innerHTML = uclaClasses;}
  
}