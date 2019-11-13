define(['dart_sdk', 'packages/flutter_website/services/navigation_service', 'packages/get_it/get_it'], function(dart_sdk, packages__flutter_website__services__navigation_service, packages__get_it__get_it) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const navigation_service = packages__flutter_website__services__navigation_service.services__navigation_service;
  const get_it = packages__get_it__get_it.get_it;
  const service_locator = Object.create(dart.library);
  let VoidToNavigationService = () => (VoidToNavigationService = dart.constFn(dart.fnType(navigation_service.NavigationService, [])))();
  const CT = Object.create(null);
  service_locator.setupLocator = function setupLocator() {
    service_locator.locator.registerLazySingleton(navigation_service.NavigationService, dart.fn(() => new navigation_service.NavigationService.new(), VoidToNavigationService()));
  };
  dart.defineLazy(service_locator, {
    /*service_locator.locator*/get locator() {
      return get_it.GetIt.instance;
    },
    set locator(_) {}
  });
  dart.trackLibraries("packages/flutter_website/service_locator", {
    "package:flutter_website/service_locator.dart": service_locator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["service_locator.dart"],"names":[],"mappings":";;;;;;;;;;;AAM0D,IAAxD,AAAQ,oFAAsB,cAAM;EACtC;;MAJM,uBAAO;YAAS","file":"service_locator.ddc.js"}');
  // Exports:
  return {
    service_locator: service_locator
  };
});

//# sourceMappingURL=service_locator.ddc.js.map
