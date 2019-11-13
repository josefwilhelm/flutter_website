import 'package:flutter/material.dart';
import 'package:flutter_website/widgets/desktop/navbar_desktop.dart';
import 'package:flutter_website/widgets/mobile/navbar_mobile.dart';
import 'package:responsive_builder/responsive_builder.dart';

class NavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      desktop: NavigationBarTabletDesktop(),
      mobile: NavigationBarMobile(),
    );
  }
}
