import { FormControl } from '@angular/forms';

export class Meet {
    minDate: Date;
    date: FormControl;
    hours: string;
    place: string;

    constructor(min: number) {
        this.minDate = new Date();
        this.minDate.setDate((new Date().getDate() + min));
        this.date = new FormControl(this.minDate);
        this.hoursReset();
    }

    public checkHours() {
        if (/\d\d?:\d\d?/.test(this.hours)) {
            const [hours, minutes] = this.hours.split(':').map(Number);
            if (hours >= 24 || minutes >= 60) {
                this.hoursReset();
            } else {
                this.date.value.setHours(hours, minutes);
            }
        } else { this.hoursReset(); }
    }

    public setMin(date: number) {
        this.minDate.setDate(date);
        this.date.setValue(this.date.value);
    }

    private hoursReset() {
        this.hours = this.minDate.getHours() + ':' + this.minDate.getMinutes();
    }
}
