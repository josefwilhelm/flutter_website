import 'package:flutter/material.dart';
import 'package:flutter_website/styles.dart';
import 'package:flutter_website/util.dart';
import 'package:flutter_website/widgets/contact.dart';

class HomeContentViewDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints:
          BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.8),
      child: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Flexible(
              child: Text(
                "contact me",
                style: displayText,
              ),
            ),
            bigSpace,
            Flexible(
                child: Padding(
              padding: const EdgeInsets.all(6.0),
              child: ContactWidget(),
            ))
          ],
        ),
      ),
    );
  }
}
