let X = function (j) {
    this.i = 0;
    this.j = j;
    // this.getJ = function () {
    //     return this.j
    // }
}

X.prototype.getJ(() => {
    return this.j
})


x1 = new X(1)
x1.i
x1.j
x1.getJ();
// x2 = new X(2)