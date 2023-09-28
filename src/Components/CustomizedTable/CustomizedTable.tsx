import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useTranslation } from "react-i18next"
import styled from "@emotion/styled"
import "./CustomizedTable.css"
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]

export default function CustomizedTable() {
  const { t, i18n } = useTranslation()
  const arabicLang = i18n.language === "ar"
  const CustomTableCell = styled(TableCell)(({ theme }) => ({
    "&.MuiTableCell-root": {
      textAlign: arabicLang ? "right" : "left",
    },
  }))

  return (
    <TableContainer
      component={Paper}
      sx={{
        direction: arabicLang ? "rtl" : "ltr",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#fafafa" }}>
            <CustomTableCell className="header-cell">
              {t("table.branch")}
            </CustomTableCell>
            <CustomTableCell className="header-cell">
              {t("table.date")}
            </CustomTableCell>
            <CustomTableCell className="header-cell">
              {t("table.time")}
            </CustomTableCell>
            <CustomTableCell className="header-cell">
              {t("table.details")}
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <CustomTableCell>{row.calories}</CustomTableCell>
              <CustomTableCell>{row.fat}</CustomTableCell>
              <CustomTableCell>{row.carbs}</CustomTableCell>
              <CustomTableCell>{row.protein}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
