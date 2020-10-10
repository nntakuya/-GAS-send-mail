// Compiled using ts2gas 3.6.3 (TypeScript 3.9.7)
function main() {
  const addresses = getAdresses();

  const title = getTitle();
  const content = getContent();
}

function getAdresses() {
  const addressSheet = SpreadsheetApp.getActive().getSheetByName('リスト');

  const tabNameCount = 1;
  const addressCounter = addressSheet.getRange('C:C').getValues().filter(String).length - tabNameCount;

  return addressSheet.getRange(5, 3, addressCounter).getValues();
}

function getTitle() {
  const templateSheet = SpreadsheetApp.getActive().getSheetByName('メールテンプレート');

  return templateSheet.getRange('C3').getValue();
}

function getContent() {
  const templateSheet = SpreadsheetApp.getActive().getSheetByName('メールテンプレート');

  return templateSheet.getRange('C4').getValue();
}
