# eslint-plugin-smile-ember

smile.io&#39;s eslint rules for ember apps

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-smile-ember`:

```
$ npm install eslint-plugin-smile-ember --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-smile-ember` globally.

## Usage

Add `smile-ember` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "smile-ember"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "smile-ember/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





