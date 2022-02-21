import Components from "./Components";
import botOptions from "./Config/botOptions";
import DebugEvent from "./Events/Debug.djs";
import GuildCreateEvent from "./Events/GuildCreate.djs";
import GuildDeleteEvent from "./Events/GuildDelete.djs";
import InteractionEvent from "./Events/Interaction.djs";
import InvalidateEvent from "./Events/Invalidate.djs";
import ReadyEvent from "./Events/Ready.djs";
import WarnEvent from "./Events/Warning.djs";

const Events = {
    guildCreate: GuildCreateEvent,
    guildDelte: GuildDeleteEvent,
    ready: ReadyEvent,
    warn: WarnEvent,
    invalidate: InvalidateEvent,
    interaction: InteractionEvent,
    error: ErrorEvent,
    debug: DebugEvent
}

const setarBot = {
    Components,
    Events,
    config: botOptions,
}

export default setarBot;