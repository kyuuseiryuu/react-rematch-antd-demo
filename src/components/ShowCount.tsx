import { useSelector } from "react-redux";
import { RootState } from "../store";

const ShowCount = () => {
  const count = useSelector((state: RootState) => state.count)
  return (
    <h1>{count}</h1>
  )
}

export default ShowCount;