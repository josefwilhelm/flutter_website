import 'package:flutter/material.dart';
import 'package:flutter_website/styles.dart';
import 'package:flutter_website/widgets/nav_drawer_item.dart';

class NavigationDrawer extends StatelessWidget {
  const NavigationDrawer({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      decoration: BoxDecoration(
          color: primaryColor,
          boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 16)]),
      child: Column(
        children: <Widget>[
          DrawerItem('Portfolio', Icons.camera),
          DrawerItem('About', Icons.help),
        ],
      ),
    );
  }
}
