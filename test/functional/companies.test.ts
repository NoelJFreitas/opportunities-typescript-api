describe("companies functional test", () => {
  it("should create a new company", async () => {
    const newCompany = {
      name: "company",
      cnpj: "123456789123",
      country: "Brazil",
      state: "ES",
      city: "Vitoria",
    };

    const response = await global.testRequest.post("/company").send(newCompany);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      ...{ id: expect.any(String) },
      ...newCompany,
    });
  });

  it("should return code 422 when validation error", async () => {
    const newCompany = {
      name: "company",
      country: "Brazil",
      state: "ES",
      city: "Vitoria",
    };

    const response = await global.testRequest.post("/company").send(newCompany);

    expect(response.status).toBe(422);
    expect(response.body).toEqual({
      code: 422,
      error: "error message",
    });
  });

  it("should return code 409 when the registered cnpj already exists", async () => {
    const newCompany = {
      name: "company",
      cnpj: "123456789123",
      country: "Brazil",
      state: "ES",
      city: "Vitoria",
    };

    const response = await global.testRequest.post("/company").send(newCompany);

    expect(response.status).toBe(409);
    expect(response.body).toEqual({
      code: 409,
      error: "error message",
    });
  });
});
