
const axios = require("axios");
const { System, isPrivate } = require("../lib/");

System({
    pattern: "true",
    fromMe: isPrivate,
    desc: "Truecaller number lookup",
    type: "search"
}, async (message, match) => {
    try {
        const number = String(match || "")
            .trim()
            .replace(/[\s()-]/g, "");

        if (!/^\+?\d{8,15}$/.test(number)) {
            return await message.reply(
                "*Usage:* `.true +919544445327`"
            );
        }

        try {
            await message.react("⏳");
        } catch (_) {}

        // Wait for the API response.
        const response = await axios.get(
            "https://arooanonyapi.onrender.com/api/true",
            {
                params: { phone: number },
                timeout: 60000
            }
        );

        const data = response.data;

        // Reply only after receiving a successful API response.
        if (!data || data.success !== true) {
            throw new Error("API returned no successful result");
        }

        const tc = data.truecaller || {};
        const tg = data.telegram || {};

        const result = [
            "*╭━━〔 TRUECALLER LOOKUP 〕━━╮*",
            "┃",
            `┃ *Number:* ${data.number || number}`,
            `┃ *Country:* ${data.country || "Unknown"}`,
            "┃",
            "*┃ 🔍 TRUECALLER*",
            `┃ *Name:* ${tc.name || "Not available"}`,
            `┃ *Carrier:* ${tc.carrier || "Unknown"}`,
            `┃ *Last Seen:* ${tc.last_seen || "Unknown"}`,
            `┃ *Telegram Status:* ${tc.telegram_status || "Unknown"}`,
            "┃",
            "*╰━━━━━━━━━━━━━━━━━━━━╯*"
        ].join("\n");

        await message.reply(result);

        try {
            await message.react("✅");
        } catch (_) {}

    } catch (error) {
        console.error("[TRUE API ERROR]", error.message);

        try {
            await message.react("❌");
        } catch (_) {}

        await message.reply(
            "*API unavailable or no result received.*\nPlease try again later."
        );
    }
});
