//@flow strict
import WebFont from "webfontloader";
import { injectGlobal } from "emotion";

import { fontFamily, textColors } from "./variables";

WebFont.load({
  google: {
    families: [`${fontFamily}:400,600`, "Playfair Display:400"],
  },
});

injectGlobal`
 * {
    box-sizing: border-box;
    text-size-adjust: 100%;
  }

  body {
    font-family: ${fontFamily}, sans-serif;
    line-height: 1.5;
    color: ${textColors.dark};
    margin: 0;
  }

  address { font-style: normal }

  // IE 11
  main { display: block }
`;
