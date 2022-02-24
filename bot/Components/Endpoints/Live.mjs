import Endpoint from "../../../Classes/Endpoint.mjs";
import { expreessEndpoints, expressMethods } from "../../../typings/enums.mjs";
import botOptions from "../../Config/botOptions.mjs";
const basicInfo = {
  uri: expreessEndpoints.LIVE,
  method: expressMethods.GET
};
const liveEndpoint = new Endpoint({ ...basicInfo,
  isAvailable: true,
  handler: async (client, req, res) => {
    try {
      console.log(req, res);
      res.send({
        result: 'ok'
      });
      setTimeout(async () => {
        const replyRes = await client.axiosClient[basicInfo.method](botOptions.serverURl + basicInfo.uri);
        if (replyRes.status == 200) console.log(`Server has been refreshed.`);else throw new Error(`Server couldn't be refresh, Status Code: ${replyRes.status}`);
      }, 900000);
    } catch (error) {
      throw error;
    }
  }
});
export default liveEndpoint;
