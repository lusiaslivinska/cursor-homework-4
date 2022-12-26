console.log ("Homework#4");

const students=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"];
const themes=["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]
const marks=[4,5,5,3,4,5];

const girls=new Array();
const boys=new Array();
const pairs=new Array();
const pairThemes=new Array();
const studMarks=new Array();
const newMarks=new Array();
const general=new Array();
let num;
for (let i=0; i<students.length;i++){
    if (students[i].endsWith("а")){
        girls.push(students[i]);    
    } else
    {
        boys.push(students[i]);  
    }

}
for (let i=0; i<girls.length;i++){
    pairs.push([girls[i],boys[i]]);
}
for (let i=0; i<pairs.length;i++){
    pairThemes.push([girls[i],boys[i],themes[i]]);
}
for (let i=0; i<students.length;i++){
    studMarks.push([students[i],marks[i]]);
}
function generateMark(){
    const maxMark=5;
    const minMark=1;
    for(let i=0; i<pairThemes.length;i++){
          
          newMarks[i]=Math.random()*maxMark;
          newMarks[i]=newMarks[i]+minMark;
          newMarks[i]=Math.floor(newMarks[i]);

    }
}
generateMark();
for (let i=0; i<pairs.length;i++){
    general.push([girls[i],boys[i],themes[i],newMarks[i]]);
}


console.log("Завдання №1",pairs);
console.log("Завдання №2",pairThemes);
console.log("Завдання №3",studMarks);
console.log("Завдання №4",general);

