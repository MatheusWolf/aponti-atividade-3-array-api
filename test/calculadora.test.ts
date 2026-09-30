import {describe, it, expect} from "vitest";
import {soma, subtracao, multiplicacao, divisao} from "../src/calculadora.js";


describe("calculadora", () => {
    it("Soma de dois numeros", () => {
        const resultado = soma(5, 7);
        expect(resultado).toBe(12);
    })

    it("Subtração de dois numeros", () => {
        const resultado = subtracao(9, 3);
        expect(resultado).toBe(6);
    })

    it("Multiplicação de dois numeros", () => {
        const resultado = subtracao(9, 3);
        expect(resultado).toBe(6);
    })

    it("Subtração de dois numeros", () => {
        const resultado = subtracao(9, 3);
        expect(resultado).toBe(6);
    })

})