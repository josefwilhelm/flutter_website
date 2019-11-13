import 'package:flutter/material.dart';
import 'package:flutter_website/service_locator.dart';
import 'package:flutter_website/services/navigation_service.dart';
import 'package:flutter_website/styles.dart';
import 'package:flutter_website/util.dart';

class NavBarItem extends StatelessWidget {
  final String title;
  final String route;
  const NavBarItem(this.title, this.route);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration:
          BoxDecoration(border: Border(bottom: BorderSide(color: textColor))),
      child: FlatButton(
        hoverColor: textColor.withOpacity(0.4),
        onPressed: () => locator<NavigationService>().navigateTo(route),
        child: Text(
          title,
          style: navBarItemStyle,
        ),
      ),
    );
  }
}
