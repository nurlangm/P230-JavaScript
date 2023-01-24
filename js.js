class Calculator{
   constructor(initialNumber){
    this.result=initialNumber;
   }
   plus(Number){
    this.result+=Number;
    return this
   }
   minus(Number){
    this.result=this.result-=Number;
    return this
   }
   multiply(Number){
    this.result=this.result*=Number;
    return this
   }
   divide(Number){
    this.result=this.result/=Number;
    return this
   }
}
const value=new Calculator(50).plus(6).minus(30).multiply(3).divide(2)
console.log(value);

