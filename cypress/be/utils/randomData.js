export const generateRandomNumeric = (length) => {
    const possible = '0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
        let char = possible.charAt(Math.floor(Math.random() * possible.length));
        if (i === 0 && char === '0') {
            while (char === '0') {
                char = possible.charAt(Math.floor(Math.random() * possible.length));
            }
        }
        text += char;
    }
    return Number(text);
}