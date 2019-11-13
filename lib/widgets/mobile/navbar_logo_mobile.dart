import 'package:flutter/material.dart';

class NavBarLogoMobile extends StatelessWidget {
  const NavBarLogoMobile({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 124,
      width: 124,
      child: Image.asset(
        'assets/ic_logo_full.png',
      ),
    );
  }
}
