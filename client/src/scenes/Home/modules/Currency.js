import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  Box,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import config from "../../../config";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  container: {
    maxHeight: 600,
  },
}));

export default function Currency() {
  const classes = useStyles();
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyRateList, setCurrencyRateList] = useState([]);

  const fetchCurrencyList = async () => {
    let result = await fetch(`${config.apiUrl}/api/currency/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result && result.data) {
      return setCurrencyList(result.data);
    }
  };

  const handleChange = async (event) => {
    const { value } = event.target;
    let result = await fetch(`${config.currencyApi}/latest?base=${value}`);
    result = await result.json();
    if (result && result.rates) {
      setCurrencyRateList(Object.entries(result.rates));
    }
  };

  useEffect(() => {
    fetchCurrencyList();
  }, []);

  return (
    <Box m={3}>
      <Box display="flex" m={2}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            {currencyList.map((currency) => (
              <MenuItem key={currency.code} value={currency.code}>
                {currency.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TableContainer className={classes.container}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">No.</TableCell>
              <TableCell align="left">Currency</TableCell>
              <TableCell align="left">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyRateList.map(([value, rate], i) => (
              <TableRow key={i}>
                <TableCell align="left"> {i + 1}</TableCell>
                <TableCell align="left"> {value}</TableCell>
                <TableCell align="left">{rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
