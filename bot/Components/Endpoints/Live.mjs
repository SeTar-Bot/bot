import Endpoint from "../../../Classes/Endpoint.mjs";
import { expreessEndpoints } from "../../../typings/enums.mjs";
const liveEndpoint = new Endpoint({
  uri: expreessEndpoints.LIVE,
  method: "get",
  isAvailable: true,
  handler: async (req, res) => {
    try {
      res.status(200).send({
        result: 'ok'
      });
    } catch (error) {
      throw error;
    }
  }
});
export default liveEndpoint;