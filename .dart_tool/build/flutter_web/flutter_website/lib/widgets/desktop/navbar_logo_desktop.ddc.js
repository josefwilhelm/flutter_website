define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navbar_logo_desktop = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_logo_desktop.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_logo_desktop.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  navbar_logo_desktop.NavBarLogoDesktop = class NavBarLogoDesktop extends framework.StatelessWidget {
    build(context) {
      return new basic.SizedBox.new({child: new image.Image.asset("assets/ic_logo_full.png", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (navbar_logo_desktop.NavBarLogoDesktop.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navbar_logo_desktop.NavBarLogoDesktop.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar_logo_desktop.NavBarLogoDesktop.prototype;
  dart.addTypeTests(navbar_logo_desktop.NavBarLogoDesktop);
  dart.setMethodSignature(navbar_logo_desktop.NavBarLogoDesktop, () => ({
    __proto__: dart.getMethods(navbar_logo_desktop.NavBarLogoDesktop.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar_logo_desktop.NavBarLogoDesktop, "package:flutter_website/widgets/desktop/navbar_logo_desktop.dart");
  dart.trackLibraries("packages/flutter_website/widgets/desktop/navbar_logo_desktop", {
    "package:flutter_website/widgets/desktop/navbar_logo_desktop.dart": navbar_logo_desktop
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navbar_logo_desktop.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,gCACQ,sBACX;IAGN;;;QAT6B;;AAAQ,yEAAW,GAAG;;EAAC","file":"navbar_logo_desktop.ddc.js"}');
  // Exports:
  return {
    widgets__desktop__navbar_logo_desktop: navbar_logo_desktop
  };
});

//# sourceMappingURL=navbar_logo_desktop.ddc.js.map
