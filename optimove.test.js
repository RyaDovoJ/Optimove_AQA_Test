const axios = require('axios')

describe('Optimove Careers Page Test', () => {
  it('Verify an open position for QA Automation Engineer in UKR office', async () => {
    try {
      // Make the POST request to filter positions by UKR office
      const response = await axios.post('https://www.optimove.com/careers/', {
        countries: ['UKR'],
      })

      // Extract the positions data from the response
      const positions = response.data;

      // Ensure positions is an array
      if (!Array.isArray(positions)) {
        throw new Error('Positions data is not an array.')
      }

      // Check if there is an open position for QA Automation Engineer
      const AQAEngineerPosition = positions.find(
        (position) => position.title === 'QA Automation Engineer' && position.status === 'Opened'
      )

      // Assertion
      expect(AQAEngineerPosition).toBeTruthy()
    } catch (error) {
      // Handle any errors that might occur during the request or assertion
      console.error('Error:', error.message)
      throw error
    }
  })
})
