/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class Log {
  message(type: string, message: string) {
    console.log(`[${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()}] [${type}]: ${message}`);
  }

  info(message: string) {
    this.message('INFO', message);
  }

  success(message: string) {
    this.message('SUCCESS', message);
  }

  error(message: string) {
    this.message('ERROR', message);
  }
}

export default new Log();
