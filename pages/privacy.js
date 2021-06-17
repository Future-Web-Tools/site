
import { Box, Section, Container, Heading } from 'react-bulma-components'

import Layout from '@components/layout'

export default function PrivacyPage () {
  return (
    <Layout>
      <Box style={{ margin: 'auto' }}>
        <Section>
          <Container>
            <Heading>
              Privacy Policy
            </Heading>

            <Heading style={{ marginTop: '1rem' }} subtitle>
              We do not monitor or track users or their activities on this site.
            </Heading>
          </Container>
        </Section>

      </Box>
    </Layout>
  )
}
