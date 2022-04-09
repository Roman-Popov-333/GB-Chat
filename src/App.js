// import React from 'react';
// import { Message } from './components/Message';

// const text = 'Какой нибудь текст';

// export const lessonOne =() => {
//   return (
//     <div>
//       <h1>Урок 1</h1>
//         <h2><Message text={text} /> </h2>
//     </div>
//   )
// }
// export default lessonOne;


// Пример работы виртуального DOM
/*const curentTree = { // условно текущее дерево, то дерево которое нарисовано в браузере
  button: { // кнопка
    type: "button",
    props: "hello"
  },
  input: { // ввод текста
    type: "input",
    value: ""
  },
}
const workInProgressTree = { // обновление дерева , за счет построения виртуального дерева
  button: {
    type: "button",
    props: "hello react"
  },
  input: {
    type: "input",
    value: ""
  },
} */

//const reconciliation = (curentTree, workInProgressTree) => {// функция сверки , принимает в себя текущее дерево и обновленное и  показывает разницу между остновной веткой и нашими изменениями
  // return diff = дифференс(разница)
  //   { 
  //   button: {  //результатом сравнения станет объект
  //     type: "button",
  //     props: "hello react"
  //   },
  // } => DOM // Все, что вернет функция, должно попасть в реальный DOM (меняется не вся структура DOMa, а только часть)

  // Stack -ранний режим работы Reacta
  // Fiber {} (волокно) - это новый режим согласования Reacta - основная цель сделать рендеринг инкрементным( т.е по частям за счет этого работоспособность выше)
  // BaseFiberRootProperties = в этом типе все свойства  fiber, все что  мы пишем внутри компонента все это храниться внутри faber node ()

  
  // <div>    {/* в виде примера меняем тип  элемента с вложеным компонентом див на спан*/}
  //   <Tree />
  // </div>
  //   =>
  // <span> {/* Особенностью реакта будет полное удаление дерева и отрисовка его заного, об этом нужно помнить, когда мы меняем тип элемента для компонента */}
  //   <Tree />
  // </span>
  