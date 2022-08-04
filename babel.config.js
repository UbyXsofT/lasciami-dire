module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],

    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./src/"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@layout": "./src/layout",
            "@organizer": "./src/screens/organizer",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
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
