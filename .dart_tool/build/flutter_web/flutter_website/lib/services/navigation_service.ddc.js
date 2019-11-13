define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const navigation_service = Object.create(dart.library);
  let GlobalKeyOfNavigatorState = () => (GlobalKeyOfNavigatorState = dart.constFn(framework.GlobalKey$(navigator.NavigatorState)))();
  const CT = Object.create(null);
  const navigatorKey = dart.privateName(navigation_service, "NavigationService.navigatorKey");
  navigation_service.NavigationService = class NavigationService extends core.Object {
    get navigatorKey() {
      return this[navigatorKey];
    }
    set navigatorKey(value) {
      super.navigatorKey = value;
    }
    navigateTo(routeName) {
      return this.navigatorKey.currentState.pushNamed(core.Object, routeName);
    }
    goBack() {
      return this.navigatorKey.currentState.pop(core.Object);
    }
  };
  (navigation_service.NavigationService.new = function() {
    this[navigatorKey] = GlobalKeyOfNavigatorState().new();
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
    navigatorKey: dart.finalFieldType(framework.GlobalKey$(navigator.NavigatorState))
  }));
  dart.trackLibraries("packages/flutter_website/services/navigation_service", {
    "package:flutter_website/services/navigation_service.dart": navigation_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigation_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAGkC;;;;;;eAEE;AAChC,YAAO,AAAa,AAAa,uDAAU,SAAS;IACtD;;AAGE,YAAO,AAAa,AAAa;IACnC;;;IARgC,qBAAe;;EASjD","file":"navigation_service.ddc.js"}');
  // Exports:
  return {
    services__navigation_service: navigation_service
  };
});

//# sourceMappingURL=navigation_service.ddc.js.map
