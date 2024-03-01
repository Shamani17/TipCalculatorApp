let billValue=document.getElementById("bill")
let tipValue=document.getElementById("tip")
let number=document.getElementById("number")
let perperson=document.getElementById("perPerson")
let no=Number(number.innerText)
const calculateBill=()=>
{
    bill=Number(billValue.value)
    tip=Number(tipValue.value)/100
    totalTip=bill*tip
    total=totalTip+bill
    perpersonTotal=total/no
    perperson.innerText=`Rs.${perpersonTotal.toFixed(2)}`   //tofixed is used to set the number of decimal places 
}
const increasePeople=()=>
{
   ++no
   number.innerText=no 
   calculateBill()
}
const decreasePeople=()=>
{
    if(no==1)
    {
        alert("Less than 1 person is invalid")
        return
    }
    --no
    number.innerText=no
    calculateBill()
}