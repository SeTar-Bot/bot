import { MessageContextMenuInteraction } from "discord.js"
import Client from "../../../Classes/Client"
import Context from "../../../Classes/Context"
import { BotPermissions, ContextTypes } from "../../../typings/enums"

const testContext: Context = new Context({
    name: `test-context`,
    type: ContextTypes.MESSAGE,
    isAvailable: false,
    permission: BotPermissions.ALL,
    run: async (client: Client, interaction: MessageContextMenuInteraction): Promise<void> => {
        
    }
})

export default testContext;