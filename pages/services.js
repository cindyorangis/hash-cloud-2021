import PDFViewer from '../components/PDFViewer';
import PDFJSBackend from '../backend/pdfjs';

export default function Services() {
  return <PDFViewer backend={PDFJSBackend} src="/docs/sample.pdf" />;
}
