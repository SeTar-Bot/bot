import { InteractionReplyOptions, MessageActionRow, MessageButton, MessageEmbed, MessageEmbedOptions, MessageSelectMenu } from "discord.js";
import { EmbedBuilderObjOpts } from "../../types/classes";

export default class EmbedBuilder extends MessageEmbed {

    public ActionRows: [MessageActionRow?, MessageActionRow?, MessageActionRow?, MessageActionRow?, MessageActionRow?] = [];
    public otherEmbeds: MessageEmbed[] | EmbedBuilder[] = [];
    constructor(data?: MessageEmbed | MessageEmbedOptions)
    {
        super(data);
    }

    addComponent(btns: [MessageSelectMenu] | [MessageButton, MessageButton?, MessageButton?, MessageButton?, MessageButton?] | [MessageActionRow, MessageActionRow?, MessageActionRow?, MessageActionRow?, MessageActionRow?]): this
    {
        if(btns.length > 5 || (this.ActionRows.length + btns.length) > 5)
            throw new Error(`Content more than Supported Numbers.`);

        if(btns[0] instanceof MessageButton)
        {
            const row = new MessageActionRow().addComponents(btns);
            this.ActionRows.push(row);
        }
        else if(btns[0] instanceof MessageSelectMenu)
        {
            const row = new MessageActionRow().addComponents(btns);
            this.ActionRows.push(row);
        }
        else
        {
            if(this.ActionRows.length == 0)
                this.ActionRows = btns as [MessageActionRow?, MessageActionRow?, MessageActionRow?, MessageActionRow?, MessageActionRow?];
            else
                this.ActionRows.concat(btns as [MessageActionRow?, MessageActionRow?, MessageActionRow?, MessageActionRow?, MessageActionRow?]);
        }
        return this;
    }

    addEmbeds(embeds: EmbedBuilder[] | MessageEmbed[]): this
    {
        let tempVar: any[] = this.otherEmbeds; 
        tempVar = tempVar.concat(embeds);
        this.otherEmbeds = tempVar;
        return this;
    }

    toOBJECT(opts: EmbedBuilderObjOpts = { fetchReply: true }): InteractionReplyOptions
    {
        const json = this.toJSON();

        if(this.otherEmbeds.length > 0)
        {
            this.otherEmbeds.push(this)
            this.otherEmbeds.map(x => x.toJSON())
        }

        const result: InteractionReplyOptions = { 
            fetchReply: opts.fetchReply,
            embeds: (this.otherEmbeds.length > 0) ? this.otherEmbeds : [json],
        };

        if(this.ActionRows.length > 0)
            result.components = this.ActionRows;

        return result;
    }
}