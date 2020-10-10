// Compiled using ts2gas 3.6.3 (TypeScript 3.9.7)
function main() {
  const isContinue = Browser.msgBox('確認', 'メールを送信しますか？', Browser.Buttons.OK_CANCEL);

  if (isContinue == 'cancel') {
    Browser.msgBox('キャンセルしました');
    return;
  }

  const addresses = getAdresses();
  const title = getTitle();
  const content = getContent();

  addresses.forEach(address => {
    sender(address[0], title, content);
  });

  Browser.msgBox(`${addresses.length}件のメール送信完了しました。`);
}

function confirm() {
  const isContinue = Browser.msgBox('確認', 'メールを送信しますか？', Browser.Buttons.OK_CANCEL);
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