import { Button } from "antd"
import { connect } from "react-redux";
import { Dispatch } from "../store";

const Adder = (props: { increment: () => void }) => {
  return (
    <Button onClick={() => props.increment()}>add</Button>
  )
}
const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

const AdderContainer = connect(undefined, mapDispatch)(Adder)

export default AdderContainer