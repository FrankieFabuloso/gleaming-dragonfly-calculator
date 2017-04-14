// class definition for Calculator
function Calculator(rootDOMNode){
  this.operators = []
  this.operands = []
  this.latestCharClicked = undefined
  this.rootDOMNode = rootDOMNode
  this.onClick = this.onClick.bind(this)
  this.arithmeticPrecedence  = {
    '-': 0,
    '+': 0,
    '/': 1,
    'X': 1
  }
  this.bindEventListeners()
}

document.addEventListener('DOMContentLoaded', function() {
  var myCalc = new Calculator(document.querySelector('.calculator'))
})

// front-end browser stuff
Calculator.prototype.bindEventListeners = function(){
  const buttons = this.rootDOMNode.querySelectorAll('.calculator-button')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', this.onClick)
  }
}

Calculator.prototype.onClick = function(event){
  var clickedNodeData = event.target.innerText

  if( (event.target.classList).contains('calculator-op') ){
    this.pushOperand( clickedNodeData )
  } else {
    this.pushOperator( clickedNodeData )
  }
  // check special cases to force evaluation after a stack hits a certian size
  this.rootDOMNode.querySelector('.calculator-screen').innerText = this.operands[this.operands.length - 1] || 0
  this.checkStacks()
}

// Calculator work stuff
Calculator.prototype.checkStacks = function() {

}

Calculator.prototype.pushOperand = function( value ) {
  if( this.arithmeticPrecedence[value] < this.arithmeticPrecedence[this.operators[0]] ){
    this.evaluateExpression()
  }

  switch( value ) {
    case '=':
      this.evaluateExpression()
      break

    case '+/-':
      this.negateTopOperand()
      break

    case 'AC':
      this.clearAll()
      break

    case 'C':
      this.removeLatestOperand()
      break

    case '%':
      this.percentigizeTopOperand()
      break

    default:
      this.validateOperator( value )
  }

  this.latestCharClicked = 'operator'
}


Calculator.prototype.pushOperator = function( value ) {
  if( this.latestCharClicked === 'operand' ){
    this.operands.push( this.operands.pop() + value )
  } else {
    this.operands.push( value )
  }

  this.latestCharClicked = 'operand'
}

// triggered actions
Calculator.prototype.evaluateExpression = function() {

  while( this.operators.length > 0 ){
    var currentOperator = this.operators.pop()
    var currentOperands = [ this.operands.pop(), this.operands.pop() ]

    switch( currentOperator ){
      case 'X':
        console.log( 'mult:', currentOperator )
        this.operands.push( this.multiply(currentOperands[0], currentOperands[1]) )
        break
      case '/':
        console.log( 'div:', currentOperator )
        this.operands.push( this.divide(currentOperands[0], currentOperands[1]) )
        break
      case '+':
        console.log( 'add:', currentOperator )
        this.operands.push( this.add(currentOperands[0], currentOperands[1]) )
        break
      case '-':
        console.log( 'sub:', currentOperator )
        this.operands.push( this.subtract(currentOperands[0], currentOperands[1]) )
        break
      default:
        console.log( 'What is `', currentOperator, '`? Never heard of her...' )
    }
  }

  console.log( 'this.operands:', this.operands )
}

// expression opporation methods
Calculator.prototype.negateTopOperand = function() {
  var operandToNegate = Number( this.operands.pop() )
  this.operands.push( -operandToNegate )
}


Calculator.prototype.clearAll = function() {
  this.operands = []
  this.operators = []
}

Calculator.prototype.removeLatestOperand = function() {
  this.operands.pop()
}

Calculator.prototype.percentigizeTopOperand = function() {
  var operandToPercent = Number( this.operands.pop() )
  this.operands.push( operandToPercent/100 )
}

Calculator.prototype.validateOperator = function( value ) {
  if( Object.keys(this.arithmeticPrecedence).includes(value) ) {
    this.operators.push( value )
  }
}
// arithmetic operations
Calculator.prototype.multiply = function( rightOperand, leftOperand ){
  rightOperand = Number( rightOperand )
  leftOperand = Number( leftOperand )

  return leftOperand * rightOperand
}

Calculator.prototype.divide = function( rightOperand, leftOperand ){
  rightOperand = Number( rightOperand )
  leftOperand = Number( leftOperand )

  return leftOperand / rightOperand
}

Calculator.prototype.add = function( rightOperand, leftOperand ){
  rightOperand = Number( rightOperand )
  leftOperand = Number( leftOperand )

  return leftOperand + rightOperand
}

Calculator.prototype.subtract = function( rightOperand, leftOperand ){
  rightOperand = Number( rightOperand )
  leftOperand = Number( leftOperand )

  return leftOperand  - rightOperand
}
