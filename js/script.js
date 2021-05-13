const icon = document.querySelectorAll("#linkedin-logo path");
console.log('Executing JS');
console.log(icon.length);
for (i = 0; i < icon.length; i++) {
    console.log(`${i} is ${i}.getTotalLength()`);
}