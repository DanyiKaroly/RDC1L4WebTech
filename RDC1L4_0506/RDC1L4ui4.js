$(document).ready(function(){

    $.getJSON('RDC1L4_orarend.json', function(data) {
        var kurzusok = [];
        // Kurzusok tömb feltöltése
        for (var i = 0; i < data["DK orarend"].kurzus.length; i++) {
          var kurzus = data["DK orarend"].kurzus[i];
          kurzusok.push(kurzus.kurzusnev);
        }
    
        $("#kurzuskereso").autocomplete({
          source: kurzusok,
          select: function(event, ui) {
            var kurzusnev = ui.item.value;

            for (var i = 0; i < data["DK orarend"].kurzus.length; i++) {
              var kurzus = data["DK orarend"].kurzus[i];
              if (kurzus.kurzusnev === kurzusnev) {
                var html = "<h2>" + kurzus.kurzusnev + "</h2>";
                html += "<p><b>Okatató: </b>" + kurzus.oktato + "</p>";
                html += "<p><b>Szak: </b>" + kurzus.szak + "</p>";
                html += "<p><b>Időpont:</b><br>";
                html += "<b>Nap:</b> " + kurzus.idopont.nap + "<br>";
                html += "<b>Tól:</b> " + kurzus.idopont.tol + "<br>";
                html += "<b>Ig:</b> " + kurzus.idopont.ig + "<br>";
                html += "<b>Helyszin: </b>" + kurzus.helyszin + "</p>";
                $("#talalatok").html(html);
                break;
              }
            }
          }
        });
      });

    $('#megjelenit').click(function() {
        $('#orarend').draggable();
        $.getJSON('RDC1L4_orarend.json', function(data) {
            $('#orarend').html('<h2>MISKOLCI EGYETEM</h2>');

            $('#orarend').append('<p><b>Cím:</b>'+ data.cim.code + ' ' + data.cim.city + ' ' + data.cim.street + '</p>');

            $('#orarend').append('<p><b>Telefonszám:</b><ul>');
                for (var i = 0; i < data["phone number"].length; i++) {
            $('#orarend').append('<li>' + data["phone number"][i].type + ': ' + data["phone number"][i].number + '</li>');
            }
            $('#orarend').append('</ul></p>');

            $("#orarend").append('<h2>MI Órarend 2024 tavasz');

            let elsoKurzus = data["DK orarend"].kurzus[0].kurzusnev;
            $('#orarend').append('<p><b>Kurzusnév:</b> ' + elsoKurzus + '</p>');
     
            let elsoOktato = data["DK orarend"].kurzus[0].oktato;
            $('#orarend').append("<p><b>Okatató: </b>"+ elsoOktato+"</p>");

            let szak = data["DK orarend"].kurzus[0].szak;
            $('#orarend').append("<p><b>Szak: </b>"+szak+"</p>")

            elsoKurzus = data["DK orarend"].kurzus[0];
            $('#orarend').append('<p><b>Időpont:</b></p>');
            $('#orarend').append('<b>Nap:</b> ' + elsoKurzus.idopont.nap + '<br>');
            $('#orarend').append('<b>Tól:</b> ' + elsoKurzus.idopont.tol + '<br>');
            $('#orarend').append('<b>Ig:</b> ' + elsoKurzus.idopont.ig + '<br>');

            let helyszin = data["DK orarend"].kurzus[0].helyszin ;
            $("#orarend").append('<p><b>Helyszin: </b>'+helyszin+"</p>");
        });
    });

    $("#box").show();

    $("#dial").dialog();
    $("div").draggable();
    $("p").draggable();
    $("h1").draggable();
    $("h2").draggable();
    $("h3").draggable();

    $("#adSzoveg").click(function(){
        $("#box").text("Mérnökinformatikus");
    });

    $("#nobody").click(function(){
        $("body").hide("shake", { times: 4 }, "slow");
    });

    $("#nofejlec").click(function(){
        $("h1").hide();
    });


    $("#nobutton").click(function(){
      $("button").hide("bounce", { times: 2}, "slow");
    });

    $("#nourlap").click(function(){
        $("form").hide();
    });
    $("#tobbfejlec").click(function(){
      $("body").prepend("<h1>JQuery feladat</h1>");
  });
});
