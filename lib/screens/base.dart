import 'package:flutter/material.dart';
import 'package:flutter_website/routing.dart';
import 'package:flutter_website/service_locator.dart';
import 'package:flutter_website/services/navigation_service.dart';
import 'package:flutter_website/styles.dart';
import 'package:flutter_website/widgets/centered_view.dart';
import 'package:flutter_website/widgets/nav_drawer.dart';
import 'package:flutter_website/widgets/navbar.dart';
import 'package:responsive_builder/responsive_builder.dart';

import '../util.dart';

class BaseView extends StatefulWidget {
  @override
  _BaseViewState createState() => _BaseViewState();
}

class _BaseViewState extends State<BaseView>
    with SingleTickerProviderStateMixin {
  AnimationController _animationController;
  Animation<Color> _animation;

  Color _color = activeColor;
  @override
  void initState() {
    super.initState();

    _animationController =
        AnimationController(duration: Duration(seconds: 1), vsync: this);

    _animation = Tween<Color>(begin: activeColor, end: accentColor)
        .animate(_animationController);

    // _animationController.forward();
  }

  changeColor() {
    setState(() {
      _color = Util.getNextColor(_color);
      // _animationController.reverse();
    });
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, sizingInformation) => Scaffold(
        drawer: sizingInformation.deviceScreenType == DeviceScreenType.Mobile
            ? NavigationDrawer()
            : null,
        backgroundColor: _animation.value,
        body: GestureDetector(
          onPanStart: (asdf) => changeColor(),
          onTap: changeColor,
          child: AnimatedContainer(
            padding: EdgeInsets.all(0),
            duration: _animationController.duration,
            color: _color,
            child: CenteredView(
              child: Column(
                children: <Widget>[
                  NavigationBar(),
                  Expanded(
                      child: Navigator(
                    key: locator<NavigationService>().navigatorKey,
                    onGenerateRoute: generateRoute,
                    initialRoute: HomeRoute,
                  )),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
