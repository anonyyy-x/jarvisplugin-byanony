
const axios = require("axios");
const { System, isPrivate } = require("../lib/");

System({
    pattern: "true",
    fromMe: isPrivate,
    desc: "Phone number information lookup",
    type: "search"
}, async (message, match) => {
    try {
        const number = String(match || "")
            .trim()
            .replace(/[\s()-]/g, "");

        if (!number) {
            return await message.reply(
                "*TRUE LOOKUP*\n\n" +
                "Usage: *.true +919544445327*"
            );
        }

        if (!/^\+?\d{8,15}$/.test(number)) {
            return await message.reply("*Invalid phone number.*");
        }

        await message.react("⏳");

        const response = await axios.get(
            "https://arooanonyapi.onrender.com/api/true",
            {
                params: { phone: number },
                timeout: 30000
            }
        );

        const data = response.data;

        if (!data || !data.success) {
            await message.react("❌");
            return await message.reply("*No information found.*");
        }

        const info = data.truecaller || {};

        const result = [
            "*╭━━〔 PHONE LOOKUP 〕━━╮*",
            "┃",
            `┃ *Number:* ${data.number || number}`,
            `┃ *Country:* ${data.country || "Unknown"}`,
            `┃ *Carrier:* ${info.carrier || "Unknown"}`,
            "┃",
            "*╰━━━━━━━━━━━━━━━━━━╯*"
        ].join("\n");

        await message.reply(result);
        await message.react("✅");

    } catch (error) {
        console.error("[TRUE LOOKUP]", error.message);

        try {
            await message.react("❌");
        } catch (_) {}

        await message.reply(
            "*Lookup failed.*\nPlease try again later."
        );
    }
});
