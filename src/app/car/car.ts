export interface Car {
    id: string;
    name: string;
    image: string;
    pricePerDay: number;
    group: Group;
    deposit: number;
    gearbox: Gearbox;
    restEquipment?: Array<EquipmentName>;
}

export type Group = 'A+' | 'B' | 'C' | 'C+' | 'D' | 'D+' | 'E'| 'Cross';
export type Gearbox = 'Automatyczna' | 'Manualna';
// tslint:disable:quotemark
export type EquipmentName = "Klimatyzacja" | "ABS" | "Wspomaganie_Kierownicy" |
            "Benzyna" | "Diesel" | "Benzyna_lub_Diesel" | "Centralny_Zamek" |
            "Poduszki_Powietrzne" | "4_osobowy" | "5_osobowy" | "5_drzwiowy" | "4_drzwiowy";

export type EquipmentIcon = {
    [key in EquipmentName | Gearbox]: string;
};

export class EquipmentIcons implements EquipmentIcon {
    Automatyczna = 'https://carnet.pl/assets/Icons/manual-icon.png';
    Manualna = this.Automatyczna;
    Klimatyzacja = 'https://carnet.pl/assets/Uploads/klimatyzacja.png';
    ABS = 'https://carnet.pl/assets/Uploads/abs.png';
    Wspomaganie_Kierownicy = 'https://carnet.pl/assets/Uploads/wspomaganie.png';
    Benzyna = 'https://carnet.pl/assets/Icons/oil-icon.png';
    Diesel = this.Benzyna;
    Benzyna_lub_Diesel = this.Benzyna;
    Centralny_Zamek = 'https://carnet.pl/assets/Uploads/centralny-zamek.png';
    Poduszki_Powietrzne = 'https://carnet.pl/assets/Uploads/airbag.png';
    '4_osobowy' = 'https://carnet.pl/assets/Icons/capacity-icon.png';
    '5_osobowy' = this['4_osobowy'];
    '5_drzwiowy' = 'https://carnet.pl/assets/Icons/doors-icon.png';
    '4_drzwiowy' = this['5_drzwiowy'];
}

