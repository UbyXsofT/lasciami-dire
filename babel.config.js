module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],

    // plugins: [
    //   [
    //     require.resolve("babel-plugin-module-resolver"),
    //     {
    //       root: ["./app/"],
    //       alias: {
    //         "Uactions": "./app/actions",
    //         "./app/assets": "./app/assets",
    //         "./app/components": "./app/components",
    //         "./app/constants": "./app/constants",
    //         "./app/contexts": "./app/contexts",
    //         "./app/layout": "./app/layout",
    //         "./app/reducers": "./app/reducers",
    //         "./app/screens": "./app/screens",
    //         "./app/store": "./app/store",
    //         "./app/screens/organizer": "./app/screens/organizer",
    //         "./app/theme": "./app/theme",
    //         "./app/utils": "./app/utils",
    //       },
    //       extensions: [
    //         ".js",
    //         ".jsx",
    //         ".tsx",
    //         ".ios.js",
    //         ".android.js",
    //         ".json",
    //         ".svg",
    //         ".png",
    //         ".jpg",
    //         ".otf",
    //         ".txt",
    //       ],
    //     },
    //   ],
    // ],
  };
};
