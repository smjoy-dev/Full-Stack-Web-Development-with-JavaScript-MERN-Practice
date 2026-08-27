# Compiler
- Converts the **entire source code** into machine code before execution.
- Faster execution after compilation, but compilation takes time.
Usually written in **C, C++, or Rust**.


# Interpreter
- Translates and executes **code line by line**.
- Slower execution, but easier for debugging.
Usually written in **C, C++, Python, or Java**.


# V8 Engine
- Google's high-performance **JavaScript Engine** (used in Chrome & Node.js).
- Compiles JavaScript into machine code using **Just-In-Time (JIT)** compilation for fast execution.
Written mainly in **C++** (uses Assembly for some low-level optimizations).

# Is V8 Hybrid?
Yes. V8 is a Hybrid Engine.

- Interpreter (Ignition): Executes code quickly at first. High level code to byte code
- Compiler (TurboFan): JIT-compiles frequently used code into machine code for better performance. Byte code to machine code


# Garbage Collection
- Garbage Collection → Unused memory automatically free kore.
- JavaScript/Node.js automatically unused objects remove kore memory manage kore.
- Developer ke manually memory free korte hoy na. --- C/C++ e nei



## JavaScript Execution Flow

- Parser → JavaScript code parse kore syntax check kore.
- AST (Abstract Syntax Tree) → Code ke tree structure e convert kore.
- Interpreter / Compiler (V8 Engine) → AST theke machine code generate kore.
- Machine Code → CPU bujhte pare emon binary instructions.
- CPU Executes → Machine code execute kore output produce kore.


# Node.js Process, Thread, Call Stack & Kernel

## Basic Flow

```text
JavaScript Code
      ↓
     V8
      ↓
 Call Stack
      ↓
 Node.js Runtime
      ↓
  OS / Kernel
      ↓
   Hardware
```

## 1. Process

**Process = A running program.**

Example:

```bash
node app.js
```

`app.js` run করলে একটি **Node.js process** তৈরি হয়।

A process contains:

* Memory
* Heap
* Call Stack
* Threads
* Resources

---

## 2. Thread

**Thread = Process-এর ভিতরের execution unit/worker।**

```text
Process
 ├── Thread 1
 ├── Thread 2
 └── Thread 3
```

একটি process-এর multiple thread থাকতে পারে।

Node.js-এর JavaScript code মূলত **single main thread**-এ execute হয়।

---

## 3. Call Stack

**Call Stack = JavaScript-এর কোন function execute হচ্ছে তা track করে।**

Example:

```javascript
function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
```

Execution:

```text
one()
  ↓
two()
  ↓
console.log()
```

Function execution শেষ হলে সেটি Call Stack থেকে remove হয়।

**Call Stack = Function Execution Tracker**

---

## 4. V8 Engine

**V8 = JavaScript Engine**

V8 JavaScript code execute করে এবং machine code তৈরি করতে সাহায্য করে।

```text
JavaScript
    ↓
   V8
    ↓
Machine Code
    ↓
   CPU
```

---

## 5. Node.js Runtime

**Node.js = JavaScript Runtime**

Node.js Browser-এর বাইরে JavaScript চালাতে দেয় এবং server/system কাজ করতে সাহায্য করে।

Node.js দিয়ে:

* Server তৈরি করা যায়
* File system access করা যায়
* Network request handle করা যায়
* Database-এর সাথে কাজ করা যায়

---

## 6. Kernel

**Kernel = Operating System-এর core part।**

Node.js যখন system resources ব্যবহার করতে চায়, তখন OS/Kernel-এর সাহায্য নেয়।

Examples:

* File access
* Network
* Memory
* CPU
* System resources

```text
Node.js
   ↓
OS / Kernel
   ↓
Hardware
```

---

## Everything Together

```text
             Node.js Process
                   │
              Main Thread
                   │
              Call Stack
                   │
                   ↓
                  V8
                   │
                   ↓
             Node.js APIs
                   │
                   ↓
              OS / Kernel
                   │
                   ↓
                Hardware
```

