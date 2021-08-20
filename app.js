function updateMemoryPrice(isSixteen){
 const memoryCost = document.getElementById('memory-cost');
 if(isSixteen){
   memoryCost.innerText = 180;
 }else{
   memoryCost.innerText = 0;
 }
}
function updateStoragePrice(storage){
const storageCost = document.getElementById('storage-cost');
if(storage == 1){
storageCost.innerText = 180;
}
else if(storage == 512){
 storageCost.innerText = 100;
}
else if(storage == 256){
 storageCost.innerText = 0;
}
}
function updateDelivery(isFree){
 const deliveryCost = document.getElementById('delivery-cost');
 if(isFree){
  deliveryCost.innerText = 0;
 }else{
  deliveryCost.innerText = 20;
 }
}

function updatetotalPrice(){
 const bestPrice = document.getElementById('best-price').innerText;
 const memoryPrice = document.getElementById("memory-cost").innerText;
 const storagePrice = document.getElementById("storage-cost").innerText;
 const deliveryPrice = document.getElementById("delivery-cost").innerText;
 const totalCost = parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice) + parseInt(bestPrice);
 document.getElementById('total-cost').innerText = totalCost ;
}
//updating memory
document.getElementById('btn-eightGb').addEventListener('click',function(){
updateMemoryPrice(false);
updatetotalPrice();
})
document.getElementById('btn-sixteenGb').addEventListener('click',function(){
 updateMemoryPrice(true);
 updatetotalPrice();
})
//updating storage
document.getElementById("storage-twoFiFtySixGb").addEventListener("click", function () {
 updateStoragePrice(256);
 updatetotalPrice();
});
document.getElementById("storage-fiveOneTwoGb").addEventListener("click", function () {
 updateStoragePrice(512);
 updatetotalPrice();
});
document.getElementById("storage-oneTb").addEventListener("click", function () {
 updateStoragePrice(1);
 updatetotalPrice();
});
//updating delivery
document.getElementById("delivery-charge").addEventListener("click", function () {
  updateDelivery(false);
  updatetotalPrice();
});
document.getElementById("delivery-free").addEventListener("click", function () {
  updateDelivery(true);
  updatetotalPrice();
});
//promo code
document.getElementById("btn-apply").addEventListener("click", function () {
  const promoInputField = document.getElementById('promo-input');
  const totalDiscount = document.getElementById('total-discount');
  const totalCost = document.getElementById('total-cost').innerText;
  const totalPrice = parseInt(totalCost);
  if(promoInputField.value == 'stevekaku'){
   totalDiscount.innerText = totalPrice * (0.8);
  }
  promoInputField.value ="";
});