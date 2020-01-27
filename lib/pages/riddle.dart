import 'package:flutter/material.dart';

class riddle extends StatefulWidget {
  @override
  _riddleState createState() => _riddleState();
}

class _riddleState extends State<riddle> {
  Map data = {};
  @override
  Widget build(BuildContext context) {
   data = ModalRoute.of(context).settings.arguments;
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text(data['title']),
          centerTitle: true,
        ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0),
        child: Text(
          data['question'],
          style: TextStyle(
            fontSize: 20.0,
          ),
        ),
      ),
        floatingActionButton: FloatingActionButton(onPressed:() {
          setState(() {
            data['question'] = data['answer'];
          });
        },
          child: Text("Ans"),
        ),
        backgroundColor: Colors.grey[200],
      ),
    );
  }
}
