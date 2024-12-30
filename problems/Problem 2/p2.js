function myFunction(x) {
    var y = 1;
    while (x > 1) {
        y = y * x * (x - 1);
        x -= 2;
    }
    document.write(y);
}
document.write("The fictorian of this value is: " );
let x = myFunction( 5 );