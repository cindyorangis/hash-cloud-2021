const pdfjsLib = require('pdfjs-dist');

export default class PDFJs {
  init = (source, element) => {
    const textNode = document.createElement('p');
    textNode.innerHTML = `Our PDF source will be: ${source}`;

    element.appendChild(textNode);

    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';

    element.appendChild(iframe);
  };
}
