import { Router } from 'express'
import { name, version, author } from '../../package'

export const router = Router()

router.get('/', (_req, res) => res.json({ name, version, author }))

router.get('/ping', (_req, res) => res.send('pong'))

router.get('/healthz', (_req, res) => res.send('OK'))
