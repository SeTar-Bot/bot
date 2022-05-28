import musicPausePlay from "./Buttons/musicPausePlay"
import evalCommand from "./Commands/eval";
import infoCommand from "./Commands/info";
import inviteCommand from "./Commands/invite";
import langCommand from "./Commands/language";
import permCommand from "./Commands/permission";
import playCommand from "./Commands/play";
import statsCommand from "./Commands/stats";
import testContext from "./Contexts/testContext";
import liveEndpoint from "./Endpoints/Live";


const Buttons = {
    musicPP: musicPausePlay,

};

const Commands = {
    info: infoCommand,
    invite: inviteCommand,
    language: langCommand,
    permission: permCommand,
    stats: statsCommand,
    eval: evalCommand,
    play: playCommand,

}

const Contexts = {
    test: testContext,

}

const Endpoints = {
    live: liveEndpoint,
    
}

const Components = {
    Buttons,
    Commands,
    Contexts,
    Endpoints
}

export default Components;