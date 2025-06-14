// Why Streams Are Fast in Node.js

/*
Key Reasons:
1. Single file open - Stream opens once; appendFileSync opens/closes every time.
2. Buffered writes - Stream writes to memory first, then flushes in batches.
3. Non-blocking - Streams don’t wait for disk operations; sync methods do.
4. Better performance - Less time, CPU, and disk usage.

Comparison Table:

| Feature                | fs.appendFileSync           | fs.createWriteStream       |
|------------------------|-----------------------------|-----------------------------|
| File Handling          | Opens/closes every time     | Opens once, stays open      |
| Buffering              | No                          | Yes (internal buffer)       |
| Blocking               | Yes                         | No                          |
| Performance (100k nums)| ~40 seconds                 | ~1 second                   |
| CPU Usage              | High (waiting on disk)      | Low (async writes)          |
| Disk I/O Calls         | 100,000                     | Few (batched writes)        |
*/