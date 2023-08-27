const calculateTemp=()=> {
    const numbertemp=document.getElementById('temp').value;
    //console.log(numbertemp);
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;

    const celTofah=(cel)=>{
        let fahrenheit= Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fahTocel=(fah)=>{
        let Celsius= Math.round((fah - 32) * 5/9);
        return Celsius;
    }

    let result;

    if(valueTemp=='cel'){
        result=celTofah(numbertemp);
        document.getElementById('resultContainer').innerHTML= result +'&#176 Fahrenheit';
    }
    else{
        result=fahTocel(numbertemp);
        document.getElementById('resultContainer').innerHTML= result+ '&#176 Celsius';
    }
} 