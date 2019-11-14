define(['dart_sdk', 'packages/flutter/material', 'packages/flutter_website/service_locator', 'packages/flutter_website/services/navigation_service', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter_website/screens/about', 'packages/flutter_website/styles', 'packages/responsive_builder/responsive_builder', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_website/widgets/centered_view', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_website/widgets/navbar_item', 'packages/flutter_website/widgets/nav_drawer_item', 'packages/flutter_website/widgets/desktop/home_view_desktop', 'packages/flutter_website/widgets/mobile/home_view_mobile'], function(dart_sdk, packages__flutter__material, packages__flutter_website__service_locator, packages__flutter_website__services__navigation_service, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter_website__screens__about, packages__flutter_website__styles, packages__responsive_builder__responsive_builder, packages__flutter__src__gestures__arena, packages__flutter__src__painting___network_image_web, packages__flutter_website__widgets__centered_view, packages__flutter__src__rendering__animated_size, packages__flutter_website__widgets__navbar_item, packages__flutter_website__widgets__nav_drawer_item, packages__flutter_website__widgets__desktop__home_view_desktop, packages__flutter_website__widgets__mobile__home_view_mobile) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const service_locator = packages__flutter_website__service_locator.service_locator;
  const navigation_service = packages__flutter_website__services__navigation_service.services__navigation_service;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const scroll_controller = packages__flutter__src__widgets__actions.src__widgets__scroll_controller;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const about = packages__flutter_website__screens__about.screens__about;
  const styles = packages__flutter_website__styles.styles;
  const util = packages__flutter_website__styles.util;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const centered_view = packages__flutter_website__widgets__centered_view.widgets__centered_view;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const navbar_item = packages__flutter_website__widgets__navbar_item.widgets__navbar_item;
  const nav_drawer_item = packages__flutter_website__widgets__nav_drawer_item.widgets__nav_drawer_item;
  const home_view_desktop = packages__flutter_website__widgets__desktop__home_view_desktop.widgets__desktop__home_view_desktop;
  const home_view_mobile = packages__flutter_website__widgets__mobile__home_view_mobile.widgets__mobile__home_view_mobile;
  const navbar_logo_desktop = Object.create(dart.library);
  const routing = Object.create(dart.library);
  const portfolio = Object.create(dart.library);
  const base = Object.create(dart.library);
  const navbar = Object.create(dart.library);
  const navbar_mobile = Object.create(dart.library);
  const navbar_logo_mobile = Object.create(dart.library);
  const navbar_desktop = Object.create(dart.library);
  const nav_drawer = Object.create(dart.library);
  const home = Object.create(dart.library);
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition = dart.constFn(dart.fnType(transitions.FadeTransition, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), framework.Widget])))();
  let TweenOfColor = () => (TweenOfColor = dart.constFn(tween.Tween$(ui.Color)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DragStartDetailsTodynamic = () => (DragStartDetailsTodynamic = dart.constFn(dart.fnType(dart.dynamic, [drag_details.DragStartDetails])))();
  let RouteSettingsToRoute = () => (RouteSettingsToRoute = dart.constFn(dart.fnType(navigator.Route, [navigator.RouteSettings])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndSizingInformationToScaffold = () => (BuildContextAndSizingInformationToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext, responsive_builder.SizingInformation])))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 16,
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
        [_Location_column]: 22,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_logo_desktop.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 15,
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
        [_Location_column]: 14,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_logo_desktop.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 14,
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
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_logo_desktop.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/routing.dart"
      });
    },
    get C15() {
      return C15 = dart.constList([], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/routing.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/routing.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/routing.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/routing.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/portfolio.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/portfolio.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C28() {
      return C28 = dart.fn(routing.generateRoute, RouteSettingsToRoute());
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 21,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateRoute",
        [_Location_column]: 21,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialRoute",
        [_Location_column]: 21,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanStart",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/base.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "desktop",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mobile",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/navbar.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_mobile.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_mobile.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_mobile.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_mobile.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_mobile.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_logo_mobile.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_logo_mobile.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/mobile/navbar_logo_mobile.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_desktop.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 26,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "route",
        [_Location_column]: 39,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_desktop.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_desktop.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 26,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "route",
        [_Location_column]: 35,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_desktop.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_desktop.dart"
      });
    },
    get C117() {
      return C117 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_desktop.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/desktop/navbar_desktop.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 41,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "route",
        [_Location_column]: 49,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 22,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 37,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "route",
        [_Location_column]: 43,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/widgets/nav_drawer.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/home.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/home.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "desktop",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mobile",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/flutter_website/screens/home.dart"
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
  let C4;
  let C3;
  let C8;
  let C9;
  let C7;
  let C6;
  navbar_logo_desktop.NavBarLogoDesktop = class NavBarLogoDesktop extends framework.StatelessWidget {
    build(context) {
      return new ink_well.InkWell.new({onTap: dart.fn(() => service_locator.locator.call(navigation_service.NavigationService).navigateTo("home"), VoidToFuture()), child: new basic.SizedBox.new({child: new image.Image.asset("assets/ic_logo_full.png", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
    }
  };
  (navbar_logo_desktop.NavBarLogoDesktop.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navbar_logo_desktop.NavBarLogoDesktop.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar_logo_desktop.NavBarLogoDesktop.prototype;
  dart.addTypeTests(navbar_logo_desktop.NavBarLogoDesktop);
  dart.setMethodSignature(navbar_logo_desktop.NavBarLogoDesktop, () => ({
    __proto__: dart.getMethods(navbar_logo_desktop.NavBarLogoDesktop.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar_logo_desktop.NavBarLogoDesktop, "package:flutter_website/widgets/desktop/navbar_logo_desktop.dart");
  let C12;
  let C13;
  let C11;
  let C10;
  routing._FadeRoute = class _FadeRoute extends pages.PageRouteBuilder {};
  (routing._FadeRoute.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    this.child = child;
    routing._FadeRoute.__proto__.new.call(this, {pageBuilder: dart.fn((context, animation, secondaryAnimation) => child, BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), transitionsBuilder: dart.fn((context, animation, secondaryAnimation, child) => new transitions.FadeTransition.new({opacity: animation, child: child, $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition())});
    ;
  }).prototype = routing._FadeRoute.prototype;
  dart.addTypeTests(routing._FadeRoute);
  dart.setLibraryUri(routing._FadeRoute, "package:flutter_website/routing.dart");
  dart.setFieldSignature(routing._FadeRoute, () => ({
    __proto__: dart.getFields(routing._FadeRoute.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C15;
  let C14;
  let C16;
  let C17;
  let C18;
  routing.generateRoute = function generateRoute(settings) {
    core.print("generateRoute: " + dart.str(settings.name));
    switch (settings.name) {
      case "home":
      {
        return routing._getPageRoute(new home.HomeView.new({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}));
      }
      case "portfolio":
      {
        return routing._getPageRoute(new portfolio.Portfolio.new({$creationLocationd_0dea112b090073317d4: C16 || CT.C16}));
      }
      case "about":
      {
        return routing._getPageRoute(new about.About.new({$creationLocationd_0dea112b090073317d4: C17 || CT.C17}));
      }
      default:
      {
        return routing._getPageRoute(new home.HomeView.new({$creationLocationd_0dea112b090073317d4: C18 || CT.C18}));
      }
    }
  };
  routing._getPageRoute = function _getPageRoute(child) {
    return new routing._FadeRoute.new({child: child});
  };
  dart.defineLazy(routing, {
    /*routing.HomeRoute*/get HomeRoute() {
      return "home";
    },
    /*routing.AboutRoute*/get AboutRoute() {
      return "about";
    },
    /*routing.PortFolioRoute*/get PortFolioRoute() {
      return "portfolio";
    }
  });
  portfolio.Portfolio = class Portfolio extends framework.StatefulWidget {
    createState() {
      return new portfolio._PortfolioState.new();
    }
  };
  (portfolio.Portfolio.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    portfolio.Portfolio.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = portfolio.Portfolio.prototype;
  dart.addTypeTests(portfolio.Portfolio);
  dart.setMethodSignature(portfolio.Portfolio, () => ({
    __proto__: dart.getMethods(portfolio.Portfolio.__proto__),
    createState: dart.fnType(portfolio._PortfolioState, [])
  }));
  dart.setLibraryUri(portfolio.Portfolio, "package:flutter_website/screens/portfolio.dart");
  const _controller = dart.privateName(portfolio, "_controller");
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C24;
  let C23;
  portfolio._PortfolioState = class _PortfolioState extends framework.State$(portfolio.Portfolio) {
    build(context) {
      return new basic.Center.new({child: new text.Text.new("Coming soon...", {style: styles.normalTextDesktop, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (portfolio._PortfolioState.new = function() {
    this[_controller] = new scroll_controller.ScrollController.new();
    portfolio._PortfolioState.__proto__.new.call(this);
    ;
  }).prototype = portfolio._PortfolioState.prototype;
  dart.addTypeTests(portfolio._PortfolioState);
  dart.setMethodSignature(portfolio._PortfolioState, () => ({
    __proto__: dart.getMethods(portfolio._PortfolioState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(portfolio._PortfolioState, "package:flutter_website/screens/portfolio.dart");
  dart.setFieldSignature(portfolio._PortfolioState, () => ({
    __proto__: dart.getFields(portfolio._PortfolioState.__proto__),
    [_controller]: dart.finalFieldType(scroll_controller.ScrollController)
  }));
  base.BaseView = class BaseView extends framework.StatefulWidget {
    createState() {
      return new base._BaseViewState.new();
    }
  };
  (base.BaseView.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    base.BaseView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = base.BaseView.prototype;
  dart.addTypeTests(base.BaseView);
  dart.setMethodSignature(base.BaseView, () => ({
    __proto__: dart.getMethods(base.BaseView.__proto__),
    createState: dart.fnType(base._BaseViewState, [])
  }));
  dart.setLibraryUri(base.BaseView, "package:flutter_website/screens/base.dart");
  const _animationController = dart.privateName(base, "_animationController");
  const _animation = dart.privateName(base, "_animation");
  const _color = dart.privateName(base, "_color");
  let C26;
  let C27;
  let C28;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  let C36;
  let C35;
  let C34;
  let C39;
  let C38;
  let C37;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C47;
  let C48;
  let C44;
  let C43;
  let C51;
  let C52;
  let C53;
  let C50;
  let C49;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  let C61;
  let C60;
  let C59;
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
      this[_animation] = new (TweenOfColor()).new({begin: styles.currentColor1, end: styles.accentColor}).animate(this[_animationController]);
    }
    changeColor() {
      this.setState(dart.fn(() => {
        this[_color] = util.Util.getNextColor(this[_color]);
      }, VoidToNull()));
    }
    build(context) {
      return new responsive_builder.ResponsiveBuilder.new({builder: dart.fn((context, sizingInformation) => new scaffold.Scaffold.new({drawer: dart.equals(sizingInformation.deviceScreenType, responsive_builder.DeviceScreenType.Mobile) ? new nav_drawer.NavigationDrawer.new({$creationLocationd_0dea112b090073317d4: C26 || CT.C26}) : null, backgroundColor: this[_animation].value, body: new gesture_detector.GestureDetector.new({onPanStart: dart.fn(asdf => this.changeColor(), DragStartDetailsTodynamic()), onTap: dart.bind(this, 'changeColor'), child: new implicit_animations.AnimatedContainer.new({padding: new edge_insets.EdgeInsets.all(0.0), duration: this[_animationController].duration, color: this[_color], child: new centered_view.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new navbar.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new basic.Expanded.new({child: new navigator.Navigator.new({key: service_locator.locator.call(navigation_service.NavigationService).navigatorKey, onGenerateRoute: C28 || CT.C28, initialRoute: "home", $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34})]), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), BuildContextAndSizingInformationToScaffold()), $creationLocationd_0dea112b090073317d4: C59 || CT.C59});
    }
  };
  (base._BaseViewState.new = function() {
    this[_animationController] = null;
    this[_animation] = null;
    this[_color] = styles.currentColor1;
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
  let C62;
  let C63;
  let C66;
  let C67;
  let C65;
  let C64;
  navbar.NavigationBar = class NavigationBar extends framework.StatelessWidget {
    build(context) {
      return new responsive_builder.ScreenTypeLayout.new({desktop: new navbar_desktop.NavigationBarTabletDesktop.new({$creationLocationd_0dea112b090073317d4: C62 || CT.C62}), mobile: new navbar_mobile.NavigationBarMobile.new({$creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64});
    }
  };
  (navbar.NavigationBar.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navbar.NavigationBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar.NavigationBar.prototype;
  dart.addTypeTests(navbar.NavigationBar);
  dart.setMethodSignature(navbar.NavigationBar, () => ({
    __proto__: dart.getMethods(navbar.NavigationBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar.NavigationBar, "package:flutter_website/widgets/navbar.dart");
  let C70;
  let C71;
  let C72;
  let C69;
  let C68;
  let C75;
  let C76;
  let C77;
  let C74;
  let C73;
  let C78;
  let C81;
  let C82;
  let C83;
  let C80;
  let C79;
  let C86;
  let C87;
  let C85;
  let C84;
  navbar_mobile.NavigationBarMobile = class NavigationBarMobile extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({height: 80.0, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new icon_button.IconButton.new({padding: new edge_insets.EdgeInsets.all(0.0), icon: new icon.Icon.new(icons.Icons.menu, {color: colors.Colors.white, size: 32.0, $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), onPressed: dart.fn(() => {
                scaffold.Scaffold.of(context).openDrawer();
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), new navbar_logo_mobile.NavBarLogoMobile.new({$creationLocationd_0dea112b090073317d4: C78 || CT.C78})]), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84});
    }
  };
  (navbar_mobile.NavigationBarMobile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navbar_mobile.NavigationBarMobile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar_mobile.NavigationBarMobile.prototype;
  dart.addTypeTests(navbar_mobile.NavigationBarMobile);
  dart.setMethodSignature(navbar_mobile.NavigationBarMobile, () => ({
    __proto__: dart.getMethods(navbar_mobile.NavigationBarMobile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar_mobile.NavigationBarMobile, "package:flutter_website/widgets/mobile/navbar_mobile.dart");
  let C90;
  let C89;
  let C88;
  let C93;
  let C94;
  let C95;
  let C92;
  let C91;
  let C98;
  let C99;
  let C97;
  let C96;
  navbar_logo_mobile.NavBarLogoMobile = class NavBarLogoMobile extends framework.StatelessWidget {
    build(context) {
      return new ink_well.InkWell.new({onTap: dart.fn(() => {
          service_locator.locator.call(navigation_service.NavigationService).navigateTo("home");
        }, VoidToNull()), child: new basic.SizedBox.new({height: 124.0, width: 124.0, child: new image.Image.asset("assets/ic_logo_full.png", {$creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
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
  let C100;
  let C103;
  let C104;
  let C102;
  let C101;
  let C107;
  let C106;
  let C105;
  let C110;
  let C111;
  let C109;
  let C108;
  let C114;
  let C115;
  let C113;
  let C112;
  let C117;
  let C116;
  let C120;
  let C121;
  let C119;
  let C118;
  navbar_desktop.NavigationBarTabletDesktop = class NavigationBarTabletDesktop extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({height: 100.0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new navbar_logo_desktop.NavBarLogoDesktop.new({$creationLocationd_0dea112b090073317d4: C100 || CT.C100}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new navbar_item.NavBarItem.new("Portfolio", "portfolio", {$creationLocationd_0dea112b090073317d4: C101 || CT.C101}), new basic.SizedBox.new({width: 60.0, $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), new navbar_item.NavBarItem.new("About", "about", {$creationLocationd_0dea112b090073317d4: C108 || CT.C108}), util.bigSpace]), $creationLocationd_0dea112b090073317d4: C112 || CT.C112})]), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118});
    }
  };
  (navbar_desktop.NavigationBarTabletDesktop.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navbar_desktop.NavigationBarTabletDesktop.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar_desktop.NavigationBarTabletDesktop.prototype;
  dart.addTypeTests(navbar_desktop.NavigationBarTabletDesktop);
  dart.setMethodSignature(navbar_desktop.NavigationBarTabletDesktop, () => ({
    __proto__: dart.getMethods(navbar_desktop.NavigationBarTabletDesktop.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar_desktop.NavigationBarTabletDesktop, "package:flutter_website/widgets/desktop/navbar_desktop.dart");
  let C124;
  let C125;
  let C126;
  let C123;
  let C122;
  let C129;
  let C130;
  let C131;
  let C128;
  let C127;
  let C134;
  let C133;
  let C132;
  let C137;
  let C138;
  let C139;
  let C136;
  let C135;
  nav_drawer.NavigationDrawer = class NavigationDrawer extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({width: 220.0, decoration: new box_decoration.BoxDecoration.new({color: styles.currentColor1, boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.black12, blurRadius: 16.0})])}), child: new basic.Column.new({children: JSArrayOfWidget().of([new nav_drawer_item.DrawerItem.new("Portfolio", icons.Icons.camera, "portfolio", {$creationLocationd_0dea112b090073317d4: C122 || CT.C122}), new nav_drawer_item.DrawerItem.new("About", icons.Icons.help, "about", {$creationLocationd_0dea112b090073317d4: C127 || CT.C127})]), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C135 || CT.C135});
    }
  };
  (nav_drawer.NavigationDrawer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    nav_drawer.NavigationDrawer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = nav_drawer.NavigationDrawer.prototype;
  dart.addTypeTests(nav_drawer.NavigationDrawer);
  dart.setMethodSignature(nav_drawer.NavigationDrawer, () => ({
    __proto__: dart.getMethods(nav_drawer.NavigationDrawer.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(nav_drawer.NavigationDrawer, "package:flutter_website/widgets/nav_drawer.dart");
  let C140;
  let C141;
  let C144;
  let C145;
  let C143;
  let C142;
  home.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new responsive_builder.ScreenTypeLayout.new({desktop: new home_view_desktop.HomeContentViewDesktop.new({$creationLocationd_0dea112b090073317d4: C140 || CT.C140}), mobile: new home_view_mobile.HomeContentViewMobile.new({$creationLocationd_0dea112b090073317d4: C141 || CT.C141}), $creationLocationd_0dea112b090073317d4: C142 || CT.C142});
    }
  };
  (home.HomeView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.HomeView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.HomeView.prototype;
  dart.addTypeTests(home.HomeView);
  dart.setMethodSignature(home.HomeView, () => ({
    __proto__: dart.getMethods(home.HomeView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home.HomeView, "package:flutter_website/screens/home.dart");
  dart.trackLibraries("packages/flutter_website/routing", {
    "package:flutter_website/widgets/desktop/navbar_logo_desktop.dart": navbar_logo_desktop,
    "package:flutter_website/routing.dart": routing,
    "package:flutter_website/screens/portfolio.dart": portfolio,
    "package:flutter_website/screens/base.dart": base,
    "package:flutter_website/widgets/navbar.dart": navbar,
    "package:flutter_website/widgets/mobile/navbar_mobile.dart": navbar_mobile,
    "package:flutter_website/widgets/mobile/navbar_logo_mobile.dart": navbar_logo_mobile,
    "package:flutter_website/widgets/desktop/navbar_desktop.dart": navbar_desktop,
    "package:flutter_website/widgets/nav_drawer.dart": nav_drawer,
    "package:flutter_website/screens/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["widgets/desktop/navbar_logo_desktop.dart","routing.dart","screens/portfolio.dart","screens/base.dart","widgets/navbar.dart","widgets/mobile/navbar_mobile.dart","widgets/mobile/navbar_logo_mobile.dart","widgets/desktop/navbar_desktop.dart","widgets/nav_drawer.dart","screens/home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,kCACE,cAAM,AAAO,AAAsB,+GACnC,+BACQ,sBACX;IAIR;;;QAZ6B;;AAAQ,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;QCwBnC;;AACX,8DACe,SACE,SACK,WACA,uBAEhB,KAAK,uFACW,SACL,SACK,WACA,oBACX,UAEL,6CACO,SAAS,SACX,KAAK;;EAEf;;;;;;;;;;;;iDAxCkC;AACD,IAAxC,WAAM,AAAiC,6BAAf,AAAS,QAAD;AAChC,YAAQ,AAAS,QAAD;;;AAEZ,cAAO,uBAAc;;;;AAErB,cAAO,uBAAc;;;;AAErB,cAAO,uBAAc;;;;AAErB,cAAO,uBAAc;;;EAE3B;iDAE+B;AAC7B,UAAO,oCACE,KAAK;EAEhB;;MAtBa,iBAAS;;;MACT,kBAAU;;;MACV,sBAAc;;;;;;ACAQ;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;UAc4B;AACxB,YAAO,8BACE,kBACL,0BACO;IAuCb;;;IAtDM,oBAAkB;;;EAuD1B;;;;;;;;;;;;;ACpDkC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUqB,MAAX;AAG8D,MADpE,6BACI,4DAA8B,gCAAkB,YAAW;AAG7B,MADlC,mBAAa,AACR,iCAD4B,2BAAoB,6BACxC;IAGf;;AAMI,MAHF,cAAS;AAC2B,QAAlC,eAAc,uBAAa;;IAG/B;UAG0B;AACxB,YAAO,wDACI,SAAC,SAAS,sBAAsB,mCACI,YAAnC,AAAkB,iBAAD,mBAAsC,8CACzD,+FACA,uBACW,AAAW,8BACtB,sDACQ,QAAC,QAAS,mEAGf,6BACA,wDACe,+BAAI,gBACd,AAAqB,4CACxB,qBACA,2CACE,gCACa,sBAChB,uFACA,+BACW,kCACJ,AAAO,AAAsB;IAWpD;;;IA1DoB;IACH;IAEX,eAAS;;;EAwDjB;;;;;;;;;;;;;;;;;;;;;UCvE4B;AACxB,YAAO,uDACI,oHACD;IAEZ;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCN4B;AACxB,YAAO,sCACG,aACD,iCACsB,0CACU,+CACnB,sBAChB,yCACsB,+BAAI,YAClB,kBACE,0BACQ,2BACR,0EAEG;AACwB,gBAAxB,AAAY,qBAAT,OAAO;yFAGvB;IAIR;;;QAzB+B;;AAAQ,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;UCK5B;AACxB,YAAO,kCACE;AAC6C,UAAlD,AAAO,AAAsB;iCAExB,gCACG,cACD,cACM,sBACX;IAIR;;;QAhB4B;;AAAQ,uEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCEzB;AACxB,YAAO,sCACG,cACD,sCACgC,+CACnB,sBAChB,0GACA,iCAC6B,iCACT,sBAChB,+BAAW,sFACX,+BAAgB,iEAChB,+BAAW,8EACX;IAMZ;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;UCnB4B;AACxB,YAAO,qCACE,mBACK,6CACD,iCACI,yBAAC,qCAAwB,mCAAqB,mBACtD,gCACa,sBAChB,mCAAW,aAAmB,6FAC9B,mCAAW,SAAe;IAIlC;;;QAhB4B;;AAAQ,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;UCIzB;AACxB,YAAO,uDACI,qHACD;IAEZ;;;QARoB;;AAAQ,iDAAW,GAAG;;EAAC","file":"routing.ddc.js"}');
  // Exports:
  return {
    widgets__desktop__navbar_logo_desktop: navbar_logo_desktop,
    routing: routing,
    screens__portfolio: portfolio,
    screens__base: base,
    widgets__navbar: navbar,
    widgets__mobile__navbar_mobile: navbar_mobile,
    widgets__mobile__navbar_logo_mobile: navbar_logo_mobile,
    widgets__desktop__navbar_desktop: navbar_desktop,
    widgets__nav_drawer: nav_drawer,
    screens__home: home
  };
});

//# sourceMappingURL=routing.ddc.js.map
