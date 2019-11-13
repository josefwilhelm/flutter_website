import 'dart:ui';

import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_website/styles.dart';
import 'dart:html' as html;

import 'package:flutter_website/util.dart';
import 'package:responsive_builder/responsive_builder.dart';

class ContactWidget extends StatelessWidget {
  const ContactWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, size) {
        var style = size.deviceScreenType == DeviceScreenType.Mobile
            ? normalTextMobile
            : normalTextDesktop;
        return Column(
          crossAxisAlignment: size.deviceScreenType == DeviceScreenType.Mobile
              ? CrossAxisAlignment.center
              : CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            ContactItem(
              text: "me@josefwilhelm.com",
              onPressed: () => {},
              style: style,
              // Scaffold.of(context).showSnackBar(SnackBar(
              //       backgroundColor: textColor,
              //       content: Text(
              //         'Email address copied',
              //         style: snackBarText,
              //       ),
              //     ))
            ),
            ContactItem(
              text: "Instagram",
              style: style,
              onPressed: () =>
                  html.window.open("https://instagram.com/joe_tschn", "jw"),
            ),
            ContactItem(
                text: "LinkedIn   ",
                style: style,
                onPressed: () => html.window.open(
                    "https://www.linkedin.com/in/josef-wilhelm-a46b27160/",
                    "linkedin"))
          ],
        );
      },
    );
  }
}

class ContactItem extends StatelessWidget {
  const ContactItem(
      {Key key,
      this.text,
      this.color,
      this.link,
      this.onPressed,
      this.style = normalTextDesktop})
      : super(key: key);

  final String text;
  final Color color;
  final String link;
  final VoidCallback onPressed;
  final TextStyle style;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration:
          BoxDecoration(border: Border(bottom: BorderSide(color: textColor))),
      child: FlatButton(
        padding: EdgeInsets.all(0),
        hoverColor: textColor.withOpacity(0.4),
        onPressed: () => onPressed(),
        child: Text(
          text,
          style: style,
          textAlign: TextAlign.start,
          maxLines: 1,
          // minFontSize: 14,
        ),
      ),
    );
  }
}
