const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

console.log(_supabase) 

const thead = document.getElementById('supplies') 
thead.innerHTML = "";

let SuppliesPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedSupplies } = await _supabase
    .from("Supplies")
    .select("*");
  resolve(retrievedSupplies);
});


SuppliesPromise.then((Supplies)=>{
  
  const thead = document.getElementById("supplies");
  thead.innerHTML = "";

  let heads = "<th>Device ID</th>";
  heads += "<th>Machine Name</th>";
  heads += "<th>Model</th>";
  heads += "<th>Inventory</th>";
  heads += "<th>Supplier</th>";
  heads += "<th>Supplier Phone Number</th>";
 


  thead.innerHTML = heads;
  const columnNames = ['Device ID', 'Machine Name','Model', 'Inventory', 'Supplier', 'Supplier Phone Number'];

  let tablebody = document
    .getElementById("dynamic-supply-table")
    .getElementsByTagName("tbody")[0];
  tablebody.innerHTML= "";

  for (var i = 0; i < Supplies.length; i++) {
    let item = Supplies[i];
    let row = document.createElement("tr");

    let idcell = document.createElement("td");
    idcell.textContent = item.id;
    row.appendChild(idcell);

    let FirstNamecell = document.createElement("td");
    FirstNamecell.textContent = item.Machine_Name;
    row.appendChild(FirstNamecell);

    let LastNamecell = document.createElement("td");
    LastNamecell.textContent = item.Model;
    row.appendChild(LastNamecell);

    let gendercell = document.createElement("td");
    gendercell.textContent = item.Inventory;
    row.appendChild(gendercell);

    let historyCell = document.createElement("td");
    historyCell.textContent = item.Supplier;
    row.appendChild(historyCell);

    let PhoneNumberCell = document.createElement("td");
    PhoneNumberCell.textContent = item.Supplier_Phone_Number;
    row.appendChild(PhoneNumberCell);


    row.style.textAlign = "center";
    tablebody.style.borderBottom = "3px solid black";
    tablebody.appendChild(row);
    tablebody.style.blockSize = "40px";
  }

})

