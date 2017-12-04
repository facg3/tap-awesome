# tap-awesome
##### This is by far the most awesome testing package there exists. Yes, I'm serious.

### What are test output formatters:
A test output formatter is a program that when you pipe the results of your tests into, will read the results of those tests and provide you with useful information about them e.g. `tap-spec`, and our awesome formatter, `tap-awesome`.

### What we did:
We have created our own test output formatter which you can use to display your tests with a beautiful style in your terminal while using `tape`.

### How we did it:
We studied carefully a core module in Node called `child_process`, then we collected the output of `tape` tests, manipulated them, gave them our own styling and tested everything manually.

### How to use `tap-awesome`:
Simply, open the terminal, navigate to your project's folder & where your test files are located, type:
``` npm install tape --save-dev ```
then, type in your termnial:
``` touch tap-awesome.js ```
then, add this code inside the file you created:

[awesome-tap.js](https://github.com/facg3/tap-awesome/blob/master/tap-awesome.js)
run this command to preview your tests:
```
node tap-awesome.js
```


### SOON ON NPM!!!
