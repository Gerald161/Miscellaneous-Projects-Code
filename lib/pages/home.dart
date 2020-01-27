import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:riddles/pages/class.dart';

class home extends StatefulWidget {
  @override
  _homeState createState() => _homeState();
}

class _homeState extends State<home> {

  List<riddles> question = [
    riddles(title: "Mind Boggling",ques:"If Frank and Sam total their ages,the answer is 49.Frank is twice as old as Sam was when Frank was as old as Sam is now. How old are Frank and Sam?",ans: "Frank is 28 and Sam is 21", pic: "1.jpg",
        difficulty: '1'),
    riddles(title: "Space Travel",ques:"Who was the first man to step on the moon?",ans: "Niel Armstrong sama", pic: "2.jpg",
        difficulty: '1'),
    riddles(title: "Love and Honour",ques:"What is hot as fire and yet cold as ice",ans: "Todoroki", pic: "3.jpg",
        difficulty: '2'),
    riddles(title: "Boondock Trouble",ques:"Who was the stone the builder refused",ans: "Huey", pic: "4.jpg",
        difficulty: '2'),
    riddles(title: "Lonely god",ques:"Hello Yato my old friend",ans: "Yuki and Hiyori", pic: "5.jpg",
        difficulty: '3'),
    riddles(title: "Memories made in the coldest winter",ques:"Who played Zelda's lullaby",ans: "Link", pic: "6.jpg",
        difficulty: '3'),
    riddles(title: "Kawaii Girl",ques:"Who made this heavenly art",ans: "unknown", pic: "7.jpg",
        difficulty: '4'),
    riddles(title: "Winter Paradise",ques:"Do we need her to come to life",ans: "definitely", pic: "8.jpg",
        difficulty: '4')
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Test Stuff"),
        centerTitle: true,
        backgroundColor: Colors.red[400],
      ),
      body: ListView.builder(
        itemBuilder: (context,index){
          return Container(
            child: Card(
              child: ListTile(
                onTap: (){
                  Navigator.pushNamed(context, '/riddle', arguments: {
                    'title': question[index].title,
                    'question': question[index].ques,
                    'answer': question[index].ans,
                  });
                },
                title: Text("${question[index].title}",
                style: TextStyle(
                  fontSize: 20.0,
                )),
                subtitle: Text("Difficulty - ${question[index].difficulty}"),
                leading: CircleAvatar(
                  backgroundImage: AssetImage('assets/${question[index].pic}'),
                  radius: 30.0,
                ),
              ),
            ),
          );
        },
        itemCount: question.length,
      ),
    );
  }
}
