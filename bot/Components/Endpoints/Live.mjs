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
      res.status(200).send({
        result: 'ok'
      });
      let replyRes;
      setTimeout(async () => {
        switch (basicInfo.method) {
          case expressMethods.GET:
            replyRes = await client.axiosClient.get(botOptions.serverURl + basicInfo.uri);
            break;

          case expressMethods.POST:
            replyRes = await client.axiosClient.post(botOptions.serverURl + basicInfo.uri);
            break;

          case expressMethods.PUT:
            replyRes = await client.axiosClient.put(botOptions.serverURl + basicInfo.uri);
            break;

          case expressMethods.PATCH:
            replyRes = await client.axiosClient.patch(botOptions.serverURl + basicInfo.uri);
            break;
        }

        if (replyRes.status == 200) console.log(`Server has been refreshed.`);else throw new Error(`Server couldn't be refresh, Status Code: ${replyRes.status}`);
      }, 900000);
    } catch (error) {
      throw error;
    }
  }
});
export default liveEndpoint;