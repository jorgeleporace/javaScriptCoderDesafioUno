class Operation {
    op1;
    operacion;
    op2;
    resultado;
    constructor(op1, operacion, op2) {
        this.op1 = op1;
        this.operacion = operacion;
        this.op2 = op2;
    }
    calcular() {
        switch (this.operacion) {
            case "+":
                this.resultado = this.op1 + this.op2
                break;
            case "-":
                this.resultado = this.op1 - this.op2
                break;
            case "*":
                this.resultado = this.op1 * this.op2
                break;
            case "/":
                this.resultado = this.op1 / this.op2
                break
        }
        return this.resultado
    }
}
