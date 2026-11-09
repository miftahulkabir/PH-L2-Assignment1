# Access Modifiers in TypeScript

## Introduction
Access modifiers in TypeScript are keywords that help us to control the visibility and accessiblity of class properties and methods. It plays an important role in encapsulation, inheritance, abstraction so that we can do software design with OOP paradigm. TypeScript gives us different types of access modifiers such as public, private, protected and readonly.

## Different types of Access Modifiers

### Public
The Public access modifier makes a property or method accessable from anywhere inside or outside the class. When we make a property or method of a class public we can access or change that property or method inside that class or even outside of that class if we create an object using that class. For example:

```typescript
class User {
    public name : string;
    public age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public getName() : string {
        return this.name
    }
}

const user = new User("Miftahul", 27)

console.log(user.name)
user.name = "Karim"
console.log(user.getName())

```
Here we can see we can access the name property directly using user.name and also can change the value of user.name as name property is public. Also as getName is public so we can access it from outside class. We could also access them from the classes that inherits this User class.

### Protected
With protected access modifier we can access a property or method within that class and classes that inhertis that class but no ohter places. If a class inherits another class the child class can access all the protected properties of the parent class. We can use the protected properties inside the class and in the child classes. For example:
```typescript
class Employee {
    public name : string;
    protected salary : number;
    protected age : number

    constructor(name: string, salary: number, age: number) {
        this.name = name
        this.salary = salary
        this.age = age
    }
}

class Manager extends Employee {
    protected bonus : number

    constructor(name: string, salary: number, age: number, bonus: number) {
        super(name, salary, age)
        this.bonus = bonus
    }

    public getTotalSalary() {
        return this.salary + this.bonus
    }
}

const manager = new Manager("A", 1200, 30, 20)
const employee = new Employee("B", 1122, 23)

manager.getTotalSalary()
manager.salary // this will show error
manager.bonus // this will show error

employee.salary // this will show error
```
Here mananger.salary, manager.bonus or emplpyee.salary all will show error as they are protected but inside getTotalSalary we used this.salary which is the property of Employee without any error as Manager is subclass of Employee.

### Private

We use private access modifiers when we don't want a class's property or method be accessed outside of that class. That means private properties can not accessed outside the class not even by the subclasses as well. For example
```typescript
class Employee {
    public name : string;
    protected salary : number;
    protected age : number;
    private nid: number;

    constructor(name: string, salary: number, age: number, nid:number) {
        this.name = name
        this.salary = salary
        this.age = age
        this.nid = nid
    }

    public getNid() {
        return this.nid
    }
}

class Manager extends Employee {
    protected bonus : number

    constructor(name: string, salary: number, age: number, nid: number, bonus: number) {
        super(name, salary, age, nid)
        this.bonus = bonus
    }

    public getTotalSalary() {
        return this.salary + this.bonus
    }

    public printNid() {
        console.log(this.nid) //this will show error
    }
}


const employee = new Employee("B", 1122, 23, 234)

employee.nid //this will show error
```

Here employee.nid will show error as it is public and same is true inside Manager class where this.nid showing error even though it is a subclass.

### readonly

With readonly we can read the property or method but can not change it. Difference between readonly and private is in private we can not read or change the property or method but with readonly we can read the property or method but can't change it. For example
```typescript
class A {
    readonly data : string

    constructor(data:string) {
        this.data = data
    }
}

const obj = new A("abc")

obj.data // valid

obj.data = "something" // this will show error
```

Here reading value from obj.data is valid but changing value from obj.data will show error.

## Conclusion
Access modifiers let us hideout sensitive data when outside world. With private we restrict it everywhere and with protected we restrict it everywhere except subclasses. We use getter setter methods to access those private and protected datas which encapsulates it and it gives us extra power to filter out or put our logic over what values can assigned to our properties. To follow the OOP paradigm access modifiers are inevitable.