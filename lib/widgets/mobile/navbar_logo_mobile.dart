import 'package:flutter/material.dart';
import 'package:flutter_website/routing.dart';
import 'package:flutter_website/service_locator.dart';
import 'package:flutter_website/services/navigation_service.dart';

class NavBarLogoMobile extends StatelessWidget {
  const NavBarLogoMobile({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        locator<NavigationService>().navigateTo(HomeRoute);
      },
      child: SizedBox(
        height: 124,
        width: 124,
        child: Image.asset(
          'assets/ic_logo_full.png',
        ),
      ),
    );
  }
}
