const { getRobots } = require("..");
const mockRobots = require("../../mocks/mockRobots");

jest.mock("../../../db/models/Robot", () => ({
  ...jest.requireActual("../../../db/models/Robot"),
  find: () => mockRobots,
}));

describe("Given the getRobots function", () => {
  describe("When it receives a response object", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    test("Then it should call its method status with 200", async () => {
      const expectedStatusCode = 200;

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with an object with property robots that contains an array of robots", async () => {
      const expectedJSON = { robots: mockRobots };

      await getRobots(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedJSON);
    });
  });
});
