import React from "react";
import MaterialTable from "material-table";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  // playIconLobby: {
  //   cursor: "pointer"
  // }
}));

export default function MaterialTableDemo(props) {
  const classes = useStyles();
  console.log(props);
  const [state, setState] = React.useState({
    columns: [
      { title: "Table name", field: "tableName" },
      { title: "id", field: "id" },
      { title: "Start date", field: "startDate" },
      { title: "Active players", field: "activePlayers", type: "numeric" }
    ],
    data: props.props.lobby.gameRooms.map(game => {
      return {
        tableName: game.room_name,
        id: game.id,
        startDate: game.createdAt,
        activePlayers: 0
      };
    }),
    actions: [
      {
        icon: PlayCircleOutlineIcon,
        tooltip: "Join Table",
        onClick: (event, rowData) =>
          props.joinRoom(rowData.id, props.props.user.id)
      }
    ]
  });

  return (
    <MaterialTable
      title="Game Lobby"
      columns={state.columns}
      data={state.data}
      actions={state.actions}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
            const token = props.props.user.token;
            props.createGame(newData.tableName, token);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.deleteRoom(oldData.id);
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
