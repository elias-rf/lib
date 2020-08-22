const path = require('path');
const fs = require('fs');

const fsp = fs.promises;

function replaceAll(txt, src, dest) {
  const rsp = txt.split(src);
  return rsp.join(dest);
}

function trimAll(txt) {
  let rsp = txt.replace(/^\\*/g, '');
  rsp = rsp.replace(/^\/*/g, '');
  return rsp;
}

function replaceBase(dir, base, root) {
  dir.forEach((it) => {
    it.path =
      root +
      '/' +
      trimAll(
        replaceAll(path.join(it.path.replace(base, ''), it.name), '\\', '/')
      );
    if (it.files) {
      it.files = replaceBase(it.files, base, root);
    } else {
      it.path = it.path + '.pdf';
    }
  });
  return dir;
}

async function listDirPdf(dir, base) {
  const rsp = [];
  const dirFormated = path.resolve(dir);
  const baseFormated = path.resolve(base);
  const files = await fsp.readdir(dirFormated, { withFileTypes: true });
  for (const it of files) {
    const aux = { name: it.name, path: dirFormated.replace(baseFormated, '') };

    if (it.isDirectory()) {
      const p = path.resolve(dirFormated, it.name);
      const d = await listDirPdf(p, base);
      if (d.length > 0) {
        aux.files = d;
        rsp.push(aux);
      }
    } else {
      if (path.extname(it.name) === '.pdf') {
        aux.name = path.basename(it.name, '.pdf');
        rsp.push(aux);
      }
    }
  }
  rsp.sort((a, b) => {
    if (a.files && b.files === undefined) {
      return -1;
    }
    if (a.files === undefined && b.files) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return rsp;
}
/**
 * Cria uma lista dos arquivos de path passado
 *
 * @param {string} dir Path que contem os arquivos
 * @param {string} baseUrl Url do servidor
 * @returns
 */
async function readDirPdf(dir, baseUrl) {
  const list = await listDirPdf(dir, dir);
  const rsp = replaceBase(list, dir, baseUrl);
  return rsp;
}

module.exports = readDirPdf;
