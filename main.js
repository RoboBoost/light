const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: true,
  trashcan: true,
});

document.getElementById('sendCodeBtn').addEventListener('click', () => {
  const code = Blockly.Cpp.workspaceToCode(workspace);
  sendCode(code);
});
