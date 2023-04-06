"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransferenciaService = void 0;
var core_1 = require("@angular/core");
var TransferenciaService = /** @class */ (function () {
    function TransferenciaService(httpCliente) {
        this.httpCliente = httpCliente;
        this.url = 'http://localhost:3000/transferencias';
        this.listaTransferencia = [];
    }
    Object.defineProperty(TransferenciaService.prototype, "transferencias", {
        get: function () {
            return this.listaTransferencia;
        },
        enumerable: false,
        configurable: true
    });
    TransferenciaService.prototype.todas = function () {
        return this.httpCliente.get(this.url);
    };
    TransferenciaService.prototype.adicionar = function (transferencia) {
        this.hidratar(transferencia);
        return this.httpCliente.post(this.url, transferencia);
    };
    TransferenciaService.prototype.hidratar = function (transferencia) {
        transferencia.data = new Date();
    };
    TransferenciaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TransferenciaService);
    return TransferenciaService;
}());
exports.TransferenciaService = TransferenciaService;
