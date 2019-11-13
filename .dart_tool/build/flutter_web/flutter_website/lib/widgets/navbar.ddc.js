define(['dart_sdk', 'packages/responsive_builder/responsive_builder', 'packages/flutter_website/widgets/desktop/navbar_desktop', 'packages/flutter/src/widgets/actions', 'packages/flutter_website/widgets/mobile/navbar_mobile'], function(dart_sdk, packages__responsive_builder__responsive_builder, packages__flutter_website__widgets__desktop__navbar_desktop, packages__flutter__src__widgets__actions, packages__flutter_website__widgets__mobile__navbar_mobile) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const navbar_desktop = packages__flutter_website__widgets__desktop__navbar_desktop.widgets__desktop__navbar_desktop;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navbar_mobile = packages__flutter_website__widgets__mobile__navbar_mobile.widgets__mobile__navbar_mobile;
  const navbar = Object.create(dart.library);
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
        [_Location_column]: 16,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "desktop",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mobile",
        [_Location_column]: 7,
        [_Location_line]: 11,
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
        [_Location_column]: 12,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar.dart"
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
  navbar.NavigationBar = class NavigationBar extends framework.StatelessWidget {
    build(context) {
      return new responsive_builder.ScreenTypeLayout.new({desktop: new navbar_desktop.NavigationBarTabletDesktop.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), mobile: new navbar_mobile.NavigationBarMobile.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (navbar.NavigationBar.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navbar.NavigationBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar.NavigationBar.prototype;
  dart.addTypeTests(navbar.NavigationBar);
  dart.setMethodSignature(navbar.NavigationBar, () => ({
    __proto__: dart.getMethods(navbar.NavigationBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar.NavigationBar, "package:flutter_website/widgets/navbar.dart");
  dart.trackLibraries("packages/flutter_website/widgets/navbar", {
    "package:flutter_website/widgets/navbar.dart": navbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navbar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,uDACI,kHACD;IAEZ;;;;;;EACF","file":"navbar.ddc.js"}');
  // Exports:
  return {
    widgets__navbar: navbar
  };
});

//# sourceMappingURL=navbar.ddc.js.map
