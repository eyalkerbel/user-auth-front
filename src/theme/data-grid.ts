import {GridLogicOperator, GridSlotsComponentsProps} from "@mui/x-data-grid-pro"


export const slotProps: GridSlotsComponentsProps = {
  filterPanel: {
    // Force usage of "And" operator
    logicOperators: [GridLogicOperator.And],
    // Display columns by ascending alphabetical order
    columnsSort: "asc",
    filterFormProps: {
      logicOperatorInputProps: {
        variant: "outlined",
        size: "small",
      },
      columnInputProps: {
        variant: "outlined",
        size: "small",
        sx: {mt: "auto"},
      },
      operatorInputProps: {
        variant: "outlined",
        size: "small",
        sx: {mt: "auto"},
      },
      valueInputProps: {
        InputComponentProps: {
          variant: "outlined",
          size: "small",
        },
      },
      deleteIconProps: {
        sx: {
          "& .MuiSvgIcon-root": {color: "#d32f2f"},
        },
      },
    },
    sx: {
      // Customize inputs using css selectors
      "& .MuiDataGrid-filterForm": {p: 2},
      "& .MuiDataGrid-filterFormLogicOperatorInput": {mr: 2},
      "& .MuiDataGrid-filterFormColumnInput": {mr: 2, width: 150},
      "& .MuiDataGrid-filterFormOperatorInput": {mr: 2},
      "& .MuiDataGrid-filterFormValueInput": {width: 200},
    },
  },
  toolbar: {
    showQuickFilter: true,
    quickFilterProps: {
      debounceMs: 500,
      variant: "outlined",
      size: "small",
    },
  },
}

export const dataGridSx = {
  "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {py: "8px"},
  "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {py: "15px"},
  "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {py: "22px"},
}
