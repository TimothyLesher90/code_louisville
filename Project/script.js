
//Tip Calculator code
function calculateTip () {
    var total = document.getElementById("total").value
    var tip_total = document.getElementById(tip_total).value

    //Validates if the total label is blank
    if(total.text = "" )
    {
        alert("Not Tipping is a Crime")
    }
    //Validate if Tip total is selected
    if(tip_total.checked){

    }
    // Calculates the tip
    tipAmount.text = total * tip_total;

    //Calculate the total with the tip
     grandTotal.text = tipAmount + total;
}//bracees for button

     // Action when button is clicked
    calc.onclick = calculateTip();
    //End Tip Calculator code










//Degree code
function convertTemp() {
        const degree = 32; //load 32 into degree for formula
        const cel = 1.8; //load 1.8 into cel for formula
        const fOn = (5/9); //load 5/9 into fOn for formula
        var degreesF = document.querySelector("degreesF").value;
        var degreesC = document.querySelector("degreesC").value;

        degreesF = (degreesC * cel) + degree; //Convert Farenheight to Celcius F = (C * 1.8) +32
        degreesC = (degreesF - degree) * fOn //convert Celcius to Farenheight C = (F - 32) * (5/9)

        //Validation to make sure there is numbers in labels
        
        //if degreeF is blank run degree F and display The temperatur is degrees farenheight else run degreesC
        if(degreeF.value === '') 
        { 
        return(degreesF);
        }
        else
        {
        return(degreesC);
        }
} //bracees for button
    
//button 
convert.onclick = convertTemp();
//End of degree code
















//Distance code
function convertDistance() {
    //validation if labels are empty

    //convert Miles to Kilometers

    //Convert Kilometers

}//bracees for button

    //Output after conversion 

//End of distance code
