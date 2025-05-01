export default function toPdf() {
  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  const time = `${today.getHours()}:${today.getMinutes()}`;
  const dateTime = `${date} ${time}`;

  const divToPrint = document.getElementById('myTable');
  const newWin = window.open('');

  newWin.document.write(
    '<center><h1 style="font: 14px Arial; font-weight: bold;">Universidade Federal Rural do Semi-Árido</h1></center>'
  );
  newWin.document.write(
    '<center><h1 style="font: 12px Arial; font-weight: bold;">Gerado as: ',
    dateTime,
    ' hrs</h1></center>'
  );
  newWin.document.write(
    '<center><h2 style="font: 12px Arial; font-weight: bold;">RELATÓRIO - CONTROLE DE ACESSO DO GPSICS</h2></center>'
  );
  newWin.document.write(
    '<center><h1 style="font-size: 12px, font: Arial; font-weight: bold;">',
    divToPrint.outerHTML,
    '</h1></center>'
  );
  newWin.document.write(
    '<style type="text/css"> @media print { #myTable { font-size: 14px; border: 1px solid black; padding: 5px;} #myTable th { height: auto; border: 1px solid black; padding: 5px; } #myTable td { height: auto; border: 1px solid black; padding: 5px;} } </style>'
  );
  newWin.print();
  newWin.close();
  return newWin;
}
