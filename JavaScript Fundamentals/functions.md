declaring a function = 

```js

function xd(Parameters){
    // function body

    alert('yo g')
}

// call function

xd() -- alerts everyone
```


a variable declared in a function is local, which means it can only be used in the function, but a function can access variables on the outside.

```js 

let yo = 'yo'

function Hi(){

alert(yo) // will alert yo

let message = 'hello'
}

alert(message) -- //message is undefined

```

variables changed in the function will only be changed in the function until the function is called.


parameters are variables that can be called inside of a function, for example

```js

function white(white){
    alert(white)
}

white('blue')


``` 

the alert will be blue.

parameters can also be given a default message

```js

function blue(blue = 'blue'){
alert(blue)
}

```

blue() -- will alert blue

can also be assigned mid function

```js

function blue(blue){

if (blue === undefined){
    blue = 'Blue'
}


alert(blue)
}

```


returns.


basically returns data and stops a function

simplest example would be 

```js

function sum(x,y){
  return x + y
}

let result = sum(3,4)
alert(result)

```


tasks.


rewrite this with or and ? 
```js

function checkAge(age){
  if (age > 18) {
    return true || return confirm('Did parents allow you?');
}
}

function checkAge(age){
  (age = 18) ? return true || return confirm('Did parents allow you?')
}
}

```

make function

```js

function lowestnumber(number1, number2){
    if (number1 < number2 || number1 > number2){
        return number1
    }
}

lowestnumber(3,4)
