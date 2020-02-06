function count(stroka, bykva) {
    return stroka.split('').filter(it => it == bykva).length
}

const stroka = prompt('Введите Ваше предложение');
console.log (stroka);

const bykva = prompt ('Количество какой буквы вы хотите подсчитать?');
console.log (bykva);

console.log (count(stroka, bykva));