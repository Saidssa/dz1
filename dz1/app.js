// //№1
// let name = prompt('введите имя')
// let firstname = prompt('введите фамилию')
// alert('Здраствуйте' +" "+name+ " "+firstname)

//№2
// let number1= +prompt('введите первое число')
// let number2= +prompt('введите второе число')
// if (number1 < number2){
//     console.log(number1)
// }else if (number2 < number1){
//     console.log(number2)
// }else{
//     console.log('равны')
// }

//#3
let color=prompt ('введите цвет светофора').toLowerCase();
if(color=== 'красный') {
    console.log('стоп')
}else if (color=== 'зеленый') {
    console.log('иди')
}else if (color=== 'желиый') {
    console.log('жди')
}else {
    alert('вы ввели другой цвет')
}
