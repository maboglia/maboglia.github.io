(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<corsi></corsi>\n<app-studenti></app-studenti>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'its2019';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _corsi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corsi.component */ "./src/app/corsi.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _studenti_studenti_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./studenti/studenti.component */ "./src/app/studenti/studenti.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _corsi_component__WEBPACK_IMPORTED_MODULE_1__["CorsiComponent"],
                _studenti_studenti_component__WEBPACK_IMPORTED_MODULE_7__["StudentiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/corsi.component.ts":
/*!************************************!*\
  !*** ./src/app/corsi.component.ts ***!
  \************************************/
/*! exports provided: CorsiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsiComponent", function() { return CorsiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CorsiComponent = /** @class */ (function () {
    function CorsiComponent() {
    }
    CorsiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'corsi',
            template: '<h2>Corsi</h2>'
        })
    ], CorsiComponent);
    return CorsiComponent;
}());



/***/ }),

/***/ "./src/app/elenco-studenti.ts":
/*!************************************!*\
  !*** ./src/app/elenco-studenti.ts ***!
  \************************************/
/*! exports provided: STUDENTI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDENTI", function() { return STUDENTI; });
var STUDENTI = [
    {
        nome: 'Alessio',
        cognome: 'Bollo',
        jobTitle: 'studente',
        anno: 1996,
        titolo: 'diploma perito elettronico',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 70
            },
            {
                linguaggio: 'Java',
                voto: 80
            },
            {
                linguaggio: 'HTML + CSS',
                voto: 100
            }
        ],
        foto: 'mia_img.jpg',
        elevator: 'weweeeeeeeeeeeee, cocco bello coccoooooooooooooooo',
        portfolio: [
            {
                titolo: 'http://axel9674.altervista.org/Infertilita%20di%20coppia/index.html',
                img: 'CMR.jpg',
                descrizione: 'sito Infertilità di coppia - CMR Torino'
            },
            {
                titolo: 'http://axel9674.altervista.org/the%20who/',
                img: 'the_who.jpg',
                descrizione: 'sito The Who'
            },
            {
                titolo: 'http://axel9674.altervista.org/ZZ%20Top/',
                img: 'zz_top.jpg',
                descrizione: 'sito ZZ Top'
            }
        ]
    },
    {
        nome: 'Carlo',
        cognome: 'Bussi',
        jobTitle: 'Fullstack Developer',
        anno: 1995,
        titolo: 'Laurea',
        skill: [
            {
                Linguaggio: 'PHP',
                voto: 90
            },
            {
                Linguaggio: 'JAVA',
                voto: 99
            },
            {
                Linguaggio: 'UNITY',
                voto: 110
            }
        ],
        foto: 'mia_img.jpg',
        elevator: 'lorem ipsum..',
        portfolio: [
            {
                Titolo: 'Laurea',
                img: 'img',
                descrizione: 'bla bla bla'
            },
            {
                Titolo: 'Laurea',
                img: 'img',
                descrizione: 'bla bla bla'
            },
            {
                Titolo: 'Laurea',
                img: 'img',
                descrizione: 'bla bla bla'
            }
        ]
    },
    {
        nome: 'Alessandro Erik',
        cognome: 'Camposano',
        jobTitle: 'full stack web dev',
        anno: 1997,
        titolo: 'diploma',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 90
            },
            {
                linguaggio: 'JAVA',
                voto: 100
            },
            {
                linguaggio: 'KOTLIN',
                voto: 80
            }
        ],
        foto: 'camposano.jpg',
        elevator: 'lorem...',
        portfolio: [
            {
                titolo: 'sito web 1',
                img: 'foto_lavoro1.jpg',
                descrizione: 'lorem1'
            },
            {
                titolo: 'sito web 2',
                img: 'foto_lavoro2.jpg',
                descrizione: 'lorem2'
            },
            {
                titolo: 'sito web 3',
                img: 'foto_lavoro3.jpg',
                descrizione: 'lorem3'
            }
        ]
    },
    {
        nome: 'Sergiu',
        cognome: 'Caragia',
        jobTitle: 'FrontEnd Developer',
        titolo: 'diploma',
        skill: [
            {
                linguaggio: 'php',
                voto: 83
            },
            {
                linguaggio: 'java',
                voto: 90
            }
        ],
        anno: 1997,
        foto: 'mia_img.jpg',
        elevator: 'lorem ispum....',
        portfolio: [
            {
                titolo: 'sito web1',
                img: 'foto_lavoro1.jpg',
                descrizione: 'bla bla1'
            },
            {
                titolo: 'sito web2',
                img: 'foto_lavoro2.jpg',
                descrizione: 'bla bla2'
            },
            {
                titolo: 'sito web3',
                img: 'foto_lavoro3.jpg',
                descrizione: 'bla bla3'
            }
        ]
    },
    {
        nome: 'Leonardo',
        cognome: 'Cesati',
        jobTitle: 'designer , programmatore e fotografo ',
        anno: 1996,
        titolo: 'diploma',
        skill: [
            {
                linguaggio: 'PHP',
                Voto: 80
            },
            {
                linguaggio: 'Gragica',
                Voto: 90
            },
            {
                linguaggio: 'Fotografia',
                Voto: 90
            },
            {
                linguaggio: 'Organizazione e Puntualità ',
                Voto: 80
            },
            {
                linguaggio: 'Collaborativo',
                Voto: 80
            }
        ],
        foto: 'mia_img.jpg',
        elevator: 'lorem is....',
        portfolio: [
            {
                titolo: 'sito web 1 ',
                img: 'foto_lavoro1.jpg',
                descrizione: ' L\'amore per la grafica mi ha portato ad esprimere il meglio della mia creatività per concretizzarlo in opere di vario genere .'
            },
            {
                titolo: 'sito web 2 ',
                img: 'foto_lavoro2.jpg',
                descrizione: ' Da poco affacciato dal \'balcone\' della programmazione ma con ottimi risultati per soddisfare al meglio le esigneze del cliente .'
            },
            {
                titolo: 'sito web 3 ',
                img: 'foto_lavoro3.jpg',
                descrizione: ' Un altro ambito creativo in cui mi affermo dando la firma ad ogni scatto rendendolo singolare e raccontare storie che rimarrano per sempre impresse su pellicola. '
            }
        ]
    },
    {
        nome: 'Matteo',
        cognome: 'Graneri',
        jobTitle: 'Full stack web Dev',
        anno: 1997,
        titolo: 'Diploma',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 60
            },
            {
                linguaggio: 'C',
                voto: 70
            }
        ],
        foto: 'me.jpg',
        elevator: 'Meglio un giorno da frontEnder che 1000 da BackEnder',
        portfolio: [
            {
                titolo: 'CMR Torino',
                img: 'cmrLogo.jpg',
                descrizione: 'Realizzazione sito web CMR Torino'
            },
            {
                titolo: 'bel sito 2',
                img: 'foto_lavoro.jpg',
                descrizione: 'lorem ipsum 2'
            },
            {
                titolo: 'bel sito 3',
                img: 'foto_lavoro.jpg',
                descrizione: 'lorem ipsum 3'
            }
        ]
    },
    {
        nome: 'Enrico',
        cognome: 'Lamendola',
        jobTitle: 'regista e video maker',
        anno: 1999,
        titolo: 'diploma',
        skill: [
            {
                montaggio: 'adobe premiere',
                Voto: 90
            },
            {
                scrittura: 'celtx',
                Voto: 100
            }
        ],
        foto: 'mia_img.jpg',
        elevator: 'lorem is....',
        portfolio: [
            {
                titolo: 'sito web 1',
                img: 'foto_lavoro.jpg',
                descrizione: 'progetto scolastico'
            },
            {
                titolo: 'sito web 1',
                img: 'foto_lavoro2.jpg',
                descrizione: 'scrittura di una sceneggiatura'
            },
            {
                titolo: 'sito web 1',
                img: 'foto_lavoro3.jpg',
                descrizione: 'progetto personale'
            }
        ]
    },
    {
        nome: 'Andrea',
        cognome: 'Milone',
        jobTitle: 'front-end developer',
        anno: 1969,
        titolo: 'laurea',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 90
            },
            {
                linguaggio: 'JAVA',
                voto: 100
            }
        ],
        foto: 'img/banner.jpg',
        elevator: 'lorem ipsum...',
        portfolio: [
            {
                titolo: 'sito web 1',
                img: 'img/TheWho.jpg',
                desrzione: 'bla bla 1'
            },
            {
                titolo: 'sito web 2',
                img: 'img/ZZTop.jpg',
                desrzione: 'bla bla 2'
            },
            {
                titolo: 'sito web 3',
                img: 'img/baby.jpg',
                desrzione: 'bla bla 3'
            }
        ]
    },
    {
        nome: 'Andrei',
        cognome: 'Tudorache',
        jobTitle: 'Full Stack web Developer',
        anno: 1995,
        titolo: 'Diploma Liceo Scientifico e Qualifica come Tecnico Video per il Multimedia e il Web Design',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 75
            },
            {
                linguaggio: 'Java',
                voto: 50
            },
            {
                linguaggio: 'JavaScript',
                voto: 100
            },
            {
                linguaggio: 'HTML',
                voto: 100
            },
            {
                linguaggio: 'CSS',
                voto: 100
            }
        ],
        foto: 'my_img.png',
        elevator: 'Lorem Tre Ipsum...',
        portfolio: [
            {
                Titolo: 'Sito Tre web',
                img: 'foto_lavoro_1',
                Descrizione: 'Il sito è bello'
            },
            {
                Titolo: 'Sito Tre web web',
                img: 'foto_lavoro_2',
                Descrizione: 'Il sito è davvero bello'
            },
            {
                Titolo: 'Sito Tre web web web',
                img: 'foto_lavoro_3',
                Descrizione: 'Il sito è davvero molto bello'
            }
        ]
    },
    {
        nome: 'Simone',
        cognome: 'Tugnetti',
        jobTitle: 'Studente',
        anno: 1997,
        titolo: 'Diploma ITIS - Informatica',
        skill: [
            {
                linguaggio: 'C',
                voto: 30
            },
            {
                linguaggio: 'JAVA',
                voto: 28
            },
            {
                comunicazione: 'Livello orientamento',
                voto: 25
            },
            {
                marketing: 'Livello base',
                voto: 23
            },
            {
                scrittura: 'Livello intermedio / esperto',
                voto: 27
            }
        ],
        foto: 'profilo.jpg',
        elevator: 'Sono un personaggio!',
        portfolio: [
            {
                titolo: 'Sito web CMR',
                img: 'cmr.png',
                descrizione: 'Riproduzione del sito originale CMR'
            },
            {
                titolo: 'Programma JAVA Ordini',
                img: 'ordini.png',
                descrizione: 'Creazione di un programma per la gestione degli ordini'
            },
            {
                titolo: 'Applicazione Android Login',
                img: 'login.jpg',
                descrizione: 'Creazione di un\'applicazione android in cui si simula un login'
            },
            {
                titolo: 'Database per raduni e conferenze',
                img: 'database.png',
                descrizione: 'Creazione di database per la gestione di raduni e/o conferenze'
            }
        ]
    },
    {
        nome: 'Federica',
        cognome: 'Vacca',
        jobTitle: 'Junior Front-end Developer',
        anno: 1997,
        titolo: 'Diploma',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 60
            },
            {
                linguaggio: 'JAVA',
                voto: 70
            }
        ],
        foto: 'miaImg.png',
        elevator: 'lorem ipsum...',
        portfolio: [
            {
                titolo: 'sito web uno',
                img: 'foto_lavoro1.jpg',
                descrizione: 'bla bla bla'
            },
            {
                titolo: 'sito web due',
                img: 'foto_lavoro1.jpg',
                descrizione: 'bla bla bla'
            },
            {
                titolo: 'sito web tre',
                img: 'foto_lavoro1.jpg',
                descrizione: 'bla bla bla'
            }
        ]
    },
    {
        nome: 'andrea',
        cognome: 'bauzano',
        jobTitle: 'full Stundent',
        anno: 1997,
        titolo: 'diploma',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 29
            },
            {
                linguaggio: 'JAVA',
                voto: 28
            },
            {
                linguaggio: 'C# per Unity',
                voto: 28
            },
            {
                linguaggio: 'Android',
                voto: 30
            }
        ],
        foto: 'abauzano.jpg',
        elevator: 'Lorem ipsum dolor sit amet',
        portfolio: [
            {
                titolo: 'Interfaccia Grafica',
                img: 'interfaccia.jpg',
                descrizione: 'Interfaccia grafica creata con Java per un e-commerce '
            },
            {
                titolo: 'Gioco Unity',
                img: 'gameUnity.jpg',
                descrizione: 'Gioco creato con Unity per PC'
            },
            {
                titolo: 'App di ricette di cucina',
                img: 'appAndroid.jpg',
                descrizione: 'Applicazione per ricatte di cucina android'
            }
        ]
    },
    {
        nome: 'razvan',
        cognome: 'apostol',
        jobTitle: 'android developer',
        anno: 1998,
        titolo: 'diploma',
        skill: [
            {
                linguaggio: 'Java',
                voto: 100
            },
            {
                linguaggio: 'PHP',
                voto: 10
            }
        ],
        foto: 'apostol.png',
        elevator: 'lorem ipsum...',
        portfolio: [
            {
                titolo: 'sito web 1',
                img: 'foto_lavoro1.jpg',
                descrizione: 'bla bla 1'
            },
            {
                titolo: 'sito web 2',
                img: 'foto_lavoro1.jpg',
                descrizione: 'bla bla 2'
            },
            {
                titolo: 'sito web 3',
                img: 'foto_lavoro1.jpg',
                descrizione: 'bla bla 3'
            }
        ]
    },
    {
        nome: 'maurizio',
        cognome: 'caffaro',
        jobTitle: 'web developer',
        anno: 1987,
        titolo: 'laurea in giurisprudenza',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 60
            },
            {
                linguaggio: 'JAVA',
                voto: 50
            }
        ],
        foto: 'io.jpg',
        elevator: 'in possesso di solide basi di programmazione, vanto diverse collaborazioni con le più affermate Società informatiche del territorio piemontese',
        portfolio: [
            {
                titolo: 'www.mediaworld.it',
                img: 'mediaworld.jpg',
                descrizione: 'bla'
            },
            {
                titolo: 'www.unieuro.it',
                img: 'unieuro.jpg',
                descrizione: 'blabla'
            },
            {
                titolo: 'www.euronics.it',
                img: 'euronics.jpg',
                descrizione: 'blablabla'
            }
        ]
    },
    {
        nome: 'Nicholas',
        cognome: 'Cerrone',
        jobTitle: 'junior full stack dev',
        anno: 1999,
        titolo: 'diploma',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 60
            },
            {
                linguaggio: 'Java',
                voto: 60
            },
            {
                linguaggio: 'Swift',
                voto: 20
            },
            {
                linguaggio: 'Assembly',
                voto: 5
            }
        ],
        foto: 'cerrone.jpg',
        elevator: 'Panta rei',
        portfolio: [
            {
                titolo: 'Sito Web CMR ',
                img: 'logo-dark.png',
                descrizione: 'Restyling sito CMR Torino'
            }
        ]
    },
    {
        nome: 'Claudia',
        cognome: 'Cotroneo',
        jobTitle: 'Web Designer',
        anno: 1991,
        titolo: 'laurea',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 70
            },
            {
                linguaggio: 'HTML',
                voto: 80
            },
            {
                programma: 'PHOTOSHOP',
                voto: 90
            },
            {
                programma: 'ILLUSTRATOR',
                voto: 90
            }
        ],
        foto: 'cotroneo_img.jpg',
        elevator: 'lorem ipsum....',
        portfolio: [
            {
                titolo: 'sito web',
                img: 'foto_lavoro1.jpg',
                descrizione: 'bla bla bla bla 1'
            },
            {
                titolo: 'sito web2',
                img: 'foto_lavoro2.jpg',
                descrizione: 'bla bla bla bla 2'
            },
            {
                titolo: 'pubblicità',
                img: 'foto_pubb.jpg',
                descrizione: 'bla bla bla bla 3'
            }
        ]
    },
    {
        nome: 'mirko',
        cognome: 'GOD',
        jobTitle: 'full stack',
        anno: 0,
        titolo: 'laurea',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 40
            },
            {
                linguaggio: 'java',
                voto: 30
            },
            {
                linguaggio: 'html',
                voto: 70
            }
        ],
        foto: 'mi-logo.png',
        elevator: 'lorem ipsum dolor sit amet',
        portfolio: [
            {
                titolo: 'http://uion.xyz/sito/',
                img: 'sito1.png',
                descrizione: 'Primo sito'
            },
            {
                titolo: 'http://www.uion.xyz/cmr-esame/',
                img: 'cmr.png',
                descrizione: 'sito infertilita di coppia'
            }
        ]
    },
    {
        nome: 'Marcello',
        cognome: 'Giovannini',
        anno: 1999,
        jobTitle: '',
        titolo: 'Diploma',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 90
            },
            {
                linguaggio: 'Java',
                voto: 100
            }
        ],
        foto: 'marcello.jpg',
        elevator: 'lorem ipsum...',
        portfolio: [
            {
                titolo: 'nfscars.net',
                img: 'image1.jpg',
                descrizione: 'Auto mod NFS'
            },
            {
                titolo: 'gta5-mods.com',
                img: 'image2.jpg',
                descrizione: 'Auto mod GTA'
            },
            {
                titolo: 'youtube.com',
                img: 'image3.jpg',
                descrizione: 'Video'
            }
        ]
    },
    {
        nome: 'dario',
        cognome: 'olivero',
        anno: 1988,
        titolo: 'diploma scientifico',
        jobTitle: '',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 30
            },
            {
                linguaggio: 'JAVA',
                voto: 31
            },
            {
                linguaggio: 'HTML',
                voto: 30
            }
        ],
        foto: 'the-strokes-logo.jpg',
        elevator: 'lorem ipsum',
        portfolio: [
            {
                titolo: 'naturasi.it',
                img: 'download.jpg',
                descrizione: 'prodotti biologici'
            },
            {
                titolo: 'franzferdinand.com',
                img: 'franzferdinand.jpg',
                descrizione: 'gruppo musicale'
            },
            {
                titolo: 'naturasi.it',
                img: 'download.jpg',
                descrizione: 'prodotti biologici'
            }
        ]
    },
    {
        nome: 'Cristian',
        cognome: 'Palmeri',
        jobTitle: 'Studente',
        anno: 1995,
        titolo: 'Diploma',
        skill: [
            {
                linguaggio: 'C',
                voto: 30
            },
            {
                linguaggio: 'JAVA',
                voto: 26
            },
            {
                linguaggio: 'HTML',
                voto: 28
            }
        ],
        foto: 'palmeri.jpg',
        elevator: 'Cogito ergo sum',
        portfolio: [
            {
                titolo: 'Sito The Who',
                img: 'who.png',
                descrizione: 'Uno dei primi lavori'
            },
            {
                titolo: 'Sito Moodle',
                img: 'moodle.png',
                descrizione: 'Un sito moodle progettato'
            }
        ]
    },
    {
        nome: 'mirko',
        cognome: 'quaglia',
        jobTitle: 'Web Developer',
        anno: 1999,
        titolo: 'diploma',
        skill: [
            {
                linguaggio: 'JS',
                voto: 80
            },
            {
                linguaggio: 'JAVA',
                voto: 70
            }
        ],
        foto: 'profilo.jpg',
        elevator: 'lorem ipsum blablablabla ...',
        portfolio: [
            {
                titolo: 'sito web',
                img: 'foto.jpg',
                descrizione: 'bla bla bla'
            },
            {
                titolo: 'sito web 2',
                img: 'foto.jpg',
                descrizione: 'bla bla bla'
            },
            {
                titolo: 'sito web 3',
                img: 'foto.jpg',
                descrizione: 'bla bla bla'
            }
        ]
    },
    {
        nome: 'Roberta',
        cognome: 'Sansotta',
        jobTitle: 'Front-end student',
        anno: 1998,
        titolo: 'diploma',
        skill: [
            {
                linguaggio: 'IOS',
                voto: 28
            },
            {
                linguaggio: 'ANDROID',
                voto: 30
            },
            {
                linguaggio: 'C',
                voto: 24
            },
            {
                linguaggio: 'HTML&CSS',
                voto: 29
            },
            {
                linguaggio: 'JAVA',
                voto: 25
            },
            {
                linguaggio: 'PHP',
                voto: 25
            }
        ],
        foto: 'myimg.jpg',
        elevator: 'Lorem ipsum salva sempre',
        portfolio: [
            {
                titolo: 'Sito web',
                img: 'sito.jpg',
                descrizione: 'Sito web realizzato con HTML5 e CSS3'
            },
            {
                titolo: 'Applicazione Android',
                img: 'app.jpg',
                descrizione: 'Applicazione realizzata con Android Studio'
            },
            {
                titolo: 'Interfaccia grafica Java',
                img: 'interfaccia.jpg',
                descrizione: 'Interfaccia grafica realizzata con NetBeans'
            }
        ]
    },
    {
        nome: 'Florin',
        cognome: 'Serban',
        anno: 1999,
        titolo: 'Diploma',
        jobTitle: '',
        skill: [
            {
                linguaggio: 'PHP',
                voto: '76'
            },
            {
                linguaggio: 'JAVA',
                voto: '64'
            }
        ],
        foto: 'mia_img.jpg',
        elevator: 'Lorem ipsum...',
        portfolio: [
            {
                titolo: 'ZZtop',
                img: 'ZZtop.jpg',
                descrizione: 'La storica band che ha cambiato il mondo'
            },
            {
                titolo: 'TheWho',
                img: 'TheWho.jpg',
                descrizione: 'una band giovane ma forte'
            },
            {
                titolo: 'CMRtorino',
                img: 'CMR.jpg',
                descrizione: 'Ti aiutiamo a fecondare, così da avere anche tu un bambino'
            }
        ]
    },
    {
        nome: 'mgrazia',
        cognome: 'tufaro',
        jobTitle: '',
        anno: 1997,
        titolo: 'Diploma',
        skill: [
            {
                linguaggio: 'PHP',
                voto: 90
            },
            {
                linguaggio: 'Java',
                voto: 70
            }
        ],
        foto: 'images.jpg',
        elevator: 'lorem ipsum...',
        portfolio: [
            {
                titolo: 'infertilitadicoppia.com',
                img: 'images.jpg',
                descrizione: 'moodle.its-ictpiemonte.it'
            },
            {
                titolo: 'infertilitadicoppia.com',
                img: 'images.jpg',
                descrizione: 'moodle.its-ictpiemonte.it'
            },
            {
                titolo: 'infertilitadicoppia.com',
                img: 'images.jpg',
                descrizione: 'moodle.its-ictpiemonte.it'
            }
        ]
    },
    {
        nome: 'Xiang',
        cognome: 'Chen',
        anno: 1998,
        jobTitle: '',
        titolo: 'Diploma di Perito Informatico',
        skill: [
            {
                linguaggio: 'JAVA',
                voto: 90
            },
            {
                linguaggio: 'C++',
                voto: 90
            },
            {
                linguaggio: 'HTML',
                voto: 80
            },
            {
                linguaggio: 'CSS',
                voto: 80
            },
            {
                linguaggio: 'PHP',
                voto: 70
            },
            {
                linguaggio: 'JS',
                voto: 70
            },
            {
                linguaggio: 'SQL',
                voto: 60
            }
        ],
        foto: 'chen.jpg',
        elevator: 'Lorem ipsum dolor sit amet ...',
        portfolio: [
            {
                titolo: 'http://readytoramble.altervista.org',
                descrizione: 'Lorem ipsum dolor sit amet ...'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/studenti/studenti.component.css":
/*!*************************************************!*\
  !*** ./src/app/studenti/studenti.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRpL3N0dWRlbnRpLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/studenti/studenti.component.html":
/*!**************************************************!*\
  !*** ./src/app/studenti/studenti.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Studenti</h2>\n<ul class=\"studenti\">\n    <li *ngFor=\"let studente of studenti\" (click)=\"onSelect(studente)\">\n        <span class=\"badge\">{{studente.nome}}</span> {{studente.cognome}}\n    </li>\n</ul>\n\n\n\n<div *ngIf=\"selectedStudente\">\n\n    <h2>{{selectedStudente.nome | uppercase}} Details</h2>\n    <div><span>cognome: </span>{{selectedStudente.cognome}}</div>\n    <div>\n        <label>nome:\n          <input  [(ngModel)]=\"selectedStudente.nome\" placeholder=\"nome\">\n    </label>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/studenti/studenti.component.ts":
/*!************************************************!*\
  !*** ./src/app/studenti/studenti.component.ts ***!
  \************************************************/
/*! exports provided: StudentiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentiComponent", function() { return StudentiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elenco_studenti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elenco-studenti */ "./src/app/elenco-studenti.ts");



var StudentiComponent = /** @class */ (function () {
    function StudentiComponent() {
        this.studenti = _elenco_studenti__WEBPACK_IMPORTED_MODULE_2__["STUDENTI"];
    }
    StudentiComponent.prototype.onSelect = function (studente) {
        this.selectedStudente = studente;
    };
    StudentiComponent.prototype.ngOnInit = function () {
    };
    StudentiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studenti',
            template: __webpack_require__(/*! ./studenti.component.html */ "./src/app/studenti/studenti.component.html"),
            styles: [__webpack_require__(/*! ./studenti.component.css */ "./src/app/studenti/studenti.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentiComponent);
    return StudentiComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marcuser/ES6/its2019/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map