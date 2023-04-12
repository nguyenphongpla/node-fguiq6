// run `node index.js` in the terminal

const test = async () => {
  // throw new Error('Test Error nè');
  return Promise.resolve('Test success');
};

const test1 = async () => {
  // throw new Error('Test 1');
  setTimeout(() => {
    return Promise.resolve('Test 2 success');
  }, 3000);
};

const test2 = async () => {
  try {
    const rsTest1 = await test1();
    test().then((rs) => console.log('rs: ' + rs));

    [...Array(100).keys()].forEach((item) =>
      console.log('middle log: ' + item)
    );
    console.log(rsTest1);
  } catch (error) {
    console.log('test2' + error);
  }
};

test2();
