class Task {
    constructor(name,date,time) {
        this.name = name;
        this.date = date;
        this.time = time;

    }

    getname() {
        if (!this.name){
            return alert('nom de tâche non renseigé !')
        }
        else return this.name;


    }

    getdate() {
        if (!this.date){
            return alert('date de la tâche non renseigée !')
        }
        else return this.date;


    }

    gettime() {
        if (!this.time){
            return alert('heure de la tâche non renseigée !')
        }
        else return this.time;


    }

}
// function sendMail(){
//     window.open('mailto:test@example.com');
// côté serveur avec cron
// }
