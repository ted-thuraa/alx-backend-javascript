// Write an interface named Student that accepts the following elements: 
//firstName(string), lastName(string), age(number), and location(string)
export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


//Create two students
const studentA: Student = {
    firstName: 'tessy',
    lastName: 'kwena',
    age: 23,
    location: "Eldoret",
};
const studentB: Student = {
    firstName: 'Fiona',
    lastName: 'Gatwiri',
    age: 23,
    location: "Muringene",
};
//create an array named studentsList containing the two variables
const studentsList: Array<Student> = [
    studentA,
    studentB,
];

//Using Vanilla Javascript, render a table \
const styleSheet = `
    html {
        margin: 0;
        height: 100%;
    }
    body {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        margin: 10%;
      }
      table {
        border-collapse: collapse;
      }
      thead {
        font-weight: bold;
      }
      td {
        padding: 10px;
        border: 1px solid gray;
        cursor: pointer;
      }
      td:hover {
        background: gainsboro;
      }
      td:nth-child(1) {
        text-align: center;
      }
`;


export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);

    //and for each elements in the array, append a new row to the table
    for (const student of students) {
        const bodyRow = document.createElement('tr');
        //Each row should contain the first name of the student and the location
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }

    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};


displayStudents(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';