import 'package:flutter/material.dart';
import 'package:flutter_website/routing.dart';
import 'package:flutter_website/styles.dart';
import 'package:flutter_website/widgets/nav_drawer_item.dart';

class NavigationDrawer extends StatelessWidget {
  const NavigationDrawer({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 220,
      decoration: BoxDecoration(
          color: activeColor,
          boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 16)]),
      child: Column(
        children: <Widget>[
          DrawerItem('Portfolio', Icons.camera, PortFolioRoute),
          DrawerItem('About', Icons.help, AboutRoute),
        ],
      ),
    );
  }
}
