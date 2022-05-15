const { deleteRobot } = require("..");
const mockRobots = require("../../mocks/mockRobots");

jest.mock("../../../db/models/Robot", () => ({
  ...jest.requireActual("../../../db/models/Robot"),
  findByIdAndDelete: () => mockRobots[0],
}));

describe("Given the deleteRobot function", () => {
  describe("When it receives a request with a robot id and a response", () => {
    const req = { params: { idRobot: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the methos status of the response with 200", async () => {
      const expectedStatusCode = 200;

      await deleteRobot(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the method json of the response with { msg: `Deleted robot with Id 1` }", async () => {
      const expectedJSON = { msg: "Deleted robot with Id 1" };

      await deleteRobot(req, res);

      expect(res.json).toHaveBeenCalledWith(expectedJSON);
    });
  });
});
