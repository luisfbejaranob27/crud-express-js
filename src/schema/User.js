const { z } = require('zod')

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(13).max(18),
  address: z.string()
})

function validateUser(user) {
  return userSchema.safeParse(user)
}

module.exports = { validateUser, userSchema }
