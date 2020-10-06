module.exports = {
  extends: [
    "react-app", // create-react-app base settings
    "eslint:recommended", // recommended eslint rules
    "plugin:@typescript-eslint/recommended", // recommended typescript rules
    "prettier/@typescript-eslint", // disables typescript formatting rules
    "plugin:prettier/recommended", // disables eslint formatting rules and uses prettier (must be last)
  ],
  rules: {},
}

