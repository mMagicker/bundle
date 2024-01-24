const { SyncHook } =  require('tapable')

class Compiler {
  constructor(webpackOptions) {
    this.options = webpackOptions

    this.hook = {
      run: new SyncHook(),
      done: new SyncHook();
    }
  }

  run(callback) {}
}

function webpack(webpackOptions) {
  const compiler = new Compiler(webpackOptions);
  return compiler;
}
