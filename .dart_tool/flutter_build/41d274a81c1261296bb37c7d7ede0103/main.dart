import 'dart:ui' as ui;

import "file:///Users/joe/development/flutter_website/lib/main.dart" as entrypoint;

Future<void> main() async {
  if (true) {
    await ui.webOnlyInitializePlatform();
  }
  entrypoint.main();
}
