# Node.js Server Crash on Client Abort

This repository demonstrates a bug in a Node.js HTTP server where the server crashes when a client aborts a request during a long-running operation.  The issue arises because the server attempts to write to a closed connection after the client has aborted.

## Bug Description
The provided `bug.js` file contains a simple HTTP server that simulates a long-running operation (5-second delay). If a client aborts the request before the operation completes, the server will crash.

## Solution
The `bugSolution.js` file demonstrates a solution that prevents the crash by checking if the request has been aborted before writing the response.  This is crucial for handling scenarios where a client might disconnect unexpectedly.