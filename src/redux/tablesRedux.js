import {nanoid} from 'nanoid';
import { updateLoading } from './loadingRedux';


// selectors
export const getAllTables = ({ tables }) => tables;
export const getLoadingFetching = ({ loadingFetching }) => loadingFetching;

export const getSingleTableById = ({ tables }, tableId) => tables
  .find(table => (table.id === tableId));

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const ADD_TABLE = createActionName('ADD_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const addTable = payload => ({ type: ADD_TABLE, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });
export const removeTable = payload => ({ type: REMOVE_TABLE, payload });
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    dispatch(updateLoading(true));
    fetch('http://localhost:3131/tables')
      .then(response => {
        if (response.status === 200) {
          return response.json()
            .then(tables => {
              dispatch(updateTables(tables));
              dispatch(updateLoading(false));
            });
        }
        else { 
          // error = 1;
         }
      });
  };
};

export const editTablesRequest = (editTables) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(editTables)
    };

    fetch('http://localhost:3131/tables/' + editTables.id, options)
      .then(() => dispatch(editTable(editTables)))
  };
}



// https://youtu.be/wmmTOT8tL68
// export const addTableRequest = (newTable) => {
//   return (dispatch) => {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTable),
//     };

//     fetch('http://localhost:3131/tables', options)
//       .then(() => dispatch(addTable(newTable)))
//   };
// };

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...statePart, { ...action.payload, id: nanoid() }];
    case EDIT_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    case REMOVE_TABLE:
      return statePart.filter(table => table.id !== action.payload)
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
}

export default tablesReducer;