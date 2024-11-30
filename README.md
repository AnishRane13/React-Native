# Setting Up Tailwind CSS with NativeWind in an Expo Project

This guide explains how to set up Tailwind CSS using NativeWind in your Expo project.

## 1. Create a New Expo Project

To create a new Expo project, run the following command:

```bash
npx create-expo-app@latest --template blank
```

## 2. Start the Expo Project

To start your project with a tunnel, use the following command:

```bash
npx expo start --tunnel
```

## 3. Install Dependencies for Tailwind CSS

You'll need to install NativeWind along with its peer dependencies `tailwindcss`, `react-native-reanimated`, and `react-native-safe-area-context`.

### Installation Command

For Expo projects, use the following command:

```bash
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

For non-Expo projects, you will need to run `pod-install` to finish the installation of `react-native-reanimated`:

```bash
npx pod-install
```

## 4. Set Up Tailwind CSS

After installing the dependencies, you'll need to configure Tailwind CSS.

### Step 1: Initialize Tailwind CSS

Run the following command to create the `tailwind.config.js` file:

```bash
npx tailwindcss init
```

### Step 2: Configure Tailwind CSS Content

In the `tailwind.config.js` file, add the paths to all your component files:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 3: Create a Global CSS File

Create a `global.css` file and add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

From here onwards, make sure to replace `./global.css` with the relative path to the CSS file you just created.

## 5. Add Babel Preset

You will need to add the Babel preset configuration.

### For SDK 50+ or SDK 49:

Create or modify the `babel.config.js` file to include the following:
[If your project doesn't have babel file, create it]

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

## 6. Modify `metro.config.js`

If your project doesn't have a `metro.config.js` file, you can generate it using:

```bash
npx expo customize metro.config.js
```

In the `metro.config.js` file, add the following configuration:

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

## 7. Import Global CSS in `App.js`

Finally, import the `global.css` file in your `App.js`:

```javascript
import "./global.css";  // Adjust the path based on your file structure
```

### Conclusion

Now, you should have Tailwind CSS properly set up with NativeWind in your Expo project, allowing you to use Tailwind utility classes for styling your components.

## Example `App.js` Usage

Here is an example of how to use Tailwind styling in your `App.js`:

```javascript
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 bg-gray-900 items-center justify-center">
      <Text className="text-3xl text-blue-500 bg-red-600 p-4 rounded-lg shadow-lg">
        Open up App.js to start your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

### Key Points:

- **Tailwind setup** involves installing `nativewind`, `tailwindcss`, `react-native-reanimated`, and `react-native-safe-area-context`.
- **Babel** and **Metro** configuration steps are crucial for enabling Tailwind classes to work in React Native.
- The `global.css` file should contain the basic Tailwind directives, and you need to adjust your import paths as needed.

Now you can enjoy styling your Expo project using Tailwind CSS with the power of NativeWind!