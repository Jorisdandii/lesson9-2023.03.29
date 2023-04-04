let str = `ABBACC`;

let arr = [];

for (let i = 0; i < str.length; i++) {
  if (arr.includes(str[i])) {
    console.log(str[i]);
  }
  arr.push(str[i]);
}
// ======================================
console.log('=========================================================================');
// ======================================

let arr1 = [
  { id: 1, name: `Jaloliddin` },
  { id: 2, name: `Sirojiddin` },
  { id: 3, name: `Fozil` },
  { id: 4, name: `Bobomurod` },
];

let filter = [];

function onSearch(text){
    for (let i of arr1){
        if(i.name.includes(text.toUpperCase()) || i.name.includes(text.toLowerCase())){
            filter.push(i);
        }
    }
}

onSearch('I');
console.log(filter);