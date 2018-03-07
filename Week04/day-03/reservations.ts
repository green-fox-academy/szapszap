'use strict';

interface Reservations {
    getDowBooking(): string;
    getCodeBooking(): string;
  };

let daysOfTheWeek: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

class Reservations {
    getDowBooking() {
        let randomIndex: number = Math.floor(Math.random() * daysOfTheWeek.length);
        return daysOfTheWeek[randomIndex];
    }
    getCodeBooking() {
        let text: string = "";
        let possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 8; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            if (text.length === 8) {
            return text;
        }
    }
   } 
} 
  let reservations = new Reservations;

  function logIt() {
    for (let i = 0; i < 8; i++) {
        console.log("Booking# " + reservations.getCodeBooking() + " for " + reservations.getDowBooking());
    }
}
logIt();
