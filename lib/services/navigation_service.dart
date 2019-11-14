import 'package:flutter/material.dart';
import 'dart:html' as html;

class NavigationService {
  final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  Future<dynamic> navigateTo(String routeName) {
    html.window.history.pushState("", routeName, "/$routeName");
    return navigatorKey.currentState.pushNamed(routeName);
  }

  bool goBack() {
    return navigatorKey.currentState.pop();
  }
}
