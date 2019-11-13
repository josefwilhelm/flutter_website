define(['dart_sdk', 'packages/flutter_website/screens/base', 'packages/responsive_builder/responsive_builder', 'packages/flutter_website/widgets/desktop/home_view_desktop', 'packages/flutter/src/widgets/actions', 'packages/flutter_website/widgets/mobile/home_view_mobile'], function(dart_sdk, packages__flutter_website__screens__base, packages__responsive_builder__responsive_builder, packages__flutter_website__widgets__desktop__home_view_desktop, packages__flutter__src__widgets__actions, packages__flutter_website__widgets__mobile__home_view_mobile) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base = packages__flutter_website__screens__base.screens__base;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const home_view_desktop = packages__flutter_website__widgets__desktop__home_view_desktop.widgets__desktop__home_view_desktop;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const home_view_mobile = packages__flutter_website__widgets__mobile__home_view_mobile.widgets__mobile__home_view_mobile;
  const home = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/home.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/home.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "desktop",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mobile",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/home.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/home.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C2;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  home.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new base.BaseView.new({body: new responsive_builder.ScreenTypeLayout.new({desktop: new home_view_desktop.HomeContentViewDesktop.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), mobile: new home_view_mobile.HomeContentViewMobile.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (home.HomeView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.HomeView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.HomeView.prototype;
  dart.addTypeTests(home.HomeView);
  dart.setMethodSignature(home.HomeView, () => ({
    __proto__: dart.getMethods(home.HomeView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.HomeView, "package:flutter_website/screens/home.dart");
  dart.trackLibraries("packages/flutter_website/screens/home", {
    "package:flutter_website/screens/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,8BACC,sDACK,iHACD;IAGd;;;QAVoB;;AAAQ,iDAAW,GAAG;;EAAC","file":"home.ddc.js"}');
  // Exports:
  return {
    screens__home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
