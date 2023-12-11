const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);
console.log(numbers[2]);
console.log(fruits.length);
fruits[1] = 'qiwi';
fruits.push('pineapple');
console.log(fruits.length);

//1
for(let i = 0; i < numbers.length; i++){
    if(i%2 == 0){
        Math.pow(i, 2)
        console.log(i)
    }
    else if(i%2 != 2){
        Math.pow(i, 3)
        console.log(i)
    }
}

//2
    const elementsClass1 = document.getElementsByClassName('myclass1');
    
    const elementsClass2 = document.getElementsByClassName('myclass2');
    
    const elementsClass3 = document.getElementsByClassName('myclass3');
    
    const Array = [];
    const elements = [elementsClass1, elementsClass2, elementsClass3];
    console.dir(elements[0][0].innerHTML)
    elements[0][0].innerHTML = "новый текст"
    for(let i = 0; i <= elements[0].length-1; i++){
        elements[0][i].innerHTML = "new text"
    }