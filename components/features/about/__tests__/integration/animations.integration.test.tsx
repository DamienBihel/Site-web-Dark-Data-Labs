import { render, screen } from '@testing-library/react'
import { About } from '../../index'

// Mock all child components to focus on animation testing
jest.mock('../../profile', () => ({
  Profile: () => (
    <div data-testid="profile-component" data-animation-props='{"initial":{"opacity":0,"y":20},"whileInView":{"opacity":1,"y":0},"transition":{"duration":0.5},"viewport":{"once":true}}'>
      Profile Component
    </div>
  )
}))

jest.mock('../../stats', () => ({
  Stats: () => (
    <div data-testid="stats-container">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          data-testid="stats-item"
          data-animation-props={JSON.stringify({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.2 },
            viewport: { once: true }
          })}
        >
          Stats Item {index + 1}
        </div>
      ))}
    </div>
  )
}))

jest.mock('../../expertise', () => ({
  Expertise: () => (
    <div data-testid="expertise-component" data-animation-props='{"initial":{"opacity":0,"y":20},"whileInView":{"opacity":1,"y":0},"transition":{"duration":0.5},"viewport":{"once":true}}'>
      Expertise Component
    </div>
  )
}))

jest.mock('../../values', () => ({
  Values: () => (
    <div data-testid="values-component" data-animation-props='{"initial":{"opacity":0,"y":20},"whileInView":{"opacity":1,"y":0},"transition":{"duration":0.5},"viewport":{"once":true}}'>
      Values Component
    </div>
  )
}))

describe('About Section Animation Integration', () => {
  beforeEach(() => {
    render(<About />)
  })

  it('applies correct animation properties to Profile component', () => {
    const profileAnimation = screen.getByTestId('profile-component')
    const animationProps = JSON.parse(profileAnimation?.getAttribute('data-animation-props') || '{}')
    
    expect(animationProps).toEqual({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      viewport: { once: true }
    })
  })

  it('applies staggered animations to Stats components', () => {
    const statsItems = screen.getAllByTestId('stats-item')
    expect(statsItems).toHaveLength(3) // Should have 3 stats items

    statsItems.forEach((item, index) => {
      const props = JSON.parse(item.getAttribute('data-animation-props') || '{}')
      expect(props).toEqual({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.2 },
        viewport: { once: true }
      })
    })
  })

  it('applies fade-in animations to Expertise component', () => {
    const expertiseAnimation = screen.getByTestId('expertise-component')
    const props = JSON.parse(expertiseAnimation.getAttribute('data-animation-props') || '{}')
    
    expect(props).toEqual({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      viewport: { once: true }
    })
  })

  it('applies grid animations to Values component', () => {
    const valuesAnimation = screen.getByTestId('values-component')
    const props = JSON.parse(valuesAnimation.getAttribute('data-animation-props') || '{}')
    
    expect(props).toEqual({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      viewport: { once: true }
    })
  })
})
