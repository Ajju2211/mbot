module.exports.requireAll = (dirPath) => {
  const modules = require("require-dir-all")("../" + dirPath);
  let targetModule = {};
  let keys = Object.keys(modules);
  for (let i = 0; i < keys.length; i++) {
    Object.assign(targetModule, modules[keys[i]]);
  }
  return targetModule;
};

module.exports.renameKeys = (keysMap, obj) => {
  /**
   * Takes oldkeys,newkeys keyvalue pairs as keysMap,obj
   * to be changed
   */
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
};
/*
usage example
oldKey:NewKey in keysMap
keysMap = {
    name: 'firstName',
    job: 'passion'
  };
  
  obj = {
    name: 'AZHAR',
    job: 'DEV'
  };
*/

module.exports.generateBackgroundColors = (numOfColors) => {
  const COLORS = [
    "#f44336",
    "#2196f3",
    "#e91e63",
    "#ffeb3b",
    "#fb8c00",
    "#64dd17",
    "#757575",
    "#18ffff",
    "#9e9d24",
    "#ab47bc ",
  ];
  let result = [];
  let i = 0;
  while (result.length != numOfColors) {
    if (i > COLORS.length - 1) {
      i = 0;
    }
    result.push(COLORS[i]);
    i++;
  }
  return result;
};
