'use strict';
// 1 задание
// Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по
// Фаренгейту.
// Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.
alert("1 задание")
var Tc = +prompt("Задает температуру в градусах по Цельсию\nВведите температуру:");
var Tf = (9 / 5) * Tc + 32;
Tf = Math.round(Tf);
alert("Температура по Фаренгейту = " + Tf);


// // 2 задание
// // Объявить две переменные: admin и name. Записать в name строку "Василий";
// // Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).
alert("2 задание");
var admin, name = "Василий";
admin = name;
alert("admin = " + admin);
//alert(`admin = ${admin}`);


// // 3 задание
// // Чему будет равно JS-выражение 1000 + "108"?
alert("3 задание");
alert(1000 + "108");
alert("получается \"1000108\" (string) потому что происходит склеивание, а что бы получилось сложение должно быть" +
    " два числа (number)")

// // 4 задание Самостоятельно разобраться с атрибутами тега script (async и defer)
alert("4 задание\nHTML файлы грузятся постепенно (сверху вниз), как только он доходит до тега script он не" +
    " покажет часть страницы под ним пока не загрузить script (а он может грузится долго). Решить эту проблему" +
    " помогут атрибуты async или defer скрипт async выполнится, как только загрузится – возможно, до того, как весь " +
    "документ готов. А defer подождёт готовности всего документа");
