function add() {
    // Get the input values
    var name = document.getElementById("name").value;
    var clas = document.getElementById("class").value;
    var rlno = document.getElementById("rlno").value;
    var dob = document.getElementById("dob").value;
    var stdid = document.getElementById("stdid").value;

    // Get the table body
    var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

    // Insert a new row at the end of the table
    var newRow = table.insertRow();

    // Insert new cells for each input value
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    // Append the input values to the cells
    cell1.innerHTML = name;
    cell2.innerHTML = clas;
    cell3.innerHTML = rlno;
    cell4.innerHTML = dob;
    cell5.innerHTML = stdid;
    
    // Clear the input fields
    document.getElementById("studentForm").reset();
}