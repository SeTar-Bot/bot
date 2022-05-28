import musicInfoButton from "./Buttons/musicInfo.mjs";
import evalCommand from "./Commands/eval.mjs";
import infoCommand from "./Commands/info.mjs";
import inviteCommand from "./Commands/invite.mjs";
import langCommand from "./Commands/language.mjs";
import permCommand from "./Commands/permission.mjs";
import playCommand from "./Commands/play.mjs";
import statsCommand from "./Commands/stats.mjs";
import testContext from "./Contexts/testContext.mjs";
import liveEndpoint from "./Endpoints/Live.mjs";
const Buttons = {
  musicInfo: musicInfoButton
};
const Commands = {
  info: infoCommand,
  invite: inviteCommand,
  language: langCommand,
  permission: permCommand,
  stats: statsCommand,
  eval: evalCommand,
  play: playCommand
};
const Contexts = {
  test: testContext
};
const Endpoints = {
  live: liveEndpoint
};
const Components = {
  Buttons,
  Commands,
  Contexts,
  Endpoints
};
export default Components;