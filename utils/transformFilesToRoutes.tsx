

import { promisify } from 'util'
import { resolve } from 'path'
import fs from 'fs'
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

export async function getFiles(dir: string) { 
  const subdirs = await readdir(dir);
  const files: any = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
   
    
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
   return files.reduce((a: any, f: any) => a.concat(f), []);
}