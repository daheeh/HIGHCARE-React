import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const PdfDocument = ({ data }) => {
  return (
    <Document>
      <Page>
        <Text>{data.title}</Text>
        <Text>{data.contents1}</Text>
        <Text>{data.contents2}</Text>
        {/* Add more components to render as needed */}
      </Page>
    </Document>
  );
};

export default PdfDocument;
