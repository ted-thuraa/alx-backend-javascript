/*  export default function appendToEachArrayValue(array, appendString) {
      for (var idx in array) {
        var value = array[idx];
        array[idx] = appendString + value;
      }
    
      return array;
    }
*/

// To

  export default function appendToEachArrayValue(array, appendString) {
    const array2 = [];
    for (const id of array) {
      array2.push(appendString + array[array.indexOf(id)]);
    }
    return array2;
  }