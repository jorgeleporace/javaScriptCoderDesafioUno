class Operation {
    op1;
    operacion;
    op2;
    constructor (op1,operacion,op2)
    {this.op1=op1;
      this.operacion=operacion;
     this.op2=op2;
    }
     calcular () {
            let resultado;
            switch (this.operacion){
                case "+":
                    resultado = this.op1 + this.op2
                    break;
                case "-":
                    resultado = this.op1 - this.op2
                    break;
                case "*":
                    resultado = this.op1*this.op2
                    break;
                case "/":
                    resultado = this.op1/this.op2
                    break
            }
            return resultado 
}
}
