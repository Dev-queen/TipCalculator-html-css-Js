
function updateMyCalc (){
    console.log(`you called me?`)
    // converting bill to a number 
    let bill = Number(document.getElementById(`MyBill`).value) 
    let tipPercent = document.getElementById(`tipInput`).value
    let split = document.getElementById(`splitInput`).value;

    let tipValue = bill * (tipPercent / 100);
    let TipEach = tipValue / split ;
    let newBillEach = (bill + tipValue) / split ; 
    let totalBill = (bill + tipValue) ; 


    document.getElementById(`tipPercent`).innerHTML = tipPercent + " %" ;
    // document.getElementById(`tipValue`).innerHTML = tipValue + " $" ;
    document.getElementById(`tipValue`).innerHTML = formatMoney(tipValue);
    document.getElementById(`TotalBillWithTip`).innerHTML = formatMoney(totalBill) ;
    document.getElementById(`splitValue`).innerHTML =  totalPersons(split) ;
    document.getElementById(`BillEach`).innerHTML =  formatMoney(newBillEach) ;
    document.getElementById(`TipEach`).innerHTML =  formatMoney(TipEach)  ;

    



    // document.getElementById(`tipValue`).innerHTML = tipValue + " $";
    // document.getElementById(`TotalBillWithTip`).innerHTML = totalBill + " $";
    // document.getElementById(`splitValue`).innerHTML =  split ;
    // document.getElementById(`BillEach`).innerHTML =  ` ${newBillEach} $`;
    // document.getElementById(`TipEach`).innerHTML =  `${TipEach} $` ;

    

    console.log (tipValue,newBillEach)
    // console.log (typeof tipValue,typeof bill)
    // the value we get from bill is not a number but a string 
    // that's why we will convert 'bill' to a number rather than a string

    console.log({bill,tipPercent,split});


}


let container = document.getElementById(`contentUpdate`);
container.addEventListener ("input" , updateMyCalc);

function formatMoney(cash){
    // added this to round up our calculations or the 2nd decimal place specifically 
    // as 27.025 will be 27.03
    // console.log(cash)
    cash = Math.ceil(cash * 100) / 100;
    // console.log(cash)
    cash = cash.toFixed(2)
    return "$" + cash ;
}

function totalPersons(value){

    if (value === '1')
    return `${value} person` 
    else{
        return ` ${value} people` 
    }
    
}