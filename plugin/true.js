const axios = require("axios");
const { System, isPrivate } = require("../lib/");

System({
    pattern: "true",
    fromMe: isPrivate,
    desc: "Phone number lookup",
    type: "search"
}, async (message, match) => {
    try {
        const number = String(match || "").trim().replace(/[\s()-]/g, "");

        if (!/^\+?\d{8,15}$/.test(number)) {
            return await message.reply(
                "*TRUE LOOKUP*\n\n" +
                "Usage: *.true +911234567890*"
            );
        }

        await message.react("⏳");

        const { data } = await axios.get(
            "https://arooanonyapi.onrender.com/api/true",
            {
                params: { phone: number },
                timeout: 60000
            }
        );

        if (!data || data.success !== true) {
            throw new Error("No successful API response");
        }

        const tc = data.truecaller || {};
        const tg = data.telegram || {};

        const result = [
            "*╭━━〔 TRUE LOOKUP 〕━━╮*",
            "┃",
            `┃ *Request ID:* ${data.request_id || "N/A"}`,
            `┃ *Number:* ${data.number || number}`,
            `┃ *Country:* ${data.country || "Unknown"}`,
            "┃",
            "*┃ 🔍 TRUECALLER*",
            `┃ *Name:* ${tc.name || "Not available"}`,
            `┃ *Carrier:* ${tc.carrier || "Unknown"}`,
            `┃ *Last Seen:* ${tc.last_seen || "Unknown"}`,
            `┃ *Telegram Status:* ${tc.telegram_status || "Unknown"}`,
            "┃",
            "*┃ ✈ TELEGRAM*",
            `┃ *Registered:* ${tg.registered ? "Yes" : "No"}`,
            `┃ *Premium:* ${tg.premium ? "Yes" : "No"}`,
            `┃ *Verified:* ${tg.verified ? "Yes" : "No"}`,
            "┃",
            "*╰━━━━━━━━━━━━━━━━━━╯*"
        ].join("\n");

        await message.client.sendMessage(message.jid, {
            text: result,
            contextInfo: {
                externalAdReply: {
                    title: "Truecaller Information",
                    body: "Phone number lookup",
                    mediaType: 1,
                    sourceUrl: "https://whatsapp.com/channel/0029VaPeVWFHwXbM08nIIr2v"
                }
            }
        });

        await message.react("✅");

    } catch (error) {
        console.error("[TRUE ERROR]", error.message);

        try {
            await message.react("❌");
        } catch (_) {}

        await message.reply(
            "*Lookup failed.*\nPlease try again later."
        );
    }
});
