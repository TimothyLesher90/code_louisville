
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
let Convert = document.getElementById('Convert');

Convert.addEventListener('click', function(){
    let degreesF = document.getElementById('degreesF').value;
    let degreesC =  document.getElementById('degreesC').value = (degreesF-32)/(1.8);
})
    //End of degree code
    let convert = document.getElementById('convert');

    convert.addEventListener('click', function(){
        let mi = document.getElementById('mi').value;
        let km =  document.getElementById('km').value = mi*1.609;
    })