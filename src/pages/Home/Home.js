import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PropTypes from 'prop-types'
import { CardMaker, TodoCardList, Fetcher, Options, Modal, LimitAlert } from '~components'

const Home = ({ hasReachedLimit, onAddNew }) => (
  <>
    <Container>
      <Row className="mt-4">
        <Col className="m-auto" xs="12">
          <CardMaker hasReachedLimit={hasReachedLimit} onAddNew={onAddNew} />
        </Col>
      </Row>
    </Container>
    <TodoCardList />
    <Fetcher hasReachedLimit={hasReachedLimit} />
    <Options />
    {hasReachedLimit && <LimitAlert />}
    <Modal />
  </>
)

Home.propTypes = {
  hasReachedLimit: PropTypes.bool.isRequired,
  onAddNew: PropTypes.func.isRequired
}

export default Home