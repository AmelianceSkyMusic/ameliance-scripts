import React from 'react';

export function splitTextByBr(text: string): React.ReactNode {
   return text.split('\n').map((textLine, i) => (
      <React.Fragment key={i}>
         {textLine}
         <br />
      </React.Fragment>
   ));
}
