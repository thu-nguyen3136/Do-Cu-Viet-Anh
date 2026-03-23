const fs = require("fs");
const path = "e:/My Website/DoCuVietAnh/components/Header.js";
let content = fs.readFileSync(path, "utf8");

content = content.replace(
  /<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-brand-600 rounded shadow-lg flex-shrink-0 border-2 border-white">\s*<Image\s*src="\/logo-viet-anh\.png"\s*alt="Logo Việt Anh"\s*priority\s*\/>\s*<\/div>/,
  \`<div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded shadow-lg flex-shrink-0 border-2 border-brand-600 overflow-hidden">
              <Image
                src="/logo-viet-anh.png"
                alt="Logo Việt Anh"
                fill
                className="object-contain p-1 w-full h-full"
                sizes="(max-width: 768px) 48px, 64px"
                priority
              />
            </div>\`
);

fs.writeFileSync(path, content, "utf8");
console.log("Done");
