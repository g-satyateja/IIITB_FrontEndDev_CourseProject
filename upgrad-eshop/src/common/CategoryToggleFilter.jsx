import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {InitialProducts} from '../common/InitialProducts';

export default function CategoryToggleFilter() {
  console.log("🚀 ~ file: CategoryToggleFilter.jsx:5 ~ InitialProducts:", InitialProducts)
  const dispatch = useDispatch();
  const [alignment, setAlignment] = useState('web');
  
  var Categories = [...new Set(InitialProducts.map(product => product.category))];
  Categories.push('All')
  
  return (
    <ToggleButtonGroup
      color="primary"
      size="large"
      value={alignment}
      exclusive
      onChange={(e, newAlignment) => {
        dispatch({ type: 'setCategory', payload: newAlignment });
        setAlignment(newAlignment);
      }}
      aria-label="Platform"
      sx={{ marginTop: 1 }}
    >
      {
        Categories.map((category) => {
          return (
            <ToggleButton key={category} value={category}>{category}</ToggleButton>
          );
        })
      }
    </ToggleButtonGroup>
  );
}