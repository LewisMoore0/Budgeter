import Image from "next/image";
import FixedToolBar from "../components/FixedToolBar";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
        <FixedToolBar />
        <Typography textAlign='center'> Budgeting App Personal Project </Typography>
    </>
  )
}
