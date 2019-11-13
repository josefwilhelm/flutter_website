import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_website/styles.dart';
import 'package:flutter_website/util.dart';
import 'package:flutter_website/widgets/contact.dart';

class HomeContentViewMobile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Flexible(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: AutoSizeText(
                "contact me",
                textAlign: TextAlign.end,
                maxLines: 1,
                style: displayText,
              ),
            ),
          ),
          smallSpace,
          Flexible(child: ContactWidget())
        ],
      ),
    );
  }
}
