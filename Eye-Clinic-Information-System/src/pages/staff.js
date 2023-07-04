const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

console.log(_supabase) 


// Doctors
const thead = document.getElementById('doc') 
let drbtn = document.getElementById("dr-btn")
thead.innerHTML = "";

let DoctorsPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedDoctors } = await _supabase
    .from("Doctor")
    .select("*");
  resolve(retrievedDoctors);
});


DoctorsPromise.then((Doctor)=>{
  
  const thead = document.getElementById("doc");
  thead.innerHTML = "";

  let heads = "<th>Doctor ID</th>";
  heads += "<th>First Name</th>";
  heads += "<th>Last Name</th>";
  heads += "<th>Working Hours</th>";
  heads += "<th>Speciality</th>";
  heads += "<th>Phone Number</th>";
  heads += "<th>Address</th>";
 
  heads += "<th>Actions</th>";

  thead.innerHTML = heads;
  const columnNames = ['Doctor ID', 'First Name','Last Name', 'Working Hours', 'Speciality', 'Phone Number', 'Address'];

  let tablebody = document
    .getElementById("dynamic-table")
    .getElementsByTagName("tbody")[0];
  tablebody.innerHTML= "";

  for (var i = 0; i < Doctor.length; i++) {
    let item = Doctor[i];
    let row = document.createElement("tr");

    let idcell = document.createElement("td");
    idcell.textContent = item.id;
    row.appendChild(idcell);

    let FirstNamecell = document.createElement("td");
    FirstNamecell.textContent = item.FirstName;
    row.appendChild(FirstNamecell);

    let LastNamecell = document.createElement("td");
    LastNamecell.textContent = item.LastName;
    row.appendChild(LastNamecell);

    let workinghourscell = document.createElement("td");
    workinghourscell.textContent = item.WorkingHours;
    row.appendChild(workinghourscell);

    let SpecialityCell = document.createElement("td");
    SpecialityCell.textContent = item.Specialty;
    row.appendChild(SpecialityCell);

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
    deleteButton.setAttribute("onclick", `deleteRow(this,"Doctor",${item.id})`);
    ActionsCell.appendChild(deleteButton);
    row.appendChild(ActionsCell);

    row.style.textAlign = "center";
    tablebody.style.borderBottom = "3px solid black";
    tablebody.appendChild(row);
    tablebody.style.blockSize = "40px";
  }

})

drbtn.addEventListener("click", (e) =>{
  
  DoctorsPromise.then((Doctor)=>{
  
    const thead = document.getElementById("doc");
    thead.innerHTML = "";
  
    let heads = "<th>Doctor ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Working Hours</th>";
    heads += "<th>Speciality</th>";
    heads += "<th>Phone Number</th>";
    heads += "<th>Address</th>";
   
    heads += "<th>Actions</th>";
  
    thead.innerHTML = heads;
    const columnNames = ['Doctor ID', 'First Name','Last Name', 'Working Hours', 'Speciality', 'Phone Number', 'Address'];
  
    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML= "";
  
    for (var i = 0; i < Doctor.length; i++) {
      let item = Doctor[i];
      let row = document.createElement("tr");
  
      let idcell = document.createElement("td");
      idcell.textContent = item.id;
      row.appendChild(idcell);
  
      let FirstNamecell = document.createElement("td");
      FirstNamecell.textContent = item.FirstName;
      row.appendChild(FirstNamecell);
  
      let LastNamecell = document.createElement("td");
      LastNamecell.textContent = item.LastName;
      row.appendChild(LastNamecell);
  
      let workinghourscell = document.createElement("td");
      workinghourscell.textContent = item.WorkingHours;
      row.appendChild(workinghourscell);
  
      let SpecialityCell = document.createElement("td");
      SpecialityCell.textContent = item.Specialty;
      row.appendChild(SpecialityCell);
  
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
      deleteButton.setAttribute("onclick", `deleteRow(this,"Doctors",${item.id})`);
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
let othersbtn = document.getElementById("others-btn")
let OthersPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedOthers } = await _supabase
    .from("Others")
    .select("*");
  resolve(retrievedOthers);
});


  othersbtn.addEventListener("click", (e) => {
    OthersPromise.then((Others) => {
      const thead = document.getElementById("doc");
      thead.innerHTML = "";

      let heads = "<th>Staff ID</th>";
      heads += "<th>First Name</th>";
      heads += "<th>Last Name</th>";
      heads += "<th>Working Hours</th>";
      heads += "<th>Position</th>";
      heads += "<th>Phone Number</th>";
      heads += "<th>Address</th>";
      heads += "<th>Actions</th>";

      thead.innerHTML = heads;
      const columnNames = ['Staff ID', 'First Name','Last Name' ,'Working Hours', 'Position', 'Phone Number', 'Address'];
  
      let tablebody = document
        .getElementById("dynamic-table")
        .getElementsByTagName("tbody")[0];
      tablebody.innerHTML = "";
  
      for (var i = 0; i < Others.length; i++) {
        let item = Others[i];
        let row = document.createElement("tr");
  
        let IDcell = document.createElement("td");
        IDcell.textContent = item.id;
        row.appendChild(IDcell);
  
        let firstnamecell = document.createElement("td");
        firstnamecell.textContent = item.First_Name;
        row.appendChild(firstnamecell);
  
        let lastnamecell = document.createElement("td");
        lastnamecell.textContent = item.Last_Name;
        row.appendChild(lastnamecell);
  
        let workinghourscell = document.createElement("td");
        workinghourscell.textContent = item.Working_Hours;
        row.appendChild(workinghourscell);
  
        let phoneNumberCell = document.createElement("td");
        phoneNumberCell.textContent = item.Phone_Number;
        row.appendChild(phoneNumberCell);

        let specialityCell = document.createElement("td");
        specialityCell.textContent = item.Speciality;
        row.appendChild(specialityCell);
  
        let addressCell = document.createElement("td");
        addressCell.textContent = item.Address;
        row.appendChild(addressCell);

        let ActionsCell = document.createElement("td");
  
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("id", "deleteButton_" + i);
        deleteButton.classList.add("delete-button");
        deleteButton.setAttribute("onclick", `deleteRow(this,"Others",${item.id})`);
        ActionsCell.appendChild(deleteButton);
    
        row.appendChild(ActionsCell);
    
        row.style.textAlign = "center";
        tablebody.style.borderBottom = "3px solid black";
        tablebody.appendChild(row);
        tablebody.style.blockSize = "40px";
      }
    })
    });


      

//Nurses
let nursebtn = document.getElementById("nurse-btn")

  // nursebtn.addEventListener("click", (e) => {
  //     const thead = document.getElementById("btats");
  //     thead.innerHTML = "";
  
  //     //zawed aw ghayar column heading and repeat for each button 
  //     let heads = "<th>Nurse ID</th>";
  //     heads += "<th>Name</th>";
  //     // heads += "<th>Last Name</th>";
  //     heads += "<th>Working Hours</th>";
  //     heads += "<th>Dr Name</th>";
  //     heads += "<th>Phone Number</th>";
  //     heads += "<th>Address</th>";
  //     heads += "<th>Actions</th>";
  
  //     thead.innerHTML = heads;
  //     const columnNames = ['Nurse ID', 'Name', 'Working Hours', 'Dr Name', 'Phone Number', 'Address'];
    
  //     let tablebody = document
  //       .getElementById("dynamic-table")
  //       .getElementsByTagName("tbody")[0];
  //     tablebody.innerHTML = "";
  
  //     for (var i = 0; i < Nurses.length; i++) {
  //       let item = Nurses[i];
  //       let row = document.createElement("tr");
  
  //       let IDcell = document.createElement("td");
  //       IDcell.textContent = item.ID;
  //       row.appendChild(IDcell);
  
  //       let firstnamecell = document.createElement("td");
  //       firstnamecell.textContent = item.name;
  //       row.appendChild(firstnamecell);
  
  //       let workinghourscell = document.createElement("td");
  //       workinghourscell.textContent = item.workinghours;
  //       row.appendChild(workinghourscell);
  
  //       let drnamecell = document.createElement("td");
  //       drnamecell.textContent = item.drname;
  //       row.appendChild(drnamecell);
  
  //       let phoneNumberCell = document.createElement("td");
  //       phoneNumberCell.textContent = item.phonenum;
  //       row.appendChild(phoneNumberCell);
  
  //       let addressCell = document.createElement("td");
  //       addressCell.textContent = item.address;
  //       row.appendChild(addressCell);
  
  //       row.style.textAlign = "center";
  //       tablebody.style.borderBottom = "3px solid black";
  
  //       tablebody.appendChild(row);
  
  //       tablebody.style.blockSize = "40px";
  //     }
  //   });

    

let NursesPromise = new Promise (async (resolve, rejct)=>{
  let {data:retrievedNurses} = await _supabase
  .from("Nurses")
  .select("*")
  resolve(retrievedNurses)
})


NursesPromise.then((data)=>{
  console.log("Nurses,", data)
})



nursebtn.addEventListener("click", (e) =>{
  NursesPromise.then((Nurses)=>{

  
    const thead = document.getElementById("doc");
    thead.innerHTML = "";
 
    let heads = "<th>Nurse ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Working Hours</th>";
    heads += "<th>Phone Number</th>";
    heads += "<th>Address</th>";
    heads += "<th>Actions</th>";

    thead.innerHTML = heads;
    // const columnNames = ['Doctor ID', 'First Name','Last Name', 'Working Hours', 'Speciality', 'Phone Number', 'Address'];

    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML= "";

    for (var i = 0; i < Nurses.length; i++) {
      let item = Nurses[i];
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

      let workinghourscell = document.createElement("td");
      workinghourscell.textContent = item.Working_Hours;
      row.appendChild(workinghourscell);

      let PhoneNumberCell = document.createElement("td");
      PhoneNumberCell.textContent = item.Phone_Number;
      row.appendChild(PhoneNumberCell);

      let AddressCell = document.createElement("td");
      AddressCell.textContent = item.Address;
      row.appendChild(AddressCell);


      let ActionsCell = document.createElement("td");

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute("onclick", `deleteRow(this,"Nurses",${item.id})`);
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
