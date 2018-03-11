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
                    $("#connectionForm").show();
                }
            } else {
                $("#connectionForm").show();
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
                let myTask = new Task(data.taskname,data.taskdate);
                alert("La tâche " +myTask.name + " a bien été enregistrée, un mail vous sera envoyé le " + myTask.date);


            }).fail(erreurCritique);
            return false;
        });

        $('#taskDisplay').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {

                for(let i=0; i < data.tabtask.length; ++i) {
                    let tr = $('<tr/>');
                    let td1 = $('<td />');
                    let td2 = $('<td />');
                    let currTask = new Task(data.tabtask[i]["NAME"],data.tabtask[i]["DATE"]);
                    td1.html(currTask.name);
                    td2.html(currTask.date);
                    tr.append(td1,td2);
                    $("#mes-taches").append(tr).show();

                }






            }).fail(erreurCritique);
            return false;
        });


    });





}) ();
