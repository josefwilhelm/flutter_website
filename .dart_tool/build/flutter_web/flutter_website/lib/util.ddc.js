define(['dart_sdk', 'packages/flutter_website/styles', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter_website__styles, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const styles = packages__flutter_website__styles.styles;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const util = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 24,
        [SizedBox_width]: null
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 60,
        [SizedBox_width]: 60
      });
    }
  });
  util.Util = class Util extends core.Object {
    static getNextColor(currentColor) {
      let index = math.Random.new().nextInt(styles.colorArray[$length]);
      let newColor = styles.colorArray[$_get](index);
      while (true)
        if (!dart.equals(newColor, currentColor))
          return styles.colorArray[$_get](index);
        else {
          index = math.Random.new().nextInt(styles.colorArray[$length]);
          newColor = styles.colorArray[$_get](index);
        }
    }
  };
  (util.Util.new = function() {
    ;
  }).prototype = util.Util.prototype;
  dart.addTypeTests(util.Util);
  dart.setLibraryUri(util.Util, "package:flutter_website/util.dart");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const SizedBox_height = dart.privateName(basic, "SizedBox.height");
  const SizedBox_width = dart.privateName(basic, "SizedBox.width");
  let C0;
  let C1;
  dart.defineLazy(util, {
    /*util.smallSpace*/get smallSpace() {
      return C0 || CT.C0;
    },
    /*util.bigSpace*/get bigSpace() {
      return C1 || CT.C1;
    }
  });
  dart.trackLibraries("packages/flutter_website/util", {
    "package:flutter_website/util.dart": util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wBAMkC;AAC1B,kBAAQ,AAAS,0BAAQ,AAAW;AACpC,qBAAW,AAAU,yBAAC,KAAK;AAC/B,aAAO;AACL,yBAAI,QAAQ,EAAI,YAAY;AAC1B,gBAAO,AAAU,0BAAC,KAAK;;AAEoB,UAA3C,QAAQ,AAAS,0BAAQ,AAAW;AACR,UAA5B,WAAW,AAAU,yBAAC,KAAK;;IAEjC;;;;EACF;;;;;;;;;;MAEM,eAAU;;;MACV,aAAQ","file":"util.ddc.js"}');
  // Exports:
  return {
    util: util
  };
});

//# sourceMappingURL=util.ddc.js.map
