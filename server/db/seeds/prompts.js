/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = (knex) => {
  return knex('prompts')
    .del()
    .then(() => {
      return knex('prompts').insert([
        {
          id: 1,
          prompt: ' Write a stream-of-consciousness with no clear goal.',
          category: 'Mindfulness',
        },
        {
          id: 2,
          prompt: 'How do you feel in your body right now? ',
          category: 'Mindfulness',
        },
        {
          id: 3,
          prompt: 'Where did you notice beauty today?',
          category: 'Mindfulness',
        },
        {
          id: 4,
          prompt: 'If you knew you wouldn’t fail, what would you do?',
          category: 'Self-reflection',
        },
        {
          id: 5,
          prompt:
            'What intention will you set for your physical and mental well-being today?',
          category: 'Self-reflection',
        },
        {
          id: 6,
          prompt: 'What habit do you want to focus on and why?',
          category: 'Self-reflection',
        },
        {
          id: 7,
          prompt: 'What did you learn today?',
          category: 'Self-reflection',
        },
        {
          id: 8,
          prompt: 'How can you celebrate yourself today?',
          category: 'Self-reflection',
        },
        {
          id: 9,
          prompt: 'How can you step outside your comfort zone to grow?',
          category: 'Self-reflection',
        },
        {
          id: 10,
          prompt: "How do you remind yourself that you're enough?",
          category: 'Self-reflection',
        },
        {
          id: 11,
          prompt:
            'Think about yourself, your relationships, your career, etc. Write about how you would change any of these areas of your life if you could.',
          category: 'creative',
        },
        {
          id: 12,
          prompt:
            'Is there someone you’d like to thank but can’t for some reason? Write a letter to that person, even if you never send it',
          category: 'creative',
        },
        {
          id: 13,
          prompt: 'Who do you look up to and why?',
          category: 'creative',
        },
      ])
    })
}
