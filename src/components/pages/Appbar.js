import {useState} from "react";
import { AppBar, createMuiTheme } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

// const theme = createMuiTheme({
//     palette: {
//         type: 
//     }
// })

const Appbar = () => {
  return (
    <div>
      <AppBar position="static">
        <div>
          <div>
            <SearchIcon />
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Appbar;
