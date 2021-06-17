
import { Heading, Card, Columns, Button } from 'react-bulma-components'

import Layout from '@components/layout'

export default function HomePage () {
  const items = [
    {
      title: 'General smart contract template',
      description: `
        Looking to start a new Solidity based smart contract? Use this starter template to
        give yourself a headstart.
      `,
      link: 'https://github.com/Future-Web-Tools/smart-contract-template',
      action: 'See the repo'
    },
    {
      title: 'ERC20 smart contract template',
      description: `
        This template only requires you to update 3 placeholders to have a secure and well-crafted token contract.
      `,
      link: 'https://github.com/Future-Web-Tools/erc20-smart-contract-template',
      action: 'See the repo'
    },
    {
      title: 'NextJs + Web3 fullstack template',
      description: `
        The ultimate fullstack template for your dapp with Web3 integration, secure one-click sign-in, Personas integration and more.
      `,
      link: 'https://future-web-nextjs.herokuapp.com/',
      action: 'See demo'
    },
    {
      title: 'Personas - plug-and-play social layer',
      description: `
        Personas.Space is a next-generation social layer that brings the conventional networking to EVM blockchains.
      `,
      link: 'https://personas.space',
      action: 'Get started'
    }
  ]

  const goExternal = link => window.open(link)

  return (
    <Layout>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Heading> Open-source resources for EVM chains </Heading>
      </div>

      <Columns>
        {items.map((item, index) => {
          return (
            <Columns.Column size='half' key={index}>
              <Card style={{ margin: 'auto', textAlign: 'center' }}>
                <Card.Content>
                  <Heading size={4}> {item.title} </Heading>

                  <Heading style={{ margin: '2rem 0', fontSize: '120%' }} subtitle size={6}> {item.description} </Heading>

                  <Button color='info' fullwidth onClick={() => goExternal(item.link)}>
                    <b> {item.action} </b>
                  </Button>
                </Card.Content>
              </Card>
            </Columns.Column>
          )
        })}
      </Columns>
    </Layout>
  )
}
