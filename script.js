console.log ("Homework#4");

const students=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"];
const themes=["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]
const marks=[4,5,5,3,4,5];

const girls =filterStudents(students,true);
const boys =filterStudents(students,false);

const pairs= getPairs(girls, boys);

const pairThemes =getThemes(pairs,themes);
const studMarks=studGetMark(students,marks);

const newMarks=generateMark(pairThemes);
const general=getMark(pairs,themes,newMarks);
console.log(pairs);
console.log(pairThemes);
console.log(studMarks);
console.log(general);
