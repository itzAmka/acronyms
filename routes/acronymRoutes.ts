import express from 'express'

const router = express.Router()

/**
 * @route /api/acronyms
 * @method GET
 * @description Get all acronyms
 * @access Public
 */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all acronyms' })
})

/**
 * @route /api/acronyms/:id
 * @method GET
 * @description - Get acronym by id
 * @param { string } id
 * @access Public
 */
router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'Get acronym by id' })
})

/**
 * @route /api/acronyms
 * @method POST
 * @description Create acronym
 * @access Public
 */
router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create acronym' })
})

/**
 * @route /api/acronyms/:id
 * @method PATCH
 * @description Update acronym
 * @param { string } id
 * @access Public
 */
router.patch('/:id', (req, res) => {
  res.status(200).json({ message: 'Update acronym' })
})

/**
 * @route /api/acronyms/:id
 * @method DELETE
 * @description Delete acronym
 * @param { string } id
 * @access Public
 */
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Delete acronym' })
})


export default router