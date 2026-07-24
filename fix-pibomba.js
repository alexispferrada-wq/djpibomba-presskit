const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// The new footer starts at <footer style="position:relative; z-index:100;... and ends at </footer>
const startIdx = content.indexOf('<footer style="position:relative; z-index:100; margin-top: 40px; width: 100%; padding: 0;">');
const endIdx = content.lastIndexOf('</footer>');

if (startIdx !== -1 && endIdx !== -1) {
    const newFooter = content.substring(startIdx, endIdx + 9);
    // Remove the new footer from the bottom of the body
    content = content.substring(0, startIdx) + content.substring(endIdx + 9);
    
    // Now replace the old empty placeholder with the new footer
    const oldFooterString = '<div id="tusitioya-global-footer"></div>';
    content = content.replace(oldFooterString, newFooter);
    
    fs.writeFileSync('index.html', content);
    console.log('Fixed djpibomba footer position');
} else {
    console.log('Could not find the new footer properly');
}
