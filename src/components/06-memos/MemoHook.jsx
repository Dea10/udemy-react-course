import React, { useMemo, useState } from "react";
import useCounter from "../../hooks/useCounter";
import { heavyDuty } from "../../helpers/heavyDuty";

import styles from './MemoHook.module.scss';

const MemoHook = () => {
  const {state, increment} = useCounter(500);
  const [show, setShow] = useState(true);

  const memoProcess = useMemo(() => { heavyDuty(state) }, [ state ]);

  return (
    <div className={styles.MemoHook}>
      <h3>MemoHook</h3>
      <hr />
      <p>
        Counter: <small>{ state}</small>
      </p>
      <p> { memoProcess } </p>
      <button className="btn btn-primary" onClick={() => {increment()}}>+1</button>
      <button className="btn btn-primary" onClick={() => {setShow(!show);}}>
        Show/Hide { JSON.stringify(show) }
      </button>
    </div>
  );
};

export default MemoHook;
