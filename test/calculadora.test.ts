import {describe, it, expect} from "vitest";
import {soma, subtracao, multiplicacao, divisao} from "../src/calculadora.js";


describe("Calculadora (soma)", () => {
    it("Soma de dois numeros inteiros", () => {
        const resultado = soma(5, 7); // -> 5 + 7
        expect(resultado).toBe(12);
    })
    it("Soma de numero negativo com positivo", () => {
        const resultado = soma(-10, 17); // -> (-10) + 17
        expect(resultado).toBe(7);
    })
    it("Soma de numeros positivos e um decimal", () => {
        const resultado = soma(9, 3.7); // -> 9 + 3,7
        expect(resultado).toBe(12.7);
    })
    it("Soma de dois numeros negativos", () => {
        const resultado = soma(-9.2, -20.6); // -> (-9.2) + (-20.6)
        expect(resultado).toBe(-29.8);
    })
})


describe("Calculadora (Subtração)", () => {
    it("Subtração de dois numeros", () => {
        const resultado = subtracao(30, 17); // -> 30 - 17
        expect(resultado).toBe(13);
    })
    it("Subtração de numero negativo com positivo", () => {
        const resultado = subtracao(-10, 17); // -> (-10) - 17
        expect(resultado).toBe(-27);
    })
    it("Subtração de numeros positivos e um decimal", () => {
        const resultado = subtracao(9, 3.7); // -> 9 - 3,7
        expect(resultado).toBe(5.3);
    })
    it("Subtração de dois numeros negativos", () => {
        const resultado = subtracao(-9.2, -20.2); // -> (-9,2) - (-20,2) 
        expect(resultado).toBe(11);
    })
})


describe("Calculadora (Multiplicação)", () => {
    it("Multiplicação de dois numeros positivos", () => {
        const resultado = multiplicacao(7, 5); // -> 7 * 5
        expect(resultado).toBe(35);
    })
    it("Multiplicação de dois numeros negativos", () => {
        const resultado = multiplicacao(-3, -5); // -> (-3) * (-5)
        expect(resultado).toBe(15);
    })
    it("Multiplicação de numero decimal e inteiro", () => {
        const resultado = multiplicacao(12.2, 4); // -> 12,2 * 4
        expect(resultado).toBe(48.8)
    })
    it("Multiplicação de numero negativo e decimal", () => {
        const resultado = multiplicacao(-22, 13) // -> (-22) * 13
        expect(resultado).toBe(-286)
    })
})


describe("Calculadora (Divisão)", () => {
    it("Divisão de dois numeros positivos", () => {
        const resultado = divisao(36, 4); // -> 36 / 4
        expect(resultado).toBe(9);
    })
    it("Divisão de dois numeros negativos", () => {
        const resultado = divisao(-36, -12); // -> (-36) / (-12)
        expect(resultado).toBe(3);
    })
    it("Divisão de numeros decimal e inteiro", () => {
        const resultado = divisao(50.2, 2); // -> 50,2 / 2
        expect(resultado).toBe(25.1);
    })
    it("Divisão de numero inteiro positivo e decimal negativo", () => {
        const resultado = divisao(24, -2.4); // -> 24 / (-2,4)
        expect(resultado).toBe(-10);
    })
})