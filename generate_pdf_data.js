const fs = require('fs');
const path = require('path');

const units = [
    { num: 1, dir: 'lecture/unit-1', out: 'lecture/unit1_data.js', varName: 'UNIT1_PDF_DATA' },
    { num: 2, dir: 'lecture/unit-2', out: 'lecture/unit2_data.js', varName: 'UNIT2_PDF_DATA' },
    { num: 3, dir: 'lecture/unit-3', out: 'lecture/unit3_data.js', varName: 'UNIT3_PDF_DATA' },
    { num: 4, dir: 'lecture/unit-4', out: 'lecture/unit4_data.js', varName: 'UNIT4_PDF_DATA' }
];

let defaultBase64 = '';

units.forEach(u => {
    const files = fs.readdirSync(u.dir).filter(f => f.endsWith('.pdf'));
    let outContent = `window.ALL_PDF_DATA = window.ALL_PDF_DATA || {};\nwindow.${u.varName} = window.${u.varName} || {};\n`;
    
    files.forEach(f => {
        const fullPath = path.join(u.dir, f);
        const buf = fs.readFileSync(fullPath);
        const b64 = buf.toString('base64');
        outContent += `window.${u.varName}['${f}'] = '${b64}';\n`;
        outContent += `window.ALL_PDF_DATA['${f}'] = window.${u.varName}['${f}'];\n`;
        
        if (f === '1.1.0-Introduction.pdf') {
            defaultBase64 = b64;
        }
    });

    fs.writeFileSync(u.out, outContent, 'utf8');
    const stats = fs.statSync(u.out);
    console.log(`Generated ${u.out}: ${files.length} files, ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
});

// Write pdfData.js
const pdfDataContent = `window.DEFAULT_PDF_BASE64 = '${defaultBase64}';\n`;
fs.writeFileSync('lecture/pdfData.js', pdfDataContent, 'utf8');
console.log(`Generated lecture/pdfData.js: ${(fs.statSync('lecture/pdfData.js').size / 1024 / 1024).toFixed(2)} MB`);
