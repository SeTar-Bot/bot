import refreshStatsButton from "./Buttons/refreshStats"
import evalCommand from "./Commands/eval";
import infoCommand from "./Commands/info";
import inviteCommand from "./Commands/invite";
import langCommand from "./Commands/language";
import permCommand from "./Commands/permission";
import statsCommand from "./Commands/stats";
import testContext from "./Contexts/testContext";


const Buttons = {
    refreshStats: refreshStatsButton,

};

const Commands = {
    info: infoCommand,
    invite: inviteCommand,
    language: langCommand,
    permission: permCommand,
    stats: statsCommand,
    eval: evalCommand,
    
}

const Contexts = {
    test: testContext,

}

const Components = {
    Buttons,
    Commands,
    Contexts
}

export default Components;