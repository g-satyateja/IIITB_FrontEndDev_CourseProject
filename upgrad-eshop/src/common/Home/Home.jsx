import MuiMediaCard from "../../components/Card/MuiMediaCard";
import { Stack } from "@mui/material";
import CategoryToggleButton from "../../components/Categories/MuiToggleButton";
import MuiSelectProducts from "../../components/SortProducts/MuiSelectProducts";

function Home() {
  return (
    <Stack direction={"row"}>
      <CategoryToggleButton />
      <MuiSelectProducts />
      <MuiMediaCard />
      <MuiMediaCard />
      <MuiMediaCard />
      <MuiMediaCard />
    </Stack>
  );
}
export default Home;
