import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { CurrencyService } from '../../../../shared/services/currency.service';

interface Currency {
    name: string;
    url: string;
    code: string;
    symbol: string;
}

@Component({
    selector: 'app-header-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

    cookieValue?: string;
    flagvalue?: any;
    countryName?: any;
    valueset?: string;

    languages = [
        {name: 'English', image: 'language-1', lang: 'en'},
        {name: 'Português',  image: 'language-2', lang: 'pt-br'}
    ];

    currencies = [
        {name: 'HEADER.CURRENCY.EUR',           url: '', code: 'EUR', symbol: '€'},
        //{name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£'},
        {name: 'HEADER.CURRENCY.USD',      url: '', code: 'USD', symbol: '$'},
        {name: 'HEADER.CURRENCY.BRL',      url: '', code: 'BRL', symbol: 'R$'},
        //{name: '₽ Russian Ruble',  url: '', code: 'RUB', symbol: '₽'}
    ];

    constructor(
        public currencyService: CurrencyService,
        public languageService: LanguageService,
        public translate: TranslateService,
        public _cookiesService: CookieService
    ) { }


    ngOnInit(): void {
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.languages.filter(x => x.lang === this.cookieValue);
        this.countryName = val.map(element => element.name);
        if (val.length === 0) {
        if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.jpg'; }
        } else {
        this.flagvalue = val.map(element => element.image);
        }
    }

    setCurrency(currency: Currency): void {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }
    setLanguage(text: string, lang: string, flag: string) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
      }
}
