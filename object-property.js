const students = [
    {id:21,name:'Omar'},
    {id:41,name:'Sunny'},
    {id:31,name:'Zahir'},
    {id:34,name:'Kumir'}

]

const names = students.map(s=>s.name);
const ids = students.map(s=>s.id);
const bigger = students.filter(s=>s.id>30);
const bigger1 = students.find(s=>s.id>30);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(bigger1);