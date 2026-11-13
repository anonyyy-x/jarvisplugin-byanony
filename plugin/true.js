
const { System, isPrivate } = require("../lib/");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

System({
    pattern: "true",
    fromMe: isPrivate,
    desc: "Check phone number information",
    type: "search"
}, async (message, match) => {
    try {
        const input = String(match || "").trim();

        if (!input) {
            return await message.reply(
                "*PHONE NUMBER CHECKER*\n\n" +
                "Usage: *.true +919544445327*"
            );
        }

        const phone = parsePhoneNumberFromString(input);

        if (!phone || !phone.isValid()) {
            return await message.reply("*Invalid phone number.*");
        }

        const countryNames = new Intl.DisplayNames(
            ["en"],
            { type: "region" }
        );

        const country = countryNames.of(phone.country) || "Unknown";

        const result = [
            "*╭━━〔 PHONE INFORMATION 〕━━╮*",
            "┃",
            `┃ *Number:* ${phone.number}`,
            `┃ *Country:* ${country}`,
            `┃ *Country Code:* ${phone.country}`,
            `┃ *Calling Code:* +${phone.countryCallingCode}`,
            `┃ *National Format:* ${phone.formatNational()}`,
            `┃ *International:* ${phone.formatInternational()}`,
            `┃ *Valid:* Yes`,
            "┃",
            "*╰━━━━━━━━━━━━━━━━━━━━╯*"
        ].join("\n");

        await message.reply(result);

    } catch (error) {
        console.error("[TRUE ERROR]", error);
        await message.reply("*Unable to check this number.*");
    }
});
