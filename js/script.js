function Insurance() {
	var varName = document.getElementById("name").value;
	var varAge = document.getElementById("age").value;
	var varHp = document.getElementById("hp").value;
	var varCountry = document.getElementById("country").value;
	var cost = "";


	console.log(varName);
	console.log(varAge);
	console.log(varHp);
	console.log(varCountry);

	
	var level = "One"; // you can try changing the value

switch (varCountry) {
   case 'Austria':
       cost = Number(varHp) * 100 / Number(varAge) + 50;;
       console.log(cost);
       break;
   case 'Hungary':
       title = 'Level 2';
       console.log(title);
       break;
   case 'Greece':
       title = 'Level 3';
       console.log(title);
       break;
   default:
       title = "This string it's not a level";
       console.log(title);
       break;
}


	/**
	 * if (varCountry = "Austria") {
		cost = Number(varHp) * 100 / Number(varAge) + 50; 
		} else if (varCountry = "Hungary") {
		cost = Number(varHp) * 120 / Number(varAge) + 100;
		} else if (varCountry = "Greece") {
		cost = Number(varHp) * 150 / (Number(varAge)+3) + 50;
		}
**/
		console.log(cost)



	document.getElementById("result").innerHTML = varName + ", your insurance costs " + cost.toFixed(2) + "€";

}

function showResult() {
	document.getElementById('container2').style.display="block";
  }


document.getElementById("submitbutton").addEventListener("click", Insurance,);
document.getElementById("submitbutton").addEventListener("click", showResult,);
