import fs from 'fs';
import busboy from 'busboy'
import { Writable} from 'stream'



function WriteStremNew(path) {
    return new Writable({
        write(chunk, encoding, callback) {
            fs.appendFile(path, chunk, () => {
                callback();
            });
        }
    });
}

// export async function processVideo(response, path = './video.mp4') {
//         const bb = busboy({ headers: response.headers });
//         const fileStream = WriteStremNew(path); 
//         response.pipe(bb);
//         bb.on('file', (name, file, info) => {
//             const { filename, encoding, mimeType } = info;
//             if (filename.split('.').slice(-1)[0] != 'mp3') {
//                 throw new Error('Формат файла не mp4')
//             }
            
//             console.log(
//                 `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
//                 filename,
//                 encoding,
//                 mimeType
//             );
//             file.pipe(fileStream);
//         }).on('close', () => {
//             console.log('File downloading done');
//         }).on('error', (err) => {
//             throw err;
//         });
    
    
// }
export async function processVideo(response, path = './video.mp4') {
    return new Promise((resolve, reject) => {
        const bb = busboy({ headers: response.headers });
        const fileStream = WriteStremNew(path); 
        response.pipe(bb);
        bb.on('file', (name, file, info) => {
            const { filename, encoding, mimeType } = info;
            const fileSize = parseInt(response.headers['content-length'], 10)

            if (filename.split('.').slice(-1)[0] != 'mp4') {
                reject(new Error('Формат файла не mp4'));
            } else if (fileSize > 500 * 1024 * 1024) {
                reject(new Error('Файл слишком большой'));
            }
                else {
                console.log(
                    `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
                    filename,
                    encoding,
                    mimeType
                );
                file.pipe(fileStream);
            }
            
            
            
        }).on('close', () => {
            console.log('File downloading done');
            resolve();
        }).on('error', (err) => {
            reject(err);
        });
    });
}