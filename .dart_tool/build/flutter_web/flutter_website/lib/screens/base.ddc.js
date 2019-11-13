define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_website/styles', 'packages/flutter/src/animation/animation', 'packages/flutter_website/util', 'packages/responsive_builder/responsive_builder', 'packages/flutter/material', 'packages/flutter_website/widgets/nav_drawer', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_website/widgets/centered_view', 'packages/flutter_website/widgets/navbar'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_website__styles, packages__flutter__src__animation__animation, packages__flutter_website__util, packages__responsive_builder__responsive_builder, packages__flutter__material, packages__flutter_website__widgets__nav_drawer, packages__flutter__src__gestures__arena, packages__flutter__src__painting___network_image_web, packages__flutter_website__widgets__centered_view, packages__flutter_website__widgets__navbar) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const styles = packages__flutter_website__styles.styles;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const util = packages__flutter_website__util.util;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const nav_drawer = packages__flutter_website__widgets__nav_drawer.widgets__nav_drawer;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const centered_view = packages__flutter_website__widgets__centered_view.widgets__centered_view;
  const navbar = packages__flutter_website__widgets__navbar.widgets__navbar;
  const base = Object.create(dart.library);
  let TweenOfColor = () => (TweenOfColor = dart.constFn(tween.Tween$(ui.Color)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DragStartDetailsTodynamic = () => (DragStartDetailsTodynamic = dart.constFn(dart.fnType(dart.dynamic, [drag_details.DragStartDetails])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndSizingInformationToScaffold = () => (BuildContextAndSizingInformationToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext, responsive_builder.SizingInformation])))();
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
        [_Location_column]: 15,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 67,
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
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanStart",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    }
  });
  const body$ = dart.privateName(base, "BaseView.body");
  base.BaseView = class BaseView extends framework.StatefulWidget {
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    createState() {
      return new base._BaseViewState.new();
    }
  };
  (base.BaseView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[body$] = body;
    base.BaseView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = base.BaseView.prototype;
  dart.addTypeTests(base.BaseView);
  dart.setMethodSignature(base.BaseView, () => ({
    __proto__: dart.getMethods(base.BaseView.__proto__),
    createState: dart.fnType(base._BaseViewState, [])
  }));
  dart.setLibraryUri(base.BaseView, "package:flutter_website/screens/base.dart");
  dart.setFieldSignature(base.BaseView, () => ({
    __proto__: dart.getFields(base.BaseView.__proto__),
    body: dart.finalFieldType(framework.Widget)
  }));
  const _animationController = dart.privateName(base, "_animationController");
  const _animation = dart.privateName(base, "_animation");
  const _color = dart.privateName(base, "_color");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C2;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C11;
  let C10;
  let C9;
  let C14;
  let C15;
  let C16;
  let C17;
  let C13;
  let C12;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  let C25;
  let C26;
  let C27;
  let C24;
  let C23;
  let C30;
  let C29;
  let C28;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(base.BaseView) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(base.BaseView)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(base.BaseView));
  base._BaseViewState = class _BaseViewState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_animationController] = new animation_controller.AnimationController.new({duration: new core.Duration.new({seconds: 1}), vsync: this});
      this[_animation] = new (TweenOfColor()).new({begin: styles.primaryColor, end: styles.accentColor}).animate(this[_animationController]);
    }
    changeColor() {
      this.setState(dart.fn(() => {
        this[_color] = util.Util.getNextColor(this[_color]);
      }, VoidToNull()));
    }
    build(context) {
      return new responsive_builder.ResponsiveBuilder.new({builder: dart.fn((context, sizingInformation) => new scaffold.Scaffold.new({drawer: dart.equals(sizingInformation.deviceScreenType, responsive_builder.DeviceScreenType.Mobile) ? new nav_drawer.NavigationDrawer.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}) : null, backgroundColor: this[_animation].value, body: new gesture_detector.GestureDetector.new({onPanStart: dart.fn(asdf => this.changeColor(), DragStartDetailsTodynamic()), onTap: dart.bind(this, 'changeColor'), child: new implicit_animations.AnimatedContainer.new({padding: new edge_insets.EdgeInsets.all(0.0), duration: this[_animationController].duration, color: this[_color], child: new centered_view.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new navbar.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), new basic.Expanded.new({child: this.widget.body, $creationLocationd_0dea112b090073317d4: C3 || CT.C3})]), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), BuildContextAndSizingInformationToScaffold()), $creationLocationd_0dea112b090073317d4: C28 || CT.C28});
    }
  };
  (base._BaseViewState.new = function() {
    this[_animationController] = null;
    this[_animation] = null;
    this[_color] = styles.primaryColor;
    base._BaseViewState.__proto__.new.call(this);
    ;
  }).prototype = base._BaseViewState.prototype;
  dart.addTypeTests(base._BaseViewState);
  dart.setMethodSignature(base._BaseViewState, () => ({
    __proto__: dart.getMethods(base._BaseViewState.__proto__),
    changeColor: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(base._BaseViewState, "package:flutter_website/screens/base.dart");
  dart.setFieldSignature(base._BaseViewState, () => ({
    __proto__: dart.getFields(base._BaseViewState.__proto__),
    [_animationController]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(ui.Color)),
    [_color]: dart.fieldType(ui.Color)
  }));
  dart.trackLibraries("packages/flutter_website/screens/base", {
    "package:flutter_website/screens/base.dart": base
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYe;;;;;;;AAGmB;IAAgB;;;QAL5B;QAAoB;;;AAAS,iDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiB7C,MAAX;AAG8D,MADpE,6BACI,4DAA8B,gCAAkB,YAAW;AAG7B,MADlC,mBAAa,AACR,iCAD4B,0BAAmB,6BACvC;IAGf;;AAMI,MAHF,cAAS;AAC2B,QAAlC,eAAc,uBAAa;;IAG/B;UAG0B;AACxB,YAAO,wDACI,SAAC,SAAS,sBAAsB,mCACI,YAAnC,AAAkB,iBAAD,mBAAsC,8CACzD,6FACA,uBACW,AAAW,8BACtB,sDACQ,QAAC,QAAS,mEAGf,6BACA,wDACe,+BAAI,gBACd,AAAqB,4CACxB,qBACA,2CACE,gCACa,sBAChB,qFACA,+BAAgB,AAAO;IAQvC;;;IAtDoB;IACH;IAEX,eAAS;;;EAoDjB","file":"base.ddc.js"}');
  // Exports:
  return {
    screens__base: base
  };
});

//# sourceMappingURL=base.ddc.js.map
