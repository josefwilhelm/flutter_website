define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const navigation_service = Object.create(dart.library);
  const $pushState = dartx.pushState;
  let GlobalKeyOfNavigatorState = () => (GlobalKeyOfNavigatorState = dart.constFn(framework.GlobalKey$(navigator.NavigatorState)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  const CT = Object.create(null);
  const navigatorKey = dart.privateName(navigation_service, "NavigationService.navigatorKey");
  const scaffoldKey = dart.privateName(navigation_service, "NavigationService.scaffoldKey");
  navigation_service.NavigationService = class NavigationService extends core.Object {
    get navigatorKey() {
      return this[navigatorKey];
    }
    set navigatorKey(value) {
      super.navigatorKey = value;
    }
    get scaffoldKey() {
      return this[scaffoldKey];
    }
    set scaffoldKey(value) {
      super.scaffoldKey = value;
    }
    navigateTo(routeName) {
      html.window.history[$pushState]("", routeName, "/" + dart.str(routeName));
      return this.navigatorKey.currentState.pushNamed(core.Object, routeName);
    }
    goBack() {
      return this.navigatorKey.currentState.pop(core.Object);
    }
  };
  (navigation_service.NavigationService.new = function() {
    this[navigatorKey] = GlobalKeyOfNavigatorState().new();
    this[scaffoldKey] = GlobalKeyOfScaffoldState().new();
    ;
  }).prototype = navigation_service.NavigationService.prototype;
  dart.addTypeTests(navigation_service.NavigationService);
  dart.setMethodSignature(navigation_service.NavigationService, () => ({
    __proto__: dart.getMethods(navigation_service.NavigationService.__proto__),
    navigateTo: dart.fnType(async.Future, [core.String]),
    goBack: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(navigation_service.NavigationService, "package:flutter_website/services/navigation_service.dart");
  dart.setFieldSignature(navigation_service.NavigationService, () => ({
    __proto__: dart.getFields(navigation_service.NavigationService.__proto__),
    navigatorKey: dart.finalFieldType(framework.GlobalKey$(navigator.NavigatorState)),
    scaffoldKey: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState))
  }));
  dart.trackLibraries("packages/flutter_website/services/navigation_service", {
    "package:flutter_website/services/navigation_service.dart": navigation_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigation_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;IAIkC;;;;;;IACD;;;;;;eAEG;AAC2B,MAAtD,AAAO,AAAQ,gCAAU,IAAI,SAAS,EAAE,AAAa,eAAV,SAAS;AACzD,YAAO,AAAa,AAAa,uDAAU,SAAS;IACtD;;AAGE,YAAO,AAAa,AAAa;IACnC;;;IAVgC,qBAAe;IAChB,oBAAc;;EAU/C","file":"navigation_service.ddc.js"}');
  // Exports:
  return {
    services__navigation_service: navigation_service
  };
});

//# sourceMappingURL=navigation_service.ddc.js.map
