import {TASK_FEATURE_NAME} from '../features/tasks/store/task.reducer';
import {TaskState} from '../features/tasks/task.model';
import {PROJECT_FEATURE_NAME, ProjectState} from '../features/project/store/project.reducer';
import {NOTE_FEATURE_NAME, NoteState} from '../features/note/store/note.reducer';
import {BOOKMARK_FEATURE_NAME, BookmarkState} from '../features/bookmark/store/bookmark.reducer';
import {LAYOUT_FEATURE_NAME, LayoutState} from '../core-ui/layout/store/layout.reducer';
import {CONFIG_FEATURE_NAME} from '../features/config/store/global-config.reducer';
import {ATTACHMENT_FEATURE_NAME, AttachmentState} from '../features/attachment/store/attachment.reducer';
import {GlobalConfigState} from '../features/config/global-config.model';
import {WORK_CONTEXT_FEATURE_NAME} from '../features/work-context/store/work-context.reducer';
import {WorkContextState} from '../features/work-context/work-context.model';
import {UNDO_TASK_DELETE, UndoTaskDeleteState} from './meta/undo-task-delete.meta-reducer';
import {TAG_FEATURE_NAME} from '../features/tag/store/tag.reducer';
import {TagState} from '../features/tag/tag.model';

export interface RootState {
  [TASK_FEATURE_NAME]: TaskState;
  [WORK_CONTEXT_FEATURE_NAME]: WorkContextState;
  [PROJECT_FEATURE_NAME]: ProjectState;
  [TAG_FEATURE_NAME]: TagState;
  [NOTE_FEATURE_NAME]: NoteState;
  [BOOKMARK_FEATURE_NAME]: BookmarkState;
  [LAYOUT_FEATURE_NAME]: LayoutState;
  [CONFIG_FEATURE_NAME]: GlobalConfigState;
  [ATTACHMENT_FEATURE_NAME]: AttachmentState;
  [UNDO_TASK_DELETE]: UndoTaskDeleteState;
}
