$(document).ready(function() {
    $("#K1").click(function() {
        $("ul li:first").hide(); // Az első két lista elemet rejtjük el
        $("ul li:first-child").hide(); // Az első két lista elemet rejtjük el
        $("[href]").hide(); 
    });

    $("#K2").click(function() {
        $("#K2").hide(); // A K2 gombot elrejtjük
        $("ul li:first").hide(); // Az első két lista elemet rejtjük el
        $("ul li:first-child").hide(); // Az első két lista elemet rejtjük el
        $("[href]").hide();  
    });

    $("#K3").click(function() {
        $("#fejlec").hide();
        $("ul li:last").hide(); // Az első két lista elemet rejtjük el
        $("ul li:last-child").hide(); // Az első két lista elemet rejtjük el
        $("a").hide(); 
    });

    $("#K4").click(function() {
        $("ul li:first").hide(); // Az első két lista elemet rejtjük el
        $("ul li:first-child").hide(); // Az első két lista elemet rejtjük el

        $("[href]").hide(); 
    });

    $("#K5").click(function() {
        $("ul li:first").hide(); // Az első két lista elemet rejtjük el
        $("ul li:first-child").hide(); // Az első két lista elemet rejtjük el
        $("[href]").hide(); 
        $("table tr:nth-child(even)").hide(); // A táblázat páros sorait rejtjük el
    });
});
