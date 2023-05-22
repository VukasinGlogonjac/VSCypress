export const storyTask = (taskName, boardId) => {
    return {
        board_id: boardId,
        isOnSprint: true,
        item: {
          name: taskName,
          board_id: boardId,
          priority_id: 2,
          taskvalue_id: 1,
          type_id: 1,
          reviewers: [],
          sprint_backlog_column_id: null,
          sprint_id: null
        }
    }
}