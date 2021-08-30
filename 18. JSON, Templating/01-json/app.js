// {
//     "workbench.iconTheme": "material-icon-theme",
//     "editor.fontSize": 18,
//     "[javascript]": {
//         "editor.defaultFormatter": "esbenp.prettier-vscode"
//     },
//     "terminal.integrated.cursorWidth": 3,
//     "editor.cursorWidth": 3,
//     "editor.renderWhitespace": "boundary",
//     "editor.wordWrap": "on",
//     "javascript.updateImportsOnFileMove.enabled": "always",
//     "workbench.colorTheme": "Atom One Dark",
//     "prettier.tabWidth": 4,
//     "workbench.editorAssociations": {
//         "*.ipynb": "jupyter.notebook.ipynb"
//     },
//     "liveServer.settings.donotShowInfoMsg": true,
//     "editor.formatOnSave": true
// }

// {
//     "qwe": "ads",
// }

let vova = {
    name: "Vova",
    age: 30,

    convertToString() {
        return `name: ${name}, age: ${name}`;
    },
};

// let sara = {
//     name: "Sara",
//     age: 45,
//     status: "Admin",

//     convertToString() {
//         return `name: ${name}, age: ${name}`;
//     },
// };

// JSON
// JSON.stringify()
let strVova = JSON.stringify(vova);
console.log(strVova);
console.log(typeof strVova);

// JSON.parse()
let vovaObj = JSON.parse(strVova);
console.log(vovaObj);
console.log(typeof vovaObj);
