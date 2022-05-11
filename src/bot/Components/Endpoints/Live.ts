import Client from "../../../Classes/Client";
import Endpoint from "../../../Classes/Endpoint";
import { expreessEndpoints, expressMethods } from "../../../typings/enums";
import botOptions from "../../Config/botOptions";
import express from "express";

const basicInfo = {
    uri: expreessEndpoints.LIVE,
    method: expressMethods.GET,
};

const liveEndpoint: Endpoint = new Endpoint({
    ...basicInfo,
    isAvailable: true,
    testPing: true,
    handler: async (client: Client, req: express.Request, res: express.Response) => {
        // eslint-disable-next-line
        try {
            res.send({ result: 'ok' });

            setTimeout(async () => {
                const replyRes = await client.axiosClient[basicInfo.method as string](botOptions.serverURL + basicInfo.uri);
                
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