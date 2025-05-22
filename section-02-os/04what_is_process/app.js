// CPU (Central Processing Unit)
// The CPU is the "brain" of a computer, responsible for executing instructions from software and performing calculations. It processes data, runs programs, and manages system operations.

// Processor
// A processor is another term for the CPU. It refers to the actual chip inside a computer that processes data. The terms CPU and processor are often used interchangeably.

// Core
// A core is an individual processing unit inside a CPU.
// Single-core CPU: Can handle one task at a time.
// Multi-core CPU (dual-core, quad-core, etc.): Can handle multiple tasks simultaneously, improving performance.

// OS (Operating System)
// An Operating System (OS) is system software that manages computer hardware and software resources and provides a user interface. It acts as a bridge between the user and the hardware.

// Kernel
// The kernel is the core part of an operating system. It directly interacts with the hardware and manages system resources. It loads first when the OS starts and runs in the background.

// What Is a Process?
// A process is a program in execution. When you open an application (e.g., a browser, text editor, or game), the operating system creates a process to run that program.

// Process Lifecycle (States of a Process)
// A process goes through different states during execution:
// 1️⃣ New → Process is created but not running yet.
// 2️⃣ Ready → Process is waiting for CPU time.
// 3️⃣ Running → Process is actively executing on the CPU.
// 4️⃣ Waiting → Process is paused, waiting for I/O (e.g., reading a file).
// 5️⃣ Terminated → Process is finished or killed.

// What is Context Switching?
// Context Switching is the process of saving the state of a running process and loading the state of another process so that multiple processes can share the CPU efficiently.

// It happens when the CPU switches from one process (or thread) to another, ensuring multitasking and efficient CPU utilization.

// We can access node js process in our code
const a = process;
console.log(a);
