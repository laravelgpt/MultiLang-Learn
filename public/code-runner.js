self.onmessage = function (e) {
  const { code } = e.data;
  const oldLog = console.log;
  let output = '';
  console.log = function (...args) {
    output += args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        try {
            return JSON.stringify(arg, null, 2);
        } catch (e) {
            return '[Circular]';
        }
      }
      return String(arg);
    }).join(' ') + '\n';
  };

  try {
    new Function(code)();
    self.postMessage({ output });
  } catch (err) {
    self.postMessage({ error: { message: err.message, stack: err.stack } });
  } finally {
    console.log = oldLog;
  }
};
