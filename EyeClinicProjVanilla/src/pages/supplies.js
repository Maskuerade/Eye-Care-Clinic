const data = [
    { machinename: "Retinal Camera", sno: "982398", model: "ENA87", inventory: "4", supplier: "ABCS", spno: "01283019823" },
    { machinename: "Phoropter", sno: "83278", model: "MNS77", inventory: "8", supplier: "AJHG", spno: "01283019823" },
    { machinename: "7829423", sno: "72633", model: "ENA87", inventory: "3", supplier: "ABCS", spno: "01283019823" },
    { machinename: "7829423", sno: "3227289", model: "MNS77", inventory: "4", supplier: "KKWWL", spno: "012893344" },
    { machinename: "7829423", sno: "298792", model: "ENA87", inventory: "7", supplier: "ABHD", spno: "01283019823" },
    { machinename: "7829423", sno: "7634829", model: "MNS77", inventory: "12", supplier: "KLDE", spno: "012377463" },
  ];
  
  function createLinkElement(href, rel, crossorigin) {
    const link = document.createElement("link");
    link.href = href;
    link.rel = rel;
    if (crossorigin) {
      link.crossOrigin = crossorigin;
    }
    return link;
  }
  
  function createImageElement(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
  }
  
  function createTableCellElement(text) {
    const td = document.createElement("td");
    td.textContent = text;
    return td;
  }
  
  function supplies() {
    const supplyTableDiv = document.createElement("div");
    supplyTableDiv.className = "supply-table";
  
    const table = document.createElement("table");
  
    const tableHeaderRow = document.createElement("tr");
    const tableHeaderColumns = [
      "Machine Name",
      "Serial Number",
      "Model",
      "Inventory",
      "Supplier",
      "Supplier Phone Number"
    ];
  
    tableHeaderColumns.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      tableHeaderRow.appendChild(th);
    });
  
    table.appendChild(tableHeaderRow);
  
    data.forEach((val) => {
      const tableRow = document.createElement("tr");
  
      Object.values(val).forEach((value) => {
        const td = createTableCellElement(value);
        tableRow.appendChild(td);
      });
  
      table.appendChild(tableRow);
    });
  
    supplyTableDiv.appendChild(table);
  
    return supplyTableDiv;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector("main");
    mainElement.appendChild(supplies());
  });
  