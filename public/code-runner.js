
self.onmessage = function(e) {
  const { code } = e.data;
  let capturedOutput = '';
  const originalLog = console.log;

  console.log = (...args) => {
    capturedOutput += args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
            try {
                // Pretty-print objects
                return JSON.stringify(arg, null, 2);
            } catch (e) {
                return '[Unserializable Object]';
            }
        }
        return String(arg);
    }).join(' ') + '\n';
  };

  try {
    eval(code);
    self.postMessage({ output: capturedOutput });
  } catch (error) {
    self.postMessage({ error: error.message });
  } finally {
    console.log = originalLog;
  }
};
