export default class PDFJs {
  init = (source, element) => {
    const textNode = document.createElement('p');
    textNode.innerHTML = `Our PDF source will be: ${source}`;

    element.appendChild(textNode);
  };
}
