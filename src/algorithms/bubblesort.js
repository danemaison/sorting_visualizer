const bubbleSort = async ([...arr]) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].height > arr[i + 1].height) {
        await swap(arr, i);
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const swap = (arr, index) => {
  return new Promise(resolve =>
    setTimeout(() => {
      const temp = arr[index];
      const tempLeft = arr[index].ref.current.style.left;
      arr[index].ref.current.style.left = arr[index + 1].ref.current.style.left;
      arr[index + 1].ref.current.style.left = tempLeft;
      arr[index] = arr[index + 1];
      arr[index + 1] = temp;
      resolve();
    }, 0)
  );
};

export { bubbleSort };
