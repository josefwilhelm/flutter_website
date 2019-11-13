import 'package:flutter/material.dart';
import 'package:flutter_website/screens/home.dart';
import 'package:flutter_website/screens/portfolio.dart';
import 'package:flutter_website/util.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: Util.route_start,
      routes: {
        // Util.route_start: (context) => HomeView(),
        Util.route_portfolio: (context) => Portfolio(),
      },
      home: HomeView(),
    );
  }
}
