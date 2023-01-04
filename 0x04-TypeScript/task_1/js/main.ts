export interface Teacher  {
    //firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
    readonly firstName: string;
    readonly lastName: string;
    //fullTimeEmployee(boolean) this attribute should always be defined
    fullTimeEmployee: boolean;
    // yearsOfExperience(number) this attribute is optional
    yearsOfExperience?: number;
    // location(string) this attribute should always be defined
    location: string;
    // Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
    [index:string]: any;
}

//Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)
export interface Directors extends Teacher {
    numberOfReports: number;
}

// Write a function printTeacher:

// It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

// Write a Class named StudentClass:

// The constructor accepts firstName(string) and lastName(string) arguments
// The class has a method named workOnHomework that return the string Currently working
// The class has a method named displayName. It returns the firstName of the student
// The constructor of the class should be described through an Interface
// The class should be described through an Interface

export interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
  }
  
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass {
    private _firstName!: string;
    private _lastName!: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    workOnHomework() {
      return 'Currently working';
    }
  
    displayName() {
      return this._firstName;
    }
}

export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
    return new ctor(firstName, lastName);
}