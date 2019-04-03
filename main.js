// Compiled using ts2gas 1.6.2 (TypeScript 3.4.1)
var exports = exports || {};
var module = module || { exports: exports };
function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var menuEntries = [
        { name: "testGreeter", functionName: "testGreeter" },
        null,
        { name: "OCR PDF -> Docs", functionName: "pdf2docs" },
        { name: "OCR PDF -> Spreadsheet", functionName: "pdf2spreadsheet" },
        { name: "OCR Word -> Docs", functionName: "word2docs" },
        { name: "OCR Excel -> Spreadsheet", functionName: "excel2spreadsheet" }
    ];
    ss.addMenu("GAS拡張", menuEntries);
}
