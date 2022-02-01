import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    address = 'Av. Paulista, S/N - São Paulo/SP - Cep: 00100-000';
    email = 'atendimento@wcommerce.com';
    phone = ['(XX) XXXX-XXXX', '(XX) XXXXX-XXXX'];
    hours = 'Seg-Sex 9:00h - 20:00h';

    get primaryPhone(): string|null {
        return this.phone.length > 0 ? this.phone[0] : null;
    }

    constructor() { }
}
