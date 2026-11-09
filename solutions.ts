const multiplyValue = (value : number, multiplier? : number) : number => {
    if (multiplier === undefined) {
        return value * 2;
    }

    return value * multiplier;
}


const processInput = (value : string | number | boolean) : string | number => {
    if(typeof value === "string") {
        return value.trim().toLowerCase();
    } else if (typeof value === "number") {
        return value * 10;
    } 
    
    return value ? "Active" : "Inactive";
    
}


const formatCoordinate = (coordinate : readonly [latitude : number, longitude : number, locationName : string]) : string => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`
}

const concatenateArrays = <T>(...arrays: T[][]) : T[] => {
    return arrays.reduce((acc, curr) => { 
        return [...acc, ...curr]}, []);
}

interface Course {
    title : string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses  = (courses : Course[], minStudents : number) : Course[] => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
}

const pluckValues = <T, k extends keyof T>(items : T[], key: k): T[k][] => {
    return items.map((item) => item[key]);
}

class Employee {

    constructor(protected name: string, private baseSalary: number) {}

    getDetails() : string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }

}

class Manager extends Employee {
    
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary);
    }

    getRoleInfo() : string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } else {
            setTimeout(() => resolve("Access Granted"), 1000);
        }
    });
}