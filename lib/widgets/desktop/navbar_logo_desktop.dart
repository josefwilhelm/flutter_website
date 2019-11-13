import 'package:flutter/material.dart';

class NavBarLogoDesktop extends StatelessWidget {
  const NavBarLogoDesktop({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: Image.asset(
        'assets/ic_logo_full.png',
      ),
    );
  }
}
