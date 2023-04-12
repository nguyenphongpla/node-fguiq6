// run `node index.js` in the terminal

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const test = async () => {
  // throw new Error('Test Error nè');
  return Promise.resolve('Test success');
};

const test1 = async () => {
  // throw new Error('Test 1');
  await delay(3000);
  return 'Test 1 success';
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
