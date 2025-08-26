Blockly.Cpp = Blockly.Cpp || new Blockly.Generator('Cpp');

Blockly.Cpp['funny_led_on'] = function(block) {
  return 'digitalWrite(2, HIGH);\n';
};

Blockly.Cpp['funny_led_off'] = function(block) {
  return 'digitalWrite(2, LOW);\n';
};

Blockly.Cpp['funny_colour_led'] = function(block) {
  var color = block.getFieldValue('COLOR');
  // Тут можна реалізувати зміну кольору LED, наприклад для RGB стрічки
  return `// Встановити колір LED: ${color}\n`;
};

Blockly.Cpp['funny_sound'] = function(block) {
  var sound = block.getFieldValue('SOUND');
  // Тут можна реалізувати відтворення звуку (потрібно допрацювати на ESP32)
  return `// Відтворити звук: ${sound}\n`;
};
