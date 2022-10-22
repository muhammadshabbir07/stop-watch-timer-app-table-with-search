var stdData =
    [
        {
            name: "shabbir",
            age: 23,
            number: 567889039,
            gender: "male",
            rollno: 1
        },
        {
            name: "aqsa",
            age: 26,
            number: 567896788,
            gender: "female",
            rollno: 2
        },
        {
            name: "aiman",
            age: 12,
            number: 567787889,
            gender: "female",
            rollno: 3
        },
        {
            name: "mubashir",
            age: 27,
            number: 678956789,
            gender: "male",
            rollno: 4
        },
        {
            name: "john",
            age: 23,
            number: 567878899,
            gender: "male",
            rollno: 5
        }
    ]
var thead_tr = document.getElementById("thead_tr");
var tbody = document.getElementById("tbody");



for (let i = 0; i < Object.keys(stdData[0]).length; i++) {
    const element = stdData[i];
    var trTh = `<th scope="col">${Object.keys(element)[i]}</th>`
    thead_tr.innerHTML += trTh.toUpperCase()
}

for (let i = 0; i < Object.keys(stdData).length; i++) {
    const element = stdData[i];
    var trTh = `
    <tr>
        <td scope="row">${Object.values(element)[0]}</td>
        <td scope="row">${Object.values(element)[1]}</td>
        <td scope="row">${Object.values(element)[2]}</td>
        <td scope="row">${Object.values(element)[3]}</td>
        <td scope="row">${Object.values(element)[4]}</td>
    </tr>
    `
    tbody.innerHTML += trTh
}

function search(){
    var search = document.getElementById("search");
    var getsearchresult = stdData.find(x => x.rollno == search.value);

    var trTh = `
    <tr>
        <td scope="row">${getsearchresult.name}</td>
        <td scope="row">${getsearchresult.age}</td>
        <td scope="row">${getsearchresult.number}</td>
        <td scope="row">${getsearchresult.gender}</td>
        <td scope="row">${getsearchresult.rollno}</td>
    </tr>
    `
    tbody.innerHTML = trTh
    console.log(getsearchresult);
}

