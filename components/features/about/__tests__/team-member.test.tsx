import { render, screen } from '@testing-library/react'
import { TeamMember } from '../team-member'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} fill={props.fill ? "true" : undefined} />
  },
}))

const mockProps = {
  name: "John Doe",
  role: "Software Engineer",
  bio: "Experienced software engineer with a passion for technology",
  certifications: ["AWS Certified", "Google Cloud Professional"],
  imageUrl: "/john-doe.jpg",
  index: 0
}

describe('TeamMember Component', () => {
  beforeEach(() => {
    render(<TeamMember {...mockProps} />)
  })

  it('renders member name and role correctly', () => {
    expect(screen.getByText(mockProps.name)).toBeInTheDocument()
    expect(screen.getByText(mockProps.role)).toBeInTheDocument()
  })

  it('renders member bio', () => {
    expect(screen.getByText(mockProps.bio)).toBeInTheDocument()
  })

  it('renders all certifications', () => {
    mockProps.certifications.forEach(cert => {
      expect(screen.getByText(cert)).toBeInTheDocument()
    })
  })

  it('renders member image with correct attributes', () => {
    const image = screen.getByAltText(mockProps.name)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', mockProps.imageUrl)
    expect(image).toHaveClass('object-cover')
  })

  it('has correct responsive layout classes', () => {
    const container = screen.getByRole('heading', { name: mockProps.name }).closest('div')?.parentElement?.parentElement
    expect(container).toHaveClass('flex', 'flex-col', 'md:flex-row', 'gap-8', 'items-start')
  })

  it('has correct image container classes', () => {
    const imageContainer = screen.getByAltText(mockProps.name).parentElement
    expect(imageContainer).toHaveClass('relative', 'w-full', 'md:w-1/3', 'aspect-square', 'rounded-lg', 'overflow-hidden')
  })
})
