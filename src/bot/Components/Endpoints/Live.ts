import Client from "../../../Classes/Client";
import Endpoint from "../../../Classes/Endpoint";
import { expreessEndpoints, expressMethods } from "../../../typings/enums";
import botOptions from "../../Config/botOptions";

const basicInfo = {
    uri: expreessEndpoints.LIVE,
    method: expressMethods.GET,
};

const liveEndpoint: Endpoint = new Endpoint({
    ...basicInfo,
    isAvailable: true,
    handler: async (client: Client, req, res) => {
        try {
            res.status(200).send({ result: 'ok' });

            setTimeout(async () => {
                const replyRes = await client.axiosClient[basicInfo.method as string](botOptions.serverURl + basicInfo.uri);
                if(replyRes.status == 200)
                    console.log(`Server has been refreshed.`);
                else
                    throw new Error(`Server couldn't be refresh, Status Code: ${replyRes.status}`);
            }, 900000)
        } catch (error) {
            throw error;
        }
    }
});

export default liveEndpoint;