// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const sizeOf = require('image-size');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable1 = vscode.commands.registerCommand('htmlCodingUtility.copyHtml', function (uri) {
		// The code you place here will be executed every time your command is executed

		sizeOf(uri.fsPath, function (error, dimensions) {
			if (error) {
				vscode.window.showErrorMessage(error);
				return;
			}

			const rootPath = vscode.workspace.getWorkspaceFolder(uri).uri.path;
			const relativePath = uri.path.replace(new RegExp(`^${rootPath}`), '');
			const src = relativePath;
			const width = dimensions.width;
			const height = dimensions.height
			const imgHtml = `<img src="${src}" width="${width}" height="${height}" alt="">`;

			vscode.env.clipboard.writeText(imgHtml);
		});
	});

	let disposable2 = vscode.commands.registerCommand('htmlCodingUtility.copyHtml@2x', function (uri) {
		// The code you place here will be executed every time your command is executed

		sizeOf(uri.fsPath, function (error, dimensions) {
			if (error) {
				vscode.window.showErrorMessage(error);
				return;
			}

			const rootPath = vscode.workspace.getWorkspaceFolder(uri).uri.path;
			const relativePath = uri.path.replace(new RegExp(`^${rootPath}`), '');
			const src = relativePath;
			const width = dimensions.width * 0.5;
			const height = dimensions.height * 0.5;
			const imgHtml = `<img src="${src}" width="${width}" height="${height}" alt="">`;

			vscode.env.clipboard.writeText(imgHtml);
		});
	});

	let disposable3 = vscode.commands.registerCommand('htmlCodingUtility.copyCss', function (uri) {
		// The code you place here will be executed every time your command is executed

		sizeOf(uri.fsPath, function (error, dimensions) {
			if (error) {
				vscode.window.showErrorMessage(error);
				return;
			}

			const rootPath = vscode.workspace.getWorkspaceFolder(uri).uri.path;
			const relativePath = uri.path.replace(new RegExp(`^${rootPath}`), '');
			const src = relativePath;
			const width = dimensions.width;
			const height = dimensions.height;
			const imgHtml = `background-image: url("${src}");
background-size: ${width}px ${height}px;
background-position: 0 0;
background-repeat: no-repeat;`;

			vscode.env.clipboard.writeText(imgHtml);
		});
	});

	let disposable4 = vscode.commands.registerCommand('htmlCodingUtility.copyCss@2x', function (uri) {
		// The code you place here will be executed every time your command is executed

		sizeOf(uri.fsPath, function (error, dimensions) {
			if (error) {
				vscode.window.showErrorMessage(error);
				return;
			}

			const rootPath = vscode.workspace.getWorkspaceFolder(uri).uri.path;
			const relativePath = uri.path.replace(new RegExp(`^${rootPath}`), '');
			const src = relativePath;
			const width = dimensions.width * 0.5;
			const height = dimensions.height * 0.5;
			const imgHtml = `background-image: url("${src}");
background-size: ${width}px ${height}px;
background-position: 0 0;
background-repeat: no-repeat;`;

			vscode.env.clipboard.writeText(imgHtml);
		});
	});

	let disposable5 = vscode.commands.registerCommand('htmlCodingUtility.copyCss@2xWithContent', function (uri) {
		// The code you place here will be executed every time your command is executed

		sizeOf(uri.fsPath, function (error, dimensions) {
			if (error) {
				vscode.window.showErrorMessage(error);
				return;
			}

			const rootPath = vscode.workspace.getWorkspaceFolder(uri).uri.path;
			const relativePath = uri.path.replace(new RegExp(`^${rootPath}`), '');
			const src = relativePath;
			const width = dimensions.width * 0.5;
			const height = dimensions.height * 0.5;
			const imgHtml = `content: "";
width: ${width}px;
height: ${height}px;
background-image: url("${src}");
background-size: contain;
background-position: 0 0;
background-repeat: no-repeat;`;

			vscode.env.clipboard.writeText(imgHtml);
		});
	});

	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
	context.subscriptions.push(disposable4);
	context.subscriptions.push(disposable5);

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
