import React from 'react'
import { Badge } from 'react-bootstrap'

const BadgeStore = (prop) => (
  <>
  <Badge variant={prop.color}>{prop.text}</Badge>{' '}
  </>
)

export default BadgeStore
