import server from '../server';
//import fetch from 'node-fetch';
import fetch from 'isomorphic-fetch'

let httpServer;

beforeAll(async () => { httpServer = await server });

it('serves the Next.js app', async () => {
    const res = await fetch(`http://localhost:${httpServer.address().port}`)
    expect(await res.text()).toBe('Welcome to Next.js!')
})

afterAll(() => httpServer.close())