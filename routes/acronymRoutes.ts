import express from 'express'
import { getAcronyms } from '../controllers/acronyms/getAcronyms'
import { getAcronym } from '../controllers/acronyms/getAcronym'
import { createAcronym } from '../controllers/acronyms/createAcronym'
import { deleteAcronym } from '../controllers/acronyms/deleteAcronym'
import { updateAcronym } from '../controllers/acronyms/updateAcronym'

const router = express.Router()

/**
 * @route /api/acronym
 * @method GET
 * @description Get all acronym
 * @access Public
 */
router.get('/', getAcronyms)

/**
 * @route /api/acronym/:id
 * @method GET
 * @description - Get acronym by id
 * @param /:id - acronym id
 * @access Public
 */
router.get('/:id', getAcronym)

/**
 * @route /api/acronym
 * @method POST
 * @description Create acronym
 * @body { acronym: string, definition: string} - acronym and definition
 * @access Public
 */
router.post('/', createAcronym)

/**
 * @route /api/acronym/:id
 * @method PATCH
 * @description Update acronym
 * @params /:id - acronym id
 * @body { acronym: string, definition: string} - acronym and definition
 * @access Public
 */
router.patch('/:id', updateAcronym)

/**
 * @route /api/acronym/:id
 * @method DELETE
 * @description Delete acronym
 * @params /:id - acronym id
 * @access Public
 */
router.delete('/:id', deleteAcronym)


export default router