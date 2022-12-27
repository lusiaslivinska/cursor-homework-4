function filterStudents(students,genderSwitch){
    return students.filter(function(person){
        return genderSwitch? person.endsWith('а'):true;
    });
}

function getPairs(first,second){
    const pairs =[];
    for (let i=0; i<first.length;i++){
        pairs.push([first[i],second[i]]);   
    }   
    return pairs;
}

function getThemes(students,subjects){
    const studThemes=[];
    for (let i=0; i<subjects.length;i++){
        const pair = students[i];
        studThemes.push([pair[0],pair[1],subjects[i]]);
    }
    return studThemes;
}

function studGetMark(students,marks){
    const studMarks=[];
    for (let i=0; i<students.length;i++){
        studMarks.push([students[i],marks[i]]);
}
    return studMarks;
}

function generateMark(pairs){
    const maxMark=5;
    const minMark=1;
    const newMarks=[];
    for(let i=0; i<pairs.length;i++){
          
          newMarks[i]=Math.random()*maxMark;
          newMarks[i]=newMarks[i]+minMark;
          newMarks[i]=Math.floor(newMarks[i]);

    }
    return newMarks;
}

function getMark(pairs,subjects,marks){
    const genList=[];
    for (let i=0; i<pairs.length;i++){
        const pair=pairs[i];
        genList.push([pair[0],pair[1],subjects[i],marks[i]]);
}
    return genList;
}