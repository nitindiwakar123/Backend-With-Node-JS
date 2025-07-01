// Important Response Headers

//     1. Content-Length is a header which tells how much bytes of data we want to send.

//     2. Content-type tells what type of content we are sending from server to browser.
//     Eg.
//     socket.write("Content-type: text/txt; charset=utf-8");

//     Based on this browser decides what to preview on screen

//     3. Content-Disposition: attachment
//     tells the browser that server is sending some attachment for downloading

//     We can also give extra property by seperating it with (;) semicolon.
//     Eg. 
//     Content-Disposition: attachment; filename=hello.pdf

//     attachment -> Download
//     inline -> Preview