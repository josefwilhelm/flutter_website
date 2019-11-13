define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navbar_logo_mobile = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 9,
        [_Location_line]: 12,
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
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_logo_mobile.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_logo_mobile.dart"
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
  let C6;
  let C7;
  let C4;
  let C3;
  navbar_logo_mobile.NavBarLogoMobile = class NavBarLogoMobile extends framework.StatelessWidget {
    build(context) {
      return new basic.SizedBox.new({height: 124.0, width: 124.0, child: new image.Image.asset("assets/ic_logo_full.png", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (navbar_logo_mobile.NavBarLogoMobile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navbar_logo_mobile.NavBarLogoMobile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar_logo_mobile.NavBarLogoMobile.prototype;
  dart.addTypeTests(navbar_logo_mobile.NavBarLogoMobile);
  dart.setMethodSignature(navbar_logo_mobile.NavBarLogoMobile, () => ({
    __proto__: dart.getMethods(navbar_logo_mobile.NavBarLogoMobile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar_logo_mobile.NavBarLogoMobile, "package:flutter_website/widgets/mobile/navbar_logo_mobile.dart");
  dart.trackLibraries("packages/flutter_website/widgets/mobile/navbar_logo_mobile", {
    "package:flutter_website/widgets/mobile/navbar_logo_mobile.dart": navbar_logo_mobile
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navbar_logo_mobile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,iCACG,cACD,cACM,sBACX;IAGN;;;QAX4B;;AAAQ,uEAAW,GAAG;;EAAC","file":"navbar_logo_mobile.ddc.js"}');
  // Exports:
  return {
    widgets__mobile__navbar_logo_mobile: navbar_logo_mobile
  };
});

//# sourceMappingURL=navbar_logo_mobile.ddc.js.map
