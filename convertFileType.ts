
function pdf2docs(): void {
    const regex = new RegExp(".+\.pdf");

    const folder = DriveApp.getFolderById(rootFolderId);
    Logger.log(folder.getName());
    let files = folder.getFiles();

    while (files.hasNext()) {
        let file = files.next();
        let fileName = file.getName();
        Logger.log(fileName);
        if (regex.test(fileName)) {
            let fileBlob = file.getBlob();
            let resource = {
                title: fileName.split(".")[0],
                mimeType: fileBlob.getContentType(),
                parents: [{ id: rootFolderId }],
            }
            let options = {
                ocr: true
            };
            var docFile = Drive.Files.insert(resource, fileBlob, options);
            Logger.log('ID: %s, File size (bytes): %s', docFile.id, docFile.fileSize);
        }
    }
}

function pdf2spreadsheet(): void {

}

function word2docs(): void {

}

function excel2spreadsheet(): void {

}
