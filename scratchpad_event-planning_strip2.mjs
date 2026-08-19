import fs from 'fs';
let h = fs.readFileSync(process.argv[2],'utf8');
h = h.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<head[\s\S]*?<\/head>/gi,' ').replace(/<nav[\s\S]*?<\/nav>/gi,' ');
h = h.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#8217;|&rsquo;/g,"'").replace(/&#8211;|&#8212;/g,'-').replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g,'"');
h = h.replace(/\s+/g,' ').trim();
// find the chapter start marker
const idx = h.search(/Managing and Planning Events/i);
console.log(h.slice(idx>0?idx:0, (idx>0?idx:0)+9000));
