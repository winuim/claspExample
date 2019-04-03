// Compiled using ts2gas 1.6.2 (TypeScript 3.4.1)
var exports = exports || {};
var module = module || { exports: exports };
function pdf2docs() {
    var regex = new RegExp(".+\.pdf");
    var folder = DriveApp.getFolderById(rootFolderId);
    Logger.log(folder.getName());
    var files = folder.getFiles();
    while (files.hasNext()) {
        var file = files.next();
        var fileName = file.getName();
        Logger.log(fileName);
        if (regex.test(fileName)) {
            var fileBlob = file.getBlob();
            var resource = {
                title: fileName.split(".")[0],
                mimeType: fileBlob.getContentType(),
                parents: [{ id: rootFolderId }]
            };
            var options = {
                ocr: true
            };
            var docFile = Drive.Files.insert(resource, fileBlob, options);
            Logger.log('ID: %s, File size (bytes): %s', docFile.id, docFile.fileSize);
        }
    }
}
function pdf2spreadsheet() {
}
function word2docs() {
}
function excel2spreadsheet() {
}
