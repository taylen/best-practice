var g = {
  v: 1
};

switch (g.v) {
  case 0:
    g.a = 0;
    break;
  case 1:
    g.a = 1;
    break;
}

console.log(g.a);


for (key in g) {
  if (g.hasOwnProperty(key)) {
    // do sth
  }
}