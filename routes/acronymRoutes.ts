import express from 'express'
import { getAcronyms } from '../controllers/acronyms/getAcronyms'
import { getAcronym } from '../controllers/acronyms/getAcronym'
import { createAcronym } from '../controllers/acronyms/createAcronym'
import { deleteAcronym } from '../controllers/acronyms/deleteAcronym'
import { updateAcronym } from '../controllers/acronyms/updateAcronym'

const router = express.Router()

/**
 * @route /api/acronyms
 * @method GET
 * @description Get all acronyms
 * @access Public
 */
router.get('/', getAcronyms)

/**
 * @route /api/acronyms/:id
 * @method GET
 * @description - Get acronym by id
 * @param /:id - acronym id
 * @access Public
 */
router.get('/:id', getAcronym)

/**
 * @route /api/acronyms
 * @method POST
 * @description Create acronym
 * @body { acronym: string, definition: string} - acronym and definition
 * @access Public
 */
router.post('/', createAcronym)

/**
 * @route /api/acronyms/:id
 * @method PATCH
 * @description Update acronym
 * @params /:id - acronym id
 * @access Public
 */
router.patch('/:id', updateAcronym)

/**
 * @route /api/acronyms/:id
 * @method DELETE
 * @description Delete acronym
 * @params /:id - acronym id
 * @access Public
 */
router.delete('/:id', deleteAcronym)


export default router