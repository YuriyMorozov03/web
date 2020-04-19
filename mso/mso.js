/*1. створити три map-а у першому {'виробник':'назва продукту'}, у другому {'вартість':'виробник'}, у третьому {'час доставки':'виробник'}
2. вивести в об'єкт товар із найменшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
3. вивести в об'єкт товар із найменшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}
4. вивести в об'єкт товар із найбільшою ціною у вигляді {'назва продукту':'вартість виробник час доставки'}
5. вивести в об'єкт товар із найбільшим часом доставки у вигляді {'назва продукту':'вартість виробник час доставки'}

Товари мають повторюватись*/
var firms = [];
var goods = [];
var prices = [];
var deliverytimes = [];


var map_a = new Map();
map_a.set('Bentley', 'Continental');
map_a.set('Volvo', 'XC90');
map_a.set('Daewoo', 'Matiz');
map_a.set('Nissan', 'Altima');
map_a.set('Skoda', 'Fabia');
map_a.set('Toyota', 'Aristo');

var map_b = new Map();
map_b.set(70000, 'Volvo');
map_b.set(55000, 'Daewoo');
map_b.set(55000, 'Daewoo');
map_b.set(350000, 'Bentley');
map_b.set(27000, 'Skoda');
map_b.set(167000, 'Nissan');

var map_c = new Map();
map_c.set(20201104, 'Bentley');
map_c.set(20200423, 'Bentley');
map_c.set(20200802, 'Daewoo');
map_c.set(20200411, 'Daewoo');
map_c.set(20201021, 'Toyota');
map_c.set(20200302, 'Volvo');


map_a.forEach((value, key) => {
		  goods.push(value);
		  firms.push(key);
});

map_b.forEach((value,key) => {
  		prices.push(key)
});

map_c.forEach((value,key) => {
  		deliverytimes.push(key)
});


var obj_1 = {};
var obj_2 = {};
var obj_3 = {};
var obj_4 = {};

function highestFeature(array) {
	  var index = 0;
	  var min = array[0];
	  var max = min;
	  for (i = 0; i < array.length; ++i) {
		    if (array[i] > max) {
			      max = array[i];
			      index = i;
	    }  
  }
  return index;
}
function lowestFeature(array) {
	var index = 0;
  	var min = array[0];
	for (i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			index = i;}
	    
  }
  return index;
}
var min1 = lowestFeature(prices);
var min2 = lowestFeature(deliverytimes);
var max1 = highestFeature(prices);
var max2 = highestFeature(deliverytimes);

obj_1[goods[min1]] = `${prices[min1]}, ${firms[min1]}, ${deliverytimes[min1]}`;
obj_2[goods[min2]] = `${prices[min2]}, ${firms[min2]}, ${deliverytimes[min2]}`;
obj_3[goods[max1]] = `${prices[max1]}, ${firms[max1]}, ${deliverytimes[max1]}`;
obj_4[goods[max2]] = `${prices[max2]}, ${firms[max2]}, ${deliverytimes[max2]}`;
console.log(obj_1);
console.log(obj_2);
console.log(obj_3);
console.log(obj_4);
