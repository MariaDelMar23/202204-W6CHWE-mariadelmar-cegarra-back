const { createRobot } = require("..");
const mockRobots = require("../../mocks/mockRobots");

jest.mock("../../../db/models/Robot", () => ({
  ...jest.requireActual("../../../db/models/Robot"),
  create: () => mockRobots[0],
}));

describe("Given the createRobot function", () => {
  describe("When it receives a request with a robot onject and a response", () => {
    const req = mockRobots[0];
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the method status of the response with 201", async () => {
      const expectedStatusCode = 201;

      await createRobot(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the method json of the response with the robot object", async () => {
      const expectedJSON = mockRobots[0];

      await createRobot(req, res);

      expect(res.json).toHaveBeenCalledWith(expectedJSON);
    });
  });
});
