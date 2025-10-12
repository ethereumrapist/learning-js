ok loops g finally im back. we must lock in.

while loops are pretty self explanatory

while (condition) {
    // blah blah blah
    // basically what you want ot loop
}

while one condition true, it does whats in the body until said condition is false

example:

```js

let g = 100

while (g < 100){
    alert('g.')
    ++g
}

```

do while loop syntax or whatever, basically same

```js

let i = 0

do{
  alert(i--)
}while (i < 3);


```


for loops. this is where it gets difficult g.

```js 
for (begin; condition; step) {
  // ... loop body ...
}

// proper example

for(let boss = 0; boss < 10; boss++){
  console.log(boss g)

  if (boss = 6){
    console.log( yo g its over g )
    break
  }

  // if you do a continue instead of break, itll skip the current iteration, so itll say yo g its over g instead of boss g and that.

  if (boss = 6){
    console.log( yo g its over g)
    continue
  }
  
}

```
break just breaks the loop, continue continues it and skips the iteration
