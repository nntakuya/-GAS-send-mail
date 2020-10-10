// Compiled using ts2gas 3.6.3 (TypeScript 3.9.7)
function main() {
  const addresses = getAdresses();
  const title = getTitle();
  const content = getContent();

  addresses.forEach(address => {
    sender(address[0], title, content);
  });
}

function getAdresses() {
  const addressSheet = SpreadsheetApp.getActive().getSheetByName('リスト');

  const tabNameCount = 1;
  const addressCounter = addressSheet.getRange('C:C').getValues().filter(String).length - tabNameCount;

  return addressSheet.getRange(5, 3, addressCounter).getValues();
}

// todo: 下記の関数を一つにまとめる
function getTitle() {
  const templateSheet = SpreadsheetApp.getActive().getSheetByName('メールテンプレート');

  return templateSheet.getRange('C6').getValue();
}

function getContent() {
  const templateSheet = SpreadsheetApp.getActive().getSheetByName('メールテンプレート');

  return templateSheet.getRange('C7').getValue();
}

// function getFromAdress() {
//   const templateSheet = SpreadsheetApp.getActive().getSheetByName('メールテンプレート');

//   return templateSheet.getRange('C2').getValue();
// }

function sender(address: String, title: String, body: String) {
  GmailApp.sendEmail(address, title, body);
}