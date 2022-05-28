import { Modal } from "discord.js";
import { localeModals } from "../../../types/localeSchema";

const en_usModals: localeModals = {
    info: () => new Modal()
        .setCustomId('music_info_modal')
        .setTitle('Music Information')
}

export default en_usModals