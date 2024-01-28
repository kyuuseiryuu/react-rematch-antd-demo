import { InputNumber, Button } from 'antd';
import ShowCount from './components/ShowCount'
import './App.css'
import AdderContainer from './components/Adder';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from './store';

function App() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<Dispatch>();
  return (
    <>
      <InputNumber value={count} onChange={e => dispatch.count.setNewCount(e ?? 0)} />
      <ShowCount />
      <AdderContainer />
      <Button onClick={() => dispatch.count.saveCount(count)}>Save count</Button>
      <Button onClick={dispatch.count.restoreCount}>Restore count</Button>
    </>
  )
}

export default App
