function hamming(a, b) {
  count = 0;
  for (x = 0; x < a.length; x++) {
    if (a[x] != b[x])
      count++;
  }
  return count;
}

hamming("I like turtles","I like turkeys")