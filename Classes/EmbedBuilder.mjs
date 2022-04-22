import { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } from "discord.js";
export default class EmbedBuilder extends MessageEmbed {
  ActionRows = [];
  otherEmbeds = [];

  constructor(data) {
    super(data);
  }

  addComponent(btns) {
    if (btns.length > 5 || this.ActionRows.length + btns.length > 5) throw new Error(`Content more than Supported Numbers.`);

    if (btns[0] instanceof MessageButton) {
      const row = new MessageActionRow().addComponents(btns);
      this.ActionRows.push(row);
    } else if (btns[0] instanceof MessageSelectMenu) {
      const row = new MessageActionRow().addComponents(btns);
      this.ActionRows.push(row);
    } else {
      if (this.ActionRows.length == 0) this.ActionRows = btns;else this.ActionRows.concat(btns);
    }

    return this;
  }

  addEmbeds(embeds) {
    let tempVar = this.otherEmbeds;
    tempVar = tempVar.concat(embeds);
    this.otherEmbeds = tempVar;
    return this;
  }

  toOBJECT(opts = {
    fetchReply: true
  }) {
    const json = this.toJSON();

    if (this.otherEmbeds.length > 0) {
      this.otherEmbeds.push(this);
      this.otherEmbeds.map(x => x.toJSON());
    }

    const result = {
      fetchReply: opts.fetchReply,
      embeds: this.otherEmbeds.length > 0 ? this.otherEmbeds : [json]
    };
    if (this.ActionRows.length > 0) result.components = this.ActionRows;
    return result;
  }

}