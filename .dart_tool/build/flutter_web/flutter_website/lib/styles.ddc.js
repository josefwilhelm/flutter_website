define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__material, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_theme = packages__flutter__material.src__material__text_theme;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const styles = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292171378.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294926656.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282003522.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282629325.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281545006.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294930762.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278211447.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285632068.0
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], ui.Color);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C2 || CT.C2,
        [TextStyle_inherit]: true
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: null,
        [TextTheme_subtitle]: null,
        [TextTheme_button]: null,
        [TextTheme_caption]: null,
        [TextTheme_body1]: C11 || CT.C11,
        [TextTheme_body2]: null,
        [TextTheme_subhead]: null,
        [TextTheme_title]: null,
        [TextTheme_headline]: null,
        [TextTheme_display1]: null,
        [TextTheme_display2]: null,
        [TextTheme_display3]: null,
        [TextTheme_display4]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 1
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C13 || CT.C13,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Karla",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C2 || CT.C2,
        [TextStyle_inherit]: true
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C15 || CT.C15,
        [TextStyle_fontSize]: 50,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Karla",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C2 || CT.C2,
        [TextStyle_inherit]: true
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C15 || CT.C15,
        [TextStyle_fontSize]: 30,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Karla",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C0 || CT.C0,
        [TextStyle_inherit]: true
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C13 || CT.C13,
        [TextStyle_fontSize]: 30,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Karla",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C2 || CT.C2,
        [TextStyle_inherit]: true
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C13 || CT.C13,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Karla",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C2 || CT.C2,
        [TextStyle_inherit]: true
      });
    }
  });
  const Color_value = dart.privateName(ui, "Color.value");
  let C0;
  let C1;
  let C2;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C3;
  const TextTheme_overline = dart.privateName(text_theme, "TextTheme.overline");
  const TextTheme_subtitle = dart.privateName(text_theme, "TextTheme.subtitle");
  const TextTheme_button = dart.privateName(text_theme, "TextTheme.button");
  const TextTheme_caption = dart.privateName(text_theme, "TextTheme.caption");
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C11;
  const TextTheme_body1 = dart.privateName(text_theme, "TextTheme.body1");
  const TextTheme_body2 = dart.privateName(text_theme, "TextTheme.body2");
  const TextTheme_subhead = dart.privateName(text_theme, "TextTheme.subhead");
  const TextTheme_title = dart.privateName(text_theme, "TextTheme.title");
  const TextTheme_headline = dart.privateName(text_theme, "TextTheme.headline");
  const TextTheme_display1 = dart.privateName(text_theme, "TextTheme.display1");
  const TextTheme_display2 = dart.privateName(text_theme, "TextTheme.display2");
  const TextTheme_display3 = dart.privateName(text_theme, "TextTheme.display3");
  const TextTheme_display4 = dart.privateName(text_theme, "TextTheme.display4");
  let C10;
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C13;
  let C12;
  let C15;
  let C14;
  let C16;
  let C17;
  let C18;
  dart.defineLazy(styles, {
    /*styles.primaryColor*/get primaryColor() {
      return C0 || CT.C0;
    },
    /*styles.accentColor*/get accentColor() {
      return C1 || CT.C1;
    },
    /*styles.fontFamilyKarla*/get fontFamilyKarla() {
      return "Karla";
    },
    /*styles.textColor*/get textColor() {
      return C2 || CT.C2;
    },
    /*styles.colorArray*/get colorArray() {
      return C3 || CT.C3;
    },
    /*styles.textThemeBright*/get textThemeBright() {
      return C10 || CT.C10;
    },
    /*styles.navBarItemStyle*/get navBarItemStyle() {
      return C12 || CT.C12;
    },
    /*styles.displayText*/get displayText() {
      return C14 || CT.C14;
    },
    /*styles.snackBarText*/get snackBarText() {
      return C16 || CT.C16;
    },
    /*styles.normalTextDesktop*/get normalTextDesktop() {
      return C17 || CT.C17;
    },
    /*styles.normalTextMobile*/get normalTextMobile() {
      return C18 || CT.C18;
    },
    /*styles.themeBrightMint*/get themeBrightMint() {
      return theme_data.ThemeData.new({brightness: ui.Brightness.light, accentColor: styles.accentColor, primaryColor: styles.primaryColor, cardColor: styles.textColor, canvasColor: styles.primaryColor, scaffoldBackgroundColor: styles.primaryColor, fontFamily: "Karla", textTheme: styles.textThemeBright});
    }
  });
  dart.trackLibraries("packages/flutter_website/styles", {
    "package:flutter_website/styles.dart": styles
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["styles.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEY,mBAAY;;;MACZ,kBAAW;;;MACjB,sBAAe;;;MACf,gBAAS;;;MAET,iBAAU;;;MAUV,sBAAe;;;MAEL,sBAAe;;;MAOf,kBAAW;;;MAOX,mBAAY;;;MAOZ,wBAAiB;;;MAOjB,uBAAgB;;;MAO1B,sBAAe;YAAG,uCACC,kCACV,kCACC,gCACH,+BACE,8CACY,qDAEd","file":"styles.ddc.js"}');
  // Exports:
  return {
    styles: styles
  };
});

//# sourceMappingURL=styles.ddc.js.map
