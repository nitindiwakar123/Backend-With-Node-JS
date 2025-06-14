import fs from "node:fs";
import { Buffer } from "node:buffer";
import EventEmitter from "node:events";

function createCustomWriteStream(path) {
    class CustomWriteStream extends EventEmitter{
        constructor(fd, path, flag) {
            super();
            this.fd = fd;
            this.path = path;
            this.flag = flag;
            this.higherWatermark = 16384;
            this.totalBytesWrite = 0;
            this.internalBuffer = Buffer.allocUnsafe(this.higherWatermark);
            this.data = "";
            this.addListener('end', () => {
                fs.writeSync(this.fd, this.internalBuffer.subarray(0, this.totalBytesWrite));
                fs.closeSync(this.fd);
            });
        }

        write(str) {
            this.data = this.data + str;
            const bytesWrite = this.internalBuffer.write(this.data, this.totalBytesWrite);
            const remaining = Math.abs(bytesWrite - this.data.length);
            // console.log(bytesWrite);
            if(remaining > 0) {
                this.data = this.data.slice(-remaining);
            } else {
                this.data = "";
            }

            this.totalBytesWrite = this.totalBytesWrite + bytesWrite;
            if (this.totalBytesWrite == this.internalBuffer.byteLength) {

                fs.writeSync(this.fd, this.internalBuffer);
                this.totalBytesWrite = 0;
                this.internalBuffer = Buffer.allocUnsafe(this.higherWatermark);

            }
        }

        end() {
            this.emit('end');
        }

    }
    const fd = fs.openSync(path, 'w');

    const customWriteStream = new CustomWriteStream(fd, path, 'w');
    
    return customWriteStream;
}

export default createCustomWriteStream;