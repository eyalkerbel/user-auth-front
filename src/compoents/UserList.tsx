import React from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {deleteUser, fetchUsers} from '../api';
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {Button, Grid} from "@mui/material";
import {slotProps} from "../theme/data-grid"
import {User} from "../types";


function UsersList(): JSX.Element {
  const classes = {
    users: {
      padding: "1rem",
    },
    table: {
      height: "auto",
      maxHeight: "74vh",
    },
  }
  const {data: users} = useQuery<User[]>('users', fetchUsers);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const columns = [
    {
      field: 'firstName', headerName: 'First name', flex: 1,
    },
    {
      field: 'lastName', headerName: 'Last name', flex: 1,
    },
    {
      field: 'email', headerName: 'Email', flex: 1,
    },
    {
      field: 'password', headerName: 'Password', flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params: any) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteMutation.mutate(params.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Grid container style={classes.users} spacing={1} direction={"row"}>
      <Grid item xs={12} md={12} display="flex" justifyContent={"flex-end"}>
        <Grid item xs={12} md={12}>
          <Grid container style={classes.table}>
            <DataGrid
              disableColumnSelector
              disableDensitySelector
              slots={{toolbar: GridToolbar}}
              rows={users || []}
              columns={columns}
              slotProps={slotProps}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 25,
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default UsersList;