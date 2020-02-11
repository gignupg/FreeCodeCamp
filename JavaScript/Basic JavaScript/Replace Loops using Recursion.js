function sum(arr, n) {
    return !n ? arr[n] : arr[n] + sum(arr, n-1)
  }

sum([2,3,4], 2)