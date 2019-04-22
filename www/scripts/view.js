var app = function(app) {  // module pattern
    app.makeView = function(m, stage) {
        var stageW = stage.width;
        var stageH = stage.height;
        const v = {};

        STYLE = {
            type:{
                Tabs:{width:120,spacing:20,currentSelected:false}
            }
        }

        const manager = v.manager = new Manager();

        const page1 = v.page1 = new Container(stageW, stageH);
        let header = new Container().addTo(page1);
        v.page1.logo = new Label(m.title).addTo(header);
        let content = new Container(500, 500).addTo(page1);
        // v.dial = new Dial().sca(2).center(content);
        // v.dial.currentValue = m.data[0];
        // var button = new Button({width:200,height:100,label:"START"}).center().addTo(page1);
          var label = new Label({text:"Enter a vowel "}).addTo(content).center().mov(0,-50);

        let footer = v.page1.tabs = new Tabs({

            tabs:[new Button({
              width:70,
            height:70,
            corner:35,
                backgroundColor:red,
                rollBackgroundColor:black,
                icon:pizzazz.makeIcon("home","white").alp(.7),
              rollIcon:pizzazz.makeIcon("home","white"),
                label:"",
                shadowBlur:-1
            }),
            new Button({
              width:70,
            height:70,
            corner:35,
                backgroundColor:red,
                rollBackgroundColor:black,
                icon:pizzazz.makeIcon("play","white").alp(.7),
              rollIcon:pizzazz.makeIcon("play","white"),
                label:"",
                shadowBlur:-1
            })]

        }).addTo(page1);

        // footer.buttons[0].setIcon( "icon" , pizzazz.makeIcon("settings","white"));

        manager.add(new Layout(page1, [
            {object:header,maxWidth:90, marginTop:5},
            {object:content, marginTop:2, backgroundColor:green},
            {object:footer,maxWidth:90, marginTop:5}
        ], 2, "teal", true, null, stage));

        const page2 = v.page2 = new Container(stageW, stageH);
        header = new Container().addTo(page2);
        v.page2.logo = new Label(m.title).addTo(header);
        content = new Container(500, 500).addTo(page2);
        // v.slider = new Slider().sca(1.5).center(content);
        // v.slider.currentValue = m.data[1];
        var physics = new Physics(0);
        physics.drag();
        // physics.debug();
        var holder = v.holder = new Container(stageW,stageH).addTo();
        // var marble = new Circle(10, "red").center(content).addPhysics();
        // var rec = new Rectangle(100, 100, red).center(content).addPhysics(false);
        var thickness = 30;
        var linear = 5;
        var angular = 5;

        //function for A
        // A();
        text();

        function text(){
        var label = new Label({text:"Enter a vowel"}).addTo(content).center().mov(0,-50);

        var textArea = new TextArea(100, 50).addTo(content).center();

        textArea.on("input", function() {
          if(textArea.text == "A" || textArea.text == "a")
          {
            // textArea.removeFrom();
            label.removeFrom();
            A();

            // var button = new Button(200,50,"CLEAR").addTo(content).center().mov(0,50);
            //
            // button.on("click", function(){
            //   // text();
            // // var c = 1;
            //
            // });
          }
          else if (textArea == "E" || textArea.text == "e")
          {
            // textArea.removeFrom();
            label.removeFrom();
            E();
            var button = new Button(200,50,"CLEAR").addTo(content).center().mov(0,50);

            // button.on("click", function(){
            //   // text();
            // // var c = 1;
            //
            // });
          }
          else if (textArea == "I" || textArea.text == "i")
          {
            textArea.removeFrom();
            label.removeFrom();
            I();
            var button = new Button(200,50,"CLEAR").addTo(content).center().mov(0,50);

            button.on("click", function(){
              // text();
            // var c = 1;

            });
          }
          else if (textArea == "O" || textArea.text == "o")
          {
            // textArea.removeFrom();
            label.removeFrom();
            O();
            // var button = new Button(200,50,"CLEAR").addTo(content).center().mov(0,50);
            //
            // button.on("click", function(){
            //   // text();
            // // var c = 1;
            //
            // });
          }
          else if (textArea == "U" || textArea.text == "u")
          {
            // textArea.removeFrom();
            label.removeFrom();
            U();
            // var button = new Button(200,50,"CLEAR").addTo(content).center().mov(0,50);
            //
            // button.on("click", function(){
            //   // text();
            // // var c = 1;
            //
            // });
          }
          else {
            label.removeFrom();
            var wrong = new Label({text:"Wrong Please Enter a vowel"}).addTo(content).center().mov(0,-80);
          }
           stage.update();
        });

      }

        function A()
        {
        var top = new Rectangle({width:110,height:thickness,color:green}).centerReg(holder).mov(0,-90).cur().addPhysics({linear,angular,maskBits:2});//makes box fall
        var bot = new Rectangle({width:thickness,height:150,color:orange,corner:[20,20,20,20]}).centerReg(holder).rot(-35).cur().mov(40,-100).addPhysics({linear,angular});//makes box fall
        var mid = new Rectangle({width:thickness,height:150,color:red,corner:[20,20,20,20]}).centerReg(holder).rot(35).cur().mov(-40,-100).addPhysics({linear,angular,maskBits:4});//makes box fall


        let j =  physics.join(mid, bot, new Point(mid.x + mid.width/2, mid.y), 0, 45, "weld");
        let i =  physics.join(top, bot, new Point(top.x + top.width/2, top.y), null, 0, 45, "weld");

          interval(50, function(){
            let circle =   new Circle({min:10,max:30},[purple,pink,orange]).loc(100,100).addPhysics({restitution:1,categoryBits:2|4}).impulse(100,100).addTo(content);
            circle.contact(function(obj, body){ ////contact is like a hit tests

             if(body == top.body || body == bot.body || body == mid.body){
                obj.color =  circle.color;
                return;
              }//end of if

            });// end of contact

          },10);//end of interval


        }// end of function

      //function for E
      // E();
      function E ()
      {
        var top = new Rectangle({width:110,height:thickness,color:green,corner:[20,20,20,20]}).centerReg(holder).mov(0,-210).cur().addPhysics({linear,angular,maskBits:2});//makes box fall
        var bot = new Rectangle({width:110,height:thickness,color:orange,corner:[20,20,20,20]}).centerReg(holder).cur().mov(0,-100).addPhysics({linear,angular});//makes box fall
        var mid = new Rectangle({width:110,height:thickness,color:red,corner:[20,20,20,20]}).centerReg(holder).cur().mov(0,10).addPhysics({linear,angular,maskBits:4});//makes box fall
        var side = new Rectangle({width:thickness,height:250,color:"blue",corner:[20,20,20,20]}).centerReg(holder).cur().mov(-60,-100).addPhysics({linear,angular,maskBits:4});//makes box fall


        physics.join(mid, side, mid.localToGlobal(0, 0), null, 0, 45, "weld");
        physics.join(top, side, top.localToGlobal(top.x ,top.y), null, 0, 45, "weld");
        physics.join(bot, side, bot.localToGlobal(top.x ,top.y), null, 0, 45, "weld");

        interval(50, function(){
        var circle =   new Circle({min:10,max:30},[purple,pink,orange,yellow,green]).loc(100,100).addPhysics({restitution:1,categoryBits:2|4}).impulse(100,100);
        circle.contact(function(obj, body){ ////contact is like a hit tests
           //  if(body == rect.body)compares physics bodies //can also use onj ==  rect
           if(body == top.body || body == bot.body || body == mid.body || body == side.body)
             {
              obj.color =  circle.color;
             }

          });
          // circle.removeFrom();
  },100);


      }
      // I();
      function I ()
      {

        var mid = new Rectangle({width:thickness,height:150,color:red,corner:[20,20,20,20]}).centerReg(holder).cur().mov(-40,-100).addPhysics({linear,angular,maskBits:4});//makes box fall
        var top = new Rectangle({width:150,height:thickness,color:green,corner:[20,20,20,20]}).centerReg(holder).mov(-40,-160).cur().addPhysics({linear,angular,maskBits:2});//makes box fall
        var bot = new Rectangle({width:150,height:thickness,color:orange,corner:[20,20,20,20]}).centerReg(holder).cur().mov(-40,-40).addPhysics({linear,angular});//makes box fall

        physics.join(mid, bot, mid.localToGlobal(0, 0), null, 0, 45, "weld");
        physics.join(top, bot, top.localToGlobal(top.x ,top.y), null, 0, 45, "weld");

        interval(50, function(){
        var circle =   new Circle({min:10,max:30},[purple,pink,orange,red,blue]).loc(100,100).addPhysics({restitution:1,categoryBits:2|4}).impulse(100,100);
        circle.contact(function(obj, body){ ////contact is like a hit tests
           //  if(body == rect.body)compares physics bodies //can also use onj ==  rect
           if(body == top.body || body == bot.body || body == mid.body)
             {
              obj.color =  circle.color;
             }

          });

  },100);
      }
      // O();
      function O ()
      {
        var top = new Circle({radius:100, color:blue, borderColor:green, borderWidth:30}).centerReg(holder).mov(0,-90).cur().addPhysics({linear,angular,maskBits:2});//makes box fall

        interval(50, function(){
        var circle =   new Circle({min:10,max:30},[purple,pink,orange,green]).loc(100,100).addPhysics({restitution:1,categoryBits:2|4}).impulse(100,100);
        circle.contact(function(obj, body){ ////contact is like a hit tests
           //  if(body == rect.body)compares physics bodies //can also use onj ==  rect
           if(body == top.body)
             {
              obj.borderColor =  circle.color;
             }

          });
          // circle.removeFrom();
  },100);
      }

      function U ()
      {

        var bot = new Rectangle({width:thickness,height:150,color:orange,corner:[20,20,20,20]}).centerReg(holder).cur().mov(40,-100).addPhysics({linear,angular});//makes box fall
        var mid = new Rectangle({width:thickness,height:150,color:red,corner:[20,20,20,20]}).centerReg(holder).cur().mov(-40,-100).addPhysics({linear,angular,maskBits:4});//makes box fall
        var top = new Rectangle({width:110,height:thickness,color:green,corner:[20,20,20,20]}).centerReg(holder).mov(0,-40).cur().addPhysics({linear,angular,maskBits:2});//makes box fall


        physics.join(mid, bot, mid.localToGlobal(0, 0), null, 0, 45, "weld");
        physics.join(top, bot, top.localToGlobal(top.x ,top.y), null, 0, 45, "weld");

        interval(50, function(){
        var circle =   new Circle({min:10,max:30},[purple,pink,orange,green]).loc(100,100).addPhysics({restitution:1,categoryBits:2|4}).impulse(100,100);
        circle.contact(function(obj, body){ ////contact is like a hit tests
           //  if(body == rect.body)compares physics bodies //can also use onj ==  rect
           if(body == top.body || body == mid.body || body == bot.body)
             {
              obj.borderColor =  circle.color;
             }

          });
          // circle.removeFrom();
  },100);
      }

physics.drag();//lets you drag it around

        footer = v.page2.tabs =v.page1.tabs.clone().addTo(page2);
        manager.add(new Layout(page2, [
            {object:header,maxWidth:90, marginTop:5},
            {object:content, marginTop:2, backgroundColor:blue},
            {object:footer,maxWidth:90, marginTop:5}
        ], 2, "teal", true, null, stage));

        manager.add(v.pages = new Pages([
            {page:page1, swipe:[null, null, page2, page2]},
            {page:page2, swipe:[null, null, page1, page1]}
        ], "slide", 500).addTo());

        return v;

    }
    return app; // module pattern
}(app||{}); // module pattern
