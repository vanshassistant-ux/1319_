import fs from 'fs';
for (const f of process.argv.slice(2)) {
  let h = fs.readFileSync(f,'utf8');
  const m = h.match(/<div[^>]*class="[^"]*chapter[^"]*"[\s\S]*?<\/div>\s*<\/div>/i);
  // fallback: take content within <main> or article
  let body = h;
  const art = h.match(/<div id="content"[\s\S]*?<footer/i) || h.match(/<article[\s\S]*?<\/article>/i);
  if (art) body = art[0];
  body = body.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ');
  body = body.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#8217;/g,"'").replace(/&#8211;/g,'-').replace(/&#8220;|&#8221;/g,'"').replace(/&rsquo;/g,"'");
  body = body.replace(/\s+/g,' ').trim();
  console.log("===== "+f+" =====");
  console.log(body.slice(0,9000));
  console.log("\n\n");
}
