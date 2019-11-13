define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_website/widgets/navbar_item'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter_website__widgets__navbar_item) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const navbar_item = packages__flutter_website__widgets__navbar_item.widgets__navbar_item;
  const nav_drawer_item = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 60,
        [EdgeInsets_left]: 30
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 16,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer_item.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 20,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer_item.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "route",
        [_Location_column]: 29,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer_item.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer_item.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer_item.dart"
      });
    }
  });
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C2;
  let C1;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C12;
  let C11;
  let C16;
  let C17;
  let C15;
  let C14;
  const title$ = dart.privateName(nav_drawer_item, "DrawerItem.title");
  const icon$ = dart.privateName(nav_drawer_item, "DrawerItem.icon");
  const route$ = dart.privateName(nav_drawer_item, "DrawerItem.route");
  nav_drawer_item.DrawerItem = class DrawerItem extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    build(context) {
      return new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(this.icon, {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new basic.SizedBox.new({width: 30.0, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new navbar_item.NavBarItem.new(this.title, this.route, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7})]), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
  };
  (nav_drawer_item.DrawerItem.new = function(title, icon, route, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[icon$] = icon;
    this[route$] = route;
    nav_drawer_item.DrawerItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = nav_drawer_item.DrawerItem.prototype;
  dart.addTypeTests(nav_drawer_item.DrawerItem);
  dart.setMethodSignature(nav_drawer_item.DrawerItem, () => ({
    __proto__: dart.getMethods(nav_drawer_item.DrawerItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(nav_drawer_item.DrawerItem, "package:flutter_website/widgets/nav_drawer_item.dart");
  dart.setFieldSignature(nav_drawer_item.DrawerItem, () => ({
    __proto__: dart.getFields(nav_drawer_item.DrawerItem.__proto__),
    title: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(icon_data.IconData),
    route: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_website/widgets/nav_drawer_item", {
    "package:flutter_website/widgets/nav_drawer_item.dart": nav_drawer_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["nav_drawer_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIe;;;;;;IACE;;;;;;IACF;;;;;;UAIa;AACxB,YAAO,qDAEE,6BACa,sBAChB,kBAAK,mEACL,+BAAgB,6DAChB,+BAAW,YAAO;IAI1B;;6CAdsB,OAAY,MAAW;;IAAvB;IAAY;IAAW;AAAvC;;EAA6C","file":"nav_drawer_item.ddc.js"}');
  // Exports:
  return {
    widgets__nav_drawer_item: nav_drawer_item
  };
});

//# sourceMappingURL=nav_drawer_item.ddc.js.map
