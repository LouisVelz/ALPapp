import 'package:ALPapp/services/auth_service.dart';
import 'package:ALPapp/services/book_service.dart';
import 'package:firebase_core/firebase_core.dart';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'package:ALPapp/theme/standard_theme.dart';
import 'package:ALPapp/pages/show.dart';
import 'package:ALPapp/pages/introscreen.dart';

// void main() {
//   runApp(App());
// }

// need to do: https://medium.com/firebase-tips-tricks/how-to-use-firebase-realtime-database-with-flutter-ebd98aba2c91

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<AuthService>(
          create: (_) => AuthService(),
        ),
        Provider<BookService>(
          create: (_) => BookService(),
        )
      ],
      child: MaterialApp(
          title: 'ALPapp',
          theme: StandardThemeData.themeData(),
          home: IntroScreen(),
          // home: IndexPage(),
          routes: {
            '/show': (context) => ShowPage(),
          }),
    );
  }
}
