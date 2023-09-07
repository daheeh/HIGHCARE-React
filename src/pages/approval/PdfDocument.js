import React, { forwardRef } from 'react';
import { Document, Page, pdf } from '@react-pdf/renderer';

const PdfDocument = forwardRef(({data },  currentPage) => {
  console.log(data);
  const pdfContent = (
    <Document>
      <Page>
        {React.cloneElement(currentPage, data )}
      </Page>
    </Document>
  );

  return pdfContent;
});

export default PdfDocument;
