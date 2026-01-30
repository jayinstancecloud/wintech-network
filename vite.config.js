import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'crab-roulette': './crab-roulette.html',
        'penguin-plunge': './penguin-plunge.html',
        'roach-roulette': './roach-roulette.html',
        'rodeo': './rodeo.html',
        'upndown-golf': './upndown-golf.html',
        'instant-win-football': './instant-win-football.html',
        'goal-premier': './goal-premier.html',
        'soccer-stars': './soccer-stars.html',
        'virtual-basketball': './virtual-basketball.html',
        'virtual-cricket': './virtual-cricket.html',
      },
    },
    outDir: 'dist',
  },
  plugins: [
    {
      name: 'copy-images-folder',
      closeBundle() {
        if (existsSync('images')) {
          copyDir('images', 'dist/images');
        }
      },
    },
  ],
});
