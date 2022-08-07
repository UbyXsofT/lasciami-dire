module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],

    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./"],
          alias: {
            "@actions": "./app/actions",
            "@assets": "./app/assets",
            "@components": "./app/components",
            "@constants": "./app/constants",
            "@contexts": "./app/contexts",
            "@layout": "./app/layout",
            "@reducers": "./app/reducers",
            "@screens": "./app/screens",
            "@store": "./app/store",
            "@organizer": "./app/screens/organizer",
            "@theme": "./app/theme",
            "@utils": "./app/utils",
          },
          extensions: [
            ".js",
            ".jsx",
            ".tsx",
            ".ios.js",
            ".android.js",
            ".json",
            ".svg",
            ".png",
            ".jpg",
            ".otf",
          ],
        },
      ],
    ],
  };
};
