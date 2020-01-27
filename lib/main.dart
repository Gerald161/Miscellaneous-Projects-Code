import 'package:flutter/material.dart';
import 'package:riddles/pages/riddle.dart';
import 'pages/home.dart';

void main() => runApp(MaterialApp(
  routes: {
    '/': (context)=> home(),
    '/riddle': (context)=> riddle(),

  },
));