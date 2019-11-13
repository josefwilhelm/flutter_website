import 'package:flutter/material.dart';
import 'package:flutter_website/routing.dart';
import 'package:flutter_website/services/navigation_service.dart';

import '../../service_locator.dart';

class NavBarLogoDesktop extends StatelessWidget {
  const NavBarLogoDesktop({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => locator<NavigationService>().navigateTo(HomeRoute),
      child: SizedBox(
        child: Image.asset(
          'assets/ic_logo_full.png',
        ),
      ),
    );
  }
}
