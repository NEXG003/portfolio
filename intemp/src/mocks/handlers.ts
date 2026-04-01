import { rest } from 'msw'

export const handlers = [
    rest.get('/api/templates', (req, res, ctx) => {
        return res(
            ctx.json([
                { id: '1', title: 'Top 10 Trend', description: 'Fast cuts with zooms' },
                { id: '2', title: 'Before/After', description: 'Split transitions' },
            ])
        )
    }),
]
