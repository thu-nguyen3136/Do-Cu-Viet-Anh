const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const targetFiles = [
  'thu-mua-ban-ghe-go.js',
  'thu-mua-do-go.js',
  'thu-mua-cua-cu-gia-cao.js',
  'thu-mua-cua-nhom.js',
  'thu-mua-cua-go.js',
  'thu-mua-cua-cuon.js',
  'thu-mua-cua-sat.js',
  'thu-mua-thiet-bi-ve-sinh.js',
  'thu-mua-ton-cu.js',
  'thu-mua-xac-nha-xuong.js',
  'thu-mua-tu-bep.js',
  'thu-mua-cong-nhom.js'
];

targetFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add Sidebar import if not exists
  if (!content.includes('import Sidebar')) {
    if (content.includes("import Link from 'next/link';")) {
      content = content.replace(/(import Link from 'next\/link';\n)/, "$1import Sidebar from '../components/Sidebar';\n");
    } else if (content.includes("import Head from 'next/head';")) {
      content = content.replace(/(import Head from 'next\/head';\n)/, "$1import Sidebar from '../components/Sidebar';\n");
    } else {
      content = "import Sidebar from '../components/Sidebar';\n" + content;
    }
  }

  // Find the exact block
  // The sidebar starts with <div className="w-full md:w-1/4 px-4 mt-8 md:mt-0"> 
  // and ends with </div> before </div> </main>
  
  // A safer manual block replacement:
  const startIndexComment = content.indexOf('{/* CỘT SIDEBAR (BÊN PHẢI');
  if (startIndexComment !== -1) {
    // Find the comment preceding it
    const startIdx = content.lastIndexOf('{/* =====', startIndexComment);
    if (startIdx !== -1) {
      // Find the end by looking for </main>
      const mainCloseIdx = content.indexOf('</main>', startIndexComment);
      if (mainCloseIdx !== -1) {
        // the last </div> before </main> is the flex container closing tag
        const lastDivBeforeMain = content.lastIndexOf('</div>', mainCloseIdx);
        // the one before that is the sidebar closing tag
        const sidebarCloseDiv = content.lastIndexOf('</div>', lastDivBeforeMain - 1);
        
        if (sidebarCloseDiv !== -1) {
          const newContent = content.slice(0, startIdx) +
            `{/* ========================================= */}\n` +
            `          {/* CỘT SIDEBAR (BÊN PHẢI - 3/12)             */}\n` +
            `          {/* ========================================= */}\n` +
            `          <Sidebar />\n` +
            `        ` +
            content.slice(lastDivBeforeMain); // keep the flex close div
            
          fs.writeFileSync(filePath, newContent, 'utf8');
          console.log(`Updated ${file}`);
          return;
        }
      }
    }
  }
  console.log(`Could not match pattern in ${file}`);
});
