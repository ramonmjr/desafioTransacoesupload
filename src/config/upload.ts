import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tempFolder = path.resolve(__dirname, '..', '..', 'tmp');
export default {
  directory: tempFolder,
  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const filehash = crypto.randomBytes(10).toString('hex');
      const filename = `${filehash}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};
