import Components from "./Components/index.mjs";
import botOptions from "./Config/botOptions.mjs";
import DebugEvent from "./Events/Debug.djs.mjs";
import ErrorEvent from "./Events/Error.djs.mjs";
import GuildCreateEvent from "./Events/GuildCreate.djs.mjs";
import GuildDeleteEvent from "./Events/GuildDelete.djs.mjs";
import InteractionEvent from "./Events/Interaction.djs.mjs";
import InvalidateEvent from "./Events/Invalidate.djs.mjs";
import ReadyEvent from "./Events/Ready.djs.mjs";
import WarnEvent from "./Events/Warning.djs.mjs";
const Events = {
  guildCreate: GuildCreateEvent,
  guildDelte: GuildDeleteEvent,
  ready: ReadyEvent,
  warn: WarnEvent,
  invalidate: InvalidateEvent,
  interaction: InteractionEvent,
  error: ErrorEvent,
  debug: DebugEvent
};
const setarBot = {
  Components,
  Events,
  config: botOptions
};
export default setarBot;