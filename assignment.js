// Kilometer To Meter functional area

function kilometerToMeter(km) {
          if (km < 0) {                                               // can't input any negative value
                    return ("Please input positive number");
          }
          else {
                    return km * 1000 + "m";
          }
}

var result = kilometerToMeter(50);
// console.log(result);



// Budget Calculate functional area

function budgetCalculator(clock, phone, laptop){
          var totalPrice = 0;
          if((clock < 0) || (phone < 0) || (laptop < 0)){              // can't input any negative value
                   return ("Please input positive number");  
          }
          else{
                    var clockPrice = clock * 50;
                    var phonePrice = phone * 100;
                    var laptopPrice = laptop * 500;
                    totalPrice = clockPrice + phonePrice + laptopPrice;

          }
          return "$"+totalPrice;

}
var result = budgetCalculator(6, 5, 5);
// console.log(result);

// HotelCost functional area

function hotelCost(day) {
          if (day <= 10) {
                    var dailyCost = day * 100;
          }
          else if (day <= 20) {
                    var firstCost_Part = 10 * 100;
                    var remainingDays = day - 10;
                    var secondCost_Part = remainingDays * 80;
                    var dailyCost = firstCost_Part + secondCost_Part;
          }
          else {
                    var firstCost_Part = 10 * 100;
                    var secondCost_Part = 10 * 80;
                    var remainingDays = day - 20;
                    var thirdCost_Part = remainingDays * 50;
                    var dailyCost = firstCost_Part + secondCost_Part + thirdCost_Part;
          }
          return dailyCost;
}
var totalCost = hotelCost();
// console.log(totalCost);


// Mega Friends functional area

function megaFriend(n){
         var longest_length = 0;
         var largest_name = []; 
         for (let i = 0; i < n.length; i++) {
                   const element = n[i];
                    if(element.length > longest_length){
                              longest_length = element.length;
                    }
                   
         }
         for(let x = 0; x < n.length; x++){
                   const second_element = n[x];
                   if(second_element.length == longest_length){
                             largest_name.push(second_element);
                   }
         }
         return largest_name;

}
var name = ["kamal", "Jama", "Tomals","Abdullah", "Khalid ben Oalid","ght","lablo tamal", "almin"];
var result2 = megaFriend(name);
// console.log(result2);


