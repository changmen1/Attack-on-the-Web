import { useState } from 'react';
import './App.css'
import ChildCom1 from './components/ChildCom1';
import ChildCom2 from './components/ChildCom2';
import { withLog } from './HOC/withLog';

const WrapChild1 = withLog(ChildCom1);
const WrapChild2 = withLog(ChildCom2);


function App() {
  const [toggle, setToggle] = useState(true);
  const child = toggle ? <WrapChild1 name="xiejie" /> : <WrapChild2 age={18} />;
  return (
    <div>
      {/* 按钮对两个组件进行切换，查看日志功能 */}
      <button onClick={() => setToggle(!toggle)}>show/hide</button>
      {child}
    </div>
  );
}

export default App
