import 'package:flutter/material.dart';
import 'package:flutter_website/screens/base.dart';
import 'package:flutter_website/widgets/desktop/home_view_desktop.dart';
import 'package:flutter_website/widgets/mobile/home_view_mobile.dart';
import 'package:responsive_builder/responsive_builder.dart';

class HomeView extends StatelessWidget {
  const HomeView({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ScreenTypeLayout(
      desktop: HomeContentViewDesktop(),
      mobile: HomeContentViewMobile(),
    );
  }
}
