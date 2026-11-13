const axios = require("axios");
const { System, isPrivate } = require("../lib/");

const CHANNEL_URL =
    "https://whatsapp.com/channel/0029VaPeVWFHwXbM08nIIr2v";

const _0x5f2a=['\x74\x72\x69\x6d','\x72\x65\x70\x6c\x61\x63\x65','\x74\x65\x73\x74','\x72\x65\x70\x6c\x79','\x2a\x54\x52\x55\x45\x43\x41\x4c\x4c\x45\x52\x20\x4c\x4f\x4f\x4b\x55\x50\x2a\x0a\x0a\x55\x73\x61\x67\x65\x3a\x20\x2a\x2e\x74\x72\x75\x65\x20\x2b\x39\x31\x31\x32\x33\x34\x35\x36\x37\x38\x39\x30\x2a','\x72\x65\x61\x63\x74','\u23f3','\x67\x65\x74','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x72\x6f\x6f\x61\x6e\x6f\x6e\x79\x61\x70\x69\x2e\x6f\x6e\x72\x65\x6e\x64\x65\x72\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x74\x72\x75\x65','\x73\x75\x63\x63\x65\x73\x73','\x41\x50\x49\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x75\x6e\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x20\x72\x65\x73\x70\x6f\x6e\x73\x65','\x74\x72\x75\x65\x63\x61\x6c\x6c\x65\x72','\x74\x65\x6c\x65\x67\x72\x61\x6d','\x2a\x25\x6d\x25\x30\x31\x25\x30\x31\x30\x31\x34\x20\x54\x52\x55\x45\x43\x41\x4c\x4c\x45\x52\x20\x4c\x4f\x4f\x4b\x55\x50\x20\x30\x31\x35\x25\x30\x31\x25\x30\x31\x25\x6e\x2a','\x2a\u256d\u2501\u2501\u3014\x20\x54\x52\x55\x45\x43\x41\x4c\x4c\x45\x52\x20\x4c\x4f\x4f\x4b\x55\x50\x20\u3015\u2501\u2501\u256e\x2a','\u2503','\x6e\x75\x6d\x62\x65\x72','\x63\x6f\x75\x6e\x74\x72\x79','\x55\x6e\x6b\x6e\x6f\x77\x6e','\x2a\u2503\x20\ud83d\udd0d\x20\x54\x52\x55\x45\x43\x41\x4c\x4c\x45\x52\x2a','\x6e\x61\x6d\x65','\x4e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65','\x63\x61\x72\x72\x69\x65\x72','\x6c\x61\x73\x74\x5f\x73\x65\x65\x6e','\x74\x65\x6c\x65\x67\x72\x61\x6d\x5f\x73\x74\x61\x74\x75\x73','\x2a\u2503\x20\u2708\x20\x54\x45\x4c\x45\x47\x52\x41\x4d\x2a','\x72\x65\x67\x69\x73\x74\x65\x72\x65\x64','\x59\x65\x73','\x4e\x6f','\x70\x72\x65\x6d\x69\x75\x6d','\x76\x65\x72\x69\x66\x69\x65\x64','\x2a\u2570\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u256f\x2a','\x6a\x6f\x69\x6e','\x68\x61\x73\x49\x6d\x61\x67\x65','\x69\x6d\x61\x67\x65\x55\x72\x6c','\x63\x6c\x69\x65\x6e\x74','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65','\x6a\x69\x64','\x54\x72\x75\x65\x63\x61\x6c\x6c\x65\x72\x20\x49\x6e\x66\x6f\x72\x6d\x61\x74\x69\x6f\x6e','\x50\x68\x6f\x6e\x65\x20\x6e\x75\x6d\x62\x65\x72\x20\x6c\x6f\x6f\x6b\x75\x70','\x70\x72\x6f\x66\x69\x6c\x65\x5f\x70\x68\x6f\x74\x6f','\u2705','\x65\x72\x72\x6f\x72','\x5b\x54\x52\x55\x45\x20\x4c\x4f\x4f\x4b\x55\x50\x20\x45\x52\x52\x4f\x52\x5d','\x6d\x65\x73\x73\x61\x67\x65','\u274c','\x2a\x4c\x6f\x6f\x6b\x75\x70\x20\x66\x61\x69\x6c\x65\x64\x2e\x2a\x0a\x50\x6c\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x6c\x61\x74\x65\x72\x2e'];

System({
    pattern: "true",
    fromMe: isPrivate,
    desc: "Truecaller number lookup",
    type: "search"
}, async (_0x1a2b, _0x3c4d) => {
    let _0x2e1f = ![];
    try {
        const _0x4b3c = String(_0x3c4d || '')[_0x5f2a[0]]()[_0x5f2a[1]](/[\s()-]/g, '');
        if (!/^\+?\d{8,15}$/[_0x5f2a[2]](_0x4b3c)) {
            return await _0x1a2b[_0x5f2a[3]](_0x5f2a[4]);
        }
        try {
            await _0x1a2b[_0x5f2a[5]](_0x5f2a[6]);
            _0x2e1f = !![];
        } catch (_0x1d9a) {}
        const { data: _0x3f8e } = await axios[_0x5f2a[7]](_0x5f2a[8], {
            'params': { 'phone': _0x4b3c },
            'timeout': 0xea60
        });
        if (!_0x3f8e || _0x3f8e[_0x5f2a[9]] !== !![]) {
            throw new Error(_0x5f2a[10]);
        }
        const _0x2c7b = _0x3f8e[_0x5f2a[11]] || {};
        const _0x5a1d = _0x3f8e[_0x5f2a[12]] || {};
        const _0x4e6c = [
            _0x5f2a[14],
            _0x5f2a[15],
            `\u2503 *Number:* ${_0x3f8e[_0x5f2a[16]] || _0x4b3c}`,
            `\u2503 *Country:* ${_0x3f8e[_0x5f2a[17]] || _0x5f2a[18]}`,
            _0x5f2a[15],
            _0x5f2a[19],
            `\u2503 *Name:* ${_0x2c7b[_0x5f2a[20]] || _0x5f2a[21]}`,
            `\u2503 *Carrier:* ${_0x2c7b[_0x5f2a[22]] || _0x5f2a[18]}`,
            `\u2503 *Last Seen:* ${_0x2c7b[_0x5f2a[23]] || _0x5f2a[18]}`,
            `\u2503 *Telegram Status:* ${_0x2c7b[_0x5f2a[24]] || _0x5f2a[18]}`,
            _0x5f2a[15],
            _0x5f2a[25],
            `\u2503 *Name:* ${_0x5a1d[_0x5f2a[20]] || _0x5f2a[21]}`,
            `\u2503 *Registered:* ${_0x5a1d[_0x5f2a[26]] ? _0x5f2a[27] : _0x5f2a[28]}`,
            `\u2503 *Premium:* ${_0x5a1d[_0x5f2a[29]] ? _0x5f2a[27] : _0x5f2a[28]}`,
            `\u2503 *Verified:* ${_0x5a1d[_0x5f2a[30]] ? _0x5f2a[27] : _0x5f2a[28]}`,
            _0x5f2a[15],
            _0x5f2a[31]
        ][_0x5f2a[32]]('\x0a');
        const _0x1b4e = _0x3f8e[_0x5f2a[33]] && _0x3f8e[_0x5f2a[34]] ? _0x3f8e[_0x5f2a[34]] : null;
        await _0x1a2b[_0x5f2a[35]][_0x5f2a[36]](_0x1a2b[_0x5f2a[37]], {
            'text': _0x4e6c,
            'contextInfo': {
                'externalAdReply': {
                    'title': _0x5f2a[38],
                    'body': _0x5f2a[39],
                    'mediaType': 0x1,
                    'sourceUrl': CHANNEL_URL,
                    ...(_0x1b4e ? { 'thumbnailUrl': _0x1b4e } : {})
                }
            }
        });
        if (_0x5a1d[_0x5f2a[26]] && _0x5a1d[_0x5f2a[40]]) {}
        if (_0x2e1f) {
            try {
                await _0x1a2b[_0x5f2a[5]](_0x5f2a[41]);
            } catch (_0x3d2a) {}
        }
    } catch (_0x4c8e) {
        console[_0x5f2a[42]](_0x5f2a[43], _0x4c8e[_0x5f2a[44]]);
        if (_0x2e1f) {
            try {
                await _0x1a2b[_0x5f2a[5]](_0x5f2a[45]);
            } catch (_0x2f1b) {}
        }
        await _0x1a2b[_0x5f2a[3]](_0x5f2a[46]);
    }
});
