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
import "./CustomeTable.css"
import { Box } from "@mui/material"
import dayjs from "dayjs"
import { Update } from "utils"
import "dayjs/locale/ar"

export default function CustomeTable({ data }: { data: Update[] }) {
  const { t, i18n } = useTranslation()
  // const arabicLang = i18n.language === "ar"
  const CustomTableCell = styled(TableCell)(({ theme }) => ({
    "&.MuiTableCell-root": {
      textAlign: "start",
    },
  }))
  dayjs.locale(i18n.language)
  return (
    <Box sx={{ width: " 100% " }}>
      <p style={{ textAlign: "start" }}>تفاصيل الشحنة</p>
      <TableContainer component={Paper} sx={{ maxWidth: " 100% " }}>
        <Table
          sx={{
            overflowX: "unset",
          }}
          aria-label="simple table"
        >
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
            {data.map((row) => (
              <TableRow
                key={row.timestamp}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <CustomTableCell>
                  {row.hub ? row.hub : t("bosta")}
                </CustomTableCell>
                <CustomTableCell>
                  {dayjs(row.timestamp).format("DD/MM/YYYY")}
                </CustomTableCell>
                <CustomTableCell>
                  {dayjs(row.timestamp).format("hh:mm  a ")}
                </CustomTableCell>
                <CustomTableCell>{t(`step.${row.state}`)}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
