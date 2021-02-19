
//Tip Calculator code
let calc = document.getElementById('calc');

calc.addEventListener('click', function(){
    let total = document.getElementById('total').value;
    let tipTotal = document.getElementById('tipTotal').value;

    let tipamount = document.getElementById('tipamount').value = tipTotal/100*total;
    document.getElementById('grandTotal').value = parseFloat(total) + parseFloat(tipamount);

})
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
    const number = 1.609;

    //validation if labels are empty

    //convert Miles to Kilometers

    //Convert Kilometers

}//bracees for button

    //Output after conversion 

//End of distance code
