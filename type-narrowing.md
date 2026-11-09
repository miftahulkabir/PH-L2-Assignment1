# Type Narrowing in TypeScript
## Introduction
Type narrowing in Typescript is a process where we select a precise type from a broader type. Whenever we have a data which is in form of a broader type like string | number we will narrow down this type to specific type like string or number so that we can perform those type specifics operations on that data. We do this by applying type narrowing concepts like typeguard, truthiness, equality, instanceof etc.

## Differents Kinds of Type Narrowing
The first concept I am going to write about is typeguarding which is basically ensuring a specific type of for a data using typeof operator to perform operations on that data. For example:

```typescript
const print = (value : string | number) : string | number {
    return value.toLowerCase() // this will show error
}  
```
Here value can be number instead of string and if it's number toLowerCase can't be perform. So a solution is:
```typescript
const print = (value : string | number) : string | number {
    if (typeof value === "string") {
        return value.toLowerCase() // this will not show any error
    }
    return value
}
```
Here before performing toLowerCase() we are checking weather it is string or not with typeof operator. This is one kind of type narrowing.

Another concept in type narrowing is truthiness which is if a data can have null or undefined with other data types we can simply check weather the data is not null or undefined before accesing the other data types properties or methods. 
```typescript
type Obj = {
    data1: string,
    data2 : string
} | null

const printObj = (obj: Obj) => {
    console.log(obj.data1) // this will show error
}
```
Solution to this is checking the truthiness of obj weather which means if it is not null it is true and we do this by if(obj)

```typescript
const printObj = (obj: Obj) => {
    if(obj) {
        console.log(obj.data1)    
    }
}
```


Then comes equality where we check weather two data have the same type so that we can perform opertaions on them together like checking weather a and b is number before performing a+b.  

```typescript
const adding = (a:number | boolean, b: number | boolean) : number | string => {
    return a + b // this will show error
}
```
Solution is to check weather a or b same type and weather a or b either number or boolean with ===
```typescript
const adding = (a:number | boolean, b: number | boolean) : number | string => {
    if(a === b) {
        if(typeof a === "number" && typeof b === "number") {
            return a + b
        } else {
            return Number(a) + Number(b)
        }
    }

    return "Not possible"
}
```
Then we can do type narrowing with instanceof operator where we check weather an object belongs to a particular class or not. For example:

```typescript
const showDate = (date : Date | string) : string => {
    return date.toISOString() // this will show error
}
```
As date can be either instance of Date or a string toISOString can' be perform on here so we have to narrow down our type and check weather date is an instance of Date class or not.
```typescript
const showDate = (date : Date | string) : string => {
    if(date instanceof Date) {
        return date.toISOString() /// this will show no erro
    }

    return date;
}
```
Here we are checking weather date is instance of Date class which let us safely perform toISOString method which is available to Date class but not string.

Another type of typenarrowing is using in operator to check weather a certain property or method exists in an object. For example:
```typescript
type Dog = {
    bark() : string
}

type Cat = {
    meow() : string
}

const animalSound = (animal : Dog | Cat) : string => {
    return animal.bark() /// this will show error
} 

```

Here animal.bark() will show error because bark only exist specifically to Dog but animal is Dog | Cat. To solve this we will use the in operator to check weather bark exists in animal and only then use it and if not then use meow.

```typescript
const animalSound = (animal : Dog | Cat) : string => {
    if("bark" in animal) {
        return animal.bark()
    } 
    return animal.meow()
} 
```

Lastly we have discriminant union and to understand this an example is:
```typescript
type Chicken = {
    kind : "bird",
    canFly : boolean
}

type Cow = {
    kind : "cattle"
    givesMilk : boolean
}

const myAnimal = (animal : Chicken | Cow) => {
    return animal.canFly // this will show erro
}
```

Here animal.canFly() will show error because it can Chicken or Cow and Cow doesn't have that canFly() property and to solve this we will use the common property which both objects shares which is kind and we will check weather it is chicken or cow and only then perform operation.
```typescript
const myAnimal = (animal : Chicken | Cow) => {
    if(animal.kind === "bird") {
        return animal.canFly
    }

    return animal.givesMilk
}
```

## Conclution

Type narrowing allows us to narrow down the type to a specific type so that we can safely perform operations on the data during runtime without any error.