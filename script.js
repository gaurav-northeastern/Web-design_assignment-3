//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var studentCount = 3
var teacherCount = 3

function StudentName(studentCount) {
  return "Student " + studentCount
}
function TeacherName(studentCount) {
  return "Teacher " + studentCount
}


function addRecord() {

  const table = document.getElementById("myTable").querySelector("tbody");

  const tr = document.createElement("tr");


  const td1 = document.createElement("td");
  td1.innerHTML = `<input type="checkbox" onclick="selectRecord(this)" /><br /><br />  
                     <img src="down.png" width="25px" onclick="toggleDropDown(this)" />`;

  const td2 = document.createElement("td");
  td2.innerHTML = "Student " + (++studentCount);

  const td3 = document.createElement("td");
  td3.innerHTML = "Teacher " + (++teacherCount);

  const td4 = document.createElement("td");
  td4.innerHTML = "Approved";

  const td5 = document.createElement("td");
  td5.innerHTML = "Fall";

  const td6 = document.createElement("td");
  td6.innerHTML = "TA";

  const td7 = document.createElement("td");
  td7.innerHTML = Math.round(Math.random() * 100000); // Random budget number

  const td8 = document.createElement("td");
  td8.innerHTML = "100%";

  const td9 = document.createElement("td");

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);
  tr.appendChild(td9);

  table.appendChild(tr);


  const dropDownRow = document.createElement("tr");
  dropDownRow.className = "dropDownTextArea";
  dropDownRow.style.display = "none";

  const dropDownTd = document.createElement("td");
  dropDownTd.colSpan = "8";
  dropDownTd.innerHTML = `
      Advisor:<br /><br />
      Award Details<br />
      Summer 1-2014(TA)<br />
      Budget Number: <br />
      Tuition Number: <br />
      Comments:<br /><br /><br />
      Award Status:<br /><br /><br />
    `;

  dropDownRow.appendChild(dropDownTd);
  table.appendChild(dropDownRow);
  alert("Student " + studentCount + " Record added successfully")

}









function selectRecord(checkBox) {
  const selectedRow = checkBox.parentElement.parentElement;


  if (checkBox.checked) {

    selectedRow.style.backgroundColor = "yellow";


    let lastCell = selectedRow.cells[8];

    if (!lastCell || !lastCell.querySelector(".delete-button")) {

      let newCell = lastCell || selectedRow.insertCell(8);


      newCell.innerHTML = `
        <button class="delete-button" type="button" onclick="onDeleteRow(this)">Delete</button>
        <button class="edit-button" type="button" onclick="UpdateAlert(this)">Edit</button>
      `;
    }
  } else {

    selectedRow.style.backgroundColor = "";


    if (selectedRow.cells.length === 9) {
      selectedRow.deleteCell(8);
    }
  }


  updateSubmitButton();
}
function UpdateAlert() {
  console.log('edit')
  let div1 = document.createElement('div')

  div1.classList = "cancelBtn"

  div1.style.backgroundColor = 'white';
  div1.style.left = '50%';
  div1.style.top = '50%';
  div1.style.width = '50%';
  div1.style.border = '1px solid black';

  div1.innerHTML = `<h3>Edit details of student </h3>
  <p>Teacher name </p>
  <p>Student name </p>
  <button id="cancelButton">Cancel</button>
  <button id="btnEdit">Update</button>
  
  
  `



  document.body.appendChild(div1)



  document.getElementById('cancelButton').addEventListener('click', function () {
    document.body.removeChild(div1);
  })


  document.getElementById('btnEdit').addEventListener('click', function () {
    alert('Record updated successfully')
    document.body.removeChild(div1);
  })



}




function updateSubmitButton() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const submitButton = document.getElementById("button");


  const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  if (anyChecked) {
    submitButton.style.backgroundColor = "orange";
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = "";
    submitButton.disabled = true;
  }
}


function onDeleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();


  function toggleDropDown(img) {
    const row = img.parentElement.parentElement;
    const nextRow = row.nextElementSibling;
    if (nextRow && nextRow.classList.contains("dropDownTextArea")) {

      nextRow.style.display = nextRow.style.display === "none" ? "table-row" : "none";
    }
  }
}


function initializeTable() {

  document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      selectRecord(checkbox);
    });


    if (checkbox.checked) {
      selectRecord(checkbox);
    }
  });
}


window.onload = function () {
  initializeTable();
}
