const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

console.log(_supabase) 

const thead = document.getElementById('patients') 
thead.innerHTML = "";

let PatientsPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedPatients } = await _supabase
    .from("Patients")
    .select("*");
  resolve(retrievedPatients);
});


PatientsPromise.then((Patients)=>{
  
  const thead = document.getElementById("patients");
  thead.innerHTML = "";

  let heads = "<th>Patient ID</th>";
  heads += "<th>First Name</th>";
  heads += "<th>Last Name</th>";
  heads += "<th>Gender</th>";
  heads += "<th>Medical History</th>";
  heads += "<th>Phone Number</th>";
  heads += "<th>Address</th>";
 
  heads += "<th>Actions</th>";

  thead.innerHTML = heads;
  const columnNames = ['Patient ID', 'First Name','Last Name', 'Gender', 'Medical History', 'Phone Number', 'Address'];

  let tablebody = document
    .getElementById("dynamic-patient-table")
    .getElementsByTagName("tbody")[0];
  tablebody.innerHTML= "";

  for (var i = 0; i < Patients.length; i++) {
    let item = Patients[i];
    let row = document.createElement("tr");

    let idcell = document.createElement("td");
    idcell.textContent = item.id;
    row.appendChild(idcell);

    let FirstNamecell = document.createElement("td");
    FirstNamecell.textContent = item.First_Name;
    row.appendChild(FirstNamecell);

    let LastNamecell = document.createElement("td");
    LastNamecell.textContent = item.Last_Name;
    row.appendChild(LastNamecell);

    let gendercell = document.createElement("td");
    gendercell.textContent = item.Gender;
    row.appendChild(gendercell);

    let historyCell = document.createElement("td");
    historyCell.textContent = item.Medical_History;
    row.appendChild(historyCell);

    let PhoneNumberCell = document.createElement("td");
    PhoneNumberCell.textContent = item.Phone;
    row.appendChild(PhoneNumberCell);

    let AddressCell = document.createElement("td");
    AddressCell.textContent = item.Address;
    row.appendChild(AddressCell);


    let ActionsCell = document.createElement("td");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "deleteButton_" + i);
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("onclick", `deleteRow(this,"Patients",${item.id})`);
    ActionsCell.appendChild(deleteButton);

    row.appendChild(ActionsCell);

    row.style.textAlign = "center";
    tablebody.style.borderBottom = "3px solid black";
    tablebody.appendChild(row);
    tablebody.style.blockSize = "40px";
  }

})

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
