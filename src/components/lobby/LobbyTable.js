import React from "react";
import MaterialTable from "material-table";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  playIconLobby: {
    cursor: "pointer"
  }
}));

export default function MaterialTableDemo(props) {
  const classes = useStyles();
  console.log(props);
  const [state, setState] = React.useState({
    columns: [
      { title: "Game name", field: "name" },
      { title: "Start date", field: "startDate" },
      { title: "Active players", field: "activePlayers", type: "numeric" },
      { title: "Join game", field: "joinGame" }
    ],
    data: props.props.lobby.gameRooms.map(game => {
      return {
        name: game.room_name,
        startDate: game.createdAt,
        activePlayers: 0,
        joinGame: (
          <PlayCircleOutlineIcon
            onClick={props.joinRoom}
            className={classes.playIconLobby}
          />
        )
      };
    })
  });

  return (
    <MaterialTable
      title="Game Lobby"
      columns={state.columns}
      data={state.data}
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
            props.createGame(newData.name, token);
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
              props.deleteRoom(props.props.room.id);
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
