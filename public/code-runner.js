self.onmessage = function(e) {
  const { code } = e.data;
  let capturedOutput = '';
  
  // Keep a reference to the original console.log
  const originalLog = self.console.log;
  
  self.console.log = (...args) => {
    capturedOutput += args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        try {
          // Handle circular references gracefully
          const cache = new Set();
          return JSON.stringify(arg, (key, value) => {
            if (typeof value === 'object' && value !== null) {
              if (cache.has(value)) {
                return '[Circular Reference]';
              }
              cache.add(value);
            }
            return value;
          }, 2);
        } catch (error) {
          return '[Unserializable Object]';
        }
      }
      return String(arg);
    }).join(' ') + '\n';
  };

  try {
    // Use the Function constructor to execute the code. It's safer than eval
    // because it doesn't have access to the local scope of the worker.
    new Function(code)();
    self.postMessage({ output: capturedOutput || "Code executed successfully with no output.", error: null });
  } catch (error) {
    self.postMessage({ output: null, error: error.message });
  } finally {
    // Restore the original console.log
    self.console.log = originalLog;
  }
};