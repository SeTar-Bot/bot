import refreshStatsButton from "./Buttons/refreshStats.mjs";
import evalCommand from "./Commands/eval.mjs";
import infoCommand from "./Commands/info.mjs";
import inviteCommand from "./Commands/invite.mjs";
import langCommand from "./Commands/language.mjs";
import permCommand from "./Commands/permission.mjs";
import statsCommand from "./Commands/stats.mjs";
import testContext from "./Contexts/testContext.mjs";
const Buttons = {
  refreshStats: refreshStatsButton
};
const Commands = {
  info: infoCommand,
  invite: inviteCommand,
  language: langCommand,
  permission: permCommand,
  stats: statsCommand,
  eval: evalCommand
};
const Contexts = {
  test: testContext
};
const Components = {
  Buttons,
  Commands,
  Contexts
};
export default Components;