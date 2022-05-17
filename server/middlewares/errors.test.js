const { notFoundError, generalError } = require("./errors");

describe("Given the notFoundError", () => {
  describe("When it receives a response object", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const req = {
      method: "GET",
      params: "/robotis",
    };
    test("Then it should call its method status with 404", () => {
      const expectedStatusCode = 404;

      notFoundError(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with { msg: 'Endpoint not found' }", () => {
      const expectedJSON = { msg: "Endpoint not found" };

      notFoundError(req, res);

      expect(res.json).toHaveBeenCalledWith(expectedJSON);
    });
  });
});

describe("Given the generalError", () => {
  describe("When it receives a response object", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const req = {
      method: "GET",
      params: "/robotis",
    };
    const error = {
      message: "Cannot read properties of null (reading 'use')",
    };
    test("Then it should call its method status with 500", () => {
      const expectedStatusCode = 500;

      generalError(error, req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with { msg: 'General error' }", () => {
      const expectedJSON = { msg: "General error" };

      generalError(error, req, res);

      expect(res.json).toHaveBeenCalledWith(expectedJSON);
    });
  });
});
