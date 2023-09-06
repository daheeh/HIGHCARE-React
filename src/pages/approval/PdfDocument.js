import React from 'react';
import { Document, Page, pdf } from '@react-pdf/renderer';

const PdfDocument = ({ currentPage, data }) => {
  const pdfContent = (
    <Document>
      <Page>
        {React.cloneElement(currentPage, { data })}
      </Page>
    </Document>
  );

  const pdfBlob = pdf(pdfContent).toBlob();

  return pdfBlob;
};

export default PdfDocument;
