let bill_amount = 0.00;
let number_of_persons = 0.00;
let select_tip_percentage = "";
let custom_tip = "";
let select_tip_selectors = document.querySelectorAll(".select-tip-value");
document.getElementById("bill-amount").addEventListener("change", (event) => {
    bill_amount = event.target.value;
});
document.getElementById('number-of-input').addEventListener("change", (event) => {
    number_of_persons = event.target.value;
});
document.getElementById('custom-input-value').addEventListener("change", (event) => {
    custom_tip = event.target, value;
});

select_tip_selectors.forEach((select_tip_node,index)=>{
    if(select_tip_node.classList.contains("tip-enabled")){
        select_tip_node.classList.remove("tip-enabled");
    }
    select_tip_node.addEventListener("click",(event)=>{
        select_tip_selectors[index].classList.add("tip-enabled")
        select_tip_percentage=select_tip_node.textContent;
    })
})