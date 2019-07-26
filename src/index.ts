import { Machine, sendParent } from 'xstate'

export const someMachine = Machine({
  states: {
    one: {
      on: {
        '': {
          target: 'two',
          actions: [
            sendParent('parent'),
            sendParent(ctx => ({ type: 'parent', ctx })),
          ],
        },
      },
    },
    two: {},
  },
})
