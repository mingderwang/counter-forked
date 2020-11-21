import React from "react";
import { CounterViewProps } from "./Counter";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// Stateless component
// Separate container from view to test more easily the view.
const CounterView = React.memo(function CounterView(props: CounterViewProps) {
  const { counter, increment, decrement } = props;
  const styles = useStyles({});

  return (
    <Box width={200}>
      <Box className={styles.box} p={2}>
        <Typography>{counter}</Typography>
      </Box>
      <Box mt={2} className={styles.box2}>
        <Button
          variant="outlined"
          className={styles.btn}
          onClick={() => decrement(1)}
        >
          - 1
        </Button>
        <Button variant="outlined" onClick={() => increment(1)}>
          + 1
        </Button>
      </Box>
      <Box mt={2} className={styles.box2}>
        <Button
          variant="outlined"
          className={styles.btn}
          onClick={() => decrement(10)}
        >
          - 10
        </Button>
        <Button variant="outlined" onClick={() => increment(10)}>
          + 10
        </Button>
      </Box>
    </Box>
  );
});

const useStyles = makeStyles(theme => ({
  btn: {
    marginRight: theme.spacing(2)
  },

  box: {
    border: "1px solid #ccc",
    borderRadius: 5,
    textAlign: "right"
  },
  box2: {
    textAlign: "center"
  }
}));

export default CounterView;
