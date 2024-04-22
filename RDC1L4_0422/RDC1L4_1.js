$(document).ready(function(){

    $("#start").click(function()
    {
        $("div").animate({left:'300px', width:'300px',fontSize:'12pt'},1000);
        $("div").animate({top:'100px', height:'+=50px',fontSize:'30pt'},2000);
        $("div").animate({left:'0px', opacity:'0.4'},1000);
        $("div").animate({top:'0px', width:'150px',height:'50px',opacity:'1',fontSize:'12pt'},1000,function(){
            alert('VÉGE');
        });

    });
    
$("#eltuntet").click(function(){
    $("#p1").hide(2000);
    $("#p2").hide(2000,function(){

    });

})

    $("#osszecsukKinyit").click(function(){
        $("#box").slideToggle();
        $("#box").slideToggle();
        $("div").animate({left:'300px', width:'300px'},1000);

    });


    $("#resetAnimation").click(function(){
        $("#box").stop();
        $("#box").css({
            left: '300px',
            top: '100px',
            width: '300px',
            height: 'auto',
            fontSize: '12pt',
            opacity: '1'
        });
    });





    $("#elMeg").click(function(){
        $("#p1").hide(2000);
        $("#p2").hide(2000)
            $("#p3").hide(2000,function(){
                alert('Bekezdések elrejtése');

            });




    });
});