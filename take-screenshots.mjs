import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const projects = [
  { id: 'project1', url: 'https://deepfake-detection-system-eight.vercel.app/' },
  { id: 'project2', url: 'https://nexcart-e-commerce-platform-production.up.railway.app/shop/' },
  // skipping project3 since it doesn't have a live link
  { id: 'project4', url: 'https://www.februarysfavourite.com/' }
];

const outDir = path.join(process.cwd(), 'public', 'projects');

async function run() {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: "new" });
  
  for (const proj of projects) {
    console.log(`Processing ${proj.id}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    
    try {
      await page.goto(proj.url, { waitUntil: 'networkidle2', timeout: 60000 });
      
      // Top screenshot
      await page.screenshot({ path: path.join(outDir, `${proj.id}-1.png`) });
      
      // Scroll down for second screenshot
      await page.evaluate(() => window.scrollBy(0, 1000));
      await new Promise(r => setTimeout(r, 1500)); // wait for animations
      await page.screenshot({ path: path.join(outDir, `${proj.id}-2.png`) });
      
      // Scroll down for third screenshot
      await page.evaluate(() => window.scrollBy(0, 1500));
      await new Promise(r => setTimeout(r, 1500));
      await page.screenshot({ path: path.join(outDir, `${proj.id}-3.png`) });
      
    } catch (error) {
      console.error(`Error on ${proj.id}:`, error.message);
    }
    
    await page.close();
  }
  
  await browser.close();
  console.log("Done.");
}

run();
