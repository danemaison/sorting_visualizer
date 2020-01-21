let ops = 0;
let delay = 50;
const mergeSort = ([...arr]) => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  ops++;

  const positions = [];
  for (let i = 0; i < left.length; i++) {
    positions.push(left[i].left);
  }
  for (let i = 0; i < right.length; i++) {
    positions.push(right[i].left);
  }
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let counter = 0;
  while (leftIndex <= left.length && rightIndex <= right.length) {
    if (leftIndex === left.length && rightIndex === right.length) {
      break;
    } else if (leftIndex === left.length) {
      setTimeout(
        (arr, index, positions, counter) => {
          arr[index].ref.current.style.left = `${positions[counter] + 1}%`;
        },
        delay * ops,
        right,
        rightIndex,
        positions,
        counter
      );
      right[rightIndex].left = positions[counter];
      result.push(right[rightIndex]);
      rightIndex++;
    } else if (rightIndex === right.length) {
      setTimeout(
        (arr, index, positions, counter) => {
          arr[index].ref.current.style.left = `${positions[counter] + 1}%`;
        },
        delay * ops,
        left,
        leftIndex,
        positions,
        counter
      );
      left[leftIndex].left = positions[counter];
      result.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex].height < right[rightIndex].height) {
      setTimeout(
        (arr, index, positions, counter) => {
          arr[index].ref.current.style.left = `${positions[counter] + 1}%`;
        },
        delay * ops,
        left,
        leftIndex,
        positions,
        counter
      );
      left[leftIndex].left = positions[counter];
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      setTimeout(
        (arr, index, positions, counter) => {
          arr[index].ref.current.style.left = `${positions[counter] + 1}%`;
        },
        delay * ops,
        right,
        rightIndex,
        positions,
        counter
      );
      right[rightIndex].left = positions[counter];
      result.push(right[rightIndex]);
      rightIndex++;
    }

    counter++;
  }

  return result;
};

export { mergeSort };
