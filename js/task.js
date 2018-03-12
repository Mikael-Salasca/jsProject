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
        return this.name;
    }

    getdate() {
        return this.name;
    }

}
// function sendMail(){
    //     window.open('mailto:test@example.com');
    // je ne peux pas le faire, c'est côté serveur avec cron
    // }
