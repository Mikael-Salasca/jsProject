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
            return false;
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



            }).fail(erreurCritique);
            return false;
        });


    });





}) ();
