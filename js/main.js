(function()  {
    "use strict";

    /* récupération des données */

    $(document).ready(function() {
        let erreurCritique = function () {
            $("body").html("Une erreur s'est produite, réessayez")

        };

        $.ajax({
            url: "/json/est_connecte.php",
            method: "POST"
        }).done(function (data) {
            if (typeof (data.est_connecte) !== "undefined") {
                if (data.est_connecte) {
                    $("#deconnectionForm").show();
                    $("#taskCreation").show();
                    $("#taskDisplay").show();



                } else {
                    $("#connectionForm").fadeIn(1000);
                }
            } else {
                $("#connectionForm").fadeIn(1000);
            }
        }).fail(erreurCritique);
        $('#connectionForm').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                if (typeof (data.est_connecte) !== "undefined") {
                    if (data.est_connecte) {
                        window.location.reload(true);
                    } else {
                        alert(data.message);
                    }
                } else {
                    $("#connectionForm").show();
                }
            }).fail(erreurCritique);
            return false; //pour rester sur la page, plus agréable pour l'utilisateur
        });
        $('#deconnectionForm').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                if (typeof (data.est_connecte) !== "undefined") {
                    if (!data.est_connecte) {
                        window.location.reload(true);
                    }
                } else {
                    $("#connectionForm").show();
                }
            }).fail(erreurCritique);
            return false;
        });

        $('#taskCreation').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                if ( !data.taskname || !data.taskdate || !data.tasktime)
                    alert('Veuillez renseigner tous les champs');
                else {
                    let myTask = new Task(data.taskname,data.taskdate,data.tasktime);
                    alert("La tâche " +myTask.name + " a bien été enregistrée, un mail vous sera envoyé le " + myTask.date + ' à ' + myTask.time);
                }


            }).fail(erreurCritique);
            return false;
        });

        $('#taskDisplay').submit(function () {
            $("#taskHide").fadeIn(1000);

            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                let mes_taches = $("#mes-taches");
                mes_taches.empty();
                for(let i=0; i < data.tabtask.length; ++i) {

                    let tr = $('<tr/>');
                    let td1 = $('<td />');
                    let td2 = $('<td />');
                    let td3 = $('<td />');

                    let currTask = new Task(data.tabtask[i]["NAME"],data.tabtask[i]["DATE"],data.tabtask[i]["TIME"]);
                    td1.html(currTask.getname());
                    td2.html('le ' + currTask.getdate());
                    td3.html('à ' + currTask.gettime());

                    // let td4 = $('<td />');
                    // td4.css('width','50px');
                    // let input = $('<input />');
                    // input.attr("type", "checkbox");
                    // td4.append(input);

                    tr.append(td1,td2,td3);//,td4);
                    mes_taches.append(tr).fadeIn(1000);



                    mes_taches.append()



                }

                let css_darkgrey = {
                    //'background-image' : url('http://www.app-types.com/fr/app-type/219/widget-post-it'),
                    //'font-weight' : '',
                    'background-color' : '#999999',
                    'color' : 'black',
                    // 'border' : 'solid 1px black',
                    'height' : '100px' ,
                    'width' : '100px'
                };

                let css_yellow = {
                    //'background-image' : url('http://www.app-types.com/fr/app-type/219/widget-post-it'),
                    //'font-weight' : '',
                    'background-color' : '#ffffb3',
                    'color' : 'black',
                    'height' : '100px' ,
                    'width' : '100px'
                };
                let i = 0;
                $('tr').each(function () {
                    i++;
                    if (i % 2) {
                        $(this).css(css_darkgrey);
                    }
                    else {
                        $(this).css(css_yellow);

                    }
                });
                $('td').css('border : solid 1px black')






            }).fail(erreurCritique);
            return false;
        });


    });

    $("#taskHide").click(function(){

        $("#mes-taches").fadeOut(1000);
    });








}) ();
