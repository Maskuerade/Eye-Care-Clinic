const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

console.log(_supabase) 
// Doctors
const thead = document.getElementById('app') 
let exambtn = document.getElementById("exam-btn")
thead.innerHTML = "";

let ExaminationPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedExamination } = await _supabase
    .from("Examination")
    .select("*");
  resolve(retrievedExamination);
});


ExaminationPromise.then((Examination)=>{
  
  const thead = document.getElementById("app");
  thead.innerHTML = "";

  let heads = "<th>Exam ID</th>";
  heads += "<th>Doctor's ID</th>";
  heads += "<th>Patient's ID</th>";
  heads += "<th>Date</th>";
  heads += "<th>Time</th>";
  heads += "<th>Prescription</th>";
 
  heads += "<th>Actions</th>";

  thead.innerHTML = heads;
  const columnNames = ['Exam ID', 'Doctor ID','Patient ID', 'Date', 'Time', 'Prescription'];

  let tablebody = document
    .getElementById("dynamic-app-table")
    .getElementsByTagName("tbody")[0];
  tablebody.innerHTML= "";

  for (var i = 0; i < Examination.length; i++) {
    let item = Examination[i];
    let row = document.createElement("tr");

    let idcell = document.createElement("td");
    idcell.textContent = item.id;
    row.appendChild(idcell);

    let doctoridcell = document.createElement("td");
    doctoridcell.textContent = item.Doctor_ID;
    row.appendChild(doctoridcell);

    let patientidcell = document.createElement("td");
    patientidcell.textContent = item.Patient_ID;
    row.appendChild(patientidcell);

    let datecell = document.createElement("td");
    datecell.textContent = item.Date;
    row.appendChild(datecell);

    let timeCell = document.createElement("td");
    timeCell.textContent = item.Time;
    row.appendChild(timeCell);

    let prescriptionCell = document.createElement("td");
    prescriptionCell.textContent = item.Prescription;
    row.appendChild(prescriptionCell);


    let ActionsCell = document.createElement("td");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "deleteButton_" + i);
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("onclick", `deleteRow(this,"Examination",${item.id})`);
    ActionsCell.appendChild(deleteButton);

    row.appendChild(ActionsCell);

    row.style.textAlign = "center";
    tablebody.style.borderBottom = "3px solid black";
    tablebody.appendChild(row);
    tablebody.style.blockSize = "40px";
  }

})

exambtn.addEventListener("click", (e) =>{
  
  ExaminationPromise.then((Examination)=>{
  
    const thead = document.getElementById("app");
    thead.innerHTML = "";
  
    let heads = "<th>Exam ID</th>";
  heads += "<th>Doctor's ID</th>";
  heads += "<th>Patient's ID</th>";
  heads += "<th>Date</th>";
  heads += "<th>Time</th>";
  heads += "<th>Prescription</th>";
 
  heads += "<th>Actions</th>";
  
    thead.innerHTML = heads;
    const columnNames = ['Exam ID', 'Doctor ID','Patient ID', 'Date', 'Time', 'Prescription'];
  
    let tablebody = document
      .getElementById("dynamic-app-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML= "";
  
    for (var i = 0; i < Examination.length; i++) {
      let item = Examination[i];
      let row = document.createElement("tr");
  
      let idcell = document.createElement("td");
      idcell.textContent = item.id;
      row.appendChild(idcell);
  
      let doctoridcell = document.createElement("td");
      doctoridcell.textContent = item.Doctor_ID;
      row.appendChild(doctoridcell);
  
      let patientidcell = document.createElement("td");
      patientidcell.textContent = item.Patient_ID;
      row.appendChild(patientidcell);
  
      let datecell = document.createElement("td");
      datecell.textContent = item.Date;
      row.appendChild(datecell);
  
      let timeCell = document.createElement("td");
      timeCell.textContent = item.Time;
      row.appendChild(timeCell);
  
      let prescriptionCell = document.createElement("td");
      prescriptionCell.textContent = item.Prescription;
      row.appendChild(prescriptionCell);
  
  
      let ActionsCell = document.createElement("td");
  
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute("onclick", `deleteRow(this,"Examination",${item.id})`);
      ActionsCell.appendChild(deleteButton);
  
      row.appendChild(ActionsCell);
  
      row.style.textAlign = "center";
      tablebody.style.borderBottom = "3px solid black";
      tablebody.appendChild(row);
      tablebody.style.blockSize = "40px";
    }
  
  })
  
  });


//Others
let srgbtn = document.getElementById("surgery-btn")
let SurgeriesPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedSurgeries } = await _supabase
    .from("Surgeries")
    .select("*");
  resolve(retrievedSurgeries);
});


srgbtn.addEventListener("click", (e) => {
  SurgeriesPromise.then((Surgeries) => {
      const thead = document.getElementById("app");
      thead.innerHTML = "";

      let heads = "<th>Surgery ID</th>";
      heads += "<th>Doctor's ID</th>";
      heads += "<th>Patient's ID</th>";
      heads += "<th>Date</th>";
      heads += "<th>Time</th>";
     
      heads += "<th>Actions</th>";

      thead.innerHTML = heads;
      const columnNames = ['Surgery ID', 'Doctor ID','Patient ID', 'Date', 'Time'];
  
      let tablebody = document
        .getElementById("dynamic-app-table")
        .getElementsByTagName("tbody")[0];
      tablebody.innerHTML = "";
  
      for (var i = 0; i < Surgeries.length; i++) {
        let item = Surgeries[i];
        let row = document.createElement("tr");
  
        let idcell = document.createElement("td");
      idcell.textContent = item.id;
      row.appendChild(idcell);
  
      let doctoridcell = document.createElement("td");
      doctoridcell.textContent = item.Doctor_ID;
      row.appendChild(doctoridcell);
  
      let patientidcell = document.createElement("td");
      patientidcell.textContent = item.Patient_ID;
      row.appendChild(patientidcell);
  
      let datecell = document.createElement("td");
      datecell.textContent = item.Date;
      row.appendChild(datecell);
  
      let timeCell = document.createElement("td");
      timeCell.textContent = item.Time;
      row.appendChild(timeCell);

      let ActionsCell = document.createElement("td");
  
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute("onclick", `deleteRow(this,"Surgeries",${item.id})`);
      ActionsCell.appendChild(deleteButton);
    
      row.appendChild(ActionsCell);
    
      row.style.textAlign = "center";
      tablebody.style.borderBottom = "3px solid black";
      tablebody.appendChild(row);
      tablebody.style.blockSize = "40px";
      }
    })
    });

    function deleteRow(button,tableName,id){

      async function DeleteFromTable(){
        const { data, error } = await _supabase
      .from(tableName)
      .delete()
      .eq( "id" , id)
      console.log('Item deleted')
      console.log("rerrrrrr", error);
      }
      DeleteFromTable()
      const rowtobeDeleted= button.parentNode.parentNode
      rowtobeDeleted.remove()
    }