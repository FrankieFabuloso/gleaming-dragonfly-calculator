var OPERATIONS_STACK = []
document.addEventListener('DOMContentLoaded', function() {
  var grayButtons =
    addEventListeners( document.getElementsByClassName('calculator-button') )
  var opButtons =
    addEventListeners( document.getElementsByClassName('calculator-op-button') )
})

function addEventListeners( DOMElements ){
  for( var i = 0; i< DOMElements.length; i++ ){
    var element = DOMElements[i]
    if( element.innerText.trim() === 'AC') {
      element.addEventListener( 'click', resetCalculator )
    } else if( element.innerText.trim() === '=' ) {
      element.addEventListener( 'click', doTheMath )
    } else if( isNaN(parseInt(element.innerText.trim())) ){
      element.addEventListener('click', pushOperator )
    } else {
      element.addEventListener('click', pushNumber )
    }
  }
}

function resetCalculator(){
  OPERATIONS_STACK = []
  var calculatorScreen = document.getElementsByClassName('calculator-screen')
  calculatorScreen[0].innerText = 0
}

function renderToCalcScreen() {
  var calculatorScreen = document.getElementsByClassName('calculator-screen')
  calculatorScreen[0].innerText = OPERATIONS_STACK[1].toString() || OPERATIONS_STACK[1]
}

function pushNumber() {
  var bottomOfStack = OPERATIONS_STACK.shift()
  if( bottomOfStack && bottomOfStack === OPERATIONS_STACK[0] ) {
    OPERATIONS_STACK.unshift(this.innerText.trim())
  } else {
    OPERATIONS_STACK.unshift( parseInt((bottomOfStack || '') + this.innerText.trim() ))
  }
  console.log('OPERATIONS_STACK:', OPERATIONS_STACK)

}

function pushOperator() {
  var frontOfStack = OPERATIONS_STACK.pop()

  if( !isNaN(parseInt(frontOfStack)) ){
    OPERATIONS_STACK.push(this.innerText.trim())
    OPERATIONS_STACK.unshift(frontOfStack)
    OPERATIONS_STACK.unshift(frontOfStack)
  } else {
    OPERATIONS_STACK.push(this.innerText.trim())
  }
}

function doTheMath() {
  var currentValue = ''
  var shiftpedValue = ''
  var operators = ['X', '/', '-', '+']
  var leftHandOperator = OPERATIONS_STACK.shift()
  var operator = OPERATIONS_STACK.pop()

  switch( operator ) {
    case 'X':
      OPERATIONS_STACK.unshift(
        parseInt( leftHandOperator ) * parseInt( OPERATIONS_STACK.shift() )
      )
      OPERATIONS_STACK.unshift( leftHandOperator )
      OPERATIONS_STACK.push( operator )
      break

    case '/':
      OPERATIONS_STACK.unshift(
        parseFloat( (1/leftHandOperator) ) * parseInt( OPERATIONS_STACK.shift() )
      )
      OPERATIONS_STACK.unshift( leftHandOperator )
      OPERATIONS_STACK.push( operator )
      break

    case '-':
      OPERATIONS_STACK.unshift(
        -parseInt( leftHandOperator ) + parseInt( OPERATIONS_STACK.shift() )
      )
      OPERATIONS_STACK.unshift( leftHandOperator )
      OPERATIONS_STACK.push( operator )
      break

    case '+':
      OPERATIONS_STACK.unshift(
        parseInt( leftHandOperator ) + parseInt( OPERATIONS_STACK.shift() )
      )
      OPERATIONS_STACK.unshift( leftHandOperator )
      OPERATIONS_STACK.push( operator )
      break;

    default:
      OPERATIONS_STACK.unshift( leftHandOperator )
  }


  renderToCalcScreen()
  console.log('OPERATIONS_STACK: end ', OPERATIONS_STACK)
}
