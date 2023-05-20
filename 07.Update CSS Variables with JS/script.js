const inputs = document.querySelectorAll(".controls input");
console.log(inputs);

function handleUpdates() {
  //   console.log(this.value);

  /* Here we target the suffix of the data by the help of dataset which is present in the html data-sizing attributes and using "" as color dont have any suffix so for avoiding undefined we used empty Element */
  const suffix = this.dataset.sizing || "";
  // console.log(suffix);

  // console.log(this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((inputs) => inputs.addEventListener("change", handleUpdates));

inputs.forEach((inputs) => inputs.addEventListener("mousemove", handleUpdates));

/*
Note:-

>>documentElement:-

=> documentElement returns the element that is the root element of the document.
=> For any non-empty html document, documentElement will always be an <html> element.

>>setProperty:-

=> The setProperty() method sets a new or modifies an existing CSS property in a CSS declaration block.
=> setProperty(propertyName, value , priority)
*/
