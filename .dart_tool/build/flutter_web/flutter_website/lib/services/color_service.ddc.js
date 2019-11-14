define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const color_service = Object.create(dart.library);
  const CT = Object.create(null);
  const currentColor = dart.privateName(color_service, "ColorService.currentColor");
  color_service.ColorService = class ColorService extends change_notifier.ChangeNotifier {
    get currentColor() {
      return this[currentColor];
    }
    set currentColor(value) {
      this[currentColor] = value;
    }
  };
  (color_service.ColorService.new = function() {
    this[currentColor] = null;
    color_service.ColorService.__proto__.new.call(this);
    ;
  }).prototype = color_service.ColorService.prototype;
  dart.addTypeTests(color_service.ColorService);
  dart.setLibraryUri(color_service.ColorService, "package:flutter_website/services/color_service.dart");
  dart.setFieldSignature(color_service.ColorService, () => ({
    __proto__: dart.getFields(color_service.ColorService.__proto__),
    currentColor: dart.fieldType(ui.Color)
  }));
  dart.trackLibraries("packages/flutter_website/services/color_service", {
    "package:flutter_website/services/color_service.dart": color_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["color_service.dart"],"names":[],"mappings":";;;;;;;;;;;IAGQ;;;;;;;;;;;EACR","file":"color_service.ddc.js"}');
  // Exports:
  return {
    services__color_service: color_service
  };
});

//# sourceMappingURL=color_service.ddc.js.map
