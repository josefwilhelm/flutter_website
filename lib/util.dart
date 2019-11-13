import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_website/styles.dart';

class Util {
  static Color getNextColor(Color currentColor) {
    var index = Random().nextInt(colorArray.length);
    var newColor = colorArray[index];
    while (true)
      if (newColor != currentColor)
        return colorArray[index];
      else {
        index = Random().nextInt(colorArray.length);
        newColor = colorArray[index];
      }
  }
}

const smallSpace = SizedBox(height: 24);
const bigSpace = SizedBox(
  height: 60,
  width: 60,
);
