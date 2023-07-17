import React from "react";

interface CartProps {
  width: string;
  color: string;
  isFull: boolean;
}

const CartIcon: React.FC<CartProps> = ({ width, color, isFull }) => {
  return (
    <div>
      {isFull === true ? (
        <svg
          width={width}
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 141.73 141.73"
        >
          <path d="m64.97,45.47c-2.51-.73-2.92-2.75-2.27-4.91.1-.32.29-.62.3-.97.03-.93.29-1.75.89-2.49.5-.61.38-1.38.35-2.11.05-.11.09-.22.14-.34.75-1.06,1.16-2.23,1.51-3.5.3-1.11.67-2.17.65-3.33-.01-.67.44-1.2.71-1.76.23-.5.37-.94.37-1.47,0-2.34.85-4.28,2.78-5.66.68-.49,1.5-.71,2.31-.42,1.15.42,2.33.75,3.4,1.38.6.35,1.34.23,1.95.59.8.47,1.62.91,2.6.95.76.03,1.3.62,1.96.92,1.09.49,2.24.7,3.36,1.07.23.28.52.26.82.17.66.44,1.38.69,2.16.86,1.08.23,2.01.88,2.97,1.38,1.14.6,2.27,1.15,3.58,1.24.09,0,.18-.01.26.02,2.62.93,5.52,1.04,7.87,2.76,1.61.26,1.84,1.5,2.08,2.8.14.76.23,1.53.37,2.28.19,1.02-.1,1.84-.56,2.63-.2.36-.35.67-.37,1.07-.1,2.69-2.11,4.14-4.71,4.25-1.43.06-2.46-.6-2.94-1.86-.46-1.22-.55-2.54.21-3.73,1.01-1.57.9-1.26-.6-2.03-.95-.49-2.06-.4-3.05-.79-.47-.27-.97-.35-1.51-.29-1.9-.73-3.8-1.45-5.7-2.19-.85-.34-1.76-.57-2.43-1.26-.38-.44-.87-.23-1.33-.22-.45,0-.78-.32-1.16-.48-1.24-.52-2.46-1.15-3.86-1.15-.59,0-1.04-.35-1.5-.62-1.53-.91-2.26-.6-2.43,1.15-.11,1.14-.72,2.09-1.07,3.14-.16.06-.23.17-.14.34-.33,1.43-.7,2.85-1.41,4.15-.17.04-.25.14-.18.31-.33,1.47-.57,2.96-.87,4.44-.31,1.52-1.51,2.49-2.91,3.15-.34.16-.67.35-1.01.53-.53,0-1.05,0-1.58,0Z" />
          <path d="m55.69,39.53c-2.55.55-3.88-1.04-4.33-3.25-.07-.32-.04-.69-.19-.99-.41-.83-.58-1.68-.4-2.61.15-.77-.32-1.4-.7-2.02-.01-.12-.02-.24-.04-.36.15-1.29-.03-2.52-.33-3.79-.26-1.12-.44-2.22-1.01-3.24-.33-.58-.18-1.27-.21-1.88-.03-.55-.12-1-.37-1.47-1.11-2.06-1.29-4.17-.24-6.3.37-.75.99-1.34,1.83-1.46,1.21-.18,2.41-.44,3.65-.39.69.03,1.29-.43,2-.41.93.03,1.86.04,2.74-.39.68-.33,1.44-.07,2.16-.12,1.19-.09,2.31-.45,3.46-.65.33.14.58-.02.81-.24.79.08,1.54-.05,2.31-.27,1.06-.31,2.18-.18,3.27-.2,1.29-.02,2.55-.07,3.74-.61.08-.04.15-.1.24-.11,2.75-.42,5.36-1.71,8.23-1.31,1.54-.53,2.33.45,3.16,1.48.48.6.93,1.24,1.41,1.83.65.8.78,1.67.76,2.58-.01.41,0,.76.18,1.12,1.19,2.42.11,4.65-2.13,5.97-1.24.73-2.45.64-3.48-.24-.99-.85-1.69-1.98-1.59-3.38.14-1.86.19-1.54-1.49-1.5-1.06.02-2.01.63-3.06.75-.54-.02-1.02.16-1.46.46-2.02.26-4.03.53-6.06.77-.91.11-1.82.34-2.74.04-.54-.2-.88.21-1.27.44-.4.21-.83.09-1.25.13-1.34.13-2.71.16-3.94.82-.52.28-1.08.19-1.61.17-1.78-.07-2.27.54-1.59,2.17.44,1.06.35,2.18.55,3.27-.12.13-.12.26.03.36.39,1.42.74,2.84.73,4.32-.13.12-.15.24,0,.36.41,1.45.9,2.88,1.34,4.32.45,1.48-.14,2.91-1.06,4.16-.22.3-.42.63-.64.94-.46.25-.93.5-1.39.75Z" />
          <g>
            <path d="m59.68,37.12c.1-.02.2-.03.3-.05.8,0,1.61,0,2.41.01.39,0,.78,0,1.16-.01.7,0,1.41,0,2.11,0,2.47.02,4.95.19,7.39,0,1.12-.09,2.2-.24,3.3-.02.91,0,1.81.01,2.72.02.5.05,1.01.06,1.46.33,1.19,0,2.37,0,3.56,0,0,0,.04,0,.04,0,1.44.43,2.88.45,4.34.11.04,0,.07-.06.11-.09.52-.5,1.2-.18,1.78-.36.6,0,1.2,0,1.81,0,.49.01.98.02,1.47.03.04.15.14.33.27.27.88-.38,1.82-.1,2.72-.29.3,0,.59,0,.89,0,1.2.03,2.4.1,3.6-.03.43,0,.72.48,1.18.35,1.27.45,2.57.39,3.87.27,1.48.53,3.1,0,4.56.63.96.41,1.91.82,2.84,1.29.29.15.59.42.72.71.41.9,1.03,1.72,1.15,2.74-.1.22,0,.33.21.36.2.57.2,1.13,0,1.69-.38.45-.57.96-.52,1.55.14.62-.28,1.15-.27,1.75-.06.22-.07.44.04.66.02.83.15,1.65-.49,2.38-.23.25-.26.74-.26,1.12,0,.85-.19,1.63-.57,2.38-.18.03-.28.12-.27.32,0,0,0,.01,0,.01-.37.11-.31.37-.22.63.09.72-.2,1.38-.35,2.06-.03.03-.1.06-.1.09,0,.08.02.16.03.24.04.83-.15,1.6-.51,2.34-.23.47-.38.96-.32,1.5-.03.03-.09.06-.09.09,0,.08.03.16.05.23.07.61-.27,1.14-.29,1.73-.14.09-.22.2-.14.37.09,1.44-.71,2.69-.88,4.08-.05.43-.16.87-.13,1.29.05.72-.11,1.45-.46,1.96-.73,1.09-1.01,2.24-1.19,3.5-.17,1.23-.76,2.29-1.76,3.09-.57.45-1.13.92-1.67,1.41-.5.44-1.15.65-1.72.65-1.24-.01-2.41.36-3.62.45-1-.04-2.02-.34-2.99.19-1.59.26-3.2.35-4.79.57-1.55.21-3.16-.1-4.74,0-2.21.14-4.42-.12-6.64.28-1.51.27-3.13.12-4.67-.28-.5-.37-1.01-.47-1.51,0-.1.01-.19.03-.29.05-.5-.08-.99-.08-1.49,0-.09-.02-.19-.04-.28-.05-.51-.4-1.02-.38-1.53-.02-.92.14-1.85.13-2.74-.16-.37-.12-.64,0-.97.08-1.05.23-2.1.2-3.13-.16-.79,0-1.58,0-2.38,0-.69-.26-1.38-.4-2.06.04-.61,0-1.21,0-1.82,0-.1-.02-.2-.04-.29-.06-.8-.07-1.6-.44-2.4-.02-.42.22-.65-.42-1.12-.22.72,1.94,1.39,3.9,2.18,5.82.35.85.77,1.65.75,2.59,0,.48.27.79.6,1.08,1.29.42,2.59.4,3.88.05.49-.02.98-.05,1.46-.07,1.39-.02,2.79-.03,4.18-.05,0,0,.08.02.08.02.45.35.91.49,1.41.08,1.19-.11,2.37-.04,3.56,0,.47.35,1.01.18,1.53.21.08.05.17.06.27.04,1.19,0,2.39-.01,3.58-.02,0,0,.05,0,.05,0,.57.33,1.13.48,1.7.01,0,0,.05,0,.05,0,1.3-.05,2.62.19,3.91-.17.57-.11,1.14-.11,1.71-.04.42.36.83.3,1.25,0,.99-.09,1.97-.19,2.93.19,2.1.25,4.2-.21,6.3-.05.1.02.2.05.3.07.49.35.98.58,1.49.04.8-.12,1.58-.12,2.34.23.9.16,1.81.04,2.71,0,.21.18.42.52.64.53,1.57.09,1.95,1.29,2.38,2.46-.01.16.06.29.2.37-.02.46-.04.92-.06,1.39-.18.09-.21.22-.14.39-.15.19-.37.36-.45.57-.48,1.22-1.44,1.9-2.58,2.4-.8.04-1.63-.27-2.39.23,0,0-.05.01-.05.01-.77.01-1.54.02-2.31.03,0,0-.04,0-.04,0-.23-.22-.52-.24-.81-.24-1.12,0-2.23,0-3.35,0-.39,0-.78-.01-1.18-.02-1.48-.03-2.96-.06-4.43-.08-.72,0-1.47-.19-2.13.29,0,0-.05.01-.05.01-.87,0-1.74.01-2.61.02-1.87-.06-3.75.03-5.6-.5-.86-.25-1.85-.07-2.77-.08-.39-.27-.78-.33-1.17,0-.42.02-.87-.05-1.2.32-.6,0-1.19,0-1.79,0-.69-.13-1.39-.62-2.08,0-1.28-.04-2.56-.14-3.85-.03,0,0-.04,0-.04,0-1.09-.27-2.17-.5-3.26-.03,0,0-.05.01-.05.01-.68.02-1.36.03-2.04.05-.09-.02-.19-.04-.29-.05-.51-.42-1-.16-1.5.02-.3,0-.61.01-.91.02-.09-.13-.18-.11-.26,0-.46-.07-.96.13-1.37-.35-.36-.41-.93-.24-1.41-.23-1.54.04-2.64-.69-3.17-2.07-.68-1.74-1.72-3.38-1.6-5.37.09-.19.02-.31-.16-.38-.1-.22-.23-.43-.29-.66-.27-1.03-.51-2.04-1.14-2.95-.53-.76-.48-1.73-.56-2.63-.06-.66-.18-1.22-.73-1.69-.65-.55-.94-1.31-.93-2.2.01-.59-.09-1.16-.56-1.63-.48-.48-.71-1.19-.8-1.81-.24-1.7-1.01-3.19-1.61-4.76-.5-1.33-.96-2.67-1.24-4.09-.17-.9-.58-1.81-.96-2.7-.59-1.38-1.49-2.66-1.4-4.33.05-.8-.32-1.74-.79-2.41-.51-.74-.67-1.49-.76-2.31.09-.19,0-.3-.17-.35-.76-1.16-1.49-2.33-1.79-3.71-.03-.14-.05-.32-.14-.41-1.32-1.15-.99-2.73-1.11-4.19.09-.18.05-.31-.13-.4-.87-1.7-1.96-3.32-2.19-5.29.02-.04.07-.09.06-.12-.03-.08-.08-.15-.12-.23-.05-1.1-.65-2-1.06-2.97-.36-.86-1.01-1.37-2.05-1.16-.33.07-.68.01-1.03.01-.86-.39-1.79-.1-2.67-.25-.29-.09-.58-.11-.88-.02-1.59.21-3.19-.27-4.78.03-.69-.09-1.37-.05-2.06.13-2.16.55-3.75-.81-4.38-2.64-.26-.77-.44-1.58-.43-2.42.03-1.77.88-2.9,2.71-3.49.6.09,1.2.1,1.8,0,.19,0,.38-.01.57-.02.27.1.46-.04.62-.23.09-.01.19-.03.28-.05.52,0,1.08.25,1.53-.23.18-.02.37-.05.55-.07,1.2,0,2.4,0,3.6,0,.33.39.77.34,1.21.33.78.46,1.55.3,2.32,0,.29-.02.6.02.87-.07,1.07-.35,2.12-.28,3.17.09.72.25,1.43.52,2.17.74.91.26,1.55.94,1.88,1.88.31.88.75,1.68,1.48,2.32.43.38.96.74.9,1.45-.02.2.09.4.28.49.85.41,1.18,1.23,1.57,2,1.05.32,2.1.54,3.16.03,0,0,.05,0,.05,0,1.29-.12,2.6.23,3.86-.26.1,0,.19-.01.28-.06.69.02,1.39.09,2.08.06.62-.03,1.29.27,1.85-.23.98-.03,1.96-.06,2.94-.1.5.11,1,.11,1.5,0,.69.09,1.37.07,2.06,0,.89-.17,1.83.21,2.69-.27Zm35.77,26.19h-.04c-.48-.08-.95-.09-1.43.01h-.04c-.6-.46-1.19-.36-1.78,0-.81,0-1.09.45-.78,1.14.19.43.28.85.27,1.28-.05,2.26-.13,4.52-.02,6.79-.25.6,0,.72.55.59.1,0,.21.02.31.03.48.31.96.35,1.43,0,1.17-.46,2.4-.16,3.6-.32.81-.01,1.64.27,2.41-.23.83-.48,1.01-1.4,1.46-2.15.23,0,.28-.12.23-.32-.04-2.07.6-4.02.97-6.07-.89-.63-1.93-.39-2.92-.46-.9-.07-1.85.2-2.7-.34-.51-.47-1.01-.3-1.51.03Zm-12.49-9.24c.03-.21-.1-.28-.27-.31-.26-1.77.33-3.51.17-5.28.09-.17.07-.31-.11-.41-.02-.47-.14-.97-.04-1.42.2-.92-.35-.91-.96-.91-1.05-.6-2.2.06-3.27-.26-.1-.02-.2-.02-.29,0-.8,0-1.59.05-2.37.26,0,0-.04,0-.04,0-.59.02-1.18.03-1.77.05-1.3-.03-2.61.09-3.87-.32-.79.08-1.6,0-2.36.29-.37.35-.27.81-.28,1.24-.06,2.04-.1,4.09-.15,6.13-.2.18-.11.3.08.4,0,.09.03.17.07.24.52.57,1.17.25,1.77.27.68.24,1.32.49,2.09.13.64-.3,1.35,0,1.98.24.75.28,1.46.42,2.24.07.3-.13.67-.12,1.01-.12,1.72.01,3.44.04,5.15.07.3.33.7.3,1.08.23.36-.07.49-.29.17-.59v-.02Zm-27.73,18.76h.06c.85.38,1.75.27,2.64.27q1.34.17,1.51-.8c.17-.07.29-.16.18-.37-.37-1.52-.64-3.06-.35-4.63.22-1.18.12-2.37.16-3.56.04-1.03-.04-1.06-1.11-1.03-1.22.04-2.43.16-3.59-.48-.47-.26-1.14-.27-1.67.14-1.73-.15-3.44.35-5.18.05-.53-.09-.5.32-.16.64.2.81.89,1.44.93,2.29.1,2.03.97,3.79,1.76,5.6.43,1,.88,1.55,2.04,1.35.4-.07.84.18,1.27.28.46.32.97.33,1.49.24Zm3.83-25.85c.09-.21-.03-.3-.21-.37,0-.72-.51-.55-.93-.54-.8,0-1.59,0-2.39,0-.1-.02-.19-.04-.29-.04-.8-.35-1.61-.45-2.41,0-1.79-.15-3.53.49-5.32.29-.39-.46-.82-.44-1.26-.09-1.49.16-2.97.33-4.43.49-.09,1.59.98,2.69,1.28,4.05.08.1.16.2.25.3.07.5.15.99.22,1.49-.02.04-.08.08-.07.1.03.08.08.15.12.22.16.44.51.69.89.91.95.33,1.88.34,2.72.05.28-.03.56-.06.84-.09.5.08,1,.08,1.5,0,.1.02.19.04.29.05.7.51,1.39.33,2.07-.03.1-.02.2-.04.3-.06.51,0,1.02,0,1.53,0l.56.11c1.41.36,2.81.45,4.22,0,.2-.08.3-.21.27-.45-.15-1.44-.31-2.88.06-4.31.18-.07.24-.2.17-.38,0-.58,0-1.15.01-1.73Zm46.51-1.13c-.39-.08-.77-.14-1.16,0-.34-.08-.62.05-.91.2-.2,0-.4,0-.6,0-.4-.2-.8-.42-1.2-.02-.2.01-.41-.03-.58.05-1.04.46-2.06.44-3.02-.19-.37-.24-.76-.04-1.13-.16-.61-.38-1.2-.29-1.8.02-.1.01-.2.03-.3.04-.4-.1-.8-.1-1.2,0-.28-.03-.57-.06-.85-.09-.42-.38-.82-.56-1.14.11-.05.44-.11.88-.15,1.32-.21,2.3-.25,4.6-.05,6.9.07.78.47.72.99.62,1.89.14,3.78.05,5.67.01.42.44.98.28,1.49.33.59.39,1.19.37,1.78,0,.1-.01.2-.03.29-.05.6,0,1.2.02,1.8.02.9.37,1.06.34,1.19-.44.09-.53.14-1.09.4-1.54.77-1.32.8-2.77.84-4.22.06-.13.11-.25.17-.38.06-.06.11-.13.13-.2.24-.05.35-.18.28-.43.09-.46.18-.93.28-1.39.22-.25.32-.53-.11-.6-.36-.05-.74.04-1.11.08Zm-22.37,23.2c-.2-.11-.21-.29-.21-.49,0-1.94-.01-3.88-.02-5.82.02-.04.05-.12.06-.12.19.06.12-.06-.08-.09-.61-.1-1.22-.07-1.79.2-.99.19-2.04-.3-2.98.32-.79,0-1.59,0-2.38,0-.59-.01-1.18-.02-1.78-.04-.71-.13-1.41-.37-2.12,0-.28-.11-.55-.21-.83-.32-.72-.52-1.44-.36-2.15,0-.09.02-.18.04-.28.06-.46-.06-.82-.03-.58.59.09,1.17.05,2.34-.13,3.49-.19.08-.21.22-.14.39.24,1.51.31,3.03.25,4.55-.01.24,0,.5.07.73.18.53.54.79,1.12.64l1.75.06c.34.44.8.22,1.22.21.99-.22,2.04.3,3.01-.21l2.67-.05c.59,0,1.19-.01,1.78-.02.58.14,1.13.52,1.77.28.39-.01.78,0,1.17-.04.29-.04.4-.24.27-.53-.02-.92.04-1.83.32-2.72.47-.35.53-.71,0-1.06Z" />
            <path d="m55.83,103.21c1.46.59,2.67,1.55,3.85,2.55.96.81,1.45,1.84,1.5,3.07.02.49.08.97.3,1.41.49.99.29,1.95.02,2.98-.54,2.01-1.95,3.32-3.46,4.52-.58.46-1.35.77-2.19.68-.44-.04-.92-.05-1.32.09-2.3.81-4.08-.25-5.68-1.65-.97-.86-1.87-1.87-2.5-3.03-.87-1.59-1.08-3.25-.21-4.96.3-.6.5-1.23.87-1.81,1.06-1.66,2.57-2.63,4.4-3.12.71-.19,1.28-.68,2.01-.75.8-.1,1.6-.09,2.4,0Z" />
            <path d="m93.63,110.38c.31-.88.75-1.64,1.5-2.25.47-.38.44-1.15.98-1.55.98-.71,1.93-1.47,2.93-2.15.69-.47,1.49-.4,2.26-.2.46.12.88.4,1.34.48,1.54.3,2.78,1.04,3.65,2.36.78,1.2,1.92,2.13,2.34,3.64.28,1.02.32,1.89-.09,2.81-.74,1.68-1.36,3.43-3.16,4.36-.99.51-2.05.8-3.07,1.23-.71,0-1.42.04-2.14-.03-.77-.08-1.61-.19-2.37.21-1.23-.74-2.47-1.46-3.43-2.59-.52-.61-.82-1.24-.72-1.98.19-1.34-.31-2.65-.05-3.98.12-.11.12-.23.04-.37Z" />
          </g>
        </svg>
      ) : (
        <svg
          width={width}
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 141.73 141.73"
        >
          <path d="m59.68,37.12c.1-.02.2-.03.3-.05.8,0,1.61,0,2.41.01.39,0,.78,0,1.16-.01.7,0,1.41,0,2.11,0,2.47.02,4.95.19,7.39,0,1.12-.09,2.2-.24,3.3-.02.91,0,1.81.01,2.72.02.5.05,1.01.06,1.46.33,1.19,0,2.37,0,3.56,0,0,0,.04,0,.04,0,1.44.43,2.88.45,4.34.11.04,0,.07-.06.11-.09.52-.5,1.2-.18,1.78-.36.6,0,1.2,0,1.81,0,.49.01.98.02,1.47.03.04.15.14.33.27.27.88-.38,1.82-.1,2.72-.29.3,0,.59,0,.89,0,1.2.03,2.4.1,3.6-.03.43,0,.72.48,1.18.35,1.27.45,2.57.39,3.87.27,1.48.53,3.1,0,4.56.63.96.41,1.91.82,2.84,1.29.29.15.59.42.72.71.41.9,1.03,1.72,1.15,2.74-.1.22,0,.33.21.36.2.57.2,1.13,0,1.69-.38.45-.57.96-.52,1.55.14.62-.28,1.15-.27,1.75-.06.22-.07.44.04.66.02.83.15,1.65-.49,2.38-.23.25-.26.74-.26,1.12,0,.85-.19,1.63-.57,2.38-.18.03-.28.12-.27.32,0,0,0,.01,0,.01-.37.11-.31.37-.22.63.09.72-.2,1.38-.35,2.06-.03.03-.1.06-.1.09,0,.08.02.16.03.24.04.83-.15,1.6-.51,2.34-.23.47-.38.96-.32,1.5-.03.03-.09.06-.09.09,0,.08.03.16.05.23.07.61-.27,1.14-.29,1.73-.14.09-.22.2-.14.37.09,1.44-.71,2.69-.88,4.08-.05.43-.16.87-.13,1.29.05.72-.11,1.45-.46,1.96-.73,1.09-1.01,2.24-1.19,3.5-.17,1.23-.76,2.29-1.76,3.09-.57.45-1.13.92-1.67,1.41-.5.44-1.15.65-1.72.65-1.24-.01-2.41.36-3.62.45-1-.04-2.02-.34-2.99.19-1.59.26-3.2.35-4.79.57-1.55.21-3.16-.1-4.74,0-2.21.14-4.42-.12-6.64.28-1.51.27-3.13.12-4.67-.28-.5-.37-1.01-.47-1.51,0-.1.01-.19.03-.29.05-.5-.08-.99-.08-1.49,0-.09-.02-.19-.04-.28-.05-.51-.4-1.02-.38-1.53-.02-.92.14-1.85.13-2.74-.16-.37-.12-.64,0-.97.08-1.05.23-2.1.2-3.13-.16-.79,0-1.58,0-2.38,0-.69-.26-1.38-.4-2.06.04-.61,0-1.21,0-1.82,0-.1-.02-.2-.04-.29-.06-.8-.07-1.6-.44-2.4-.02-.42.22-.65-.42-1.12-.22.72,1.94,1.39,3.9,2.18,5.82.35.85.77,1.65.75,2.59,0,.48.27.79.6,1.08,1.29.42,2.59.4,3.88.05.49-.02.98-.05,1.46-.07,1.39-.02,2.79-.03,4.18-.05,0,0,.08.02.08.02.45.35.91.49,1.41.08,1.19-.11,2.37-.04,3.56,0,.47.35,1.01.18,1.53.21.08.05.17.06.27.04,1.19,0,2.39-.01,3.58-.02,0,0,.05,0,.05,0,.57.33,1.13.48,1.7.01,0,0,.05,0,.05,0,1.3-.05,2.62.19,3.91-.17.57-.11,1.14-.11,1.71-.04.42.36.83.3,1.25,0,.99-.09,1.97-.19,2.93.19,2.1.25,4.2-.21,6.3-.05.1.02.2.05.3.07.49.35.98.58,1.49.04.8-.12,1.58-.12,2.34.23.9.16,1.81.04,2.71,0,.21.18.42.52.64.53,1.57.09,1.95,1.29,2.38,2.46-.01.16.06.29.2.37-.02.46-.04.92-.06,1.39-.18.09-.21.22-.14.39-.15.19-.37.36-.45.57-.48,1.22-1.44,1.9-2.58,2.4-.8.04-1.63-.27-2.39.23,0,0-.05.01-.05.01-.77.01-1.54.02-2.31.03,0,0-.04,0-.04,0-.23-.22-.52-.24-.81-.24-1.12,0-2.23,0-3.35,0-.39,0-.78-.01-1.18-.02-1.48-.03-2.96-.06-4.43-.08-.72,0-1.47-.19-2.13.29,0,0-.05.01-.05.01-.87,0-1.74.01-2.61.02-1.87-.06-3.75.03-5.6-.5-.86-.25-1.85-.07-2.77-.08-.39-.27-.78-.33-1.17,0-.42.02-.87-.05-1.2.32-.6,0-1.19,0-1.79,0-.69-.13-1.39-.62-2.08,0-1.28-.04-2.56-.14-3.85-.03,0,0-.04,0-.04,0-1.09-.27-2.17-.5-3.26-.03,0,0-.05.01-.05.01-.68.02-1.36.03-2.04.05-.09-.02-.19-.04-.29-.05-.51-.42-1-.16-1.5.02-.3,0-.61.01-.91.02-.09-.13-.18-.11-.26,0-.46-.07-.96.13-1.37-.35-.36-.41-.93-.24-1.41-.23-1.54.04-2.64-.69-3.17-2.07-.68-1.74-1.72-3.38-1.6-5.37.09-.19.02-.31-.16-.38-.1-.22-.23-.43-.29-.66-.27-1.03-.51-2.04-1.14-2.95-.53-.76-.48-1.73-.56-2.63-.06-.66-.18-1.22-.73-1.69-.65-.55-.94-1.31-.93-2.2.01-.59-.09-1.16-.56-1.63-.48-.48-.71-1.19-.8-1.81-.24-1.7-1.01-3.19-1.61-4.76-.5-1.33-.96-2.67-1.24-4.09-.17-.9-.58-1.81-.96-2.7-.59-1.38-1.49-2.66-1.4-4.33.05-.8-.32-1.74-.79-2.41-.51-.74-.67-1.49-.76-2.31.09-.19,0-.3-.17-.35-.76-1.16-1.49-2.33-1.79-3.71-.03-.14-.05-.32-.14-.41-1.32-1.15-.99-2.73-1.11-4.19.09-.18.05-.31-.13-.4-.87-1.7-1.96-3.32-2.19-5.29.02-.04.07-.09.06-.12-.03-.08-.08-.15-.12-.23-.05-1.1-.65-2-1.06-2.97-.36-.86-1.01-1.37-2.05-1.16-.33.07-.68.01-1.03.01-.86-.39-1.79-.1-2.67-.25-.29-.09-.58-.11-.88-.02-1.59.21-3.19-.27-4.78.03-.69-.09-1.37-.05-2.06.13-2.16.55-3.75-.81-4.38-2.64-.26-.77-.44-1.58-.43-2.42.03-1.77.88-2.9,2.71-3.49.6.09,1.2.1,1.8,0,.19,0,.38-.01.57-.02.27.1.46-.04.62-.23.09-.01.19-.03.28-.05.52,0,1.08.25,1.53-.23.18-.02.37-.05.55-.07,1.2,0,2.4,0,3.6,0,.33.39.77.34,1.21.33.78.46,1.55.3,2.32,0,.29-.02.6.02.87-.07,1.07-.35,2.12-.28,3.17.09.72.25,1.43.52,2.17.74.91.26,1.55.94,1.88,1.88.31.88.75,1.68,1.48,2.32.43.38.96.74.9,1.45-.02.2.09.4.28.49.85.41,1.18,1.23,1.57,2,1.05.32,2.1.54,3.16.03,0,0,.05,0,.05,0,1.29-.12,2.6.23,3.86-.26.1,0,.19-.01.28-.06.69.02,1.39.09,2.08.06.62-.03,1.29.27,1.85-.23.98-.03,1.96-.06,2.94-.1.5.11,1,.11,1.5,0,.69.09,1.37.07,2.06,0,.89-.17,1.83.21,2.69-.27Zm35.77,26.19h-.04c-.48-.08-.95-.09-1.43.01h-.04c-.6-.46-1.19-.36-1.78,0-.81,0-1.09.45-.78,1.14.19.43.28.85.27,1.28-.05,2.26-.13,4.52-.02,6.79-.25.6,0,.72.55.59.1,0,.21.02.31.03.48.31.96.35,1.43,0,1.17-.46,2.4-.16,3.6-.32.81-.01,1.64.27,2.41-.23.83-.48,1.01-1.4,1.46-2.15.23,0,.28-.12.23-.32-.04-2.07.6-4.02.97-6.07-.89-.63-1.93-.39-2.92-.46-.9-.07-1.85.2-2.7-.34-.51-.47-1.01-.3-1.51.03Zm-12.49-9.24c.03-.21-.1-.28-.27-.31-.26-1.77.33-3.51.17-5.28.09-.17.07-.31-.11-.41-.02-.47-.14-.97-.04-1.42.2-.92-.35-.91-.96-.91-1.05-.6-2.2.06-3.27-.26-.1-.02-.2-.02-.29,0-.8,0-1.59.05-2.37.26,0,0-.04,0-.04,0-.59.02-1.18.03-1.77.05-1.3-.03-2.61.09-3.87-.32-.79.08-1.6,0-2.36.29-.37.35-.27.81-.28,1.24-.06,2.04-.1,4.09-.15,6.13-.2.18-.11.3.08.4,0,.09.03.17.07.24.52.57,1.17.25,1.77.27.68.24,1.32.49,2.09.13.64-.3,1.35,0,1.98.24.75.28,1.46.42,2.24.07.3-.13.67-.12,1.01-.12,1.72.01,3.44.04,5.15.07.3.33.7.3,1.08.23.36-.07.49-.29.17-.59v-.02Zm-27.73,18.76h.06c.85.38,1.75.27,2.64.27q1.34.17,1.51-.8c.17-.07.29-.16.18-.37-.37-1.52-.64-3.06-.35-4.63.22-1.18.12-2.37.16-3.56.04-1.03-.04-1.06-1.11-1.03-1.22.04-2.43.16-3.59-.48-.47-.26-1.14-.27-1.67.14-1.73-.15-3.44.35-5.18.05-.53-.09-.5.32-.16.64.2.81.89,1.44.93,2.29.1,2.03.97,3.79,1.76,5.6.43,1,.88,1.55,2.04,1.35.4-.07.84.18,1.27.28.46.32.97.33,1.49.24Zm3.83-25.85c.09-.21-.03-.3-.21-.37,0-.72-.51-.55-.93-.54-.8,0-1.59,0-2.39,0-.1-.02-.19-.04-.29-.04-.8-.35-1.61-.45-2.41,0-1.79-.15-3.53.49-5.32.29-.39-.46-.82-.44-1.26-.09-1.49.16-2.97.33-4.43.49-.09,1.59.98,2.69,1.28,4.05.08.1.16.2.25.3.07.5.15.99.22,1.49-.02.04-.08.08-.07.1.03.08.08.15.12.22.16.44.51.69.89.91.95.33,1.88.34,2.72.05.28-.03.56-.06.84-.09.5.08,1,.08,1.5,0,.1.02.19.04.29.05.7.51,1.39.33,2.07-.03.1-.02.2-.04.3-.06.51,0,1.02,0,1.53,0l.56.11c1.41.36,2.81.45,4.22,0,.2-.08.3-.21.27-.45-.15-1.44-.31-2.88.06-4.31.18-.07.24-.2.17-.38,0-.58,0-1.15.01-1.73Zm46.51-1.13c-.39-.08-.77-.14-1.16,0-.34-.08-.62.05-.91.2-.2,0-.4,0-.6,0-.4-.2-.8-.42-1.2-.02-.2.01-.41-.03-.58.05-1.04.46-2.06.44-3.02-.19-.37-.24-.76-.04-1.13-.16-.61-.38-1.2-.29-1.8.02-.1.01-.2.03-.3.04-.4-.1-.8-.1-1.2,0-.28-.03-.57-.06-.85-.09-.42-.38-.82-.56-1.14.11-.05.44-.11.88-.15,1.32-.21,2.3-.25,4.6-.05,6.9.07.78.47.72.99.62,1.89.14,3.78.05,5.67.01.42.44.98.28,1.49.33.59.39,1.19.37,1.78,0,.1-.01.2-.03.29-.05.6,0,1.2.02,1.8.02.9.37,1.06.34,1.19-.44.09-.53.14-1.09.4-1.54.77-1.32.8-2.77.84-4.22.06-.13.11-.25.17-.38.06-.06.11-.13.13-.2.24-.05.35-.18.28-.43.09-.46.18-.93.28-1.39.22-.25.32-.53-.11-.6-.36-.05-.74.04-1.11.08Zm-22.37,23.2c-.2-.11-.21-.29-.21-.49,0-1.94-.01-3.88-.02-5.82.02-.04.05-.12.06-.12.19.06.12-.06-.08-.09-.61-.1-1.22-.07-1.79.2-.99.19-2.04-.3-2.98.32-.79,0-1.59,0-2.38,0-.59-.01-1.18-.02-1.78-.04-.71-.13-1.41-.37-2.12,0-.28-.11-.55-.21-.83-.32-.72-.52-1.44-.36-2.15,0-.09.02-.18.04-.28.06-.46-.06-.82-.03-.58.59.09,1.17.05,2.34-.13,3.49-.19.08-.21.22-.14.39.24,1.51.31,3.03.25,4.55-.01.24,0,.5.07.73.18.53.54.79,1.12.64l1.75.06c.34.44.8.22,1.22.21.99-.22,2.04.3,3.01-.21l2.67-.05c.59,0,1.19-.01,1.78-.02.58.14,1.13.52,1.77.28.39-.01.78,0,1.17-.04.29-.04.4-.24.27-.53-.02-.92.04-1.83.32-2.72.47-.35.53-.71,0-1.06Z" />
          <path d="m55.83,103.21c1.46.59,2.67,1.55,3.85,2.55.96.81,1.45,1.84,1.5,3.07.02.49.08.97.3,1.41.49.99.29,1.95.02,2.98-.54,2.01-1.95,3.32-3.46,4.52-.58.46-1.35.77-2.19.68-.44-.04-.92-.05-1.32.09-2.3.81-4.08-.25-5.68-1.65-.97-.86-1.87-1.87-2.5-3.03-.87-1.59-1.08-3.25-.21-4.96.3-.6.5-1.23.87-1.81,1.06-1.66,2.57-2.63,4.4-3.12.71-.19,1.28-.68,2.01-.75.8-.1,1.6-.09,2.4,0Z" />
          <path d="m93.63,110.38c.31-.88.75-1.64,1.5-2.25.47-.38.44-1.15.98-1.55.98-.71,1.93-1.47,2.93-2.15.69-.47,1.49-.4,2.26-.2.46.12.88.4,1.34.48,1.54.3,2.78,1.04,3.65,2.36.78,1.2,1.92,2.13,2.34,3.64.28,1.02.32,1.89-.09,2.81-.74,1.68-1.36,3.43-3.16,4.36-.99.51-2.05.8-3.07,1.23-.71,0-1.42.04-2.14-.03-.77-.08-1.61-.19-2.37.21-1.23-.74-2.47-1.46-3.43-2.59-.52-.61-.82-1.24-.72-1.98.19-1.34-.31-2.65-.05-3.98.12-.11.12-.23.04-.37Z" />
        </svg>
      )}
    </div>
  );
};

export default CartIcon;