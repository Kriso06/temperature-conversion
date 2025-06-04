function convert(){
    let f=document.getElementById("from").value;
    let t=document.getElementById("to").value;
    let i=parseFloat(document.getElementById("in").value);
    let res;
    if(isNaN(i)){
        res="Please enter a valid number";
    }else{
        let temp;
        if(f==="Celsius") temp=i;
        else if(f==="Fahrenheit") temp=(i-32)*5/9;
        else temp=i-273.15;

        if(t==="Celsius") res=temp + " °C";
        else if(t==="Fahrenheit") res=(temp*9/5)+32 + " °F";
        else res=temp+273.15 + " °K";
    }
    document.getElementById("res").innerText=res;
}

function resetForm(){
    document.getElementById('in').value="";
    document.getElementById('res').innerText="";
}