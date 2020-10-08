// //скрольная тема, отображение пикселей от высоты скролла. Вешается там где overscroll.
// import React from "react";
// import "./styles.css";
//
// export default function App() {
//   const ref = React.useRef(null);
//   const handleScroll = () => {
//     if (ref.current) {
//       console.log(ref.current.scrollHeight)
//       console.log(ref.current.scrollTop)
//       console.log('scrolled in px ', ref.current.scrollHeight - (ref.current.scrollHeight - ref.current.scrollTop))
//     }
//   }
//
//   return (
//     <div ref={ref} className="App" onScroll={handleScroll}>
//       <div  className="content">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     </div>
//   );
// }
// //-----------------

// ответ-Intersection Observer API. вопрос-по классу элемента, нужно узнать его положение и скроллом отследить его