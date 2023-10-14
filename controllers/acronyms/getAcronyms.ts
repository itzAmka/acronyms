import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler';
import { prisma } from '../../config/prisma'

/**
 * @controller Get Acronyms
 * @route /api/acronyms
 * @method GET
 * @description Get all acronyms
 * @access Public
 */
export const getAcronyms = asyncHandler(async (req: Request, res: Response) => {
  // get all acronyms from db
  const acronyms = await prisma.acronym.findMany()
  
  res.status(200).json({
    success: true,
    error: null,
    results: acronyms,
  })
})