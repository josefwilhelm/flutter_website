import 'package:flutter/material.dart';
import 'package:flutter_website/util.dart';
import 'package:flutter_website/widgets/desktop/navbar_logo_desktop.dart';
import 'package:flutter_website/widgets/navbar_item.dart';

class NavigationBarTabletDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          NavBarLogoDesktop(),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              NavBarItem('Portfolio', Util.route_portfolio),
              SizedBox(width: 60),
              NavBarItem('About', Util.route_portfolio),
              bigSpace,
            ],
          )
        ],
      ),
    );
  }
}
