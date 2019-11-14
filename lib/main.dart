import 'package:flutter/material.dart';
import 'package:flutter_website/screens/base.dart';
import 'package:flutter_website/service_locator.dart';
import 'package:flutter_website/services/color_service.dart';
import 'package:provider/provider.dart';

void main() {
  setupLocator();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Josef Wilhelm',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: BaseView(),
    );
  }
}
