// If we are creating a big project, then the good practise is to call every componnet here and export the components from here only. But it is not mandatory for small projects, you can directly export the component from the component file itself.

import InputBox from "./InputBox";

export {InputBox}


// Ab sirf index.js ko import krna hai jaha bhi component use krna hai vha to yha se hm saare components ko access kr paienge.