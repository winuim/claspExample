
function onOpen() {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let menuEntries = [
        { name: "testGreeter", functionName: "testGreeter" },
        null,
        { name: "OCR PDF -> Docs", functionName: "pdf2docs" },
        { name: "OCR PDF -> Spreadsheet", functionName: "pdf2spreadsheet" },
        { name: "OCR Word -> Docs", functionName: "word2docs" },
        { name: "OCR Excel -> Spreadsheet", functionName: "excel2spreadsheet" }
    ];
    ss.addMenu("GAS拡張", menuEntries);
}
