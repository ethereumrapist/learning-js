TYPE CONVERSION G...........

string conversion

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

NUMERIC CONVERSION
```JS
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

basically just turns shit into a number, will go NaN if the string isnt fully a number, for example `x` or `9x273` exceptions are true and false, true = 1 and false = 0.

BOOLEAN CONVERSION

values that are by law empty will become 0, for example, undefined, null , an empty string (""), 0
values that are by law full will become 1, for example "1", 1, any non-empty string is true