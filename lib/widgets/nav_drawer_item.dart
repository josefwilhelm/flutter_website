import 'package:flutter/material.dart';
import 'package:flutter_website/widgets/navbar_item.dart';

class DrawerItem extends StatelessWidget {
  final String title;
  final IconData icon;
  final String route;
  const DrawerItem(this.title, this.icon, this.route);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 30, top: 60),
      child: Row(
        children: <Widget>[NavBarItem(title, route)],
      ),
    );
  }
}
