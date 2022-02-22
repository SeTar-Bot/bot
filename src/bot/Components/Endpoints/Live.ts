import Endpoint from "../../../Classes/Endpoint";
import { expreessEndpoints } from "../../../typings/enums";

const liveEndpoint: Endpoint = new Endpoint({
    uri: expreessEndpoints.LIVE,
    method: "get",
    isAvailable: true,
    handler: async (req, res) => {
        try {
            res.status(200).send({ result: 'ok' })
        } catch (error) {
            throw error;
        }
    }
});

export default liveEndpoint;