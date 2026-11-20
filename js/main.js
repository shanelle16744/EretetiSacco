const litres=document.querySelector('#litres');
const litresMessage= document.querySelector('#litres-message');

console.log(litres);
console.log(litresMessage);
console.log(document);/*----Takes the entire html document---*/

function checkLitres(){
     let amount =Number(litres.value);
     if (litres.value ===""){
        litresMessage.textContent ="";
        litres.classList.remove("invalid");
     }
     else if(amount <=0){
      litresMessage.textContent
      ="Litres must be more than 0";
      litres.classList.add("invalid");
     }
     else{
      litresMessage.textContent ="";
      litres.classList.remove("invalid");
     }
}
litres.addEventListener('input',checkLitres);
const member = document.querySelector("#member");
const memberMessage= document.querySelector("#member-message");
let memberRegex= /^ER-[0-9]{4}$/;
function checkMember(){
   let typed= member.value.trim().toUpperCase();
   member.value=typed;
   if(memberRegex.test(typed)){
      memberMessage.textContent ="";
      memeber.classList.remove("invalid");
   }
   else{
      memberMessage.textContent=
      "A member number looks like ER-0001";
      member.classList.add("invalid");
   }
}
member.addEventListener("blur",checkMember);

    