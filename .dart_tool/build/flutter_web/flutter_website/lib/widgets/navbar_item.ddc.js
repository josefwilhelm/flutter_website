define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_website/styles', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter_website__styles, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const styles = packages__flutter_website__styles.styles;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const navbar_item = Object.create(dart.library);
  let FutureOfObject = () => (FutureOfObject = dart.constFn(async.Future$(core.Object)))();
  let VoidToFutureOfObject = () => (VoidToFutureOfObject = dart.constFn(dart.fnType(FutureOfObject(), [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar_item.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar_item.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar_item.dart"
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
  let C1;
  let C0;
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
  let C11;
  let C12;
  let C10;
  let C9;
  const title$ = dart.privateName(navbar_item, "NavBarItem.title");
  const route$ = dart.privateName(navbar_item, "NavBarItem.route");
  navbar_item.NavBarItem = class NavBarItem extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    build(context) {
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({color: styles.textColor})})}), child: new flat_button.FlatButton.new({hoverColor: styles.textColor.withOpacity(0.4), onPressed: dart.fn(() => navigator.Navigator.pushNamed(core.Object, context, this.route), VoidToFutureOfObject()), child: new text.Text.new(this.title, {style: styles.navBarItemStyle, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
  };
  (navbar_item.NavBarItem.new = function(title, route, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[route$] = route;
    navbar_item.NavBarItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar_item.NavBarItem.prototype;
  dart.addTypeTests(navbar_item.NavBarItem);
  dart.setMethodSignature(navbar_item.NavBarItem, () => ({
    __proto__: dart.getMethods(navbar_item.NavBarItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar_item.NavBarItem, "package:flutter_website/widgets/navbar_item.dart");
  dart.setFieldSignature(navbar_item.NavBarItem, () => ({
    __proto__: dart.getFields(navbar_item.NavBarItem.__proto__),
    title: dart.finalFieldType(core.String),
    route: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_website/widgets/navbar_item", {
    "package:flutter_website/widgets/navbar_item.dart": navbar_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navbar_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKe;;;;;;IACA;;;;;;UAIa;AACxB,YAAO,0CAED,8CAAsB,mCAAe,mCAAkB,+BACpD,4CACO,AAAU,6BAAY,iBACvB,cAAgB,2CAAU,OAAO,EAAE,6CACvC,kBACL,oBACO;IAIf;;yCAhBsB,OAAY;;IAAZ;IAAY;AAA5B;;EAAkC","file":"navbar_item.ddc.js"}');
  // Exports:
  return {
    widgets__navbar_item: navbar_item
  };
});

//# sourceMappingURL=navbar_item.ddc.js.map
