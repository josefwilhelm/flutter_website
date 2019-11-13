import 'package:flutter/material.dart';
import 'package:flutter_website/screens/about.dart';
import 'package:flutter_website/screens/home.dart';
import 'package:flutter_website/screens/portfolio.dart';

const String HomeRoute = "home";
const String AboutRoute = "about";
const String PortFolioRoute = "portfolio";

Route<dynamic> generateRoute(RouteSettings settings) {
  print('generateRoute: ${settings.name}');
  switch (settings.name) {
    case HomeRoute:
      return _getPageRoute(HomeView());
    case PortFolioRoute:
      return _getPageRoute(Portfolio());
    case AboutRoute:
      return _getPageRoute(About());
    default:
      return _getPageRoute(HomeView());
  }
}

PageRoute _getPageRoute(Widget child) {
  return _FadeRoute(
    child: child,
  );
}

class _FadeRoute extends PageRouteBuilder {
  final Widget child;
  _FadeRoute({this.child})
      : super(
          pageBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
          ) =>
              child,
          transitionsBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
          ) =>
              FadeTransition(
            opacity: animation,
            child: child,
          ),
        );
}
