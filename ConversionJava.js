
	var startUnit, endUnit, startNum, endNum, userNum;
	
	function myReset() { 
		initiate();
	}
			
	function initiate() {
		startUnit = "Starting Units";
		endUnit = "Ending Units";
		startNum = 0;
		endNum = 0;
		flip = 0;
		topUnit = startUnit;
		topNum = startNum;
		bottomUnit = endUnit;
		bottomNum = endNum;
				
		document.getElementById('Step2StartUnit').innerHTML = startUnit; 
		document.getElementById('Step2EndUnit').innerHTML = endUnit;
		document.getElementById('Step3UserUnit').innerHTML = startUnit;	
		document.getElementById('Step3TopUnit').innerHTML = topNum + " " + topUnit; 
		document.getElementById('Step3BottomUnit').style.padding = "0em 0em 0em 14.5em";
		document.getElementById('Step3BottomUnit').innerHTML = bottomNum + " " + bottomUnit;
	}
			
	function labelUpdate() {
		if (document.forms["myform"]["Step1StartUnit"].value === "")
			startUnit = "Start Units";
		else
			startUnit = document.forms["myform"]["Step1StartUnit"].value;
				
		if (document.forms["myform"]["Step1EndUnit"].value === "")
			endUnit = "End Units";
		else
			endUnit = document.forms["myform"]["Step1EndUnit"].value;
					
		if (document.forms["myform"]["Step2StartNum"].value === "")
			startNum = 0;
		else
			startNum = document.forms["myform"]["Step2StartNum"].value;
		
		if (document.forms["myform"]["Step2EndNum"].value === "")
			endNum = 0;
		else
			endNum = document.forms["myform"]["Step2EndNum"].value;
		
		if ( flip === 0)	{
			topUnit = startUnit;
			topNum = startNum;
			bottomUnit = endUnit;
			bottomNum = endNum;
		}
		else	{
			topUnit = endUnit;
			topNum = endNum;
			bottomUnit = startUnit;
			bottomNum = startNum;
		}
				
		document.getElementById('Step2StartUnit').innerHTML = startUnit; 
		document.getElementById('Step2EndUnit').innerHTML = endUnit;
		
		document.getElementById('Step3UserUnit').innerHTML = startUnit;
		document.getElementById('Step3TopUnit').innerHTML = topNum + " " + topUnit; 
		x = startUnit.length*.45 + 9;
		pdg = "0em 0em 0em " + x +"em";
		document.getElementById('Step3BottomUnit').style.padding = pdg;
		document.getElementById('Step3BottomUnit').innerHTML = bottomNum + " " + bottomUnit;
	
	}
			
	function Flip() {
		if (flip === 0) 
			flip = 1;	//flipped
		else
			flip = 0;	//not flipped
		
		topUnitTemp = topUnit;
		topNumTemp = topNum;
		topUnit = bottomUnit;
		topNum = bottomNum;	
		bottomUnit = topUnitTemp;
		bottomNum = topNumTemp;
		document.getElementById('Step3TopUnit').innerHTML = topNum + " " + topUnit; 
		document.getElementById('Step3BottomUnit').innerHTML = bottomNum + " " + bottomUnit;
	}
			
			function Ex1() {
				msg = "";
				msg = "\bExample:\nConvert 3.2 centimeters to inches.\n\nStart: Centimeters \nEnd:  Inches";
				alert(msg);
			}

			function Ex2() {
				msg = "";
				msg = "\bExample:\nConvert 3.2 centimeters to Inches.\n\nLook up the relation between centimeters and inches. \n\nCentimeters: 2.54 \nInches: 1";
				alert(msg);
			}

			function Ex3() {
				msg = "";
				msg = "Calculate 3.2 cm times 1 inch divide by 2.54 cm. \n\nEnter:\n3.2 * 1 / 2.54 = ";
				alert(msg);
			}
			
	function Check() {
		//Is everything filled in?
		flag = 0;
		errorMsg = "Please fill in: \n";
		startUnit = document.forms["myform"]["Step1StartUnit"].value;
		endUnit = document.forms["myform"]["Step1EndUnit"].value;
		topNum = document.forms["myform"]["Step2StartNum"].value;
		bottomNum = document.forms["myform"]["Step2EndNum"].value;
		numberStart = document.forms["myform"]["Step3UserNum"].value;
	
		if ( startUnit === "")	{
			flag = 1;
				errorMsg += "Starting Units\n";
			}
		if ( endUnit === "")	{
			flag = 1;
			errorMsg += "Ending Units\n";
		}
		if ( topNum === "" )	{
			flag = 1;
			errorMsg += "First Conversion Number\n";
		}
		if ( bottomNum === "")	{
			flag = 1;
			errorMsg += "Second Conversion Number\n";
		}
		if (numberStart === "")	{
			flag = 1;
			errorMsg += "Starting number from your problem.";
		}
			
		if (flag === 1)	{
			alert(errorMsg);
			return;
		}
		
		//Are there zeroes?
		
		flag = 0;
		errorMsg = "Please replace zeros with another number in: \n";
		
		if (topNum === "0" ){
			flag = 1;
			errorMsg += "First conversion number\n";
		}
		if (bottomNum === "0")	{
			flag = 1;
			errorMsg += "Second conversion number\n";
		}
		if (numberStart === "0")	{
			flag = 1;
			errorMsg += "Number from your problem.";
		}

		if (flag === 1)	{
			alert(errorMsg);
			return;
		}
			
				//Check for numeric entries.
		flag = 0;
		errorMsg = "Please use only numbers in: \n";
		if ( isNaN(topNum )	){
			flag = 1;
			errorMsg += "First conversion number\n";
		}
		if( isNaN( bottomNum ) ){
			flag = 1;
			errorMsg += "Second conversion number\n";
		}
		if( isNaN( numberStart )) {
			flag = 1;
			errorMsg += "Number from your problem.";
		}
		
		if (flag === 1) {
			alert(errorMsg);
			return;
		}

		//Is the conversion factor the right way up?
		flag = 0;
		if (bottomUnit !== startUnit)	{
			flag = 1;
			errorMsg = "Try flipping your conversion factor.";
		}
				
		if (flag ===1)	{
			alert(errorMsg);
			return;
		}
				
		if (flip ===1)	{
			topNumTemp = topNum;
			topNum = bottomNum;
			bottomNum = topNumTemp;
		}

				//Calculate what we think the answer is....
				myAnswer = numberStart * topNum / bottomNum;
				goodMsg = "I think the answer is: " + myAnswer;
				alert(goodMsg);

			}