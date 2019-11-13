define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const scrollable = packages__flutter__src__widgets__actions.src__widgets__scrollable;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const scroll_controller = packages__flutter__src__widgets__actions.src__widgets__scroll_controller;
  const scroll_position = packages__flutter__src__widgets__actions.src__widgets__scroll_position;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const alignment$ = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const decoration = packages__flutter__src__painting___network_image_web.src__painting__decoration;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const object = packages__flutter__src__rendering__animated_size.src__rendering__object;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const parallax_image = Object.create(dart.library);
  const $clamp = dartx.clamp;
  const $runtimeType = dartx.runtimeType;
  let DiagnosticsPropertyOfImageProvider = () => (DiagnosticsPropertyOfImageProvider = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageProvider)))();
  let DiagnosticsPropertyOfColor = () => (DiagnosticsPropertyOfColor = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Color)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let DiagnosticsPropertyOfScrollPosition = () => (DiagnosticsPropertyOfScrollPosition = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_position.ScrollPosition)))();
  let DiagnosticsPropertyOfSize = () => (DiagnosticsPropertyOfSize = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Size)))();
  let DiagnosticsPropertyOfImageConfiguration = () => (DiagnosticsPropertyOfImageConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageConfiguration)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPosition",
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "screenSize",
        [_Location_column]: 11,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/parallax_image/parallax_image.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/parallax_image/parallax_image.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/parallax_image/parallax_image.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: image_provider.ImageConfiguration.prototype,
        [ImageConfiguration_platform]: null,
        [ImageConfiguration_size]: null,
        [ImageConfiguration_textDirection]: null,
        [ImageConfiguration_locale]: null,
        [ImageConfiguration_devicePixelRatio]: null,
        [ImageConfiguration_bundle]: null
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C5;
  let C1;
  let C0;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C11;
  let C10;
  const image$ = dart.privateName(parallax_image, "ParallaxImage.image");
  const controller$ = dart.privateName(parallax_image, "ParallaxImage.controller");
  const extent$ = dart.privateName(parallax_image, "ParallaxImage.extent");
  const color$ = dart.privateName(parallax_image, "ParallaxImage.color");
  const child$ = dart.privateName(parallax_image, "ParallaxImage.child");
  parallax_image.ParallaxImage = class ParallaxImage extends framework.StatelessWidget {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get extent() {
      return this[extent$];
    }
    set extent(value) {
      super.extent = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let media = media_query.MediaQuery.of(context);
      let scrollPosition = this.controller != null ? this.controller.position : scrollable.Scrollable.of(context).position;
      let constraints = dart.equals(scrollPosition.axis, basic_types.Axis.vertical) ? new box.BoxConstraints.new({minHeight: this.extent}) : new box.BoxConstraints.new({minWidth: this.extent});
      return new basic.RepaintBoundary.new({child: new basic.ConstrainedBox.new({constraints: constraints, child: new parallax_image._Parallax.new({image: this.image, scrollPosition: scrollPosition, child: this.child, screenSize: media.size, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new diagnostics.DoubleProperty.new("extent", this.extent));
      description.add(new (DiagnosticsPropertyOfImageProvider()).new("image", this.image));
      description.add(new (DiagnosticsPropertyOfColor()).new("color", this.color));
    }
  };
  (parallax_image.ParallaxImage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let extent = opts && 'extent' in opts ? opts.extent : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[image$] = image;
    this[extent$] = extent;
    this[controller$] = controller;
    this[color$] = color;
    this[child$] = child;
    parallax_image.ParallaxImage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = parallax_image.ParallaxImage.prototype;
  dart.addTypeTests(parallax_image.ParallaxImage);
  dart.setMethodSignature(parallax_image.ParallaxImage, () => ({
    __proto__: dart.getMethods(parallax_image.ParallaxImage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(parallax_image.ParallaxImage, "package:parallax_image/parallax_image.dart");
  dart.setFieldSignature(parallax_image.ParallaxImage, () => ({
    __proto__: dart.getFields(parallax_image.ParallaxImage.__proto__),
    image: dart.finalFieldType(image_provider.ImageProvider),
    controller: dart.finalFieldType(scroll_controller.ScrollController),
    extent: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    child: dart.finalFieldType(framework.Widget)
  }));
  parallax_image._Parallax = class _Parallax extends framework.SingleChildRenderObjectWidget {
    createRenderObject(context) {
      return new parallax_image._RenderParallax.new({scrollPosition: this.scrollPosition, image: this.image, screenSize: this.screenSize, color: this.color});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      parallax_image._RenderParallax._check(renderObject);
      t0 = renderObject;
      t0.image = this.image;
      t0.scrollPosition = this.scrollPosition;
      t0.screenSize = this.screenSize;
      t0.color = this.color;
      t0;
    }
  };
  (parallax_image._Parallax.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let scrollPosition = opts && 'scrollPosition' in opts ? opts.scrollPosition : null;
    let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.image = image;
    this.scrollPosition = scrollPosition;
    this.screenSize = screenSize;
    this.color = color;
    parallax_image._Parallax.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = parallax_image._Parallax.prototype;
  dart.addTypeTests(parallax_image._Parallax);
  dart.setMethodSignature(parallax_image._Parallax, () => ({
    __proto__: dart.getMethods(parallax_image._Parallax.__proto__),
    createRenderObject: dart.fnType(parallax_image._RenderParallax, [framework.BuildContext])
  }));
  dart.setLibraryUri(parallax_image._Parallax, "package:parallax_image/parallax_image.dart");
  dart.setFieldSignature(parallax_image._Parallax, () => ({
    __proto__: dart.getFields(parallax_image._Parallax.__proto__),
    image: dart.finalFieldType(image_provider.ImageProvider),
    scrollPosition: dart.finalFieldType(scroll_position.ScrollPosition),
    screenSize: dart.finalFieldType(ui.Size),
    color: dart.finalFieldType(ui.Color)
  }));
  const ImageConfiguration_platform = dart.privateName(image_provider, "ImageConfiguration.platform");
  const ImageConfiguration_size = dart.privateName(image_provider, "ImageConfiguration.size");
  const ImageConfiguration_textDirection = dart.privateName(image_provider, "ImageConfiguration.textDirection");
  const ImageConfiguration_locale = dart.privateName(image_provider, "ImageConfiguration.locale");
  const ImageConfiguration_devicePixelRatio = dart.privateName(image_provider, "ImageConfiguration.devicePixelRatio");
  const ImageConfiguration_bundle = dart.privateName(image_provider, "ImageConfiguration.bundle");
  let C13;
  const _position = dart.privateName(parallax_image, "_position");
  const _painter = dart.privateName(parallax_image, "_painter");
  const _decoration = dart.privateName(parallax_image, "_decoration");
  const _image = dart.privateName(parallax_image, "_image");
  const _scrollPosition = dart.privateName(parallax_image, "_scrollPosition");
  const _screenSize = dart.privateName(parallax_image, "_screenSize");
  const _color = dart.privateName(parallax_image, "_color");
  const _configuration = dart.privateName(parallax_image, "_configuration");
  parallax_image._RenderParallax = class _RenderParallax extends proxy_box.RenderProxyBox {
    set image(value) {
      let t0;
      if (dart.equals(value, this[_image])) return;
      this[_image] = value;
      t0 = this[_painter];
      t0 == null ? null : t0.dispose();
      this[_painter] = null;
      this[_decoration] = null;
      this.markNeedsPaint();
    }
    set scrollPosition(value) {
      if (dart.equals(value, this[_scrollPosition])) return;
      if (dart.test(this.attached)) this[_scrollPosition].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_scrollPosition] = value;
      if (dart.test(this.attached)) this[_scrollPosition].addListener(dart.bind(this, 'markNeedsPaint'));
      this.markNeedsPaint();
    }
    set screenSize(value) {
      if (dart.equals(value, this[_screenSize])) return;
      this[_screenSize] = value;
      this.markNeedsPaint();
    }
    set color(value) {
      let t0;
      if (dart.equals(value, this[_color])) return;
      this[_color] = value;
      t0 = this[_painter];
      t0 == null ? null : t0.dispose();
      this[_painter] = null;
      this[_decoration] = null;
      this.markNeedsPaint();
    }
    get configuration() {
      return this[_configuration];
    }
    get decoration() {
      if (this[_decoration] != null) return this[_decoration];
      let alignment = null;
      if (dart.equals(this[_scrollPosition].axis, basic_types.Axis.vertical)) {
        let value = (dart.notNull(this[_position].dy) / dart.notNull(this[_screenSize].height) - 0.5)[$clamp](-1.0, 1.0);
        alignment = new alignment$.Alignment.new(0.0, value);
      } else {
        let value = (dart.notNull(this[_position].dx) / dart.notNull(this[_screenSize].width) - 0.5)[$clamp](-1.0, 1.0);
        alignment = new alignment$.Alignment.new(value, 0.0);
      }
      this[_decoration] = new box_decoration.BoxDecoration.new({color: this[_color], image: new decoration_image.DecorationImage.new({alignment: alignment, image: this[_image], fit: this.fit})});
      return this[_decoration];
    }
    get fit() {
      return dart.equals(this[_scrollPosition].axis, basic_types.Axis.vertical) ? box_fit.BoxFit.fitWidth : box_fit.BoxFit.fitHeight;
    }
    attach(owner) {
      object.PipelineOwner._check(owner);
      super.attach(owner);
      this[_scrollPosition].addListener(dart.bind(this, 'markNeedsPaint'));
    }
    detach() {
      let t0;
      t0 = this[_painter];
      t0 == null ? null : t0.dispose();
      this[_painter] = null;
      this[_scrollPosition].removeListener(dart.bind(this, 'markNeedsPaint'));
      super.detach();
      this.markNeedsPaint();
    }
    hitTestSelf(position) {
      return true;
    }
    paint(context, offset) {
      let t0;
      if (!(this.size.width != null)) dart.assertFailed(null, "org-dartlang-app:///packages/parallax_image/parallax_image.dart", 258, 12, "size.width != null");
      if (!(this.size.height != null)) dart.assertFailed(null, "org-dartlang-app:///packages/parallax_image/parallax_image.dart", 259, 12, "size.height != null");
      let pos = this.localToGlobal(new ui.Offset.new(dart.notNull(this.size.width) / 2, dart.notNull(this.size.height) / 2));
      if (!dart.equals(this[_position], pos)) {
        t0 = this[_painter];
        t0 == null ? null : t0.dispose();
        this[_painter] = null;
        this[_decoration] = null;
        this[_position] = pos;
      }
      this[_painter] == null ? this[_painter] = this.decoration.createBoxPainter(dart.bind(this, 'markNeedsPaint')) : null;
      let filledConfiguration = this.configuration.copyWith({size: this.size});
      let debugSaveCount = null;
      if (!dart.test(dart.fn(() => {
        debugSaveCount = context.canvas.getSaveCount();
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/parallax_image/parallax_image.dart", 272, 12, "() {\n      debugSaveCount = context.canvas.getSaveCount();\n      return true;\n    }()");
      this[_painter].paint(context.canvas, offset, filledConfiguration);
      if (!dart.test(dart.fn(() => {
        if (debugSaveCount != context.canvas.getSaveCount()) {
          dart.throw(assertions.FlutterError.new(dart.str(dart.runtimeType(this.decoration)) + " painter had mismatching save and restore calls.\n" + "Before painting the decoration, the canvas save count was " + dart.str(debugSaveCount) + ". " + "After painting it, the canvas save count was " + dart.str(context.canvas.getSaveCount()) + ". " + "Every call to save() or saveLayer() must be matched by a call to restore().\n" + "The decoration was:\n" + "  " + dart.str(this.decoration) + "\n" + "The painter was:\n" + "  " + dart.str(this[_painter])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/parallax_image/parallax_image.dart", 277, 12, "() {\n      if (debugSaveCount != context.canvas.getSaveCount()) {\n        throw new FlutterError(\n            '${decoration.runtimeType} painter had mismatching save and restore calls.\\n'\n            'Before painting the decoration, the canvas save count was $debugSaveCount. '\n            'After painting it, the canvas save count was ${context.canvas.getSaveCount()}. '\n            'Every call to save() or saveLayer() must be matched by a call to restore().\\n'\n            'The decoration was:\\n'\n            '  $decoration\\n'\n            'The painter was:\\n'\n            '  $_painter');\n      }\n      return true;\n    }()");
      if (dart.test(this.decoration.isComplex)) context.setIsComplexHint();
      super.paint(context, offset);
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfScrollPosition()).new("scrollPosition", this[_scrollPosition]));
      description.add(new (DiagnosticsPropertyOfSize()).new("screenSize", this[_screenSize]));
      description.add(this[_decoration].toDiagnosticsNode({name: "decoration"}));
      description.add(new (DiagnosticsPropertyOfImageConfiguration()).new("configuration", this.configuration));
    }
  };
  (parallax_image._RenderParallax.new = function(opts) {
    let scrollPosition = opts && 'scrollPosition' in opts ? opts.scrollPosition : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let configuration = opts && 'configuration' in opts ? opts.configuration : C13 || CT.C13;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_position] = null;
    this[_painter] = null;
    this[_decoration] = null;
    this[_image] = image;
    this[_scrollPosition] = scrollPosition;
    this[_screenSize] = screenSize;
    this[_color] = color;
    this[_configuration] = configuration;
    parallax_image._RenderParallax.__proto__.new.call(this, child);
    ;
  }).prototype = parallax_image._RenderParallax.prototype;
  dart.addTypeTests(parallax_image._RenderParallax);
  dart.setGetterSignature(parallax_image._RenderParallax, () => ({
    __proto__: dart.getGetters(parallax_image._RenderParallax.__proto__),
    configuration: image_provider.ImageConfiguration,
    decoration: decoration.Decoration,
    fit: box_fit.BoxFit
  }));
  dart.setSetterSignature(parallax_image._RenderParallax, () => ({
    __proto__: dart.getSetters(parallax_image._RenderParallax.__proto__),
    image: image_provider.ImageProvider,
    scrollPosition: scroll_position.ScrollPosition,
    screenSize: ui.Size,
    color: ui.Color
  }));
  dart.setLibraryUri(parallax_image._RenderParallax, "package:parallax_image/parallax_image.dart");
  dart.setFieldSignature(parallax_image._RenderParallax, () => ({
    __proto__: dart.getFields(parallax_image._RenderParallax.__proto__),
    [_image]: dart.fieldType(image_provider.ImageProvider),
    [_scrollPosition]: dart.fieldType(scroll_position.ScrollPosition),
    [_screenSize]: dart.fieldType(ui.Size),
    [_color]: dart.fieldType(ui.Color),
    [_configuration]: dart.fieldType(image_provider.ImageConfiguration),
    [_position]: dart.fieldType(ui.Offset),
    [_painter]: dart.fieldType(decoration.BoxPainter),
    [_decoration]: dart.fieldType(decoration.Decoration)
  }));
  dart.trackLibraries("packages/parallax_image/parallax_image", {
    "package:parallax_image/parallax_image.dart": parallax_image
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["parallax_image.dart"],"names":[],"mappings":"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","file":"parallax_image.ddc.js"}');
  // Exports:
  return {
    parallax_image: parallax_image
  };
});

//# sourceMappingURL=parallax_image.ddc.js.map
