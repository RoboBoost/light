Blockly.Cpp = Blockly.Cpp || new Blockly.Generator('Cpp');

Blockly.Cpp['led_on'] = function(block) {
  return 'digitalWrite(2, HIGH);\n';
};

Blockly.Cpp['led_off'] = function(block) {
  return 'digitalWrite(2, LOW);\n';
};
