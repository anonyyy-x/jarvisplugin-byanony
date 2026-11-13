
const axios = require("axios");
const { System, isPrivate } = require("../lib/");

const CHANNEL_URL =
    "https://whatsapp.com/channel/0029VaPeVWFHwXbM08nIIr2v";

System({
    pattern: "true",
    fromMe: isPrivate,
    desc: "Truecaller number lookup",
    type: "search"
}, async (message, match) => {
    let waiting = false;

    try {
        const number = String(match || "")
            .trim()
            .replace(/[\s()-]/g, "");

        if (!/^\+?\d{8,15}$/.test(number)) {
            return await message.reply(
                "*TRUECALLER LOOKUP*\n\n" +
                "Usage: *.true +911234567890*"
            );
        }

        try {
            await message.react("⏳");
            waiting = true;
        } catch (_) {}

        // Wait for API response.
        const { data } = await axios.get(
            "https://arooanonyapi.onrender.com/api/true",
            {
                params: { phone: number },
                timeout: 60000
            }
        );

        if (!data || data.success !== true) {
            throw new Error("API returned unsuccessful response");
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
            "*┃ ✈ TELEGRAM*",
            `┃ *Name:* ${tg.name || "Not available"}`,
            `┃ *Registered:* ${tg.registered ? "Yes" : "No"}`,
            `┃ *Premium:* ${tg.premium ? "Yes" : "No"}`,
            `┃ *Verified:* ${tg.verified ? "Yes" : "No"}`,
            "┃",
            "*╰━━━━━━━━━━━━━━━━━━━━╯*"
        ].join("\n");

        // Prefer the Truecaller image for the preview.
        const imageUrl = data.hasImage && data.imageUrl
            ? data.imageUrl
            : null;

        // Send result with WhatsApp channel link preview.
        await message.client.sendMessage(message.jid, {
            text: result,
            contextInfo: {
                externalAdReply: {
                    title: "Truecaller Information",
                    body: "Phone number lookup",
                    mediaType: 1,
                    sourceUrl: CHANNEL_URL,
                    ...(imageUrl ? { thumbnailUrl: imageUrl } : {})
                }
            }
        });

        // Send Telegram profile photo separately only when available.
        // This avoids embedding private profile photos in public lookups.
        if (tg.registered && tg.profile_photo) {
            // Profile image intentionally not redistributed.
        }

        if (waiting) {
            try {
                await message.react("✅");
            } catch (_) {}
        }

    } catch (error) {
        console.error("[TRUE LOOKUP ERROR]", error.message);

        if (waiting) {
            try {
                await message.react("❌");
            } catch (_) {}
        }

        await message.reply(
            "*Lookup failed.*\nPlease try again later."
        );
    }
});
