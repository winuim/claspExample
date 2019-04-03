const greeter = (person: string) => {
    return `Hello, ${person}!`;
}

function testGreeter() {
    const user = 'Grant';
    let msg = greeter(user);
    Logger.log(msg);
    Browser.msgBox(msg);
}
