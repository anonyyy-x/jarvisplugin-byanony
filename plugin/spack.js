/*
ANONYYY-X 💐 - JARVIS RANDOM STICKERS PLUGIN
⢀⣰⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠘⠀⠀⣶⡿⣷⣦⣾⣿⣧
⠀⠀⠀⠀⠻⣧⠀⠛⠀⡘⠏
⠀⠀⠀⠀⠀⠉⠳⣦⣮⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠀⠠⡧
⠀⠀⠀⠠⡥⠄⠀⠀⠀⠀⠀
*/
const axios = require("axios");
const { System, isPrivate } = require("../lib/");

const API = "https://arooanonyapi.onrender.com/api/sticker";

System({ pattern: "spack", fromMe: isPrivate, type: "sticker" }, async (m, match) => {
    try {
        const cat = String(match || "").trim().toLowerCase();

        if (!cat) {
            const { data } = await axios.get(API);
            return m.reply(`*STICKER PACKS*\n\n${data.categories.map(x => `*${x}*`).join(" , ")}\n\n*Example* :\n          \`\`\`.spack cat\`\`\``);
        }

        const { data } = await axios.get(API, { params: { category: cat } });
        if (!data.success || !data.result?.image || data.result.category?.toLowerCase() !== cat)
            return m.reply("*Coming soon.*");

        const { data: media } = await axios.get(data.result.image, { responseType: "arraybuffer" });

        await m.send(Buffer.from(media), {
            packname: "JARVIS",
            author: "ANONYYY-X"
        }, "sticker");

    } catch (e) {
        console.log(e);
        return m.reply("*Sticker failed.*");
    }
});
