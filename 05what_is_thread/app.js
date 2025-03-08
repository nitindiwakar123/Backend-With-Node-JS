// What is a Thread?
// A thread is the smallest unit of execution within a process. It shares the same memory and resources as other threads within the same process, making it lightweight and efficient.
// Example: In a web browser, each tab can be a separate thread running within the same browser process. 

//Differnce between process and thread.
// Feature	     |      Process	          |             Thread                          
// Definition    | A program in execution |	a unit of execution inside a process
// Memory        | own memory space       | Threads share memory within the same process
// Creation Speed| Slow (more overhead)	  | Fast (less overhead)
// Dependency	 | Independent execution  | Dependent on the process

//When we run these 3 loops in a single file, the node js run these three loops in a single thread which takes a lot of time.
// console.time();
// for (let i = 0; i < 1000000000; i++) {
//     if(i % 400000000 == 0) {
//         console.log("running loop 1 ", i);
//     }
// }
// for (let i = 0; i < 1000000000; i++) {
//     if(i % 400000000 == 0) {
//         console.log("running loop 1 ", i);
//     }
// }
// for (let i = 0; i < 1000000000; i++) {
//     if(i % 400000000 == 0) {
//         console.log("running loop 1 ", i);
//     }
// }
// console.timeEnd();

//but when we create a separate file for each loop, node js allow us to create a new thread for each file
//in node js the name of thread is worker 
const { Worker } = require("worker_threads");

new Worker("./a");
new Worker("./b");
new Worker("./c");

//When we run this code node js create a new thread for each file and when we observe node js in system informer while running this code we can see increased number of threads and and high cpu usage percentage but it take short execution time than running these loops in a single thread.

// What is Concurrency in OS?
// Concurrency in an Operating System means multiple processes or threads are making progress at the same time. It enables a system to handle multiple tasks efficiently by switching between them rapidly.

// Example: A web browser downloads a file, plays a video, and runs JavaScript on a webpage at the same time.

// Parallelism
// True simultaneous execution of multiple threads on multiple CPU cores.
// A single process has multiple threads executing concurrently.
// Threads share the same memory but execute different parts of a task.
// Example: A web browser running multiple tabs simultaneously.

// Can a Process Exist Without a Thread?
// Yes, but only in a special state (e.g., just created but not yet scheduled).
// No, if it needs to execute any instructions.

// Why Does a Process Need at Least One Thread?
// The CPU executes only threads, not processes directly.
// If a process has no threads, there is no code to run.
// By default, every process is assigned at least one main thread (also called the primary thread).