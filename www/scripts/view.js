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
        var button = new Button({width:200,height:100,label:"START"}).center().addTo(page1);

        let footer = v.page1.tabs = new Tabs({

            tabs:[new Button({
                width:50,
                height:50,
                corner:15,
                backgroundColor:purple,
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
                backgroundColor:purple,
                rollBackgroundColor:black,
                icon:pizzazz.makeIcon("settings","white").alp(.7),
                rollIcon:pizzazz.makeIcon("settings","white"),
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

        var textArea = new TextArea(100, 50).addTo(content).center();

        // var label = new Label({text:""}).pos(20,20).addTo(content);
        textArea.on("input", function() {
          if(textArea.text == "A" || textArea.text == "a")
          {
            textArea.removeFrom();
            A();
          }
          else if (textArea == "E" || textArea.text == "e")
          {
            textArea.removeFrom();
            E();
          }
          else if (textArea == "I" || textArea.text == "i")
          {
            textArea.removeFrom();
            I();
          }
          else if (textArea == "O" || textArea.text == "o")
          {
            textArea.removeFrom();
            O();
          }
           stage.update();
        });

        function A()
        {
        var top = new Rectangle({width:110,height:thickness,color:green}).centerReg(holder).mov(0,-90).cur().addPhysics({linear,angular,maskBits:2}).outline();//makes box fall
        var bot = new Rectangle({width:thickness,height:150,color:orange,corner:[20,20,20,20]}).centerReg(holder).rot(-35).cur().mov(40,-100).addPhysics({linear,angular}).outline();//makes box fall
        var mid = new Rectangle({width:thickness,height:150,color:red,corner:[20,20,20,20]}).centerReg(holder).rot(35).cur().mov(-40,-100).addPhysics({linear,angular,maskBits:4}).outline();//makes box fall

        // join(onj1,obj2,point1,point2,minAngle,maxAngle,type);
        // physics.join(top , mid, new Point(top.x + top.width/2, top.y),null,0,45,"revolute" );//joins bars to make a Z
        // physics.join(bot , mid, new Point(bot.x - bot.width/2, bot.y),null,0,45,"revolute" );
        physics.join(mid, bot, mid.localToGlobal(0, 0), null, 0, 45, "weld");
        physics.join(top, bot, top.localToGlobal(top.x ,top.y), null, 0, 45, "weld");

        // physics.join(mid, top, new Point(mid.x + mid.width/2, mid.y), null, 0, 45, "revolute");
      }

      //function for E
      // E();
      function E ()
      {
        var top = new Rectangle({width:110,height:thickness,color:green,corner:[20,20,20,20]}).centerReg(holder).mov(0,-210).cur().addPhysics({linear,angular,maskBits:2}).outline();//makes box fall
        var bot = new Rectangle({width:110,height:thickness,color:orange,corner:[20,20,20,20]}).centerReg(holder).cur().mov(0,-100).addPhysics({linear,angular}).outline();//makes box fall
        var mid = new Rectangle({width:110,height:thickness,color:red,corner:[20,20,20,20]}).centerReg(holder).cur().mov(0,10).addPhysics({linear,angular,maskBits:4}).outline();//makes box fall
        var side = new Rectangle({width:thickness,height:250,color:"blue",corner:[20,20,20,20]}).centerReg(holder).cur().mov(-60,-100).addPhysics({linear,angular,maskBits:4}).outline();//makes box fall


        physics.join(mid, side, mid.localToGlobal(0, 0), null, 0, 45, "weld");
        physics.join(top, side, top.localToGlobal(top.x ,top.y), null, 0, 45, "weld");
        physics.join(bot, side, bot.localToGlobal(top.x ,top.y), null, 0, 45, "weld");



      }
      // I();
      function I ()
      {

        var mid = new Rectangle({width:thickness,height:150,color:red,corner:[20,20,20,20]}).centerReg(holder).cur().mov(-40,-100).addPhysics({linear,angular,maskBits:4}).outline();//makes box fall
        var top = new Rectangle({width:150,height:thickness,color:green,corner:[20,20,20,20]}).centerReg(holder).mov(-40,-160).cur().addPhysics({linear,angular,maskBits:2}).outline();//makes box fall
        var bot = new Rectangle({width:150,height:thickness,color:orange,corner:[20,20,20,20]}).centerReg(holder).cur().mov(-40,-40).addPhysics({linear,angular}).outline();//makes box fall

        physics.join(mid, bot, mid.localToGlobal(0, 0), null, 0, 45, "weld");
        physics.join(top, bot, top.localToGlobal(top.x ,top.y), null, 0, 45, "weld");


      }
      // O();
      function O ()
      {
        var top = new Circle({radius:100, color:blue, borderColor:green, borderWidth:30}).centerReg(holder).mov(0,-90).cur().addPhysics({linear,angular,maskBits:2}).outline();//makes box fall
        // var bot = new Rectangle({width:thickness,height:150,color:orange,corner:[20,20,20,20]}).centerReg(holder).rot(-35).cur().mov(40,-100).addPhysics({linear,angular}).outline();//makes box fall
        // var mid = new Rectangle({width:thickness,height:150,color:red,corner:[20,20,20,20]}).centerReg(holder).rot(35).cur().mov(-40,-100).addPhysics({linear,angular,maskBits:4}).outline();//makes box fall


        // physics.join(mid, bot, mid.localToGlobal(0, 0), null, 0, 45, "weld");
        // physics.join(top, bot, top.localToGlobal(top.x ,top.y), null, 0, 45, "weld");


      }

      function U ()
      {
        var top = new Rectangle({width:110,height:thickness,color:green}).centerReg(holder).mov(0,-90).cur().addPhysics({linear,angular,maskBits:2}).outline();//makes box fall
        var bot = new Rectangle({width:thickness,height:150,color:orange,corner:[20,20,20,20]}).centerReg(holder).rot(-35).cur().mov(40,-100).addPhysics({linear,angular}).outline();//makes box fall
        var mid = new Rectangle({width:thickness,height:150,color:red,corner:[20,20,20,20]}).centerReg(holder).rot(35).cur().mov(-40,-100).addPhysics({linear,angular,maskBits:4}).outline();//makes box fall


        physics.join(mid, bot, mid.localToGlobal(0, 0), null, 0, 45, "weld");
        physics.join(top, bot, top.localToGlobal(top.x ,top.y), null, 0, 45, "weld");


      }
//         physics.remove(physics.borderRight);
// new Rectangle(10, stageH/2 - 50).centerReg().pos(0,0,true).addPhysics(false);
// new Rectangle(10, stageH/2 - 50).centerReg().pos(0,0,true,true).addPhysics(false);

// setInterval(function(){

// },1000);
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
