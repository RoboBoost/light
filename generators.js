Blockly.Cpp = Blockly.Cpp || new Blockly.Generator('Cpp');

Blockly.Cpp['led_on'] = function(block) {
  return 'digitalWrite(2, HIGH);\n';  // GPIO 2 у ESP32 для вбудованого LED
};

Blockly.Cpp['led_off'] = function(block) {
  return 'digitalWrite(2, LOW);\n';
};
