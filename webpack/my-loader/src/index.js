const loader = function loader(source) {
  console.log("loader");
  return source;
};

// 增加pitch方法, 打印pitch
loader.pitch = function pitch() {
  console.log("pitch");
  return "pitch";
};

export default loader;
