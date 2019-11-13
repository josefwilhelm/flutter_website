import 'package:flutter/material.dart';
import 'package:flutter_website/screens/base.dart';
import 'package:flutter_website/screens/home.dart';
import 'package:flutter_website/screens/portfolio.dart';
import 'package:flutter_website/service_locator.dart';
import 'package:flutter_website/util.dart';

void main() {
  setupLocator();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: BaseView(),
    );
  }
}
