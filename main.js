/* document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const rows = parseInt(document.getElementById("rows").value, 10);
    const columns = parseInt(document.getElementById("columns").value, 10);
    const quantity = parseInt(document.getElementById("quantity").value, 10);

    if (!rows || !columns || !quantity || rows <= 0 || columns <= 0) {
      alert("Minden mezőt tölts ki, és pozitív számokat adj meg!");
      return;
    }

    const result = Math.ceil(quantity / (rows * columns));
    const firstRow = [];
    let currentValue = 1;

    // A quantity hosszának kiszámítása
    const maxDigits = quantity.toString().length;

    // Szám formázása nullákkal
    function padNumber(number, length) {
      return number.toString().padStart(length, "0");
    }

    while (currentValue <= quantity) {
      firstRow.push(padNumber(currentValue, maxDigits));
      firstRow.push(padNumber(currentValue, maxDigits));
      currentValue += result;

      if (currentValue > quantity) {
        break;
      }
    }

    const csvContent =
      "data:text/csv;charset=utf-8," + firstRow.join(",") + "\n";

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "adatok.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);

    alert("Nesze, ott a CSV!");

    console.log(result);
    console.log(firstRow);
  }); */

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const rows = parseInt(document.getElementById("rows").value, 10);
    const columns = parseInt(document.getElementById("columns").value, 10);
    const quantity = parseInt(document.getElementById("quantity").value, 10);

    if (!rows || !columns || !quantity || rows <= 0 || columns <= 0) {
      alert("Minden mezőt tölts ki, és pozitív számokat adj meg!");
      return;
    }

    const result = Math.ceil(quantity / (rows * columns));
    const allRows = [];
    const maxDigits = quantity.toString().length;

    function padNumber(number, length) {
      return number.toString().padStart(length, "0");
    }

    for (let i = 0; i < result; i++) {
      const currentRow = [];
      for (let j = 0; j < rows * columns; j++) {
        const value = i + 1 + j * result;
        if (value > quantity) break;
        currentRow.push(padNumber(value, maxDigits));
        currentRow.push(padNumber(value, maxDigits));
      }
      allRows.push(currentRow.join(","));
    }

    const csvContent = "data:text/csv;charset=utf-8," + allRows.join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "adatok.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);

    alert("Nesze, ott a CSV!");

    console.log(allRows);
  });
