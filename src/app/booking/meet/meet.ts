import { FormControl } from '@angular/forms';
import { SimpleMeet } from '../Order';

export class Meet {
    minDate: Date;
    date: FormControl;
    hours: string;
    place: string;

    constructor(meet: SimpleMeet) {
        this.minDate = meet.date;
        this.date = new FormControl(meet.date);
        this.hoursReset();
        this.place = meet.place;
    }

    public getSimpleMeet(): SimpleMeet {
        return {
            date: this.date.value,
            place: this.place
        };
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
