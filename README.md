#  Mac Calculator Clone
## Team:

Frankie Rocha

Project: [#150-Mac Calculator Clone](http://jsdev.learnersguild.org/goals/150-Mac_Calculator_Clone.html)

Team Name: gleaming-dragonfly

## Stage 1

**Specs**

 - [x] All text is in the `Roboto` web font
 - [x]  Your HTML and CSS follows this style guide
 - [x]  The calculator is positioned in the center of the page, both vertically and horizontally
 - [x]  The calculator is a fixed size. It does not change in size when the page resizes.
 - [ ]  If the window is too small for the calculator, the page scrolls, both vertically and horizontally
 - [x]  Each button has a CSS transition to slightly darken the background color on hover over 100ms
 - [x]  Each button has a CSS transition to slightly darken the background color on click over 100ms
 - [x]  All class names re: the calculator are name-spaced under .calculator-…
 - [x]  Your stylesheet contains little to no duplicate style declarations


## Stage 2

**Specs**

- [x] Your JavaScript is written in ES5
- [ ] Your JavaScript follows this style guide
- [x] Your JavaScript defines 1 or less global variables
- [x] The Calculator display is not an <input>
- [x] Typing a relevant key at any point is reflected on the calculator
- [ ] Typing a relevant key causes the corresponding button on the calculator to appear to have been pressed. AKA flashes active
- [x] The state of the calculator is not be stored in the DOM
- [x] The mathematical operations for your calculator are each their own function, and are defined outside of any DOM event handler
- [ ] When the length of the number displayed exceeds the width available, the font-size deterministically drops

## Stage 3
**Specs**

- [ ] Each calculator acts independently.
- [ ] Clicking anywhere on a calculator focuses that calculator.
- [ ] Typing a relevant key affects the focused calculator.
- [ ] Use event delegation to avoid binding a click event listener to each button
- [ ] The focused calculator is opacity: 1
- [ ] The not-focused calculator is opacity: 0.5

## Stage 4
**Specs**
- [ ]Each mathematical operation should have it’s own API endpoint
- [ ] Each mathematical operation is done on the server
- [ ] Each request for a mathematical operation is a post request
- [ ] Each operation request responds with JSON
- [ ] When the calculator is waiting for an operation request response, it ignores all input


## Stage 5
**Specs**
- [ ]there is only one calculator on the page
- [ ] the calculator displays a scrolling history of calculations
- [ ] the most recent calculation result is at the bottom
- [ ] the scroll-back history is always scrolled to the bottom when a new operation result is added
- [ ] the calculator history is stored per visitor (browser)
- [ ] the express app uses a cookie to track individual visitors
- [ ] reloading the page restores the calculator history
- [ ] the server stores up to 100 calculation results
- [ ] all mathematical operations have their own function, defined outside of any express router handlers.
