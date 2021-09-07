import { complete, incomplete } from '../types/storeType';
import {
  markCompleteActionCreator,
  markIncompleteActionCreator,
  deleteTodoActionCreator,
} from '../types/actionCreatorType';

interface AppPropType {
  complete: complete;
  incomplete: incomplete;
  markComplete: markCompleteActionCreator;
  markIncomplete: markIncompleteActionCreator;
  deleteTodo: deleteTodoActionCreator;
}

export default AppPropType;
