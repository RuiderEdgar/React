describe("Pruebas en <DemoComponent/>", () => {
  test("Esta prueba no debe de fallar", () => {
    //1. inicializacion
    const message1 = "Hola mundo";

    //2. estimulo
    const message2 = message1.trim();

    //3. Observar comportamiento
    // expect(message1).toBe(message2);
    expect(message1).toBe(message2);
  });
});