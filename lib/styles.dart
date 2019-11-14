import 'package:flutter/material.dart';
import 'package:flutter_website/util.dart';

const Color primaryColor = Color(0xFFD55672);
const Color accentColor = Color(0XFFFF6140);
const fontFamilyKarla = 'Karla';
const textColor = Color(0XFFFAFAFA);

Color activeColor = Util.getNextColor(Colors.yellow);

const colorArray = [
  primaryColor,
  Color(0XFF3A3042), //'#3A1042'
  Color(0XFF43BCCD), //'#43B6AA'
  Color(0XFF33312E), //'#33312E'
  Color(0XFFFF714A), //'#FF714A'
  Color(0XFF005377), //'#005377'
  Color(0XFF718E44), //'#718E44'
];

const textThemeBright = TextTheme(body1: TextStyle(color: textColor));

const TextStyle navBarItemStyle = TextStyle(
  fontSize: 24,
  fontWeight: FontWeight.w200,
  fontFamily: fontFamilyKarla,
  color: textColor,
);

const TextStyle displayText = TextStyle(
  fontSize: 50,
  fontWeight: FontWeight.bold,
  fontFamily: fontFamilyKarla,
  color: textColor,
);

const TextStyle snackBarText = TextStyle(
  fontSize: 30,
  fontWeight: FontWeight.bold,
  fontFamily: fontFamilyKarla,
  color: primaryColor,
);

const TextStyle normalTextDesktop = TextStyle(
  fontSize: 30,
  fontWeight: FontWeight.w200,
  fontFamily: fontFamilyKarla,
  color: textColor,
);

const TextStyle normalTextMobile = TextStyle(
  fontSize: 16,
  fontWeight: FontWeight.w200,
  fontFamily: fontFamilyKarla,
  color: textColor,
);

final themeBrightMint = ThemeData(
  brightness: Brightness.light,
  accentColor: accentColor,
  primaryColor: primaryColor,
  cardColor: textColor,
  canvasColor: primaryColor,
  scaffoldBackgroundColor: primaryColor,
  fontFamily: fontFamilyKarla,
  textTheme: textThemeBright,
  //    primaryTextTheme: textThemeBright,
);

// const themeDarkTeal = ThemeData(
//   brightness: Brightness.dark,
//   fontFamily: Styles.fontFamilyKarla,
//   textTheme: textThemeDark,
//   //    primaryTextTheme: textThemeBright,
// );
