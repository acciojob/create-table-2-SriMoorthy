function createTable(){
    let rn = prompt('Input number of rows')
	let cn = prompt('Input number of columns')
    let table = document.getElementById('myTable')
    for(let i = 0 ; i < rn ; i++){
        let newrow = table.insertRow(i);
        for(let j = 0 ; j < cn ; j++){
            let newcell = newrow.insertCell(j)
            newcell.innerHTML = `Row-${i} Column-${j}`
        }
    }
    return table
}
