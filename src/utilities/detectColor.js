const detectColor = (cat, func) => {
  switch (cat) {
    case "House":
      func("gray.500");
      break;
    case "Work":
      func("red.500");
      break;
    case "Family":
      func("orange.500");
      break;
    case "Sports":
      func("blue.500");
      break;
    case "Studies":
      func("green.500");
      break;
    default:
      func("");
  }
};

export default detectColor;
