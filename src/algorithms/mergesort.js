export default function (arr) {
  let ops = 0;
  let delay = 50;

  const setPosition = (arr, index, positions, counter) => {
    arr[index].ref.current.style.left = `${positions[counter] + 1}%`;
  };

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
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let counter = 0;

    left.forEach(item => {
      positions.push(item.left);
    });
    right.forEach(item => {
      positions.push(item.left);
    });

    while (leftIndex <= left.length && rightIndex <= right.length) {
      if (leftIndex === left.length && rightIndex === right.length) {
        break;
      } else if (leftIndex === left.length) {
        setTimeout(
          setPosition,
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
          setPosition,
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
          setPosition,
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
          setPosition,
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

  mergeSort(arr);
}
