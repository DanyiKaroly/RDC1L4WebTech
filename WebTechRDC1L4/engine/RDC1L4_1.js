$(document).ready(function () {

    var isOpen = false;
    var isOpen2 = false;
    var isOpen3 = false;
    var isOpen4 = false;

    var isrOpen = false;
    var isrOpen2 = false;
    var isrOpen3 = false;
    var isrOpen4 = false;


    $("#unity1").click(function () {
        if (!isOpen) {
            $("#unidiv").animate({ left: '400px', width: '400px', height:'500px', fontSize: '12pt' }, 1000);
            isOpen = true;
        } else {
            $("#unidiv").animate({ left: '-250px', width: '-250px', height:'0px', fontSize: '12pt' }, 1000);
            isOpen = false;
        }
    });

    $("#unreal1").click(function () {
        if (!isOpen2) {
            $("#unrealdiv").animate({ left: '400px', width: '400px', height:'500px', fontSize: '12pt'}, 1000);
            isOpen2 = true;
        } else {
            $("#unrealdiv").animate({ left: '-250px', width: '-250px', height:'0px', fontSize: '12pt' }, 1000);
            isOpen2 = false;
        }
    });

    $("#godot1").click(function () {
        if (!isOpen3) {
            $("#godotdiv").animate({ left: '400px', width: '400px', height:'500px', fontSize: '12pt' }, 1000);
            isOpen3 = true;
        } else {
            $("#godotdiv").animate({ left: '-250px', width: '-250px', height:'0px', fontSize: '12pt' }, 1000);
            isOpen3 = false;
        }
    });

    $("#game1").click(function () {
        if (!isOpen4) {
            $("#gamediv").animate({ left: '400px', width: '400px', height:'500px', fontSize: '12pt'}, 1000);
            isOpen4 = true;
        } else {
            $("#gamediv").animate({ left: '-250px', width: '-250px', height:'0px', fontSize: '12pt' }, 1000);
            isOpen4 = false;
        }
    });


    $("#unity2").click(function () {
        if (!isrOpen) {
            $("#unidiv2").animate({ left:'700px', width: '400px', height:'500px', fontSize: '12pt' }, 1000);
            isrOpen = true;
        } else {
            $("#unidiv2").animate({ left: '100%', width: '-250px', height:'0px', fontSize: '12pt' }, 1000);
            isrOpen = false;
        }
    });

    $("#unreal2").click(function () {
        if (!isrOpen2) {
            $("#unrealdiv2").animate({ left: '700px', width: '400px', height:'500px', fontSize: '12pt'}, 1000);
            isrOpen2 = true;
        } else {
            $("#unrealdiv2").animate({ left: '100%', width: '-250px', height:'0px', fontSize: '12pt' }, 1000);
            isrOpen2 = false;
        }
    });

    $("#godot2").click(function () {
        if (!isrOpen3) {
            $("#godotdiv2").animate({ left: '700px', width: '400px', height:'500px', fontSize: '12pt' }, 1000);
            isrOpen3 = true;
        } else {
            $("#godotdiv2").animate({ left: '100%', width: '-250px', height:'0px', fontSize: '12pt' }, 1000);
            isrOpen3 = false;
        }
    });

    $("#game2").click(function () {
        if (!isrOpen4) {
            $("#gamediv2").animate({ left: '700px', width: '400px', height:'500px', fontSize: '12pt'}, 1000);
            isrOpen4 = true;
        } else {
            $("#gamediv2").animate({ left: '100%', width: '-250px', height:'0px', fontSize: '12pt' }, 1000);
            isrOpen4 = false;
        }
    });



    var OldalisOpen = false;

    $("#oldalsav").click(function () {
        if (!OldalisOpen) {
            $('.sidePanel').toggleClass('show');
            $('.sidePanel2').toggleClass('show');
            OldalisOpen = true;
        } else {
            $('.sidePanel').removeClass('show');
            $('.sidePanel2').removeClass('show');
            OldalisOpen = false;
        }
    });

        $("#ub").click(function(){
          $("#ut").toggle(1000);
        });

        $("#unb").click(function(){
            $("#unt").toggle(1000);
          });
          
          $("#godb").click(function(){
            $("#godt").toggle(1000);
          });

        $("#gmb").click(function(){
            $("#gmt").toggle(1000);
        });
  

});
